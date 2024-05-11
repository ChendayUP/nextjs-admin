import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'

const StepProgress = ({ data }) => {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-start px-20 h-[200px]">
        <div className="w-6 relative">
          <div className="mb-2 flex items-center">
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                data.status >= 1 ? 'bg-green-600' : 'bg-gray-400'
              }`}
            >
              {data.status >= 1 ? <FaCheck className="text-white" /> : '1'}
            </span>
          </div>
          <div className="text-center w-36 absolute left-1/2 -translate-x-1/2">
            <p className={`${data.status >= 1 ? 'text-gray-700 font-medium' : 'text-gray-400'}`}>
              提交申请
            </p>
            <p>{data.userName}</p>
            <p>{data.time}</p>
          </div>
        </div>
        <div
          className={`flex-grow h-0.5 ${
            data.status !== 2 ? 'bg-green-600' : 'bg-red-600'
          } relative top-3 mx-2`}
        ></div>
        <div className="w-6 relative">
          <div className="mb-2 flex items-center">
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                data.status >= 3
                  ? 'bg-green-600'
                  : data.status === 2
                  ? 'bg-red-600'
                  : 'bg-yellow-500'
              }`}
            >
              {data.status >= 3 ? (
                <FaCheck className="text-white" />
              ) : data.status === 2 ? (
                <FaTimes className="text-white" />
              ) : (
                '2'
              )}
            </span>
          </div>
          <div className="text-center w-36 absolute left-1/2 -translate-x-1/2">
            <p className={`${data.status >= 3 ? 'text-gray-700 font-medium' : 'text-gray-400'}`}>
              子公司信息子公司信息子公司信息子公司信息子公司信息子公司信息
            </p>
            <p>{data.userName}</p>
            <p>{data.time}</p>
          </div>
        </div>
        <div
          className={`flex-grow h-0.5 ${
            data.status === 5 || data.status === 3 ? 'bg-green-600' : 'bg-red-600'
          } relative top-3 mx-2`}
        ></div>
        <div className="w-6 relative">
          <div className="mb-2 flex items-center">
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                data.status === 5
                  ? 'bg-green-600'
                  : data.status === 4
                  ? 'bg-red-600'
                  : 'bg-yellow-500'
              }`}
            >
              {data.status === 5 ? (
                <FaCheck className="text-white" />
              ) : data.status === 4 ? (
                <FaTimes className="text-white" />
              ) : (
                '3'
              )}
            </span>
          </div>
          <div className="text-center w-36 absolute left-1/2 -translate-x-1/2">
            <p className={`${data.status >= 3 ? 'text-gray-700 font-medium' : 'text-gray-400'}`}>
              分公司信息分公司信息分公司信息分公司信息分公司信息分公司信息
            </p>
            <p>{data.userName}</p>
            <p>{data.time}</p>
          </div>
        </div>
        <div
          className={`flex-grow h-0.5 ${data.status < 5 ? 'bg-gray-300' : 'bg-green-600'} relative top-3 mx-2`}
        ></div>
        <div className="w-6 relative">
          <div className="mb-2 flex items-center">
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                data.status === 5 ? 'bg-green-600' : 'bg-gray-400'
              }`}
            >
              {data.status === 5 ? <FaCheck className="text-white" /> : '4'}
            </span>
          </div>
          <div className="text-center w-36 absolute left-1/2 -translate-x-1/2">
            <p className={`${data.status === 5 ? 'text-gray-700 font-medium' : 'text-gray-400'}`}>
              完成
            </p>
          </div>
        </div>
      </div>
      {(data.status === 2 || data.status === 4) && (
        <div className="flex items-center mt-2">
          <div className="w-24 text-right">退回原因：</div>
          <div className="ml-3">
            项目关键指标未达预期，且改进方案缺乏可行性，风险过高，需要重新评估再提交，故本次项目中止审核不通过。
          </div>
        </div>
      )}
    </div>
  )
}

export default StepProgress