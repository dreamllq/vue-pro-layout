<template>
  <layout>
    <template #default>
      <slot />
    </template>

    <template v-if='slots.menuHeader' #menuHeader>
      <slot name='menuHeader' />
    </template>

    <template v-if='slots.actions' #actions>
      <slot name='actions' :is-collapse='menuIsCollapse' />
    </template>
    
    <template v-if='slots.avatarDropdown' #avatarDropdown>
      <slot name='avatarDropdown' />
    </template>

    <template v-if='slots.menuFooter' #menuFooter>
      <slot name='menuFooter' />
    </template>
  </layout>
</template>

<script setup lang="ts">
import { withDefaults, useSlots, watch } from 'vue';
import { useState } from '@/use-state';
import Layout from './layout/index.vue';
import { AvatarProps, MenuProps } from '@/types';
import { useBus } from '@/use-bus';

const slots = useSlots();
const bus = useBus();
const { setConfig, menuIsCollapse } = useState();

const props = withDefaults(defineProps<{
  title?: string,
  loading?: boolean,
  layout?:'side' | 'top' | 'mix',
  contentWidth?:'Fluid' | 'Fixed',
  siderWidth?: number,
  suppressSiderWhenMenuEmpty?: boolean,
  menu: MenuProps,
  avatar: AvatarProps
}>(), {
  title: 'lc pro',
  layout: 'side',
  contentWidth: 'Fluid',
  siderWidth: 256,
  menuData: () => []
});

watch(() => props, () => {
  setConfig(props);
}, { deep: true });

const emit = defineEmits(['menu-select', 'avatar-command']);

setConfig(props);

bus.on('menu-select', (...args) => {
  emit('menu-select', ...args);
});

bus.on('avatar-command', (...args) => {
  emit('avatar-command', ...args);
});

</script>

<style scoped>

</style>