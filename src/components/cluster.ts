import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resolveVars } from '../utils/index.js';

type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
type AlignContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
/**
 * A layout component that arranges items in a flex container, primarily for grouping
 * items like tags or buttons. It provides controls for alignment, justification,
 * wrapping, and spacing.
 *
 * @element e-cluster
 *
 * @slot - The items to be arranged within the cluster.
 *
 * @cssprop --cluster-wrap - Controls whether items wrap. Maps to the `flex-wrap` property. Defaults to `wrap`. Controlled by the `wrap` attribute.
 * @cssprop --cluster-space - The gap between items. Defaults to `var(--s1, 1rem)`. Controlled by the `space` attribute.
 * @cssprop --cluster-justify - Justification of items along the main axis. Maps to `justify-content`. Defaults to `flex-start`. Controlled by the `justify` attribute.
 * @cssprop --cluster-align - Alignment of items along the cross axis. Maps to `align-items`. Defaults to `flex-start`. Controlled by the `align` attribute.
 * @cssprop --cluster-align-content - Alignment of content lines when items wrap. Maps to `align-content`. Defaults to `flex-start`. Controlled by the `align-content` attribute.
 */
@customElement('e-cluster')
export class Cluster extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-wrap: var(--cluster-wrap, wrap);
      gap: var(--cluster-space, var(--s1, 1rem));
      justify-content: var(--cluster-justify, flex-start);
      align-items: var(--cluster-align, flex-start);
      align-content: var(--cluster-align-content, flex-start);
    }
  `;

  /**
   * A semantic hint for the role of the cluster element.
   * Does not change the rendered tag but can be used for CSS attribute selectors
   * or JavaScript targeting.
   * @attr
   */
  @property({ type: String })
  tag?: string;

  /**
   * Controls the justification of items along the main axis.
   * Maps to the `justify-content` CSS property via `--cluster-justify`.
   * @attr
   */
  @property()
  justify: JustifyContent = 'flex-start';

  /**
   * Controls the alignment of items along the cross axis.
   * Maps to the `align-items` CSS property via `--cluster-align`.
   * @attr
   */
  @property()
  align: AlignItems = 'flex-start';

  /**
   * Sets the gap between items.
   * Maps to the `gap` CSS property via `--cluster-space`.
   * Accepts any valid CSS length value or CSS variable.
   * @attr
   */
  @property({ type: String })
  space = 'var(--s1, 1rem)';

  /**
   * Controls whether items wrap to the next line.
   * Maps to the `flex-wrap` CSS property via `--cluster-wrap`.
   * @attr
   */
  @property()
  wrap: FlexWrap = 'wrap';

  /**
   * Controls the alignment of content lines when items wrap onto multiple lines.
   * Maps to the `align-content` CSS property via `--cluster-align-content`.
   * @attr align-content
   */
  @property({ reflect: true, attribute: 'align-content' })
  alignContent: AlignContent = 'flex-start';

  render() {
    this.style.setProperty('--cluster-justify', resolveVars(this.justify));
    this.style.setProperty('--cluster-align', resolveVars(this.align));
    this.style.setProperty('--cluster-space', resolveVars(this.space));
    this.style.setProperty('--cluster-wrap', resolveVars(this.wrap));
    this.style.setProperty('--cluster-align-content', resolveVars(this.alignContent));
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-cluster': Cluster;
  }
}
