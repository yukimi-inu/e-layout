---
layout: ../../layouts/Layout.astro
title: 'Cover Component'
---

# Cover (`<e-cover>`)

The `e-cover` component creates a layout using Grid where the main content (placed in the default slot) is vertically centered between optional header (`slot="header"`) and footer (`slot="footer"`) content. It's often used for hero sections or full-page covers. It ensures a minimum height and applies consistent spacing using `gap`.

## Basic Usage

```html
<e-cover min-height="70vh">
  <header slot="header">Top Content (Header)</header>
  <h1>Main Centered Content</h1>
  <footer slot="footer">Bottom Content (Footer)</footer>
</e-cover>
```

## Example

**Default Cover: `(min-height=100vh)`**

<div class="example-container">
  <div class="example-wrapper">
    <e-cover>
      <div slot="header" class="example-item has-padding bg-example-slate">Header Element</div>
      <div class="example-item has-padding bg-example-blue">
        <h2>This is the Main Content</h2>
        <p>It is vertically centered.</p>
      </div>
      <div slot="footer" class="example-item has-padding bg-example-slate">Footer Element</div>
    </e-cover>
  </div>
</div>

**No Padding (Header + Main): `min-height="10em" no-padding`**

<div class="example-container">
  <div class="example-wrapper">
    <e-cover min-height="10em" no-padding>
      <div slot="header" class="example-item has-padding bg-example-slate">Header Element</div>
      <div class="example-item has-padding bg-example-blue">
        <h2>This is the Main Content</h2>
        <p>It is vertically centered.</p>
      </div>
    </e-cover>
  </div>
</div>

**No Padding (Main Only): `min-height="10em" no-padding`**

<div class="example-container">
  <div class="example-wrapper">
    <e-cover min-height="10em" no-padding>
      <div class="example-item has-padding bg-example-blue">
        <h2>This is the Main Content</h2>
        <p>It is vertically centered.</p>
      </div>
    </e-cover>
  </div>
</div>

**No Padding and No Space: `min-height="4em" space="0" no-padding`**

<div class="example-container">
  <div class="example-wrapper">
    <e-cover min-height="4em" space="0" no-padding>
      <div slot="header" class="example-item has-padding bg-example-slate">Header (No Padding on Cover)</div>
      <div class="example-item has-padding bg-example-blue">Main Centered</div>
      <div slot="footer" class="example-item has-padding bg-example-slate">Footer</div>
    </e-cover>
  </div>
</div>


## Properties

*   **`min-height`** `<string>` (Default: `'100vh'`)
    *   The minimum height (`min-block-size`) of the cover element. Maps to `--cover-min-height`. Attribute: `min-height`.
*   **`space`** `<string>` (Default: `'1rem'`)
    *   The space (gap) between header, main, and footer. Also used as default padding. Maps to `--cover-space`. Attribute: `space`.
*   **`no-padding`** `<boolean>` (Default: `false`)
    *   If true, removes padding from the cover element. Attribute: `no-padding`.

## Slots

*   **`header`:** Optional slot for content placed at the top.
*   **Default Slot:** Used for the main content that will be vertically centered.
*   **`footer`:** Optional slot for content placed at the bottom.
