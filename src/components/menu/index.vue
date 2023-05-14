<template>
  <lc-menu :menu-data='config.menuData' :menu-index='config.menuSelectedIndex' :is-collapse='menuIsCollapse' />
</template>

<script setup lang="ts">
import LcMenu from './menu.vue';
import { useState } from '@/use-state';

const { config, menuIsCollapse } = useState();

</script>

<style scoped>

</style>