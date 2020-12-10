<template>
  <div id="app">
      <el-container class="layout">
        <el-header class="header-section">我的天啊</el-header>
        <el-container class="middle-container" :style="{'height': height}">
          <el-aside  class="menu-section" width="200px">菜单栏</el-aside>
          <el-main class="main-section">
            <router-view />
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      height: '600px'
    }
  },
  mounted () {
    const header:any  = document.querySelector('.header-section');
    const height:number = window.innerHeight - header.offsetHeight
    this.height = `${height}px`
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: #2c3e50;
  
  .layout {
    // background-color: #eee;
    .header-section {
      background-color: #333;
    }
    .middle-container {
      .menu-section {
        height: 100%;
        background-color: orange;
      }
      .main-section {
        padding: 0 20px;
       background-color: #eee;
      }
    }
  }
  
}


</style>
