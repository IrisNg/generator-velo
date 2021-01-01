<template<% if(pug) { %> lang="pug"<% } %>>
  <% if(pug) { %>.<%= nameLowerKebab %>
    hello-world(msg="<%= nameReadable %> page!")<% } else { %><div class="<%= nameLowerKebab %>">
    <hello-world msg="<%= nameReadable %> page!"></hello-world>
  </div><% } %>
</template>

<script>
// Do import this view into src/router/index.js

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: '<%= nameLowerKebab %>',
  components: {
    'hello-world': HelloWorld
  }
};
</script>

<style lang="scss">
.<%= nameLowerKebab %> {
}
</style>
