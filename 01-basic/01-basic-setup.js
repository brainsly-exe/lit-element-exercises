import { LitElement, html, css } from 'lit-element'

class BasicSetup extends LitElement {
    render() {
        return html `
            <div>Hello World!</div>
        `
    }
}

customElements.define('basic-setup', BasicSetup)