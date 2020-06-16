import { LitElement, html } from 'lit-element'

class ComputedProps extends LitElement {
    static get properties() {
        return {
            itemsA: { type: Array },
            itemsB: { type: Array },
            amountA: { type: Number },
            amountB: { type: Number }
        }
    }

    constructor() {
        super()

        this.itemsA = ['Hello', 'World']
        this.itemsB = ['foo', 'bar']
        this.amountA = 1
        this.amountB = 2
    }

    get totalAmount() {
        return this.amountA + this.amountB
    }

    render() {
        const items = this._computeItems(this.itemsA, this.itemsB)

        return html `
            <div>The computed messages are: [${items.join(', ')}]</div>
            <div>The computed amount is: [${this.amountA + this.amountB}]</div>
        `
    }

    _computeItems(a, b) {
        return [...a, ...b]
    }
}

customElements.define('computed-properties', ComputedProps)