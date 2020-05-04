<template lang="html">
  <div class="p-3">
    <apexchart width="100%" height="390px" :options="options" :series="series" />
  </div>
</template>

<script>

export default {
  props: { rawData: Array },
  data () {
    return {
      options: {
        chart: {
          type: 'bar',
          toolbar: {
            show: false
          }
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: Array.from(this.rawData, record => record.libelle_section),
          label: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
            columnWidth: '80%',
            barHeight: '80%'
          }
        },
        theme: {
          mode: 'light',
          palette: 'palette1'
        }
      },
      series: [{
        name: 'cumul-aides',
        data: Array.from(this.rawData, record => record.sum_montant / 1000000)
      }]
    }
  }
}
</script>
