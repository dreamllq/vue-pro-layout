<template>
  <div class='layout-logo flex'>
    <div class='img flex-none'>
      <img src='@/assets/logo.svg' alt='logo'>
    </div>
    <div v-if='menuIsCollapse === false' class='title flex-item'>
      {{ config.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useState } from '@/use-state';

const { config } = useState();

defineProps({
  menuIsCollapse: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped lang="scss">
.layout-logo {
  height: 24px;

  .img, img {
    height: 100%;
  }

  .title {
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
    margin-block: 0;
    margin-inline: 0;
    line-height: 24px;
    margin-inline-start: 6px;
    vertical-align: top;
    white-space: nowrap;
  }
}
</style>