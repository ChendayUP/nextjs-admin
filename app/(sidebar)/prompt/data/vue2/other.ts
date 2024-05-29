import { Prompt } from "../../types"
export const prompts: Prompt[] = [
  {
    name: "创建页面其他要求",
    category: "Vue2-公共",
    description: "公共-其他要求",
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