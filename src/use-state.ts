import { computed, ref } from 'vue';
import { createGlobalState } from '@vueuse/core';
import { LayoutProps } from './types';
import { cloneDeep } from 'lodash';

export const useState = createGlobalState(
  () => {
    const config = ref<LayoutProps>();

    const setConfig = (c:LayoutProps) => {
      config.value = cloneDeep(c);
    };

    const siderWidth = computed(() => config.value?.collapsed ? '64' : config.value?.siderWidth);
    return {
      config,
      siderWidth,
      setConfig 
    };
  }
);