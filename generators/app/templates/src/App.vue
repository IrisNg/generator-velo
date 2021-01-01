<template<% if(pug) { %> lang="pug"<% } %>>
  <div id="app"><% if(router) { %>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <% } else { %>
    <hello-world msg="Welcome to Your Vue.js Single Page App" />
    <% } %><example></example>
  </div>
</template>

<script>
import Example from '@/components/Example.vue';<% if(!router) { %>
import HelloWorld from '@/components/HelloWorld.vue'<% } %>

export default {
  components: {
    'example': Example,<% if(!router) { %>
    'hello-world': HelloWorld,
  <% } %>}
}
</script>

<style lang="scss">
/* Global styling goes here (inside App.vue style tag) */
/* _helpers.scss, _mixins.scss, _variables.scss are auto imported into every .vue file */
/* Replace the scss below with your global styling */

@font-face {
  font-family: "Hind";
  src: url("./assets/fonts/Hind-Regular.ttf");
}

@import "./assets/styles/_icons.scss";

#app {
  font-family: "Hind", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  max-width: 960px;
  padding: 30px;
  margin: 0 auto;
}
</style>
