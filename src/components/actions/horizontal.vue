<template>
  <div class='layout-actions horizontal flex'>
    <div v-if='config.layout === "top" || config.layout === "mix"' class='actions-container flex-item'>
      <slot />
    </div>
    <div class='avatar-container flex-none'>
      <avatar />
    </div>
    <div v-if='config.layout === "side"' class='actions-container flex-item'>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from './avatar.vue';
import { useState } from '@/use-state';

const { config } = useState();
</script>

<style scoped>

</style>