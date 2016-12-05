#!/usr/bin/env node
const program = require('commander');
const path = require('path');
const fs = require('fs');

var board = [
  ['#', '#', '#'],
  ['#', '#', '#'],
  ['#', '#', '#']
]

var printBoard = function() {
  for (var i = 0, l = board.length; i < l; i++) {
    console.log.apply(null, board[i]);
  }
}

// return current board, creating board file if needed
var readBoardFile = function() {
  var boardFilePath = path.join(__dirname, 'board.json')
  // if a file does not already exist
  if(!fs.existsSync(boardFilePath)){
    // create file
    fs.openSync(boardFilePath, 'w');
    console.log('new game started');
    return board;
  } else {
    return fs.readFileSync(boardFilePath);
  }
}

var writeBoardFile = function() {

}

program.command('tictactoe')
  .action();

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if(chunk) {
    console.log('typing', chunk);
  }
})
