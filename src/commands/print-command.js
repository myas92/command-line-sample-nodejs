'use strict';
const yargs = require('yargs');
const {print} = require('../lib/print');

exports = yargs.command({
  command: 'print',
  describe: 'print port',
  builder: {
    port: {
      alias: 'p', // alias name for command
      describe: '3000/5000',
      demandOption: true, // type is optinal or is required??
      type: 'number', // type : number, string, boolean
      choices: [3000, 5000], // Limit valid values for key to a predefined set of choices, given as an array or as an individual value.
    },
    name: {
      alias: 'n',
      describe: 'server name',
      demandOption: false,
      type: 'string',
      requiresArg: 'false',
    },
  },
  handler: (argv) => {
    print(argv);
  },
}).strictCommands(); // https://yargs.js.org/docs/#demandCommand show hlep if command is not exist
