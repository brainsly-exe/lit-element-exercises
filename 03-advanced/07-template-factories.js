import { LitElement, html } from 'lit-element'

const templateFactory = (inputValue, buttonText, onSubmit) => html `
    <input id="usernameInput" value="${inputValue}" />

    <button @click="${onSubmit}">
        ${buttonText}
    </button>
`

class TemplateFactories extends LitElement {
    static get properties() {
        return {
            username: { type: String }
        }
    }

    constructor() {
        super()

        this.username = 'Steve'
        this._onUsernameSubmit = this._onUsernameSubmit.bind(this)
    }

    render() {
        return html `
            <h3>${this.username}</h3>
            ${templateFactory(this.username, 'Change username', this._onUsernameSubmit)}
        `
    }

    _onUsernameSubmit() {
        this.username = this.shadowRoot.getElementById('usernameInput').value
    }
}

customElements.define('template-factories', TemplateFactories)