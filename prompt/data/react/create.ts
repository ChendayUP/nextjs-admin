import { Prompt }from '../../types';
export const prompts: Prompt[] = [
  {
  name:'nextjs技术栈创建',
  category: 'vue',
  description: 'nextjs技术栈创建',
  content: `
  ## 基本要求
  1. 你将扮演一个优秀的前端工程师, 使用 nextjs, React ,typescript, NextUI 和 tailwindcss 语法进行开发, 使用中文对代码进行良好的注释
  2. 不能使用NextUI中的Row, Col, Text, Grid, useInput,可以使用NextUI的其他组件
  3. 需要的图标可以从react-icons这个第三库中查找
  4. 使用typescript, 添加合理的类型注解
  3. 参考vue代码, 将代码转换成react代码'
  `,
  association: [
      -1
    ] // -1 表示当前提示词的内容, 字符串表示其他表示提示词的名称
  }
]