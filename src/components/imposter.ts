import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('e-imposter')
export class Imposter extends LitElement {
  static styles = css`
    :host {
      position: absolute; /* Default, overridden if fixed=true */
      /* Default centering */
      inset-block-start: 50%;
      inset-inline-start: 50%;
      transform: translate(-50%, -50%);
      /* Default margin */
      --margin: var(--imposter-margin, 0px);
    }

    /* Apply fixed positioning if fixed=true */
    :host([fixed]) {
      position: fixed;
    }

    /* Apply containment styles if breakout=false (default) */
    :host(:not([breakout])) {
      overflow: auto;
      max-inline-size: calc(100% - (var(--margin) * 2));
      max-block-size: calc(100% - (var(--margin) * 2));
    }
  `;

  /**
   * Whether the element is allowed to break out of its container.
   * Reflects as attribute 'breakout'. Defaults to false.
   */
  @property({ type: Boolean, reflect: true })
  breakout = false;

  /**
   * The minimum space between the element and the container edges
   * when breakout is false. Accepts any valid CSS size value.
   * Defaults to '0px'.
   */
  @property({ type: String })
  margin = '0px';

  /**
   * Whether to position the element relative to the viewport (fixed).
   * Reflects as attribute 'fixed'. Defaults to false.
   */
  @property({ type: Boolean, reflect: true })
  fixed = false;

  /**
   * Updates CSS custom properties when properties change.
   */
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('margin')) {
      this.style.setProperty('--imposter-margin', this.margin);
    }
    // fixed and breakout are handled by attribute reflection and CSS selectors
  }

  render() {
    return html`<slot></slot>`;
  }
}

// Type definition for custom element in the global scope
declare global {
  interface HTMLElementTagNameMap {
    'e-imposter': Imposter;
  }
}
