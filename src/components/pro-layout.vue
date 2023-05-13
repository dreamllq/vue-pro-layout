<template>
  <layout />
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';
import { useState } from '@/use-state';
import Layout from './layout/index.vue';

const props = withDefaults(defineProps<{
  title?: string,
  loading?: boolean,
  layout?:'side' | 'top' | 'mix',
  contentWidth?:'Fluid' | 'Fixed',
  siderWidth?: number,
  suppressSiderWhenMenuEmpty?: boolean,
  menuData?: any[]
}>(), {
  title: 'lc pro',
  layout: 'side',
  contentWidth: 'Fluid',
  siderWidth: 208,
  menuData: () => []
});

const { setConfig } = useState();

setConfig(props);

</script>

<style scoped>

</style>