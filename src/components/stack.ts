import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('e-stack')
export class Stack extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      /* Apply gap using margin on children, controlled by --space */
      --space: var(--stack-space, 1.5rem); /* Default space from spec */
    }

    /* Apply margin to slotted children */
    ::slotted(*) {
      margin-block: 0;
    }

    /* Add margin-top to all children except the first */
    ::slotted(*:not(:first-child)) {
      margin-block-start: var(--space);
    }

    /* TODO: Implement recursive styling if possible/needed */
    /* :host([recursive]) ::slotted(*) { ... } might not work due to Shadow DOM */

    /* TODO: Implement splitAfter logic - likely needs JS in updated() */
  `;

  /**
   * The space between child elements. Accepts any valid CSS margin value.
   * Defaults to '1.5rem'.
   */
  @property({ type: String })
  space = '1.5rem';

  /**
   * Whether the space should apply recursively to nested stacks.
   * Note: Due to Shadow DOM limitations, true recursive application might be difficult.
   * Defaults to false.
   */
  @property({ type: Boolean })
  recursive = false;

  /**
   * The index (1-based) after which the stack should split, pushing subsequent items down.
   * Example: splitAfter=2 will add margin-bottom: auto to the 2nd child.
   * Defaults to null (no split).
   */
  @property({ type: Number, attribute: 'split-after' })
  splitAfter: number | null = null;

  /**
   * Updates the CSS custom property for space and handles splitAfter logic.
   */
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('space')) {
      this.style.setProperty('--stack-space', this.space);
    }

    // Handle splitAfter logic - apply margin-bottom: auto to the specified child
    // This requires accessing slotted nodes, which can be complex.
    // A simpler approach might be to require users to apply a class/attribute
    // to the element they want to push down, and style that in CSS.
    // For now, we'll leave the JS implementation commented out as it needs careful handling.
    /*
    if (changedProperties.has('splitAfter') || changedProperties.get('slotchange')) { // Need to react to slot changes too
      const children = this.shadowRoot?.querySelector('slot')?.assignedElements({ flatten: true }) || [];
      children.forEach((child, index) => {
        if (child instanceof HTMLElement) {
          if (this.splitAfter !== null && index === this.splitAfter - 1) {
            child.style.marginBottom = 'auto';
          } else {
            child.style.marginBottom = ''; // Reset if splitAfter changes
          }
        }
      });
    }
    */
  }

  render() {
    // Listen for slot changes to potentially re-run splitAfter logic
    // return html`<slot @slotchange=${() => this.requestUpdate('slotchange')}></slot>`;
    return html`<slot></slot>`;
  }
}

// Type definition for custom element in the global scope
declare global {
  interface HTMLElementTagNameMap {
    'e-stack': Stack;
  }
}
