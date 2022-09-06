<script setup>
  import { reactive, computed, provide } from 'vue';

  import PageNum from './pageNum';
  import PageSkip from './pageSkip';

  import { computedPageArr } from './utils';

  const props = defineProps({
    data: {
      type: Array,
      default: []
    }
  });

  const state = reactive({
    curIdx: 17,
    allPages: props.data.length,
    fEllipsisShow: false,
    lEllipsisShow: true,
    nextPageArr: []
  });   

  const prevDisable = computed(() => {
    return state.curIdx === 0 ? true : false; 
  });

  const nextDisable = computed(() => {
    return state.curIdx === state.allPages - 1 ? true : false;
  });

  const prevPageArr = computed(() => {
    return computedPageArr(state);
  });

  const setCurIdx = (index) => {
    index < 0 && (index = 0);
    index > state.allPages && (index = state.allPages - 1);
    isNaN(index) && (index = 0);
    state.curIdx = index;
  }

  const pageTurningClick = (type) => {
    switch (type) {
      case 'prev':
        state.curIdx > 0 && state.curIdx --;
        break;
      case 'next':
        state.curIdx < state.allPages - 1 && state.curIdx ++;
        break;
      default:
        break;
    }
  }

  provide('setCurIdx', setCurIdx);
  provide('pageTurningClick', pageTurningClick);
  
</script>

<template>
  <div class="dataPager">
    <page-num
      :data="data"
      :curIdx="state.curIdx"
      :prevDisable="prevDisable"
      :nextDisable="nextDisable"
      :prevPageArr="prevPageArr"
      :nextPageArr="state.nextPageArr"
      :fEllipsisShow="state.fEllipsisShow"
      :lEllipsisShow="state.lEllipsisShow"
    >
    </page-num>
    <page-skip
      :allPages="state.allPages"
      :curIdx="state.curIdx"
    ></page-skip>
  </div>
</template>

<style lang="scss" scoped>
  .dataPager {
    margin: 200px 0 0 200px;
  }
</style>