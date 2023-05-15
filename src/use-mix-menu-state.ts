import { Ref, computed, ref } from 'vue';
import { createGlobalState } from '@vueuse/core';
import { useState } from '@/use-state';
import { MenuItem } from './types';

export const useMixMenuState = createGlobalState(
  () => {
    const { config } = useState();

    const topMenuData = computed(() => config.value!.menu.data.map(item => ({
      key: item.key,
      label: item.label,
      icon: item.icon
    })));
    
    const firstLevelMenuIndexMap = computed(() => {
      const getChildrenKeys = (item) => {
        let childrenKeys = [];
        if (Array.isArray(item.children)) {
          childrenKeys = item.children.reduce((acc, child) => {
            const res = getChildrenKeys(child);
            return [...acc, ...res];
          }, []);
        }
        return [item.key, ...childrenKeys];
      };
    
      return config.value!.menu.data.reduce((acc, item) => {
        acc[item.key] = getChildrenKeys(item);
        return acc;
      }, {});
    });
    
    const topMenuIndex = computed(() => {
      let index = '';
    
      Object.keys(firstLevelMenuIndexMap.value).forEach((key) => {
        if (firstLevelMenuIndexMap.value[key].includes(config.value!.menu.index)) {
          index = key;
        }
      });
      return index;
    });

    const firstLevelMenuDataMap = computed(() => config.value!.menu.data.reduce<{[index: string]: MenuItem[] | undefined}>((acc, item) => {
      acc[item.key] = item.children;
      return acc;
    }, {}));

    const sideMenuData = computed(() => firstLevelMenuDataMap.value[topMenuIndex.value] || []);

    const getChildrenFirst = (item) => {
      if (Array.isArray(item.children) && item.children.length > 0) {
        return getChildrenFirst(item.children[0]);
      } else {
        return item.key;
      }
    };

    const getSideMenuDataFirst = (firstLevelMenuKey:string) => {
      const menuData = firstLevelMenuDataMap.value[firstLevelMenuKey];

      if (Array.isArray(menuData) && menuData.length > 0) {
        return getChildrenFirst(menuData[0]);
      } else {
        return undefined;
      }
    };

    return {
      firstLevelMenuIndexMap,
      topMenuData,
      topMenuIndex,
      sideMenuData,
      getSideMenuDataFirst
    };
  }
);