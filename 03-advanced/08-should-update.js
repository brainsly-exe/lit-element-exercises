import { LitElement, html } from 'lit-element'

class ShouldUpdate extends LitElement {
    static get properties() {
        return {
            active: { type: Boolean },
            count: { type: Number }
        }
    }

    constructor() {
        super()

        this.active = true
        this.count = 0

        setInterval(() => {
            this.count += 1
        }, 1000);
    }

    render() {
        return html `
            Current count: ${this.count}
            <button @click="${() => this.active = !this.active}">
                Toggle Active
            </button>
        `
    }

    shouldUpdate(changedProperties) {
        return this.active
    }
}

customElements.define('should-update', ShouldUpdate)