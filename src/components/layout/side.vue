<template>
  <div class='lc-pro-layout side'>
    <el-container style='height: 100%;'>
      <el-aside :width='`${siderWidth}px`' style='overflow: revert; transition: all .5s ease 0s;'>
        <div class='aside-container flex flex-column'>
          <div class='logo-container flex-none flex container-item'>
            <layout-logo />
          </div>
          <div v-if='slots.menuHeader' class='menu-header-container flex-none container-item'>
            <slot name='menuHeader' />
          </div>
          <div class='menu-container flex-item container-item'>
            <aside-menu />
          </div>
          <div class='actions-container flex-none container-item'>
            <horizontal-actions v-if='menuIsCollapse === false'>
              <template #default>
                <slot name='actions' />
              </template>
            </horizontal-actions>
            <vertical-actions v-else>
              <template #default>
                <slot name='actions' />
              </template>
            </vertical-actions>
          </div>
          <div v-if='slots.menuFooter' class='class-menu-footer-container flex-none container-item'>
            <slot name='menuFooter' />
          </div>
          <div class='aside-collapsed-button' @click='onCollapsed'>
            <el-icon>
              <template v-if='menuIsCollapse'>
                <component is='ArrowRight' />
              </template>
              <template v-else>
                <component is='ArrowLeft' />
              </template>
            </el-icon>
          </div>
        </div>
      </el-aside>
      <el-main>
        <slot />
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
import { useState } from '@/use-state';
import LayoutLogo from '@/components/logo/index.vue';
import AsideMenu from '@/components/menu/index.vue';
import HorizontalActions from '@/components/actions/horizontal.vue';
import VerticalActions from '@/components/actions/vertical.vue';

const { menuIsCollapse, siderWidth } = useState();
const slots = useSlots();

const onCollapsed = () => {
  menuIsCollapse.value = !menuIsCollapse.value;
};
</script>

<style scoped lang="scss">
.aside-container {
  background-color: var(--el-color-primary);
  padding: 0 8px;
  box-sizing: border-box;
  position: relative;

  .container-item {
    margin: 4px 0;
  }
}

.logo-container {
  height: 55px;
  align-items: center;
  padding: 16px 12px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.menu-container {
  --el-menu-bg-color: var(--el-color-primary);
  --el-menu-text-color: #EEEEEE;
  --el-menu-active-color: #FFFFFF;
  --el-menu-hover-bg-color: rgb(0 0 0 / 6%);
  --el-menu-active-bg-color: #1677FF;
  --el-menu-item-height: 40px;
  --el-menu-sub-item-height: var(--el-menu-item-height);
  --el-menu-base-level-padding: 12px;

  box-sizing: border-box;

  ::v-deep(.el-menu) {
    .el-sub-menu__title {
      border-radius: 4px;
    }

    .el-menu-item {
      margin: 4px 0;
      border-radius: 4px;
      
      &.is-active {
        background-color: var(--el-menu-active-bg-color);
      }
    }

  }
}

.aside-collapsed-button {
  position: absolute;
  inset-block-start: 18px;
  z-index: 101;
  width: 24px;
  height: 24px;
  text-align: center;
  border-radius: 40px;
  inset-inline-end: -13px;
  transition: transform .3s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: rgb(0 0 0 / 25%);
  background-color: #FFFFFF;
  box-shadow: 0 2px 8px -2px rgb(0 0 0 / 5%), 0 1px 4px -1px rgb(25 15 15 / 7%), 0 0 1px 0 rgb(0 0 0 / 8%);
}
</style>