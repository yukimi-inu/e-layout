import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resolveVars } from '../utils/resolve-vars.js';

/**
 * A custom element that provides a flexible box layout.
 *
 * @element e-box
 * @cssprop --box-padding - The padding of the box. Defaults to `0`. Controlled by the `padding` attribute.
 * @cssprop --box-border-width - The border width of the box. Defaults to `0`. Controlled by the `border-width` attribute.
 * @cssprop --box-border-color - The border color of the box. Defaults to `transparent`. Controlled by the `border-color` attribute. Used if `--box-border` is not set.
 * @cssprop --box-border - The border shorthand property for the box. Defaults to unset. Controlled by the `border` attribute. Overrides individual border properties if set.
 * @cssprop --box-radius - The border radius of the box. Defaults to `0`. Controlled by the `radius` attribute.
 * @cssprop --box-bg - The background color of the box. Defaults to `inherit`. Controlled by the `bg` attribute.
 * @cssprop --box-color - The text color of the box. Defaults to `currentColor`. Controlled by the `color` attribute.
 *
 * @slot - The content to be placed inside the box.
 */
@customElement('e-box')
export class Box extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: var(--box-padding, 0);
      border: var(--box-border);
      border-radius: var(--box-radius, 0);
      background-color: var(--box-bg, inherit);
      color: var(--box-color, currentColor);
    }
  `;

  /**
   * A semantic hint for the role of the box.
   * This attribute does not change the rendered HTML tag itself
   * but can be used for CSS attribute selectors (e.g., `e-box[tag="section"]`)
   * or JavaScript targeting. If not set, the attribute is absent.
   */
  @property({ type: String })
  tag?: string;

  /**
   * The padding of the box. Maps to the `--box-padding` CSS custom property.
   * @attr
   */
  @property({ type: String }) padding?: string;

  /**
   * The border width of the box. Maps to the `--box-border-width` CSS custom property.
   * @attr border-width
   */
  @property({ type: String, attribute: 'border-width' }) borderWidth?: string;

  /**
   * The border color of the box. Maps to the `--box-border-color` CSS custom property.
   * @attr border-color
   */
  @property({ type: String, attribute: 'border-color' }) borderColor?: string;

  /**
   * The border shorthand property for the box. Maps to the `--box-border` CSS custom property.
   * If set, this overrides `borderWidth` and `borderColor`.
   * @attr
   */
  @property({ type: String }) border?: string;

  /**
   * The border radius of the box. Maps to the `--box-radius` CSS custom property.
   * @attr
   */
  @property({ type: String }) radius?: string;

  /**
   * The background color of the box. Maps to the `--box-bg` CSS custom property.
   * @attr
   */
  @property({ type: String }) bg?: string;

  /**
   * The text color of the box. Maps to the `--box-color` CSS custom property.
   * @attr
   */
  @property({ type: String }) color?: string;

  override render() {
    this.style.setProperty('--box-padding', resolveVars(this.padding));
    this.style.setProperty('--box-border-width', resolveVars(this.borderWidth));
    this.style.setProperty('--box-border-color', resolveVars(this.borderColor));
    this.style.setProperty('--box-border', resolveVars(this.border));
    this.style.setProperty('--box-radius', resolveVars(this.radius));
    this.style.setProperty('--box-bg', resolveVars(this.bg));
    this.style.setProperty('--box-color', resolveVars(this.color));

    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-box': Box;
  }
}
