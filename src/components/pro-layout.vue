<template>
  <layout>
    <template #default>
      <slot />
    </template>

    <template v-if='slots.menuHeader' #menuHeader>
      <slot name='menuHeader' />
    </template>

    <template v-if='slots.actions' #actions>
      <slot name='actions' :is-collapse='config?.collapsed' />
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
import { cloneDeep } from 'lodash';

const slots = useSlots();
const bus = useBus();
const { setConfig, config } = useState();

const props = withDefaults(defineProps<{
  title?: string,
  loading?: boolean,
  layout?:'side' | 'top' | 'mix',
  contentWidth?:'Fluid' | 'Fixed',
  siderWidth?: number,
  suppressSiderWhenMenuEmpty?: boolean,
  menu: MenuProps,
  avatar: AvatarProps,
  collapsed?: boolean
}>(), {
  title: 'lc pro',
  layout: 'side',
  contentWidth: 'Fluid',
  siderWidth: 256,
  menuData: () => []
});

setConfig(props);

watch(() => props.menu.data, () => config.value!.menu.data = cloneDeep(props.menu.data), { deep: true });
watch(() => props.suppressSiderWhenMenuEmpty, () => config.value!.suppressSiderWhenMenuEmpty = props.suppressSiderWhenMenuEmpty);
watch(() => props.layout, () => config.value!.layout = props.layout);

const emit = defineEmits(['menu-select', 'avatar-command']);

bus.on('menu-select', (...args) => {
  emit('menu-select', ...args);
});

bus.on('avatar-command', (...args) => {
  emit('avatar-command', ...args);
});

const setMenuIndex = (index: string) => {
  config.value!.menu.index = index;
};

const setCollapsed = (collapsed:boolean) => {
  config.value!.collapsed = collapsed;
};

defineExpose({
  setMenuIndex,
  setCollapsed 
});

</script>

<style scoped>

</style>