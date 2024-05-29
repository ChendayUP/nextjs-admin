"use client"

import { useEffect, useState } from "react"
import { GetStaticPropsContext } from "next"
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Listbox,
  ListboxItem,
  ListboxSection,
} from "@nextui-org/react"
import { FiCopy } from "react-icons/fi"
// import Markdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
import stringify from "remark-stringify"
import {remark} from "remark"
import { Prompt } from "./types"
import { getAllPrompts } from "./data/init"

// export async function generateMetadata() {
//   return { title: '提示词列表' };
// }

const Home: React.FC = () => {
  // 从指定文件夹中的 TypeScript 文件获取并合并初始提示词数据
  const [prompts, setPrompts] = useState<{ [key: string]: Prompt[] }>()
  const getPrompts = async () => {
    const list = await getAllPrompts()
    let map: { [key: string]: Prompt[] } = {}

    list.forEach((item) => {
      if (map[item.category]) {
        map[item.category]!.push(item)
      } else {
        map[item.category] = [item]
      }
    })

    setPrompts(map)
  }
  useEffect(() => {
    getPrompts()
  }, [])
  // 提示词数据状态

  // 选中的提示词状态
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null)

  // 处理提示词选择事件
  const handlePromptSelect = (prompt: Prompt) => {
    setSelectedPrompt(prompt)
  }

  // 将提示词内容复制到剪切板
  const handleCopyToClipboard = () => {
    if (selectedPrompt) {
      const finalContent = selectedPrompt.association
        .map((item) => (item === -1 ? selectedPrompt.content : item))
        .join("\n")
      navigator.clipboard.writeText(finalContent)
    }
  }

  const MarkdownContent = ({ content }: {content: string}) => {
    const processedContent = remark()
      .use(stringify)
      .processSync(content)
      .toString()

    return (
      <pre>
        <code>{processedContent}</code>
      </pre>
    )
  }

  return (
    <div className="min-h-screen flex">
      {/* 左侧提示词列表 */}
      <div className="w-1/3 border-r border-gray-300 p-4 overflow-y-auto">
        {prompts && (
          <Listbox variant="flat" aria-label="Listbox menu with sections">
            {Object.entries(prompts).map(([category, prompts], index) => (
              <ListboxSection key={index} title={category} showDivider>
                {prompts.map((prompt, idx) => (
                  <ListboxItem
                    key={idx}
                    description={prompt.description}
                    onClick={() => handlePromptSelect(prompt)}
                  >
                    {prompt.name}
                  </ListboxItem>
                ))}
              </ListboxSection>
            ))}
          </Listbox>
        )}
      </div>

      {/* 右侧提示词内容显示 */}
      <div className="w-2/3 p-4">
        {selectedPrompt ? (
          <div>
            {selectedPrompt.association.map((item, idx) => (
              <Card key={idx} className="mb-4">
                <CardBody>
                  {/* <Markdown remarkPlugins={[remarkGfm]}>
                    {item === -1 ? selectedPrompt.content : (item as string)}
                  </Markdown> */}
                  <MarkdownContent content={item === -1 ? selectedPrompt.content : (item as string)} />
                </CardBody>
              </Card>
            ))}
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
