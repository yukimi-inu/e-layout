---
layout: ../../layouts/Layout.astro
title: 'Cover Component'
---

# Cover (`<e-cover>`)

The `e-cover` component creates a layout where one central element (designated with `slot="main"`) is vertically centered, flanked by optional header and footer content in the default slots. It's often used for hero sections or full-page covers. It ensures a minimum height and applies consistent spacing.

## Basic Usage

```html
<e-cover min-height="70vh" space="2rem">
  <header>Top Content (Header)</header>
  <h1 slot="main">Main Centered Content</h1>
  <footer>Bottom Content (Footer)</footer>
</e-cover>
```

## Example

<div class="example-container" style="border: 1px solid #ccc;">
  <e-cover min-height="400px" space="1.5rem" style="border: 1px dashed blue;">
    <div class="example-item bg-example-cyan">Header Element</div>
    <div slot="main" class="example-item bg-example-orange" style="text-align: center;">
      <h2>This is the Main Content</h2>
      <p>It is vertically centered.</p>
    </div>
    <div class="example-item bg-example-green">Footer Element</div>
  </e-cover>
</div>

**Cover without Padding:**

<div class="example-container" style="border: 1px solid #ccc;">
  <e-cover min-height="300px" space="1rem" no-padding style="border: 1px dashed green;">
    <div class="example-item bg-example-cyan">Header (No Padding on Cover)</div>
    <div slot="main" class="example-item bg-example-orange" style="text-align: center;">Main Centered</div>
    <div class="example-item bg-example-green">Footer</div>
  </e-cover>
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
  import 'e-layout/cover';
</script>

## Properties

*   **`minHeight`**: `string` (Default: `'100vh'`)
    *   The minimum height (`min-block-size`) of the cover element. Accepts any valid CSS size value. Attribute: `min-height`.
*   **`space`**: `string` (Default: `'1rem'`)
    *   The minimum space (margin) applied between child elements. Also used as padding unless `noPadding` is true.
*   **`noPadding`**: `boolean` (Default: `false`)
    *   If `true`, removes the padding from the cover element itself. Reflects as attribute `nopadding`.

## Slots

*   **Default Slot:** Used for content placed at the top and bottom of the cover.
*   **`main`:** The named slot for the element that should be vertically centered.

## Styling

*   **`--cover-min-height`**: (Default: `100vh`) Overrides `minHeight`.
*   **`--cover-space`**: (Default: `1rem`) Overrides `space` (both margin between elements and default padding).
*   **`--cover-padding`**: (Default: value of `--cover-space`) Controls the padding. Set to `0` when `noPadding` is true.

```css
e-cover {
  --cover-min-height: 80vh;
  --cover-space: 2rem;
  background-color: lightyellow;
}