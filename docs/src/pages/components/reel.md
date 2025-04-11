---
layout: ../../layouts/Layout.astro
title: 'Reel Component'
---

# Reel (`<e-reel>`)

The `e-reel` component creates a horizontally scrolling container with customizable item widths, spacing, and scrollbar appearance. It's ideal for displaying items like images or cards that overflow the container.
## Basic Usage

**Horizontal Reel:**

```html
<e-reel item-width="10em" gap="0.5rem" height="15em">
  <img src="/e-layout/thumb_1.jpg" alt="Placeholder 1">
  <img src="/e-layout/thumb_2.jpg" alt="Placeholder 2">
  <img src="/e-layout/thumb_3.jpg" alt="Placeholder 3">
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

**Image Reel: `height="10em" gap="0.5rem"`**

<div class="example-container">
  <div class="example-wrapper">
    <e-reel height="10em" gap="0.5rem">
      <img src="/e-layout/thumb_1.jpg" alt="Placeholder 1">
      <img src="/e-layout/thumb_2.jpg" alt="Placeholder 2">
      <img src="/e-layout/thumb_3.jpg" alt="Placeholder 3">
      <img src="/e-layout/thumb_4.jpg" alt="Placeholder 4">
      <img src="/e-layout/thumb_5.jpg" alt="Placeholder 5">
    </e-reel>
  </div>
</div>

**Fixed Item Width & No Scrollbar: `item-width="10em" no-bar padding="0.5em"`**

<div class="example-container">
  <div class="example-wrapper">
    <e-reel item-width="10em" no-bar padding="0.5em">
      <div class="example-item bg-example-blue">Item 1 (10em)</div>
      <div class="example-item bg-example-blue">Item 2 (10em)</div>
      <div class="example-item bg-example-blue">Item 3 (10em)</div>
      <div class="example-item bg-example-blue">Item 4 (10em)</div>
    </e-reel>
  </div>
</div>

## Properties

*   **`item-width`** `<string>` (Default: `'auto'`)
    *   Width of each item. Maps to `--reel-item-width`. Attribute: `item-width`.
*   **`gap`** `<string>` (Default: `'1rem'`)
    *   Space between items. Maps to `--reel-gap`. Attribute: `gap`.
*   **`height`** `<string>` (Default: `'auto'`)
    *   Height of the reel container. Maps to `--reel-height`. Attribute: `height`.
*   **`padding`** `<string>` (Default: `'0'`)
    *   Padding of the reel container. Maps to `--reel-padding`. Attribute: `padding`.
*   **`no-bar`** `<boolean>` (Default: `false`)
    *   If true, hides the scrollbar. Attribute: `no-bar`.