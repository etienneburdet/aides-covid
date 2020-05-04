<template>
  <b-container fluid>
    <b-row>
      <b-col lg="4">
        <h3 class="text-center">Totales aides versées en France</h3>
        <div class="d-flex justify-content-around border-bottom border-grey py-4">
          <KpiCard :kpi="totals.aggregations[0].total" title="montant" />
          <KpiCard :kpi="totals.aggregations[0].count" title ="nombre d'aides" />
        </div>
        <h5 class="text-center mt-4">Top 10 des aides par secteur</h5>
        <Graph :raw-data="sectorData.aggregations" class="border-bottom border-grey" />
        <h4 class="text-center mt-4"><strong>Informations</strong></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
import KpiCard from '~/components/KpiCard.vue'

const baseUrl = 'https://eburdet.opendatasoft.com/api/v2/catalog/datasets/no-name/'

export default {
  components: {
    Map,
    Graph,
    KpiCard
  },
  async asyncData ({ $axios }) {
    const queryGeo = 'exports/geojson'
    const geoData = await $axios.$get(baseUrl + queryGeo)

    const querySector = 'aggregates?select=sum(montant_total) as sum_montant&group_by=libelle_section&sort=-sum_montant&limit=10'
    const sectorData = await $axios.$get(baseUrl + querySector)

    const queryTotal = 'aggregates?select=count(*) as count, sum(montant_total) as total'
    const totals = await $axios.$get(baseUrl + queryTotal)

    return { geoData, sectorData, totals }
  }
}
</script>

<style>
</style>
