import { LitElement, html } from 'lit-element'

class PropertiesAndAttributes extends LitElement {
    static get properties() {
        return {
            href: { type: String },
            label: { type: String },
            message: { type: String },
            checked: { type: Boolean }
        }
    }

    constructor() {
        super()
        this.href = 'https://github.com/Amorim-79'
        this.label = 'Amorim'
        this.checked = true
    }

    render() {
        return html `
            <a href=${this.href}>
                <p>${this.label}</p>
            </a>

            <input type="checkbox" ?checked=${this.checked} />

            <fancy-message
                .messagePrefix=${messagePrefix}
                .message=${this.message}
            >
            </fancy-message>

            <fancy-message
                messageprefix="The message is: "
                .message=${this.message}
            >
            </fancy-message>
        `
    }
}

customElements.define('properties-and-attributes', PropertiesAndAttributes)

class FancyMessage extends LitElement {
    static get properties() {
        return {
            message: { type: String },
            messagePrefix: { type: String }
        }
    }

    render() {
        return html `
            <div>${this.messagePrefix} ${this.message}</div>
        `
    }
}

customElements.define('fancy-message', FancyMessage)