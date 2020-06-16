import { LitElement, html } from 'lit-element'

class ReflectingAttributes extends LitElement {
    render() {
        return html `
            <style>
                my-button {
                    margin: 6px;
                    padding: 6px;
                    text-align: center;
                    cursor: pointer;
                }

                my-button[disabled] {
                    cursor: not-allowed;
                }
            </style>

            <my-button disabled></my-button>
            <my-button></my-button>
        `
    }
}

customElements.define('reflecting-attributes', ReflectingAttributes)

class MyButton extends LitElement {
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                reflect: true
            }
        }
    }

    constructor() {
        super()

        this.disabled = false
    }

    render() {
        return html `
            <style>
                .disabled {
                    border: solid 2px #217FF9;
                }

                .enabled {
                    border: solid 2px #9B35FA;
                }
            </style>

            <div class="${this.disabled ? 'disabled' : 'enabled'}">
                Hello Universe
            </div>
        `
    }
}

customElements.define('my-button', MyButton)