<template>
  <div class="home">
    <hello-world msg="Welcome to Your Vue.js Single Page App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    'hello-world': HelloWorld
  }
}
</script>
