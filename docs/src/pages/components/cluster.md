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
  <button>Another<br/>Button</button>
  <button>Short</button>
  <button>A Much Longer Button Label</button>
</e-cluster>
```

## Examples

**Default Cluster:**

<div class="example-container">
  <div class="example-wrapper">
    <e-cluster>
      <div class="example-tag">Button 1</div>
      <div class="example-tag">Button 2</div>
      <div class="example-tag">Button 3</div>
      <div class="example-tag">Another<br/>Button</div>
      <div class="example-tag">Short</div>
      <div class="example-tag">A Much Longer Button Label</div>
      <div class="example-tag">More</div>
    </e-cluster>
  </div>
</div>

**Centered Cluster (No Wrap): `justify="center" align="center" space="0.5rem" wrap="nowrap"`**

<div class="example-container">
  <div class="example-wrapper">
    <e-cluster justify="center" align="center" space="0.5rem" wrap="nowrap">
      <div class="example-tag">Button 1</div>
      <div class="example-tag">Button 2</div>
      <div class="example-tag">Button 3</div>
      <div class="example-tag">Another<br/>Button</div>
      <div class="example-tag">Short</div>
      <div class="example-tag">A Much Longer Button Label</div>
      <div class="example-tag">More</div>
    </e-cluster>
  </div>
</div>

**Align Items End: `justify="center" align="flex-end" space="0.5rem"`**

Items within each line are aligned to the end (bottom).

<div class="example-container">
  <div class="example-wrapper">
    <e-cluster justify="center" align="flex-end" space="0.5rem" style="height: 10em">
      <div class="example-tag">Button 1</div>
      <div class="example-tag">Button 2</div>
      <div class="example-tag">Button 3</div>
      <div class="example-tag">Another<br/>Button</div>
      <div class="example-tag">Short</div>
      <div class="example-tag">A Much Longer Button Label</div>
      <div class="example-tag">More</div>
    </e-cluster>
  </div>
</div>

**Align Content End: `justify="center" align="center" align-content="flex-end" space="0.5rem"`**

Lines are packed towards the end of the container when wrapping occurs.

<div class="example-container">
  <div class="example-wrapper">
    <e-cluster justify="center" align="center" align-content="flex-end" space="0.5rem" style="height: 10em">
      <div class="example-tag">Button 1</div>
      <div class="example-tag">Button 2</div>
      <div class="example-tag">Button 3</div>
      <div class="example-tag">Another<br/>Button</div>
      <div class="example-tag">Short</div>
      <div class="example-tag">A Much Longer Button Label</div>
      <div class="example-tag">More</div>
    </e-cluster>
  </div>
</div>

## Properties

*   **`justify`** `<'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'>` (Default: `'flex-start'`)
    *   Controls alignment along the main axis. Maps to `justify-content` via `--cluster-justify`. Attribute: `justify`.
*   **`align`** `<'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'>` (Default: `'flex-start'`)
    *   Controls alignment along the cross axis. Maps to `align-items` via `--cluster-align`. Attribute: `align`.
*   **`space`** `<string>` (Default: `'var(--s1, 1rem)'`)
    *   Sets the gap between items. Maps to `gap` via `--cluster-space`. Attribute: `space`.
*   **`wrap`** `<'wrap' | 'nowrap' | 'wrap-reverse'>` (Default: `'wrap'`)
    *   Controls item wrapping. Maps to `flex-wrap` via `--cluster-wrap`. Attribute: `wrap`.
*   **`align-content`** `<'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch'>` (Default: `'flex-start'`)
    *   Controls alignment of lines when wrapping. Maps to `align-content` via `--cluster-align-content`. Attribute: `align-content`.
*   **`tag`** `<string>` (Default: `undefined`)
    *   Provides a semantic hint (e.g., 'nav'). Does not change the rendered tag. Useful for CSS selectors (`e-cluster[tag="..."]`). Attribute: `tag`.

