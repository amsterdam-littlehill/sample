<template>
  <section class="app-main" style="min-height: 100%">
    <transition name="fade" mode="out-in">
      <router-view :key="key"></router-view>
    </transition>
  </section>
</template>
<script>
  export default {
    name: 'AppMain',
    computed: {
      key() {
        console.log(this.$route.name);
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      }
    }
  }
</script>
