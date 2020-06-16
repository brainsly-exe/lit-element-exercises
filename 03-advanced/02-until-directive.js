import { LitElement, html } from 'lit-element'
import { until } from 'lit-html/directives/until'

class UntilDirective extends LitElement {
    static get properties() {
        return {
            messageRequest: { type: String }
        }
    }

    constructor() {
        super()

        this._fetchMessage()
    }

    render() {
        return html `
            <div>
                ${until(this.messageRequest, html `loading...`)}

                <button @click="${() => this._fetchMessage}">
                    fetch message
                </button>
            </div>
        `
    }

    _fetchMessage() {
        this.messageRequest = new Promise((resolve) => {
            setTimeout(() => resolve('Hello World'), 2000)
        })
    }
}

customElements.define('until-directive', UntilDirective)