---
layout: ../../layouts/Layout.astro
title: 'Switcher Component'
---

# Switcher (`<e-switcher>`)

The `e-switcher` component arranges its children horizontally until the container reaches a certain width threshold, at which point it switches to a vertical layout (by wrapping items). This is useful for creating responsive layouts that adapt to available space.

## Basic Usage

```html
<e-switcher threshold="500px" gap="0.5rem">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</e-switcher>
```

## Examples

**Basic Switcher: `threshold="40rem" gap="1.5rem"`**

Resize the container below horizontally to see the layout switch. The threshold is set to `40rem`.

<div class="example-container">
  <div class="example-wrapper">
    <e-switcher threshold="40rem" gap="1.5rem">
      <div class="example-item bg-example-blue">Item 1</div>
      <div class="example-item bg-example-blue">Item 2</div>
      <div class="example-item bg-example-blue">Item 3</div>
      <div class="example-item bg-example-blue">Item 4</div>
    </e-switcher>
  </div>
</div>

**Switcher with Limit: `threshold="40rem" gap="1.5rem" limit="2"`**

Only the first 2 items will stay side-by-side above the threshold. Subsequent items wrap to a new line.

<div class="example-container">
  <div class="example-wrapper">
    <e-switcher threshold="40rem" gap="1.5rem" limit="2">
      <div class="example-item bg-example-blue">Item 1 (Limit)</div>
      <div class="example-item bg-example-blue">Item 2 (Limit)</div>
      <div class="example-item bg-example-blue">Item 3</div>
      <div class="example-item bg-example-blue">Item 4</div>
    </e-switcher>
  </div>
</div>

## Properties

*   **`threshold`** `<string>` (Default: `'30rem'`)
    *   The container width threshold (e.g., `'600px'`, `'40rem'`) at which the layout switches from row to column. Maps to `--switcher-threshold`. Attribute: `threshold`.
*   **`gap`** `<string>` (Default: `'var(--s1, 1rem)'`)
    *   The space between child elements. Accepts any valid CSS `gap` value. Maps to `--switcher-gap`. Attribute: `gap`.
*   **`limit`** `<number>` (Default: `Infinity`)
    *   The maximum number of elements allowed side-by-side before subsequent items wrap to 100% width. Attribute: `limit`.
