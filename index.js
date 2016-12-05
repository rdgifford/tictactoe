#!/usr/bin/env node
program = require('commander');

var board = [['#', '#', '#'], ['#', '#', '#'], ['#', '#', '#']]
var printBoard = function() {
  for (var i = 0, l = board.length; i < l; i++) {
    console.log.apply(null, board[i]);
  }
}

//write and read board from file
program.command('tictactoe')
  .action(printBoard());
