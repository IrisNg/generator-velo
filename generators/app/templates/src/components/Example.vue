<template>
  <div class="example">
    <div class="container">
    <ul>
      <li>
        <p>Test 1: images used in html and scss are copied over after webpack compilation. Example src path here. Jpg images will be compressed in production.</p>
        <img src="../assets/images/vue-banner.jpg" />
        <div class="example__bg">Div with css background</div>
      </li>
      <li>
        <p>Test 2: automatic scss helpers (_helpers.scss, _mixins.scss, _variables.scss) import into every .vue file. If text is yellow, _variables.scss is being auto-imported.</p>
        <p>More helpers can be added via vue.config.js 'additionalData' array.</p>
      </li>
      <li>
        <p>Test 3: Icomoon icons. _icons.scss imported in App.vue. If '>' is displayed, icomoon icons are working as expected.</p>
        <i class="icon icon-angle-right" />
      </li>
      <li>
        <p>Test 4: Dummy API JSON files are copied over during development. Use http client like Axios to make requests. If an API message in blue is displayed below, it is coming from apis/fetch.json.</p>
        <h3 class="example__api-message">This is an API message rerouted from POST request to GET request -> {{ apiMessage }}</h3>
      </li>
    </ul>
    <p>
    </p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      apiMessage: ''
    }
  },
  mounted () {
    this.fetchMessage()
  },
  methods: {
    async fetchMessage () {
      const response = await axios.post('./apis/fetch.json', { req: 'request params' })
      this.apiMessage = response.data.message
    }
  }
}
</script>

<style scoped lang="scss">


p {
  .icon {
    font-size: calc-em(40px);
    color: $red;
  }

  &:nth-of-type(2) {
  color: $yellow;
}
}

img {
  max-width: 800px;
  object-fit: cover;
}

.example {

  &__bg {
    height: 300px;
    width: 800px;
    margin: 0 auto;
    background: url("../assets/images/vue-css-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    color: white;
    font-size: calc-em(28px);
  }
  &__api-message {
    color: $blue;
  }
}
</style>
