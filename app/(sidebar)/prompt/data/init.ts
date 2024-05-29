"use server";

import { Prompt } from '../types';
import { prompts as reactCommon } from './react/create';
import { prompts as vueCommon } from './vue2/basic'
import { prompts as vueComponent } from './vue2/component'
import { prompts as vuePage } from './vue2/vuePage'
import { prompts as vue3Common } from './vue3/basic'
import { prompts as vue3Component } from './vue3/component'
import { prompts as vue3Page } from './vue3/vuePage'
export const getAllPrompts = (): Prompt[] => {
  let allPrompts: Prompt[] = [];
  allPrompts.push(...vueCommon)
  allPrompts.push(...vueComponent)
  allPrompts.push(...vuePage)
  allPrompts.push(...vue3Common)
  allPrompts.push(...vue3Component)
  allPrompts.push(...vue3Page)
  allPrompts.push(...reactCommon);

  return allPrompts
};

