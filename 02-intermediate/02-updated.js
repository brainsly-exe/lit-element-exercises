import { LitElement, html } from 'lit-element'

class Updated extends LitElement {
    static get properties() {
        return {
            focused: { type: Boolean }
        }
    }

    constructor() {
        super()

        this.focused = false
    }

    render() {
        return html `
            <input 
                id="amountInput" 
                type="number" 
                name="amount" 
                @blur="${() => this.focused = false}" 
            />
            Focused: ${this.focused}
            <button @click="${() => this.focused = true}">Focus input</button>
        `
    }

    updated(changedProperties) {
        if (changedProperties && changedProperties.get('focused') == false) {
            this.shadowRoot.getElementById('amountInput').focus()
        }
    }
}

customElements.define('updated-demo', Updated)