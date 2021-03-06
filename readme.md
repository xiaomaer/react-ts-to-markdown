### react-ts-to-markdown

根据react组件中，定义的ts属性类型自动生成readme文件

### 安装

```
npm i react-ts-to-markdown
```

### 命令

docgen 包括命令：

```
-v,--version 命令行工具版本号
-b,--base <baseName> 指定组件根目录，默认为`src/components`
-d,--dir <dirName> 指定react组件所在文件夹，默认为`空`
-f,--file <fileName> 指定react组件的文件名（包含后缀）（根据react组件属性类型定义生成readme，生成的readme文件在组件根目录下），如：`src/index.tsx`
-t,--ts <fileName> 指定ts类型定义文件的文件名（包含后缀）（根据ts文件export的类型定义生成readme，生成的readme文件与interfeac文件在同一目录下），如：`src/interface.ts`
```
`注意：` `-f`与`-t`不能同时使用，当两者都存在时，-t生效

### 使用

```
docgen [options]

eg：
docgen -d Column2 -t src/interface.ts

docgen -d Column2 -f src/index.tsx 
docgen -d Column2
```

`注意：`默认情况下，将为项目根目录下，满足该`src/components/**/src/index.tsx`路径的所有组件生成readme。

### 组件编写规范说明
请参考https://github.com/styleguidist/react-docgen-typescript/