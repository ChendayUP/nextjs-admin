// 定义提示词数据结构
export interface Prompt {
  name: string;
  category: string;
  description: string;
  content: string;
  association: (string | number)[];
}

export interface PromptLanguage {
  [key: string]: Prompt[];
}

export interface PromptAssociation {
  [key: string]: Prompt;
}
