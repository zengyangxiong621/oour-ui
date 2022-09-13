<template>
  <div>
    <ElButton>嘿嘿1</ElButton>
  </div>
</template>
<script setup lang="ts">
import {
  computed,
  getCurrentInstance,
  nextTick,
  onMounted,
  onUpdated,
  ref,
  shallowRef,
  toRef,
  toRefs,
  useAttrs,
  useSlots,
  watch,
  reactive,
  provide,
  inject,
} from "vue"

console.log("1")

const props = defineProps({})
const emit = defineEmits({})
const slots = useSlots()
</script>
