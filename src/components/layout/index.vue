<template>
  <component :is='layoutComponent'>
    <template #default>
      <slot />
    </template>
    <template v-if='slots.menuHeader' #menuHeader>
      <slot name='menuHeader' />
    </template>

    <template v-if='slots.actions' #actions>
      <slot name='actions' />
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

const { config } = useState();

const { layout } = config.value;
const slots = useSlots();

const componentMap = {
  mix: MixLayout,
  side: SideLayout,
  top: TopLayout
};

const layoutComponent = computed(() => componentMap[layout]);
</script>

<style scoped>

</style>