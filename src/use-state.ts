import { Ref, ref } from 'vue';
import { createGlobalState } from '@vueuse/core';
import { LayoutProps } from './types';

export const useState = createGlobalState(
  () => {
    const config = ref<LayoutProps>();

    const setConfig = (c:LayoutProps) => {
      config.value = c;
    };
    return {
      config: config as Ref<Readonly<LayoutProps>>,
      setConfig 
    };
  }
);