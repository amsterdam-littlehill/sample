[TOC]

<script src="https://cdn.bootcss.com/vue/2.2.2/vue.min.js"></script>
# sample 

> A Vue.js project


Vue入门
===================================

##vue-cli脚手架 目录结构

|目录/文件|说明|
|:----|:---|
|build|最终发布的代码存放位置。|
|config|配置目录，包括端口号等，可修改|
|node_modules|npm 加载的项目依赖模块|
|src|   1. assets: 放置一些图片，如logo等。<br>2.components: 目录里面放了一个组件文件，可以不用。<br>3. App.vue: 项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录<br>4. main.js: 项目的核心文件。|
|static|静态资源目录，如图片、字体等。可根据实际情况修改|
|配置文件||
|index.html|首页入口|
|package.json|项目配置文件。|
|README.md|项目的说明文档，markdown 格式|

## 插值：

Vue.js 使用了基于 HTML 的模版语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。类似于.tpl模板。
***文本***:双大括号插值。
***html***:使用v-html指令

```html
<div v-html="html"></div>
```

```javascript

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      desc:'hello world',
      html:'<h1>使用v-html插入html</h1>',
      red:false,
      url:"www.baidu.com"
    }
  }
}

```

***属性***：使用v-bind，将元素与表达式绑定

***表达式***:Vue.js 都提供了完全的 JavaScript 表达式支持。

***指令***：
> v-if 条件判断 如果[表达式red]为true，则显示该div
> 
> v-bind 将div的class属性与[表达式red]的值绑定
 
***参数***：指令后冒号指明，如class,href


```
<div v-if="red" v-bind:class="{'red':red}">
      <p v-bind:href="url">使用v-bind绑定颜色切换</p>
    </div>
```

## 事件处理

>错误写法

```html
<button v-on:click="javascript:alertMeg();">点我</button>
```

```javascript
function alertMeg() {
    alert("使用v-on:click绑定的点击事件");
}
```
异常信息：
`Hello.vue?a62c:54 Uncaught TypeError: _vm.alertMeg is not a function`

>正确写法

```html
<button v-on:click="alertMeg">点我</button>
```

```javascript
export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        desc: 'hello world',
        html: '<h1>使用v-html插入html</h1>',
        red:false,
        url:"www.baidu.com"
      }
    },
    // 在 `methods` 对象中定义方法
    methods:{
      alertMeg:function () {
        alert("使用v-on:click绑定的点击事件");
      }
    }
  }
```

> 内联处理器里的方法：***直接内敛javascript语句***
 
```html
<button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
```

```javascript
new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})
```

>***事件修饰符***

eg:prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：
```html
<!-- 阻止单击事件冒泡 -->
<a v-on:click.stop="doThis"></a>
<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>
<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>
<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>
<!-- 添加事件侦听器时使用事件捕获模式 -->
<div v-on:click.capture="doThis">...</div>
<!-- 只当事件在该元素本身 (比如不是子元素) 触发时触发回调 -->
<div v-on:click.self="doThat">...</div>
<!--新增：点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>

```

>无须在 JavaScript 里手动绑定事件；
>
当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除，无需手动情理


###***双向绑定***（[后续深入](#relBind)）

<span id="relBindEg"></span>

用 v-model 指令在表单控件元素上创建双向数据绑定

```html
<div id="app">
    <p>{{ message }}</p>
    <!-- 修改input元素值将同时修改p标签中的值 -->
    <input v-model="message">
    <!-- 修改vue中对象的值将同步修改dom元素的值 -->
    <button v-on:click="reverseMessage">反转字符串</button>
</div>
```


```javascript
new Vue({
  el: '#app',
  data: {
    message: 'Runoob!'
  },
  methods:{
    reversemsg:function () {
        this.message = this.message.split('').reverse().join('')
      }
  }
})

```


## ***vue实例***
> ###构造器

> 每个 Vue.js 应用都是通过构造函数 Vue 创建一个 Vue 的根实例来启动的：
```
var vm=new Vue({});
``` 
> ###属性与方法
>每个 Vue 实例都会代理其 data 对象里所有的属性：

```javascript
var data = { a: 1 }
var vm = new Vue({
  data: data
})
vm.a === data.a // -> true
// 设置属性也会影响到原始数据
vm.a = 2
data.a // -> 2
// ... 反之亦然
data.a = 3
vm.a // -> 3
```

```javascript
$vm.desc
"hello world"
$vm.desc='a'
"a"
$vm.desc=='a'
true
```

>###条件语句
>####循环语句  ***v-for***

```html
<!-- 迭代对象数组 -->
<tr v-for="object in ops">
    <!-- 迭代对象属性 -->     
    <td v-for="value in object">
       
        {{value}}
    </td>
</tr>
<!-- 迭代整数 -->
<select v-model="num">
    <option v-for="n in 10">{{n}}</option>
</select>
<span> selected num:{{num}}</span>
```

```javascript
new Vue({
    data:{
        num:'',
        ops: [
              {
                name: "小王",
                age: 18,
                addr: "上海"
              },
              {
                name: "小张",
                age: 16,
                addr: "北京"
              },
              {
                name: "小李",
                age: 20,
                addr: "云南"
              }
            ]
        }
});
```

>###计算属性 ***computed***

```html
原值：<input id='a' type="text" v-model="msgTemp"><br/>
变换后：<span id='b'>{{ message }}</span>
```

***message***，函数将用作属性 vm.message 的 getter 。vm.message 依赖于 vm.msgTemp vm.msgTemp 发生改变时，vm.message 也会更新。

>1. \#b message函数依赖于 msgTemp，修改#a msgTemp的值后，message也会更新
>2. 修改#b的值。将调用message的setter,修改msgTemp的值，同时又调用了message的getter方法，修改了#b的值

```javascript
var vm=new Vue({
    msgTemp:'test',
    computed: {
      message: {
        get:function () {
          alert("getter:"+this.msgTemp);
          return this.msgTemp.split('').reverse().join('')
        },
        set:function (value) {
          alert("setter before:"+value);
          this.msgTemp=value;
          alert("setter after:"+this.msgTemp);
        }
      }
    }
})
```



>computed vs methods

>可以使用methods来代替computed。区别在于computed是基于他的依赖缓存，只有缓存发生I变化是才会重新取值。而mothods，在重新渲染的时候函数会重新调用执行

##渲染样式 ***v-bind***
1. class属性绑定

```html
<a v-bind:class="{'red':red}" v-bind:href="url">使用v-bind绑定颜色切换</a>
<style>
.red{
    color:red;
}
.big{
    font-size: 20px;
}
.marginL{
    margin-left: 15px;
}
</style>
```

```javascript
new Vue({
  el: '#app',
  data: {
    red:true,
    big:true,
    redStyle:'red',
    bigStyle:'big',
    activeColor:'blue',
    fontSize:30,
    classObj:{
        red:true,
        big:true
    },
    styleObj:{
        color:'blue',
        fontSize:30
    }
  },
  computed: {
    classObjTemp: function () {
        return {red: this.red , 'marginL': !this.red}
    }
  }
})
```
绑定后

```html
<a data-v-7325b7eb="" href="www.baidu.com" class="red">使用v-bind绑定颜色切换</a>
```

绑定多个class

* 1 传入多个属性来设置class
```html
<a v-bind:class="{'red':red,'big':big}" v-bind:href="url">使用v-bind绑定颜色切换</a>
```

* 2 绑定对象来设置class
 
```html
<a v-bind:class="classObj" v-bind:href="url">使用v-bind绑定颜色切换</a>
```

* 3 使用计算属性设置class

```html
<a v-bind:class="classObjTemp" v-bind:href="url">使用v-bind绑定颜色切换</a>
```

* 4 传入数组设置class

```html
 <a v-bind:class="[redStyle,bigStyle]">使用v-bind绑定颜色切换</a><br>
```

* 5 三元表达式设置class

```html
 <a v-bind:class="[redStyle,big ? bigStyle:'']">使用v-bind绑定颜色切换</a><br>
```

* 6 内联样式 ***style***

```html
 <a v-bind:style="{color:activeColor,fontSize:fontSize+'px'}">使用v-bind绑定颜色切换</a><br>
```

* 7 使用样式对象设置class(可设置多个)

```html
 <a v-bind:style="styleObj">使用v-bind绑定颜色切换</a><br>
```

##表单

<span id="relBind"></span>

![双向绑定](http://www.runoob.com/wp-content/uploads/2017/01/20151109171527_549.png)

>用 v-model 指令在表单控件元素上创建双向数据绑定。

[查看例子](#relBindEg)

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<div id="app">
<div>
  <p>input 元素：</p>
  <input v-model="message" placeholder="编辑我……">
  <p>消息是: {{ message }}</p>
  <p>textarea 元素：</p>
  <p style="white-space: pre">{{ message2 }}</p>
  <textarea v-model="message2" placeholder="多行文本输入……"></textarea>
</div>
<div>
      复选框：<input type="checkbox" id="checkbox" v-model="checked"><label for="checkbox">{{checked}}</label>
    </div>
    <div>
      单选按钮：<input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <span>  Picked: {{ picked }}</span>
    </div>
    <div>
      选择列表：
      <select v-model="selected">
        <option value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>B</option>
      </select>
      <span>  Selected: {{ selected }}</span>
    </div>
    <div>
      动态列表:
      <select v-model="selected2">
        <option v-for="option in options" v-bind:value="option.value">{{ option.text }}</option>
      </select>
      <span>Selected: {{ selected2 }}</span>
    </div>
  
</div>
<script>
  new Vue({
  el: '#app',
  data: {
    checked: true,
    picked: '',
    selected: '',
    selected2: '',
    options: [
        {text: 'One', value: 'A'},
        {text: 'Two', value: 'B'},
        {text: 'Three', value: 'C'}
    ],
    message: 'vue',
    message2: 'vue双向绑定测试'
  }
})
</script>
</body>
</html>

>数据绑定类型

|类型|简介|优缺点|
|--:--|----|------|
|单向绑定|我们先把模板写好，然后把模板和数据（数据可能来自后台）整合到一起形成HTML代码，然后把这段HTML代码插入到文档流里面。适用于整体项目，并于追溯。|***优点***：<br>1.所有状态的改变可记录、可跟踪，源头易追溯;<br/>2. 所有数据只有一份，组件数据只有唯一的入口和出口，使得程序更直观更容易理解，有利于应用的可维护性;<br>3. 一旦数据变化，就去更新页面(data-页面)，但是没有(页面-data);<br>4. 如果用户在页面上做了变动，那么就手动收集起来(双向是自动)<br>，合并到原有的数据中。<br>***缺点***：<br>1. HTML代码渲染完成，无法改变，有新数据，就须把旧HTML代码去掉，整合新数据和模板重新渲染;<br>2. 代码量上升，数据流转过程变长，出现很多类似的样板代码;<br>3. 同时由于对应用状态独立管理的严格要求(单一的全局store)，在处理局部状态较多的场景时(如用户输入交互较多的“富表单型”应用)，会显得啰嗦及繁琐。|
|双向绑定|数据模型（Module）和视图（View）之间的双向绑定。无论数据改变，或是用户操作，都能带来互相的变动，自动更新。适用于项目细节|***优点***：<br>1. 用户在视图上的修改会自动同步到数据模型中去，数据模型中值的变化也会立刻同步到视图中去；<br>2. 无需进行和单向数据绑定的那些CRUD（Create，Retrieve，Update，Delete）操作；<br>3. 在表单交互较多的场景下，会简化大量业务无关的代码。<br>***缺点***：<br>1. 无法追踪局部状态的变化；<br>2. “暗箱操作”，增加了出错时 debug 的难度；<br>3. 由于组件数据变化来源入口变得可能不止一个，数据流转方向易紊乱|




>几种实现双向绑定的做法

>>发布者-订阅者模式（backbone.js）

[参考](https://segmentfault.com/a/1190000006599500)

使用自定义的data属性在HTML代码中指明绑定。所有绑定起来的JavaScript对象以及DOM元素都将“订阅”一个发布者对象。任何时候如果JavaScript对象或者一个HTML输入字段被侦测到发生了变化，我们将代理事件到发布者-订阅者模式，这会反过来将变化广播并传播到所有绑定的对象和元素。

>>>在单向绑定的基础上给可输入元素（input、textare等）添加了change(input)事件，来动态修改model和 view

```javascript
<!-- jquery实现的双向绑定 -->
function DataBinder( object_id ) {
  // Use a jQuery object as simple PubSub
  var pubSub = jQuery({});

  // We expect a `data` element specifying the binding
  // in the form: data-bind-<object_id>="<property_name>"
  var data_attr = "bind-" + object_id,
      message = object_id + ":change";

  // Listen to change events on elements with the data-binding attribute and proxy
  // them to the PubSub, so that the change is "broadcasted" to all connected objects
  jQuery( document ).on( "change", "[data-" + data_attr + "]", function( evt ) {
    var $input = jQuery( this );

    pubSub.trigger( message, [ $input.data( data_attr ), $input.val() ] );
  });

  // PubSub propagates changes to all bound elements, setting value of
  // input tags or HTML content of other tags
  pubSub.on( message, function( evt, prop_name, new_val ) {
    jQuery( "[data-" + data_attr + "=" + prop_name + "]" ).each( function() {
      var $bound = jQuery( this );

      if ( $bound.is("input, textarea, select") ) {
        $bound.val( new_val );
      } else {
        $bound.html( new_val );
      }
    });
  });

  return pubSub;
}
//创建对象
function User( uid ) {
  var binder = new DataBinder( uid ),

      user = {
        attributes: {},

        // The attribute setter publish changes using the DataBinder PubSub
        set: function( attr_name, val ) {
          this.attributes[ attr_name ] = val;
          binder.trigger( uid + ":change", [ attr_name, val, this ] );
        },

        get: function( attr_name ) {
          return this.attributes[ attr_name ];
        },

        _binder: binder
      };

  // Subscribe to the PubSub
  binder.on( uid + ":change", function( evt, attr_name, new_val, initiator ) {
    if ( initiator !== user ) {
      user.set( attr_name, new_val );
    }
  });

  return user;
}
```

[原文链接](http://www.lucaongaro.eu/blog/2012/12/02/easy-two-way-data-binding-in-javascript/)（jquery+javasript实现）

>>脏值检查（angular.js） (暂不深入，待后续研究）

>>数据劫持（vue.js）(暂不深入，待后续研究）













