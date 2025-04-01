---
layout: ../../layouts/Layout.astro
title: 'Sidebar Component'
---

# Sidebar (`<e-sidebar>`)

The `e-sidebar` component creates a two-column layout featuring a main content area and a sidebar. It's commonly used for primary navigation or supplementary content alongside the main view.

## Basic Usage

The sidebar content should be placed within an element that has the `slot="sidebar"` attribute. The main content goes into the default slot.

```html
<e-sidebar>
  <nav slot="sidebar">
    <ul>
      <li>Link 1</li>
      <li>Link 2</li>
    </ul>
  </nav>

  <main>
    <h1>Main Content Area</h1>
    <p>This is the primary content.</p>
  </main>
</e-sidebar>
```

## Example

<div class="example-container">
  <e-sidebar style="border: 1px dashed blue; min-height: 150px;" sidebar-width="150px">
    <div slot="sidebar" class="example-item bg-example-orange" style="padding: 1rem; height: 100%;">
      Sidebar Content
    </div>
    <div class="example-item bg-example-slate" style="padding: 1rem;"> {/* Changed cyan to slate */}
      Main Content Area. The sidebar is set to 150px width via the `sidebar-width` attribute. Wrapping occurs based on the `contentMin` property (default 50%).
    </div>
  </e-sidebar>
</div>

<style>
.example-container {
  background-color: #f0f0f0;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;
  resize: horizontal; /* Allow resizing for testing responsiveness */
  overflow: auto;
  min-width: 300px;
}
</style>

<script>
  // Import the component definition
  import 'e-layout/sidebar';
</script>

## Properties

*   **`side`**: `'left' | 'right'` (Default: `'left'`)
    *   Which element (default slot or `slot="sidebar"`) to treat as the sidebar. Reflects as attribute. *(Note: `side="right"` styling might need adjustments)*.
*   **`sideWidth`**: `string | null` (Default: `null`)
    *   The width of the sidebar element (e.g., `'250px'`, `'20rem'`). If `null`, width is intrinsic. Attribute: `side-width`.
*   **`contentMin`**: `string` (Default: `'50%'`)
    *   The minimum width of the non-sidebar element before wrapping. Attribute: `content-min`.
*   **`space`**: `string` (Default: `'var(--s1, 1rem)'`)
    *   The gap between the sidebar and main content.
*   **`noStretch`**: `boolean` (Default: `false`)
    *   If `true`, prevents items from stretching to the same height. Reflects as attribute `nostretch`.

## Styling

*   **`--sidebar-space`**: (Default: `var(--s1, 1rem)`) Overrides `space`.
*   **`--sidebar-width`**: (Default: `auto`) Overrides `sideWidth`.
*   **`--sidebar-content-min`**: (Default: `50%`) Overrides `contentMin`.
*   **`--sidebar-align`**: (Default: `stretch`) Controls `align-items` (affected by `noStretch`).

```css
e-sidebar {
  --sidebar-space: 2rem;
  --sidebar-width: 300px;
}