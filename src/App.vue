<script setup>
  import dataPagerData from './data/dataPager';
  import menuData from './data/menu';
</script>

<template>
  <div class="container">
    <!-- <selector
      :menuData="menuData"
    ></selector> -->
    <!-- <data-pager 
      :data="dataPagerData"
    ></data-pager> -->
    <div class="side-bar">
      <tree-menu 
        :menuData="menuData"
      >
      </tree-menu>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    width: 100%;

    .side-bar {
      width: 200px;
    }
  }
</style>