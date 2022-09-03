<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    placeholder: String,
    inputValue: {
      type: String,
      default: ''
    }
  });

  const inputRef = ref('');
  const emit = defineEmits(['searchOptions']);

  const searchOptions = (e) => {
    const val = e.target.value;
    emit('searchOptions', val);
  }

  const setValue = (value) => {
    let val = inputRef.value.value;
   
    if (val.length > 0) {
      inputRef.value.value = value;
    }
  }
 
</script>

<template>
  <div class="selector-input">
    <label class="placeholder">{{ placeholder }}</label>
    <input 
      type="text" 
      class="input"
      :value="inputValue"
      ref="inputRef"
      @input="searchOptions($event)"
      @focus="searchOptions($event)"
      @blur="setValue(inputValue)"
    />
    <i class="iconfont icon-arrow-down"></i>
  </div>
</template>

<style lang="scss" scoped>
  .selector-input {
    position: relative;
    width: 100%;
    height: 38px;
    box-sizing: border-box;

    .input {
      width: 100%;
      height: 100%;
      text-indent: 5px;
      border: solid 1px #424242;
      border-radius: 5px ;
      outline: none;
      border: none;
      box-sizing: border-box;
    }

    .placeholder {
      position: absolute;
      left: 10px;
      top: 9px;
      color: #888;
    }

    .iconfont {
      position: absolute;
      right: 5px;
      top: 9px;
      color: #666;
      font-size: 20px;
    }

  }
</style>