"use client"
import { ChangeEvent, useState } from 'react'
import { Card,CardHeader, CardBody, CardFooter, Divider, Radio,RadioGroup, Textarea, Button } from '@nextui-org/react'
import StepComponent from './step'

const page = () => {
  const [auditResult, setAuditResult] = useState(true)
  const [rejectReason, setRejectReason] = useState('')
  const [showAuditResult, setShowAuditResult] = useState(true)

  const formData = {
    suspensionType: '年度考核',
    suspensionReason: '员工请假时间过长',
    suspensionStartTime: '2023-03-01',
    resumeEvaluationTime: '2023-09-01',
    files: [
      { id: 1, name: '请假证明请假证明请假证明请假证明请假证明请假证明请假证明请假证明请假证明请假证明请假证明请假证明.pdf', url: '/path/to/file1.pdf' },
      { id: 2, name: '考勤记录.xlsx', url: '/path/to/file2.xlsx' }
    ],
    progressStatus: '已提交审核，等待审核结果'
  }

  const stepData = {
    status: 5,
    userName: '张三',
    time: '2023-05-11 14:30:00',
    subCompanyInfo: '子公司信息: 广州分公司',
    mainCompanyInfo: '分公司信息: 总部'
  }

  const downloadFile = (fileUrl: any) => {
    // Implement file download logic here
    let a = document.createElement('a')
    //ArrayBuffer 转为 Blob
    let blob = new Blob([fileUrl], {
      type: 'application/vnd.ms-excel'
    })
    let objectUrl = URL.createObjectURL(blob)
    a.setAttribute('href', objectUrl)
    a.setAttribute('download', '设备列表.xlsx')
    a.click()
  }

  const submitAudit = () => {
    const requestData = {
      auditResult,
      rejectReason
    }
    console.log('提交审核请求参数:', requestData)
  }

  const handleAuditResultChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuditResult(e.target.value === 'true')
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center mb-2">
          <div className="w-1 h-3 bg-green-500 mr-2" />
          <h2 className="text-lg font-bold">申请详情</h2>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className='px-2'>
            <div className="flex mb-2">
              <span className="w-48 text-right mr-2">暂止考核类型:</span>
              <span>{formData.suspensionType}</span>
            </div>
            <div className="flex mb-2">
              <span className="w-48 text-right mr-2">暂止考核原因:</span>
              <span>{formData.suspensionReason}</span>
            </div>
            <div className="flex mb-2">
              <span className="w-48 text-right mr-2">暂止考核开始时间:</span>
              <span>{formData.suspensionStartTime}</span>
            </div>
            <div className="flex mb-2">
              <span className="w-48 text-right mr-2">重新纳入考核时间:</span>
              <span>{formData.resumeEvaluationTime}</span>
            </div>
            <div className="flex mb-2 items-start">
              <span className="w-48 text-right mr-2">附件:</span>
              <div>
                {formData.files.map((file) => (
                  <div key={file.id} className="flex items-center mb-2">
                    <i className="text-green-500 mr-2">📄</i>
                    <span className="mr-2">{file.name}</span>
                    <Button className='bg-transparent'  onClick={() => downloadFile(file.url)}>
                      下载
                    </Button>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </CardBody>

      <CardHeader>
        <div className="flex items-center mb-2">
          <div className="w-1 h-3 bg-green-500 mr-2" />
          <h2 className="text-lg font-bold">处理进度</h2>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="mb-4">
          <StepComponent data={stepData} />
        </div>
      </CardBody>

      {showAuditResult && (
        <>
          <CardHeader>
            <div className="flex items-center mb-2">
              <div className="w-1 h-3 bg-green-500 mr-2" />
              <h2 className="text-lg font-bold">审核意见</h2>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className='flex flex-row'>
              <div>
                <RadioGroup value={auditResult ? 'true' : 'false'} orientation="horizontal" onChange={(value) => handleAuditResultChange(value)}>
                  <Radio value="true">审核通过</Radio>
                  <Radio value="false">审核不通过</Radio>
                </RadioGroup>
              </div>
              <div>
                {!auditResult && (
                  <div className="mt-2">
                    <Textarea
                      placeholder="请输入拒绝理由"
                      value={rejectReason}
                      onChange={(e) => setRejectReason(e.target.value)}
                      maxLength={50}
                      // css={{ width: '100%' }}
                    />
                  </div>
                )}
              </div>
            </div>
          </CardBody>
          <CardFooter>
            <Button onClick={submitAudit}>
              提交审核
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  )
}

export default page