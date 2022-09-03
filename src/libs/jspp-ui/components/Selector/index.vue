<script setup>
  import SelectorInput from './Input.vue';
  import SelectorMenu from './Menu.vue';
  
  import vFocus from '../../directives/focus';
  import { ref } from 'vue';


  const inputValue = ref('');
  const searchWord = ref('');

  const setItemValue = (val) => {
    inputValue.value = val;
  };

  const props = defineProps({
    menuData: Array
  })

  const searchOptions = (val) => {
    searchWord.value = val;
  }

</script>

<template>
  <div class="selector"  v-focus>
    <selector-input
      placeholder="请选择"
      :inputValue="inputValue"
      @searchOptions="searchOptions"
    ></selector-input>
    <selector-menu
      :menuData="menuData"
      @setItemValue="setItemValue"
      :searchWord="searchWord"
    ></selector-menu>
  </div>
</template>

<style lang="scss" scoped>
  .selector {
    position: relative;
    margin: 100px auto;
    width: 300px;
    border: solid 1px #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
</style>