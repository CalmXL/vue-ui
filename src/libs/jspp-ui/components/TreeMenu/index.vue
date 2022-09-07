<script setup>
  const props = defineProps({
    menuData: Array
  });
</script>

<template>
  <div class="tree-menu">
    <template v-for="item of menuData">  
      <menu-item 
        v-if="!item.children"
        :key="item.id"
        :item="item"
      >
      </menu-item>
      <sub-menu 
        v-else
        :item="item"
      >
      </sub-menu>
    </template>
  </div>
</template>

<style lang="scss" scoped>
  .tree-menu {
    width: 100%;
    background-color: #ddd;
  }
</style>