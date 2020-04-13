<template>
  <v-card outlined hover height="100">
      <v-btn block tile text @click="setCell(index)" :disabled="isCellDisabled(index)">
        <v-icon large color="players[getActivePlayerIndex].color"> {{ cells[index].symbol }} </v-icon>
      </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'Cell'
}
</script>
