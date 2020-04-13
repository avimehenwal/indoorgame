<template>
  <v-container>
  <v-alert type="success" v-if="concludeGame">
    Player {{ players[getActivePlayerIndex].name }} WON! {{getActivePlayerIndex}}
  </v-alert>
  <v-card color="primary lighten-5">
    <v-card-title>
      Player {{ getActivePlayerIndex }} Turn
    </v-card-title>
    <v-card-subtitle>Moves {{ movesMade }}
      <v-icon>{{players[0].symbol}}</v-icon>
      Player1
      {{ players[0].moves }}
      <v-icon>{{players[1].symbol}}</v-icon>
      Player2
      {{ players[1].moves }}
    </v-card-subtitle>
    <v-card-text>
      <!-- Game Grid -->
      <v-container>
        <v-row no-gutters>
          <v-col v-for="(col, index) in 9" :key="col" cols="12" sm="4" >
            <v-card outlined>
                <v-btn block tile text @click="setCell(index)" :disabled="isCellDisabled(index)">
                  <v-icon> {{ cells[index].symbol }} </v-icon>
                </v-btn>
            </v-card>
          </v-col>
        </v-row>

      </v-container>

    </v-card-text>
    <v-card-actions>
      <v-btn x-large color="error" @click="resetGame()">Reset game</v-btn>
    </v-card-actions>
  </v-card>
  </v-container>
</template>

<script>
import { Game } from '@/game.js'

export default {
  props: {
    dimension: {
      type: Number,
      default: 3
    },
  },
  mixins:[Game],
  data: () => ({
    tic: 'mdi-multiplication',
    tac: 'mdi-null',
    count: 0
  })
}
</script>
