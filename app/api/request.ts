"use client";
// // 定义响应数据的类型
// interface ResponseData<R> {
//   // 根据实际响应的数据结构定义
//   success: boolean;
//   data?: R;
//   message?: string;
// }

// 发送 POST 请求的函数
export async function requestData<T, R>(url: string, method: string, data: T): Promise<R> {
  // 使用 fetch 发送请求
  const response = await fetch(url, {
      method: method, // 指定请求方法为 POST
      headers: {
          'Content-Type': 'application/json;charset=UTF-8' // 指定请求头，表示发送的是 JSON 数据
      },
      body: JSON.stringify(data) // 将 JavaScript 对象转换为 JSON 字符串
  });

  // 检查响应是否成功
  if (!response.ok) {
      // 如果响应状态码不是 2xx，则抛出错误
      throw new Error('Network response was not ok ' + response.statusText);
  }

  // 将响应体解析为 JSON
  return response.json() as Promise<R>; // 注意：如果响应体不是 JSON 格式，这里会抛出错误
}