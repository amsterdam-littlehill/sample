<template>
  <div class="hello">
    <p>父亲说：{{sayToChild}}</p>
    <button v-on:click="BoySayToFather">boy</button>
    <button v-on:click="GirlSayToFather">girl</button>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        'boy_msg': '大米？',
        'girl_msg': '面条！'
      }
    },
    props: ['sayToChild'],
    methods: {
      BoySayToFather: function () {
        this.$emit('whatSay', this.boy_msg,'');
      },
      GirlSayToFather: function () {
        this.$emit('whatSay','',this.girl_msg);
      }
    }
  }
</script>
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>-->
