<template>
  <Grid :dimension="dimension" />
</template>

<script>
import Grid from '@/components/Grid.vue'

export default {
  components: {
    Grid
  },
  data: () => ({
    dimension: 3,
  })
}
</script>
