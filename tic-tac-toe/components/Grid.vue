<template>
  <v-card>
      <v-card-title color="primary">
        Player <span v-if="player">  [2] </span> <span v-else> [1] </span> Turn
      </v-card-title>
      <v-card-subtitle>{{ dimension }} {{ selected }} </v-card-subtitle>
      <v-card-text>
        <!-- Game Grid -->
        <v-container class="grey lighten-5">
          <v-row no-gutters v-for="row in dimension" :key="row">
            <v-col v-for="col in dimension" :key="col" cols="12" sm="4" >
              <v-card class="pa-2" outlined tile >
                  <v-btn block tile text @click="toggleValue(row, col)">
                    <div v-if="data[row-1][col-1]">
                      <v-icon large> {{ tic }} </v-icon>
                    </div>
                    <div v-else-if="data[row-1][col-1] == null">
                    </div>
                    <div v-else>
                      <v-icon large> {{ tac }} </v-icon>
                    </div>
                  </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

      </v-card-text>
      <v-card-actions>
        <v-btn color="error" @click="resetData">Reset game</v-btn>
        <v-btn color="success" @click="player = !player">done</v-btn>
      </v-card-actions>
  {{ data }}
  <v-btn @click="increment"> {{ count }} ADD+ </v-btn>
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
    columns: 3,
    count: 0,
    selected: null,
    data: null,
    tic: 'mdi-multiplication',
    tac: 'mdi-null',
    player: false
  }),
  methods: {
    resetData () {
      this.data = []
      for(let i=0; i<this.dimension; i++) {
        let row = []
        for(let i=0; i<this.dimension; i++) {
          row.push(null)
        }
        this.data.push(row)
      }
    },
    toggleValue (row, col) {
      row = row -1
      col = col -1
      this.data[row][col] = !this.data[row][col]
      this.selected = this.data[row][col]
    },
    increment () {
      this.count++
    }

  },
  created () {
    this.resetData()
  },
  computed: {
    getValue (row, col) {
      // Cannot read property 'NaN' of undefined
      return this.data[row-1][col-1]
    }
  }
}
</script>
