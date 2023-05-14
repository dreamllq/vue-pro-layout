<template>
  <el-menu
    ref='menu'
    :mode='mode'
    :collapse='isCollapse'
    :default-active='menuIndex'
    style='border: 0;'
    @select='onSelect'
  >
    <template v-for='item in menuData'>
      <sub-menu
        v-if='Array.isArray(item.children) && item.children.length > 0'
        :key='item.key'
        :menu-item='item'
      />
      <el-menu-item
        v-else
        :key='item.key.toString()'
        :index='item.key'
      >
        <el-icon v-if='item.icon'>
          <component :is='item.icon' />
        </el-icon>
        <template #title>
          {{ item.label }}
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>
    
<script setup lang="ts">
import { PropType } from 'vue';
import SubMenu from './sub-menu.tsx';
import { MenuItem } from '@/types';
import { useBus } from '@/use-bus';

const bus = useBus();

defineProps({
  menuData: {
    type: Array as PropType<MenuItem[]>,
    default: () => [] 
  },
  menuIndex: {
    type: String,
    default: null 
  },
  isCollapse: {
    type: Boolean,
    default: false
  },
  mode: {
    type: String,
    default: 'vertical'
  }
});

const onSelect = (...args) => {
  bus.emit('menu-select', ...args);
};

</script>

<style lang="scss">
.layout-popper {
  position: fixed !important;

  >.el-menu--popup {
    max-height: 400px;
    overflow-y: auto;
  }
}
</style>