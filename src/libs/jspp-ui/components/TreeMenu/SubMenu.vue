<script setup>
  import { ref } from 'vue';
  
  const subMenuShow = ref(false);

  const props = defineProps({
    item: Object
  });

  const showSubMenu = () => {
    subMenuShow.value = true;
  }

  const hideSubMenu = () => {
    subMenuShow.value = false;
  }

</script>

<template>
  <div 
    class="sub-menu"
    @mouseenter="showSubMenu"
    @mouseleave="hideSubMenu"
  >
    <div class="title">
      {{ item.title }}
      <span class="icon">&gt;</span>
    </div>
    <div 
      class="sub-item" 
      v-show="subMenuShow"
    > 
      <tree-menu :menuData="item.children"></tree-menu>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .sub-menu {
    position: relative;
    height: 50px;
    
    .title {
      position: relative;
      line-height: 50px;
      text-align: center;

      .icon {
        position: absolute;
        top: 0;
        right: 15px;
      }
    }

    .sub-item {
      position: absolute;
      left: 100%;
      top: 0;
      width: 100%;
      background-color: #333;
      color: #fff;
    }
  }
</style>