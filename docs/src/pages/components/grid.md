---
layout: ../../layouts/Layout.astro
title: 'Grid Component'
---

# Grid (`<e-grid>`)

The `e-grid` component creates a responsive grid layout using CSS Grid's `repeat(auto-fit, minmax(min(MIN, 100%), 1fr))` pattern. It automatically adjusts the number of columns based on the available width and a minimum item width.

## Basic Usage

**Basic Usage (Default min: 250px):**

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
<e-grid min="150px" gap="0.5rem">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</e-grid>
```

## Examples

**Default Grid:**

<div class="example-container">
  <e-grid gap="0.5rem" style="border: 1px dashed blue; padding: 0.5rem;">
    <div class="example-item bg-example-slate" style="padding: 1rem;">Item 1 (#EAE4E9)</div>
    <div class="example-item bg-example-red" style="padding: 1rem;">Item 2 (#FDE2E4)</div>
    <div class="example-item bg-example-orange" style="padding: 1rem;">Item 3 (#FFF1E6)</div>
    <div class="example-item bg-example-green" style="padding: 1rem;">Item 4 (#E2ECE9)</div>
    <div class="example-item bg-example-pink" style="padding: 1rem;">Item 5 (#FAD2E1)</div>
    <div class="example-item bg-example-cyan" style="padding: 1rem;">Item 6 (#BEE1E6)</div> {/* Changed last orange to cyan */}
  </e-grid>
</div>

**Grid with `min="150px"`:**

<div class="example-container">
  <e-grid min="150px" gap="1rem" style="border: 1px dashed green; padding: 0.5rem;">
    <div class="example-item bg-example-slate" style="padding: 1rem;">Item 1</div>
    <div class="example-item bg-example-red" style="padding: 1rem;">Item 2</div>
    <div class="example-item bg-example-orange" style="padding: 1rem;">Item 3</div>
    <div class="example-item bg-example-green" style="padding: 1rem;">Item 4</div>
  </e-grid>
</div>

<style>
.example-container {
  background-color: #f0f0f0;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;
}
</style>

<script>
  // Import the component definition
  import 'e-layout/grid';
</script>

## Properties

*   **`min`**: `string` (Default: `'250px'`)
    *   The minimum item width used in the `minmax()` function (e.g., `'150px'`, `'10rem'`).
*   **`gap`**: `string` (Default: `'1rem'`)
    *   The space (grid-gap) between grid cells. Accepts any valid CSS `gap` value.

## Styling

*   **`--grid-gap`**: (Default: `1rem`) Overrides `gap`.
*   **`--grid-min-override`**: (Default: `250px`) Overrides `min`.

```css
e-grid {
  --grid-gap: 2rem;
  --grid-min-override: 300px; /* Example override */
}