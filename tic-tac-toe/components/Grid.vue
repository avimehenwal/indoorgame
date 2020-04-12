<template>
  <v-card>
      <v-card-title>Tic Tac Toe</v-card-title>
      <v-card-subtitle>{{ dimension }}</v-card-subtitle>
      <v-card-text>
        <!-- Game Grid -->
        <v-container class="grey lighten-5">
          <v-row no-gutters v-for="row in dimension" :key="row">
            <v-col v-for="col in dimension" :key="col" cols="12" sm="4" >
              <v-card class="pa-2" outlined tile >
                  <v-btn block tile>
                    {{ row }}, {{ col }}
                  </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

      </v-card-text>
      <v-card-actions>
        <v-btn>Player 1/2 Turn</v-btn>
      </v-card-actions>
  </v-card>
</template>

<script>

export default {
  props: {
    dimension: {
      type: Number,
      default: 3
    },
  },
  data: () => ({
    rows: 3,
    columns: 3
  })
}
</script>
