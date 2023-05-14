<template>
  <div class='avatar-item flex'>
    <div class='flex-none'>
      <div class='flex'>
        <el-avatar size='small' :src='avatarUrl' />
      </div>
    </div>
    <div class='flex-none name'>
      {{ name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const avatarUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
const name = ref('name');
</script>

<style scoped lang="scss">
.avatar-item {
  padding: 8px;
  border-radius: 4px;
  cursor: default;

  &:hover {
    background-color: rgb(0 0 0 / 6%);
  }

  .name {
    margin-left: 8px;
    font-size: 14px;
    color: #FFFFFF;
  }
}
</style>