<template>
  <div class='lc-pro-layout mix'>
    <el-container style='height: 100%;'>
      <el-header height='55px' style='padding: 0;' class='layout-header'>
        <div class='header-container flex'>
          <div class='logo-container flex-none flex container-item'>
            <layout-logo />
          </div>
          <div class='menu-container flex-item container-item'>
            <mix-top-menu />
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
        </div>
      </el-header>
      <el-container>
        <el-aside v-if='showSide' :width='`${siderWidth}px`' style='overflow: revert; transition: all .5s ease 0s;'>
          <div class='aside-container flex flex-column' style='height: 100%;'>
            <div v-if='slots.menuHeader' class='menu-header-container flex-none container-item'>
              <slot name='menuHeader' />
            </div>
            <div class='menu-container flex-item container-item'>
              <mix-side-menu />
            </div>
            <div v-if='slots.menuFooter' class='menu-footer-container flex-none container-item'>
              <slot name='menuFooter' />
            </div>
            <div class='aside-collapsed-button' @click='onCollapsed'>
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
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useSlots, computed } from 'vue';
import { useState } from '@/use-state';
import { useMixMenuState } from '@/use-mix-menu-state';
import LayoutLogo from '@/components/logo/index.vue';
import HorizontalActions from '@/components/actions/horizontal.vue';
import MixTopMenu from '@/components/menu/mix-top-menu.vue';
import MixSideMenu from '@/components/menu/mix-side-menu.vue';

const { siderWidth, config } = useState();
const { sideMenuData } = useMixMenuState();
const slots = useSlots();

const showSide = computed(() => !(config.value.suppressSiderWhenMenuEmpty === true && sideMenuData.value.length === 0));

const onCollapsed = () => {
  config.value!.collapsed = !config.value?.collapsed;
};
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

.aside-container {
  background-color: var(--el-color-primary);
  padding: 0 8px;
  box-sizing: border-box;
  position: relative;

  .container-item {
    margin: 4px 0;
    box-sizing: border-box;
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