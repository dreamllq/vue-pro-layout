import { Ref, computed, ref } from 'vue';
import { createGlobalState } from '@vueuse/core';
import { LayoutProps } from './types';

export const useState = createGlobalState(
  () => {
    const config = ref<LayoutProps>();
    const menuIsCollapse = ref(false);

    const setConfig = (c:LayoutProps) => {
      config.value = c;
    };

    const siderWidth = computed(() => menuIsCollapse.value ? '64' : config.value?.siderWidth);
    return {
      config,
      menuIsCollapse,
      siderWidth,
      setConfig 
    };
  }
);