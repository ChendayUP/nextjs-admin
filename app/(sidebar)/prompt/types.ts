// 定义提示词数据结构
export interface Prompt {
  category: string;
  project?: string;
  name: string;
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
