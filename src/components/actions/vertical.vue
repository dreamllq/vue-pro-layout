<template>
  <div class='layout-actions vertical flex flex-column' style='align-items: center;'>
    <div class='actions-container flex-none'>
      <slot />
    </div>
    <div class='avatar-container flex-none'>
      <avatar :menu-is-collapse='menuIsCollapse'>
        <template v-if='slots.avatarDropdown' #dropdown>
          <slot name='avatarDropdown' />
        </template>
      </avatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
import { useState } from '@/use-state';
import Avatar from './avatar.vue';

const { menuIsCollapse } = useState();
const slots = useSlots();
</script>

<style scoped>

</style>