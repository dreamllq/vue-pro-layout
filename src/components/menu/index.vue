<template>
  <lc-menu
    :menu-data='config.menu.data'
    :menu-index='config.menu.index'
    :is-collapse='menuIsCollapse'
    :mode='mode' />
</template>

<script setup lang="ts">
import LcMenu from './menu.vue';
import { useState } from '@/use-state';

const { config, menuIsCollapse } = useState();

defineProps({
  mode: {
    type: String,
    default: 'vertical'
  }
});

</script>

<style scoped>

</style>