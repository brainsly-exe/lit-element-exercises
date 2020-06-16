import { LitElement, html, css } from 'lit-element'

import './01-first-updated'
import './02-updated'
import './03-lifecycle'
import './04-computed-properties'
import './05-queryng-dom'
import './06-light-dom'
import './07-reflecting-attributes'
import './08-dynamic-repeated-templates'
import './09-slotting'

class IntermediateDemos extends LitElement {
    static get properties() {
        return {
            showLifecycleDemo: { type: Boolean }
        }
    }

    constructor() {
        super()

        this.showLifecycleDemo = false
    }

    static get styles() {
        return [
            css `
                :host {
                display: flex;
                flex-direction: column;
                font-family: sans-serif;
                }

                .demo {
                display: block;
                border: 1px solid	#e2e2e2;
                border-radius: 5px;
                padding: 8px;
                margin: 8px 0;
                line-height: 32px;
                }
          `
        ]
    }

    render() {
        return html `
            <div className="demo">
                <first-updated></first-updated>
            </div>
            
            <div className="demo">
                <updated-demo></updated-demo>
            </div>

            <div className="demo">
                <lifecycle-demo></lifecycle-demo>
            </div>

            <div className="demo">
                <computed-properties></computed-properties>
            </div>
            
            <div className="demo">
                <queryng-dom></queryng-dom>
            </div>
            
            <div className="demo">
                <light-dom></light-dom>
            </div>
            
            <div className="demo">
                <reflecting-attributes></reflecting-attributes>
            </div>
            
            <div className="demo">
                <dynamic-repeated-templates></dynamic-repeated-templates>
            </div>
            
            <div className="demo">
                <slotting-demo></slotting-demo>
            </div>

        `
    }
}

customElements.define('intermediate-demos', IntermediateDemos)