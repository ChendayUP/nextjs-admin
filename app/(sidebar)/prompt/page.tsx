"use client"

import { useEffect, useState } from "react"
import { GetStaticPropsContext } from "next"
import { Button, Listbox, ListboxItem, ListboxSection } from "@nextui-org/react"
import { FiCopy } from "react-icons/fi"
import { DiAndroid } from "react-icons/di"
// import Markdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
import stringify from "remark-stringify"
import { remark } from "remark"
import { Prompt, PromptAssociation } from "./types"
import { getAllPrompts } from "./data/init"

// export async function generateMetadata() {
//   return { title: '提示词列表' };
// }
type languagePromptList = { [key: string]: { [key: string]: Prompt[] } }

const Home: React.FC = () => {
  // 从指定文件夹中的 TypeScript 文件获取并合并初始提示词数据
  const [prompts, setPrompts] = useState<languagePromptList>()
  const [association, setAssociation] = useState<PromptAssociation>({})
  const [openCategories, setOpenCategories] = useState<{
    [key: string]: boolean
  }>({})

  const handleToggleCategory = (category: string) => {
    setOpenCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }))
  }

  const getPrompts = async () => {
    const [languageList, promptAssociation] = await getAllPrompts()
    setAssociation(promptAssociation)
    let map: languagePromptList = {}

    Object.keys(languageList).forEach((key) => {
      let list = languageList[key]
      let subMap: { [key: string]: Prompt[] } = {}
      list.forEach((item) => {
        if (subMap[item.category]) {
          subMap[item.category]!.push(item)
        } else {
          subMap[item.category] = [item]
        }
      })
      map[key] = subMap
    })

    setPrompts(map)
  }
  useEffect(() => {
    getPrompts()
  }, [])
  // 提示词数据状态

  // 选中的提示词状态
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null)
  const [selected, setSelected] = useState<string>("")

  // 处理提示词选择事件
  const handlePromptSelect = (prompt: Prompt) => {
    setSelectedPrompt(prompt)
  }

  // 将提示词内容复制到剪切板
  const handleCopyToClipboard = () => {
    if (selected) {
      navigator.clipboard.writeText(selected)
    }
  }

  const MarkdownContent = ({
    content,
    titleColor = "#000",
  }: {
    content: string
    titleColor?: string
  }) => {
    // 将内容按行分割成数组
    const lines = content.split("\n")

    // 遍历每一行,如果是标题(以#开头),则将其包裹在span标签中,并应用指定的颜色
    const processedLines = lines.map((line, index) => {
      if (line.startsWith("#")) {
        const level = line.split(" ")[0].length // 获取标题级别
        const title = line.slice(level + 1) // 获取标题内容
        return (
          <span key={index} style={{ color: titleColor, fontWeight: "bold" }}>
            {line} <br />
          </span>
        )
      }
      return `${line}\n`
    })
    console.log("processedLines", processedLines)
    return (
      <pre className="">
        <code>{processedLines}</code>
      </pre>
    )
  }

  const ShowContent = () => {
    const str = selectedPrompt!.association
      .map((item, idx) => {
        let row =
          item === -1
            ? selectedPrompt!.content
            : association[item]
            ? association[item].content
            : `没有内容: ${item}`
        // 删除row末尾换行符
        row = row.trim()
        return row
      })
      .join("\n")
    setSelected(str)
    return <MarkdownContent content={str} titleColor="#ff0000" />
  }

  return (
    <div className="min-h-screen flex">
      {/* 左侧提示词列表 */}
      <div className="w-[300px] border-r border-gray-300 p-4 overflow-y-auto">
        {prompts &&
          Object.entries(prompts).map(([language, promptsList], index) => (
            <div key={index} className="mb-4">
              <div className="bg-blue-500 text-white rounded-lg px-2 py-2">
                {language}
              </div>
              <div className="mt-2">
                {Object.entries(promptsList).map(
                  ([category, prompts], index) => (
                    <div key={index} className="mb-2">
                      <div
                        className="font-bold mb-1 flex justify-between items-center cursor-pointer"
                        onClick={() => handleToggleCategory(category)}
                      >
                        <span>{category}</span>
                        <span className="text-xl">
                          {openCategories[category] ? "-" : "+"}
                        </span>
                      </div>
                      {openCategories[category] && (
                        <div className="ml-2">
                          {prompts.map((prompt, idx) => (
                            <div
                              key={prompt.name}
                              className={`py-1 px-2 rounded cursor-pointer flex items-center ${
                                prompt.name === selectedPrompt?.name
                                  ? "bg-gray-200"
                                  : ""
                              }`}
                              onClick={() => handlePromptSelect(prompt)}
                            >
                              <DiAndroid className="mr-2" />
                              {prompt.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
      </div>

      {/* 右侧提示词内容显示 */}
      <div className="flex-1 p-4">
        {selectedPrompt ? (
          <div>
            <ShowContent />
            <Button onClick={handleCopyToClipboard} startContent={<FiCopy />}>
              复制
            </Button>
          </div>
        ) : (
          <div>请选择一个提示词</div>
        )}
      </div>
    </div>
  )
}

export default Home
