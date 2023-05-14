<template>
  <div style='height: 900px;border: 1px solid #000000;'>
    <pro-layout :menu-data='menuData' />
  </div>
</template>

<script setup lang="ts">
import { ProLayout } from 'lc-vue-pro-layout';

const menuData = [
  {
    'key': 'welcome',
    'label': '首页',
    'icon': 'House',
    'children': [
      {
        'key': 'welcome1-1',
        'label': '首页1-1',
        'children': null
      },
      {
        'key': 'welcome1-2',
        'label': '首页1-2',
        'children': null
      }
    ]
  },
  {
    'key': 'welcome1',
    'label': '首页1',
    'icon': 'House',
    'children': null
  },
  {
    'key': 'welcome2',
    'label': '首页2',
    'icon': 'House',
    'children': null
  },
  {
    'key': 'welcome3',
    'label': '首页3',
    'icon': 'House',
    'children': null
  }
];
</script>

<style scoped>

</style>