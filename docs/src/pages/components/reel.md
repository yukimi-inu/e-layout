---
layout: ../../layouts/Layout.astro
title: 'Reel Component'
---

# Reel (`<e-reel>`)

The `e-reel` component creates a horizontally scrolling container with customizable item widths, spacing, and scrollbar appearance. It's ideal for displaying items like images or cards that overflow the container. *(Note: Vertical scrolling is not currently supported by this implementation based on the spec.)*

## Basic Usage

**Horizontal Reel:**

```html
<e-reel item-width="150px" gap="0.5rem" height="120px">
  <img src="..." alt="...">
  <img src="..." alt="...">
  <img src="..." alt="...">
  <!-- More images -->
</e-reel>

**Without Scrollbar:**

```html
<e-reel no-bar>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</e-reel>
```

## Examples

**Horizontal Image Reel:**

<div class="example-container">
  <e-reel height="120px" gap="0.5rem" style="border: 1px dashed blue; padding: 0.5rem;">
    <img src="https://via.placeholder.com/150/8d8d8d/ffffff?text=Item+1" alt="Placeholder 1">
    <img src="https://via.placeholder.com/200x100/6a6a6a/ffffff?text=Item+2" alt="Placeholder 2">
    <img src="https://via.placeholder.com/120x100/4b4b4b/ffffff?text=Item+3" alt="Placeholder 3">
    <img src="https://via.placeholder.com/180x100/9c9c9c/ffffff?text=Item+4" alt="Placeholder 4">
    <img src="https://via.placeholder.com/150/3a3a3a/ffffff?text=Item+5" alt="Placeholder 5">
  </e-reel>
</div>

**Reel with Fixed Item Width and No Scrollbar:**

<div class="example-container">
  <e-reel item-width="200px" no-bar style="border: 1px dashed green; padding: 0.5rem;">
    <div class="example-item bg-example-slate">Item 1 (200px)</div>
    <div class="example-item bg-example-blue">Item 2 (200px)</div> {/* red -> blue */}
    <div class="example-item bg-example-orange">Item 3 (200px)</div>
    <div class="example-item bg-example-green">Item 4 (200px)</div>
  </e-reel>
</div>


<style>
.example-container {
  background-color: #f0f0f0;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;
}
/* Add a gap between items in the reel for better visualization */
/* The gap is now handled internally by the component using margin-inline-start */
/* e-reel > * { ... } */

/* Ensure direct children have snap alignment if snap is enabled on parent */
/* Note: This might need refinement depending on desired snap behavior */
/* Snap functionality is not part of the current spec */

</style>

<script>
  // Import the component definition
  import 'e-layout/reel';
</script>

## Properties

*   **`itemWidth`**: `string` (Default: `'auto'`)
    *   The width of each child element (e.g., `'150px'`, `'20rem'`). Attribute: `item-width`.
*   **`gap`**: `string` (Default: `'1rem'`)
    *   The space between each child element.
*   **`height`**: `string` (Default: `'auto'`)
    *   The height (block-size) of the Reel element itself.
*   **`trackColor`**: `string` (Default: `'#000'`)
    *   The color of the scrollbar track. Attribute: `track-color`.
*   **`thumbColor`**: `string` (Default: `'#fff'`)
    *   The color of the scrollbar thumb. Attribute: `thumb-color`.
*   **`noBar`**: `boolean` (Default: `false`)
    *   If `true`, hides the scrollbar. Reflects as attribute `nobar`.

## Styling

*   **`--reel-item-width`**: (Default: `auto`) Overrides `itemWidth`.
*   **`--reel-gap`**: (Default: `1rem`) Overrides `gap`.
*   **`--reel-height`**: (Default: `auto`) Overrides `height`.
*   **`--reel-track-color`**: (Default: `#000`) Overrides `trackColor`.
*   **`--reel-thumb-color`**: (Default: `#fff`) Overrides `thumbColor`.

```css
e-reel {
  height: 150px;
  padding: 1rem;
  --reel-gap: 0.5rem; /* Adjust gap via CSS variable */
  --reel-track-color: lightgray;
  --reel-thumb-color: gray;
}