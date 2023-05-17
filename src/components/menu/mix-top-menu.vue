<template>
  <biz-menu
    :menu-data='topMenuData'
    :menu-index='topMenuIndex'
    mode='horizontal'
    @select='onSelect' />
</template>

<script setup lang="ts">
import { BizMenu } from 'lc-vue-biz-menu';
import { useMixMenuState } from '@/use-mix-menu-state';
import { useState } from '@/use-state';

const { config, bus } = useState()!;

const { topMenuData, topMenuIndex, getSideMenuDataFirst } = useMixMenuState()!;

const onSelect = (index) => {
  const key = getSideMenuDataFirst(index);

  if (key) {
    config.value!.menu.index = key;
    bus.emit('menu-select', key);
  } else {
    config.value!.menu.index = index;
    bus.emit('menu-select', index);
  }
};
</script>

<style scoped>

</style>