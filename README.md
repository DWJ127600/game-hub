# Game Hub

一个基于 React + TypeScript + Vite 构建的游戏平台，用于浏览热门游戏、按类型和平台筛选内容、搜索具体游戏，并查看游戏详情、预告片与截图。

项目已部署在 Vercel，可通过以下地址访问：

https://game-hub-kappa-lovat.vercel.app/

## 项目简介

Game Hub 面向“找游戏、看信息、快速筛选”这一使用场景构建，首页提供游戏列表与多维筛选能力，详情页则聚合了基础介绍、媒体资源和关键信息，适合作为游戏资讯类前端项目示例。

项目当前通过 RAWG API 获取游戏数据，并使用 Chakra UI 构建界面，结合 React Query 处理服务端数据请求与缓存，整体体验轻量、直观，适合继续扩展为更完整的游戏内容平台。

## 核心功能

- 游戏列表展示
- 按游戏类型筛选
- 按游戏平台筛选
- 按排序规则切换内容
- 关键词搜索游戏
- 无限滚动加载更多数据
- 游戏详情页展示
- 游戏预告片播放
- 游戏截图预览
- 深色模式切换

## 技术栈

- React 19
- TypeScript
- Vite
- Chakra UI
- React Router
- TanStack React Query
- Zustand
- Axios
- Framer Motion

## 页面结构

### 首页

- 顶部导航栏
- 搜索框
- 深色模式开关
- 左侧游戏类型列表
- 平台筛选
- 排序筛选
- 游戏卡片网格

### 游戏详情页

- 游戏名称
- 游戏基础属性
- 游戏描述
- 预告片
- 截图列表

## 项目结构

```text
game-hub/
├─ public/
├─ src/
│  ├─ assets/         # 静态资源
│  ├─ components/     # 通用组件
│  ├─ data/           # 本地静态数据
│  ├─ entities/       # 类型定义 / 实体模型
│  ├─ hooks/          # 数据获取与业务 hooks
│  ├─ pages/          # 页面级组件
│  ├─ services/       # API 请求封装
│  ├─ index.css
│  ├─ main.tsx
│  ├─ routes.tsx
│  ├─ store.ts        # Zustand 状态管理
│  └─ theme.ts
├─ index.html
├─ package.json
└─ vite.config.ts
```

## 本地开发

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发环境

```bash
npm run dev
```

默认启动后可在本地开发地址查看项目，通常为：

```text
http://localhost:5173
```

### 3. 构建生产版本

```bash
npm run build
```

### 4. 本地预览生产构建

```bash
npm run preview
```

## 数据来源

项目当前通过 RAWG API 获取游戏相关数据，包括：

- 游戏列表
- 游戏详情
- 游戏截图
- 游戏预告片
- 类型与平台信息

API 请求封装位于 `src/services/api-client.ts`。
