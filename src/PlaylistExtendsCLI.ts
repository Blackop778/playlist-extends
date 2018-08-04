import commander = require('commander');

import PlaylistExtends from './PlaylistExtends';

let source: string;
let output: string | undefined;

commander
  .arguments('<source> [output]')
  .action((sourceArg: string, outputArg: string | undefined) => {
    source = sourceArg;
    output = outputArg;
  });

commander.parse(process.argv);

PlaylistExtends(source, output, undefined);
