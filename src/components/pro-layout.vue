<template>
  <layout ref='layoutRef' @menu-select='onMenuSelect' @avatar-command='onAvatarCommand'>
    <template #default>
      <slot />
    </template>

    <template v-if='slots.logo' #logo='scope'>
      <slot name='logo' v-bind='scope' />
    </template>

    <template v-if='slots.menuHeader' #menuHeader>
      <slot name='menuHeader' />
    </template>

    <template v-if='slots.actions' #actions='scope'>
      <slot name='actions' v-bind='scope' />
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
import { withDefaults, useSlots, watch, ref } from 'vue';
import { useProvideState } from '@/use-state';
import Layout from './layout/index.vue';
import { AvatarProps, MenuProps } from '@/types';
import { cloneDeep } from 'lodash';

const slots = useSlots();

const props = withDefaults(defineProps<{
  title?: string,
  loading?: boolean,
  layout?:'side' | 'top' | 'mix',
  contentWidth?:'Fluid' | 'Fixed',
  siderWidth?: number,
  suppressSiderWhenMenuEmpty?: boolean,
  menu: MenuProps,
  avatar?: AvatarProps,
  collapsed?: boolean,
  hiddenCollapsedButton?: boolean
}>(), {
  title: 'lc pro',
  layout: 'side',
  contentWidth: 'Fluid',
  siderWidth: 256,
  menuData: () => [],
  avatar: undefined
});

useProvideState(props);

const emit = defineEmits(['menu-select', 'avatar-command']);

const layoutRef = ref();

watch(() => props.menu.data, () => layoutRef.value.getConfig().value!.menu.data = cloneDeep(props.menu.data), { deep: true });
watch(() => props.suppressSiderWhenMenuEmpty, () => layoutRef.value.getConfig().value!.suppressSiderWhenMenuEmpty = props.suppressSiderWhenMenuEmpty);
watch(() => props.layout, () => layoutRef.value.getConfig().value!.layout = props.layout);
watch(() => props.hiddenCollapsedButton, () => layoutRef.value.getConfig().value!.hiddenCollapsedButton = props.hiddenCollapsedButton);

const onMenuSelect = (...args) => {
  emit('menu-select', ...args);
};

const onAvatarCommand = (...args) => {
  emit('avatar-command', ...args);
};

const setMenuIndex = (index: string) => {
  layoutRef.value.getConfig().value!.menu.index = index;
};

const setCollapsed = (collapsed:boolean) => {
  layoutRef.value.getConfig().value!.collapsed = collapsed;
};

defineExpose({
  setMenuIndex,
  setCollapsed 
});

</script>

<style scoped>

</style>