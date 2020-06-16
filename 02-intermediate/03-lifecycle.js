import { LitElement, html } from 'lit-element'

class LifeCycle extends LitElement {
    static get properties() {
        return {
            myArr: { type: Array }
        }
    }

    constructor() {
        super()

        this.myArr = ['foo', 'bar']
    }

    connectedCallback() {
        super.connectedCallback()
        console.log('connected')
        console.log(this.shadowRoot.querySelector('ul'))
    }

    shouldUpdate() {
        console.log('should update')
        console.log(this.shadowRoot.querySelector('ul'))
        return true
    }

    firstUpdated() {
        console.log('first updated!')
        console.log(this.shadowRoot.querySelector('ul'))
    }

    updated(changedProps) {
        super.updated(changedProps)
        console.log('updated')
        console.log(this.shadowRoot.querySelector('ul'))
    }

    disconnectedCallback() {
        console.log('disconnected')
        console.log(this.shadowRoot.querySelector('ul'))
    }

    _addItem() {
        this.myArr = [...this.myArr, 'baz']
    }

    render() {
        let { myArr } = this

        return html `
            <p>Open your console to see when lifecycle methods ocurr</p>

            <button @click=${this._addItem}>Add item</button>

            <ul>
                ${myArr.map(item => html `
                    <li>${item}</li>
                `)}
            </ul>
        `
    }
}

customElements.define('lifecycle-demo', LifeCycle)