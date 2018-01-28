import { basename } from 'path';
import { createPrivateJsBuilder } from 'xazure-builder-common';

const source = 'src';
const dest = 'dist';

export default {
  source,
  dest,
  builders: [
    {
      name: 'config',
      matcher: path => ['config.js', 'config.private.js'].includes(basename(path)),
      builder: createPrivateJsBuilder(source, dest)
    }
  ]
};