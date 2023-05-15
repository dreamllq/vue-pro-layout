<template>
  <el-form inline>
    <el-form-item label='layout'>
      <el-radio-group v-model='layout'>
        <el-radio-button label='mix' />
        <el-radio-button label='side' />
        <el-radio-button label='top' />
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model='suppressSiderWhenMenuEmpty'>
        suppressSiderWhenMenuEmpty
      </el-checkbox>
    </el-form-item>
  </el-form>
  <div style='height: 900px;border: 1px solid #000000;'>
    <pro-layout
      ref='layoutRef'
      :menu='menu'
      :avatar='avatar'
      :layout='layout'
      :suppress-sider-when-menu-empty='suppressSiderWhenMenuEmpty'
      @avatar-command='handleAvatarCommand'
      @menu-select='onMenuSelect'>
      <el-button @click='jump("welcome1-1")'>
        首页1-1
      </el-button>
      <el-button @click='jump("welcome1")'>
        首页1
      </el-button>

      <template #avatarDropdown>
        <el-dropdown-menu>
          <el-dropdown-item command='a'>
            Action 1
          </el-dropdown-item>
          <el-dropdown-item command='b'>
            Action 2
          </el-dropdown-item>
          <el-dropdown-item command='c'>
            Action 3
          </el-dropdown-item>
          <el-dropdown-item command='d' disabled>
            Action 4
          </el-dropdown-item>
          <el-dropdown-item command='e' divided>
            Action 5
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </pro-layout>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ProLayout } from 'lc-vue-pro-layout';

const menuData = [
  {
    'key': 'welcome',
    'label': '首页',
    'icon': 'House',
    'children': [
      {
        'key': 'welcome1-1',
        'icon': 'House',
        'label': '首页1-1',
        'children': null
      },
      {
        'key': 'welcome1-2',
        'icon': 'House',
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

const layoutRef = ref();
const layout = ref('mix');
const suppressSiderWhenMenuEmpty = ref(false);
const menu = reactive({
  data: menuData,
  index: 'welcome1-2'
});
const avatar = reactive({
  src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  title: 'name'
});

const onMenuSelect = (...args) => {
  console.log('onMenuSelect', args);
};

const handleAvatarCommand = (...args) => {
  console.log('handleAvatarCommand', args);
};

const jump = (index: string) => {
  layoutRef.value.setMenuIndex(index);
};
</script>

<style scoped>

</style>