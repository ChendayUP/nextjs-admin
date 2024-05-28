import fs from 'fs';
import path from 'path';
import { Prompt } from '../data/prompts';

// 读取指定文件夹下所有的 TypeScript 文件并合并它们的 prompts
export const getAllPrompts = (): Prompt[] => {
  const promptsDirectory = path.join(process.cwd(), 'prompts'); // 假设 prompts 文件夹在根目录
  const fileNames = fs.readdirSync(promptsDirectory);
  let allPrompts: Prompt[] = [];

  fileNames.forEach((fileName) => {
    if (fileName.endsWith('.ts')) {
      const filePath = path.join(promptsDirectory, fileName);
      const fileContent = require(filePath);

      if (fileContent.prompts) {
        allPrompts = allPrompts.concat(fileContent.prompts);
      }
    }
  });

  return allPrompts;
};