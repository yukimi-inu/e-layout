---
layout: ../../layouts/Layout.astro
title: 'Stack Component'
---

# Stack (`<e-stack>`)

The `e-stack` component arranges its direct children vertically, applying a consistent space (margin) between them. It utilizes Flexbox with `flex-direction: column`.

## Basic Usage

**Vertical Stack (Default):**

```html
<e-stack>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</e-stack>
```

**With Custom Space:**

```html
<e-stack space="2rem">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</e-stack>
```

**With Split:**

This example pushes Item 3 and subsequent items down by applying `margin-block-end: auto` to Item 2.
```html
<e-stack split-after="2">
  <div>Header</div>
  <div>Main Content</div>
  <div>Footer</div>
</e-stack>
```

## Examples

**Default Stack:**

<div class="example-container">
  <div class="example-wrapper">
    <e-stack>
      <div class="example-item bg-example-blue">Item 1</div>
      <div class="example-item bg-example-blue">Item 2</div>
      <div class="example-item bg-example-blue">Item 3</div>
    </e-stack>
  </div>
</div>

**Custom Space: `space="0.5rem"`**

<div class="example-container">
  <div class="example-wrapper">
    <e-stack space="0.5rem">
      <div class="example-item bg-example-blue">Item 1</div>
      <div class="example-item bg-example-blue">Item 2</div>
      <div class="example-item bg-example-blue">Item 3</div>
    </e-stack>
  </div>
</div>

**Split After: `split-after="2" space="0.5rem"`**

<div class="example-container">
  <div class="example-wrapper">
    <e-stack split-after="2" space="0.5rem" style="min-height: 15em; border: 1px dashed lightgray;"> <!-- Added height/border for visibility -->
      <div class="example-item bg-example-blue">Item 1</div>
      <div class="example-item bg-example-blue">Item 2 (margin-bottom: auto applied here)</div>
      <div class="example-item bg-example-blue">Item 3 (Pushed down)</div>
    </e-stack>
  </div>
</div>

## Properties

*   **`space`** `<string>` (Default: `'1.5rem'`)
    *   Vertical space between items. Maps to `--stack-space`. Attribute: `space`.
*   **`split-after`** `<number | null>` (Default: `null`)
    *   1-based index after which to add `margin-block-end: auto`, pushing subsequent items down. Attribute: `split-after`.
*   **`tag`** `<string>` (Default: `undefined`)
    *   Provides a semantic hint (e.g., 'ul'). Does not change the rendered tag. Useful for CSS selectors (`e-stack[tag="..."]`). Attribute: `tag`.
