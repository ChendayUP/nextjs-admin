"use server";

import { PromptLanguage, PromptAssociation } from '../types';
import { prompts as reactCommon } from './react/create';
import { prompts as vueCommon } from './vue2/basic'
import { prompts as vueComponent } from './vue2/component'
import { prompts as vuePage } from './vue2/vuePage'
import { prompts as vue3Common } from './vue3/basic'
import { prompts as vue3Component } from './vue3/component'
import { prompts as vue3Page } from './vue3/vuePage'
export const getAllPrompts = (): [PromptLanguage,PromptAssociation] => {
  let promptAssociation: PromptAssociation = {}
  let allPrompts: PromptLanguage = {
    vue2: [],
    vue3: [],
    react: []
  };
  allPrompts.vue2.push(...vueCommon)
  allPrompts.vue2.push(...vueComponent)
  allPrompts.vue2.push(...vuePage)
  allPrompts.vue3.push(...vue3Common)
  allPrompts.vue3.push(...vue3Component)
  allPrompts.vue3.push(...vue3Page)
  allPrompts.react.push(...reactCommon);

  Object.keys(allPrompts).forEach((key) => {
    let list = allPrompts[key]
    
    list.forEach((item) => {
      if (promptAssociation[item.name]) {
        console.error(`Duplicate prompt name: ${item.name}`)
      } else {
        promptAssociation[item.name] = item
      }
    })
  })


  return [allPrompts, promptAssociation]
};

