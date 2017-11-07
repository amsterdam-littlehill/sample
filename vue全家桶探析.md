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
&#160; &#160; &#160; &#160;前端技术趋势是前后端分离，组件化，各种前端框架、组件层出不穷，作为一名技术工种，了解学习前端新技术，有助于打破思维壁障。以[es6](https://leanpub.com/understandinges6/read) ([es6浏览器支持情况](https://kangax.github.io/compat-table/es6/))举例，作为javascript新标准，其目标就是可以编写大型复杂应用。
由于是后端转前端，最大的变化是前后端思想的变化，现在的前端不再是以前会html、css、javascript就够了，需要的技术栈需要快速更新。
[image](C:\Users\amsterdam\Desktop\fonts_compare.png) 

&#160; &#160; &#160; &#160;前端对JS的发展现状的关注点

&#160; &#160; &#160; &#160;1. 代码风格（JS预编译语言）

&#160; &#160; &#160; &#160;2. 前端框架

&#160; &#160; &#160; &#160;3. 状态管理

&#160; &#160; &#160; &#160;4. API层

&#160; &#160; &#160; &#160;5. 全栈框架

&#160; &#160; &#160; &#160;6. 测试框架

&#160; &#160; &#160; &#160;7. CSS 构建工具/预处理器

&#160; &#160; &#160; &#160;8. 构建工具

&#160; &#160; &#160; &#160;9. 移动端框架

&#160; &#160; &#160; &#160;10. 新特性

> 代码风格

&#160; &#160; &#160; &#160;ES6成为了新的标准

> 前端框架

&#160; &#160; &#160; &#160;React最热，Vue居第二

> 状态管理

&#160; &#160; &#160; &#160;Redux最火,Flux使用最广泛

> API层

&#160; &#160; &#160; &#160;REST APIs 最广泛适用

> 全栈框架

&#160; &#160; &#160; &#160;最主流的是Meteor和MEAN

> 测试框架

&#160; &#160; &#160; &#160;最主流的是Mocha和Jasmine

> CSS 构建工具/预处理器

&#160; &#160; &#160; &#160;1. SASS/SCSS是主导
&#160; &#160; &#160; &#160;2. CSS Modules 值得一试

> 构建工具

&#160; &#160; &#160; &#160;1. Webpack 和 Gulp最受欢迎

&#160; &#160; &#160; &#160;2. Grunt 已经过气了

> 新特性

&#160; &#160; &#160; &#160;1. 服务器端渲染

&#160; &#160; &#160; &#160;通过服务器端渲染可以直接把生成好的页面内容发送到客户端，由此你可以提高应用的性能，改善交互，并且也顺带解决了SEO和可访问性的问题。

&#160; &#160; &#160; &#160;2. Code splitting代码拆分/按需加载 

&#160; &#160; &#160; &#160;Code splitting 可以将你的代码拆分，只在客户端加载真正需要的使用的代码，由此可以极大地提高性能。

&#160; &#160; &#160; &#160;3. Optimistic Updates即时更新

&#160; &#160; &#160; &#160;通过Optimistic Updates技术，客户端可以无需等待服务器的响应，直接显示出交互的结果，之后再处理服务器与客户端直接不同步的数据。
    
&#160; &#160; &#160; &#160;4. Hot Module Reloading模块热重载

&#160; &#160; &#160; &#160;修改代码之后无需刷新浏览器页面，马上就能看到改变后的效果
    


### 关键技术


#### MVVM & vue

&#160; &#160; &#160; &#160;Vue.js (读音 /vjuː/，类似于 view) , **MVVVM**框架（Model-View-ViewMode分层）
> &#160; &#160; &#160; &#160;在前端页面中，把Model用纯JavaScript对象表示，View负责显示，两者做到了最大限度的分离。把Model和View关联起来的就是ViewModel。ViewModel负责把Model的数据同步到View显示出来，还负责把View的修改同步回Model。
  
1. Vue核心库只关注视图层，可避免尽量不操作dom元素

2. 提供了响应式 (Reactive) 和组件化 (Composable) 的视图组件。

3. 基于 HTML 的模板使得将已有的应用逐步迁移到 Vue 更为容易

4. 可以使用其他模板预处理器 比如 **Pug**

   .....
   
前置要求：
1. HTML的基础知识，写前端页面的结构代码完全没有问题。
2. CSS的基础知识，最好了解CSS3的知识。
3. Javascript的基础知识，对基本语法掌握
4. node.js初级知识，只需要会npm的使用和项目初始化就可以了
   
> 在这里不做单独的vue 单独安装，可自行按官方api自行练习或参照本例中的demo
 
#### [webpack](https://webpack.js.org/concepts/)

&#160; &#160; &#160; &#160;WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。
  
&#160; &#160; &#160; &#160;把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。
  
&#160; &#160; &#160; &#160;**一个常见的`webpack`配置文件**
  
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

&#160; &#160; &#160; &#160;用来识别 ECMAScript 并且按照规则给出报告的代码检测工具,使用它可以避免低级错误和统一代码的风格。

&#160; &#160; &#160; &#160;vue-cli脚手架创建的默认eslint规则：

&#160; &#160; &#160; &#160;代码末尾不能加分号 

&#160; &#160; &#160; &#160;代码中不能存在多行空行

&#160; &#160; &#160; &#160;tab键不能使用，必须换成两个空格

&#160; &#160; &#160; &#160;代码中不能存在声明了但未使用的变量

 
#### axios
 
&#160; &#160; &#160; &#160;Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
 
 特点：
 - 从浏览器中创建 XMLHttpRequests
 - 从 node.js 创建 http 请求
 - 支持 Promise API
 - 拦截请求和响应
 - 转换请求数据和响应数据
 - 取消请求
 - 自动转换 JSON 数据
 - 客户端支持防御 XSRF
 
 eg:
 
 ```javascript
// 1.执行 GET 请求
// 为给定 ID 的 user 创建请求
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// 可选地，上面的请求可以这样做
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  //2. 执行post请求
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Stone'
})
 .then(function (response) {
     console.log(response);
})
 .catch(function (error) {
     console.log(error);
});
```
####  vuex


### CLI环境搭建

***&#160; &#160; &#160; &#160;CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如不了解，可先使用`<script>`方式引入vue库。***
  
***&#160; &#160; &#160; &#160;安装vue-cli的前提是你已经安装了npm，安装npm你可以直接下载node的安装包进行安装。***
  
***&#160; &#160; &#160; &#160;nodejs@6.10.3及以上稳定版本***

> **全局安装 vue-cli，如果已经安装可以忽略**

   `$ npm install --global vue-cli`

> **创建一个基于 webpack 模板的新项目,在指定的路径下执行如下指令**
    
   `$ vue init webpack sample`
    
    vue init <template-name> <project-name>

    <template-name>：表示模板名称，vue-cli官方为我们提供了5种模板，

    webpack-一个全面的webpack+vue-loader的模板，功能包括热加载，linting,检测和CSS扩展。
    
    webpack-simple-一个简单webpack+vue-loader的模板，不包含其他功能，让你快速的搭建vue的开发环境。
    
    browserify-一个全面的Browserify+vueify 的模板，功能包括热加载，linting,单元检测。
    
    browserify-simple-一个简单Browserify+vueify的模板，不包含其他功能，让你快速的搭建vue的开发环境。
    
    simple-一个最简单的单页应用模板。
    

   [image](C:\Users\amsterdam\Desktop\vue-cli.png) 

  1. Project name (sample)  --> 项目名称，可以自己指定，也可直接回车，按照括号中默认名字（注意这里的名字不能有大写字母，如果有会报错Sorry, name can no longer contain capital letters）
  
  2. Project description (A Vue.js project)  --> 项目描述，也可直接点击回车，使用默认名字 
  
  3. Author (........)  --> 作者
 
  4. Use ESLint to lint your code? (Y/n)  --> 是否使用ESLint管理代码(个人项目可跳过)
  
  5. Setup unit tests with Karma + Mocha? (Y/n) --> 是否安装单元测试
  
  6. Setup e2e tests with Nightwatch(Y/n)?   --> 是否安装e2e测试

> **安装依赖，进入新建的项目目录，即可执行安装**
    
    ```
    $ cd sample   //进入项目根目录
    $ npm install //安装我们的项目依赖包
    $ npm run dev //开发模式下运行我们的程序
    ```
### 文件配置

***可根据项目需要自行调整目录结构***

```
  ├── build                      // webpack构建相关  
  |   |-- build.js                     // 生产环境构建代码
  |   |-- check-version.js             // 检查node、npm等版本
  |   |-- dev-client.js                // 热重载相关
  |   |-- dev-server.js                // 构建本地服务器
  |   |-- utils.js                     // 构建工具相关
  |   |-- webpack.base.conf.js         // webpack基础配置
  |   |-- webpack.dev.conf.js          // webpack开发环境配置
  |   |-- webpack.prod.conf.js         // webpack生产环境配置
  ├── config                     // 配置相关
  |   |-- dev.env.js                   // 开发环境变量
  |   |-- index.js                     // 项目一些配置变量
  |   |-- prod.env.js                  // 生产环境变量
  |   |-- test.env.js                  // 测试环境变量
  ├── dist                       // webpack build打包目录
  ├── node_modules               // npm 加载的项目依赖模块
  ├── src                        // 源代码
  │   ├── api                    // 所有请求
  │   ├── assets                 // 主题 字体等静态资源
  │   ├── components             // 全局公用组件
  │   ├── directive              // 全局指令 *
  │   ├── filtres                // 全局filter *
  │   ├── mock                   // mock测试数据 *
  │   ├── router                 // 路由 *
  │   ├── store                  // 全局store管理（vuex） *
  │   ├── styles                 // 全局样式 *
  │   ├── test                   // 测试调试 *
  │   ├── utils                  // 全局公用方法 *
  │   ├── view                   // view *
  │   ├── App.vue                // 入口页面
  │   └── main.js                // 入口 加载组件 初始化等
  ├── static                     // 静态资源目录
  ├── .babelrc                   // ES6语法编译配置 babel-loader 
  ├── eslintrc.js                // eslint 配置项
  |── .editorconfig              // 定义代码格式
  ├── .gitignore                 // git 忽略项
  ├── favicon.ico                // favicon图标
  ├── index.html                 // html模板 项目入口
  └── package.json               // package.json 项目基本信息
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

&#160; &#160; &#160; &#160;重新打开页面 `http://localhost:8080/`,即可看到修改后的结果

### 开发方式

### 附录 

### vue 基础

#### 安装Vue的控制台调试工具

&#160; &#160; &#160; &#160;[vue-devtools](https://github.com/vuejs/vue-devtools#vue-devtools)是一款基于chrome/Firefox/Safari游览器的插件，用于调试vue应用，这可以极大地提高我们的调试效率。

#### 基础指令

> v-if  v-else  v-show 指令

&#160; &#160; &#160; &#160;v-if:是vue 的一个内部指令,用于进行条件渲染

&#160; &#160; &#160; &#160;v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别。

&#160; &#160; &#160; &#160;v-show 调整css中display属性，DOM已经加载，只是CSS控制没有显示出来。

区别：

v-if 控制的dom元素不会加载，就是说dom结构上不会出现。可以减轻服务器的压力，在需要时加载。

v-show 会加载到dom树上，只是CSS不显示。可以使客户端操作更加流畅。
 

> v-for指令

&#160; &#160; &#160; &#160;v-for指令是循环渲染一组data中的数组，v-for 指令需要以 item in items 形式的特殊语法，items 是源数据数组并且item是数组元素迭代的别名。
基本用法：
```html
<div id="app">
<ul>
  <li v-for="fruit in fruits">{{fruit}}</li>
</ul>
</div>
<script>
new Vue({
    el: '#app',
    data () {
      return {
        fruits: ['apple', 'orange', 'banana', 'pear', 'peach']
      }
    }
  })
</script>
```

> v-text & v-html 

&#160; &#160; &#160; &#160;基本用法：
```html
<div id="box">
  <p>{{msg}}</p>
  <p v-text="msg"></p>
  <p v-html="msg"></p>
  <p>输入html</p>
  <p v-html="msg2"></p>
</div>
<script>
  new Vue({
    el: '#box',
    data: function () {
      return {
        msg: 'welcome',
        msg2: '<p>hello world</p>'
      }
    }
  })
</script>

```
&#160; &#160; &#160; &#160;使用{{msg}}插值有一个弊端，网速慢或者页面语法错误的时候，页面会出现{{msg}}的文字

&#160; &#160; &#160; &#160;使用v-text&v-html可以有效解决该问题

&#160; &#160; &#160; &#160;区别:

&#160; &#160; &#160; &#160;{{}} 会将数据解释为存文本

&#160; &#160; &#160; &#160;v-text 输出文本

&#160; &#160; &#160; &#160;v-html 可用于输出html

> v-on：绑定事件监听器

&#160; &#160; &#160; &#160;v-on 指令，它用于监听 DOM 事件，eg:click,hover等

&#160; &#160; &#160; &#160;v-on:func，可简写为@func

```html

<div id="app">
  <p v-text="count"></p>
  <button v-on:click="add">加1</button>
  <button @click="sub">减1</button>
</div>
<script>
  new Vue({
    el: '#app',
    data () {
      return {
        count: 1
      }
    },
    methods: {
      add: function () {
        this.count += 1
      },
      sub: function () {
        this.count -= 1
      }
    }
  })
</script>
```

> v-model指令

&#160; &#160; &#160; &#160;v-model:在表单控件元素上创建双向数据绑定

> v-bind 指令

&#160; &#160; &#160; &#160;v-bind:响应式地更新 HTML 属性：

&#160; &#160; &#160; &#160;用法：
```html

<div id="app">
  <a href="http://www.baidu.com">百度</a>
  <a v-bind:href="url">百度2</a>
  <p>v-bind缩写 :behavior</p>
  <image :src="imgSrc"></image>
  <hr>
  <p>延伸用法：</p>
  <p>1、直接绑定class样式</p>
  <div :class="className">1、绑定red</div>
  <p>2、绑定classA并进行判断，在isOK为true时显示样式，在isOk为false时不显示样式。</p>
  <div :class="{classA:isOk}">2、绑定class中的判断</div>
  <p> 3、绑定class中的数组</p>
  <div :class="[classA,classB]">3、绑定class中的数组</div>
  <p>4、绑定class中使用三元表达式判断</p>
  <div :class="isOk?classA:classB">4、绑定class中的三元表达式判断</div>
  <p>5、绑定style</p>
  <div :style="{color:red,fontSize:font}">5、绑定style</div>
  <p>6、用对象绑定style样式</p>
  <div :style="styleObject">6、用对象绑定style样式</div>
</div>
<style>
  .red {
    color: yellow;
  }

  font {
    font-size: 19px;
  }

  .classA {
    color: #1c8de0;
    font-size: 18px;
  }

  .classB {
    color: #00ff00;
    font-size: 16px;
  }
</style>
<script>
  new Vue({
    el: '#app',
    data () {
      return {
        url: 'http://www.baidu.com',
        imgSrc: 'https://cn.vuejs.org/images/logo.png',
        className: 'red',
        classA: 'classA',
        classB: 'classB',
        isOk: true,
        red: 'red',
        font: 'font',
        styleObject: {
          width: '200px',
          height: '30px',
          backgroundColor: 'blue'
        }
      }
    }
  })
</script>
```

> 其他内部指令(v-pre & v-cloak & v-once)

&#160; &#160; &#160; &#160;v-pre指令： 跳过这个元素和它的子元素的编译过程，直接输出原始值。就是在标签中加入v-pre就不会输出vue中的data值了。

&#160; &#160; &#160; &#160;v-cloak指令：保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。

&#160; &#160; &#160; &#160;v-once指令：只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

#### 全局API

&#160; &#160; &#160; &#160;在构造器外部用vue提供给我们的API函数来定义新的功能 

> Vue.directive 自定义指令

**&#160; &#160; &#160; &#160;用法**：

```javascript

Vue.directive('foucs',function(el,binding,vnode){
  el.style='color:'+binding.value;
});
```
**&#160; &#160; &#160; &#160;参数含义**
&#160; &#160; &#160; &#160;el: 指令所绑定的元素，可以用来直接操作DOM。

&#160; &#160; &#160; &#160;binding:  一个对象，包含指令的很多信息。

&#160; &#160; &#160; &#160;vnode: Vue编译生成的虚拟节点。

&#160; &#160; &#160; &#160;oldVnode:上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

**&#160; &#160; &#160; &#160;自定义指令的生命周期**

&#160; &#160; &#160; &#160;自定义指令有五个生命周期（也叫钩子函数），分别是 bind,inserted,update,componentUpdated,unbind

&#160; &#160; &#160; &#160;`bind`:只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个绑定时执行一次的初始化动作。

&#160; &#160; &#160; &#160;`inserted`:被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于document中）。

&#160; &#160; &#160; &#160;`update`:被绑定于元素所在的模板更新时调用，而无论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。

&#160; &#160; &#160; &#160;`componentUpdated`:被绑定元素所在模板完成一次更新周期时调用。

&#160; &#160; &#160; &#160;`unbind`:只调用一次，指令与元素解绑时调用。

```javascript
var vm = new Vue({
    bind: function () {//被绑定
      console.log('1 - bind')
    },
    inserted: function () {//绑定到节点
      console.log('2 - inserted')
    },
    update: function () {//组件更新
      console.log('3 - update')
    },
    componentUpdated: function () {//组件更新完成
      console.log('4 - componentUpdated')
    },
    unbind: function () {//解绑
      console.log('1 - bind')
    }
  })
```
> Vue.extend

&#160; &#160; &#160; &#160;使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象

&#160; &#160; &#160; &#160;语法：`Vue.extend( options )`

```javascript
/*创建构造器*/
  var authorExtend = Vue.extend({
    template: '<p>{{firstName}} - {{lastName}} : {{alias}}</p>',
    data() {
      return {
        firstName: '张',
        lastName: '三丰',
        alias: '张真人'
      }
    }
  })
  /*挂载到div#app上*/
  new authorExtend().$mount('#app')
  new authorExtend().$mount('app')
```

> Vue.set

&#160; &#160; &#160; &#160;语法：`Vue.set( target, key, value )` 或者 `vm.$set( target, key, value )`

&#160; &#160; &#160; &#160;设置对象的属性。如果对象是响应式的，确保属性被创建后也是响应式的，同时触发视图更新。这个方法主要用于避开 Vue 不能检测属性被添加的限制。

&#160; &#160; &#160; &#160;在构造器外部操作构造器内部的数据、属性或者方法。比如在vue构造器内部定义了一个count为1的数据，我们在构造器外部定义了一个方法，要每次点击按钮给值加1.就需要用到Vue.set。

&#160; &#160; &#160; &#160;由于Javascript的限制，Vue不能自动检测以下变动的数组。

&#160; &#160; &#160; &#160;- 当你利用索引直接设置一个项时，vue不会为我们自动更新。

&#160; &#160; &#160; &#160;- 当你修改数组的长度时，vue不会为我们自动更新。

```html
<ol>
    <li v-for="fruit in fruits">{{fruit.ch}}:{{fruit.en}}</li>
</ol>
<button onclick="mod()">修改</button>
<button onclick="mod1()">修改</button>
<button onclick="mod2()">修改</button>

<script >
 function mod () {
    Vue.set(fruits, 2, {en: 'peach', ch: '桃子'})
  }

  function mod1 () {
    vm.fruits[2].ch = '桃子'
    vm.fruits[2].en = 'peach'
  }

  function mod2 () {
    fruits[2].ch = '桃子'
    fruits[2].en = 'peach'
  }

  //1.创建构造器外部数据
  var fruits = [
    {
      en: 'banana',
      ch: '香蕉'
    },
    {
      en: 'orange',
      ch: '橘子'
    },
    {
      en: 'apple',
      ch: '苹果'
    }]
  //2.创建Vue实例，引用外部数据
  var vm = new Vue({
    el: '#app',
    data: {
      fruits: fruits
    }
  })
</script>
```

&#160; &#160; &#160; &#160;受现代 JavaScript 的限制 (以及废弃 Object.observe)，Vue 不能检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化过程，所以属性必须在 data 对象上存在才能让 Vue 转换它，这样才能让它是响应的。

&#160; &#160; &#160; &#160;要用Vue.set(fruits,1,{en: 'peach', ch: '桃子'})来设置改变，vue才会给我们自动更新，这就是Vue.set存在的意义。

> Vue声明周期（钩子函数） 

&#160; &#160; &#160; &#160;每个Vue实例在被创建之前都要经过一系列的初始化过程。Vue一共有10个生命周期函数，我们可以利用这些函数在vue的每个阶段都进行操作数据或者改变内容。

![Vue声明周期](https://cn.vuejs.org/images/lifecycle.png)

&#160; &#160; &#160; &#160;-  `beforeCreate` 在实例初始化之后；

&#160; &#160; &#160; &#160;-  `created` 在实例创建完成后被立即调用；

&#160; &#160; &#160; &#160;-  `beforeMount` 在挂载开始之前被调用；

&#160; &#160; &#160; &#160;-  `mounted` 挂载到实例；

&#160; &#160; &#160; &#160;-  `beforeUpdate` 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前；

&#160; &#160; &#160; &#160;-  `updated` 数据更新后；

&#160; &#160; &#160; &#160;-  `activated` keep-alive 组件激活时调用；

&#160; &#160; &#160; &#160;-  `deactivated` keep-alive 组件停用时调用；

&#160; &#160; &#160; &#160;-  `beforeDestroy` 实例销毁之前调用。在这一步，实例仍然完全可用；

&#160; &#160; &#160; &#160;-  `destroyed` Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

> 模板template

&#160; &#160; &#160; &#160;创建方式：

&#160; &#160; &#160; &#160;1. 字符串

&#160; &#160; &#160; &#160;模板被定义为一个字符串

```javascript
var app=new Vue({
     el:'#app',
     data:{
         message:'hello Vue!'
      },
     template:'<h1 style="color:red">我是选项模板</h1>'
})
```

&#160; &#160; &#160; &#160;2. 模板字符串（Template literals）

&#160; &#160; &#160; &#160;通过ES6的模板字符串（反引号）语法，在定义模板时可以直接换行

```javascript

 var app=new Vue({
     el:'#app',
     data:{
         message:'hello Vue!'
      },
     template:`
        <h1 style="color:red">我是选项模板</h1>
     `
})
```

&#160; &#160; &#160; &#160;3. X-Templates

&#160; &#160; &#160; &#160;script标签需要添加text/x-template类型作为标记，并且在定义组件时，通过id来引用。

```html
 <script type="x-template" id="demo3">
        <h2 style="color:red">我是script标签模板</h2>
 </script>

 <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                message:'hello Vue!'
            },
            template:'#demo3'
        })
 </script>
```
> 组件

&#160; &#160; &#160; &#160;1. 全局组件

&#160; &#160; &#160; &#160;使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。

&#160; &#160; &#160; &#160;语法：`Vue.extend({template:})`
```html

<div id="mount-point"></div>
<script >
// 创建构造器
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#mount-point')

</script>
```

&#160; &#160; &#160; &#160;`Vue.component('aaa',aaa);`注册或获取全局组件。注册还会自动使用给定的id设置组件的名称

```html
<div id="app">
    <ddd></ddd>
    <fff></fff>
</div>
<script >

  // 注册组件，传入一个扩展过的构造器
  Vue.component('ddd', Vue.extend({template: '<h3>我是组件ddd</h3>'}))
  // 注册组件，传入一个选项对象 (自动调用 Vue.extend)
  Vue.component('fff', {template: '<h3>我是组件fff</h3>'})

</script>
```

2. 局部组件

&#160; &#160; &#160; &#160;局部注册的组件只能在组件注册的作用域里进行使用，其他作用域使用无效。

```html

<div id="app">
      <panda></panda>
    </div>
 
    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            components:{
                "panda":{
                    template:`<div style="color:red;">局部注册的panda标签</div>`
                }
            }
        })
    </script>
```
>使用 Prop 传递数据 

&#160; &#160; &#160; &#160;props选项就是设置和获取标签上的属性值

&#160; &#160; &#160; &#160;1. 定义属性并获取属性值

```html
<child message="hello!"></child>
<script >
Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 就像 data 一样，prop 也可以在模板中使用
  // 同样也可以在 vm 实例中通过 this.message 来使用
  template: '<span>{{ message }}</span>'
})
</script>
```
&#160; &#160; &#160; &#160;2. 当使用的不是字符串模板时，camelCase (驼峰式命名) 的 prop 需要转换为相对应的 kebab-case (短横线分隔式命名)：

```html
<!-- 在 HTML 中使用 kebab-case -->
<child my-message="hello!"></child>
<script >
Vue.component('child', {
  // 在 JavaScript 中使用 camelCase
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})
</script>
```

&#160; &#160; &#160; &#160;3. 动态属性：使用v-bind将prop绑定到父组件的数据

```html
<div>
  <input v-model="someWhere">
  <br>
  <panda v-bind:from-where="someWhere"></panda>
</div>
<script >
var vm = new Vue({
    el: '#app',
    data(){
      return{
        someWhere:'四川成都'
      }
    },
    components: {
      'panda': {
        /*子组件接收*/
        template: `<div style="color:red;">熊猫来自 {{ fromWhere }}.</div>`,
        /*父组件向子组件传递数据*/
        props: ['fromWhere']
      }
    }
  })
</script>
```
> 父子组件

```html
<div id="app">
  <panda :who="whoName"></panda>
</div>
<script>

  /*子组件*/
  var cityComponent = {
    template: `<p style="color:green">{{fromWhere}}</p>`,
    props: ['fromWhere']

  }
  /*父组件*/
  /*在构造器外部声明局部组件*/
  var pandaComponent = {
    data () {
      return {
        someWhere: '中国四川'
      }
    },
    template: `
    <div>
      <p style="color:red">{{who}}</p>
      来自
      <city :from-where="someWhere"></city>
    </div>
    `,
    components: {
      'city': cityComponent,
    },
    props: ['who']
  }

  var vm = new Vue({
    el: '#app',
    data () {
      return {
        whoName: '大熊猫'
      }
    },
    components: {
      'panda': pandaComponent
    },

  })
</script>
```

> 动态组件：通过使用保留的 <component> 元素，动态地绑定到它的 is 特性，我们让多个组件可以使用同一个挂载点，并动态切换：

```html

<div id="app">
  <component v-bind:is="who"></component>
  <select v-model="that" @change="toggleTabs">
    <option disabled >请选择</option>
    <option value="A" selected>A</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </select>
</div>
<script>
  /*声明组件*/
  var componentA = {
    template: `<div style="color: red">I'm componentA</div>`
  }
  var componentB = {
    template: `<div style="color: #1c8de0">I'm componentB</div>`
  }
  var componentC = {
    template: `<div style="color: blue">I'm componentC</div>`
  }
  var vm = new Vue({
    el: '#app',
    data () {
      return {
        who: 'componentB',
        that: '',
      }
    },
    methods: {
      toggleTabs: function () {
        debugger
        if (this.that == 'A') {
          this.who = 'componentA'
        } else if (this.that == 'B') {
          this.who = 'componentB'
        } else if (this.that == 'C') {
          this.who = 'componentC'
        } else {
          this.who = 'componentA'
        }
      }
    },
    components: {
      componentA, componentB, componentC
    }
  })
</script>
```
#### 选项

> propsData

&#160; &#160; &#160; &#160;在使用全局扩展的方式创建实例时进行数据传递 props。主要作用是方便测试

```html

<header></header>
<script>
  /*使用扩展*/
  var header_a = Vue.extend({
    template: `<p>{{message}}--{{from}}</p>>`,
    data () {
      return {
        message: 'hello world'
      }
    },
    /*在扩展实例中使用`from`接收*/
    props: ['from']
  })
  /*使用propsData进行之传递*/
  new header_a({propsData: {from: 'China'}}).$mount('header')
</script>
```

> computed计算属性

&#160; &#160; &#160; &#160;computed 的作用主要是对原数据进行改造输出

```html

<div id="app">
        {{newPrice}}
</div>
 
<script>
    var app=new Vue({
        el:'#app',
        data:{
            price:100
        },
        /*使用computed对原数据进行格式化*/
        computed:{
            newPrice:function(){
                return this.price='￥' + this.price + '元';
            }
        }
    })
</script>
```

> methods

&#160; &#160; &#160; &#160;methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例
注意不能使用箭头函数，因为箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined

&#160; &#160; &#160; &#160;调用方式
&#160; &#160; &#160; &#160;1. 外部通过`vm.event()`调用vue实例方法
&#160; &#160; &#160; &#160;2. 子组件使用`使用 v-on 的修饰符 .native`触发当前实例上的原生方法
&#160; &#160; &#160; &#160;3. 父组件使用`v-on`监听子组件方法，子组件使用`vm.$emit( event, […args] )`触发当前实例上的事件。附加参数都会传给监听器回调

```html
<div id="app">
  {{ a }}
  <p>
    <!--调用实例上的事件-->
  <p>1.调用实例方法:
    <button @click="add">加1</button>
  </p>
  <!--含参调用-->
  <p>2.含参调用：
    <button @click="add2(2)">加2</button>
  </p>
  <!--给组件绑定原生事件-->
  <p>3.子组件调用父组件原声方法：
    <btn @click.native="add2(2)"></btn>
  </p>
  <!--父组件监听子组件方法，子组件使用$emit触发父组件事件-->
  <p>4.子组件调用父组件方法：
    <btn2 @suncalladd="add2"></btn2>
  </p>
</div>
<p>5.外部调用vue实例方法：
  <button onclick="app.add2(3)">外部加3</button>
</p>
<script type="text/javascript">

  var btn = {
    template: `<button>使用组件加3</button>`,
  }
  var btn2 = {
    template: `<button  v-on:click="sonAdd(3)">使用组件加3</button>`,
    methods: {
      sonAdd: function (num) {
        this.$emit('suncalladd', num)
      }
    }
  }
  var app = new Vue({
    el: '#app',
    data: {
      a: 1
    },
    components: {btn, btn2},
    methods: {
      add: function () {
        this.a++
      },
      add2: function (num) {
        this.a += num
      }

    }
  })
</script>
```

>watch

&#160; &#160; &#160; &#160;语法：`{ [key: string]: string | Function | Object }`

&#160; &#160; &#160; &#160;用于观察Vue实例上的数据变动。对应一个对象，键是观察表达式，值是对应回调。值也可以是方法名，或者是对象，包含选项。键的值一旦发生变化，就调用引号里的方法，从而达到change事件监听的效果。

&#160; &#160; &#160; &#160;可以在Vue实例中增加`watch`选项，也可在在外部对Vue实例设置监听。`vm.$watch`

```html
<div id="app">
  <div class="divWarp">
    <p>今日温度：{{temperature}}°C</p>
    <p>穿衣建议:{{this.suggestion}}</p>
    <p>
      <button @click="add">添加温度</button>
      <button @click="reduce">减少温度</button>
    </p>
  </div>
  <div class="divWarp">
    <p>a:
      <button v-text="a" @click="mod('a',$event)"></button>
    </p>
    <p>b:
      <button v-text="b" @click="mod('b',$event)"></button>
    </p>
    <p>c:
      <button v-text="c" @click="mod('c',$event)"></button>
    </p>
    <p>d:
      <button v-text="d" @click="mod('d',$event)"></button>
    </p>

  </div>
</div>
<script>
  var suggestion = ['T恤短袖', '夹克长裙', '棉衣羽绒服']
  var app = new Vue({
    el: '#app',
    data: {
      temperature: 14,
      suggestion: '夹克长裙',
      a: 1,
      b: 1,
      c: 1,
      d: 1
    },
    methods: {
      add: function () {
        this.temperature += 5
      },
      reduce: function () {
        this.temperature -= 5
      },
      mod: function (num, event) {
        if (num === 'a') {
          this.a++
        } else if (num === 'b') {
          this.b++
        } else if (num === 'c') {
          this.c++
        } else {
          this.d++
        }
        console.log(event)
      },
      someMethod: function (val, oldVal) {
        console.log('b:' + oldVal + '-->' + val)
      }
    },
    watch: {
      a: function (val, oldVal) {
        console.log('a:' + oldVal + '-->' + val)
      },
      // 方法名
      b: 'someMethod',
      // 深度 watcher
      c: {
        handler: function (val, oldVal) {console.log('c:' + oldVal + '-->' + val)},
        deep: true
      },
      // 该回调将会在侦听开始之后被立即调用
      d: {
        handler: function (val, oldVal) { console.log('d:' + oldVal + '-->' + val)},
        immediate: true
      }
    }
  })
  /*使用实例属性对数据进行监听*/
  app.$watch('temperature', function (newVal, oldVal) {
    if (newVal >= 26) {
      this.suggestion = suggestion[0]
    } else if (newVal < 26 && newVal >= 0) {
      this.suggestion = suggestion[1]
    } else {
      this.suggestion = suggestion[2]
    }

  })

</script>
```

> Mixins 混入选项

&#160; &#160; &#160; &#160;分发 Vue 组件中可复用功能

&#160; &#160; &#160; &#160;用途：
&#160; &#160; &#160; &#160;1. 在已经写好了的构造器，需要增加方法时，这时用混入会减少源代码的污染。

&#160; &#160; &#160; &#160;2. 很多地方都会用到的公用方法，用混入的方法可以减少代码量，实现代码重用。

&#160; &#160; &#160; &#160;组件和mixins的调用顺序：

&#160; &#160; &#160; &#160;从执行的先后顺序来说，都是混入的先执行，然后构造器里的再执行，需要注意的是，这并不是方法的覆盖，而是被执行了两边。

&#160; &#160; &#160; &#160;1. 当组件和混合对象含有同名选项时

&#160; &#160; &#160; &#160;  a. 同名钩子函数将混合为一个数组，因此都将被调用，并且混合对象的钩子将在组件自身钩子之前调用
  
&#160; &#160; &#160; &#160;  b. 值为对象的选项，例如methods,components和directives，将被混合为同一个对象。两个对象键名冲突时，取组件对象的键值对。
  
&#160; &#160; &#160; &#160;2. 全局API混入

&#160; &#160; &#160; &#160;一旦使用全局混合对象，将会影响到所有之后创建的Vue实例。并且执行顺序要前于混入和组件自身的方法。

```html
<div id="app">
  {{num}}
  <p>
    <button @click="add">加1</button>
  </p>
</div>
<script>
  /*定义全局混合*/
  Vue.mixin({
    updated () {
      console.log('0.全局混合对象updated钩子函数被调用，数据发生变化')
    },
    created () {
      var myOption = this.$options.myOption
      if (myOption) {
        console.log('a:全局混合对象created钩子函数被调用' + myOption)
      }
    }
  })
  /*创建mixins混合对象*/
  var addMixins = {
    /*声明钩子函数*/
    /*同名钩子函数将混合为一个数组，因此都将被调用，并且混合对象的钩子将在组件自身钩子之前调用*/
    created () {
      var myOption = this.$options.myOption
      if (myOption) {
        console.log('b:混合对象created钩子函数被调用' + myOption)
      }
    },
    updated () {
      console.log('1.混合对象created钩子函数被调用，数据发生变化' + this.num)
    },
    methods: {
      add () {
        this.num++
        console.log('1.混入对象method:add()被调用')
      }
    }
  }
  var vm = new Vue({
    el: '#app',
    data () {
      return {num: 1}
    },
    created () {
      var myOption = this.$options.myOption
      if (myOption) {
        console.log('c:组件created钩子函数被调用' + myOption)
      }
    },
    methods: {
      add () {
        this.num++
        console.log('2.组件method:add()被调用')
      }
    },
    /*组件created钩子函数*/
    updated () {
      console.log('2.组件created钩子函数被调用，数据发生变化->' + this.num)
    },
    /*添加混入对象*/
    mixins: [addMixins],
    myOption: 'hello!'
  })
</script>
```
> extends

&#160; &#160; &#160; &#160;允许声明扩展另一个组件(可以是一个简单的选项对象或构造函数)，而无需使用 Vue.extend。这主要是为了便于扩展单文件组件。

&#160; &#160; &#160; &#160;这和 mixins 类似，区别在于，组件自身的选项会比要扩展的源组件具有更高的优先级。

&#160; &#160; &#160; &#160;扩展与混入的区别：

&#160; &#160; &#160; &#160;1. mixins里面的钩子要比组件本身的优先级高，比如都有created钩子，vue会先调用mixins里面的created然后调用组件本身的created
。extends继承来的方法优先级是在组件本身之后的。
   
&#160; &#160; &#160; &#160;2. extends只能继承一个,mixins可以多个

```html
<div id="app">
  {{num}}
  <p>
    <button @click="add">加1</button>
  </p>
</div>
<script>
  var bbb = {
    created () {
      console.log('0.扩展选项created钩子函数被调用')
    },
    methods: {
      add () {
        this.num++
        console.log('0.扩展选项add方法被调用')
      }
    }

  }
  var vm = new Vue({
    el: '#app',
    data () {
      return {
        num: 1
      }
    },
    created () {
      console.log('1.组件created钩子函数被调用')
    },
    methods: {
      add () {
        console.log('1.组件add方法被调用')
        return this.num++
      }
    },
    extends:bbb
  })
</script>
```
> delimiters模板转义()HTML插值定界符)

&#160; &#160; &#160; &#160;默认值：`["{{", "}}"]`

&#160; &#160; &#160; &#160;修改后：`['a','b']`， **a,b为插值符的开始和结尾**

```html
<div id="app1">
  <div class="divWarp">{{a}}</div>

</div>
<div id="app2">
  <div class="divWarp"> ${a}</div>

</div>
<script>
  let vm1 = new Vue({
    el: '#app1',
    data () {
      return {
        a: 1
      }
    }
  })
  let vm2 = new Vue({
    el: '#app2',
    data () {
      return {
        a: 1
      }
    },
    delimiters: ['${', '}']
  })
</script>
```
> 实例属性

&#160; &#160; &#160; &#160;实例就是在构造器外部操作构造器内部的属性选项或者方法。实例暴露了一些有用的实例属性与方法。这些属性与方法都有前缀 $，以便与代理的 data 属性区分

&#160; &#160; &#160; &#160;Vue 实例观察的数据对象：  `this.$data`

&#160; &#160; &#160; &#160;Vue 实例使用的根 DOM 元素：  `this.$el`

&#160; &#160; &#160; &#160;当前 Vue 实例的初始化选项： `this.$options`

&#160; &#160; &#160; &#160;当前组件树的根 Vue 实例：`this.$root`

....

> 实例方法

&#160; &#160; &#160; &#160;`vm.$mount([el])`:手动地挂载一个未挂载的实例。

&#160; &#160; &#160; &#160;`vm.$destroy()`:完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。

&#160; &#160; &#160; &#160;`vm.$forceUpdate()`:强制Vue 实例重新渲染

&#160; &#160; &#160; &#160;`vm.$nextTick([callback])`:将回调延迟到下次 DOM 更新循环之后执行

> 实例事件


&#160; &#160; &#160; &#160;`vm.$on(event,callback)`:监听当前实例上的自定义事件，事件由`vm.$emit`触发

&#160; &#160; &#160; &#160;`vm.$once(event,callback)`:监听一个自定义事件，但是只触发一次，在第一次触发之后移除监听器。

&#160; &#160; &#160; &#160;`vm.$of([event,callback])`:移除自定义事件监听器。

&#160; &#160; &#160; &#160;  - 如果没有提供参数，则移除所有的事件监听器；
  
&#160; &#160; &#160; &#160;  - 如果只提供了事件，则移除该事件所有的监听器；
  
&#160; &#160; &#160; &#160;  - 如果同时提供了事件与回调，则只移除这个回调的监听器。

&#160; &#160; &#160; &#160;`vm.$emit(event,[...args])`:触发当前实例上的事件。附加参数都会传给监听器回调。s

```html
<div id="app">
  {{msg}}
  <hr>
  {{num}} <br>
  <p>
    <button @click="add">+</button>
  </p>
</div>
<p>
  <button onclick="reduce()">-</button>
</p>

<p>
  <button onclick="reduceOnce()">-100</button>
</p>

<p>
  <button onclick="off()">关闭</button>
</p>
<script>
  let vm = new Vue({
    el: '#app',
    data () {
      return {
        msg: 'vue 实例事件',
        num: 1
      }
    },
    methods: {
      add () {
        this.num++
      }
    }
  })
  /*使用$on监听reduce事件，方法可执行多次*/
  vm.$on('reduce', function () {
    console.log('执行了减法')
    this.num--
  })
  /*使用$once监听reduceOnce事件，只能执行一次*/
  vm.$once('reduceOnce', function () {
    console.log('执行了once')
    this.num -= 100
  })
  function off () {
    /*移除事件*/
    vm.$off(['reduce', 'reduceOnce'])
  }
  function reduceOnce () {
    vm.$emit('reduceOnce')
  }

  /*使用$emit触发事件*/
  function reduce () {
    vm.$emit('reduce')
  }
</script>
```

### vue-router

vue-router是Vue.js官方的路由插件，它和vue.js是深度集成的，适合用于构建单页面应用。vue的单页面应用是基于路由和组件的，路由用于设定访问路径，并将路径和组件映射起来。传统的页面应用，是用一些超链接来实现页面切换和跳转的。在vue-router单页面应用中，则是路径之间的切换，也就是组件的切换。

>路由是什么

就是SPA（单页应用）的路径管理器。

> 为什么使用vue-router

用Vue作的都是单页应用，就相当于只有一个主的index.html页面，所以你写的<a></a>标签是不起作用的，你必须使用vue-router来进行管理。

#### 安装

如使用的是Vue_CLI,已包含Vue_router;

如使用script脚本引用，请[下载](https://unpkg.com/vue-router/dist/vue-router.js)

如使用其他模板，安装vue-router `npm install vue-router --save-dev`

#### 配置

> 配置介绍

`<router-link>`:组件支持用户在具有路由功能的应用中（点击）导航。 通过 to 属性指定目标地址，默认渲染成带有正确链接的 <a> 标签，可以通过配置 tag 属性生成别的标签.。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名。

>>-. 无论是 HTML5 history 模式还是 hash 模式，它的表现行为一致，所以，当你要切换路由模式，或者在 IE9 降级使用 hash 模式，无须作任何变动。
  
>>  -. 在 HTML5 history 模式下，router-link 会守卫点击事件，让浏览器不再重新加载页面。
  
>>  -. 当你在 HTML5 history 模式下使用 base 选项之后，所有的 to 属性都不需要写（基路径）了。



`<router-view>` 组件是一个 functional 组件，渲染路径匹配到的视图组件。<router-view> 渲染的组件还可以内嵌自己的 <router-view>，根据嵌套路径，渲染嵌套组件。

1. 基于vue-cli的路由配置

router/index.js


```vue

import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import Hello from '@/components/Hello'  //引入根目录下的Hello.vue组件
 
Vue.use(Router)  //Vue全局使用Router
 
export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //路由路径
      name: 'Hello',     //路由名称，
      component: Hello   //对应的组件模板
    }
  ]
})


``` 

2. 基于script标签引入vue-router.js

```javascript
const router = new VueRouter({
  [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})
```

>第一个路由页面

1. 基于vue_cli方式

    a. 在`src/components`目录下，新建 Index.vue 文件。
    
```vue
<template>
  <div class="index">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: 'vue demo index'
      }
    }
  }
</script>

```
   b. 在`router/index.js`文件的中引入Index组件,增加**Index**路由配置信息

```javascript

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/* 引入Index组件*/
import Index from '@/components/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/index',   //路由路径 /index
      name: 'Index',    //路由名称：Index
      component: Index  //对应的组件:Index.vue
    }
  ]
})
```
  c. 制作导航
    在`App.vue`中添加路由标签`router-link`
    
```vue
    <p>
       <router-link to="/">Home</router-link>
       <router-link to="/index">Index</router-link>
    </p>
```
  
2. 基于script标签引入vue-router

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>第一个单页应用</title>
  <link rel="stylesheet" href="http://bootswatch.com/flatly/bootstrap.css"/>
  <!--引入vue.js-->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!--引入vue-router.js-->
  <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
</head>
<body>
<div id="app">
  <div class="row">
    <div class="col-xs-offset-2 col-xs-8">
      <div class="page-header">
        <h2>Hello Vue-router</h2>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-2 col-xs-offset-2">
      <div class="list-group">
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link class="list-group-item" to="/home">Home</router-link>
        <router-link class="list-group-item" to="/about">About</router-link>
        <!-- vue 1.x版本
        <a class="list-group-item" v-link="{ path: '/home'}">Home</a>
        <a class="list-group-item" v-link="{ path: '/about'}">About</a>
        -->
      </div>
    </div>
    <div class="col-xs-6">
      <div class="panel">
        <div class="panel-body">
          <!-- 路由出口 -->
          <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</div>
<template id="home">
  <div>
    <h1>Home</h1>
    <p>{{msg}}</p>
  </div>
</template>
<template id="about">
  <div>
    <h1>About</h1>
    <p>vue-router demo</p>
  </div>
</template>

<script>
  /* 1. 定义路由组件*/
  var Home = Vue.extend({
    template: '#home',
    data: function () {
      return {
        msg: 'Hello, vue router!'
      }
    }
  })
  var About = Vue.extend({
    template: '#about',
  })
  /* 2.定义路由
   每个路由应该映射一个组件。 其中"component" 可以是
   通过 Vue.extend() 创建的组件构造器，
   或者，只是一个组件配置对象。*/
  const routes = [
    {path: '/home', component: Home},
    {path: '/about', component: About}
  ]
  /* 3.创建 router 实例*/
  const router = new VueRouter({
    routes,

  })
  /* 4.创建和挂载根实例*/
  const app = new Vue({
    el: '#app',
    router
  })
</script>
</body>
</html>

```

> 嵌套路由

在实际项目中我们会碰到多层嵌套的组件组合而成，但是我们如何实现嵌套路由呢？因此我们需要在 VueRouter 的参数中使用 children 配置，这样就可以很好的实现路由嵌套。

用法：子路由的写法是在原有的路由配置下加入children字段。

情形：

/user/index

/user/about

这里`index`和`about`相对`user`是子路由，通俗理解，嵌套路由就是路由里面嵌套他的子路由。

实际操作：( 基于vue_cli方式)

 a.新建`IndexA.vue`&`IndexB.vue`
 
IndexA.vue

```vue

<template>
  <div class="indexA">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'indexA',
    data () {
      return {
        msg: 'I’m indexA'
      }
    }
  }
</script>
```

IndexB.vue

```vue

<template>
  <div class="indexB">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'indexB',
    data () {
      return {
        msg: 'I’m indexB'
      }
    }
  }
</script>

```

  b.配置路由
  
```javascript

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
/* 引入组件indexA*/
import indexA from '@/components/indexA'
/* 引入组件indexB*/
import indexB from '@/components/indexB'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      /* 使用children 配置子路由*/
      children: [
        {
          path: 'indexA',
          name: 'indexA',
          component: indexA
        },
        {
          path: 'indexB',
          name: 'indexB',
          component: indexB
        }
      ]
    }
  ]
})

```
  c.在`Index.vue`中配置`router-link` 以及 `router-view`
  
```vue

<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <router-link to="/index/IndexA">IndexA</router-link>
    |
    <router-link to="/index/Indexb">IndexB</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: 'vue demo index'
      }
    }
  }
</script>

```
  
> 传递参数

...未完待续
