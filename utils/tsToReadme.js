const fs = require('fs');
const ora = require('ora');
const spinner = ora();
const { genDoc } = require('./comToReadme');


function genReactComp(componentPath, ts = 'src/interface.ts') {
  if (!/.ts/.test(ts)) {
    spinner.warn('ts类型定义问题，必须以ts结尾');
    return;
  }
  spinner.start();
  const totalPath = `${componentPath}/${ts}`;
  const lastIndexOf = totalPath.lastIndexOf('/');
  const filePath = totalPath.substring(0, lastIndexOf);
  const compFileName = 'temp.tsx';
  const compFilePath = `${filePath}/${compFileName}`;
  const keys = getPropsKeys(totalPath);
  if (keys.length === 0) return;
  let comContent = `
  import React from "react";
  import * as Type from './interface'
  `;
  keys.forEach((key) => {
    comContent += genTemp(key);
  });
  try {
    fs.writeFileSync(compFilePath, comContent);
    spinner.succeed(`临时组件生成完成`);
  } catch (error) {
    spinner.fail(`临时组件生成失败：${err}`);
    return;
  }
  genDoc(filePath, compFileName);
  try {
    fs.unlinkSync(compFilePath);
    spinner.succeed(`临时组件删除成功`);
  } catch (error) {
    spinner.fail(`临时组件删除失败：${err}`);
  }
}

function getPropsKeys(fileName) {
  let keys = [];
  const reg = /export\s+(?:(interface|type))\s+([A-Za-z0-9]+)\s+/;
  try {
    const data = fs.readFileSync(fileName, 'utf8');
    const lines = data.split(/\r?\n/);
    lines.forEach((line) => {
      if (line.indexOf('export') > -1) {
        const match = line.match(reg);
        if (match && match[2]) {
          keys.push(match[2]);
        }
      }
    });
  } catch (error) {
    spinner.fail('读取ts文件失败');
  }
  return keys;
}

function genTemp(key) {
  return `
  /**
   * ${key}
   */
  export function ${key}(props:Type.${key} ) {
    return <>{props}</>;
  }
   `;
}

module.exports = { genReactComp };
