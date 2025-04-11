import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resolveVars } from '../utils/index.js';

/**
 * A layout component that arranges items vertically with consistent spacing.
 * It uses `flex-direction: column` and applies margin between items.
 * Optionally, it can push items apart after a specific child index.
 *
 * @element e-stack
 *
 * @slot - The items to be stacked vertically.
 *
 * @cssprop --stack-space - The vertical space (margin) between items. Defaults to `1.5rem`. Controlled by the `space` attribute.
 */
@customElement('e-stack')
export class Stack extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      --space: var(--stack-space, 1.5rem);
    }

    ::slotted(*) {
      margin-block: 0;
    }

    ::slotted(*:not(:first-child)) {
      margin-block-start: var(--space);
    }
  `;

  /**
   * A semantic hint for the role of the stack element.
   * Does not change the rendered tag but can be used for CSS attribute selectors
   * or JavaScript targeting.
   * @attr
   */
  @property({ type: String })
  tag?: string;

  /**
   * The vertical space between stacked items.
   * Maps to the `--stack-space` CSS custom property.
   * Accepts any valid CSS length value or CSS variable.
   * @attr
   */
  @property({ type: String })
  space = '1.5rem';

  /**
   * The 1-based index after which to inject `margin-block-end: auto`,
   * pushing subsequent items to the end of the stack.
   * @attr split-after
   */
  @property({ type: Number, attribute: 'split-after' })
  splitAfter: number | null = null;

  private _applySplitAfterStyle() {
    const children = this.shadowRoot?.querySelector('slot')?.assignedElements({ flatten: true }) || [];
    const splitIndex = this.splitAfter;

    for (const child of children) {
      if (child instanceof HTMLElement) {
        child.style.removeProperty('margin-block-end');
      }
    }

    if (splitIndex !== null && splitIndex > 0 && splitIndex < children.length) {
      const targetChild = children[splitIndex - 1]; // Adjust index (1-based to 0-based)
      if (targetChild instanceof HTMLElement) {
        targetChild.style.marginBlockEnd = 'auto';
      }
    }
  }

  private handleSlotChange() {
    this._applySplitAfterStyle();
  }

  protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('splitAfter')) {
      this._applySplitAfterStyle();
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    // Apply initial styles potentially needed by _applySplitAfterStyle
    this.style.setProperty('--stack-space', resolveVars(this.space));
    // Apply splitAfter style after initial render and potentially after slot changes
    // Use requestAnimationFrame to ensure children are available
    requestAnimationFrame(() => this._applySplitAfterStyle());
  }

  render() {
    // Update space property on render if it changes
    this.style.setProperty('--stack-space', resolveVars(this.space));
    return html`<slot @slotchange=${this.handleSlotChange}></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-stack': Stack;
  }
}
