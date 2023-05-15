<template>
  <biz-menu
    :menu-data='config?.menu.data'
    :menu-index='config?.menu.index'
    :is-collapse='config?.collapsed'
    :unique-opened='config?.menu.uniqueOpened'
    mode='vertical'
    @select='onSelect' />
</template>

<script setup lang="ts">
import { BizMenu } from 'lc-vue-biz-menu';
import { useState } from '@/use-state';
import { useBus } from '@/use-bus';

const { config } = useState()!;
const bus = useBus();

const onSelect = (index) => {
  config.value!.menu.index = index;
  bus.emit('menu-select', index);
};
</script>

<style scoped>

</style>