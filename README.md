# e-layout

**e-layout** is a layout-focused Web Component library built with Lit, inspired by the robust principles of [Every Layout](https://every-layout.dev/). It provides a set of framework-agnostic components designed to handle common layout patterns effectively. The name "e-layout" playfully combines the "E" from Every Layout with the Japanese word "E" (良い - meaning good or nice), reflecting its goal to provide *good* layout primitives.

## Features

*   **Complete Portability:** Seamlessly integrates with any web technology stack - from modern frameworks to legacy systems. Import via ESM modules in JavaScript applications or include via script tags in any HTML page, ensuring true cross-platform compatibility.
*   **Zero Pollution:** Self-contained styling with no CSS imports required. Leverages Shadow DOM encapsulation to ensure styles never leak into or conflict with your existing CSS ecosystem, enabling risk-free adoption in established projects.
*   **Fully Responsive by Default:** All layout components are inherently responsive without additional configuration. As viewport or container dimensions change, content automatically reflows and adapts while maintaining optimal visibility and usability. This ensures a consistent experience across all screen sizes without requiring complex media queries.
*   **Universality:** Built on evergreen layout principles that transcend design trends. By implementing the fundamental patterns from Every Layout with standard Web Components, e-layout provides enduring solutions that remain relevant regardless of shifting frontend fashions.
*   **High Readability & Predictability:** Brings semantic structure to your layouts through declarative components rather than combinations of atomic classes. This approach reduces cognitive overhead, improves code maintainability, and creates predictable patterns that team members can quickly understand and debug.
*   **Customizable:** Uses CSS custom properties for easy tweaking of spacing, thresholds, etc.
*   **Bridging the Gap:** Acts as an intermediary layer between low-level utility classes and full-stack UI frameworks, offering reusable layout logic.

## Installation

```bash
npm install e-layout
# or
yarn add e-layout
# or
pnpm add e-layout
```
## Basic Usage

### Option 1: Using CDN (Recommended)

The simplest way to use e-layout is via CDN:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <script src="https://cdn.jsdelivr.net/npm/e-layout/dist/e-layout.min.js"></script>
</head>
<body>
  <e-stack space="1.5rem">
    <e-box padding="1rem">Item 1</e-box>
    <e-center max="40ch" with-text>Centered Text</e-center>
  </e-stack>
</body>
</html>
```

### Option 2: Using NPM Package


1.  **Import Components:** Import the necessary component definitions in your main JavaScript/TypeScript file to register the custom elements. Importing individually is recommended for production.

    ```javascript
    // Import individual components (recommended)
    import 'e-layout/box';
    import 'e-layout/stack';

    // Or import all components (potentially larger bundle size)
    // import 'e-layout';
    ```

2.  **Use in HTML/Templates:** Use the custom element tags directly.

    ```html
    <e-stack space="1.5rem">
      <e-box padding="1rem">Item 1</e-box>
      <e-center max="40ch" with-text>Centered Text</e-center>
    </e-stack>
    ```

Refer to the [Usage Guide](./docs/src/pages/usage.md) for framework-specific integration details (React, Vue, Svelte) and SSR considerations.

### Important: Avoiding Layout Shift

Since `e-layout` uses Web Components, the browser needs to run the component definition script (`import 'e-layout'`) *before* rendering the elements. If the script runs late, you might see a layout shift or FOUC (Flash Of Unstyled Content).

**General Rule:** Ensure the import runs early, ideally in the `<head>` or at the start of the `<body>`.

**Framework Notes:**

While production builds often handle this, development servers might need adjustments:

*   **Astro:** If needed, import directly in the `<head>` of your layout:
    ```astro
    // src/layouts/Layout.astro
    <head>
      <script> import 'e-layout'; </script>
    </head>
    ```

*   **Remix:** Standard bundling might load scripts late. Consider using the IIFE build (`e-layout.min.js`) in the `<head>`:
    ```html
    // app/root.tsx
    <head>
      <script src="https://cdn.jsdelivr.net/npm/e-layout/dist/e-layout.min.js" defer></script>
    </head>
    ```
    (Ensure the IIFE file is copied to your public assets).

Check your framework's documentation if you encounter issues during development. Production builds usually optimize script loading.

## Components

*   **`<e-box>`:** Basic container with padding control.
*   **`<e-stack>`:** Arranges items vertically with consistent spacing.
*   **`<e-center>`:** Centers content horizontally within a max width, with optional text/intrinsic centering.
*   **`<e-cluster>`:** Arranges items horizontally with wrapping and alignment control.
*   **`<e-sidebar>`:** Creates a two-column layout with a main content area and a sidebar.
*   **`<e-switcher>`:** Switches layout based on container width threshold.
*   **`<e-grid>`:** Creates a responsive grid based on a minimum item width.
*   **`<e-cover>`:** Vertically centers a main element between optional header/footer content.
*   **`<e-frame>`:** Creates a container with a specific aspect ratio.
*   **`<e-reel>`:** Creates a horizontally scrolling container.
*   **`<e-imposter>`:** Positions content outside the normal flow (absolute/fixed).
*   **`<e-icon>`:** Layout wrapper for icons, controlling size relative to text and providing accessibility features.
*   **`<e-container>`:** Establishes a CSS Container Query context.

## Documentation

For detailed component properties, examples, and usage guides, please refer to the documentation site.

To run the documentation site locally:

```bash
npm run docs:dev
```

Then open your browser to the specified local address (usually `http://localhost:4321/e-layout/`).

## Development

*   **Build:** `npm run build` (Compiles TypeScript using `tsc`)
*   **Format:** `npm run format` (Formats code using Biome)
*   **Lint:** `npm run lint` (Lints code using Biome)
*   **Check:** `npm run check` (Runs Biome format, lint, and applies safe fixes)

## License

MIT

## For LLM Agents

If you are an LLM Agent (AI assistant), please read the `LLM_README.md` file for more detailed information about the components and their usage. It contains structured documentation specifically designed for AI-assisted development.