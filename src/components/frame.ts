import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A layout component that wraps content (typically an image or video)
 * and maintains a specific aspect ratio. It uses `aspect-ratio` CSS property.
 *
 * @element e-frame
 *
 * @slot - The content (e.g., `<img>`, `<video>`) to be framed. Slotted images and videos are automatically styled to fit the frame.
 *
 * @cssprop --n - The numerator of the aspect ratio. Defaults to `16`. Controlled by the `ratio` attribute.
 * @cssprop --d - The denominator of the aspect ratio. Defaults to `9`. Controlled by the `ratio` attribute.
 */
@customElement('e-frame')
export class Frame extends LitElement {
  static styles = css`
    :host {
      --n: 16;
      --d: 9;
      aspect-ratio: var(--n) / var(--d);
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    ::slotted(img),
    ::slotted(video) {
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
    }
  `;

  /**
   * A semantic hint for the role of the frame element.
   * Does not change the rendered tag but can be used for CSS attribute selectors
   * or JavaScript targeting.
   * @attr
   */
  @property({ type: String })
  tag?: string;

  /**
   * The aspect ratio for the frame, written as 'width:height' or 'width/height'.
   * Defaults to '16:9'.
   * @attr
   */
  @property({ type: String })
  ratio = '16:9';

  private _updateRatioStyles() {
    const ratioParts = this.ratio.split(/[:/]/);
    if (ratioParts.length === 2) {
      const n = Number.parseFloat(ratioParts[0]);
      const d = Number.parseFloat(ratioParts[1]);
      if (!Number.isNaN(n) && !Number.isNaN(d) && d !== 0) {
        this.style.setProperty('--n', String(n));
        this.style.setProperty('--d', String(d));
      } else {
        this.style.setProperty('--n', '16');
        this.style.setProperty('--d', '9');
      }
    } else {
      this.style.setProperty('--n', '16');
      this.style.setProperty('--d', '9');
    }
  }

  protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('ratio')) {
      this._updateRatioStyles();
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._updateRatioStyles(); // Initial calculation
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-frame': Frame;
  }
}
