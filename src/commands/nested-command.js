'use strict';
const yargs = require('yargs');
exports = yargs.command({
  command: 'network',
  description: 'network command',
  builder: (yargs) => {
    yargs.command({
      command: 'publish',
      description: 'publish network DESC',
      builder: (yargs) => {
        yargs.command({
          command: 'add',
          description: 'Add network publish DESC',
          builder: {
            tag: {
              alias: 't',
              describe: 'VLAN Tag',
              demandOption: true,
              type: 'string',
              // choices: ['host', 'edge'],
            },
          },
          handler: (a) => {
            console.log('handleeeer add  publish network');
          },
        });
        yargs.command({
          command: 'delete',
          description: 'Delete network publish DESC',
          builder: () => {
            console.log('delete network publish builder');
          },
          handler: (a) => {
            console.log('handleeeer delete publish network');
          },
        });
      },
      handler: (argv) => {
        console.log('handleeeer publish network');
      },
    });
    yargs.command({
      command: 'internet',
      description: 'internet network DESC',
      builder: () => {
        console.log('internet network builder');
      },
      handler: (a) => {
        console.log('handleeeer internet network');
      },
    });
  },
  handler: (args) => {
    yargs.showHelp()
  },
});