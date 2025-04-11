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
<e-center max="20em" gutters="1rem">
  <span>This content is centered within a 20em max width and has 1rem gutters.</span>
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

**Basic Centering: `max="30em"`**

<div class="example-container">
  <div class="example-wrapper">
    <e-center max="30em">
      <div class="example-item bg-example-blue">Horizontally Centered</div>
    </e-center>
  </div>
</div>

**Intrinsic and Text Centering: `max="30em" intrinsic with-text`**

<div class="example-container">
  <div class="example-wrapper">
    <e-center max="30em" intrinsic with-text>
      <div class="example-item bg-example-blue">
        <button>Intrinsically Centered Button</button>
        <p>And centered text.</p>
      </div>
    </e-center>
  </div>
</div>

**Intrinsic with Gutters: `intrinsic max="30em" gutters="5em"`**

<div class="example-container">
  <div class="example-wrapper">
    <e-center intrinsic max="30em" gutters="5em">
      <div class="example-item bg-example-blue">
        <p>Gutters (5em)</p>
        <p>This content is intrinsically centered within a max width of 30em, but has 5em gutters on each side.</p>
      </div>
    </e-center>
  </div>
</div>

## Properties

*   **`max`** `<string>` (Default: `100%`)
    *   The maximum inline size (width) of the content. Maps to `--center-max-width`. Attribute: `max`.
*   **`gutters`** `<string>` (Default: `0`)
    *   The padding on the left and right sides of the content. Maps to `--center-gutters`. Attribute: `gutters`.
*   **`with-text`** `<boolean>` (Default: `false`)
    *   If true, centers the text content within the element (`text-align: center`). Attribute: `with-text`.
*   **`intrinsic`** `<boolean>` (Default: `false`)
    *   If true, centers the element intrinsically based on its content width (`display: flex; align-items: center;`). Attribute: `intrinsic`.
*   **`tag`** `<string>` (Default: `undefined`)
    *   Provides a semantic hint (e.g., 'section'). Does not change the rendered tag. Useful for CSS selectors (`e-center[tag="..."]`). Attribute: `tag`.
