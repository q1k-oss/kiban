<div align="center">
  <img src="public/logo.png" alt="Kiban Logo" width="150" height="150"/>
</div>

<h1 align="center">Kiban (基盤)</h1>

<div align="center">
  Foundation for your React interfaces - A UI Component Library
</div>

<br/>

<div align="center">
  <a href="https://www.npmjs.com/package/@q1k-oss/kiban">
    <img src="https://img.shields.io/npm/v/@q1k-oss/kiban.svg?style=for-the-badge&label=VERSION" alt="NPM Version"/>
  </a>
  <a href="https://www.npmjs.com/package/@q1k-oss/kiban">
    <img src="https://img.shields.io/npm/dm/@q1k-oss/kiban.svg?style=for-the-badge" alt="NPM Downloads"/>
  </a>
  <a href="https://github.com/q1k-oss/kiban/graphs/contributors">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/q1k-oss/kiban?style=for-the-badge"/>
  </a>
  <a href="https://github.com/q1k-oss/kiban/actions">
    <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/q1k-oss/kiban/publish.yml?style=for-the-badge&label=NPM%20BUILD"/>
  </a>
</div>

---

## Description

**Kiban** (基盤) means "foundation," "base," or "infrastructure" in Japanese. It is a React component library designed to provide a solid foundation of reusable and customizable UI components. Built on top of Radix UI primitives and styled with Tailwind CSS.

---

## Installation

```sh
npm install @q1k-oss/kiban
```

---

## Usage

```jsx
import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@q1k-oss/kiban";

const MyComponent = () => (
  <Tabs defaultValue="preview">
    <TabsList>
      <TabsTrigger value="preview">Preview</TabsTrigger>
      <TabsTrigger value="code">Code</TabsTrigger>
    </TabsList>
    <TabsContent value="preview">Preview Content</TabsContent>
    <TabsContent value="code">Code Content</TabsContent>
  </Tabs>
);

export default MyComponent;
```

---

## Styles

Import the stylesheet in your main styles file or App.ts:

```css
@import "@q1k-oss/kiban/styles/kiban.css";
@source '../node_modules/@q1k-oss/kiban';
```

---

## Development

```sh
# Start the documentation site
npm run www:dev

# Build the component library
npm run build:package

# Build the documentation site
npm run www:build
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Clone your fork:
   ```sh
   git clone https://github.com/q1k-oss/kiban.git
   ```
3. Create a feature branch: `git checkout -b my-feature`
4. Install dependencies: `npm install`
5. Make your changes and commit: `git commit -m "feat: add new feature"`
6. Push and open a pull request

---

## License

This project is licensed under the MIT License.
