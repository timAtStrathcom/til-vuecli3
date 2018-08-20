import Vue from 'vue'
import './assets/scss/app.scss'
import App from './app'
import './widget-setup'

new Vue({
  render: h => h(App),
}).$mount('#app')
