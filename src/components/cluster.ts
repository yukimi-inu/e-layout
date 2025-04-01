import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('e-cluster')
export class Cluster extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-wrap: var(--cluster-wrap, wrap); /* Use wrap property */
      gap: var(--cluster-space, var(--s1, 1rem)); /* Use space property */
      justify-content: var(--cluster-justify, flex-start); /* Use justify property */
      align-items: var(--cluster-align, flex-start); /* Use align property */
    }
  `;

  /**
   * A CSS justify-content value.
   * Defaults to 'flex-start'.
   */
  @property({ type: String })
  justify = 'flex-start';

  /**
   * A CSS align-items value.
   * Defaults to 'flex-start'.
   */
  @property({ type: String })
  align = 'flex-start';

  /**
   * A CSS gap value. The minimum space between the clustered child elements.
   * Defaults to 'var(--s1, 1rem)'.
   */
  @property({ type: String })
  space = 'var(--s1, 1rem)';

  /**
   * Controls the wrapping behavior. Accepts 'wrap', 'nowrap', 'wrap-reverse'.
   * Defaults to 'wrap'.
   */
  @property({ type: String })
  wrap: 'wrap' | 'nowrap' | 'wrap-reverse' = 'wrap';

  /**
   * Updates CSS custom properties when properties change.
   */
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('justify')) {
      this.style.setProperty('--cluster-justify', this.justify);
    }
    if (changedProperties.has('align')) {
      this.style.setProperty('--cluster-align', this.align);
    }
    if (changedProperties.has('space')) {
      this.style.setProperty('--cluster-space', this.space);
    }
    if (changedProperties.has('wrap')) {
      this.style.setProperty('--cluster-wrap', this.wrap);
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

// Type definition for custom element in the global scope
declare global {
  interface HTMLElementTagNameMap {
    'e-cluster': Cluster;
  }
}
