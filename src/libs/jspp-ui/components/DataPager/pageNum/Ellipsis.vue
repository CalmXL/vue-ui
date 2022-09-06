<script setup>
  const props = defineProps({
    isShow: Boolean
  })
</script>

<template>
  <b 
    class="btn-item ellipsis"
    v-if="isShow"
  >...</b>
</template>

<style lang="scss" scoped>
  .btn-item {
    height: 36px;
    padding: 0 10px;
    color: #ccc;
    margin-right: 5px;
  }
</style>