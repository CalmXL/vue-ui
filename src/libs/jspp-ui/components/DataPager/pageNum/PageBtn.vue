<script setup>
  import { inject } from 'vue';
  const props = defineProps({
    curIdx: Number,
    pageArr: Array
  });

  const setCurIdx = inject('setCurIdx');

</script>

<template>
  <a  
    v-for="(item, index) of pageArr"
    :class="[curIdx === item - 1  ? 'curr' : '']" 
    href="javascript:;"
    :key="index"
    @click="setCurIdx(item - 1)"
  >{{ item }}</a>
</template>

<style lang="scss" scoped>

    .curr {
      border: 0 none;
      padding: 1px 15px;
      background: 0 0;
      color: #e4393c;
      cursor: default;
    }
      
</style>