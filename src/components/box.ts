import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// import { unsafeStatic, html as staticHtml } from 'lit/static-html.js'; // Commented out for now, in case dynamic tags are needed later

@customElement('e-box')
export class Box extends LitElement {
  static styles = css`
    :host {
      display: block;
      /* Add CSS custom properties as needed */
      padding: var(--box-padding, 0); /* Apply padding via CSS custom property */
    }
  `;

  /**
   * Sets the padding inside the box. Accepts any valid CSS padding value.
   * Defaults to '0'.
   */
  @property({ type: String })
  padding = '0';

  /**
   * Updates the CSS custom property when the padding property changes.
   */
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('padding')) {
      this.style.setProperty('--box-padding', this.padding);
    }
  }

  render() {
    // const tag = unsafeStatic(this.as); // If using dynamic tags
    // return staticHtml`<${tag}><slot></slot></${tag}>`;

    // Currently renders a simple slot
    return html`<slot></slot>`;
  }
}

// Type definition for custom element in the global scope (for TypeScript type checking)
declare global {
  interface HTMLElementTagNameMap {
    'e-box': Box;
  }
}
