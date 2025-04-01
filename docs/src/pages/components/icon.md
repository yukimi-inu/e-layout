---
layout: ../../layouts/Layout.astro
title: 'Icon Component'
---

# Icon (`<e-icon>`)

The `e-icon` component is primarily a layout wrapper for icon graphics (typically SVG). It standardizes the icon's dimensions relative to the text (`0.75em` or `1cap`) and provides properties for spacing and accessibility. The actual icon graphic should be provided via the default slot.

## Basic Usage

```html
<span class="with-icon"> {/* Parent with class needed for spacing */}
  <e-icon space="0.25em" label="Information"> {/* Use space and label */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <!-- SVG path data for your icon -->
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
    </svg>
  </e-icon>
  <span>Icon with text</span>
</span>
```

## Example

<div class="example-container">
  <p>
    An inline icon <span class="with-icon"><e-icon label="Info" space="0.2em">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="color: blue;">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    </e-icon></span> next to text.
  </p>
  <p>
    Standalone icon (size relative to parent font size): <e-icon style="font-size: 48px; border: 1px dashed green;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="color: green;">
         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    </e-icon>
  </p>
</div>

<style>
.example-container {
  background-color: #f0f0f0;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;
}
/* Style for icon with text example */
.with-icon {
  display: inline-flex;
  align-items: baseline;
}
.with-icon > e-icon {
  margin-inline-end: var(--icon-space, 0.2em); /* Use space from component */
}
</style>

<script>
  // Import the component definition
  import 'e-layout/icon';
</script>

## Properties

*   **`space`**: `string | null` (Default: `null`)
    *   The space between the icon and adjacent text when used within a context like `.with-icon`. If `null`, natural word spacing is preserved. This sets the `--icon-space-override` CSS variable.
*   **`label`**: `string | null` (Default: `null`)
    *   Provides an accessible label (`aria-label`) for the icon, making it behave like an image for assistive technologies.

## Styling

*   **`--icon-space-override`**: (Default: `1rem` if `space` is set, otherwise not set) Overrides the spacing applied by a parent context (like `.with-icon > e-icon`).
*   The component's size (`width`/`height`) is set relative to the font size (`0.75em`). You can change the effective size by adjusting the `font-size` on the `e-icon` element or its parent.
*   The `color` property can be used to set the fill/stroke color of the slotted SVG if the SVG uses `currentColor`.

```css
/* Example of using the .with-icon pattern */
.my-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5em; /* Or use e-icon's space property */
}
.my-button > e-icon {
  /* margin-inline-end: var(--icon-space, 0.5em); */ /* If using space prop */
}

e-icon {
  font-size: 1.5rem; /* Make icon larger */
  color: blue;
}