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
   
   前置要求：
   1. HTML的基础知识，写前端页面的结构代码完全没有问题。
   2. CSS的基础知识，最好了解CSS3的知识。
   3. Javascript的基础知识，对基本语法掌握
   4. node.js初级知识，只需要会npm的使用和项目初始化就可以了
   
 > 在这里不做单独的vue 单独安装，可自行按官方api自行练习
 
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
 
#### axios
 
 Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
 
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
    lastName: 'Flintstone'
})
 .then(function (response) {
     console.log(response);
})
 .catch(function (error) {
     console.log(error);
});
```
####  vuex


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

### 开发方式

### 附录 

#### vue 基础

#### 基础指令

> v-if  v-else  v-show 指令

v-if:是vue 的一个内部指令,用于进行条件渲染

v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别。

v-show 调整css中display属性，DOM已经加载，只是CSS控制没有显示出来。

区别：
v-if 控制的dom元素不会加载，就是说dom结构上不会出现。可以减轻服务器的压力，在需要时加载。
v-show 会加载到dom树上，只是CSS不显示。可以使客户端操作更加流畅。
 

> v-for指令

v-for指令是循环渲染一组data中的数组，v-for 指令需要以 item in items 形式的特殊语法，items 是源数据数组并且item是数组元素迭代的别名。
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

基本用法：
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
使用{{msg}}插值有一个弊端，网速慢或者页面语法错误的时候，页面会出现{{msg}}的文字

使用v-text&v-html可以有效解决该问题

区别:
{{}} 会将数据解释为存文本
v-text 输出文本
v-html 可用于输出html
> v-on：绑定事件监听器

v-on 指令，它用于监听 DOM 事件，eg:click,hover等
v-on:func
可简写为@func
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

v-model:在表单控件元素上创建双向数据绑定

> v-bind 指令


v-bind:响应式地更新 HTML 属性：
用法：
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

v-pre指令： 跳过这个元素和它的子元素的编译过程，直接输出原始值。就是在标签中加入v-pre就不会输出vue中的data值了。

v-cloak指令：保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。

v-once指令：只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

#### 全局API

在构造器外部用vue提供给我们的API函数来定义新的功能 

> Vue.directive 自定义指令

**用法**：

```javascript

Vue.directive('foucs',function(el,binding,vnode){
  el.style='color:'+binding.value;
});
```
**参数含义**
el: 指令所绑定的元素，可以用来直接操作DOM。

binding:  一个对象，包含指令的很多信息。

vnode: Vue编译生成的虚拟节点。

oldVnode:上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

**自定义指令的生命周期**

自定义指令有五个生命周期（也叫钩子函数），分别是 bind,inserted,update,componentUpdated,unbind

bind:只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个绑定时执行一次的初始化动作。

inserted:被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于document中）。

update:被绑定于元素所在的模板更新时调用，而无论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。

componentUpdated:被绑定元素所在模板完成一次更新周期时调用。

unbind:只调用一次，指令与元素解绑时调用。

```javascript
bind:function(){//被绑定
     console.log('1 - bind');
}
inserted:function(){//绑定到节点
      console.log('2 - inserted');
}
update:function(){//组件更新
      console.log('3 - update');
}
componentUpdated:function(){//组件更新完成
      console.log('4 - componentUpdated');
}
unbind:function(){//解绑
      console.log('1 - bind');
}
```
> Vue.extend

使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象

Vue.extend( options )

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

Vue.set( target, key, value ) 或者 vm.$set( target, key, value )

设置对象的属性。如果对象是响应式的，确保属性被创建后也是响应式的，同时触发视图更新。这个方法主要用于避开 Vue 不能检测属性被添加的限制。

在构造器外部操作构造器内部的数据、属性或者方法。比如在vue构造器内部定义了一个count为1的数据，我们在构造器外部定义了一个方法，要每次点击按钮给值加1.就需要用到Vue.set。

为什么要用？

由于Javascript的限制，Vue不能自动检测以下变动的数组。

*当你利用索引直接设置一个项时，vue不会为我们自动更新。

*当你修改数组的长度时，vue不会为我们自动更新。

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

受现代 JavaScript 的限制 (以及废弃 Object.observe)，Vue 不能检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化过程，所以属性必须在 data 对象上存在才能让 Vue 转换它，这样才能让它是响应的。

要用Vue.set(fruits,1,{en: 'peach', ch: '桃子'})来设置改变，vue才会给我们自动更新，这就是Vue.set存在的意义。

> Vue声明周期（钩子函数） 

每个Vue实例在被创建之前都要经过一系列的初始化过程。Vue一共有10个生命周期函数，我们可以利用这些函数在vue的每个阶段都进行操作数据或者改变内容。

![](https://cn.vuejs.org/images/lifecycle.png)

1-beforeCreate 在实例初始化之后；

2-created 在实例创建完成后被立即调用；

3-beforeMount 在挂载开始之前被调用；

4-mounted 挂载到实例；

5-beforeUpdate 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前；

6-updated 数据更新后；

7-activated keep-alive 组件激活时调用；

8-deactivated keep-alive 组件停用时调用；

9-beforeDestroy 实例销毁之前调用。在这一步，实例仍然完全可用；

10-destroyed Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

> 模板template

1. 字符串

模板被定义为一个字符串

```javascript
var app=new Vue({
     el:'#app',
     data:{
         message:'hello Vue!'
      },
     template:'<h1 style="color:red">我是选项模板</h1>'
})
```

2. 模板字符串（Template literals）

通过ES6的模板字符串（反引号）语法，在定义模板时可以直接换行

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
3. X-Templates

script标签需要添加text/x-template类型作为标记，并且在定义组件时，通过id来引用。

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

1. 全局组件
使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
`Vue.extend({template:})`
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

`Vue.component('aaa',aaa);`注册或获取全局组件。注册还会自动使用给定的id设置组件的名称

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

局部注册的组件只能在组件注册的作用域里进行使用，其他作用域使用无效。

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
