import { LitElement, html } from 'lit-element'

class PropertySetterObserver extends LitElement {
    static get properties() {
        return {
            _focused: { type: Boolean }
        }
    }

    constructor() {
        super()

        this.focused = false
    }

    get focused() {
        return this._focused
    }

    set focused(focused) {
        this._focused = focused
        
        if(focused) {
            this.shadowRoot.getElementById('amountInput').focus()
        }
    }

    render() {
        return html `
            <input 
                id="amountInput" 
                type="number" 
                name="amount" 
                @blur="${() => this.focused = false}" 
            />
            Focused: ${this._focused}
            <button @click="${() => this.focused = true}">Focus input</button>
        `
    }
}

customElements.define('property-setter-observer', PropertySetterObserver)