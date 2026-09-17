<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/logo-dark.svg">
    <img src=".github/logo.svg" alt="Kiban" width="88">
  </picture>
</p>

<h1 align="center">@q1k-oss/kiban</h1>

<p align="center"><strong>The interface layer</strong></p>

<p align="center">
  React components on Radix primitives and Tailwind.<br>
  Kiban (基盤) means "foundation" — accessible building blocks you own and restyle.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@q1k-oss/kiban"><img src="https://img.shields.io/npm/v/@q1k-oss/kiban.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@q1k-oss/kiban"><img src="https://img.shields.io/npm/dm/@q1k-oss/kiban.svg" alt="npm downloads"></a>
  <a href="https://github.com/q1k-oss/kiban/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT"></a>
</p>

<p align="center">
  <a href="https://github.com/q1k-oss/kiban/tree/main/content/docs"><strong>Docs</strong></a> ·
  <a href="https://www.npmjs.com/package/@q1k-oss/kiban"><strong>npm</strong></a> ·
  <a href="https://github.com/q1k-oss/kiban"><strong>GitHub</strong></a> ·
  <a href="https://q1k.ai/oss"><strong>q1k-oss</strong></a>
</p>

---

## Overview

Kiban is a React component library built on [Radix UI](https://www.radix-ui.com/) primitives
and styled with [Tailwind CSS](https://tailwindcss.com/). It follows the shadcn/ui house
style — unstyled behaviour from Radix, appearance from Tailwind utility classes and CSS
variables — but ships as a versioned npm package rather than as files you copy in.

That trade is the point. You install one dependency, import components, and upgrade them
like any other package. Theming still happens entirely in your own CSS: every colour,
radius and shadow resolves through CSS custom properties that you are free to redefine.

Alongside the roughly 50 shadcn-style primitives, Kiban carries components that do not
exist in the shadcn catalogue — a phone input, a stepper, a rich text editor, a workflow
canvas, a blog preview renderer, share buttons and an icon set — plus a second entrypoint
for rendering open-graph images from Next.js.

## Highlights

- **~50 accessible primitives** — accordion through tooltip, all on Radix, all keyboard and
  screen-reader friendly by default.
- **Beyond shadcn** — `PhoneInput`, `Stepper`, `TextEditor`, `WorkflowCanvas`,
  `BlogPreview`, `SocialShareButtons`, `AppIcon`, `BorderMovingWrapper`.
- **CSS-variable theming** — one stylesheet import, light and dark out of the box, every
  token overridable in your own `globals.css`.
- **Open-graph subpath** — `@q1k-oss/kiban/og` renders blog OG cards through the Next.js
  `ImageResponse` API.
- **Typed end to end** — TypeScript throughout, with declarations shipped in `dist/`.
- **React 18 and 19** — both are supported peer dependencies.

## Install

```sh
npm install @q1k-oss/kiban
```

React and React DOM are peer dependencies (`^18` or `^19`) and are not bundled.

## Quick start

Import the stylesheet once, at the top of your global CSS, and point Tailwind at the
package so it can see the class names Kiban ships with:

```css
@import "@q1k-oss/kiban/styles/kiban.css";
@source '../node_modules/@q1k-oss/kiban';
```

Then use components directly:

```jsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@q1k-oss/kiban";

export default function Example() {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">Preview content</TabsContent>
      <TabsContent value="code">Code content</TabsContent>
    </Tabs>
  );
}
```

## Usage

### Theming

`kiban.css` defines the design tokens as CSS custom properties and ships both a light and a
dark scale. Override any of them after the import to restyle the whole library:

```css
@import "@q1k-oss/kiban/styles/kiban.css";

:root {
  --primary: oklch(0.55 0.18 264);
  --radius: 0.75rem;
}
```

Dark mode is a Tailwind custom variant that matches either `[data-theme="dark"]` or a
`.dark` class on any ancestor, so it works with `next-themes` as well as a hand-rolled
theme toggle.

### Composing with `cn`

Every component forwards `className`, and the `cn` helper merges Tailwind classes without
specificity fights:

```jsx
import { Button, cn } from "@q1k-oss/kiban";

<Button className={cn("w-full", isDanger && "bg-destructive")}>Delete</Button>;
```

### Forms

The form primitives are built for `react-hook-form`; `Form`, `FormField`, `FormItem`,
`FormLabel`, `FormControl`, `FormDescription` and `FormMessage` wire validation state and
accessible error messaging to any input in the library.

```jsx
import { Form, FormField, FormItem, FormLabel, FormControl, Input } from "@q1k-oss/kiban";
import { useForm } from "react-hook-form";

const form = useForm({ defaultValues: { email: "" } });

<Form {...form}>
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input placeholder="you@example.com" {...field} />
        </FormControl>
      </FormItem>
    )}
  />
</Form>;
```

### Open-graph images

The `og` subpath is separate so that the font loading and image helpers never reach your
client bundle. Use it from a Next.js route handler:

```tsx
import { ImageResponse } from "next/og";
import { BlogOgImage, loadOgFonts, DEFAULT_OG_BG_DATA_URL } from "@q1k-oss/kiban/og";

export async function GET() {
  const fonts = await loadOgFonts();
  return new ImageResponse(
    <BlogOgImage title="Hello world" background={DEFAULT_OG_BG_DATA_URL} />,
    { width: 1200, height: 630, fonts },
  );
}
```

## API reference

Every component has a page with props and live examples under
[`content/docs/`](https://github.com/q1k-oss/kiban/tree/main/content/docs). Run
`npm run www:dev` to browse them locally.

| Group | Exports |
| --- | --- |
| **Layout** | `AspectRatio`, `Card`, `Resizable`, `ScrollArea`, `Separator`, `Sheet`, `Sidebar`, `Collapsible` |
| **Navigation** | `Breadcrumb`, `Menubar`, `NavigationMenu`, `Pagination`, `Tabs`, `Stepper` |
| **Overlays** | `Dialog`, `AlertDialog`, `Drawer`, `Popover`, `HoverCard`, `Tooltip`, `ContextMenu`, `DropdownMenu`, `Command` |
| **Forms** | `Form`, `Input`, `InputOTP`, `PhoneInput`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `Toggle`, `ToggleGroup`, `Label`, `Calendar` |
| **Feedback** | `Alert`, `Badge`, `Progress`, `Skeleton`, `Toaster` / `kibanToast` / `kibanActionableToast`, `Chart` |
| **Data** | `Table`, `Accordion`, `Avatar`, `Carousel` |
| **In-house** | `TextEditor`, `BlogPreview`, `WorkflowCanvas`, `SocialShareButtons`, `AppIcon`, `BorderMovingWrapper` |
| **Utilities** | `cn`, `variants` (button `cva` config), `CustomIcons` |

Subpaths:

| Import | Contents |
| --- | --- |
| `@q1k-oss/kiban` | All components, hooks and utilities |
| `@q1k-oss/kiban/og` | `BlogOgImage`, `loadOgFonts`, `DEFAULT_OG_BG_DATA_URL` |
| `@q1k-oss/kiban/styles/kiban.css` | Design tokens and base styles |

## Development

The repository is both the library and its documentation site. Library sources live in
`components/`, re-exported from `index.ts` and compiled by gulp and webpack into `dist/`.
The docs site is Next.js 15 with [fumadocs](https://fumadocs.dev/), and its scripts are
namespaced `www:*` so they stay clear of the package build.

```sh
npm install

npm run build:package   # build the library into dist/
npm run build:watch     # rebuild on change
npm run www:dev         # run the documentation site
npm run www:build       # build the documentation site
npm run lint            # eslint
```

Adding a component means a module in `components/ui/`, an export from
`components/index.ts`, and a matching MDX page in `content/docs/`.

## Contributing

Contributions are welcome.

1. Fork the repository and clone your fork.
2. Create a branch: `git checkout -b feat/my-change`.
3. `npm install`, then `npm run build:package` to confirm the library still compiles.
4. Add or update the MDX page in `content/docs/` for anything user-facing.
5. Commit using [Conventional Commits](https://www.conventionalcommits.org/) and open a
   pull request.

## Related projects

Kiban is part of the q1k-oss family — see [q1k.ai/oss](https://q1k.ai/oss).

| Package | What it does |
| --- | --- |
| [`@q1k-oss/mint-format`](https://github.com/q1k-oss/mint) | Token-efficient data format for LLM prompts |
| [`@q1k-oss/context-engine`](https://github.com/q1k-oss/context-engine) | Turns conversations and files into a versioned knowledge graph |
| [`@q1k-oss/behaviour-tree-workflows`](https://github.com/q1k-oss/behaviour-tree-workflows) | Declarative behaviour trees in YAML, durable via Temporal |
| [`@q1k-oss/kiban`](https://github.com/q1k-oss/kiban) | React components on Radix primitives and Tailwind |

## License

[MIT](LICENSE)
