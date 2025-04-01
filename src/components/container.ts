import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('e-container')
export class Container extends LitElement {
  static styles = css`
    :host {
      display: block; /* Or appropriate display type */
      container-type: inline-size; /* Default container type */
      container-name: var(--container-name); /* Set name via CSS variable */
    }
  `;

  /**
   * The name of the container, used for targeting in container queries.
   * If null or empty, the container will be anonymous.
   * Defaults to null.
   */
  @property({ type: String })
  name: string | null = null;

  /**
   * Updates the CSS custom property when the name property changes.
   */
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('name')) {
      if (this.name) {
        this.style.setProperty('--container-name', this.name);
      } else {
        this.style.removeProperty('--container-name');
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    // Set initial name if provided
    if (this.name) {
      this.style.setProperty('--container-name', this.name);
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

// Type definition for custom element in the global scope
declare global {
  interface HTMLElementTagNameMap {
    'e-container': Container;
  }
}
