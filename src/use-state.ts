import { computed, ref } from 'vue';
import { LayoutProps } from './types';
import { cloneDeep } from 'lodash';
import { createInjectionState } from '@vueuse/shared';
import EventEmitter from 'eventemitter3';

const [useProvideState, useState] = createInjectionState((props: LayoutProps) => {
  const config = ref<LayoutProps>(cloneDeep(props));
  const siderWidth = computed(() => config.value?.collapsed ? '64' : config.value?.siderWidth);
  const bus = new EventEmitter();

  return {
    bus,
    config,
    siderWidth
  };
});

export { useProvideState, useState };