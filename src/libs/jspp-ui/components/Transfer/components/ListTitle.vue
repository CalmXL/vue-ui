<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: () => '列表'
    }
  })
</script>

<template>
  <h1 class="list-title">{{ title }}</h1>
</template>

<style lang="scss" scoped>
   .list-title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 38px;
      font-weight: normal;
      margin: 0;
      font-size: 20px;
      background-color: #ccc;
      color: #666;
    }
</style>