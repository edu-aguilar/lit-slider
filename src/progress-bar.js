import { LitElement, html, css } from 'lit-element';

export class ProgressBar extends LitElement {
  
  static get styles() {
    return [css `
       :host {
          display: block;
          height: 20px;
          width: 300px;
          background-color: #e6e6e6;
          position: relative;
        }
        .progress {
          position: absolute;
          z-index: 20;
          width: 0px;
          height: 100%;
          background-color: red;
          transition: ease 0.5s all;
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
      <div class="progress">${this._progress}</div>
    `;
  }

}
customElements.define('progress-bar', ProgressBar);