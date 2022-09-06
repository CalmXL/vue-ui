<script setup>

  import PageBtn from './PageBtn';
  import Ellipsis from './Ellipsis';
  import PageTurning from './PageTurning';

  const props = defineProps({
    curIdx: Number,
    prevDisable: Boolean,
    nextDisable: Boolean,
    prevPageArr: Array,
    nextPageArr: Array,
    fEllipsisShow: Boolean,
    lEllipsisShow: Boolean
  })

</script>

<template>
  <span class="p-num">
    <PageTurning 
      btnType="prev"
      :disabled="prevDisable"
    ></PageTurning>
    <page-btn 
      :curIdx="curIdx"
      :pageArr="prevPageArr"
    ></page-btn>
    <ellipsis 
      :isShow="fEllipsisShow"
    ></ellipsis>
    <page-btn 
      :curIdx="curIdx"
      :pageArr="nextPageArr"
    ></page-btn>
    <ellipsis 
      :isShow="lEllipsisShow"
    ></ellipsis>
    <PageTurning 
      btnType="next"
      :disabled="nextDisable"
    ></PageTurning>
  </span>
</template>

<style lang="scss">

  a {
    text-decoration: none;
  }
 
    
  a {
    display: inline-block;
    height: 36px;
    line-height: 36px;
    padding: 0 14px;
    margin-right: 5px;
    font-size: 14px;
    color: #333;
    border: solid 1px #ddd;
    background-color: #f7f7f7;
  }

</style>