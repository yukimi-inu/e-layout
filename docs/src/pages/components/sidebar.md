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

## Examples

**Default Sidebar (Left): `side-width="10em"`**

<div class="example-container">
  <div class="example-wrapper">
    <e-sidebar side-width="10em" style="height: 10em;">
      <aside slot="sidebar" class="example-item bg-example-slate">
        Sidebar Content
      </aside>
      <main class="example-item bg-example-blue">
        Main Content Area. Sidebar width is `10em`. Wrapping occurs based on `content-min` (default 50%).
      </main>
    </e-sidebar>
  </div>
</div>

**Right Sidebar & No Stretch: `side="right" side-width="12em" content-min="40%" no-stretch`**

<div class="example-container">
  <div class="example-wrapper">
    <e-sidebar side="right" side-width="12em" content-min="40%" no-stretch style="height: 10em;">
      <aside slot="sidebar" class="example-item bg-example-slate">
        Sidebar (Right)
      </aside>
      <main class="example-item bg-example-blue">
        Main Content Area. Sidebar is on the right (`12em`), `content-min` is `40%`, and `no-stretch` is applied.
      </main>
    </e-sidebar>
  </div>
</div>


## Properties

*   **`side`** `<'left' | 'right'>` (Default: `'left'`)
    *   Which side the sidebar appears on. Attribute: `side`.
*   **`side-width`** `<string>` (Default: `undefined`)
    *   Width of the sidebar. Maps to `--sidebar-width`. If undefined, uses intrinsic width. Attribute: `side-width`.
*   **`content-min`** `<string>` (Default: `'50%'`)
    *   Minimum width of main content before wrapping. Maps to `--sidebar-content-min`. Attribute: `content-min`.
*   **`space`** `<string>` (Default: `'var(--s1, 1rem)'`)
    *   Gap between sidebar and main content. Maps to `--sidebar-space`. Attribute: `space`.
*   **`no-stretch`** `<boolean>` (Default: `false`)
    *   If true, aligns items to the start instead of stretching vertically. Attribute: `no-stretch`.
