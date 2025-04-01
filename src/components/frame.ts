import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('e-frame')
export class Frame extends LitElement {
  static styles = css`
    :host {
      /* Default ratio values */
      --n: 16;
      --d: 9;
      aspect-ratio: var(--n) / var(--d);
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* Style slotted img/video elements */
    ::slotted(img),
    ::slotted(video) {
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
    }
  `;

  /**
   * The aspect ratio for the frame, formatted as 'N:D' or 'N/D'.
   * Defaults to '16:9'.
   */
  @property({ type: String })
  ratio = '16:9';

  /**
   * Updates the aspect ratio CSS custom properties when the ratio property changes.
   */
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('ratio')) {
      const ratioParts = this.ratio.split(/[:/]/); // Split by ':' or '/'
      if (ratioParts.length === 2) {
        const n = parseFloat(ratioParts[0]);
        const d = parseFloat(ratioParts[1]);
        if (!isNaN(n) && !isNaN(d) && d !== 0) {
          this.style.setProperty('--n', String(n));
          this.style.setProperty('--d', String(d));
        } else {
          // Fallback to default if ratio is invalid
          this.style.setProperty('--n', '16');
          this.style.setProperty('--d', '9');
        }
      } else {
        // Fallback to default if format is wrong
        this.style.setProperty('--n', '16');
        this.style.setProperty('--d', '9');
      }
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

// Type definition for custom element in the global scope
declare global {
  interface HTMLElementTagNameMap {
    'e-frame': Frame;
  }
}
