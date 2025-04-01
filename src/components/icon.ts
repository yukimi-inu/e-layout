import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('e-icon')
export class Icon extends LitElement {
  static styles = css`
    :host {
      /* Styles based on spec example */
      display: inline-block; /* Changed from inline-flex */
      width: 0.75em;
      /* width: 1cap; */ /* cap unit might not be widely supported */
      height: 0.75em;
      /* height: 1cap; */
      vertical-align: middle; /* Adjust alignment as needed */
      /* Allow color inheritance */
      color: inherit;
      /* Define space variable, used by parent context */
      --icon-space: var(--icon-space-override, 1rem);
    }

    /* Ensure slotted SVG scales correctly */
    ::slotted(svg) {
      display: block;
      width: 100%;
      height: 100%;
      /* Inherit color for fill/stroke */
      fill: currentColor;
    }

    /* Styles for when used with text (applied by parent) */
    /* Example:
    .with-icon {
      display: inline-flex;
      align-items: baseline;
    }
    .with-icon > e-icon {
      margin-inline-end: var(--icon-space);
    }
    */
  `;

  /**
   * The space between the icon and adjacent text when used in context.
   * If null, natural word spacing is preserved.
   * This value is primarily intended to be used by a parent CSS rule.
   * Defaults to null.
   */
  @property({ type: String })
  space: string | null = null;

  /**
   * Provides an accessible label for the icon, making it behave like an image
   * in assistive technologies. Sets the aria-label attribute.
   * Defaults to null.
   */
  @property({ type: String })
  label: string | null = null;

  /**
   * Updates the aria-label attribute and space custom property.
   */
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('label')) {
      if (this.label) {
        this.setAttribute('role', 'img');
        this.setAttribute('aria-label', this.label);
      } else {
        this.removeAttribute('role');
        this.removeAttribute('aria-label');
      }
    }
    if (changedProperties.has('space')) {
      // Set CSS variable if space is provided
      this.style.setProperty('--icon-space-override', this.space ?? '1rem'); // Default space if null? Spec says null preserves natural spacing.
    }
  }

  connectedCallback() {
    super.connectedCallback();
    // Apply initial ARIA attributes if label is set
    if (this.label) {
      this.setAttribute('role', 'img');
      this.setAttribute('aria-label', this.label);
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

// Type definition for custom element in the global scope
declare global {
  interface HTMLElementTagNameMap {
    'e-icon': Icon;
  }
}
