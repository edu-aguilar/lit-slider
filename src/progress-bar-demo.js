import { LitElement, html, css } from 'lit-element';
import './progress-bar';

export class ProgressBarDemo extends LitElement {

  static get styles() {
    return [css`
      :host {
        display: block;
      }
      progress-bar {
        margin: 1rem 0;
        --progress-bar-background-color: #BCED09;
        --progress-bar-foreground-color: #2F52E0;
      }
    `];
  }

  static get properties() {
    return {
      value: { type: String }
    };
  }

  constructor() {
    super();
    this.value = 30;
  }

  firstUpdated() {
    let slider = this.shadowRoot.querySelector('input');
    slider.addEventListener('change', (event) => {
      let value = event.path[0].value;
      this.value = value;
      this._setProgressBarValue(value);
    })
  }

  _setProgressBarValue(value) {
    let progressBar = this.shadowRoot.querySelector('progress-bar');
    progressBar.progress = value;
  }

  render() {
    return html`
      <p>Try this slider to see how progress-bar works</p>
      <input type="range" value="${this.value}" name="progress" min="0" max="100">
      <span>${this.value}</span>
      <progress-bar .progress="${this.value}"></progress-bar>
    `;
  }
}
customElements.define('progress-bar-demo', ProgressBarDemo);