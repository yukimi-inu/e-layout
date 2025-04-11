---
layout: ../../layouts/Layout.astro
title: 'Box Component (e-box)'
---

# Box (`<e-box>`)

The `e-box` component is a fundamental layout primitive that acts as a simple block-level container. It provides basic styling options like padding, border, background color, text color, and border radius through CSS custom properties and corresponding element attributes.

## Basic Usage

```html
<e-box>This content is inside a Box.</e-box>
```

## Examples

**Styled Box: `padding="1.5rem" border-width="2px" border-color="blue" radius="0.5rem" bg="slategray" color="white"`**

<div class="example-container">
  <div class="example-wrapper">
    <e-box tag="section" padding="1.5rem" border="4px solid var(--border-color)" radius="0.5rem" bg="--color-bg-example-blue" color="--color-text-therity">
      This box uses `tag="section"` and has custom styles applied via attributes (padding, border, radius, background, color).
    </e-box>
  </div>
</div>

## Properties

*   **`tag`** `<string>` (Default: `undefined`)
    *   Provides a semantic hint (e.g., 'section', 'article'). Does not change the rendered tag. Useful for CSS selectors (`e-box[tag="..."]`). Attribute: `tag`.
*   **`padding`** `<string>` (Default: `0`)
    *   Sets the padding inside the box. Accepts any valid CSS padding value. Maps to `--box-padding`. Attribute: `padding`.
*   **`border-width`** `<string>` (Default: `0`)
    *   Sets the border width. Maps to `--box-border-width`. Attribute: `border-width`.
*   **`border-color`** `<string>` (Default: `transparent`)
    *   Sets the border color. Maps to `--box-border-color`. Used if `border` is not set. Attribute: `border-color`.
*   **`border`** `<string>` (Default: `unset`)
    *   Sets the border using CSS shorthand. Maps to `--box-border`. Overrides `border-width` and `border-color`. Example: `"1px solid black"`. Attribute: `border`.
*   **`radius`** `<string>` (Default: `0`)
    *   Sets the border radius. Maps to `--box-radius`. Attribute: `radius`.
*   **`bg`** `<string>` (Default: `inherit`)
    *   Sets the background color. Maps to `--box-bg`. Attribute: `bg`.
*   **`color`** `<string>` (Default: `currentColor`)
    *   Sets the text color. Maps to `--box-color`. Attribute: `color`.

<style>
/* .example-container and .example-wrapper styles are defined globally */
</style>
