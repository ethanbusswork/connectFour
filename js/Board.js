// const {Space} = require('./Space');

class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

    createSpaces() {
      let spacesArray = [];

      for( var x = 0; x < this.columns; x++) {
        let rowArray = [];

        for ( var y = 0; y < this.rows; y++) {
          let space = new Space(x, y);
          rowArray.push(space);
        }
        spacesArray.push(rowArray);
      }
      return spacesArray;
    }

    drawHTMLBoard() {
      for(let column of this.spaces) {
        for(let space of column) {
          space.drawSVGSpace();
        }
      }
    }


}

// var board = new Board();
//
// board.spaces.map(space => console.log(space));
