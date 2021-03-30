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
-b,--base <baseName> 指定组件根目录，默认为src/components
-d,--dir <dirName> 指定react组件所在文件夹
-f,--file <fileName> 指定react组件的文件名（包含后缀）
```

### 使用

```
docgen [options]
```

`注意：`默认情况下，将为项目根目录下，满足该`src/components/**/src/index.tsx`路径的所有组件生成readme。