---
layout: ../../layouts/Layout.astro
title: 'Center Component'
---

# Center (`<e-center>`)

The `e-center` component centers its content horizontally within a defined maximum width, applying gutters (padding) on either side. It can optionally center text content or use intrinsic (flex) centering.

## Basic Usage

**Horizontal Centering (Default):**

```html
<e-center>
  <span>Centered Text</span>
</e-center>
```

**With Max Width and Gutters:**

```html
<e-center max="500px" gutters="1rem">
  <span>This content is centered within a 500px max width and has 1rem gutters.</span>
</e-center>
```

**With Text Centering:**

```html
<e-center with-text>
  <p>This text block will be centered.</p>
</e-center>
```

**With Intrinsic Centering:**

```html
<e-center intrinsic>
  <button>Centered Button</button>
</e-center>
```

## Examples

**Horizontal Only:**

<div class="example-container" style="min-height: 100px; border: 1px solid #ccc;">
  <e-center style="border: 1px dashed blue;">
    <span>Horizontally Centered</span>
  </e-center>
</div>

**Intrinsic & Text Centering:**

<div class="example-container" style="min-height: 100px; border: 1px solid #ccc;">
  <e-center intrinsic with-text style="border: 1px dashed green;">
    <button>Intrinsically Centered Button</button>
    <p>And centered text.</p>
  </e-center>
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
</script>

## Properties

*   **`max`**: `string` (Default: `'var(--measure, 60ch)'`)
    *   The maximum inline size (width) of the content. Attribute: `max`.
*   **`gutters`**: `string` (Default: `'0'`)
    *   The minimum space (inline padding) on either side of the content.
*   **`withText`**: `boolean` (Default: `false`)
    *   Whether to apply `text-align: center`. Attribute: `with-text`.
*   **`intrinsic`**: `boolean` (Default: `false`)
    *   Whether to use intrinsic (flex) centering. Attribute: `intrinsic`.

## Styling

*   **`--center-max-width`**: (Default: `var(--measure, 60ch)`) Overrides `max`.
*   **`--center-gutters`**: (Default: `0`) Overrides `gutters`.
*   Standard CSS like `padding-block` can be applied directly.

```css
e-center {
  max-width: 500px;
  margin-inline: auto; /* Center the component itself if needed */
  padding: 2rem;
  border: 1px solid lightgray;
}