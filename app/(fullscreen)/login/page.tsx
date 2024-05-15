"use client"
import React, { useState } from 'react';
import { Input, Button, Spacer } from "@nextui-org/react";
import { FaUserAlt, FaLock } from 'react-icons/fa';
import {requestData } from '@/app/api/request';

// 定义要发送的数据的类型
interface LoginData {
  username: string;
  password: string;
}

// 定义登录组件
const LoginPage: React.FC = () => {
 // 使用 useState hook 管理表单输入状态
 const [username, setUsername] = useState<string>('123');
 const [password, setPassword] = useState<string>('12312');

 // 定义表单提交处理函数
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   let username = "18382306354"
   let password = "01cea673a4b17ea0e4ccbd9408c4015c"

   const res = await requestData<LoginData, any>('/api/v1/server/company/auth/login/', 'POST', { username, password })
   // The return value is *not* serialized
   // You can return Date, Map, Set, etc.
  
   localStorage.setItem('userInfo', JSON.stringify(res));
   // 重置表单
   setUsername('');
   setPassword('');
 };

 return (
   // 使用 Flex 布局容器实现水平垂直居中
   <div className="flex h-screen items-center justify-center">
     <div className="w-80">
       {/* 标题 */}
       <h1 className="mb-6 text-center text-3xl font-bold">新用户登录</h1>
       {/* 表单容器 */}
       <form onSubmit={handleSubmit}>
         {/* 用户名输入框 */}
         <div className="mb-4">
           <div className="flex items-center border rounded-md px-3 py-2">
             <FaUserAlt className="mr-2 text-gray-500" />
             <Input
               value={username}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
               isClearable
               placeholder="用户名"
               required
             />
           </div>
         </div>
         {/* 密码输入框 */}
         <div className="mb-6">
           <div className="flex items-center border rounded-md px-3 py-2">
             <FaLock className="mr-2 text-gray-500" />
             <Input
               value={password}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
               isClearable
               type="password"
               placeholder="密码"
               required
             />
           </div>
         </div>
         {/* 登录按钮 */}
         <Button type="submit" className="w-full" css={{ backgroundColor: '$primary' }}>
           登录
         </Button>
       </form>
       <Spacer y={1} />
     </div>
   </div>
 );
};

export default LoginPage;