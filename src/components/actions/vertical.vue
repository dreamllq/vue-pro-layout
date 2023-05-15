<template>
  <div class='layout-actions vertical flex flex-column' style='align-items: center;'>
    <div class='actions-container flex-none'>
      <slot />
    </div>
    <div class='avatar-container flex-none'>
      <avatar :menu-is-collapse='menuIsCollapse' />
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from './avatar.vue';
import { useState } from '@/use-state';
const { menuIsCollapse } = useState();

</script>

<style scoped>

</style>