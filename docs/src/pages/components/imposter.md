---
layout: ../../layouts/Layout.astro
title: 'Imposter Component'
---

# Imposter (`<e-imposter>`)

The `e-imposter` component positions its content outside the normal document flow, typically centered over its containing context using `position: absolute`. It now supports alignment using logical properties (`alignBlock`, `alignInline`) for 9 positions (start/center/end combinations). It can optionally be fixed to the viewport, break out of its container bounds, and have a margin from the aligned container edges. Useful for modals, popovers, etc.

## Basic Usage

```html
<div class="example-container" style="position: relative; min-height: 10em;"> <!-- position: relative is needed -->
  <!-- Content underneath -->
  <p>Some background content.</p>
  <e-imposter margin="1rem">
    <div class="example-item bg-example-neutral">
      Overlay Content (with 1rem margin from edges)
    </div>
  </e-imposter>
</div>
```

## Examples

**Default Imposter (Centered):**

<div class="example-container" style="position: relative; min-height: 10em;"> <!-- position: relative is needed -->
  <div class="example-wrapper">
    <p style="padding: 1rem;">This is the background content area.</p>
    <e-imposter style="width: 150px;">
      <div class="example-item bg-example-red">
        Imposter Content (Centered)
      </div>
    </e-imposter>
  </div>
</div>

**Breakout vs Non-Breakout:**

<div class="example-container" style="position: relative; width: 7em; min-height: 15em;"> <!-- position: relative is needed -->
  <div class="example-wrapper">
    <p style="padding: 1rem;">Background</p>
    <e-imposter breakout style="width: 150px;" align-block="start" class="example-item bg-example-red">
      Breakout (Overflows)
    </e-imposter>
    <e-imposter style="width: 150px;" align-block="end" class="example-item bg-example-blue">
      Non-Breakout (Contained)
    </e-imposter>
  </div>
</div>

**Fixed Position Example: `fixed`**

*(Live fixed examples are difficult to demonstrate inline. The code below shows how it would be used.)*

```html
<!-- This would appear centered on the screen -->
<e-imposter fixed margin="1em">
  <div class="example-item bg-example-red">
    Fixed Imposter
  </div>
</e-imposter>
```

**Fixed and Breakout: `fixed breakout`**

```html
<!-- This would appear centered on the screen and ignore container bounds -->
<e-imposter fixed breakout>
  <div class="example-item bg-example-green">
    Fixed & Breakout Imposter
  </div>
</e-imposter>
```

**Alignment Examples:**

<e-grid class="example-container">
  <div class="example-wrapper" style="position: relative; min-height: 8em;">
    <e-imposter breakout align-block="start" align-inline="start" margin="0.25em">
      <div class="example-item bg-example-blue">Start/Start (m:0.25em)</div>
    </e-imposter>
  </div>

  <div class="example-wrapper" style="position: relative; min-height: 8em;">
    <e-imposter breakout align-block="center" align-inline="end" margin="0.5em">
       <div class="example-item bg-example-blue">Center/End (m:0.5em)</div>
    </e-imposter>
  </div>

  <div class="example-wrapper" style="position: relative; min-height: 8em;">
    <e-imposter breakout align-block="end" align-inline="center" margin="0">
       <div class="example-item bg-example-blue">End/Center (m:0)</div>
    </e-imposter>
  </div>
</e-grid>

## Properties

*   **`breakout`** `<boolean>` (Default: `false`)
    *   Allows the element to overflow its container. Attribute: `breakout`.
*   **`margin`** `<string>` (Default: `'0px'`)
    *   Logical margin (offset) from the aligned edge(s). Maps to `--imposter-margin`. Attribute: `margin`.
*   **`fixed`** `<boolean>` (Default: `false`)
    *   Uses `position: fixed` instead of `absolute`. Attribute: `fixed`.
*   **`align-block`** `<'start' | 'center' | 'end'>` (Default: `'center'`)
    *   Block-direction alignment (e.g., top/center/bottom). Attribute: `align-block`.
*   **`align-inline`** `<'start' | 'center' | 'end'>` (Default: `'center'`)
    *   Inline-direction alignment (e.g., left/center/right). Attribute: `align-inline`.
*   **`z-index`** `<string>` (Default: `'1'`)
    *   Sets the stack order. Maps to `--imposter-z-index`. Attribute: `z-index`.
