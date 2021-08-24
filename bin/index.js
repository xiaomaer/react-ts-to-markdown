#!/usr/bin/env node
const program = require('commander');
const path = require('path');

const packageJson = require('../package.json');
const { genReactComp } = require('../utils/tsToReadme');
const { genDoc, fileDisplay } = require('../utils/comToReadme');

program
  .version(packageJson.version, '-v,--version')
  .option('-b, --base <baseName>', '指定根目录', 'src/components')
  .option('-d, --dir <dirName>', '指定react组件所在文件夹', '')
  .option('-f, --file <fileName>', '指定react组件的文件名（包含后缀）')
  .option('-t, --ts <filePath>', '根据ts文件类型定义生成readme（包含后缀）');

program.parse(process.argv);

const options = program.opts();
const { base = 'src/components', dir = '', file, ts } = options;
const root = process.cwd();
const componentPath = path.resolve(root, base, dir);

if (ts) {
  // 根据ts文件类型定义生成readme
  genReactComp(componentPath, ts);
} else {
  if (!dir) {
    // 遍历src/components下的组件，为所有组件生成readme
    const dirPath = path.resolve(root, base);
    fileDisplay(dirPath);
  } else {
    // 为指定组件生成readme
    genDoc(componentPath, file);
  }
}
