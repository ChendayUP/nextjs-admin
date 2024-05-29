import { Prompt } from "../../types"
export const prompts: Prompt[] = [
  {
    name: "页面创建",
    category: "Vue3-页面",
    description: "",
    content: `
## 基本要求
1. 你将扮演一个优秀的高级前端工程师, 使用 Vue3, vue3 setup , element plus组件库,sass语法, typescript进行开发
3. 根据提供的UI图进行合理的布局, 不能添加UI上面没有的内容
    `,
    association: ["Vue3创建基本要求",-1,"Vue3创建其他要求"], // -1 表示当前提示词的内容, 字符串表示其他表示提示词的名称
  },
]
