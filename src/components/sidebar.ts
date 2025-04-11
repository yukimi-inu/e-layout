import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resolveVars } from '../utils/index.js';

/**
 * A layout component that creates a sidebar layout, placing sidebar content
 * alongside main content. The sidebar can be positioned on the left or right.
 * It uses Flexbox and allows content to wrap when space is limited.
 *
 * @element e-sidebar
 *
 * @slot sidebar - The content for the sidebar area.
 * @slot - Default slot for the main content area.
 *
 * @cssprop --sidebar-space - The gap between the sidebar and main content. Defaults to `var(--s1, 1rem)`. Controlled by the `space` attribute.
 * @cssprop --sidebar-align - Vertical alignment of sidebar and main content. Defaults to `stretch`. Set to `flex-start` when `no-stretch` attribute is present.
 * @cssprop --sidebar-content-min - The minimum width of the main content area before wrapping. Defaults to `50%`. Controlled by the `content-min` attribute.
 * @cssprop --sidebar-width - The width of the sidebar. Defaults to `undefined` (intrinsic width). Controlled by the `side-width` attribute.
 */
@customElement('e-sidebar')
export class Sidebar extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: var(--sidebar-space, var(--s1, 1rem));
      align-items: var(--sidebar-align, stretch);
    }

    ::slotted(:not([slot="sidebar"])) {
      flex-basis: 0;
      flex-grow: 999;
      min-inline-size: var(--sidebar-content-min, 50%);
    }

    ::slotted([slot="sidebar"]) {
      flex-basis: var(--sidebar-width);
      flex-grow: 0;
    }

    :host([no-stretch]) {
      align-items: flex-start; /* Override default stretch alignment */
    }

    :host([side="right"]) ::slotted([slot="sidebar"]) {
      order: 1;
    }
  `;

  /**
   * Determines which side the sidebar appears on.
   * Reflects to the `side` attribute.
   * @attr
   */
  @property({ type: String, reflect: true })
  side: 'left' | 'right' = 'left';

  /**
   * The width of the sidebar element. If not set, the sidebar takes its intrinsic width.
   * Maps to the `--sidebar-width` CSS custom property.
   * Accepts any valid CSS length value.
   * @attr side-width
   */
  @property({ type: String, attribute: 'side-width' })
  sideWidth: string | undefined = undefined;

  /**
   * The minimum width of the main content area before the layout wraps.
   * Maps to the `--sidebar-content-min` CSS custom property.
   * Accepts any valid CSS length or percentage value.
   * @attr content-min
   */
  @property({ type: String, attribute: 'content-min' })
  contentMin = '50%';

  /**
   * The gap between the sidebar and the main content.
   * Maps to the `--sidebar-space` CSS custom property.
   * Accepts any valid CSS length value or CSS variable.
   * @attr
   */
  @property({ type: String })
  space = 'var(--s1, 1rem)';

  /**
   * If true, prevents the sidebar and content from stretching vertically,
   * aligning them to the top instead.
   * Reflects to the `no-stretch` attribute.
   * @attr no-stretch
   */
  @property({ type: Boolean, reflect: true, attribute: 'no-stretch' })
  noStretch = false;

  render() {
    this.style.setProperty('--sidebar-width', resolveVars(this.sideWidth));
    this.style.setProperty('--sidebar-content-min', resolveVars(this.contentMin));
    this.style.setProperty('--sidebar-space', resolveVars(this.space));
    return html`<slot name="sidebar"></slot><slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-sidebar': Sidebar;
  }
}
