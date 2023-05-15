<template>
  <div class='layout-actions horizontal flex'>
    <div v-if='config.layout === "top" || config.layout === "mix"' class='actions-container flex-item'>
      <slot />
    </div>
    <div class='avatar-container flex-none'>
      <avatar>
        <template v-if='slots.avatarDropdown' #dropdown>
          <slot name='avatarDropdown' />
        </template>
      </avatar>
    </div>
    <div v-if='config.layout === "side"' class='actions-container flex-item'>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
import { useState } from '@/use-state';
import Avatar from './avatar.vue';

const { config } = useState();
const slots = useSlots();

</script>

<style scoped>

</style>