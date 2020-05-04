<template>
  <b-container fluid>
    <b-row no-gutters>
      <b-col lg="4">
        <Graph :raw-data="sectorData.aggregations" />
      </b-col>
      <b-col lg="8">
        <Map :geo-data="geoData" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Map from '~/components/Map.vue'
import Graph from '~/components/Graph.vue'

const baseUrl = 'https://eburdet.opendatasoft.com/api/v2/catalog/datasets/no-name/'

export default {
  components: {
    Map,
    Graph
  },
  async asyncData ({ $axios }) {
    const queryGeo = 'exports/geojson'
    const geoData = await $axios.$get(baseUrl + queryGeo)

    const querySector = 'aggregates?select=sum(montant_total) as sum_montant&group_by=libelle_section&sort=-sum_montant&limit=10'
    const sectorData = await $axios.$get(baseUrl + querySector)

    return { geoData, sectorData }
  },
  data () {
    return {
      geoData: {}
    }
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
