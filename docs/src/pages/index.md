---
layout: ../layouts/Layout.astro
title: 'Welcome'
---

# Welcome to e-layout Documentation

`e-layout` provides a set of layout-focused Web Components inspired by Every Layout. These components are designed to be framework-agnostic and can be used in any project that supports standard Web Components (React, Vue, Svelte, Angular, plain HTML/JS, etc.).

## Core Principles

The primary goal is to offer robust, reusable layout primitives that handle common layout patterns effectively, allowing developers to focus on application logic and specific styling rather than reinventing layout CSS.

### Complete Portability
Seamlessly integrates with any web technology stack - from modern frameworks to legacy systems. Import via ESM modules in JavaScript applications or include via script tags in any HTML page, ensuring true cross-platform compatibility.

### Zero Pollution
Self-contained styling with no CSS imports required. Leverages Shadow DOM encapsulation to ensure styles never leak into or conflict with your existing CSS ecosystem, enabling risk-free adoption in established projects.

### Fully Responsive by Default
All layout components are inherently responsive without additional configuration. As viewport or container dimensions change, content automatically reflows and adapts while maintaining optimal visibility and usability. This ensures a consistent experience across all screen sizes without requiring complex media queries.

### Universality
Built on evergreen layout principles that transcend design trends. By implementing the fundamental patterns from Every Layout with standard Web Components, e-layout provides enduring solutions that remain relevant regardless of shifting frontend fashions.

### High Readability & Predictability
Brings semantic structure to your layouts through declarative components rather than combinations of atomic classes. This approach reduces cognitive overhead, improves code maintainability, and creates predictable patterns that team members can quickly understand and debug.

## Available Components

Browse the components to see examples and usage details:

*   [Box (`<e-box>`)](./components/box) - The most basic layout primitive.
*   [Stack (`<e-stack>`)](./components/stack) - For arranging items vertically or horizontally with consistent spacing.
*   [Center (`<e-center>`)](./components/center) - For centering content within a container.
*   [Cluster (`<e-cluster>`)](./components/cluster) - For grouping items horizontally with flexible justification and alignment.
*   [Sidebar (`<e-sidebar>`)](./components/sidebar) - For creating a main content area alongside a sidebar.
*   [Switcher (`<e-switcher>`)](./components/switcher) - For responsive layouts that switch based on container width.
*   [Grid (`<e-grid>`)](./components/grid) - For creating complex 2D grid layouts.
*   [Frame (`<e-frame>`)](./components/frame) - For constraining content width and centering it.
*   [Reel (`<e-reel>`)](./components/reel) - For creating scrollable horizontal or vertical containers.
*   [Imposter (`<e-imposter>`)](./components/imposter) - For positioning elements outside the normal flow (absolute/fixed).
*   [Icon (`<e-icon>`)](./components/icon) - For layout control around icons.

## Getting Started

To use these components, install the package:

```bash
npm install e-layout
```

Then, import the specific components you need in your JavaScript/TypeScript file:

```javascript
// Import specific components to register them
import 'e-layout/box';
import 'e-layout/stack';

// Or import all components (larger bundle size if not tree-shaken)
// import 'e-layout';
```

Now you can use the custom element tags directly in your HTML or framework templates:

```html
<e-stack>
  <e-box>Item 1</e-box>
  <e-box>Item 2</e-box>
</e-stack>