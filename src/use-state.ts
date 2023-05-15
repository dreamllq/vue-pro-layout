import { computed, ref } from 'vue';
import { LayoutProps } from './types';
import { cloneDeep } from 'lodash';
import { createInjectionState } from '@vueuse/shared';

const [useProvideState, useState] = createInjectionState((props: LayoutProps) => {
  const config = ref<LayoutProps>(cloneDeep(props));
  const siderWidth = computed(() => config.value?.collapsed ? '64' : config.value?.siderWidth);

  return {
    config,
    siderWidth
  };
});

export { useProvideState, useState };