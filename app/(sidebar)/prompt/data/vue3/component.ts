import { Prompt } from "../../types"
export const prompts: Prompt[] = [
  {
    name: "输入框组件, 自定义下拉弹出内容",
    category: "Vue3-组件",
    description: "",
    content: `
    ## 基本要求
1. 你将扮演一个优秀的前端工程师, 使用 Vue2 , Element组件库 和 less语法进行开发
2. 提供良好的页面布局排版, 返回完整的代码, 不要进行省略, 使用中文对代码进行良好的注释
## 目标
写一个带搜索建议输入组件, 使用v-model对外绑定数据, 弹出的问题和点击的问题显示的答案全部要放到el-popover来保存兼容性, 输入框要成为触发 Popover 的元素
## 主要功能
1. 根据用户输入数据, 动态的使用数据进行后端, 后端返回数据, 用户输入要做防抖处理
2. 在输入框下面展示问题的标题, 和el-autocomplete展示相关类似, 展示框要悬浮展示, 展示框宽度为300px
3. 鼠标移动到问题标题后点击,右侧展示问题的标题和问题的答案, 可以参考el-cascader的显示效果和交互方式, 宽度为600px
## 交互逻辑
完善相关交互逻辑和展示逻辑, 使用Array().fill()填充多条数据进行展示
  `,
    association: ["",-1, ""], // -1 表示当前提示词的内容, 字符串表示其他表示提示词的名称
  },
]
