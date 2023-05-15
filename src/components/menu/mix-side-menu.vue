<template>
  <lc-menu
    :menu-data='sideMenuData'
    :menu-index='config.menu.index'
    :is-collapse='menuIsCollapse'
    mode='vertical'
    @select='onSelect' />
</template>

<script setup lang="ts">
import LcMenu from '@/packages/menu/index.vue';
import { useState } from '@/use-state';
import { useBus } from '@/use-bus';
import { useMixMenuState } from '@/use-mix-menu-state';

const { config, menuIsCollapse } = useState();
const bus = useBus();
const { sideMenuData } = useMixMenuState();


const onSelect = (index) => {
  bus.emit('menu-select', index);
};
</script>

<style scoped>

</style>