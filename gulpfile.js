const path = require('path');

const gulp = require('gulp');
const ts = require('gulp-typescript');
const merge = require('merge2');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const through2 = require('through2');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

function addJsExtensions() {
  return through2.obj(function (file, _, next) {
    const filePath = file.path;
    
    if (filePath.endsWith('.js') && (filePath.includes('dist/esm') || filePath.includes('esm') || filePath.includes('components'))) {
      let content = file.contents.toString();
      
      // Match export * from './path' patterns and add .js extensions
      content = content.replace(/export \* from ['"]\.\/([^'"]+)['"]/g, (match, path) => {
        // Only add .js if it doesn't already have an extension
        if (!path.includes('.')) {
          return match.replace(path, path + '.js');
        }
        return match;
      });
      
      file.contents = Buffer.from(content);
    }
    this.push(file);
    next();
  });
}

const pkg = require('./package.json');


function insertUseClient() {
  const header = '"use client"\n';
  return through2.obj(function (file, _, next) {
    const { path: filepath } = file;
    if (
      /components\/index\.(ts|tsx)$/.test(filepath)
    ) {
      file.contents = Buffer.concat([Buffer.from(header), file.contents]);
    }
    this.push(file);
    next();
  });
}

function buildCommonJS() {
  const webpackConfig = {
    mode: 'production',
    output: {
      filename: 'ethereal.min.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'commonjs2',
    },
    resolve: {
      modules: ['node_modules', path.join(__dirname, '../node_modules'), path.join(__dirname), path.join(__dirname, 'utils')],
      extensions: [
        '.web.tsx',
        '.web.ts',
        '.web.jsx',
        '.web.js',
        '.ts',
        '.tsx',
        '.js',
        '.jsx',
        '.json',
      ],
      alias: {
        [pkg.name]: process.cwd(),
        ["ethereal-ui"]: path.resolve(__dirname, 'components'),
        ["@/utils"]: path.resolve(__dirname, 'utils'),
      },
      fallback: [
        'child_process',
        'cluster',
        'dgram',
        'dns',
        'fs',
        'module',
        'net',
        'readline',
        'repl',
        'tls',
      ].reduce(
        (acc, name) => ({
          ...acc,
          [name]: false,
        }),
        {},
      ),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react',
                  '@babel/preset-typescript',
                ],
              },
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[hash:7].[ext]',
            outputPath: 'images',
          },
        },
        {
          test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[hash:7].[ext]',
            outputPath: 'images',
          },
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    optimization: {
      usedExports: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            warnings: false,
          },
        }),
      ],
    },
    stats: {
      errorDetails: true,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
  };

  return gulp
    .src('components/index.ts')
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('dist'));
}

function buildESModule() {
  const tsResult = gulp
    .src(['components/index.tsx', 'components/**/*.{ts,tsx}'])
    .pipe(insertUseClient())
    .pipe(ts({
      noUnusedParameters: false,
      noUnusedLocals: false,
      strictNullChecks: false,
      target: 'es6',
      jsx: 'react-jsx',
      moduleResolution: 'node',
      declaration: true,
      allowSyntheticDefaultImports: true,
      strict: false,
      skipLibCheck: true,
      stripInternal: true,
      noImplicitAny: false,
      esModuleInterop: true,
      experimentalDecorators: true,
      module: 'esnext',
      baseUrl: './',
      resolveJsonModule: true,
      lib: [ 'dom', 'es2017' ],
      paths: {
        'ethereal-ui': ['.'],
        'ethereal-ui/*': ['./*'],
      },
      allowJs: true
    }));

  return merge([
    tsResult.dts.pipe(gulp.dest('dist/esm').on('error', function (error) {
      console.error('TypeScript dts compilation error:', error);
      this.emit('done');
    })),
    tsResult.js.pipe(addJsExtensions()).pipe(gulp.dest('dist/esm').on('error', function (error) {
      console.error('TypeScript js compilation error:', error);
      this.emit('done');
    })),
  ]);
}

gulp.task('compile-es', () => {
  console.log('[Parallel] Compile to ESM...');
  return buildESModule();
});

gulp.task('compile-commonjs', () => {
  console.log('[Parallel] Compile to CommonJS...');
  return buildCommonJS();
});

gulp.task(
  'compile',
  gulp.series(
    gulp.parallel(
      'compile-commonjs',
      'compile-es',
    ),
  ),
);