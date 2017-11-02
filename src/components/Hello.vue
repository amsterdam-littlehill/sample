<template>
  <div class="hello">
    <p>数据渲染</p>
    <span>1.使用双大括号，可以理解为jq的 val()</span>
    <p>{{ msg}}</p>
    <span>2.使用v-text，获取msg文本，可以理解为jq的 text()</span>
    <p v-text="msg"></p>
    <span>3.使用v-html,获取msg html内容，可以理解为jq的 html()</span>
    <p v-html="msg"></p>
    <span>使用管道符对{desc}进行过滤处理</span>
    <p>{{desc | capitalize}}</p>

    <div v-html="html"></div>
    <label for="check"></label><input type="checkbox" v-model="red" id="check">
    <span>控制模块隐藏</span><br>
    <button v-on:click="toggleDisplay">点我</button>
    <span>使用v-if该模块不会渲染</span>
    <div v-if="red">
      <a v-bind:class="{'red':red}" v-bind:href="url">使用v-bind绑定颜色切换</a>
      <button v-on:click="alertMeg">点我</button>
    </div>
    <span>使用v-show 该模块仍会渲染，只是隐藏了(通过css设置)</span>
    <div v-show="red">
      <a v-bind:class="{'red':red}" v-bind:href="url">使用v-bind绑定颜色切换</a>
      <button v-on:click="alertMeg">点我</button>
    </div>
    <input v-model="msg">
    <button v-on:click="reversemsg">反转字符串</button>
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
    <div>
      <div style="text-align: center">
        遍里对象数组属性
        <table>
          <thead>
          <tr>
            <td>姓名</td>
            <td>年龄</td>
            <td>地址</td>
            <td>**</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="object in ops">
            <td v-for="(value,key,index) in object">
              {{index}}-{{value}}:{{key}}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div>
        迭代整数
        <select v-model="num">
          <option v-for="n in 10">{{n}}</option>
        </select>
        <span> selected num:{{num}}</span>
        <button v-on:click="checkObjBind()">测试双向绑定</button>
      </div>
    </div>
    <div>
      计算属性 <br>
      原值：<input type="text" v-model="msgTemp"><br/>
      变换后：<input type="text" v-model="message">
      <button v-on:click="computedTest">setter</button>
    </div>
    <div>
      样式设置 <br>
      1. 传入多个属性来设置class <a v-bind:class="{'red':red,'big':big}">看我</a><br>
      2. 绑定class对象来设置class <a v-bind:class="classObj">看我</a><br>
      3. 使用计算属性设置class <a v-bind:class="classObjTemp">看我</a><br>
      4. 传入数组设置class <a v-bind:class="[redStyle,bigStyle]">看我</a><br>
      5. 三元表达式设置class <a v-bind:class="[redStyle,big ? bigStyle:'']">看我</a><br>
      6. 内联样式 1 <a v-bind:style="{color:activeColor,fontSize:fontSize+'px'}">看我</a><br>
      7. 使用样式对象设置class 1 <a v-bind:style="styleObj">看我</a><br>
    </div>
    <div>
      测试创建组件1
      <my-component></my-component>
      测试创建组件2
      <my-component2 msg="hello"></my-component2>
      测试prop
      <div>
        <input v-model="parentMsg">
        <br>
        <child v-bind:message="parentMsg"></child>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'hello',
    data () {
      return {
        parentMsg: 'test active prop',
        msg: 'Welcome to Your Vue.js App',
        msgTemp: 'reverse',
        desc: 'hello world',
        html: '<h1>使用v-html插入html</h1>',
        /*定义样式*/
        red: false,
        big: true,
        redStyle: 'red',
        bigStyle: 'big',
        activeColor: 'blue',
        fontSize: 30,
        /*定义样式obj*/
        classObj: {
          red: true,
          big: true,
        },
        styleObj: {
          color: 'black',
          fontSize: '25px'
        },
        url: 'www.baidu.com',
        checked: true,
        picked: '',
        selected: '',
        selected2: '',
        num: '',
        options: [
          {text: 'One', value: 'A'},
          {text: 'Two', value: 'B'},
          {text: 'Three', value: 'C'}
        ],
        //迭代
        ops: [
          {
            name: '小王',
            age: 18,
            addr: '上海'
          },
          {
            name: '小张',
            age: 16,
            addr: '北京'
          },
          {
            name: '小李',
            age: 20,
            addr: '云南'
          }
        ]
      }
    },
    computed: {
      classObjTemp: function () {
        return {red: this.red, 'marginL': !this.red}
      },
      message: {
        get: function () {
          alert('getter:' + this.msgTemp)
          return this.msgTemp.split('').reverse().join('')
        },
        set: function ( value ) {
          alert('setter before:' + value)
          this.msgTemp = value
          alert('setter after:' + this.msgTemp)

        }
      }
    },
    methods: {
      toggleDisplay: function () {
        this.red = (!this.red) ? true : false
      },
      computedTest: function () {
        alert(this.message)
        this.message = 'setter'
      },
      alertMeg: function () {
        alert('使用v-on:click绑定的点击事件')
      },
      reversemsg: function () {
        this.msg = this.msg.split('').reverse().join('')
      },
      checkObjBind: function () {
        alert('目前选择的值' + this.num)
        this.num = 2
        alert('操作vue对象修改为2')
      }
    },
    //过滤器
    filters: {
      capitalize: function ( value ) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },
    components: {
      'my-component2': {
        template: '<div>{{msg}} - {{privateMsg}}</div>',
        props: ['msg'],
        data: function () {
          return {
            privateMsg: 'component!'
          }
        }
      }
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .red {
    color: red;
  }

  .marginL {
    margin-left: 15px;
  }
</style>
