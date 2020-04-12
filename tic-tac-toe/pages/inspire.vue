<template>
  <Grid :dimension="dimension" />
</template>

<script>
import Grid from '@/components/Grid.vue'
import Game from '@/game.js'

let activeGame = new Game()

export default {
  components: {
    Grid
  },
  data: () => ({
    dimension: 3,
    activeGame: activeGame
  })
}
</script>
