import { LitElement, html, css } from 'lit-element';

export class ProgressBar extends LitElement {
  
  static get styles() {
    return [css `
       :host {
          display: block;
          height: var(--progress-bar-height, 20px);
          width: var(--progress-bar-width, 100%);
          background-color: var(--progress-bar-background-color, #E500FF);
          position: relative;
          border-radius: var(--progress-bar-radius, 8px);
        }
        .progress {
          position: absolute;
          z-index: 20;
          width: 0px;
          height: 100%;
          background-color: var(--progress-bar-foreground-color, #1131FF);
          transition: ease 0.5s all;
          border-radius: var(--progress-bar-radius, 8px);
        }
    `];
  }

  static get properties() {
    return {
      _progress: { type: Number }
    };
  }

  constructor() {
    super();
    this.progress = 0;
  }

  firstUpdated(changedProperties) {
    this._drawProgress(this.progress);
  }

  get progress() {
    return this._progress;
  }

  set progress(progress) {
    this._progress = progress;
    let progressBar = this.shadowRoot.querySelector('.progress');
    if (progressBar) {
      this._drawProgress(progress);
    }
  }

  _drawProgress(progress) {
    let progressBar = this.shadowRoot.querySelector('.progress');
    progressBar.style.width = `${progress}%`;
  }

  render() {
    return html`
      <div class="progress"></div>
    `;
  }

}
customElements.define('progress-bar', ProgressBar);