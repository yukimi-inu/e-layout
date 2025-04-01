import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('e-center')
export class Center extends LitElement {
  static styles = css`
    :host {
      box-sizing: content-box; /* As per spec example */
      display: block; /* Changed from flex to block */
      margin-inline: auto; /* Center the block itself */
      max-inline-size: var(--center-max-width, var(--measure, 60ch)); /* Use max property */
      padding-inline: var(--center-gutters, 0); /* Use gutters property */
    }

    /* Apply text-align center if withText is true */
    :host([with-text]) {
      text-align: center;
    }

    /* Apply intrinsic centering styles if intrinsic is true */
    :host([intrinsic]) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;

  /**
   * The maximum inline size (width) of the content.
   * Accepts any valid CSS size value. Defaults to 'var(--measure, 60ch)'.
   */
  @property({ type: String, attribute: 'max' })
  max = 'var(--measure, 60ch)'; // Default from spec example, allowing CSS var override

  /**
   * The minimum space on either side of the content (inline padding).
   * Accepts any valid CSS padding value. Defaults to '0'.
   */
  @property({ type: String })
  gutters = '0';

  /**
   * Whether the text content within the element should also be centered.
   * Reflects as attribute 'with-text'. Defaults to false.
   */
  @property({ type: Boolean, reflect: true, attribute: 'with-text' })
  withText = false;

  /**
   * Whether to use intrinsic (flex) centering based on the content's width.
   * Reflects as attribute 'intrinsic'. Defaults to false.
   */
  @property({ type: Boolean, reflect: true })
  intrinsic = false;

  /**
   * Updates CSS custom properties when properties change.
   */
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('max')) {
      this.style.setProperty('--center-max-width', this.max);
    }
    if (changedProperties.has('gutters')) {
      this.style.setProperty('--center-gutters', this.gutters);
    }
    // withText and intrinsic are handled by attribute reflection and CSS selectors
  }

  render() {
    return html`<slot></slot>`;
  }
}

// Type definition for custom element in the global scope
declare global {
  interface HTMLElementTagNameMap {
    'e-center': Center;
  }
}
