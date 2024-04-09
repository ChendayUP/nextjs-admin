"use client"
import { useState } from "react"
import Head from "next/head"
import {
  Switch,
  button,
  Select,
  SelectItem,
  Input,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react"
// Mock data
const data = Array.from({ length: 15 }, (_, index) => ({
  key: index,
  subCompany: `Sub Company ${index + 1}`,
  branchCompany: `Branch Company ${index + 1}`,
  projectName: `Project ${index + 1}`,
  informationConstruction: "AI Technology",
  cloudWatch: <Switch defaultChecked={index % 2 === 0} />,
  intelligentControl: <Switch defaultChecked={index % 3 === 0} />,
  commandDispatch: <Switch defaultChecked={index % 4 === 0} />,
  action: <button>详情</button>,
}))

const ConfigTablePage = () => {
  const [dataSource, setDataSource] = useState(data)
  // State for query parameters
  const [params, setParams] = useState({
    subCompany: "subCompany1",
    branchCompany: "",
    cloudWatch: "",
    intelligentControl: "",
    commandDispatch: "",
    informationConstruction: "",
    projectName: "",
  })

  // Function to handle parameter change
  const handleParamChange = (key: string, value: string) => {
    console.log(key, value) // Print parameter key and value
    setParams((prevParams) => ({
      ...prevParams,
      [key]: value,
    }))
  }

  // Function to handle query
  const handleQuery = () => {
    console.log(params) // Print query parameters
    // You can add your logic to send query request here
  }

  // Function to handle reset
  const handleReset = () => {
    setParams({
      subCompany: "",
      branchCompany: "",
      cloudWatch: "",
      intelligentControl: "",
      commandDispatch: "",
      informationConstruction: "",
      projectName: "",
    })
  }

  const handleDragSortEnd = (
    beforeIndex: number,
    afterIndex: number,
    newDataSource: any
  ) => {
    console.log("排序前的数据", beforeIndex, afterIndex)
    console.log("排序后的数据", newDataSource)
    setDataSource(newDataSource)
  }

  const getKeyValue = (item: any, key: string) => {
    return item[key]
  }

  // Table columns
  const columns = [
    {
      title: "排序",
      dataIndex: "sort",
      width: 60,
      className: "drag-visible",
    },
    { title: "序号", dataIndex: "key", key: "key" },
    { title: "子公司", dataIndex: "subCompany", key: "subCompany" },
    { title: "分公司", dataIndex: "branchCompany", key: "branchCompany" },
    { title: "项目全称", dataIndex: "projectName", key: "projectName" },
    {
      title: "信息化建设成就",
      dataIndex: "informationConstruction",
      key: "informationConstruction",
    },
    { title: "云观摩", dataIndex: "cloudWatch", key: "cloudWatch" },
    {
      title: "智控中心",
      dataIndex: "intelligentControl",
      key: "intelligentControl",
    },
    {
      title: "工程指挥调度",
      dataIndex: "commandDispatch",
      key: "commandDispatch",
    },
    { title: "操作", dataIndex: "action", key: "action" },
  ]

  return (
    <>
      <Head>
        <title>云观摩</title>
      </Head>
      <div className="container mx-auto p-4">
        <div className="mb-4 flex items-center">
          <div className="flex-shrink-0 mr-1">子公司: </div>
          <Select
            selectedKeys={[params.subCompany]}
            placeholder="子公司"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleParamChange("subCompany", e.target.value)
            }
            style={{ width: "200px", marginRight: "10px" }}
          >
            <SelectItem key="subCompany1">Sub Company 1</SelectItem>
            <SelectItem key="subCompany2">Sub Company 2</SelectItem>
          </Select>
          <div className="flex-shrink-0 mr-1">分公司: </div>
          <Select
            placeholder="分公司"
            onSelectionChange={(value: string[]) => {
              console.log(value)
              const list = Array.from(value)[0]
              handleParamChange("branchCompany", list)
            }}
            style={{ width: "200px", marginRight: "10px" }}
          >
            <SelectItem key="branchCompany1">Branch Company 1</SelectItem>
            <SelectItem key="branchCompany2">Branch Company 2</SelectItem>
          </Select>
          <div className="flex-shrink-0 mr-1">云观摩: </div>
          <Select
            placeholder="云观摩"
            onSelectionChange={(value: string) =>
              handleParamChange("cloudWatch", value)
            }
            style={{ width: "100px", marginRight: "10px" }}
          >
            <SelectItem value="">全部</SelectItem>
            <SelectItem value="built">已建设</SelectItem>
            <SelectItem value="notBuilt">未建设</SelectItem>
          </Select>
          <div className="flex-shrink-0 mr-1">智控中心: </div>
          <Select
            placeholder="智控中心"
            onSelectionChange={(value: string) =>
              handleParamChange("intelligentControl", value)
            }
            style={{ width: "100px", marginRight: "10px" }}
          >
            <SelectItem value="">全部</SelectItem>
            <SelectItem value="built">已建设</SelectItem>
            <SelectItem value="notBuilt">未建设</SelectItem>
          </Select>
          <div className="flex-shrink-0 mr-1">是否展示在工程指挥调度: </div>
          <Select
            placeholder="请选择"
            onSelectionChange={(value: string) =>
              handleParamChange("commandDispatch", value)
            }
            style={{ width: "100px", marginRight: "10px" }}
          >
            <SelectItem value="">全部</SelectItem>
            <SelectItem value="yes">是</SelectItem>
            <SelectItem value="no">否</SelectItem>
          </Select>
        </div>
        <div className="mb-4 flex items-center">
          <div className="flex-shrink-0 mr-1">信息化建设: </div>
          <Select
            placeholder="信息化建设"
            mode="multiple"
            onSelectionChange={(value: string) =>
              handleParamChange("informationConstruction", value)
            }
            style={{ width: "200px", marginRight: "10px" }}
          >
            <SelectItem value="smartSite">智慧工地</SelectItem>
            <SelectItem value="personnel">人员管理</SelectItem>
            <SelectItem value="material">物料管理</SelectItem>
            <SelectItem value="mechanical">机械管理</SelectItem>
            <SelectItem value="quality">质量管理</SelectItem>
            <SelectItem value="safety">安全管理</SelectItem>
            <SelectItem value="environment">环境管理</SelectItem>
            <SelectItem value="AI">AI技术</SelectItem>
            <SelectItem value="buildingRobot">建筑机器人</SelectItem>
            <SelectItem value="BIM">BIM</SelectItem>
            <SelectItem value="prefabrication">装配式</SelectItem>
            <SelectItem value="dataHandover">数据移交</SelectItem>
          </Select>
          <div className="flex-shrink-0 mr-1">项目名称: </div>
          <Input
            style={{ width: "200px", marginRight: "10px" }}
            placeholder="项目名称"
            onChange={(e) => handleParamChange("projectName", e.target.value)}
          />
          <button className="mr-2" onClick={handleQuery}>
            查询
          </button>
          <button onClick={handleReset}>重置</button>
          <button className="ml-auto">新增</button>
        </div>
        <Table aria-label="Example static collection table">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.dataIndex}>{column.title}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={dataSource}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default ConfigTablePage
