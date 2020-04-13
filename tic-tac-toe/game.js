
/*
  false = Player1
  true = Player2
*/
var permutations = require('permutation');

export const Game = {
  created () {
    this.initPlayer()
    this.assignPLayerSymbols()
    this.resetGame(),
    this.winningSetGenerator()
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
    permutation: permutations('abc'),
    winningPermutations: [],
    winningCase: [
      '111213',
      '212223',
      '313233',
      '112131',
      '122232',
      '132333',
      '112233',
      '132231'
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
      if (!this.isCellDisabled(index)) {
        this.cells[index].symbol = this.players[this.getActivePlayerIndex].symbol
        this.cells[index].color = this.players[this.getActivePlayerIndex].color
        this.players[this.getActivePlayerIndex].moves.push(index)
        // console.log(index, this.players[this.getActivePlayerIndex])
        // check winning condition
        console.log('SET', index, this.cells[index])
        this.isWinner()
        this.switchPlayer()
      }
    },
    isCellDisabled (index) {
      if (this.cells[index].symbol == null) {
        return false
      } else {
        return true
      }
    },
    isWinner () {
      let moves = this.players[this.getActivePlayerIndex].moves.join('')
      console.log('moves', moves)
      if (moves.length > 2) {
        console.log('Enter condition')
        for(let i = 0; i < this.winningPermutations.length; i++) {
          let item = this.winningPermutations[i]
          console.log('player', this.getActivePlayerIndex, 'test winningset', item, '===', moves)
          if (moves.includes(item)) {
            return this.concludeGame = true
          }
        }
      }
    },
    winningSetGenerator () {
      for(let i=0; i < this.winningCase.length; i++) {
        let item = this.winningCase[i]
        let a = item.substr(0,2)
        let b = item.substr(2,2)
        let c = item.substr(4,2)
        // console.log('SUBSTR',item,'=>', a,b,c)
        let canonicalPermutations = permutations('abc')
        // console.log('CAN', canonicalPermutations)
        const regex = /a/gi
        for(let j=0; j<canonicalPermutations.length; j++) {
          let item = canonicalPermutations[j]
          var newitem = item.replace(/a/, a).replace(/b/, b).replace(/c/, c)
          // console.log("REPLACE", item, newitem)
          this.winningPermutations.push(newitem)
        }
      }
      console.log(this.winningPermutations)
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