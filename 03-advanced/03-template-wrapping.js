import { LitElement, html } from 'lit-element'

function wrapItemTemplate(item, template) {
    switch(item.type) {
        case 'button' :
            return html `<button>${template}</button>`
        case 'link':
            return html `<a href="${item.url}">${template}</a>`
        default:
            return template
    }
}

function getItemTemplate(item) {
    const baseTemplate = html `<div>${item.message}</div>`

    return wrapItemTemplate(item, baseTemplate)
}

class TemplateWrapping extends LitElement {
    static get properties() {
        return {
            items: { type: Array }
        }
    }

    constructor() {
        super()

        this.items = [
            { type: 'button', message: 'hello' },
            { type: 'link', url: '#', message: 'world' },
            { type: 'none', message: 'foo' }
        ]
    }

    render() {
        return html `
            ${this.items.map(getItemTemplate)}
        `
    }
}

customElements.define('template-wrapping', TemplateWrapping)