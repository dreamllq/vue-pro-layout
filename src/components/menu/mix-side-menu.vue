<template>
  <biz-menu
    :menu-data='sideMenuData'
    :menu-index='config?.menu.index'
    :is-collapse='config?.collapsed'
    mode='vertical'
    @select='onSelect' />
</template>

<script setup lang="ts">
import { BizMenu } from 'lc-vue-biz-menu';
import { useState } from '@/use-state';
import { useBus } from '@/use-bus';
import { useMixMenuState } from '@/use-mix-menu-state';

const { config } = useState()!;
const bus = useBus();
const { sideMenuData } = useMixMenuState()!;


const onSelect = (index) => {
  config.value!.menu.index = index;
  bus.emit('menu-select', index);
};
</script>

<style scoped>

</style>