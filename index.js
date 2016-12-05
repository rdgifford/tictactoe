#!/usr/bin/env node
program = require('commander');

program.command('tictactoe')
  .action(console.log('tictactoe'));
