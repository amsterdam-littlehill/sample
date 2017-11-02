<template>
  <div class="hello">
    <p>{{title}}</p>
    <ul v-for="item in items">
      <li>{{item.name}}</li>
    </ul>
    <p>{{msgfromfather}}</p>
    <button @click="onclickMe">点我:我要告诉我老子...</button>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        'msg': '爸，今晚吃啥？',
        'title': '头部',
        'items': [
          {
            'name': '第一章'
          },
          {
            'name': '第二章'
          },
          {
            'name': '第三章'
          }
        ]
      }
    },
    props: ['msgfromfather'],
    methods: {
      onclickMe: function () {
        console.log(this.msgfromfather)
        this.$emit('son-tell-me-sth', this.msg)
      }
    }
  }
</script>
