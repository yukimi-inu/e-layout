# e-layout LLM Documentation

This document provides information for Large Language Models (LLMs) to understand and utilize the `e-layout` web component library.

## Project Overview

`e-layout` is a library of layout-focused web components built with Lit. It provides reusable primitives for common layout patterns.

## Core Concepts

*   **Custom Elements:** Components are provided as custom elements (e.g., `<e-box>`, `<e-stack>`).
*   **Attributes:** Components are configured primarily through HTML attributes (e.g., `padding="1em"`). These attributes control the component's styling and behavior.
*   **CSS Variables in Attributes:** Attribute values can accept CSS variables (e.g., `space="var(--my-space)"`).
*   **`tag` Attribute:** Many components have a `tag` attribute (e.g., `tag="section"`). This provides a semantic hint but **does not** change the rendered HTML tag (which remains the custom element itself, like `e-box`). It can be used for CSS attribute selectors or JavaScript targeting.
*   **Slots:** Content is placed within components using the `<slot>` element. Some components use named slots (e.g., `<slot name="sidebar">`).

## Components

Here's a breakdown of the available components:

---

### `<e-box>`

**Summary:** A fundamental component providing a flexible box with padding, border, background, and color controls.

**Attributes:**

*   `padding` (string, default: `'0'`): Sets the padding.
*   `borderWidth` (string, default: `'0'`): Sets the border width.
*   `borderColor` (string, default: `'transparent'`): Sets the border color.
*   `border` (string, default: unset): Sets the border shorthand. Overrides individual border properties if set.
*   `radius` (string, default: `'0'`): Sets the border radius.
*   `bg` (string, default: `'inherit'`): Sets the background color.
*   `color` (string, default: `'currentColor'`): Sets the text color.
*   `tag` (string, optional): Semantic hint.

**Slots:**

*   Default slot: Content to be placed inside the box.

**Example:**

```html
<e-box padding="1.5em" border="1px solid grey" radius="0.5em">
  This is content inside a box.
</e-box>
```

---

### `<e-center>`

**Summary:** Centers its content horizontally within a maximum width, with optional gutters and text/intrinsic centering options.

**Attributes:**

*   `max` (string, default: `'100%'`): Maximum inline size (width) of the centered content.
*   `gutters` (string, default: `'0'`): Padding on the left and right sides.
*   `withText` (boolean, reflects, default: `false`): If true, applies `text-align: center`.
*   `intrinsic` (boolean, reflects, default: `false`): If true, uses flexbox to center content intrinsically (`display: flex; align-items: center;`).
*   `tag` (string, optional): Semantic hint.

**Slots:**

*   Default slot: The content to be centered.

**Example:**

```html
<e-center max="60ch" gutters="1rem">
  <p>This paragraph is centered within a 60 character width.</p>
</e-center>

<e-center intrinsic>
  <button>Centered Button</button>
</e-center>
```

---

### `<e-cluster>`

**Summary:** Arranges items using flexbox, ideal for groups like tags or buttons. Controls alignment, justification, wrapping, and spacing.

**Attributes:**

*   `justify` (`'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'`, default: `'flex-start'`): Justify content along the main axis.
*   `align` (`'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'`, default: `'flex-start'`): Align items along the cross axis.
*   `space` (string, default: `'var(--s1, 1rem)'`): Gap between items.
*   `wrap` (`'wrap' | 'nowrap' | 'wrap-reverse'`, default: `'wrap'`): Controls item wrapping.
*   `alignContent` (`'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch'`, default: `'flex-start'`): Align content lines when wrapping.
*   `tag` (string, optional): Semantic hint.

**Slots:**

*   Default slot: Items to be arranged.

**Example:**

```html
<e-cluster justify="center" space="0.5em">
  <button>Tag 1</button>
  <button>Tag 2</button>
  <button>Another Tag</button>
</e-cluster>
```

---

### `<e-container>`

**Summary:** Establishes a CSS container context (`container-type: inline-size`) for enabling container queries on descendants.

**Attributes:**

*   `containerName` (string, optional): Assigns a name to the container context for use in `@container` queries.
*   `tag` (string, optional): Semantic hint.

**Slots:**

*   Default slot: Content within the container.

**Example:**

```html
<e-container container-name="card">
  <div>Content inside the container</div>
  <style>
    @container card (width > 400px) {
      /* Styles applied when the e-container named 'card' is wider than 400px */
    }
  </style>
</e-container>
```

---

### `<e-cover>`

**Summary:** Covers a container (typically viewport), placing header/footer and centering main content vertically.

**Attributes:**

*   `minHeight` (string, default: `'100vh'`): Minimum height of the cover.
*   `space` (string, default: `'1rem'`): Gap between header, content, and footer. Also default padding.
*   `noPadding` (boolean, reflects, default: `false`): If true, removes padding.

**Slots:**

*   `header`: Content placed at the top.
*   Default slot: Main content, centered vertically.
*   `footer`: Content placed at the bottom.

**Example:**

```html
<e-cover space="2rem">
  <h1 slot="header">Page Title</h1>
  <p>This is the main content, vertically centered.</p>
  <footer slot="footer">Copyright Info</footer>
</e-cover>
```

---

### `<e-frame>`

**Summary:** Wraps content (like images/video) maintaining a specific aspect ratio using the `aspect-ratio` CSS property.

**Attributes:**

*   `ratio` (string, default: `'16:9'`): Aspect ratio ('width:height' or 'width/height').
*   `tag` (string, optional): Semantic hint.

**Slots:**

*   Default slot: Content to be framed (e.g., `<img>`, `<video>`). Slotted `img` and `video` are styled to fit.

**Example:**

```html
<e-frame ratio="1:1" style="width: 200px;">
  <img src="square-image.jpg" alt="A square image">
</e-frame>
```

---

### `<e-grid>`

**Summary:** Creates a responsive grid layout using CSS Grid with different column behavior modes.

**Attributes:**

*   `min` (string, default: `'10em'`): Minimum width for grid items (used in `minmax`).
*   `max` (string, default: `'100%'`): Maximum width for grid items (used in `minmax`).
*   `gap` (string, default: `'1em'`): Gap between grid items.
*   `mode` (`'fit' | 'fill' | 'count'`, reflects, default: `'fit'`): Grid layout mode (`auto-fit`, `auto-fill`, or fixed `count`).
*   `count` (number, default: `4`): Number of columns when `mode="count"`.
*   `tag` (string, optional): Semantic hint.

**Slots:**

*   Default slot: Items to be placed in the grid.

**Example:**

```html
<e-grid min="15em" gap="1.5em">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</e-grid>
```

---

### `<e-icon>`

**Summary:** Displays an icon (typically SVG) with optional text label, controlling size, color, and spacing. Sets accessibility attributes.

**Attributes:**

*   `label` (string, optional): Accessible label. Sets `role="img"` and `aria-label`.
*   `color` (string, optional): Color of icon and text.
*   `size` (string, default: `'1em'`): Width and height of the slotted SVG.
*   `space` (string, default: `'0.25em'`): Space between icon and adjacent text (used as `gap`).

**Slots:**

*   Default slot: Icon content (e.g., `<svg>`) and optional adjacent text.

**Example:**

```html
<e-icon label="Settings" size="1.2em" space="0.5em">
  <svg><!-- SVG code --></svg>
  Settings
</e-icon>

<e-icon label="Close">
  <svg><!-- SVG code --></svg>
</e-icon>
```

---

### `<e-imposter>`

**Summary:** Overlays content (like modals/popups) using absolute or fixed positioning with logical alignment properties.

**Attributes:**

*   `breakout` (boolean, reflects, default: `false`): Allows content to overflow container bounds.
*   `margin` (string, default: `'0px'`): Logical margin from the aligned edge(s).
*   `fixed` (boolean, reflects, default: `false`): Uses `position: fixed` instead of `absolute`.
*   `alignBlock` (`'start' | 'center' | 'end'`, reflects, default: `'center'`): Block direction alignment (vertical in horizontal writing).
*   `alignInline` (`'start' | 'center' | 'end'`, reflects, default: `'center'`): Inline direction alignment (horizontal in horizontal writing).
*   `zIndex` (string, default: `'1'`): Sets the z-index.

**Slots:**

*   Default slot: The content to be overlaid.

**Example:**

```html
<div style="position: relative; height: 200px; border: 1px solid;">
  Parent Container
  <e-imposter margin="1em" align-block="start" align-inline="end">
    <div>Top-Right Imposter</div>
  </e-imposter>
</div>
```

---

### `<e-reel>`

**Summary:** Creates a horizontally scrolling container (carousel, gallery) that prevents wrapping.

**Attributes:**

*   `itemWidth` (string, default: `'auto'`): Width of individual items.
*   `gap` (string, default: `'1rem'`): Gap between items.
*   `height` (string, default: `'auto'`): Height of the reel container.
*   `padding` (string, default: `'0'`): Padding of the reel container.
*   `noBar` (boolean, reflects, default: `false`): Hides the horizontal scrollbar.

**Slots:**

*   Default slot: Items to be displayed horizontally.

**Example:**

```html
<e-reel item-width="150px" gap="1em" height="120px" no-bar>
  <img src="img1.jpg" alt="Image 1">
  <img src="img2.jpg" alt="Image 2">
  <img src="img3.jpg" alt="Image 3">
  <img src="img4.jpg" alt="Image 4">
</e-reel>
```

---

### `<e-sidebar>`

**Summary:** Creates a sidebar layout with main content alongside, configurable side, width, and wrapping behavior.

**Attributes:**

*   `side` (`'left' | 'right'`, reflects, default: `'left'`): Which side the sidebar appears on.
*   `sideWidth` (string, optional): Width of the sidebar. If unset, uses intrinsic width.
*   `contentMin` (string, default: `'50%'`): Minimum width of the main content before wrapping.
*   `space` (string, default: `'var(--s1, 1rem)'`): Gap between sidebar and main content.
*   `noStretch` (boolean, reflects, default: `false`): Prevents vertical stretching, aligning items to the top.

**Slots:**

*   `sidebar`: Content for the sidebar area.
*   Default slot: Main content area.

**Example:**

```html
<e-sidebar side="right" side-width="250px" space="2rem">
  <nav slot="sidebar">
    <ul><li>Link 1</li><li>Link 2</li></ul>
  </nav>
  <main>
    <h1>Main Content Area</h1>
    <p>This content takes up the remaining space.</p>
  </main>
</e-sidebar>
```

---

### `<e-stack>`

**Summary:** Arranges items vertically with consistent spacing, optionally splitting items.

**Attributes:**

*   `space` (string, default: `'1.5rem'`): Vertical space (margin) between items.
*   `splitAfter` (number, optional): 1-based index after which to push subsequent items to the end (`margin-block-end: auto`).
*   `tag` (string, optional): Semantic hint.

**Slots:**

*   Default slot: Items to be stacked vertically.

**Example:**

```html
<e-stack space="1em">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</e-stack>

<e-stack space="1em" split-after="1">
  <div>Pushed to Top</div>
  <div>Pushed to Bottom 1</div>
  <div>Pushed to Bottom 2</div>
</e-stack>
```

---

### `<e-switcher>`

**Summary:** Arranges items horizontally until a threshold width, then switches to vertical wrapping. Can limit horizontal items.

**Attributes:**

*   `threshold` (string, default: `'30rem'`): Container width threshold for switching layout.
*   `gap` (string, default: `'var(--s1, 1rem)'`): Gap between items.
*   `limit` (number, default: `Infinity`): Max number of items to keep horizontal before forcing wraps (`flex-basis: 100%`).

**Slots:**

*   Default slot: Items to be laid out.

**Example:**

```html
<e-switcher threshold="40rem" gap="1em" limit="3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4 (will wrap if container is narrow or limit is reached)</div>
  <div>Item 5</div>
</e-switcher>
```

---

## Installation & Usage (Basic)

```bash
npm install e-layout
```

```javascript
// Import necessary components
import 'e-layout/dist/components/box.js';
import 'e-layout/dist/components/stack.js';
// ... other components

// Then use them in your HTML or templates
// <e-stack><e-box>...</e-box></e-stack>
```

Refer to individual component documentation (`docs/src/pages/components/*.md`) for more detailed examples and usage patterns.