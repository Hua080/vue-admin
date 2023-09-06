<template>
  <Button @click="changeTheme">{{ currentTheme }}</Button>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { Button } from "ant-design-vue";
import { useThemeStore } from "@/stores/theme";
import { ThemeEnum } from "@/enum";
import { updateTheme } from "@/utils/theme";
// 接收store中的getter和action
const { getCurrentTheme, setCurrentTheme } = useThemeStore();
// getCurrentTheme 是 值：const getCurrentTheme: ThemeEnum
var darkMode = ref(getCurrentTheme);
var currentTheme = computed(() => ThemeEnum[darkMode.value]);
// 点击事件处理函数
function changeTheme() {
  darkMode.value = darkMode.value === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;
  setCurrentTheme(darkMode.value);
  updateTheme(ThemeEnum[darkMode.value]);
}
</script>

<style></style>
