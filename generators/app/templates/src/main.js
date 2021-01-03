import Vue from 'vue'
import App from './App.vue'<% if (router) { %>
import router from './router'<% } %><% if (vuex) { %>
import store from './store'<% } %>

Vue.config.productionTip = false

new Vue({<% if (router) { %>
  router,<% } %><% if (vuex) { %>
  store,<% } %>
  render: h => h(App)
}).$mount('#app')
