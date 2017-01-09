#!/usr/bin/env node

var loveit = require('../src/index.js'),
    program = require('commander'),
    pkg     = require('../package.json');

program
  .version(pkg.version)
  .description(pkg.description)
  .option('-a, --af', "Love mozão")
  .option('-s, --si', "Love mozona");

program.parse(process.argv);

if (program.af) {
  loveit.boy();
} else if (program.si) {
loveit.girl();
} else {
  loveit.love();
}
