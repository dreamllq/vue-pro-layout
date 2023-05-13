<template>
  <component :is='layoutComponent' />
</template>

<script setup lang="ts">
import { useState } from '@/use-state';
import MixLayout from './mix.vue';
import SideLayout from './side.vue';
import TopLayout from './top.vue';
import { computed } from 'vue';

const { config } = useState();

const { layout } = config.value;

const componentMap = {
  mix: MixLayout,
  side: SideLayout,
  top: TopLayout
};

const layoutComponent = computed(() => componentMap[layout]);
</script>

<style scoped>

</style>