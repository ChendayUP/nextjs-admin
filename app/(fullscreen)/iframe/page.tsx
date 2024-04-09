'use client'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import DateTime from './DateTime'
import {Button} from "@nextui-org/react";
import NextLink from "next/link";

export default function Iframe() {
  const title = '数字孪生智慧工地数字'
  const website = 'https://www.720yun.com/vr/130jO0eOra3'
  // const website = ''
  const projectId = 'Project ID: 123456'
  const projectDescription =
    'Project description goes Project description goes here description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes here...' +
    'Project description goes Project description goes here description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes hereProject description goes here...'

  const [isFullscreen, setIsFullscreen] = useState(false)
 
  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
    // Add your fullscreen logic here
  }

  const handleScreenshot = () => {
    // Add your screenshot logic here
    // This is just a placeholder for demonstration purposes
    alert('Taking screenshot...')
  }
  // const router = useRouter()
  // const handleToConfigTable = () => {
  //   router.push('/configTables')
  // }

  return (
    <>
      <Head>
        <title>Iframe</title>
      </Head>

      <div className={`w-full h-full relative ${isFullscreen ? 'fullscreen' : ''}`}>
        <iframe src={website} title={title} className="w-full h-full" />

        <section className="absolute left-0 top-0 bg-blue-500">
          <div className="flex items-center w-[526px] h-[66px] pl-[10px]">
            {/* <Image src='https://i.pravatar.cc/150?u=a04258114e29026702d' width='40' height='25' alt="" className="h-[40px] w-[25px] mr-2" /> */}
            <span className="text-white">{title}</span>
          </div>
          <div className="mostly-customized-scrollbar w-[526px] p-[20px] bg-teal-700 shadow-inner text-white max-h-[400px] overflow-y-auto">
            <p>{projectDescription}</p>
          </div>
        </section>
        <section className="absolute right-0 top-0 bg-slate-400">
          <div className="flex items-center p-4">
            <div onClick={handleScreenshot}>截图</div>
            <div onClick={handleFullscreen}>全屏</div>
            <div className="text-left">
              <DateTime></DateTime>
            </div>
          </div>
        </section>
        <NextLink href='/configTables'>
          <div className="absolute right-0 top-1/2 bg-slate-400">configTables</div>
        </NextLink>
      </div>
    </>
  )
}
