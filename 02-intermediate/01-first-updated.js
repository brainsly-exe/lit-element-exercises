import { LitElement, html } from 'lit-element'

class FirstUpdated extends LitElement {
    render() {
        return html `
            <form id="form">
                Auto focused: <input id="amountInput" type="number" name="amount" />
                <button>Submit button</button>
            </form>
        `
    }

    firstUpdated(changedProperties) {
        this._form = this.shadowRoot.getElementById('form')

        this.shadowRoot.getElementById('amountInput').focus()
    }

    submitForm() {
        return this._form.submit()
    }
}

customElements.define('first-updated', FirstUpdated)