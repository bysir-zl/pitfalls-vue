import Vue from 'vue'
import Router from 'vue-router'
import DomRerender from '@/components/DomRerender'
import ElSliderInput from '@/components/ElSliderInput'
import ElSliderUnResponsiveModel from '@/components/ElSliderUnResponsiveModel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dom-rerender',
      name: 'DomRerender',
      component: DomRerender
    },{
      path: '/el-slider-input',
      name: 'ElSliderInput',
      component: ElSliderInput
    },{
      path: '/el-slider-unresponsive-model',
      name: 'ElSliderUnResponsiveModel',
      component: ElSliderUnResponsiveModel
    },
  ]
})
