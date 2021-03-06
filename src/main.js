import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'mint-ui/lib/style.css'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
