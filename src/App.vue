<script setup>
  import menuData from '@/data/selector'; 
  import dataPagerData from './data/dataPager';
</script>

<template>
  <div class="container">
    <!-- <selector
      :menuData="menuData"
    ></selector> -->
    <data-pager 
      :data="dataPagerData"
    ></data-pager>
  </div>
</template>

<style lang="scss" scoped>

</style>