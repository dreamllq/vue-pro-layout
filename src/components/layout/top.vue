<template>
  <div class='lc-pro-layout top'>
    <el-container style='height: 100%;'>
      <el-header height='55px' style='padding: 0;'>
        <div class='header-container flex'>
          <div class='logo-container flex-none flex container-item'>
            <layout-logo />
          </div>
          <div class='menu-header-container flex-none container-item' />
          <div class='menu-container flex-item container-item'>
            <aside-menu mode='horizontal' />
          </div>
          <div class='actions-container flex-none container-item'>
            <horizontal-actions>
              <template #default>
                <slot name='actions' />
              </template>
            </horizontal-actions>
          </div>
          <div class='menu-footer-container flex-none container-item' />
        </div>
      </el-header>
      <el-main>
        <slot />
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import LayoutLogo from '@/components/logo/index.vue';
import HorizontalActions from '@/components/actions/horizontal.vue';
import AsideMenu from '@/components/menu/index.vue';

</script>

<style scoped lang="scss">
.header-container {
  background-color: var(--el-color-primary);
  height: 100%;
  align-items: center;
  padding: 0 16px;

  .container-item {
    margin: 0 6px;
  }
}
</style>