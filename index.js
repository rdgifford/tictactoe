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

var checkBoardFile = function() {
  var boardFilePath = path.join(__dirname, 'board.json')
  // if a file does not already exist
  if(!fs.existsSync(boardFilePath)){
    // create file
    fs.openSync(boardFilePath, 'w');
    console.log('new game started');
  }
}

program.command('tictactoe')
  .action(checkBoardFile());
