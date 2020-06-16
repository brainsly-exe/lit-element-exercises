import { LitElement, html, css } from 'lit-element'

import './01-property-setter-observer'
import './02-until-directive'
import './03-template-wrapping'
import './04-shared-templates'
import './05-shared-styles'
import './06-external-template'
import './07-template-factories'
import './08-should-update'

class AdvancedDemos extends LitElement {
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
                <property-setter-observer></property-setter-observer>
            </div>
            
            <div className="demo">
                <until-directive></until-directive>
            </div>
            
            <div className="demo">
                <template-wrapping></template-wrapping>
            </div>
            
            <div className="demo">
                <shared-templates></shared-templates>
            </div>
            
            <div className="demo">
                <shared-styles></shared-styles>
            </div>
            
            <div className="demo">
                <external-template></external-template>
            </div>
            
            <div className="demo">
                <template-factories></template-factories>
            </div>
            
            <div className="demo">
                <should-update></should-update>
            </div>
        `
    }
}

customElements.define('advanced-demos', AdvancedDemos)