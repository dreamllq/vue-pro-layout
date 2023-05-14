<template>
  <lc-menu :menu-data='config.menuData' />
</template>

<script setup lang="ts">
import LcMenu from './menu.vue';
import { useState } from '@/use-state';

const { config } = useState();

</script>

<style scoped>

</style>