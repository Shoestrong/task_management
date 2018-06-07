<template>
  <div id="app">
    <Task/>
  </div>
</template>

<script>
import Task from './components/Task'

export default {
  name: 'App',
  components: {
    Task
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
ul,li {
  list-style: none;
}
#app {
  font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
