<template>
  <el-container>
    <el-header>
      <my-header></my-header>
    </el-header>
    <el-main>
      <div>
        <nuxt />
      </div>
    </el-main>
    <el-footer> Footer</el-footer>
  </el-container>
  <!--<div>-->
    <!--<nuxt />-->
  <!--</div>-->
</template>
<script>
 import  MyHeader from '@/components/public/header/index.vue'
  export default {
   components:{
     MyHeader
   }
  }
</script>

