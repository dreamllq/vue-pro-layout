<template>
  <div class='lc-pro-layout side'>
    <el-container style='height: 100%;'>
      <el-aside :width='`${siderWidth}px`' style='overflow: revert; transition: all .5s ease 0s;'>
        <div class='aside-container flex flex-column' style='height: 100%;'>
          <div class='logo-container flex-none container-item'>
            <slot name='logo'>
              <layout-logo :menu-is-collapse='config?.collapsed' />
            </slot>
          </div>
          <div v-if='slots.menuHeader' class='menu-header-container flex-none container-item'>
            <slot name='menuHeader' />
          </div>
          <div class='menu-container flex-item container-item'>
            <side-menu />
          </div>
          <div v-if='config.avatar' class='actions-container flex-none container-item'>
            <horizontal-actions v-if='config?.collapsed === false'>
              <template #default>
                <slot name='actions' />
              </template>
              <template v-if='slots.avatarDropdown' #avatarDropdown>
                <slot name='avatarDropdown' />
              </template>
            </horizontal-actions>
            <vertical-actions v-else>
              <template #default>
                <slot name='actions' />
              </template>
              <template v-if='slots.avatarDropdown' #avatarDropdown>
                <slot name='avatarDropdown' />
              </template>
            </vertical-actions>
          </div>
          <div v-if='slots.menuFooter' class='menu-footer-container flex-none container-item'>
            <slot name='menuFooter' />
          </div>
          <div v-if='!config.hiddenCollapsedButton' class='aside-collapsed-button' @click='onCollapsed'>
            <el-icon>
              <template v-if='config?.collapsed'>
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
// import AsideMenu from '@/components/menu/index.vue';
import SideMenu from '@/components/menu/side-menu.vue';
import HorizontalActions from '@/components/actions/horizontal.vue';
import VerticalActions from '@/components/actions/vertical.vue';

const { siderWidth, config } = useState()!;
const slots = useSlots();

const onCollapsed = () => {
  config.value!.collapsed = !config.value?.collapsed;
};
</script>

<style scoped lang="scss">
.aside-container {
  background-color: var(--el-color-primary);
  padding: 0 8px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  .logo-container {
    height: 55px;
    align-items: center;
    padding: 16px 12px;
    box-sizing: border-box;
    border-bottom: 1px solid var(--el-border-color-lighter);
    margin-top: 0;
    display: flex;
  }

  .menu-container {
    overflow-y: auto;
    overflow-x: hidden;
  }
}

.container-item {
  margin: 4px 0;
  box-sizing: border-box;
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