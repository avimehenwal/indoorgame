class GridCell {
  constructor() {
      this.value = null
      this.isHighlighted = false
  }
}

export default class Game {
  constructor() {
    this.inProgress = true
    this.winner = null
    this.currentTurn = Game.O
    this.currentTurn = false
    this.movesMade = 0
    this.squares = new Array(9).fill().map( s => new GridCell() )
  }
}

// Avoid Hoisting
// Game.O = '0'
// Game.X = 'x'
