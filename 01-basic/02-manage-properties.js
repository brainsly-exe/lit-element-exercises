import { LitElement, html } from 'lit-element'

class ManageProperties extends LitElement {
    static get properties() {
        return {
            message: { type: String },
            count: { type: Number }
        }
    }

    constructor() {
        super()

        this.count = 0
    }

    render() {
        return html `
            <div>
                <div>
                    <p>The message is: ${this.message}, count is: ${this.count}</p>
                </div>

                <div>
                    <p>The reversed message is: ${this.reverseMessage(this.message)}</p>
                </div>
            </div>
        `
    }

    reverseMessage(message) {
        return message.split('').reverse().join('')
    }
}

customElements.define('manage-properties', ManageProperties)