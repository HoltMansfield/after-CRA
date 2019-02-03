#!/usr/bin/env node

const rek = require('rekuire')
const program = require('commander')
const { addCoreCommands } = rek('add-core-commands')

// set some meta-data
program
  .version('0.0.1')
  .description('After running create-react-app, continue spinning up your application')

// wire up commands
addCoreCommands(program)

// listen for user input
program.parse(process.argv)
