<template>
  <el-container class="layout-default">
    <el-header height="197px">
      <my-header/>
    </el-header>
    <el-main style="overflow: inherit">
      <nuxt/>
    </el-main>
    <el-footer height="100%">
      <my-footer/>
    </el-footer>
  </el-container>
</template>

<script>
  import MyHeader from '@/components/public/header/index.vue'
  import MyFooter from '@/components/public/footer/index.vue'
  export default {
    components:{
      MyHeader,
      MyFooter
    }
  }
</script>
<style>
  body{
    background: #eee;
  }
  .el-header,.el-main{
    padding: 0;
  }

</style>
