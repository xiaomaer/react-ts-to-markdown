const path = require('path');
const { genReactComp } = require('./utils/tsToReadme');

const root = process.cwd();
const componentPath = path.resolve(root, 'src/components', 'Column2');

genReactComp(componentPath,'src/interface.ts');
