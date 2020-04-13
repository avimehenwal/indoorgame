
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
    matches: 0,
    concludeGame: false,
    winningSets: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 6],
      [0, 4, 8],
      [2, 4, 6]
    ]
  }),
  methods: {
    startGame () {
      this.inProgress = true
    },
    resetGame () {
      this.cells = []
      console.log('reset Game')
      this.movesMade = 0
      this.resetMoves()
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
          wins: 0,
          moves: []
        }
        this.players.push(Player)
      }
      // console.log(this.players)
    },
    resetMoves () {
      // this.players[0].moves = []
      // this.players[1].moves = []
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
      this.cells[index].symbol = this.players[this.getActivePlayerIndex].symbol
      this.players[this.getActivePlayerIndex].moves.push(index)
      // console.log(index, this.players[this.getActivePlayerIndex])
      this.switchPlayer()
      // check winning condition
    },
    isCellDisabled (index) {
      if (this.cells[index].symbol == null) {
        return false
      } else {
        return true
      }
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
    isWinner () {
      console.log(this.players[this.getActivePlayerIndex].moves.length)
      if (this.players[this.getActivePlayerIndex].moves.length > 1) {
        console.log('Enter condition')
        console.log(this.players[this.getActivePlayerIndex].moves.sort())
        for(let i = 0; i < this.winningSets.length; i++) {
          console.log(this.winningSets[i].sort())
          if (this.players[this.getActivePlayerIndex].moves.sort() == this.winningSets[i].sort()) {
            return true
          }
          else {
            return false
          }
        }
      }
    },
    activePlayerMovesCount () {
      return this.players[this.getActivePlayerIndex].moves.length
    }
  }
}

// players[getActivePlayerIndex].name
// players[getActivePlayerIndex].symbol