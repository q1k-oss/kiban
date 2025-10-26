# NPM Publishing Setup Guide

This guide explains how to set up and use the GitHub Action workflow for publishing your `ethereal-ui` package to NPM.

## 🔧 Initial Setup

### 1. NPM Token Setup

1. **Create an NPM account** (if you don't have one):
   - Go to [npmjs.com](https://www.npmjs.com) and sign up
   - Verify your email address

2. **Generate an NPM Access Token**:
   - Go to [NPM Access Tokens](https://www.npmjs.com/settings/tokens)
   - Click "Generate New Token"
   - Choose "Automation" for CI/CD usage
   - Copy the generated token

3. **Add NPM Token to GitHub Secrets**:
   - Go to your GitHub repository
   - Navigate to `Settings` → `Secrets and variables` → `Actions`
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Paste your NPM token
   - Click "Add secret"

### 2. Package Configuration

The workflow automatically handles:
- ✅ Setting `private: false` during publish
- ✅ Building the package using your existing `build:package` script
- ✅ Version bumping and tagging
- ✅ Creating GitHub releases

## 🚀 Publishing Methods

### Method 1: Automatic Publishing (Recommended)

**Push to main/master branch:**
```bash
git add .
git commit -m "feat: add new component [minor]"  # Use [major], [minor], or [patch]
git push origin main
```

The workflow will:
- Run tests and linting
- Automatically bump version based on commit message
- Publish to NPM
- Create a GitHub release
- Push version tag back to repository

### Method 2: Manual Publishing

**Using GitHub UI:**
1. Go to your repository on GitHub
2. Click `Actions` tab
3. Select "Publish NPM Package" workflow
4. Click "Run workflow"
5. Choose version bump type (patch/minor/major/prerelease)
6. Check "Publish to NPM"
7. Click "Run workflow"

### Method 3: Tag-based Publishing

**Create and push a version tag:**
```bash
git tag v1.2.3
git push origin v1.2.3
```

The workflow will publish the exact version specified in the tag.

## 🧪 Beta Publishing

**Feature branches automatically publish beta versions:**
```bash
git checkout -b feature/new-component
git add .
git commit -m "feat: add new component"
git push origin feature/new-component
```

This creates a beta version like: `0.0.0-pre-alpha.0.0-beta.feature-new-component.20241220123456`

## 📋 Workflow Features

### ✅ What the workflow does:

- **Testing**: Runs linting and build tests before publishing
- **Version Management**: Automatic semantic versioning
- **Security**: Uses NPM tokens securely via GitHub secrets
- **Beta Releases**: Automatic beta versions for feature branches
- **GitHub Releases**: Creates release notes automatically
- **Rollback Safety**: Dry-run testing before actual publish

### 🎯 Trigger Conditions:

| Trigger | Action | Version |
|---------|--------|---------|
| Push to `main`/`master` | Publish stable | Auto-bump based on commit |
| Push tag `v*` | Publish specific version | From tag |
| Feature branch push | Publish beta | Beta with timestamp |
| Manual workflow | Publish (optional) | User-selected bump |
| Pull request | Test only | No publish |

## 🔍 Version Bump Rules

**Commit message hints:**
- `[major]` → Major version bump (1.0.0 → 2.0.0)
- `[minor]` → Minor version bump (1.0.0 → 1.1.0)
- `[patch]` or default → Patch version bump (1.0.0 → 1.0.1)

**Examples:**
```bash
git commit -m "feat: add new Button component [minor]"
git commit -m "fix: resolve styling issue [patch]"
git commit -m "BREAKING: change API structure [major]"
```

## 🛠️ Troubleshooting

### Common Issues:

1. **"NPM_TOKEN not found"**
   - Ensure you've added the NPM token to GitHub secrets
   - Check the secret name is exactly `NPM_TOKEN`

2. **"Package name already exists"**
   - The package name `ethereal-ui` might be taken
   - Update the `name` field in `package.json` to something unique

3. **"Permission denied"**
   - Ensure your NPM token has publish permissions
   - Check if you're a member of the NPM organization (if applicable)

4. **Build failures**
   - Ensure all dependencies are properly listed in `package.json`
   - Test locally with `npm run build:package`

### Testing Locally:

```bash
# Test the build process
npm run build:package

# Test publish without actually publishing
npm run publish:dry

# Check what files will be included
npm pack --dry-run
```

## 📦 Package Information

- **Package Name**: `ethereal-ui`
- **Registry**: NPM Public Registry
- **Documentation**: https://ethereal.garden
- **Repository**: https://github.com/invier/ethereal-garden

## 🎉 Success!

Once set up, your workflow will:
- ✅ Automatically publish on every main branch push
- ✅ Create beautiful GitHub releases
- ✅ Handle version management
- ✅ Provide beta testing capabilities
- ✅ Maintain package quality with automated testing

Happy publishing! 🚀 