import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resolveVars } from '../utils/index.js';

/**
 * A layout component that arranges items horizontally until a specified threshold is reached,
 * then switches to a vertical layout by wrapping items. It can limit the number of items
 * that maintain the horizontal layout before forcing subsequent items onto new lines.
 *
 * @element e-switcher
 *
 * @slot - The content items to be laid out by the switcher.
 *
 * @cssprop --switcher-gap - The gap between items. Defaults to `var(--s1, 1rem)`. Controlled by the `gap` attribute.
 * @cssprop --switcher-threshold - The container width threshold at which the layout switches. Defaults to `30rem`. Controlled by the `threshold` attribute.
 */
@customElement('e-switcher')
export class Switcher extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: var(--switcher-gap, var(--s1, 1rem));
      --threshold: var(--switcher-threshold, 30rem);
    }

    ::slotted(*) {
      flex-grow: 1;
      flex-basis: calc((var(--threshold) - 100%) * 999);
    }

  `;

  /**
   * The container width threshold at which the layout switches from horizontal to vertical.
   * Accepts any valid CSS length value. Maps to the `--switcher-threshold` CSS custom property.
   * @attr
   */
  @property({ type: String })
  threshold = '30rem';

  /**
   * The gap between items. Accepts any valid CSS length value or CSS variable.
   * Maps to the `--switcher-gap` CSS custom property.
   * @attr
   */
  @property({ type: String })
  gap = 'var(--s1, 1rem)';

  /**
   * The maximum number of items that should maintain the horizontal layout before
   * subsequent items are forced onto new lines (by setting `flex-basis: 100%`).
   * Set to `Infinity` by default, meaning no limit.
   * @attr
   */
  @property({ type: Number })
  limit = Number.POSITIVE_INFINITY;

  applyLimitStyles() {
    const children = this.shadowRoot?.querySelector('slot')?.assignedElements({ flatten: true }) || [];
    const limitNum = this.limit;

    for (const child of children) {
      if (child instanceof HTMLElement) {
        child.style.removeProperty('flex-basis');
      }
    }

    if (limitNum !== Number.POSITIVE_INFINITY && limitNum > 0 && children.length > limitNum) {
      for (let i = limitNum; i < children.length; i++) {
        const child = children[i];
        if (child instanceof HTMLElement) {
          child.style.flexBasis = '100%';
        }
      }
    }
  }

  handleSlotChange() {
    this.applyLimitStyles();
  }

  render() {
    this.style.setProperty('--switcher-threshold', resolveVars(this.threshold));
    this.style.setProperty('--switcher-gap', resolveVars(this.gap));
    return html`<slot @slotchange=${this.handleSlotChange}></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-switcher': Switcher;
  }
}
