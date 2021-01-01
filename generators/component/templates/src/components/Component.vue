<template<% if(pug) { %> lang="pug"<% } %>>
  <% if(pug) { %>.<%= nameLowerKebab %><% } else { %><div class="<%= nameLowerKebab %>">
  </div><% } %>
</template>

<script>
export default {
  name: '<%= nameLowerKebab %>'
};
</script>

<style lang="scss">
.<%= nameLowerKebab %> {

}
</style>
