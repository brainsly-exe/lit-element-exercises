import { LitElement, html } from 'lit-element'

class FetchingData extends LitElement {
    static get properties() {
        return {
            response: { type: Array }
        }
    }

    constructor() {
        super()

        this.response = []
    }

    firstUpdated() {
        fetch('https://servicodados.ibge.gov.br/api/v2/censos/nomes')
            .then((res) => res.json())
            .then((res) => {
                this.response = res
            })
    }

    render() {
        const { response } = this
        return html `
            <ul>
                ${response.map(item => html `
                    <li>${item.nome}</li>
                `)}
            </ul>
        `
    }
}

customElements.define('fetching-data', FetchingData)