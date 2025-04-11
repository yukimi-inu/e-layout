---
layout: ../layouts/Layout.astro
title: 'Usage Guide'
---

# Usage Guide

`e-layout` components are standard Web Components built with Lit. They can be used in various environments, from plain HTML/JavaScript projects to modern frontend frameworks.

## Installation

First, install the package:

```bash
npm install e-layout
# or yarn add e-layout
# or pnpm add e-layout
```

## Basic Usage (HTML & JavaScript)

1.  **Import Component Definitions:** In your JavaScript file, import the components you need. This registers the custom elements with the browser. Importing individually is recommended for production builds to enable tree-shaking.

    ```javascript
    // main.js
    import 'e-layout/box';
    import 'e-layout/stack';
    // ... import other needed components

    // Or import all (larger bundle size if not tree-shaken)
    import 'e-layout';
    ```

2.  **Use in HTML:** Use the custom element tags directly in your HTML.

    ```html
    <!doctype html>
    <html>
      <head>
        <script type="module" src="main.js"></script>
      </head>
      <body>
        <e-stack space="1.5rem">
          <e-box padding="1rem">Item 1</e-box>
          <e-box padding="1rem">Item 2</e-box>
        </e-stack>
      </body>
    </html>
    ```

## The `tag` Attribute

Many `e-layout` components accept a `tag` attribute (e.g., `<e-box tag="section">`).

**Important:** This attribute **does not change the actual HTML tag** rendered by the component itself (the component's host element remains `<e-box>`, `<e-stack>`, etc.).

Its purpose is purely semantic and for targeting:

1.  **Semantic Hint:** It provides a hint about the intended role of the component in the document structure (e.g., indicating a box represents a `<section>` or an `<article>`).
2.  **CSS Targeting:** You can use attribute selectors in CSS to style components based on their intended role:
   ```css
   nav, [tag='nav'] {
     /* Styles specific to boxes intended as navigation */
     background-color: lightgrey;
   }
   ```
3.  **JavaScript Targeting:** You can select elements in JavaScript based on this attribute:
   ```javascript
   const mainContentBox = document.querySelector('[tag="main"]');
   ```

While the attribute value often corresponds to a standard HTML tag name like `div`, `section`, `nav`, etc., the component itself always renders its own custom element tag.

## Using CSS Variables as Property Values

A convenient feature of `e-layout` components is the ability to pass CSS custom property names directly as values to component properties (attributes). If a property value starts with `--` (e.g., `space="--my-custom-space"`), the component automatically wraps it in `var()` when applying the style internally (e.g., `gap: var(--my-custom-space)`).

This allows you to easily leverage your existing CSS variable definitions:

```html
<style>
  :root {
    --spacing-large: 3rem;
  }
</style>

<!-- The component will apply 'gap: var(--spacing-large)' -->
<e-stack space="--spacing-large">
  <div>Item 1</div>
  <div>Item 2</div>
</e-stack>
```

This behavior is handled by the internal `resolveVars` utility function. If the property value does *not* start with `--`, it's treated as a literal CSS value (e.g., `space="2em"` results in `gap: 2em`).

## Framework Integration

Web Components integrate well with most modern frameworks. The general approach involves importing the component definitions and then using the custom element tags in your framework's templates.

### React

1.  **Import Definitions:** Import the necessary component definitions, typically in your main application file (e.g., `src/main.tsx` or `src/App.tsx`).

    ```typescript
    // src/main.tsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';

    // Import e-layout components to register them
    import 'e-layout/box';
    import 'e-layout/stack';
    // ...

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
    ```

2.  **Use in JSX:** Use the custom element tags directly in your JSX components. Pass properties as attributes. Note that React might show warnings for non-standard DOM properties, but they generally work. For boolean attributes like `noStretch` or `fixed`, simply include the attribute name.

    ```tsx
    // src/App.tsx
    function App() {
      return (
        <e-stack space="2rem">
          <e-box padding="1rem">React Box 1</e-box>
          {/* Pass string props as attributes */}
          <e-sidebar side="right" sideWidth="200px" contentMin="60%">
            <div slot="sidebar">Sidebar Content</div>
            <div>Main Content</div>
          </e-sidebar>
          {/* Boolean props */}
          <e-imposter fixed breakout>
             <div>Imposter Content</div>
          </e-imposter>
        </e-stack>
      );
    }
    export default App;
    ```

3.  **Event Handling:**
    *   **Standard DOM Events:** Use standard React event handlers like `onClick`.
    *   **Custom Events:** React's synthetic event system doesn't automatically handle custom events dispatched by Web Components (`dispatchEvent(new CustomEvent(...))`). You'll need to use `ref` and `addEventListener` in a `useEffect` hook.

        ```tsx
        import React, { useRef, useEffect } from 'react';
        import 'e-layout/some-component-with-event'; // Assuming a component dispatches 'my-custom-event'

        function MyComponent() {
          const componentRef = useRef<HTMLElement>(null); // Adjust type if needed

          useEffect(() => {
            const node = componentRef.current;
            const handleCustomEvent = (event: Event) => {
              // Cast event to CustomEvent if detail is needed
              const customEvent = event as CustomEvent;
              console.log('Custom event received:', customEvent.detail);
            };

            node?.addEventListener('my-custom-event', handleCustomEvent);

            return () => {
              node?.removeEventListener('my-custom-event', handleCustomEvent);
            };
          }, []);

          return <e-some-component-with-event ref={componentRef}></e-some-component-with-event>;
        }
        ```

4.  **TypeScript:** Ensure your `tsconfig.json` allows JSX and includes the DOM library. The type definitions provided by `e-layout` (`*.d.ts`) should allow TypeScript to recognize the custom elements and their properties when used correctly. You might need to augment React's JSX types for better property type checking if you encounter issues.

### Vue

1.  **Import Definitions:** Similar to React, import component definitions in your main entry file (e.g., `src/main.ts`).

    ```typescript
    // src/main.ts
    import { createApp } from 'vue';
    import App from './App.vue';

    // Import e-layout components
    import 'e-layout/box';
    import 'e-layout/stack';
    // ...

    createApp(App).mount('#app');
    ```

2.  **Configure Vue Compiler:** To prevent Vue from treating `e-*` tags as Vue components, configure the Vue compiler options (usually in `vite.config.js`, `vue.config.js`, or `nuxt.config.js`).

    ```javascript
    // Example for Vite (vite.config.js)
    import vue from '@vitejs/plugin-vue';

    export default {
      plugins: [
        vue({
          template: {
            compilerOptions: {
              // Treat all tags starting with 'e-' as custom elements
              isCustomElement: (tag) => tag.startsWith('e-')
            }
          }
        })
      ]
    };
    ```

3.  **Use in Templates:** Use the custom element tags directly in your Vue templates. Use standard attribute binding (`:prop`) for dynamic values if needed, although simple string/boolean attributes work directly.

    ```vue
    <!-- src/App.vue -->
    <template>
      <e-stack space="1rem">
        <e-box padding="1rem">Vue Box 1</e-box>
        <e-sidebar side="left" side-width="250px">
          <template #sidebar>
            <div>Sidebar Content</div>
          </template>
          <div>Main Content</div>
        </e-sidebar>
        <e-grid min="200px" gap="1rem">
           <div>Cell 1</div>
           <div>Cell 2</div>
        </e-grid>
        <e-imposter :fixed="isFixed" :breakout="canBreakout">
           Modal
        </e-imposter>
      </e-stack>
    </template>

    <script setup>
    import { ref } from 'vue';
    const isFixed = ref(true);
    const canBreakout = ref(false);
    </script>
    ```

4.  **Event Handling:** Use standard Vue event binding (`@eventname`). Custom events should generally work, but be mindful of potential casing issues (use kebab-case event names).

    ```vue
    <template>
      <e-some-component-with-event @my-custom-event="handleCustomEvent">
      </e-some-component-with-event>
    </template>

    <script setup>
    const handleCustomEvent = (event) => {
      console.log('Custom event received:', event.detail);
    }
    </script>
    ```

### Svelte

1.  **Import Definitions:** Import component definitions in your main entry file (e.g., `src/main.ts`).

    ```typescript
    // src/main.ts
    import App from './App.svelte';

    // Import e-layout components
    import 'e-layout/box';
    import 'e-layout/stack';
    // ...

    const app = new App({
      target: document.getElementById('app'),
    });

    export default app;
    ```

2.  **Configure Svelte Compiler:** Inform the Svelte compiler about the custom elements, typically in `svelte.config.js`.

    ```javascript
    // svelte.config.js
    import adapter from '@sveltejs/adapter-auto';
    import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

    /** @type {import('@sveltejs/kit').Config} */
    const config = {
      preprocess: vitePreprocess(),
      kit: {
        adapter: adapter()
      },
      compilerOptions: {
        // Add this line
        customElement: true
      }
    };
    export default config;
    ```
    *(Note: If not using SvelteKit, the configuration might differ slightly)*

3.  **Use in Templates:** Use the custom element tags directly in your Svelte components. Pass props as attributes.

    ```svelte
    <!-- src/App.svelte -->
    <script>
      import 'e-layout/box';
      import 'e-layout/stack';
      import 'e-layout/imposter';

      let isFixed = true;
      let canBreakout = false;
    </script>

    <e-stack space="1rem">
      <e-box padding="1rem">Svelte Box</e-box>
      <e-imposter fixed={isFixed} {breakout}> {/* Use shorthand for boolean */}
        Imposter
      </e-imposter>
    </e-stack>
    ```

4.  **Event Handling:** Use Svelte's `on:eventname` directive. Custom events should work directly.

    ```svelte
    <script>
      import 'e-layout/some-component-with-event';

      function handleCustomEvent(event) {
        console.log('Custom event received:', event.detail);
      }
    </script>

    <e-some-component-with-event on:my-custom-event={handleCustomEvent}>
    </e-some-component-with-event>
    ```

## Important Considerations: Avoiding Layout Shift

Because `e-layout` relies on Web Components (Custom Elements), the browser needs to execute the component definition script *before* it initially renders the elements that use them. If the script runs too late (e.g., after the initial HTML is parsed and displayed), you might experience a "layout shift" or "Flash Of Unstyled Content (FOUC)" where the elements initially appear unstyled or incorrectly laid out before the component logic takes over.

**General Rule:** Ensure `import 'e-layout';` or specific component imports run as early as possible in your page load, ideally within the `<head>` or at the very beginning of the `<body>`.

**Framework-Specific Notes:**

While simply importing `e-layout` in your main JavaScript bundle often works after a production build, some development server setups or specific framework behaviors might require adjustments to prevent layout shifts during development (`npm run dev`):

*   **Astro:** If you encounter layout shifts, especially during development, import the library directly within a `<script>` tag inside the `<head>` of your main layout file (e.g., `src/layouts/Layout.astro`). This ensures the definitions are processed before the body content renders.

    ```astro
    // src/layouts/Layout.astro
    <head>
      {/* Other head elements */}
      <script> import 'e-layout'; </script>
    </head>
    ```

*   **Remix:** Standard Remix bundling might place your main script at the end of the `<body>`. To guarantee early execution, it's recommended to use the pre-built IIFE version of `e-layout`. Place this script tag in your root layout's `<head>`. You'll need to ensure `e-layout.min.js` (or the non-minified version) is available in your public assets directory (e.g., copy it during your build process).

    ```html
    // app/root.tsx (or similar)
    <head>
      {/* Other head elements */}
      <script src="https://cdn.jsdelivr.net/npm/e-layout/dist/e-layout.min.js" defer></script>
    </head>
    ```
    *(Note: Using `defer` is generally recommended for scripts in the head that don't modify the DOM immediately)*

If you experience layout shifts with other frameworks during development, investigate how to ensure the `e-layout` import executes before the initial render. Often, production builds optimize script loading, resolving the issue automatically.

## Server-Side Rendering (SSR) & Hydration

Web Components are primarily a client-side technology, relying on JavaScript to define and upgrade custom elements. Using them in SSR environments requires careful consideration.

1.  **Declarative Shadow DOM (DSD):** This is the standard mechanism for rendering Shadow DOM on the server. Lit supports DSD. However, your SSR framework (Next.js, Nuxt, SvelteKit, Astro, etc.) must also support emitting DSD templates. Check your framework's documentation. If DSD is not supported, the Shadow DOM content won't be present in the initial server-rendered HTML, potentially causing layout shifts or FOUC (Flash Of Unstyled Content) until the client-side JavaScript loads and upgrades the elements.
2.  **Hydration:** Even with DSD, client-side JavaScript is still needed to make the components interactive (e.g., handle events, react to property changes). Ensure your component definitions (`import 'e-layout/...'`) are loaded on the client-side before or during the hydration process. How you do this depends on your framework.
3.  **Polyfills:** Older browsers might require polyfills for Web Components features and potentially for DSD. Check compatibility needs for your target audience.
4.  **Framework-Specific SSR:**
    *   **Astro:** Astro has excellent built-in support for Web Components, including Lit. It handles SSR/SSG and client-side hydration well. You can import and use `e-layout` components directly in `.astro` files. Use client directives (`client:load`, `client:idle`, `client:visible`) to control when the component's JavaScript loads and hydrates on the client.
        ```astro
        ---
        import 'e-layout/stack'; // Import definition if needed server-side
        ---
        <e-stack client:load> {/* Hydrate immediately */}
          Content
        </e-stack>
        ```
    *   **Next.js/Nuxt/SvelteKit:** Consult their respective documentation on integrating custom elements with SSR/SSG. You might need specific configurations or dynamic imports (`import(...)`) with `ssr: false` options to ensure components only render or hydrate on the client side if DSD is not fully supported or desired.

In summary, while `e-layout` components *can* be used in SSR environments, achieving seamless server rendering (especially with Shadow DOM via DSD) depends heavily on the capabilities and configuration of your chosen framework. Client-side rendering or progressive hydration are often the most straightforward approaches.