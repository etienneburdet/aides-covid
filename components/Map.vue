<template lang="html">
  <div class="bg-primary">
    <p>Hello Map</p>
  </div>
</template>

<script>
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
    return { geoData }
  }
}
</script>

<style lang="css" scoped>
</style>
