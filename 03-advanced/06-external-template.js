import { LitElement, html, css } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'

const externalTemplate = `
    <div>Content rendered from an external source</div>
    <button>My button</button>
    <a href="#">My anchor</a>
`

class ExternalTemplate extends LitElement {
    render() {
        return html `
            Content rendered in lit-html
            ${unsafeHTML(externalTemplate)}
        `
    }
}

customElements.define('external-template', ExternalTemplate)