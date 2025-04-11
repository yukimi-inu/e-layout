import { LitElement, type PropertyValues, css, html } from 'lit'; // Use import type
import { customElement, property } from 'lit/decorators.js';

@customElement('e-container')
/**
 * A component that establishes a CSS container context, enabling container queries
 * for its descendants. It sets `container-type: inline-size` by default and allows
 * assigning a `container-name`.
 *
 * @element e-container
 *
 * @slot - The content within the container.
 */
export class Container extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  /**
   * A semantic hint for the role of the container element.
   * Does not change the rendered tag but can be used for CSS attribute selectors
   * or JavaScript targeting.
   * @attr
   */
  @property({ type: String })
  tag?: string;

  /**
   * The name assigned to the CSS container context.
   * This name is used in container queries (`@container`).
   * Maps to the `container-name` CSS property.
   * @attr container-name
   */
  @property({ type: String, attribute: 'container-name' })
  containerName: string | null = null;

  protected firstUpdated(changedProperties: PropertyValues<this>): void {
    super.firstUpdated(changedProperties);
    this.style.setProperty('container-type', 'inline-size');
    this.#updateContainerNameStyle();
  }

  protected updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);
    if (changedProperties.has('containerName')) {
      this.#updateContainerNameStyle();
    }
  }

  #updateContainerNameStyle(): void {
    if (this.containerName) {
      this.style.setProperty('container-name', this.containerName);
    } else {
      this.style.removeProperty('container-name');
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-container': Container;
  }
}
