---
layout: ../../layouts/Layout.astro
title: 'Box Component'
---

# Box (`<e-box>`)

The `e-box` component is the most fundamental layout primitive. It acts as a simple block-level container or wrapper around its content, primarily used to apply padding or other basic block styles.

## Basic Usage

```html
<e-box>This content is inside a Box.</e-box>
```

## Example

Here's a live example:

<div class="example-container">
  <e-box padding="1.5rem" style="border: 1px dashed blue;">
    This content is inside an e-box component with `padding="1.5rem"`.
  </e-box>
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
  // Import the component definition to register the custom element
  // The alias 'e-layout/box' is configured in astro.config.mjs
  import 'e-layout/box';
</script>

## Properties

*   **`padding`**: `string` (Default: `'0'`)
    *   Sets the padding inside the box. Accepts any valid CSS padding value (e.g., `'1rem'`, `'0.5rem 1rem'`).

## Styling

*   **`--box-padding`**: (Default: `0`)
    *   Overrides the `padding` property via CSS.

You can also apply standard CSS like `border`, `background-color`, etc., directly to the `e-box` element.