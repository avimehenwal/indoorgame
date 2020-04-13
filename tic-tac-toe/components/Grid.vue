<template>
  <v-container height="90vh">
  <v-alert type="success" v-if="concludeGame">
    Player {{getActivePlayerIndex}} {{ players[getActivePlayerIndex].name }} WON!
  </v-alert>
  <v-card color="primary lighten-5" max-height="800">
    <v-container class="display-1 text-center" color="blue">
      Player {{ getActivePlayerIndex }}'s Turn
    </v-container>
    <v-container class="text-center">
      <v-icon x-large :color="players[0].color">{{players[0].symbol}}</v-icon>
      Player 1
      <v-icon x-large :color="players[1].color">{{players[1].symbol}}</v-icon>
      Player 2
      <!-- {{ players[1]}} -->
      <v-chip color="yellow"> <strong> {{ movesMade }} </strong></v-chip> Moves
    </v-container>
    <v-card-text>

      <!-- Game Grid -->
      {{ this.$vuetify.breakpoint.name }} {{getHeight}}
      <v-responsive fluid>
        <v-row v-for="j in row" :key="j" justify="center" align="center">
          <v-col v-for="i in col" :key="i">
            <v-card
              :id="getID(i, j)"
              :height="getHeight" outlined hover
              :disabled="concludeGame"
              :color="cells[getID(i, j)].bg"
              flat
            >
              <v-btn
                height="100%"
                width="100%"
                class="text-center"
                text
                @click="setCell(getID(i, j))"
              >
                <v-icon x-large :color="cells[getID(i, j)].color"> {{ cells[getID(i, j)].symbol }} </v-icon>
                <!-- {{ getID(i, j) }}
                {{ cells[getID(i, j)] }} -->
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-responsive>

      {{ clicked }}
    </v-card-text>
    <v-card-actions>
      <v-btn x-large color="error" @click="resetGame()">Reset game</v-btn>
    </v-card-actions>
  </v-card>
  </v-container>
</template>

<script>
import { Game } from '@/game.js'
// import Cell from '@/components/cell.vue'

export default {
  props: {
    dimension: {
      type: Number,
      default: 3
    },
  },
  mixins:[Game],
  components: {
    // Cell
  },
  data: () => ({
    tic: 'mdi-moon-full',
    tac: 'mdi-close-thick',
    p1color: 'green',
    p2color: 'red',
    clicked: null,
    row: 3,
    col: 3,
    resolution: {
      xs: 80,
      sm: 100,
      md: 100,
      lg: 100
    }
  }),
  computed: {
    getHeight () {
      return this.resolution[this.$vuetify.breakpoint.name]
    }
  },
  methods: {
    increment (id) {
      this.clicked = id
    },
    getID (i, j) {
      return String(j) + String(i)
    }
  }

}
</script>
