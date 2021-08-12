#!/usr/bin/env node
const program = require('commander');
const packageJson = require('../package.json');

program
  .version(packageJson.version, '-v,--version')
  .option('-b, --base <baseName>', '指定根目录', 'src/components')
  .option('-d, --dir <dirName>', '指定react组件所在文件夹')
  .option('-f, --file <fileName>', '指定react组件的文件名（包含后缀）');

program.parse(process.argv);

const options = program.opts();

const { base, dir, file } = options;
const path = require('path');
const docgen = require('react-docgen-typescript');
const markdown = require('react-docgen-typescript-markdown-render');
const fs = require('fs');
const ora = require('ora');

const root = process.cwd();
const spinner = ora('正在生成readme...').start();

if (!dir) {
  // 遍历src/components下的组件，为所有组件生成readme
  const dirPath = path.resolve(root, base);
  fileDisplay(dirPath);
} else {
  // 为指定组件生成readme
  const componentPath = path.resolve(root, base, dir);
  genDoc(componentPath, file);
}

/**
 * 根据react组件ts类型定义生成readme
 * @param {string} base
 * @param {string} dir
 * @param {string} file
 */
function genDoc(path, file = 'src/index.tsx') {
  const componentFile = `${path}/${file}`;
  const componentDoc = `${path}/README.md`;
  if (!/.tsx/.test(componentFile)) {
    spinner.warn('请指定react组件的文件名，文件类型需为tsx格式');
    return;
  }
  try {
    if (fs.existsSync(componentFile)) {
      const options = {
        savePropValueAsString: true,
        componentNameResolver: dir ? () => dir : undefined,
      };
      const content = docgen.parse(componentFile, options);
      const renderContent = markdown.markdownRender(content);
      try {
        fs.writeFileSync(componentDoc, renderContent);
        spinner.succeed(`${componentFile}组件readme生成完成`);
      } catch (error) {
        spinner.fail(`${componentFile}组件：${err}`);
      }
    } else {
      spinner.warn('路径不存在');
    }
  } catch {
    spinner.fail('执行错误');
  }
}

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath) {
  if (!fs.existsSync(filePath)) {
    spinner.warn('路径不存在，请重新指定配置');
    return;
  }
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function (err, files) {
    if (err) {
      spinner.error(err);
    } else {
      //遍历读取到的文件列表
      files.forEach(function (filename) {
        //获取当前文件的绝对路径
        const filedir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        try {
          const stats = fs.statSync(filedir);
          const isDir = stats.isDirectory();
          if (isDir) {
            genDoc(filedir);
          }
        } catch (error) {
          spinner.error(error);
        }
      });
      spinner.succeed('所有组件readme生成完成');
    }
  });
}
