---
layout: ../../layouts/Layout.astro
title: 'Frame Component'
---

# Frame (`<e-frame>`)

The `e-frame` component creates a container that maintains a specific aspect ratio. It's useful for embedding videos or images while preserving their proportions. Content inside the frame (like `<img>` or `<video>`) is typically styled to cover the frame area.

## Basic Usage

```html
<e-frame ratio="16:9">
  <img src="/e-layout/hd720.png" alt="Placeholder">
</e-frame>
```

## Examples

**Square Frame: `ratio="1:1"`**

<div class="example-container">
  <div class="example-wrapper">
    <e-frame ratio="1:1">
      <img src="/e-layout/hd720.png" alt="Placeholder">
    </e-frame>
  </div>
</div>

**4:3 Frame: `ratio="4:3"`**

<div class="example-container">
  <div class="example-wrapper">
    <e-frame ratio="4:3">
      <img src="/e-layout/hd720.png" alt="Placeholder">
    </e-frame>
  </div>
</div>

**Wide Frame: `ratio="2:1"`**

<div class="example-container">
  <div class="example-wrapper">
    <e-frame ratio="2:1">
      <img src="/e-layout/hd720.png" alt="Placeholder">
    </e-frame>
  </div>
</div>

## Properties

*   **`ratio`** `<string>` (Default: `'16:9'`)
    *   The desired aspect ratio, formatted as `'N:D'` or `'N/D'` (e.g., `'16:9'`, `'1/1'`, `'4/3'`). Maps to CSS variables `--n` and `--d`. Attribute: `ratio`.
*   **`tag`** `<string>` (Default: `undefined`)
    *   Provides a semantic hint (e.g., 'figure'). Does not change the rendered tag. Useful for CSS selectors (`e-frame[tag="..."]`). Attribute: `tag`.

<style>
/* .example-container and .example-wrapper styles are defined globally */
</style>
