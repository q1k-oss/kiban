<div align="center">
  <img src="public/logo.png" alt="Ethereal UI Logo" width="150" height="150"/>
</div>

<h1 align="center">Ethereal UI</h1>

<div align="center">
  Ethereal Garden - A React UI Component Library
</div>

<br/>

<div align="center">
  <a href="https://www.npmjs.com/package/ethereal-ui">
    <img src="https://img.shields.io/npm/v/ethereal-ui.svg?style=for-the-badge&label=VERSION" alt="NPM Version"/>
  </a>
  <a href="https://www.npmjs.com/package/ethereal-ui">
    <img src="https://img.shields.io/npm/dm/ethereal-ui.svg?style=for-the-badge" alt="NPM Downloads"/>
  </a>
  <a href="https://github.com/Invier/ethereal-garden/graphs/contributors">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/invier/ethereal-garden?style=for-the-badge"/>
  </a>
  <a href="https://github.com/Invier/ethereal-garden/actions">
    <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/invier/ethereal-garden/publish.yml?style=for-the-badge&label=NPM%20BUILD"/>
  </a>
  <img alt="Netlify" src="https://img.shields.io/netlify/9a0bb099-bcd9-4154-9246-6ea61c516d26?style=for-the-badge&label=WEBSITE%20BUILD"/>
</div>

---

## 📚 Description

Ethereal UI is a React component library designed to provide a set of reusable and customizable UI components. This library aims to help developers build beautiful and consistent user interfaces with ease.

---

## 📦 Installation

To install the library, run:

```sh
npm install ethereal-ui
```

---

## 💻 Example Usage

Here is an example of how to use the Tabs component from the library:

```jsx
import * as React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'ethereal-ui';

const MyComponent = () => (
  <Tabs defaultValue="preview">
    <TabsList>
      <TabsTrigger value="preview">Preview</TabsTrigger>
      <TabsTrigger value="code">Code</TabsTrigger>
    </TabsList>
    <TabsContent value="preview">
      Preview Content
    </TabsContent>
    <TabsContent value="code">
      Code Content
    </TabsContent>
  </Tabs>
);

export default MyComponent;
```

---

## 🎨 Adding Styles

To include the styles, import the `ethereal-ui/styles/ethereal.css` file in your main styles file or App.ts:

```css
@import 'ethereal-ui/styles/ethereal.css';
@source '../node_modules/ethereal-ui';
```

---

## 🛠️ Development

To start the development server, run:

```sh
npm run www:dev
```

To build the project, run:

```sh
npm run www:build
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository**: Click the "Fork" button at the top right corner of the repository page to create a copy of the repository in your GitHub account.

2. **Clone the repository**: Clone your forked repository to your local machine using the following command:

  ```sh
  git clone https://github.com/Invier/ethereal-garden.git
  ```

3. **Create a new branch**: Create a new branch for your feature or bug fix:

  ```sh
  git checkout -b my-feature-branch
  ```

4. **Install dependencies**: Install the project dependencies:

5. **Make your changes**: Make your changes to the codebase. Ensure that your code follows the project's coding standards and conventions.

6. **Run tests**: Run the tests to ensure that your changes do not break any existing functionality.

7. **Commit your changes**: Commit your changes with a descriptive commit message:

  ```sh
  git commit -m "Add new feature"
  ```

8. **Push your changes**: Push your changes to your forked repository:

  ```sh
  git push origin my-feature-branch
  ```

9. **Create a pull request**: Go to the original repository and create a pull request from your forked repository. Provide a clear and descriptive title and description for your pull request.

10. **Review process**: Your pull request will be reviewed by the maintainers. You may be asked to make additional changes before it is merged.

---

## 📜 License

This project is licensed under the MIT License.
