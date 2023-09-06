<template>
  <div>Current Count: {{ counter.count }}</div>
</template>

<script lang="ts" setup>
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
counter.count++;
// 自动补全！ ✨
counter.$patch({ count: counter.count + 1 });
// 或使用 action 代替
counter.increment();
</script>

<style></style>
