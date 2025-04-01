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

This example pushes Item 3 and subsequent items down by applying `margin-bottom: auto` to Item 2. *(Note: Current implementation might require manual styling or future enhancement)*

```html
<e-stack split-after="2">
  <div>Header</div>
  <div>Main Content</div>
  <div>Footer</div>
</e-stack>
```

## Examples

**Vertical:**

<div class="example-container">
  <e-stack style="border: 1px dashed green; padding: 1rem;">
    <div class="example-item bg-example-slate">Item 1</div>
    <div class="example-item bg-example-blue">Item 2</div> {/* red -> blue */}
    <div class="example-item bg-example-orange">Item 3</div>
  </e-stack>
</div>

**Custom Space (`space="0.5rem"`):**

<div class="example-container">
  <e-stack space="0.5rem" style="border: 1px dashed purple; padding: 1rem;">
    <div class="example-item bg-example-slate">Item 1</div>
    <div class="example-item bg-example-blue">Item 2</div> {/* red -> blue */}
    <div class="example-item bg-example-orange">Item 3</div>
  </e-stack>
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
  import 'e-layout/stack';
</script>

## Properties

*   **`space`**: `string` (Default: `'1.5rem'`)
    *   The space (margin) applied between child elements. Accepts any valid CSS margin value.
*   **`recursive`**: `boolean` (Default: `false`)
    *   Whether the space should apply recursively to nested stacks. *(Note: Due to Shadow DOM limitations, true recursive application is currently difficult to achieve purely within the component.)*
*   **`splitAfter`**: `number | null` (Default: `null`)
    *   The 1-based index of the child after which subsequent children should be pushed down (using `margin-bottom: auto`). Attribute: `split-after`. *(Note: Current CSS-based implementation might not fully support this; JS intervention might be needed in future versions.)*

## Styling

*   **`--stack-space`**: (Default: `1.5rem`)
    *   Overrides the `space` property via CSS, controlling the margin between elements.

```css
e-stack {
  --stack-space: 2.5rem; /* Increase the space */
}
```