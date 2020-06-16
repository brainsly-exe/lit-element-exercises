import { LitElement, html, css } from 'lit-element'

class RenderStyles extends LitElement {
    static get styles() {
        return css `
            :host {
                display: block
            }

            .message {
                color: blue
            }
        `
    }

    render() {
        return html `
            <div class="message">Hello World!</div>
        `
    }
}

customElements.define('render-styles', RenderStyles)