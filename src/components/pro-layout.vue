<template>
  <layout>
    <template v-if='slots.menuHeader' #menuHeader>
      <slot name='menuHeader' />
    </template>

    <template v-if='slots.actions' #actions>
      <slot name='actions' />
    </template>

    <template v-if='slots.menuFooter' #menuFooter>
      <slot name='menuFooter' />
    </template>
  </layout>
</template>

<script setup lang="ts">
import { withDefaults, useSlots } from 'vue';
import { useState } from '@/use-state';
import Layout from './layout/index.vue';
import { MenuItem } from '@/types';
import { useBus } from '@/use-bus';

const slots = useSlots();
const bus = useBus();
const { setConfig } = useState();

const props = withDefaults(defineProps<{
  title?: string,
  loading?: boolean,
  layout?:'side' | 'top' | 'mix',
  contentWidth?:'Fluid' | 'Fixed',
  siderWidth?: number,
  suppressSiderWhenMenuEmpty?: boolean,
  menuData?: MenuItem[]
}>(), {
  title: 'lc pro',
  layout: 'side',
  contentWidth: 'Fluid',
  siderWidth: 256,
  menuData: () => []
});

const emit = defineEmits(['menu-select']);

setConfig(props);

bus.on('menu-select', (...args) => {
  emit('menu-select', ...args);
});

</script>

<style scoped>

</style>