<script setup>
  import { onMounted, ref, watch } from 'vue';
  import NoDataTip from './NoDataTip.vue';
  const props = defineProps({
    menuData: {
      type: Array,
      default () {
        return [
          {
            id: 1,
            text: 1,
            value: 1
          },
        ]
      }
    },
    searchWord: String
  });

  let searchData = ref([]);

  onMounted(() => {
    searchData.value = props.menuData;
  });

  watch(() => {
    return props.searchWord;
  }, (newValue) => {
    searchData.value = filterData(newValue);
  });

  const filterData = (searchWord) => {
    return props.menuData.filter(item => item.value.toLowerCase().includes(searchWord.toLowerCase()));
  }

  const emit = defineEmits(['setItemValue']);

  const setItemValue = (item, e) => {
    emit('setItemValue', item.value);   
  }

</script>

<template>
  <div class="selector-menu">
    <div
      v-if="searchData.length > 0"
      class="menu-item"
      v-for="item of searchData"
      :key="item.id"
      @click="setItemValue(item)"
    >
     {{ item.value }}
    </div>
    <no-data-tip v-else></no-data-tip>
  </div>
</template>

<style lang="scss" scoped>
  .selector-menu {
    display: none;
    position: absolute;
    top: 45px;
    width: 300px;
    border: solid 1px #ddd;
    border-radius: 5px;
    box-shadow: 0 0 10px #ddd;
    box-sizing: border-box;

    .menu-item {
      width: 100%;
      height: 38px;
      text-align: center;
      line-height: 38px;
      color: #666;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        background-color: #eee;
        color: #aaa;
      }
    }
  }
</style>