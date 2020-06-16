import { LitElement, html } from 'lit-element'

class QueryngDom extends LitElement {
    static get properties() {
        return {
            users: { type: Array }
        }
    }

    constructor() {
        super()

        this.users = ['Steve']
    }

    get usernameInput() {
        return this.shadowRoot.getElementById('usernameInput')
    }

    get username() {
        return this.usernameInput.value
    }

    render() {
        return html `
            <input id="usernameInput" name="username" />
            <button @click=${() => this._addUsername()}>Add user</button>

            <ul>
                ${this.users.map(user => html `
                    <li>${user}</li>
                `)}
            </ul>
        `
    }

    _addUsername() {
        this.users = [...this.users, this.username]

        this.usernameInput.value = ''
    }
}

customElements.define('queryng-dom', QueryngDom)