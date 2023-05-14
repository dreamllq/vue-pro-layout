<template>
  <div class='lc-pro-layout mix'>
    <el-container style='height: 100%;'>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width='200px'>
          Aside
        </el-aside>
        <el-main>
          <slot />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>