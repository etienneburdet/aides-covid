<template>
  <div class="container">
    <div>
      <h1 class="title">
        aides-covid
      </h1>
      <h2 class="subtitle">
        Replication of official app on ODS
      </h2>
      <pre>
        {{ geoData }}
      </pre>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
const baseUrL = 'https://eburdet.opendatasoft.com/api/v2/catalog/datasets/no-name/'

export default {
  data () {
    return {
      geoData: 'Salut'
    }
  },
  async asyncData ({ $axios }) {
    const query = 'exports/geojson'
    const geoData = await $axios.$get(baseUrL + query)
    // const geoData = 'Yo'
    return { geoData }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
