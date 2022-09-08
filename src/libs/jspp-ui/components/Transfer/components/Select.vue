<script setup>
  
  const props = defineProps({
    data: {
      type: Array,
      default: () => []
    }
  })

  const emit = defineEmits(['setTargetIndex']);

  const setTargetIndex = (value) => {
    emit('setTargetIndex', value);
  }

</script>

<template>
  <select 
    @change="setTargetIndex($event.target.value)"
  >
    <option 
      v-for="(title, index) of data"
      :key="index"
      :value="index"
    >{{ title }}</option>
  </select>
</template>

<style lang="scss" scoped>

</style>