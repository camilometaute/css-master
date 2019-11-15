import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TruliaCards from './components/TruliaCards.vue'
import OpenListingCards from './components/OpenListingCards.vue'
import OutDoorProject from './components/OutDoorProject.vue'

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
      path: '/openlisting-cards',
      name: 'OpenListingCards',
      component: OpenListingCards
    },
    {
      path: '/outdoor',
      name: 'OutDoorProject',
      component: OutDoorProject
    }
  ]
})
