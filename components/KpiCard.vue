<template lang="html">
  <div class="text-center">
    <p>{{ title }}</p>
    <h5><strong>{{ kpi }}</strong></h5>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    kpi: Number
  }
}
</script>
