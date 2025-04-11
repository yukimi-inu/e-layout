import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resolveVars } from '../utils/index.js';

/**
 * @element e-imposter
 * @description Overlays content on top of other content, typically used for modals or popups. It uses logical properties for positioning.
 *
 * @slot - The content to be overlaid.
 *
 * @cssprop --imposter-margin - The logical space between the imposter element and the containing block edges (default: 0px). Applied based on alignment.
 *
 * @attr {boolean} breakout - Allows the imposter to break out of its container's bounds.
 * @attr {string} margin - Sets the logical margin from the aligned edge. Accepts CSS length values (default: '0px').
 * @attr {boolean} fixed - Uses fixed positioning instead of absolute positioning.
 * @attr {'start' | 'center' | 'end'} [alignBlock='center'] - Block direction alignment (e.g., top/bottom in horizontal writing modes).
 * @attr {'start' | 'center' | 'end'} [alignInline='center'] - Inline direction alignment (e.g., left/right in horizontal writing modes).
 */
@customElement('e-imposter')
export class Imposter extends LitElement {
  static styles = css`
    :host {
      position: absolute;
      --margin: var(--imposter-margin, 0px);
      --z-index: var(--imposter-z-index, 1);
      z-index: var(--z-index);
      inset-block-start: 50%;
      inset-inline-start: 50%;
      transform: translate(-50%, -50%);
    }

    :host([fixed]) {
      position: fixed;
    }

    :host([align-block='start']) {
      inset-block-start: var(--margin);
      inset-block-end: auto;
    }
    :host([align-block='end']) {
      inset-block-start: auto;
      inset-block-end: var(--margin);
    }
    :host([align-block='center']) {
       inset-block-start: 50%;
       inset-block-end: auto;
    }


    :host([align-inline='start']) {
      inset-inline-start: var(--margin);
      inset-inline-end: auto;
    }
    :host([align-inline='end']) {
      inset-inline-start: auto;
      inset-inline-end: var(--margin);
    }
    :host([align-inline='center']) {
      inset-inline-start: 50%;
      inset-inline-end: auto;
    }

    :host([align-block='start']),
    :host([align-block='end']) {
        transform: translateY(0);
    }
    :host([align-inline='start']),
    :host([align-inline='end']) {
        transform: translateX(0);
    }

    :host([align-block='center'][align-inline='start']),
    :host([align-block='center'][align-inline='end']) {
      transform: translateY(-50%);
    }
    :host([align-inline='center'][align-block='start']),
    :host([align-inline='center'][align-block='end']) {
      transform: translateX(-50%);
    }

    :host([align-block='center'][align-inline='center']) {
       transform: translate(-50%, -50%);
    }
     :host([align-block='start'][align-inline='start']),
     :host([align-block='start'][align-inline='end']),
     :host([align-block='end'][align-inline='start']),
     :host([align-block='end'][align-inline='end']) {
        transform: translate(0, 0);
     }


    :host(:not([breakout])) {
      overflow: auto;
      max-inline-size: calc(100% - (var(--margin) * 2));
      max-block-size: calc(100% - (var(--margin) * 2));
    }
  `;

  @property({ type: Boolean, reflect: true })
  breakout = false;

  @property({ type: String })
  margin = '0px';

  @property({ type: Boolean, reflect: true })
  fixed = false;

  /** Block direction alignment (e.g., top/bottom in horizontal writing modes). Maps to `align-block` attribute. */
  @property({ type: String, reflect: true, attribute: 'align-block' })
  alignBlock: 'start' | 'center' | 'end' = 'center';

  /** Inline direction alignment (e.g., left/right in horizontal writing modes). Maps to `align-inline` attribute. */
  @property({ type: String, reflect: true, attribute: 'align-inline' })
  alignInline: 'start' | 'center' | 'end' = 'center';

  @property({ type: String, reflect: true, attribute: 'z-index' })
  zIndex = '1';

  render() {
    this.style.setProperty('--imposter-margin', resolveVars(this.margin));
    this.style.setProperty('--imposter-z-index', resolveVars(this.zIndex));
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-imposter': Imposter;
  }
}
