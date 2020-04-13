<template>
  <v-card>
    <v-card-title>
      Player {{ getActivePlayerIndex }} Turn {{ isWinner }} {{ activePlayerMovesCount}}
    </v-card-title>
    <v-card-subtitle>Moves {{ movesMade }} </v-card-subtitle>
    <v-card-subtitle>Player1 {{ players[0].moves }}</v-card-subtitle>
    <v-card-subtitle>Player2 {{ players[1].moves }}</v-card-subtitle>

    <v-card-text>
      <!-- Game Grid -->
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col v-for="(col, index) in 9" :key="col" cols="12" sm="4" >
            <v-card class="pa-2" outlined tile >
                <v-btn block tile text @click="setCell(index)" :disabled="isCellDisabled(index)">
                  <v-icon>
                    {{ cells[index].symbol }}
                  </v-icon>
                </v-btn>
                {{ cells[index] }}
            </v-card>
          </v-col>
        </v-row>
      </v-container>

    </v-card-text>
    <v-card-actions>
      <v-btn color="error" @click="resetGame()">Reset game</v-btn>
      <v-btn color="success" @click="switchPlayer()">done</v-btn>
    </v-card-actions>
    {{ players[0] }}<br>
    {{ players[1] }}<br>
    <v-btn :disabled="true" color="success" @click="count++">{{ count }}</v-btn>
  </v-card>
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
