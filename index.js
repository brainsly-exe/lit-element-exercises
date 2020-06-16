import { LitElement, html, css } from 'lit-element'

import { Router } from '@vaadin/router'
import '@vaadin/vaadin-tabs'

import './01-basic/basic-demos'
import './02-intermediate/intermediate-demos'
import './03-advanced/advanced-demos'

class OpenWcDemo extends LitElement {
    static get styles() {
        return [
            css`
                :host {
                    display: block;
                }            
      `
        ]
    }

    static get properties() {
        return {
            activeTab: { type: String},
            tabs: { type: Array},
        }
    }

    constructor() {
        super()

        this.activeTab = location.pathname === '/' ? 'basic' : location.pathname.replace('/', '')
        this.tabs = ['basic', 'intermediate', 'advanced']
    }

    firstUpdated() {
        const router = new Router(this.shadowRoot.getElementById('outlet'))
        router.setRoutes([
            {path: '/',     component: 'basic-demos'},
            {path: '/basic',  component: 'basic-demos'},
            {path: '/intermediate',  component: 'intermediate-demos'},
            {path: '/advanced',  component: 'advanced-demos'},
            {path: '(.*)', redirect: '/', action: () => {
              this.activeTab = 'basic';
              }
            }
          ]);
    }

    switchRoute(route) {
        this.activeTab = route
        Router.go(`/${route}`)
    }

    render() {
        return html `
            <vaadin-tabs  selected=${this.tabs.indexOf(this.activeTab)}>
                <vaadin-tab @click=${() => this.switchRoute('basic')}>Basic</vaadin-tab>
                <vaadin-tab @click=${() => this.switchRoute('intermediate')}>Intermediate</vaadin-tab>
                <vaadin-tab @click=${() => this.switchRoute('advanced')}>Advanced</vaadin-tab>
            </vaadin-tabs>

            <div id="outlet"></div>
        `
    }
}

customElements.define('open-wc-demo', OpenWcDemo)