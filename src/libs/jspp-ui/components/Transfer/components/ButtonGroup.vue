<script setup>
  const props = defineProps({
    btnDisabled: {
      type: Object,
      default: () => {}
    },
    checkedData: {
      type: Object,
      default: () => {}
    }
  });


  const emit = defineEmits(['removeRightListData', 'addRightListData']);

  const removeRightListData = (data) => {
    emit('removeRightListData', data);
  }

  const addRightListData = (data) => {
    emit('addRightListData', data);
  }
</script>

<template>
  <div class="box button-group">
    <button
      :disabled="btnDisabled.left"
      @click="removeRightListData(checkedData.right)"
    >&lt;</button>
    <button
      :disabled="btnDisabled.right"
      @click="addRightListData(checkedData.left)"
    >&gt;</button>
  </div>
</template>

<style lang="scss" scoped>
 .button-group {
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: solid 1px #666;
    border-right: solid 1px #666;

    button {
      border: none;
      outline: none;
      width: 38px;
      height: 38px;
      background-color: blue;
      color: #fff;
      font-size: 25px;
      border-radius: 5px;
      cursor: pointer;

      &:disabled {
        opacity: .3;
      }

      &:nth-child(2) {
        margin-left: 10px;
      }
    }
  }
</style>