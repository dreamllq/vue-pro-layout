# lc-vue-pro-layout

基于vue3+element-plus的高级布局组件

## 安装

```bash
npm i lc-vue-pro-layout
```

## 基本使用

```vue
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
```


## Api

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| title | 左上角标题 | string | lc pro |
| layout | 布局类型 | 'side' \| 'top' \| 'mix' | side |
| siderWidth | 左侧sider宽度 | number | 256 |
| suppressSiderWhenMenuEmpty | 是否支持menu为空时隐藏sider | boolean | false |
| menu | 菜单数据 | MenuProps | - |
| avatar | 头像数据 | AvatarProps | - |
| collapsed | 是否折叠 | boolean | false | 

### Events

| 事件名 | 说明 | 类型 |
| ---- | ---- | ---- |
| menu-select | 菜单选择 | index: 选中菜单项的 index |
| avatar-command | 头像dropdown command | command |

### Slots

 | 插槽名 | 	说明 | 
 | ---- | ---- |
 | default | 布局主数据 |
 | menuHeader | 渲染菜单头 |
 | menuFooter | 渲染菜单页脚 | 
 | actions | 渲染actions区域 |
 | avatarDropdown | 渲染头像dropdown | 

### Exposes

| 名称 | 描述 | 类型 |
| ---- | ---- | ---- |
| setMenuIndex | 设置menu选中的index | (index:string)=>\{\} |
| setCollapsed | 设置sider是否折叠 | (collapsed: boolean)=>\{\} |


## Types

### MenuProps

```ts
interface MenuProps {
  data: MenuItem[],
  index: string,
  uniqueOpened?: boolean
}
```

### MenuItem

```ts
interface MenuItem {
  key: string,
  label: string,
  icon?: string,
  subPages?: string[],
  children?: MenuItem[]
}
```

### AvatarProps

```ts
interface AvatarProps{
  src?: string,
  title?: string
}
```