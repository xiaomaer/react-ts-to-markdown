### Column

Form column.

#### Props

| Name                  | Type                                | Default value | Description  |
| --------------------- | ----------------------------------- | ------------- | ------------ |
| name                  | string                              | "red"         | 设置名称     |
| sex _(required)_      | number                              |               | 设置性别     |
| getAge _(required)_   | () => number                        |               | 获取年龄     |
| category _(required)_ | "option1" \| "option2" \| "option3" | "option1"     | 设置分类     |
| c                     | boolean                             |               | 设置c        |
| d                     | keyof Point                         | "x"           | 设置d        |
| e                     | Point                               |               | 设置e        |
| test                  | string\[]                           |               | 设置test属性 |
| method                | (arr: string\[]) => void            |               | 我是一个方法 |
