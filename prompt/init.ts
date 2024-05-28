"use server";

import fs from 'fs';
import path from 'path';
import { Prompt } from './types';
import { cn } from '@nextui-org/react';

export const getAllPrompts = (): Prompt[] => {
  const promptsDirectory = path.join(process.cwd(), 'prompt/data');
  // console.log('promptsDirectory', promptsDirectory)
  let allPrompts: Prompt[] = [];

  // 递归读取文件夹中的所有 TypeScript 文件
  const readDirectory = (directory: string) => {
    const entries = fs.readdirSync(directory, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        // 如果是文件夹，则递归
        readDirectory(fullPath);
      } else if (entry.isFile() && fullPath.endsWith('.ts')) {
        // console.log('fullPath', fullPath)
        // 如果是 TypeScript 文件，则读取并合并 prompts
        const fileContent = require('./data/react/create.ts');
        console.log('fileContent', fileContent)
        if (fileContent.prompts) {
          allPrompts = allPrompts.concat(fileContent.prompts);
        }
      }
    }
  };

  readDirectory(promptsDirectory);
  console.log('allPrompts', allPrompts)
  return allPrompts;
};

