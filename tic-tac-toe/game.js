
/*
  false = Player1
  true = Player2
*/

export const Game = {
  created () {
    this.initPlayer()
    this.assignPLayerSymbols()
    this.resetGame()
  },
  data: () => ({
    inProgress: false, // enable controls
    winner: null,
    activePlayer: false, // 1
    movesMade: 0,
    players: [],
    matches: 0,
    concludeGame: false,
    cells: {},
    winningSets: [
      '012',
      '345',
      '678',
      '036',
      '147',
      '256',
      '246',
      '048',
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
      this.concludeGame = false
      this.players[0].moves = []
      this.players[1].moves = []
      this.cells = {
        11: { symbol: null },
        12: { symbol: null },
        13: { symbol: null },
        21: { symbol: null },
        22: { symbol: null },
        23: { symbol: null },
        31: { symbol: null },
        32: { symbol: null },
        33: { symbol: null },
      }
      // let cell_entry = {
      //   symbol: null,
      //   isHighlighted: null
      // }
      // for(let i=1; i <= this.row; i++) {
      //   for(let j=1; j <= this.col; j++) {
      //     // console.log(i,j)
      //     // console.log(this.cells)
      //     this.cells[this.getID(i, j)] = cell_entry
      //   }
      // }
      console.log(this.cells)
    },
    initPlayer () {
      for(var i=0; i<2; i++) {
        let Player = {
          name: null,
          symbol: null,
          wins: 0,
          moves: [],
          color: null
        }
        this.players.push(Player)
      }
      // console.log(this.players)
    },
    assignPLayerSymbols () {
      this.players[0].symbol = this.tic
      this.players[1].symbol = this.tac
      this.players[0].color = this.p1color
      this.players[1].color = this.p2color
    },
    switchPlayer () {
      this.activePlayer = !this.activePlayer
      this.movesMade++
    },
    setCell (index) {
      this.cells[index].symbol = this.players[this.getActivePlayerIndex].symbol
      this.players[this.getActivePlayerIndex].moves.push(index)
      // console.log(index, this.players[this.getActivePlayerIndex])
      // check winning condition
      console.log('SET', index, this.cells[index])
      this.isWinner()
      this.switchPlayer()
    },
    isCellDisabled (index) {
      if (this.cells[index].symbol == null) {
        return false
      } else {
        return true
      }
    },
    isWinner () {
      let moves = this.players[this.getActivePlayerIndex].moves.sort().join('')
      if (moves.length > 2) {
        console.log('Enter condition')
        for(let i = 0; i < this.winningSets.length; i++) {
          console.log('player', this.getActivePlayerIndex, 'test winningset', this.winningSets[i], '===', moves)
          if (moves.includes(this.winningSets[i])) {
            return this.concludeGame = true
          }
        }
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
    activePlayerMovesCount () {
      return this.players[this.getActivePlayerIndex].moves.length
    }
  }
}

// players[getActivePlayerIndex].name
// players[getActivePlayerIndex].symbol