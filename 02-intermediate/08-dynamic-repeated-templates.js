import { LitElement, html } from 'lit-element'
import { repeat } from 'lit-html/directives/repeat'

class DynamicRepeatedTemplates extends LitElement {
    static get properties() {
        return {
            items: { type: Array }
        }
    }

    constructor() {
        super()

        this.items = [
            { id: 0, message: 'hello' },
            { id: 1, message: 'world' },
            { id: 2, message: 'foo' },
            { id: 3, message: 'bar' },
        ]
    }

    render() {
        return html `
            <div>
                <button @click="${this.reorder}">Re-order items (random)</button>

                ${repeat(
                    this.items,
                    item => item.id,
                    (item, i) => html `<div>[${i}] Message ${item.id}: ${item.message}</div>`
                )}
            </div>
        `
    }

    reorder() {
        this.items = [...this.items.sort(() => Math.floor(Math.random() * 3) + -1)]
    }   
}

customElements.define('dynamic-repeated-templates', DynamicRepeatedTemplates)