// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
// 1.定义路由组件
// 可以从其他文件import进来
const Foo = {template: '<div> foo</div>'}
const Bar = {template: '<div >bar</div>'}

// 2.定义路由

// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 再者是嵌套路由
const routes = [
  {path: '/foo', component: Foo},
  {path: '/bar', component: Bar}
]

// 3.创建router实例
const router = new VueRouter({
  routes// 简写。routes:routers
})

// 4.创建和挂载根实例，通过router配置参数注入路由
const app = new Vue({
  router
}).$mount('#app')
// 通过 to 属性指定目标地址，默认渲染成带有正确链接的 <a> 标签，可以通过配置 tag 属性生成别的标签.。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名。

