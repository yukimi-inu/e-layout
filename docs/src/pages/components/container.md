---
layout: ../../layouts/Layout.astro
title: 'Container Component'
---

# Container (`<e-container>`)

The `e-container` component establishes a CSS Container Query context. It sets `container-type: inline-size` by default and allows naming the container via the `container-name` attribute.
## Basic Usage

```html
<e-container name="my-card-container">
  <div class="card">
    <!-- Card content -->
  </div>
</e-container>

<style>
/* Example CSS using the container query */
.card {
  background-color: white;
  padding: 1rem;
}

@container my-card-container (min-width: 600px) {
  .card {
    background-color: lightblue;
    padding: 2rem;
  }
}
</style>
```

## Examples

**Container Query Example: `container-name="example-card"`**

Resize the outer container. The card background changes when the `e-container` width exceeds 400px.

<div class="example-container" style="resize: horizontal; overflow: auto; width: 300px; min-width: 200px;">
  <div class="example-wrapper">
    <e-container container-name="example-card">
      <div class="example-card-content">
        This card's background will change when the `e-container` (its parent) width exceeds 400px.
      </div>
    </e-container>
  </div>
</div>

<style>
.example-card-content {
  background-color: var(--color-bg-example-gray);
  color: var(--color-text-therity);
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

@container example-card (min-width: 400px) {
  .example-card-content {
    background-color: var(--color-bg-example-red);
  }
}
</style>

## Properties

*   **`container-name`** `<string | null>` (Default: `null`)
    *   Sets the `container-name` CSS property, used for targeting in `@container` queries. Attribute: `container-name`.
*   **`tag`** `<string>` (Default: `undefined`)
    *   Provides a semantic hint (e.g., 'section'). Does not change the rendered tag. Useful for CSS selectors (`e-container[tag="..."]`). Attribute: `tag`.
    *   Sets the `container-name` CSS property. Attribute: `container-name`. If `null` or empty, the container is anonymous.
