<script setup>
  import dataPagerData from './data/dataPager';
  import menuData from './data/menu';
  import transferData from './data/transferData';
</script>

<template>
  <div class="container">
    <!-- <selector
      :menuData="menuData"
    ></selector> -->
    <!-- <data-pager 
      :data="dataPagerData"
    ></data-pager> -->
    <!-- <div class="side-bar">
      <tree-menu 
        :menuData="menuData"
      >
      </tree-menu>
    </div> -->
    <!-- <Modal
      :show="true"
      :width="350"
      :borderRadius="10"
      :headerColor="#007bff"
      headerText="This is modal"
      headerTextColor="#fff"
      contentText="this is contentthis is contentthis is contentthis is content"
      contentTextColor="#333"
    /> -->

    <!-- <transfer :data="transferData"></transfer> -->

    <stars
      :num="1.6"
      :size="20"
    ></stars>
  </div>
</template>

<style lang="scss" scoped>
  
  .container {
    width: 100%;
    height: 100%;

    .side-bar {
      width: 200px;
    }
  }
</style>