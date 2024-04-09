import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn' // ES 2015
dayjs.locale('zh-cn') // 全局使用
function Clock() {
  const [time, setTime] = useState(dayjs().format('HH:mm:ss'))

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(dayjs().format('HH:mm:ss'))
    }, 1000)

    return () => {
      clearInterval(timerID)
    }
  }, [])

  return (
    <>
      <div>{time}</div>
      <div>
        {dayjs().format('YYYY年MM月DD日')} {dayjs().format('dddd')}
      </div>
    </>
  )
}

export default Clock
