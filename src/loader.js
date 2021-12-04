'use strict';
const yargs = require('yargs');
yargs.alias('h', 'help');
require('./commands/print-command');
require('./commands/nested-command');

exports = yargs.parse();
