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
import OpenDoorAdviser from './components/OpendoorAdviser.vue'
import AirbnbCards from './components/AirbnbCards.vue'
import ContactOpenDoor from './components/ContactOpenDoor.vue'
import AirbnbHeadSection from './components/AirbnbHeadSection.vue'
import OpenDoorPictureSection from './components/OpenDoorPictureSection.vue'
import ScrollHandlerSections from './components/ScrollHandlerSections.vue'
import SrpOpenDoor from './components/SrpOpenDoor.vue'

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
    },
    {
      path: '/opendoor-adviser',
      name: 'OpenDoorAdviser',
      component: OpenDoorAdviser
    },
    {
      path: '/airbnb-cards',
      name: 'AirbnbCards',
      component: AirbnbCards
    },
    {
      path: '/contact-opendoor',
      name: 'ContactOpenDoor',
      component: ContactOpenDoor
    },
    {
      path: '/airbnb-header-section',
      name: 'AirbnbHeadSection',
      component: AirbnbHeadSection
    },
    {
      path: '/opendoor-pic-section',
      name: 'OpenDoorPictureSection',
      component: OpenDoorPictureSection
    },
    {
      path: '/scroll-handler-section',
      name: 'ScrollHandlerSections',
      component: ScrollHandlerSections
    },
    {
      path: '/srp-open-door',
      name: 'SrpOpenDoor',
      component: SrpOpenDoor
    }
  ]
})
