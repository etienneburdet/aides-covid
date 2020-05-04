<template lang="html">
  <div class="map-wrapper">
    <mapbox
      access-token="pk.eyJ1IjoiZXRpZW5uZWJ1cmRldCIsImEiOiJjazlyZzM3MnUwdHV5M2RueDFnbmlmYmdkIn0.Uu3BD8bRWbyRzP1G5FdeJw"
      :map-options="{
        style: 'mapbox://styles/mapbox/light-v10',
        center: [5.3487286616, 46.0997682644],
        zoom: 3,
      }"
      @map-load="onLoad"
    />
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl-vue'

export default {
  components: {
    Mapbox
  },
  props: {
    geoData: Object
  },
  methods: {
    onLoad (map) {
      map.addSource('aides', {
        type: 'geojson',
        data: this.geoData,
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
      })

      map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'aides',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': '#51bbd6',
          'circle-radius': 30
        }
      })

      map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'aides',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12
        }
      })

      map.resize()
    }
  }
}
</script>

<style lang="css" scoped>
.map-wrapper {
  height: 100vh;
}

#map {
  width: 100%;
  height: 100%;
}
</style>
