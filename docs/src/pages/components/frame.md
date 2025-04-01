---
layout: ../../layouts/Layout.astro
title: 'Frame Component'
---

# Frame (`<e-frame>`)

The `e-frame` component creates a container that maintains a specific aspect ratio. It's useful for embedding videos or images while preserving their proportions. Content inside the frame (like `<img>` or `<video>`) is typically styled to cover the frame area.

## Basic Usage

```html
<e-frame ratio="16:9">
  <img src="https://via.placeholder.com/800x450/cccccc/969696?text=16:9+Image" alt="Placeholder">
</e-frame>
```

## Example

This example shows a frame with a 1:1 aspect ratio.

<div class="example-container" style="max-width: 300px;"> {/* Constrain container width */}
  <e-frame ratio="1:1" style="border: 1px dashed blue;">
    <img src="https://via.placeholder.com/300/cccccc/969696?text=1:1+Image" alt="Placeholder">
  </e-frame>
</div>

<style>
.example-container {
  /* background-color: #f0f0f0; */ /* Defined in parent example */
  /* padding: 1rem; */
  margin-top: 1rem;
  border-radius: 4px;
}
</style>

<script>
  // Import the component definition
  import 'e-layout/frame';
</script>

## Properties

*   **`ratio`**: `string` (Default: `'16:9'`)
    *   The desired aspect ratio, formatted as `'N:D'` or `'N/D'` (e.g., `'16:9'`, `'1/1'`, `'4/3'`).

## Styling

*   **`--n`**: (Default: `16`) The numerator of the aspect ratio.
*   **`--d`**: (Default: `9`) The denominator of the aspect ratio.
    *   These are set internally based on the `ratio` property but can potentially be overridden via CSS.

```css
/* Style the slotted content to fill the frame */
e-frame > img,
e-frame > video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

You can also apply standard CSS like `max-width`, `border`, etc., to the `e-frame` element itself.