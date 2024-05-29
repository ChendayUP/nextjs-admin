// 定义提示词数据结构
export interface Prompt {
  name: string;
  category: string;
  description: string;
  content: string;
  association: (string | number)[];
}
