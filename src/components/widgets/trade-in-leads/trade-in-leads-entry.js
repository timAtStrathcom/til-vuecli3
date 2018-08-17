import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/assets/scss/app.scss'
import TradeForm from './trade-in-leads'

Vue.component('font-awesome-icon', FontAwesomeIcon);

(function smiInitTradeForm(hostElementId = '#smi-trade-in') {
  new Vue({
    render: h => h(TradeForm),
  }).$mount(hostElementId)
}())
