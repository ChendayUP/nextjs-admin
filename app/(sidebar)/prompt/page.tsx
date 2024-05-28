"use client"

import { useState } from "react"
import { GetStaticPropsContext } from "next"
import { Button, Card, CardHeader, CardBody } from "@nextui-org/react"
import { FiCopy } from "react-icons/fi"
// import Markdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
import { Prompt } from "@/prompt/types"
import { getAllPrompts } from "@/prompt/init"

// export async function generateMetadata() {
//   return { title: '提示词列表' };
// }

const Home: React.FC = () => {
  // 从指定文件夹中的 TypeScript 文件获取并合并初始提示词数据
  const [prompts, setPrompts] = useState<Prompt[]>([])
  const getPrompts = async () => {
    const list = await getAllPrompts()
    setPrompts(list)
  }
  getPrompts()
  console.log("prompts", prompts.map)
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

  return (
    <div className="min-h-screen flex">
      {/* 左侧提示词列表 */}
      <div className="w-1/3 border-r border-gray-300 p-4 overflow-y-auto">
        {prompts.map((prompt, index) => (
          <Card
            key={index}
            className="mb-4 cursor-pointer"
            onClick={() => handlePromptSelect(prompt)}
          >
            <CardHeader>{prompt.category}</CardHeader>
            <CardBody>
              <p>{prompt.name}</p>
              <p>{prompt.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* 右侧提示词内容显示 */}
      <div className="w-2/3 p-4">
        {selectedPrompt ? (
          <div>
            {selectedPrompt.association.map((item, idx) => (
              <Card key={idx} className="mb-4">
                <CardBody>
                  {/* <Markdown remarkPlugins={[remarkGfm]}> */}
                  {item === -1 ? selectedPrompt.content : (item as string)}
                  {/* </Markdown> */}
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
