import { LitElement, html, css } from 'lit-element'

import './01-basic-setup'
import './02-manage-properties'
import './03-property-changes'
import './04-properties-and-attributes'
import './05-passing-properties'
import './06-handle-events'
import './07-conditional-rendering'
import './08-repeated-templates'
import './09-update-arrays-and-objects'
import './10-render-styles'
import './11-fetching-data'
import './12-firing-events'

class BasicDemos extends LitElement {
    static get styles() {
        return [
            css`
                :host {
                  display: flex;
                  flex-direction: column;
                  font-family: sans-serif;
                }


                .demo {
                  display: block;
                  border: 1px solid #e2e2e2;
                  border-radius: 5px;
                  padding: 8px;
                  margin: 20px;
                  line-height: 32px;
                }
            `
        ]
    }

    render() {
        return html `
            
                <div className="demo">
                   <basic-setup></basic-setup>
                </div>

                <div className="demo">
                   <manage-properties></manage-properties>
                </div>

                <div className="demo">
                   <property-changes></property-changes>
                </div>

                <div className="demo">
                   <properties-and-attributes></properties-and-attributes>
                </div>

                <div className="demo">
                   <author-profile></author-profile>
                </div>

                <div className="demo">
                   <handle-events></handle-events>
                </div>

                <div className="demo">
                   <conditional-rendering></conditional-rendering>
                </div>

                <div className="demo">
                   <repeated-templates></repeated-templates>
                </div>

                <div className="demo">
                   <update-arrays-and-objects></update-arrays-and-objects>
                </div>

                <div className="demo">
                   <render-styles></render-styles>
                </div>

                <div className="demo">
                   <fetching-data></fetching-data>
                </div>
                
                <div className="demo">
                   <fire-events-parent></fire-events-parent>
                </div>
        `
    }
}

customElements.define('basic-demos', BasicDemos)