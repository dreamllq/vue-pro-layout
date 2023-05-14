<template>
  <div class='lc-pro-layout side'>
    <el-container style='height: 100%;'>
      <el-aside :width='`${config.siderWidth}px`'>
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
            <horizontal-actions>
              <template #default>
                <slot name='actions' />
              </template>
            </horizontal-actions>
          </div>
          <div v-if='slots.menuFooter' class='class-menu-footer-container flex-none container-item'>
            <slot name='menuFooter' />
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

const { config } = useState();
const slots = useSlots();
</script>

<style scoped lang="scss">
.aside-container {
  background-color: var(--el-color-primary);
  padding: 0 8px;
  box-sizing: border-box;

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
</style>