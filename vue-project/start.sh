#!/bin/bash

# Vue + Vite 项目启动脚本

echo "🚀 启动 Vue + Vite 开发环境..."
echo ""

# 检查 Node.js 版本
node_version=$(node -v)
echo "Node.js 版本: $node_version"

# 检查是否安装了依赖
if [ ! -d "node_modules" ]; then
    echo "📦 正在安装依赖..."
    npm install
fi

echo ""
echo "🔥 启动开发服务器..."
echo "访问地址: http://localhost:5173"
echo "按 Ctrl+C 停止服务器"
echo ""

# 启动开发服务器
npm run dev