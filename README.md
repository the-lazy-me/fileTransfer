# fileTransfer项目文档

## 简介

学习了一下前端，心血来潮写一个在线传输文件的项目，可以传多个文件或文件夹，什么安全校验、大文件分块传输的，统统都没有，能传个文件就不错了，速度看带宽，稳定看运气

### 用到的技术栈

前端：

- 语言

  - HTML
  - CSS
  - JS
- 库
  - clipboard.js
  - jszip.js


后端：

- 语言
  - Python
- 框架
  - Flask

## 部署

### 后端

1. 克隆此项目

```bash
git clone
```

2. 安装后端所需的pip包

```bash
cd backEnd
pip install -r requirements.txt
```

3. 启动后端（非生产环境）

```bash
python main.py
```

4. 程序将在5000端口进行

### 前端

安装并配置nginx

## 项目结构

```lua
|-- README.md
|-- backEnd/
  |-- main.py				--主程序
  |-- record.txt			--记录每次上传时生成的transferCode
  |-- requirements.txt
  |-- uploads/				--存放上传上来的文件
|-- fontEnd/
  |-- CSS/
    |-- base.css			--用于重设样式
    |-- index.css			--公共样式
    |-- leftAside.css		--控制页面左侧样式
    |-- rightAside.css
  |-- JS/
    |-- clipboard.js		--剪贴板库
    |-- jszip.js			--压缩文件的
    |-- receive.js			--控制接收文件部分的UI和逻辑
    |-- send.js
  |-- img/
    |-- bgimg.png
  |-- index.html
```

> 如果想修改请求端口，在receive.js和send.js中

## 未来

等我再学的深入一些，这个项目会做更新