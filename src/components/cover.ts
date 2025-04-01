import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('e-cover')
export class Cover extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      min-block-size: var(--cover-min-height, 100vh); /* Use minHeight property */
      padding: var(--cover-padding, var(--cover-space, 1rem)); /* Use space/padding */
    }

    /* Apply gap using margin, controlled by --cover-space */
    ::slotted(*) {
      margin-block: var(--cover-space, 1rem);
    }

    /* Remove margin from first/last elements unless they are the main centered element */
    /* This logic is complex with slots, might need refinement */
    ::slotted(:first-child:not([slot="main"])) {
      margin-block-start: 0;
    }
    ::slotted(:last-child:not([slot="main"])) {
      margin-block-end: 0;
    }

    /* Center the main element vertically */
    ::slotted([slot="main"]) {
      margin-block: auto;
    }

    /* Remove padding if noPadding is true */
    :host([nopadding]) {
      padding: 0;
    }
  `;

  /**
   * The minimum height (block-size) of the cover element.
   * Accepts any valid CSS size value. Defaults to '100vh'.
   */
  @property({ type: String, attribute: 'min-height' })
  minHeight = '100vh';

  /**
   * The minimum space (margin) between child elements and padding around the container.
   * Accepts any valid CSS margin/padding value. Defaults to '1rem'.
   */
  @property({ type: String })
  space = '1rem'; // Renamed from 'gap' in spec for clarity vs flex gap

  /**
   * Whether to remove the padding from the cover element.
   * Reflects as attribute 'nopadding'. Defaults to false.
   */
  @property({ type: Boolean, reflect: true }) // Reflect for CSS targeting
  noPadding = false;

  // centeredElementSelector is difficult to implement dynamically via CSS/JS.
  // We rely on the user assigning slot="main" to the element to be centered.

  /**
   * Updates CSS custom properties when properties change.
   */
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('minHeight')) {
      this.style.setProperty('--cover-min-height', this.minHeight);
    }
    if (changedProperties.has('space')) {
      this.style.setProperty('--cover-space', this.space);
      // Also update padding unless noPadding is true
      if (!this.noPadding) {
        this.style.setProperty('--cover-padding', this.space);
      }
    }
    if (changedProperties.has('noPadding')) {
      if (this.noPadding) {
        this.style.setProperty('--cover-padding', '0');
      } else {
        // Re-apply space as padding if noPadding becomes false
        this.style.setProperty('--cover-padding', this.style.getPropertyValue('--cover-space') || this.space);
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    // Set initial padding based on space unless noPadding is true
    if (!this.noPadding) {
      this.style.setProperty('--cover-padding', this.style.getPropertyValue('--cover-space') || this.space);
    } else {
      this.style.setProperty('--cover-padding', '0');
    }
  }

  render() {
    // Expecting default slot for header/top content,
    // slot="main" for the centered content,
    // and default slot again for footer/bottom content.
    return html`<slot></slot><slot name="main"></slot><slot></slot>`;
  }
}

// Type definition for custom element in the global scope
declare global {
  interface HTMLElementTagNameMap {
    'e-cover': Cover;
  }
}
