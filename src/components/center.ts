import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resolveVars } from '../utils/index.js';

/**
 * A layout component that centers its content horizontally within a maximum width,
 * with optional gutters on either side. It can also center text content or
 * intrinsically size its content based on the children.
 *
 * @element e-center
 *
 * @slot - The content to be centered.
 *
 * @cssprop --center-max-width - The maximum width of the centered content area. Defaults to `100%`. Controlled by the `max` attribute.
 * @cssprop --center-gutters - The padding on the left and right sides of the content. Defaults to `0`. Controlled by the `gutters` attribute.
 */
@customElement('e-center')
export class Center extends LitElement {
  static styles = css`
    :host {
      box-sizing: content-box;
      display: block;
      margin-inline: auto;
      max-inline-size: var(--center-max-width, 100%);
      padding-inline: var(--center-gutters, 0);
    }

    :host([with-text]) {
      text-align: center;
    }

    :host([intrinsic]) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;

  /**
   * A semantic hint for the role of the center element.
   * Does not change the rendered tag but can be used for CSS attribute selectors
   * or JavaScript targeting.
   * @attr
   */
  @property({ type: String })
  tag?: string;

  /**
   * The maximum inline size (width) of the centered content.
   * Maps to the `--center-max-width` CSS custom property.
   * Accepts any valid CSS length value.
   * @attr max
   */
  @property({ type: String, attribute: 'max' })
  max?: string;

  /**
   * The padding on the left and right sides (gutters) of the content.
   * Maps to the `--center-gutters` CSS custom property.
   * Accepts any valid CSS length value.
   * @attr
   */
  @property({ type: String })
  gutters = '0';

  /**
   * If true, centers the text content within the element (`text-align: center`).
   * Reflects to the `with-text` attribute.
   * @attr with-text
   */
  @property({ type: Boolean, reflect: true, attribute: 'with-text' })
  withText = false;

  /**
   * If true, centers the element intrinsically based on its content width
   * (`display: flex; align-items: center;`).
   * Reflects to the `intrinsic` attribute.
   * @attr
   */
  @property({ type: Boolean, reflect: true })
  intrinsic = false;

  render() {
    this.style.setProperty('--center-max-width', resolveVars(this.max));
    this.style.setProperty('--center-gutters', resolveVars(this.gutters));
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-center': Center;
  }
}
