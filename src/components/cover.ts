import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { resolveVars } from '../utils/index.js';

/**
 * A layout component that covers a container, typically the viewport,
 * placing a header at the top, a footer at the bottom, and centering
 * the main content vertically in the remaining space.
 *
 * @element e-cover
 *
 * @slot header - Content placed at the top.
 * @slot - Default slot for the main content, centered vertically.
 * @slot footer - Content placed at the bottom.
 *
 * @cssprop --cover-min-height - The minimum height of the cover element. Defaults to `100vh`. Controlled by the `min-height` attribute.
 * @cssprop --cover-space - The space (gap) between the header, main content, and footer. Defaults to `1rem`. Controlled by the `space` attribute.
 * @cssprop --cover-padding - The padding around the cover element. Defaults to the value of `--cover-space`. Set to `0` when `no-padding` attribute is present.
 */
@customElement('e-cover')
export class Cover extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      min-block-size: var(--cover-min-height, 100vh);
      padding: var(--cover-padding, var(--cover-space, 1rem));
      box-sizing: border-box;
      gap: var(--cover-space, 1rem);
    }

    ::slotted(*) {
      margin: 0;
    }

    ::slotted([slot="header"]) {
      flex-shrink: 0;
    }

    ::slotted([slot="footer"]) {
      flex-shrink: 0;
    }

    :host([no-padding]) {
      padding: 0;
    }
  `;

  /**
   * The minimum height of the cover element.
   * Maps to the `--cover-min-height` CSS custom property.
   * @attr min-height
   */
  @property({ type: String, attribute: 'min-height' })
  minHeight = '100vh';

  /**
   * The space (gap) between the header, main content, and footer.
   * Also used as the default padding unless `no-padding` is set.
   * Maps to the `--cover-space` CSS custom property.
   * @attr
   */
  @property({ type: String })
  space = '1rem';

  /**
   * If true, removes the padding around the cover element.
   * Reflects to the `no-padding` attribute.
   * @attr no-padding
   */
  @property({ type: Boolean, reflect: true, attribute: 'no-padding' })
  noPadding = false;

  @state() private _hasHeader = false;
  @state() private _hasFooter = false;

  private _headerSlot: HTMLSlotElement | null = null;
  private _footerSlot: HTMLSlotElement | null = null;

  override firstUpdated() {
    this._headerSlot = this.shadowRoot?.querySelector('slot[name="header"]') ?? null;
    this._footerSlot = this.shadowRoot?.querySelector('slot[name="footer"]') ?? null;

    this._headerSlot?.addEventListener('slotchange', this._handleHeaderChange);
    this._footerSlot?.addEventListener('slotchange', this._handleFooterChange);

    // Initial check
    this._handleHeaderChange();
    this._handleFooterChange();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._headerSlot?.removeEventListener('slotchange', this._handleHeaderChange);
    this._footerSlot?.removeEventListener('slotchange', this._handleFooterChange);
  }

  private _handleHeaderChange = () => {
    // Check if any element nodes are assigned to the slot
    this._hasHeader = (this._headerSlot?.assignedElements({ flatten: true }) ?? []).length > 0;
    this.requestUpdate(); // Trigger re-render to apply classes
  };

  private _handleFooterChange = () => {
    // Check if any element nodes are assigned to the slot
    this._hasFooter = (this._footerSlot?.assignedElements({ flatten: true }) ?? []).length > 0;
    this.requestUpdate(); // Trigger re-render to apply classes
  };

  render() {
    this.style.setProperty('--cover-min-height', resolveVars(this.minHeight, '100vh'));
    this.style.setProperty('--cover-space', resolveVars(this.space, '1rem'));
    // --cover-padding is handled by CSS based on --cover-space and the [no-padding] attribute

    const hostClasses = {
      'has-header': this._hasHeader,
      'has-footer': this._hasFooter,
    };

    // CSS selectors :host(.has-header) and :host(.has-footer) handle conditional styling.
    // No need to set className directly here.
    // The hostClasses object itself is not used in the template below,
    // but the _hasHeader and _hasFooter states trigger updates which allow CSS to apply.

    return html`
      <slot name="header"></slot>
      <slot class="main-content"></slot>
      <slot name="footer"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-cover': Cover;
  }
}
