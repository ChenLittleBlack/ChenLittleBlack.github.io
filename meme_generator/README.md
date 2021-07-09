# Meme generator

[![CircleCI](https://img.shields.io/circleci/project/github/ChenLittleBlack/Meme-generator.svg?style=flat-square)](https://circleci.com/gh/ChenLittleBlack/Meme-generator/tree/master)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?style=flat-square)](https://www.gnu.org/licenses/gpl-3.0)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ChenLittleBlack/Meme-generator.svg?style=flat-square)


一个使用纯 JavaScript 编写的表情包生成器。

部分模板来自 [sorry](https://github.com/xtyxtyx/sorry)，CSS 框架采用了 [bulma](https://github.com/jgthms/bulma)。

你可以自己构建，也可以直接使用[我提供的服务](https://meme.itswincer.com)，关于原理可以参见我[这篇博文](https://blog.itswincer.com/posts/8575e868/)，以下是构建步骤。

## 使用

请先确认 [Node.js](https://github.com/nodejs/node.git) 和 [Yarn](https://github.com/yarnpkg/yarn) 已安装。

### 下载

clone 本仓库：

```bash
git clone git@github.com:ChenLittleBlack/Meme-generator.git
```

### 安装依赖

进入 Meme-generator 目录：

```bash
yarn install
yarn global add gatsby
```

### 运行

可选择开发环境或生产环境：

```bash
# 开发环境
gatsby develop

# 生产环境
gatsby build
```

其中开发环境用于本地调试、测试，生产环境会将源码打包生成在 build 目录。

## 模板

静态图可以通过点击图片来自定上传。

目前动图有 6 个模板，分别是：王境泽、我说的、为所欲为、谁赞成谁反对、星际还是魔兽、打工是不可能打工的。

关于添加模板见 Wiki 的[模板部分](https://github.com/ChenLittleBlack/Meme-generator/wiki/模板)。

## 部署

选择生产环境构建完毕后，生成的静态文件可借助 Nginx、Apache、Caddy 服务器等托管。

### 远程同步

可使用 rsync 命令与远程服务器同步：

```bash
# 需要先执行 yarn build 
rsync -az -vv --delete -e 'ssh -p 22' public/* DomainName:/Path
```

