import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('e-grid')
export class Grid extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid-gap: var(--grid-gap, 1rem); /* Use gap property */
      /* Set default min value */
      --grid-min: var(--grid-min-override, 250px);
    }

    /* Apply grid template columns using auto-fit and minmax */
    /* Includes fallback for browsers not supporting min() in minmax() */
    /* This part is directly from the spec example's CSS logic */
    @supports (width: min(var(--grid-min, 1px), 100%)) {
      :host {
        grid-template-columns: repeat(auto-fit, minmax(min(var(--grid-min), 100%), 1fr));
      }
    }
    /* Fallback for older browsers might be needed if @supports is not sufficient */
    /* @supports not (width: min(var(--grid-min, 1px), 100%)) {
      :host {
         grid-template-columns: repeat(auto-fit, minmax(var(--grid-min), 1fr));
      }
    } */
  `;

  /**
   * The minimum item width for the grid items.
   * Used in the `minmax()` function for `grid-template-columns`.
   * Accepts any valid CSS size value. Defaults to '250px'.
   */
  @property({ type: String })
  min = '250px';

  /**
   * The space (grid-gap) between grid cells.
   * Accepts any valid CSS gap value. Defaults to '1rem'.
   */
  @property({ type: String })
  gap = '1rem';

  /**
   * Updates CSS custom properties when properties change.
   */
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('min')) {
      this.style.setProperty('--grid-min-override', this.min); // Use override to not conflict with internal var
    }
    if (changedProperties.has('gap')) {
      this.style.setProperty('--grid-gap', this.gap);
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

// Type definition for custom element in the global scope
declare global {
  interface HTMLElementTagNameMap {
    'e-grid': Grid;
  }
}
