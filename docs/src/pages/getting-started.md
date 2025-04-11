---
layout: ../layouts/Layout.astro
title: 'Getting Started'
---

# Getting Started with e-layout

This guide will walk you through installing and using the `e-layout` components in your project.

## Installation

You can install `e-layout` using npm (or your preferred package manager like yarn or pnpm):

```bash
npm install e-layout
```

## Usage

`e-layout` provides standard Web Components that can be used in various environments, including plain HTML/JavaScript projects or with frameworks like React, Vue, Svelte, Angular, etc.

### 1. Importing Components

To use a component, you first need to import its definition to register the custom element with the browser. You can import components individually or import the main entry point to register all components.

**Importing Individually (Recommended for Production):**

This method is preferred as it allows bundlers (like Vite, Webpack, Rollup) to tree-shake unused components, resulting in smaller final bundle sizes.

```javascript
// In your main JavaScript or TypeScript file (e.g., main.js, app.ts)
import 'e-layout/box';
import 'e-layout/stack';
// Import other components as needed...
```

**Importing All Components:**

If you plan to use most of the components or for quick prototyping, you can import the main entry point.

```javascript
// Import all component definitions
import 'e-layout'; // Registers e-box, e-stack, e-center, etc.
```

*Note: The import paths like `'e-layout/box'` rely on the `exports` field defined in the package's `package.json`.*

### Using the IIFE Build

If you prefer not to use a module bundler or want to use `e-layout` directly in an HTML file via a `<script>` tag, you can use the IIFE (Immediately Invoked Function Expression) build. This build registers all components automatically.

#### Option 1: Using CDN (Recommended)

The simplest way to use e-layout is via CDN:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <script src="https://cdn.jsdelivr.net/npm/e-layout/dist/e-layout.min.js"></script>
</head>
<body>
  <e-stack>
    <p>Content inside stack</p>
  </e-stack>

  <!-- No need for module imports here,
       the IIFE script registers all components globally -->
</body>
</html>
```

#### Option 2: Self-Hosted

If you prefer to host the files yourself:

1.  **Copy the Build File:** Copy either `dist/e-layout.js` (unminified) or `dist/e-layout.min.js` (minified) from the `node_modules/e-layout/` directory into your project's assets or scripts folder (e.g., `your-project/scripts/`).
2.  **Include via Script Tag:** Add a `<script>` tag to your HTML file, pointing to the copied file. Make sure this script is loaded before you use any `<e-*> `tags in your HTML.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <script src="scripts/e-layout.min.js"></script>
</head>
<body>
  <e-stack>
    <p>Content inside stack</p>
  </e-stack>
</body>
</html>
```

### 2. Using Components in HTML/Templates

Once the component definition is imported, you can use the custom element tags directly in your HTML or framework templates:

```html
<body>
  <e-stack gap="2rem">
    <e-box style="padding: 1rem; border: 1px solid blue;">Box 1</e-box>

    <e-center style="padding: 2rem; border: 1px solid green;">
      <span>Centered Content</span>
    </e-center>

    <e-grid columns="2" gap="1rem" style="border: 1px solid red;">
       <div>Grid Cell 1</div>
       <div>Grid Cell 2</div>
       <div>Grid Cell 3</div>
       <div>Grid Cell 4</div>
    </e-grid>
  </e-stack>

  <script type="module">
    // Ensure components are imported before they are used in the DOM
    import 'e-layout/stack';
    import 'e-layout/box';
    import 'e-layout/center';
    import 'e-layout/grid';
  </script>
</body>
```

### Framework Integration

*   **React/Vue/Svelte/etc.:** Simply import the component definitions as shown above in your main application entry point, and then use the `<e-box>`, `<e-stack>`, etc., tags directly in your JSX/template files. Pass properties as attributes (e.g., `<e-stack direction="horizontal">`).

## Next Steps

Explore the individual component documentation to learn about their specific properties, styling options, and use cases:

*   [Components Overview](./components/box) *(Link to the first component)*