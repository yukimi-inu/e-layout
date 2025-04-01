import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('e-sidebar')
export class Sidebar extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-wrap: wrap; /* Allow wrapping */
      gap: var(--sidebar-space, var(--s1, 1rem)); /* Use space property */
      /* Default alignment, override if noStretch is true */
      align-items: var(--sidebar-align, stretch);
    }

    /* Styles for the main content area (assuming side="left") */
    /* ::slotted(:not([slot="sidebar"])) { */
    /* Using a general selector as direct :not([slot]) might be tricky */
    /* Target the default slot content specifically if possible, otherwise rely on order */
    /* Let's assume default slot is the main content */
    ::slotted(:not([slot="sidebar"])) { /* More specific selector */
      flex-basis: 0;
      flex-grow: 999; /* Allow main content to grow significantly */
      min-inline-size: var(--sidebar-content-min, 50%); /* Use contentMin property */
    }

    /* Styles for the sidebar element (assuming side="left") */
    ::slotted([slot="sidebar"]) {
      flex-basis: var(--sidebar-width); /* Use sideWidth property */
      flex-grow: 0; /* Do not allow sidebar to grow beyond its basis */
    }

    /* Apply align-items: flex-start if noStretch is true */
    :host([nostretch]) {
      align-items: flex-start;
    }

    /* TODO: Implement styles for side="right" */
    /* This might require swapping the order or changing flex properties based on the 'side' attribute */
    /* Example: :host([side="right"]) ::slotted([slot="sidebar"]) { order: 1; } */
    /* Example: :host([side="right"]) ::slotted(:not([slot="sidebar"])) { order: 0; } */
  `;

  /**
   * Which element to treat as the sidebar ('left' or 'right').
   * Defaults to 'left'.
   * Note: Current CSS primarily implements 'left'. 'right' needs further work.
   */
  @property({ type: String, reflect: true }) // Reflect for potential CSS targeting
  side: 'left' | 'right' = 'left';

  /**
   * Represents the width of the sidebar when adjacent.
   * If not set (null), it defaults to the sidebar's content width (handled by flexbox).
   * Accepts any valid CSS size value. Defaults to null.
   */
  @property({ type: String, attribute: 'side-width' })
  sideWidth: string | null = null;

  /**
   * The minimum width of the content element in the horizontal configuration.
   * Accepts a CSS percentage value. Defaults to '50%'.
   */
  @property({ type: String, attribute: 'content-min' })
  contentMin = '50%';

  /**
   * A CSS margin value representing the space between the sidebar and content.
   * Defaults to 'var(--s1, 1rem)'.
   */
  @property({ type: String })
  space = 'var(--s1, 1rem)';

  /**
   * Make the adjacent elements adopt their natural height.
   * Reflects as attribute 'nostretch'. Defaults to false.
   */
  @property({ type: Boolean, reflect: true }) // Reflect for CSS targeting
  noStretch = false;

  /**
   * Updates CSS custom properties when properties change.
   */
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('sideWidth')) {
      // Set --sidebar-width only if sideWidth is provided
      this.style.setProperty('--sidebar-width', this.sideWidth ?? 'auto');
    }
    if (changedProperties.has('contentMin')) {
      this.style.setProperty('--sidebar-content-min', this.contentMin);
    }
    if (changedProperties.has('space')) {
      this.style.setProperty('--sidebar-space', this.space);
    }
    // side and noStretch are handled by attribute reflection and CSS selectors
  }

  render() {
    // Slots will determine the order unless overridden by CSS 'order' property
    return html`<slot name="sidebar"></slot><slot></slot>`;
  }
}

// Type definition for custom element in the global scope
declare global {
  interface HTMLElementTagNameMap {
    'e-sidebar': Sidebar;
  }
}
