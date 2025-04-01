---
layout: ../../layouts/Layout.astro
title: 'Cluster Component'
---

# Cluster (`<e-cluster>`)

The `e-cluster` component arranges items horizontally, allowing them to wrap onto multiple lines if necessary. It provides control over horizontal justification (`justify`) and vertical alignment (`align`) of the items within each line.

## Basic Usage

```html
<e-cluster>
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
  <button>Another Button</button>
  <button>Short</button>
  <button>A Much Longer Button Label</button>
</e-cluster>
```

## Examples

**Default (justify: flex-start, align: flex-start, wrap: wrap):**

<div class="example-container">
  <e-cluster style="border: 1px dashed blue; padding: 0.5rem;">
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
    <button>Another Button</button>
    <button>Short</button>
    <button>A Much Longer Button Label</button>
    <button>More</button>
  </e-cluster>
</div>

**justify: center, align: start:**

<div class="example-container">
  <e-cluster justify="center" align="center" space="0.5rem" wrap="nowrap" style="border: 1px dashed green; padding: 0.5rem; overflow-x: auto;"> {/* Added overflow for nowrap example */}
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
    <button>Another Button</button>
    <button>Short</button>
    <button>A Much Longer Button Label</button>
    <button>More</button>
  </e-cluster>
</div>

<style>
.example-container {
  background-color: #f0f0f0;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;
}
/* Example button style for clarity */
.example-container button {
  padding: 0.3rem 0.8rem;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 4px;
  white-space: nowrap;
}
</style>

<script>
  // Import the component definition
  import 'e-layout/cluster';
</script>

## Properties

*   **`justify`**: `string` (Default: `'flex-start'`)
    *   A CSS `justify-content` value.
*   **`align`**: `string` (Default: `'flex-start'`)
    *   A CSS `align-items` value.
*   **`space`**: `string` (Default: `'var(--s1, 1rem)'`)
    *   A CSS `gap` value controlling the space between items.
*   **`wrap`**: `'wrap' | 'nowrap' | 'wrap-reverse'` (Default: `'wrap'`)
    *   Controls the `flex-wrap` behavior.

## Styling

*   **`--cluster-space`**: (Default: `var(--s1, 1rem)`) Overrides `space`.
*   **`--cluster-justify`**: (Default: `flex-start`) Overrides `justify`.
*   **`--cluster-align`**: (Default: `flex-start`) Overrides `align`.
*   **`--cluster-wrap`**: (Default: `wrap`) Overrides `wrap`.

```css
e-cluster {
  --cluster-space: 0.5rem;
  --cluster-justify: center;
}