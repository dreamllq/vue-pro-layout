<template>
  <lc-menu
    :menu-data='config.menu.data'
    :menu-index='config.menu.index'
    :is-collapse='menuIsCollapse'
    mode='vertical'
    @select='onSelect' />
</template>

<script setup lang="ts">
import LcMenu from '@/packages/menu/index.vue';
import { useState } from '@/use-state';
import { useBus } from '@/use-bus';

const { config, menuIsCollapse } = useState();
const bus = useBus();

const onSelect = (index) => {
  config.value!.menu.index = index;
  bus.emit('menu-select', index);
};
</script>

<style scoped>

</style>