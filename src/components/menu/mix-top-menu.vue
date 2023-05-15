<template>
  <lc-menu
    :menu-data='topMenuData'
    :menu-index='topMenuIndex'
    mode='horizontal'
    @select='onSelect' />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import LcMenu from '@/packages/menu/index.vue';
import { useState } from '@/use-state';
import { useBus } from '@/use-bus';
import { useMixMenuState } from '@/use-mix-menu-state';

const { config } = useState();
const bus = useBus();

const { topMenuData, topMenuIndex, getSideMenuDataFirst } = useMixMenuState();

const onSelect = (index) => {
  const key = getSideMenuDataFirst(index);
  console.log(key);

  if (key) {
    bus.emit('menu-select', key);
  } else {
    bus.emit('menu-select', index);
  }
};
</script>

<style scoped>

</style>