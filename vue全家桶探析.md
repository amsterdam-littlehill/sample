---
layout: post
title:
date:  2017.10.27
categories:
tags:
author: 夏末远歌
mathjax: true
---
[TOC]


# Vue全家桶

## 技术栈
>vue-cli、vue2、vuex、vue-router、axios、webpack、es6、sass、element-ui

### 写在前面的话
前端技术趋势是前后端分离，组件化，各种前端框架、组件层出不穷，作为一名技术工种，了解学习前端新技术，有助于打破思维壁障。以[es6](https://leanpub.com/understandinges6/read) ([es6浏览器支持情况](https://kangax.github.io/compat-table/es6/))举例，作为javascript新标准，其目标就是可以编写大型复杂应用。
由于是后端转前端，最大的变化是前后端思想的变化，现在的前端不再是以前会html、css、javascript就够了，需要的技术栈需要快速更新。
[image](C:\Users\amsterdam\Desktop\fonts_compare.png) 

前端对JS的发展现状的关注点

1. 代码风格（JS预编译语言）

2. 前端框架

3. 状态管理

4. API层

5. 全栈框架

6. 测试框架

7. CSS 构建工具/预处理器

8. 构建工具

9. 移动端框架

10. 新特性

> 代码风格

ES6成为了新的标准

> 前端框架

React最热，Vue居第二

> 状态管理

Redux最火,Flux使用最广泛

> API层

REST APIs 最广泛适用

> 全栈框架

最主流的是Meteor和MEAN

> 测试框架

最主流的是Mocha和Jasmine

> CSS 构建工具/预处理器

1. SASS/SCSS是主导
2. CSS Modules 值得一试

> 构建工具

1. Webpack 和 Gulp最受欢迎
2. Grunt 已经过气了

> 新特性

1. 服务器端渲染

    通过服务器端渲染可以直接把生成好的页面内容发送到客户端，由此你可以提高应用的性能，改善交互，并且也顺带解决了SEO和可访问性的问题。

2. Code splitting代码拆分/按需加载 

    Code splitting 可以将你的代码拆分，只在客户端加载真正需要的使用的代码，由此可以极大地提高性能。

3. Optimistic Updates即时更新

    通过Optimistic Updates技术，客户端可以无需等待服务器的响应，直接显示出交互的结果，之后再处理服务器与客户端直接不同步的数据。
    
4. Hot Module Reloading模块热重载

    修改代码之后无需刷新浏览器页面，马上就能看到改变后的效果
    


### 关键技术


#### MVVM & vue

Vue.js (读音 /vjuː/，类似于 view) , **MVVVM**框架（Model-View-ViewMode分层）
  > 在前端页面中，把Model用纯JavaScript对象表示，View负责显示，两者做到了最大限度的分离。把Model和View关联起来的就是ViewModel。ViewModel负责把Model的数据同步到View显示出来，还负责把View的修改同步回Model。
  
1. Vue核心库只关注视图层，可避免尽量不操作dom元素

2. 提供了响应式 (Reactive) 和组件化 (Composable) 的视图组件。

3. 基于 HTML 的模板使得将已有的应用逐步迁移到 Vue 更为容易

4. 可以使用其他模板预处理器 比如 **Pug**

   .....
   
#### [webpack](https://webpack.js.org/concepts/)

  WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。
  
  把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。
  
  **一个常见的`webpack`配置文件**
  ```javascript
  //Node.js 内置 libs require("path")
  var path = require('path')
  var utils = require('./utils')
  var config = require('../config')
  var vueLoaderConfig = require('./vue-loader.conf')
  
  function resolve (dir) {
    return path.join(__dirname, '..', dir)
  }
  
  module.exports = {
   //编译为类浏览器环境里可用（默认）
    target:'web',
    //根上下文(contextual root)或 app 第一个启动文件
    entry: {
      app: './src/main.js'
    },
    //output.path 对应一个绝对路径，此路径是你希望一次性打包的目录。
    output: {
      path: config.build.assetsRoot,
      //编译文件的文件名(filename)，首选推荐：// main.js || bundle.js || index.js
      filename: '[name].js',
      publicPath: process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'store': path.resolve(__dirname, '../src/store'),
        'mock': path.resolve(__dirname, '../src/mock'),
        'api': path.resolve(__dirname, '../src/api')
      }
    },
    module: {
      rules: [
        /*loader对应用程序中资源文件进行转换*/
        /*使用eslint代码格式化检查*/
        {
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          include: [resolve('src'), resolve('test')],
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: vueLoaderConfig
        },
        /*使用Babel转义js文件中的es6语法*/
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [resolve('src'), resolve('test')]
        },
        /*使用url-loader压缩和优化*/
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('media/[name].[hash:7].[ext]')
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          }
        }
      ]
    }
  }

  ```

  > 目前vue作者推荐使用webpack，可后续调研是否嵌入fis。
  
#### eslint

vue-cli脚手架创建的默认eslint规则：
代码末尾不能加分号 ;
代码中不能存在多行空行
tab键不能使用，必须换成两个空格
代码中不能存在声明了但未使用的变量
 
### 环境搭建

  ***CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如不了解，可先使用`<script>`方式引入vue库。***
  
> **全局安装 vue-cli，如果已经安装可以忽略**

   `$ npm install --global vue-cli`

> **创建一个基于 webpack 模板的新项目,在指定的路径下执行如下指令**
    
   `$ vue init webpack sample`

   ![image](C:\Users\amsterdam\Desktop\vue-cli.png) 

  1. Project name (sample)  --> 项目名称，可以自己指定，也可直接回车，按照括号中默认名字（注意这里的名字不能有大写字母，如果有会报错Sorry, name can no longer contain capital letters）
  2. Project description (A Vue.js project)  --> 项目描述，也可直接点击回车，使用默认名字 
  3. Author (........)  --> 作者
  4. Use ESLint to lint your code? (Y/n)  --> 是否使用ESLint管理代码(个人项目可跳过)
  5. Setup unit tests with Karma + Mocha? (Y/n) --> 是否安装单元测试
  6. Setup e2e tests with Nightwatch(Y/n)?   --> 是否安装e2e测试

> **安装依赖，进入新建的项目目录，即可执行安装**
    
    ```
    $ cd sample
    $ npm install
    $ npm run dev
    ```
### 文件配置

***可根据项目需要自行调整目录结构***
```
  ├── build                      // 构建相关  
  ├── config                     // 配置相关
  ├── dist                       // 打包目录
  ├── node_modules               // npm 加载的项目依赖模块
  ├── src                        // 源代码
  │   ├── api                    // 所有请求
  │   ├── assets                 // 主题 字体等静态资源
  │   ├── components             // 全局公用组件
  │   ├── directive              // 全局指令
  │   ├── filtres                // 全局filter
  │   ├── mock                   // mock测试数据
  │   ├── router                 // 路由
  │   ├── store                  // 全局store管理（vuex）
  │   ├── styles                 // 全局样式
  │   ├── test                   // 测试调试
  │   ├── utils                  // 全局公用方法
  │   ├── view                   // view
  │   ├── App.vue                // 入口页面
  │   └── main.js                // 入口 加载组件 初始化等
  ├── static                     // 静态资源目录
  ├── .babelrc                   // babel-loader 配置
  ├── eslintrc.js                // eslint 配置项
  ├── .gitignore                 // git 忽略项
  ├── favicon.ico                // favicon图标
  ├── index.html                 // html模板
  └── package.json               // package.json
```
修改src/App.vue

```html
<!-- 展示模板 -->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
  </div>
</template>
 
<script>
// 导入组件
import Hello from './components/Hello'
 
export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>
<!-- 样式代码 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```
修改src/commponents/Hello.vue
```vue
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
 
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎使用！'
    }
  }
}
</script>
```
重新打开页面 http://localhost:8080/,即可看到修改后的结果

