<template>
  <el-dropdown v-if='slots.dropdown' @command='handleCommand'>
    <div class='avatar-item flex'>
      <div class='flex-none'>
        <div class='flex'>
          <el-avatar size='small' :src='config?.avatar.src' />
        </div>
      </div>
      <div v-if='menuIsCollapse === false' class='flex-none name'>
        {{ config?.avatar.title }}
      </div>
    </div>
    <template #dropdown>
      <slot name='dropdown' />
    </template>
  </el-dropdown>
  <div v-else class='avatar-item flex'>
    <div class='flex-none'>
      <div class='flex'>
        <el-avatar size='small' :src='config?.avatar.src' />
      </div>
    </div>
    <div v-if='menuIsCollapse === false' class='flex-none name'>
      {{ config?.avatar.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
import { useState } from '@/use-state';
import { useBus } from '@/use-bus';

defineProps({
  menuIsCollapse: {
    type: Boolean,
    default: false
  }
});

const { config } = useState();
const slots = useSlots();
const bus = useBus();

const handleCommand = (...args) => {
  bus.emit('avatar-command', ...args);
};

</script>

<style scoped lang="scss">
.avatar-item {
  padding: 8px;
  border-radius: 4px;
  cursor: default;
  align-items: center;


  &:hover {
    background-color: rgb(0 0 0 / 6%);
  }

  .name {
    margin-left: 8px;
    font-size: 14px;
    color: #FFFFFF;
  }
}
</style>