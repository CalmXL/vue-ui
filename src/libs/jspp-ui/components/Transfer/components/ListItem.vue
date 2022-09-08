<script setup>
  const props = defineProps({
    listData: {
      type: Array,
      default: () => []
    },
    leftOrRight: {
      type: String,
      default: ''
    }
  });

  const emit = defineEmits(['setCheckedData', 'dragItem']);

  const setCheckedData = (...payload) => {
    emit('setCheckedData', ...payload);
  };

  const dragItem = (item) => {
    emit('dragItem', item)
  }

</script>

<template>
  <div 
    v-for="item of listData"
    :key="item.id"
    :class="['list-item', item.disabled ? 'disabled' : '']"
    :draggable="!item.disabled"
    @dragstart="dragItem(item)"
  >
    <input 
      type="checkbox" 
      :disabled="item.disabled"
      :id="'__checkbox__' + item.id"
      @click="setCheckedData($event.target.checked, leftOrRight, item)"
    />
    <label :for="'__checkbox__' + item.id">{{ item.name }}</label>
  </div>
</template>

<style lang="scss" scoped>
  .list-item {
    display: flex;
    align-items: center;
    height: 30px;
    font-size: 12px;
    color: #666;

    &.disabled {
      opacity: .6;
    }
  }
</style>