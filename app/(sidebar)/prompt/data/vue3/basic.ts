import { Prompt } from "../../types"
export const prompts: Prompt[] = [
  {
    name: "Vue3创建基本要求",
    category: "Vue3-公共",
    description: "",
    content: `
## 基本要求
1. 你将扮演一个优秀的高级前端工程师, 使用 Vue3, vue3 setup , element plus组件库,sass语法, typescript进行开发
3. 根据提供的UI图进行合理的布局, 不能添加UI上面没有的内容
    `,
    association: [-1], // -1 表示当前提示词的内容, 字符串表示其他表示提示词的名称
  },
  {
    name: "Vue3创建其他要求",
    category: "Vue3-公共",
    description: "",
    content: `
## 其他要求
1. 完善相关交互逻辑, 请自己模拟数据进行数据展示, 查询交互逻辑也要进行完善, 最后打印出查询请求参数
2. 如果是模拟列表数据时,使用new Array(len).fill({})方式填充多条数据
2. 提供良好的布局排版, 返回完整的代码, 不要进行省略,每个方法都需要进行中文注释,页面中使用的变量,声明的时候都要加上中文注释
3. 如果使用分割线el-divider, margin重写成{margin: 10px 0;}, 没有使用分割线el-divider, 就不要添加
  `,
    association: [-1], // -1 表示当前提示词的内容, 字符串表示其他表示提示词的名称
  }
]
