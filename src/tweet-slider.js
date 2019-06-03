import { LitElement, html } from '../node_modules/lit-element/lit-element.js';

class TweetSlider extends LitElement {
  render() {
    return html`
      <h1>Hello world2!</h1>
    `;
  }
}

customElements.define('tweet-slider', TweetSlider);