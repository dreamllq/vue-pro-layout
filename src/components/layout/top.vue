<template>
  <div class='lc-pro-layout top'>
    <el-container style='height: 100%;'>
      <el-header height='55px' style='padding: 0;' class='layout-header'>
        <div class='header-container flex'>
          <div class='logo-container flex-none flex container-item'>
            <slot name='logo'>
              <layout-logo />
            </slot>
          </div>
          <div v-if='slots.menuHeader' class='menu-header-container flex-none container-item'>
            <slot name='menuHeader' />
          </div>
          <div class='menu-container flex-item container-item'>
            <top-menu />
          </div>
          <div class='actions-container flex-none container-item'>
            <horizontal-actions>
              <template #default>
                <slot name='actions' />
              </template>
              <template v-if='slots.avatarDropdown' #avatarDropdown>
                <slot name='avatarDropdown' />
              </template>
            </horizontal-actions>
          </div>
          <div v-if='slots.menuFooter' class='menu-footer-container flex-none container-item'>
            <slot name='menuFooter' />
          </div>
        </div>
      </el-header>
      <el-main>
        <slot />
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
import LayoutLogo from '@/components/logo/index.vue';
import HorizontalActions from '@/components/actions/horizontal.vue';
import TopMenu from '@/components/menu/top-menu.vue';
const slots = useSlots();

</script>

<style scoped lang="scss">

.layout-header {
  border-bottom: 1px solid var(--el-border-color);
}

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