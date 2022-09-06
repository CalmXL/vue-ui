<script setup>
  import { inject, ref } from 'vue'; 

  const props = defineProps({
    allPages: Number,
    curIdx: Number
  });

  const inputRef = ref(null);

  const setCurIdx = inject('setCurIdx')
  
  const submitClick = () => {
    let index = Number(inputRef.value.value);
    setCurIdx(index - 1);
    if (index < 0) {
      inputRef.value.value = 1;
    }
  }


</script>

<template>
  <span class="page-skip">
    <em>
      共
      <b>{{ allPages }}</b>
      页&nbsp;&nbsp;到第
    </em>
    <input 
      type="text" 
      :value="curIdx + 1"
      class="input-txt"
      ref="inputRef"
    />
    <em>页</em>
    <a 
      href="javascript:;"
      class="btn"
      @click="submitClick"
    >确定</a>
  </span>
</template>

<style lang="scss" scoped>
  .input-txt {
    width: 30px;
    height: 30px;
    margin: 0 3px;
    padding: 3px;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
    border: solid 1px #ccc;
  }

  .btn {
    margin-left: 10px;
  }
</style>