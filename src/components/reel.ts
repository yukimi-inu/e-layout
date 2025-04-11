import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resolveVars } from '../utils/index.js';

/**
 * A layout component that creates a horizontally scrolling container.
 * Useful for carousels, image galleries, or lists that shouldn't wrap.
 *
 * @element e-reel
 *
 * @slot - The items to be displayed in the reel.
 *
 * @cssprop --reel-height - The height of the reel container. Defaults to `auto`. Controlled by the `height` attribute.
 * @cssprop --reel-padding - The padding of the reel container. Defaults to `inherit`. Controlled by the `padding` attribute.
 * @cssprop --reel-item-width - The width of individual items in the reel. Defaults to `auto`. Controlled by the `item-width` attribute.
 * @cssprop --reel-gap - The gap between items in the reel. Defaults to `1rem`. Controlled by the `gap` attribute.
 */
@customElement('e-reel')
export class Reel extends LitElement {
  static styles = css`
    :host {
      display: flex;
      block-size: var(--reel-height, auto);
      overflow-x: auto;
      overflow-y: hidden;
      padding: var(--reel-padding, inherit);
    }

    :host([no-bar]) {
      scrollbar-width: none;
    }
    :host([no-bar])::-webkit-scrollbar {
      display: none;
    }

    ::slotted(*) {
      flex: 0 0 var(--reel-item-width, auto);
    }
    ::slotted(img) {
      block-size: 100%;
      flex-basis: auto;
      width: auto;
    }

    ::slotted(*:not(:first-child)) {
      margin-inline-start: var(--reel-gap, 1rem);
    }

  `;

  /**
   * The width of each item in the reel.
   * Maps to the `--reel-item-width` CSS custom property.
   * Accepts any valid CSS length value.
   * @attr item-width
   */
  @property({ type: String, attribute: 'item-width' })
  itemWidth = 'auto';

  /**
   * The gap between items in the reel.
   * Maps to the `--reel-gap` CSS custom property.
   * Accepts any valid CSS length value.
   * @attr
   */
  @property({ type: String })
  gap = '1rem';

  /**
   * The height of the reel container.
   * Maps to the `--reel-height` CSS custom property.
   * Accepts any valid CSS length value.
   * @attr
   */
  @property({ type: String })
  height = 'auto';

  /**
   * The padding of the reel container.
   * Maps to the `--reel-padding` CSS custom property.
   * Accepts any valid CSS padding value.
   * @attr
   */
  @property({ type: String })
  padding = '0';

  /**
   * If true, hides the horizontal scrollbar.
   * Reflects to the `no-bar` attribute.
   * @attr no-bar
   */
  @property({ type: Boolean, reflect: true, attribute: 'no-bar' })
  noBar = false;

  render() {
    this.style.setProperty('--reel-item-width', resolveVars(this.itemWidth));
    this.style.setProperty('--reel-gap', resolveVars(this.gap));
    this.style.setProperty('--reel-height', resolveVars(this.height));
    this.style.setProperty('--reel-padding', resolveVars(this.padding));
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-reel': Reel;
  }
}
