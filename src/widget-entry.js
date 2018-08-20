import Vue from 'vue'
import '@/assets/scss/app.scss'
import TradeForm from './components/trade-in-leads'
import './widget-setup'

(function smiInitTradeForm(hostElementId = '#smi-trade-in') {
  new Vue({
    render: h => h(TradeForm),
  }).$mount(hostElementId)
}())
