---
layout: ../../layouts/Layout.astro
title: 'Icon Component'
---

# Icon (`<e-icon>`)

The `e-icon` component is primarily a layout wrapper for icon graphics (typically SVG). It standardizes the icon's dimensions (defaulting to `1em` x `1em`) and provides properties for size, color, and accessibility. The actual icon graphic should be provided via the default slot.

## Basic Usage

```html
<e-icon label="Information" color="slategray" size="1.5em">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <!-- SVG path data for your icon -->
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
  </svg>
</e-icon>

<span>Icon with text</span>
```

## Examples

**Icon with Text and Label: `label="Info" color="blue" size="1em"`**

<div class="example-container">
  <div class="example-wrapper">
    <p>
      An inline icon
      <e-icon label="Info" color="--color-bg-example-blue" size="1em">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
        with adjacent text.
      </e-icon>
    </p>
  </div>
</div>

**Standalone Icon (Larger Size): `size="2em" color="blue"`**
<div class="example-container">
  <div class="example-wrapper">
    <p>
      Standalone icon:
      <e-icon size="2em" color="--color-bg-example-blue">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
      </e-icon>
    </p>
  </div>
</div>

**Icon with Inherit Color & Custom Space: `space="1em"`**
<div class="example-container">
  <div class="example-wrapper">
    <p style="color: var(--color-bg-example-blue)">
      Icon with more space:
      <e-icon space="1em">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          Text after icon.
      </e-icon>
    </p>
  </div>
</div>


## Properties

*   **`label`** `<string | null>` (Default: `null`)
    *   Accessible label (`aria-label`) for the icon. Sets `role="img"` if present. Attribute: `label`.
*   **`color`** `<string>` (Default: `undefined`)
    *   Icon color. Maps to `--e-icon-color`. Inherits if undefined. Attribute: `color`.
*   **`size`** `<string>` (Default: `'1em'`)
    *   Icon width and height. Maps to `--e-icon-size`. Attribute: `size`.
*   **`space`** `<string>` (Default: `'0.25em'`)
    *   Space between icon and adjacent text. Maps to `--e-icon-space` (`gap`). Attribute: `space`.
