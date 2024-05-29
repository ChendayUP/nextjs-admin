import { Prompt } from "../../types"
export const prompts: Prompt[] = [
  {
    name: "页面创建",
    category: "Vue2-页面",
    description: "公共-页面创建",
    content: `
    ## 基本要求
    1. 你将扮演一个优秀的高级前端工程师, 使用 Vue2 , Element组件库 和 less语法进行开发
    3. 根据提供的UI图进行合理的布局
  `,
    association: [-1], // -1 表示当前提示词的内容, 字符串表示其他表示提示词的名称
  }
]
