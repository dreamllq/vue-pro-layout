<template>
  <div class='layout-actions horizontal flex'>
    <div class='avatar-container flex-none'>
      <avatar />
    </div>
    <div class='actions-container flex-item'>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from './avatar.vue';

</script>

<style scoped>

</style>