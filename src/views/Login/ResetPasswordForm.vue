<template>
  <div class="flex w-full h-full" v-show="getShow">
    <div class="bg-white w-6/12 m-auto px-8 py-5 mx-auto my-auto rounded-md">
      <div class="title mb-2 font-medium text-lg">Reset password</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { LoginStateEnum, getLoginState, changeLoginState } from "./useLogin";
import { computed } from "vue";

var getShow = computed(() => getLoginState() === LoginStateEnum["RESET_PASSWORD"]);
</script>

<style></style>
