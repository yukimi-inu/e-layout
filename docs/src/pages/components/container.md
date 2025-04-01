---
layout: ../../layouts/Layout.astro
title: 'Container Component'
---

# Container (`<e-container>`)

The `e-container` component is a simple wrapper primarily used to establish a CSS Container Query context. It sets `container-type: inline-size` by default and allows you to optionally name the container using the `name` property.

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

## Example

Resize the outer container to see the card background change when the container width crosses 400px.

<div class="example-container" style="resize: horizontal; overflow: auto; width: 500px; min-width: 200px; border: 1px solid gray;">
  <e-container name="example-card">
    <div class="example-card-content">
      This card's background will change based on the `e-container` width.
    </div>
  </e-container>
</div>

<style>
.example-card-content {
  background-color: var(--color-bg-soft);
  border: 1px solid var(--border-color);
  padding: 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

/* Container query targeting the named container */
@container example-card (min-width: 400px) {
  .example-card-content {
    background-color: #dcfce7; /* Light green */
  }
}
</style>

<script>
  // Import the component definition
  import 'e-layout/container';
</script>

## Properties

*   **`name`**: `string | null` (Default: `null`)
    *   Sets the `container-name` CSS property. If `null` or empty, the container is anonymous.

## Styling

*   **`--container-name`**: (Default: not set) Overrides the `name` property via CSS.
*   You can apply standard CSS like `padding`, `border`, `width`, etc., to the `e-container` element itself.
*   The `container-type` is set to `inline-size` by default. You might need to override this with standard CSS for different container query types (e.g., `container-type: size;`).

```css
e-container {
  padding: 1rem;
  border: 1px dashed blue;
  /* Override container type if needed */
  /* container-type: size; */
}