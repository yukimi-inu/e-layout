import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resolveVars } from '../utils/index.js';

/**
 * A layout component that creates a responsive grid using CSS Grid.
 * It supports different modes (`fit`, `fill`, `count`) for controlling column behavior.
 *
 * @element e-grid
 *
 * @slot - The items to be placed in the grid.
 *
 * @cssprop --grid-gap - The gap between grid items. Defaults to `1rem`. Controlled by the `gap` attribute.
 * @cssprop --grid-min - The minimum width for grid items. Defaults to `10em`. Controlled by the `min` attribute. Used in `minmax()`.
 * @cssprop --grid-max - The maximum width for grid items. Defaults to `100%`. Controlled by the `max` attribute. Used in `minmax()`.
 * @cssprop --grid-count - The number of columns when `mode` is `count`. Defaults to `4`. Controlled by the `count` attribute.
 */
@customElement('e-grid')
export class Grid extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid-gap: var(--grid-gap, 1rem);
      --grid-min: var(--grid-min-override, 10em);
      --grid-max: var(--grid-max-override, 100%);
      --grid-count: var(--grid-count-override, 4);
    }

    :host([mode="fit"]) {
      grid-template-columns: repeat(auto-fit, minmax(min(var(--grid-min), var(--grid-max)), 1fr));
    }

    :host([mode="fill"]) {
      grid-template-columns: repeat(auto-fill, minmax(var(--grid-min), var(--grid-max)));
    }

    :host([mode="count"]) {
      grid-template-columns: repeat(var(--grid-count), minmax(var(--grid-min), var(--grid-max)));
    }
  `;

  /**
   * A semantic hint for the role of the grid element.
   * Does not change the rendered tag but can be used for CSS attribute selectors
   * or JavaScript targeting.
   * @attr
   */
  @property({ type: String })
  tag?: string;

  /**
   * The minimum width for items in the grid.
   * Maps to the `--grid-min` CSS custom property.
   * Accepts any valid CSS length value.
   * @attr
   */
  @property({ type: String })
  min = '10em';

  /**
   * The maximum width for items in the grid.
   * Maps to the `--grid-max` CSS custom property.
   * Accepts any valid CSS length value or percentage.
   * @attr
   */
  @property({ type: String })
  max = '100%';

  /**
   * The gap between grid items.
   * Maps to the `--grid-gap` CSS custom property.
   * Accepts any valid CSS length value.
   * @attr
   */
  @property({ type: String })
  gap = '1em';

  /**
   * Controls the grid layout mode:
   * - `fit`: Uses `auto-fit` to fill the row with as many columns as fit.
   * - `fill`: Uses `auto-fill` to fill the row, potentially leaving empty tracks.
   * - `count`: Creates a grid with a fixed number of columns specified by the `count` attribute.
   * Reflects to the `mode` attribute.
   * @attr
   */
  @property({ type: String, reflect: true })
  mode: 'fit' | 'fill' | 'count' = 'fit';

  /**
   * The number of columns to create when `mode` is set to `count`.
   * Maps to the `--grid-count` CSS custom property.
   * @attr
   */
  @property({ type: Number })
  count = 4;

  render() {
    this.style.setProperty('--grid-min-override', resolveVars(this.min));
    this.style.setProperty('--grid-max-override', resolveVars(this.max));
    this.style.setProperty('--grid-gap', resolveVars(this.gap));
    this.style.setProperty('--grid-count-override', String(this.count));
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-grid': Grid;
  }
}
