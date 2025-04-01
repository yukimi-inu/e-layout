---
layout: ../../layouts/Layout.astro
title: 'Switcher Component'
---

# Switcher (`<e-switcher>`)

The `e-switcher` component arranges its children horizontally until the container reaches a certain width threshold, at which point it switches to a vertical layout (by wrapping items). This is useful for creating responsive layouts that adapt to available space.

## Basic Usage

```html
<e-switcher threshold="500px" gap="0.5rem"> {/* Use threshold and gap */}
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</e-switcher>
```

## Example

Resize the container below horizontally to see the layout switch. The threshold is set to `40rem` (typically 640px).

<div class="example-container">
  <e-switcher threshold="40rem" gap="1.5rem" style="border: 1px dashed blue; padding: 1rem;"> {/* Use threshold and gap */}
    <div class="example-item bg-example-slate" style="padding: 1rem;">Item 1</div>
    <div class="example-item bg-example-blue" style="padding: 1rem;">Item 2</div> {/* red -> blue */}
    <div class="example-item bg-example-orange" style="padding: 1rem;">Item 3</div>
    <div class="example-item bg-example-green" style="padding: 1rem;">Item 4</div>
  </e-switcher>
</div>

<style>
.example-container {
  background-color: #f0f0f0;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;
  resize: horizontal; /* Allow resizing for testing */
  overflow: auto;
  min-width: 200px; /* Minimum width for resizing */
  max-width: 800px; /* Maximum width for resizing */
  border: 1px solid #ccc; /* Border for the resizable container */
}
</style>

<script>
  // Import the component definition
  import 'e-layout/switcher';
</script>

## Properties

*   **`threshold`**: `string` (Default: `'30rem'`)
    *   The container width threshold (e.g., `'600px'`, `'40rem'`) at which the layout switches.
*   **`gap`**: `string` (Default: `'var(--s1, 1rem)'`)
    *   The space between child elements. Accepts any valid CSS `gap` value.
*   **`limit`**: `number` (Default: `Infinity`)
    *   The maximum number of elements allowed side-by-side before wrapping to 100% width. *(Note: Current implementation uses JavaScript for this.)*

## Styling

*   **`--switcher-gap`**: (Default: `var(--s1, 1rem)`) Overrides `gap`.
*   **`--switcher-threshold`**: (Default: `30rem`) Overrides `threshold`.

```css
e-switcher {
  --switcher-gap: 0.5rem;
  --switcher-threshold: 25rem; /* Change the switching point */
}