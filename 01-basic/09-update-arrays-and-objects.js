import { LitElement, html } from 'lit-element'

class UpdateArraysAndObjects extends LitElement {
    static get properties() {
        return {
            myArray: { type: Array },
            myObject: { type: Object },
        }
    }

    constructor() {
        super()

        this.myObject = { id: 1, text: "foo" }
        this.myArray = [{ id: 1 }, { id: 2 }]
    }

    render() {
        return html `
            <h3>Array items</h3>
            <ul>
                ${this.myArray.map(item => html `
                    <li>${item.id}</li>
                `)}
            </ul>

            <button @click=${this._addArrayItem}>Add array item</button>

            <h3>Object</h3>
            <div>
                <strong>${this.myObject.id}</strong>: ${this.myObject.text}
            </div>

            <button @click=${this._updateObjectId}>Add array item</button>
        `
    }

    _addArrayItem() {
        const newId = Math.round(Math.random() * 100)
        const newItem = { id: newId }
        this.myArray = [
            ...this.myArray,
            newItem
        ]
    }

    _updateObjectId() {
        const newId = Math.round(Math.random() * 100)

        this.myObject = {
            ...this.myObject,
            id: newId
        }
    }
}

customElements.define('update-arrays-and-objects', UpdateArraysAndObjects)