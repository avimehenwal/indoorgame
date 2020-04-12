<template>
  <v-card>
    <v-card-title>Tic Tac Toe</v-card-title>
    {{ num }}
  </v-card>
</template>

<script>

export default {
  props: {
    num: {
      type: Number,
      default: 9
    },
  }
}
</script>
