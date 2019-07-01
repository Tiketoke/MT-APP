<template>
    <div class="search-panel">
      <el-row class="m-header-searchbar">
        <el-col
        :span="3"
        class="left">
          <img
            src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
            alt="美团">
        </el-col>
        <el-col
        :span="15"
        class="center">
          <div class="wrapper">
            <el-input placeholder="搜索商家或地点"></el-input>
            <button class="el-button el-button-primary"><i class="el-icon-search"></i></button>
            <dl class="hotPlace">
              <dt>热门搜索</dt>
              <dd>火锅</dd>
              <dd>火锅</dd>
              <dd>火锅</dd>
              <dd>火锅</dd>
            </dl>
            <dl class="searchList">
              <dd></dd>
            </dl>
          </div>
          <p class="suggset">
            <a href="">故宫</a>
            <a href="">故宫</a>
            <a href="">故宫</a>
            <a href="">故宫</a>
          </p>
        </el-col>
        <el-col
          :span="6"
          class="right">
          <ul class="security">
            <li><i class="refund"></i><p class="txt">随时退</p></li>
            <li><i class="single"></i><p class="txt">不满意免单</p></li>
            <li><i class="overdue"></i><p class="txt">过期退</p></li>
          </ul>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped>

</style>
