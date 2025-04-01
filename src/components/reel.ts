import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('e-reel')
export class Reel extends LitElement {
  static styles = css`
    :host {
      display: flex;
      /* Default height, overridden by property */
      block-size: var(--reel-height, auto);
      overflow-x: auto;
      overflow-y: hidden;
      /* Scrollbar colors, overridden by properties */
      scrollbar-color: var(--reel-thumb-color, #fff) var(--reel-track-color, #000);
    }

    /* Webkit scrollbar styling */
    :host::-webkit-scrollbar {
      block-size: 1rem; /* As per spec example */
    }
    :host::-webkit-scrollbar-track {
      background-color: var(--reel-track-color, #000);
    }
    :host::-webkit-scrollbar-thumb {
      background-color: var(--reel-thumb-color, #fff);
      /* Optional gradient from spec example - might need adjustment */
      /* background-image: linear-gradient(var(--reel-track-color, #000) 0, var(--reel-track-color, #000) 0.25rem, var(--reel-thumb-color, #fff) 0.25rem, var(--reel-thumb-color, #fff) 0.75rem, var(--reel-track-color, #000) 0.75rem); */
    }

    /* Hide scrollbar if noBar is true */
    :host([nobar]) {
      scrollbar-width: none; /* Firefox */
    }
    :host([nobar])::-webkit-scrollbar {
      display: none; /* WebKit/Blink */
    }

    /* Slotted items styling */
    ::slotted(*) {
      flex: 0 0 var(--reel-item-width, auto); /* Use itemWidth property */
    }
    ::slotted(img) {
      /* Specific styles for images from spec example */
      block-size: 100%;
      flex-basis: auto;
      width: auto;
    }

    /* Gap implementation using margin */
    ::slotted(*:not(:first-child)) {
      margin-inline-start: var(--reel-gap, 1rem); /* Use gap property */
    }

    /* TODO: Implement .overflowing class logic if needed (requires JS ResizeObserver) */
    /* :host(.overflowing) { padding-block-end: var(--reel-gap, 1rem); } */
  `;

  /**
   * The width of each child element. Defaults to 'auto'.
   */
  @property({ type: String, attribute: 'item-width' })
  itemWidth = 'auto';

  /**
   * The space between each child element. Defaults to '1rem'.
   */
  @property({ type: String })
  gap = '1rem';

  /**
   * The height (block-size) of the Reel element. Defaults to 'auto'.
   */
  @property({ type: String })
  height = 'auto';

  /**
   * The color of the scrollbar track. Defaults to '#000'.
   */
  @property({ type: String, attribute: 'track-color' })
  trackColor = '#000';

  /**
   * The color of the scrollbar thumb. Defaults to '#fff'.
   */
  @property({ type: String, attribute: 'thumb-color' })
  thumbColor = '#fff';

  /**
   * Whether to hide the scrollbar. Reflects as attribute 'nobar'. Defaults to false.
   */
  @property({ type: Boolean, reflect: true }) // Reflect for CSS targeting
  noBar = false;

  /**
   * Updates CSS custom properties when properties change.
   */
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('itemWidth')) {
      this.style.setProperty('--reel-item-width', this.itemWidth);
    }
    if (changedProperties.has('gap')) {
      this.style.setProperty('--reel-gap', this.gap);
    }
    if (changedProperties.has('height')) {
      this.style.setProperty('--reel-height', this.height);
    }
    if (changedProperties.has('trackColor')) {
      this.style.setProperty('--reel-track-color', this.trackColor);
    }
    if (changedProperties.has('thumbColor')) {
      this.style.setProperty('--reel-thumb-color', this.thumbColor);
    }
    // noBar is handled by attribute reflection and CSS selectors
  }

  render() {
    return html`<slot></slot>`;
  }
}

// Type definition for custom element in the global scope
declare global {
  interface HTMLElementTagNameMap {
    'e-reel': Reel;
  }
}
