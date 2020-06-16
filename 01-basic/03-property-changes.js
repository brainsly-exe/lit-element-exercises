import { LitElement, html } from 'lit-element'

class PropertyChanges extends LitElement {
    static get properties() {
        return {
            count: { type: Number }
        }
    }

    constructor() {
        super()

        this.count = 0

        setInterval(() => {
            this.count = this.count < 10 ? this.count + 1 : 0
        }, 2000)
    }

    render() {
        return html `
            <div>
                <p>Count from 0 to 10: [${this.count}]</p>
            </div>
        `
    }
}

customElements.define('property-changes', PropertyChanges)