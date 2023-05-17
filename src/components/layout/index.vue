<template>
  <component :is='layoutComponent'>
    <template #default>
      <slot />
    </template>

    
    <template v-if='slots.logo' #logo>
      <slot name='logo' :is-collapse='config.collapsed' />
    </template>

    <template v-if='slots.menuHeader' #menuHeader>
      <slot name='menuHeader' />
    </template>

    <template v-if='slots.actions' #actions>
      <slot name='actions' :is-collapse='config.collapsed' />
    </template>
    
    <template v-if='slots.avatarDropdown' #avatarDropdown>
      <slot name='avatarDropdown' />
    </template>

    <template v-if='slots.menuFooter' #menuFooter>
      <slot name='menuFooter' />
    </template>
  </component>
</template>

<script setup lang="ts">
import { useState } from '@/use-state';
import MixLayout from './mix.vue';
import SideLayout from './side.vue';
import TopLayout from './top.vue';
import { useSlots, computed } from 'vue';
import { useMixMenuProvideState } from '@/use-mix-menu-state';

useMixMenuProvideState();

const emit = defineEmits(['menu-select', 'avatar-command']);


const { config, bus } = useState()!;

const slots = useSlots();

const componentMap = {
  mix: MixLayout,
  side: SideLayout,
  top: TopLayout
};

const layoutComponent = computed(() => componentMap[config.value!.layout]);

bus.on('menu-select', (...args) => {
  emit('menu-select', ...args);
});

bus.on('avatar-command', (...args) => {
  emit('avatar-command', ...args);
});

defineExpose({ getConfig: () => config });
</script>

<style scoped>

</style>