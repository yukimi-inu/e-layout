---
layout: ../../layouts/Layout.astro
title: 'Imposter Component'
---

# Imposter (`<e-imposter>`)

The `e-imposter` component positions its content outside the normal document flow, typically centered over its containing context using `position: absolute`. It can optionally be fixed to the viewport, break out of its container bounds, and have a margin from the container edges. Useful for modals, popovers, etc.

## Basic Usage

```html
<div style="position: relative; height: 200px; border: 1px solid gray;">
  <!-- Content underneath -->
  <p>Some background content.</p>

  <e-imposter margin="1rem"> {/* Add margin */}
    <div style="background: white; padding: 2rem; border: 1px solid black;">
      Overlay Content (with 1rem margin from edges)
    </div>
  </e-imposter>
</div>
```

## Example

The imposter (red box) is centered within the gray container, which has `position: relative`.

<div class="example-container" style="position: relative; height: 200px; border: 1px solid gray; background-color: lightgray;">
  <p style="padding: 1rem;">This is the background content area.</p>

  <e-imposter style="width: 150px;">
    <div class="example-item bg-example-red" style="color: #991b1b; padding: 1rem; text-align: center; border-radius: 4px;"> {/* Adjusted text color for lighter bg */}
      Imposter Content (Centered)
    </div>
  </e-imposter>
</div>

**Fixed Position and Breakout Example:**

```html
<!-- This would appear centered on the screen and ignore container bounds -->
<e-imposter fixed breakout>
  <div style="background: rgba(0,0,0,0.7); color: white; padding: 2rem;">
    Fixed Overlay (Ignoring Bounds)
  </div>
</e-imposter>
```
*(Note: Displaying live fixed examples can be disruptive.)*

<style>
.example-container {
  /* background-color: #f0f0f0; */ /* Defined in parent example */
  /* padding: 1rem; */
  margin-top: 1rem;
  border-radius: 4px;
}
</style>

<script>
  // Import the component definition
  import 'e-layout/imposter';
</script>

## Properties

*   **`breakout`**: `boolean` (Default: `false`)
    *   If `true`, allows the element to overflow its container. Reflects as attribute `breakout`.
*   **`margin`**: `string` (Default: `'0px'`)
    *   The minimum space between the element and container edges when `breakout` is `false`. Accepts any valid CSS size value.
*   **`fixed`**: `boolean` (Default: `false`)
    *   If `true`, uses `position: fixed` instead of `absolute`. Reflects as attribute `fixed`.

## Styling

*   **`--imposter-margin`**: (Default: `0px`) Overrides `margin`.
*   The component uses `position: absolute` (or `fixed`) and centers itself by default (`inset-*`, `transform`). These can be overridden with standard CSS.
*   The containment logic (`max-inline-size`, `max-block-size`, `overflow`) is applied when `:not([breakout])`.

```css
e-imposter {
  /* Position top-right instead of center */
  top: 1rem;
  left: auto;
  right: 1rem;
  transform: none;
  /* Add custom background/padding */
  --imposter-background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}