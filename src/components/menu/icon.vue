<template>
  <el-icon v-if='!!props.icon'>
    <component :is='props.icon' />
  </el-icon>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>

</style>