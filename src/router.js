import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TruliaCards from './components/TruliaCards.vue'
import OpenListingCards from './components/OpenListingCards.vue'
import OutDoorProject from './components/OutDoorProject.vue'
import WebSiteCssGrid from './components/WebSiteCssGrid.vue'
import CssGridBasis from './components/CssGridBasis.vue'
import GrammarlySection from './components/GrammarlySection.vue'
import FlexBoxMaster from './components/FlexBoxMaster.vue'

Vue.use(Router)

export default new Router ({
  routes: [

    {
      path: '/',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path: '/trulia-cards',
      name: 'TruliaCards',
      component: TruliaCards
    },
    {
      path: '/css-grid-basis',
      name: 'CssGridBasis',
      component: CssGridBasis
    },
    {
      path: '/openlisting-cards',
      name: 'OpenListingCards',
      component: OpenListingCards
    },
    {
      path: '/outdoor',
      name: 'OutDoorProject',
      component: OutDoorProject
    },
    {
      path: '/website-css-grid',
      name: 'WebSiteCssGrid',
      component: WebSiteCssGrid
    },
    {
      path: '/grammarly-section',
      name: 'GrammarlySection',
      component: GrammarlySection
    },
    {
      path: '/flexbox-master',
      name: 'FlexBoxMaster',
      component: FlexBoxMaster
    }
  ]
})
