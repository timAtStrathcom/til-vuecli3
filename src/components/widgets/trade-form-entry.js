import Vue from 'vue';
import TradeForm from './trade-form.vue';

(function smiInitTradeForm(hostElementId = '#smi-trade-in') {
  new Vue({
    render: h => h(TradeForm),
  }).mount(hostElementId);
}());
