---
layout: ../../layouts/Layout.astro
title: 'Grid Component'
---

# Grid (`<e-grid>`)

The `e-grid` component creates a responsive grid layout using CSS Grid. It offers three modes controlled by the `mode` property: `'fit'` (default), `'fill'`, and `'count'`.

## Basic Usage

**Basic Usage (Default min: 10em):**

```html
<e-grid>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</e-grid>
```

**With Custom Minimum Width and Gap:**

```html
<e-grid min="5em" gap="0.5rem">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</e-grid>
```

## Examples

**Default Grid (`mode="fit"`): `gap="0.5rem"`**

<div class="example-container">
  <div class="example-wrapper">
    <e-grid gap="0.5rem">
      <div class="example-item bg-example-blue">Item 1</div>
      <div class="example-item bg-example-blue">Item 2</div>
      <div class="example-item bg-example-blue">Item 3</div>
      <div class="example-item bg-example-blue">Item 4</div>
      <div class="example-item bg-example-blue">Item 5</div>
      <div class="example-item bg-example-blue">Item 6</div>
    </e-grid>
  </div>
</div>

**Custom Min/Gap (`mode="fit"`): `min="5em" gap="1rem"`**

<div class="example-container">
  <div class="example-wrapper">
    <e-grid min="5em" gap="1rem">
        <div class="example-item bg-example-blue">Item 1</div>
        <div class="example-item bg-example-blue">Item 2</div>
        <div class="example-item bg-example-blue">Item 3</div>
        <div class="example-item bg-example-blue">Item 4</div>
    </e-grid>
  </div>
</div>

**Fixed Width Items (`mode="fit"`): `min="5em" max="5em"`**

<div class="example-container">
  <div class="example-wrapper">
    <e-grid min="5em">
        <div class="example-item bg-example-blue">Item 1</div>
        <div class="example-item bg-example-blue">Item 2</div>
        <div class="example-item bg-example-blue">Item 3</div>
        <div class="example-item bg-example-blue">Item 4</div>
        <div class="example-item bg-example-blue">Item 5</div>
        <div class="example-item bg-example-blue">Item 6</div>
    </e-grid>
  </div>
</div>

**Fill Mode (`mode="fill"`): `min="auto" max="10em"`**

<div class="example-container">
  <div class="example-wrapper">
    <e-grid mode="fill" min="auto" max="10em">
        <div class="example-item bg-example-blue">Item 1</div>
        <div class="example-item bg-example-blue">Item 2</div>
        <div class="example-item bg-example-blue">Item 3</div>
        <!-- Notice potential space to the right -->
    </e-grid>
  </div>
</div>

**Count Mode (`mode="count"`): `count="3" min="auto"`**

<div class="example-container">
  <div class="example-wrapper">
    <e-grid mode="count" count="3" min="auto">
      <div class="example-item bg-example-blue">Item 1</div>
      <div class="example-item bg-example-blue">Item 2</div>
      <div class="example-item bg-example-blue">Item 3</div>
      <div class="example-item bg-example-blue">Item 4</div>
      <div class="example-item bg-example-blue">Item 5</div>
    </e-grid>
  </div>
</div>

## Properties

*   **`mode`** `<'fit' | 'fill' | 'count'>` (Default: `'fit'`)
    *   Controls grid layout mode: `fit` (adjusts columns, default), `fill` (preserves empty tracks), `count` (fixed column count). Attribute: `mode`.
*   **`count`** `<number>` (Default: `4`)
    *   Number of columns when `mode="count"`. Maps to `--grid-count`. Attribute: `count`.
*   **`min`** `<string>` (Default: `'10em'`)
    *   Minimum item width in `minmax()`. Maps to `--grid-min`. Attribute: `min`.
*   **`max`** `<string>` (Default: `'100%'`)
    *   Maximum item width in `minmax()`. Maps to `--grid-max`. Attribute: `max`.
*   **`gap`** `<string>` (Default: `'1em'`)
    *   Space between grid items. Maps to `--grid-gap`. Attribute: `gap`.
*   **`tag`** `<string>` (Default: `undefined`)
    *   Provides a semantic hint (e.g., 'ul'). Does not change the rendered tag. Useful for CSS selectors (`e-grid[tag="..."]`). Attribute: `tag`.

<style>
/* .example-container and .example-wrapper styles are defined globally */
.example-item {
  padding: 1rem; /* Add default padding for items */
  text-align: center;
  border-radius: 4px;
  color: white; /* Assuming white text for colored backgrounds */
}
.bg-example-slate { background-color: #64748b; }
.bg-example-red { background-color: #ef4444; }
.bg-example-orange { background-color: #f97316; }
.bg-example-green { background-color: #22c55e; }
.bg-example-pink { background-color: #ec4899; }
.bg-example-cyan { background-color: #06b6d4; }
</style>
    *   The space (grid-gap) between grid cells. Accepts any valid CSS `gap` value.
