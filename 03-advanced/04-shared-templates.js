import { LitElement, html, css } from 'lit-element'

const sharedTemplate = html `
    <div>Shared Template Content</div>
`

class sharedTemplateA extends LitElement {
    static get styles() {
        return css `
            .container {
                border: 2px solid black;
            }
        `
    }

    render() {
        return html `
            <div className="container">
                Element A
                ${sharedTemplate}
            </div>
        `
    }
}

customElements.define('shared-template-a', sharedTemplateA)

class sharedTemplateB extends LitElement {
    static get styles() {
        return css `
            .container {
                border: 2px dotted black;
            }
        `
    }

    render() {
        return html `
            <div class="container">
                Element B
                ${sharedTemplate}
            </div>
        `
    }
}

customElements.define('shared-template-b', sharedTemplateB)

class SharedTemplates extends LitElement {
    static get styles() {
        return css `
            shared-template-a,
            element-b {
                display: block;
                margin: 8px 0;
            }
        `
    }

    render() {
        return html `
            <shared-template-a></shared-template-a>
            <shared-template-b></shared-template-b>
        `
    }
}

customElements.define('shared-templates', SharedTemplates)