import Vue from 'vue'
import Router from 'vue-router'
import FormWrapper from './components/FormWrapper.vue'
import Help from './components/Help.vue'
import Grid from './components/Grid.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FormWrapper',
      component: FormWrapper
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    }
  ]
})