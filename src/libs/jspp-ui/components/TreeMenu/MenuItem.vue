<script setup>
  const prop = defineProps({
    item: Object
  });
</script>

<template>
  <div 
    class="menu-item"
  >
    {{ item.title }}
  </div>
</template>

<style lang="scss" scoped>
  .menu-item {
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
</style>       
