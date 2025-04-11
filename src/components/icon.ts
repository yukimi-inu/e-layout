import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resolveVars } from '../utils/index.js';

/**
 * A component for displaying icons, typically SVG, with optional text label
 * and control over size, color, and spacing between icon and text.
 * It sets accessibility attributes based on the presence of the label.
 *
 * @element e-icon
 *
 * @slot - The icon content, usually an `<svg>` element.
 * @slot - If text is provided alongside the SVG, it will be displayed next to the icon.
 *
 * @cssprop --e-icon-space - The space between the icon and adjacent text. Defaults to `0.25em`. Controlled by the `space` attribute.
 * @cssprop --e-icon-color - The color of the icon and text. Defaults to `inherit`. Controlled by the `color` attribute.
 * @cssprop --e-icon-size - The width and height of the slotted SVG. Defaults to `1em`. Controlled by the `size` attribute.
 */
@customElement('e-icon')
export class Icon extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      gap: var(--e-icon-space, 0.25em);
      color: var(--e-icon-color, inherit);
    }

    ::slotted(svg) {
      display: block;
      width: var(--e-icon-size, 1em);
      height: var(--e-icon-size, 1em);
      fill: currentColor;
    }

  `;

  /**
   * An accessible label for the icon. If provided, sets `role="img"` and `aria-label`.
   * If null or empty, these attributes are removed.
   * @attr
   */
  @property({ type: String })
  label: string | null = null;

  /**
   * The color of the icon and any adjacent text.
   * Maps to the `--e-icon-color` CSS custom property.
   * @attr
   */
  @property({ type: String })
  color: string | undefined = undefined;

  /**
   * The size (width and height) of the slotted SVG icon.
   * Maps to the `--e-icon-size` CSS custom property.
   * Accepts any valid CSS length value.
   * @attr
   */
  @property({ type: String })
  size = '1em';

  /**
   * The space between the icon and adjacent text.
   * Maps to the `--e-icon-space` CSS custom property (used as `gap`).
   * Accepts any valid CSS length value.
   * @attr
   */
  @property({ type: String })
  space = '0.25em';

  render() {
    if (this.label) {
      this.setAttribute('role', 'img');
      this.setAttribute('aria-label', this.label);
    } else {
      this.removeAttribute('role');
      this.removeAttribute('aria-label');
    }
    if (this.color !== undefined) {
      this.style.setProperty('--e-icon-color', resolveVars(this.color));
    } else {
      this.style.removeProperty('--e-icon-color');
    }
    this.style.setProperty('--e-icon-size', resolveVars(this.size, '1em'));
    this.style.setProperty('--e-icon-space', resolveVars(this.space, '0.25em'));

    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-icon': Icon;
  }
}
