
/*
  false = Player1
  true = Player2
*/

export const Game = {
  created () {
    this.resetGame()
    this.initPlayer()
    this.assignPLayerSymbols()
  },
  data: () => ({
    inProgress: false, // enable controls
    winner: null,
    activePlayer: false, // 1
    movesMade: 0,
    cells: [],
    players: [],
    matches: 0
  }),
  methods: {
    startGame () {
      this.inProgress = true
    },
    resetGame () {
      this.cells = []
      console.log('reset Game')
      this.movesMade = 0
      for(let i=0; i<9; i++) {
        let cell = {}
        this.cells.push(cell)
        this.cells[i].id = i
        this.cells[i].symbol = null
        this.cells[i].isHighlighted = null
      }
      // console.log(this.cells)
    },
    initPlayer () {
      for(var i=0; i<2; i++) {
        let Player = {
          name: null,
          symbol: null,
          wins: 0
        }
        this.players.push(Player)
      }
      // console.log(this.players)
    },
    assignPLayerSymbols () {
      this.players[0].symbol = this.tic
      this.players[1].symbol = this.tac
    },
    switchPlayer () {
      this.activePlayer = !this.activePlayer
      this.movesMade++
    },
    setCell (index) {
      console.log(index, this.players[this.getActivePlayerIndex].symbol)
      this.cells[index].symbol = this.players[this.getActivePlayerIndex].symbol
      this.switchPlayer()
    }
  },
  computed: {
    getActivePlayerIndex () {
      if (this.activePlayer) {
        return 1
      } else {
        return 0
      }
    },
    isCellDisabled (index) {
      if (this.cells[index].symbol == null) {
        return false
      } else {
        return true
      }
    }
  }
}

// players[getActivePlayerIndex].name
// players[getActivePlayerIndex].symbol