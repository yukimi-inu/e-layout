import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('e-switcher')
export class Switcher extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: var(--switcher-gap, var(--s1, 1rem)); /* Use gap property */
      /* Define threshold variable, default from spec example */
      --threshold: var(--switcher-threshold, 30rem);
    }

    /* Apply switching logic to slotted children */
    ::slotted(*) {
      flex-grow: 1;
      /* The core switching logic based on threshold */
      flex-basis: calc((var(--threshold) - 100%) * 999);
    }

    /* Apply limit using :nth-last-child - requires limit to be set via CSS variable */
    /* Select elements from the Nth-last onwards */
    /* Example: if limit=4, select 5th-last onwards (:nth-last-child(n+5)) */
    /* This part needs to be dynamically generated or handled carefully */
    /* We set a CSS variable --switcher-limit-n based on the limit property */
    /* The selector itself cannot directly use the variable, so this needs JS intervention */
    /* or a predefined set of classes/attributes for common limits */

    /* Placeholder for limit styling - JS update needed */
    /* ::slotted(:nth-last-child(n + var(--switcher-limit-n, 999))) {
      flex-basis: 100%;
    }
    ::slotted(:nth-last-child(n + var(--switcher-limit-n, 999)) ~ *) {
      flex-basis: 100%;
    } */
  `;

  /**
   * The container width threshold at which the component switches layout.
   * Accepts any valid CSS size value. Defaults to '30rem'.
   */
  @property({ type: String })
  threshold = '30rem';

  /**
   * The space (gap) between child elements.
   * Accepts any valid CSS gap value. Defaults to 'var(--s1, 1rem)'.
   */
  @property({ type: String })
  gap = 'var(--s1, 1rem)';

  /**
   * The maximum number of elements allowed to appear side-by-side
   * before subsequent items wrap to a new line with 100% basis.
   * Defaults to Infinity (no limit).
   * Note: CSS-only implementation is tricky. Requires JS or predefined classes.
   */
  @property({ type: Number })
  limit = Infinity; // Use Infinity for no limit by default

  /**
   * Updates CSS custom properties. Handles limit logic via JS.
   */
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('threshold')) {
      this.style.setProperty('--switcher-threshold', this.threshold);
    }
    if (changedProperties.has('gap')) {
      this.style.setProperty('--switcher-gap', this.gap);
    }
    if (changedProperties.has('limit')) {
      this.applyLimitStyles();
    }
  }

  /**
   * Applies styles to children based on the limit property.
   * This is needed because CSS variables cannot be used directly in :nth selectors.
   */
  applyLimitStyles() {
    const children = this.shadowRoot?.querySelector('slot')?.assignedElements({ flatten: true }) || [];
    const limitNum = this.limit; // Keep original number

    children.forEach((child) => {
      if (child instanceof HTMLElement) {
        // Reset previous limit styles
        child.style.removeProperty('flex-basis');
      }
    });

    if (limitNum !== Infinity && limitNum > 0 && children.length > limitNum) {
      // Apply flex-basis: 100% to elements starting from limit + 1
      for (let i = limitNum; i < children.length; i++) {
        const child = children[i];
        if (child instanceof HTMLElement) {
          child.style.flexBasis = '100%';
        }
      }
    }
  }

  handleSlotChange() {
    this.applyLimitStyles();
  }

  render() {
    // Listen for slot changes to re-apply limit styles
    return html`<slot @slotchange=${this.handleSlotChange}></slot>`;
  }
}

// Type definition for custom element in the global scope
declare global {
  interface HTMLElementTagNameMap {
    'e-switcher': Switcher;
  }
}
