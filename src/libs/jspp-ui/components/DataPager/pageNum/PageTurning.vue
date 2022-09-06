<script setup>
import { onMounted, reactive, inject } from 'vue';

  const props = defineProps({
    btnType: String,
    disabled: {
      type: Boolean,
      default: true
    }
  });

  const state = reactive({
    btnClass: '',
    btnText: '' 
  });

  onMounted(() => {
    switch (props.btnType) {
      case 'prev': 
        state.btnClass = 'icon-arrow-left';
        state.btnText = '上一页'; 
        break;
      case 'next':
        state.btnClass = 'icon-arrowright';
        state.btnText = '下一页'; 
        break;
      default:
        break;
    }
  });

  const pageTurningClick = inject('pageTurningClick');
</script>

<template>
  <a 
    :class="['btn', disabled ? 'disabled' : '']" 
    href="javascript:;"
    @click="pageTurningClick(btnType)"
  >
    <i 
      :class="['iconfont', state.btnClass]">
    </i>
    <em>{{ state.btnText }}</em>
  </a>
</template>

<style lang="scss" scoped>
  .btn {
    height: 36px;

    &.disabled {
      color: #ddd;
      background: #fff;
      cursor: default;
    }
  }
</style>