<template>
  <div class="login-container w-screen h-screen p-0">
    <!-- NightToggleButton -->
    <DarkToggleButton />
    <div class="form-login h-full">
      <LoginForm />
      <RegisterForm />
      <MobileForm />
      <ResetPasswordForm />
      <QRcodeForm />
    </div>
  </div>
</template>

<script lang="ts" setup>
import DarkToggleButton from "@/components/DarkToggleButton.vue";
import LoginForm from "./LoginForm.vue";
import MobileForm from "./MobileForm.vue";
import QRcodeForm from "./QRcodeForm.vue";
import RegisterForm from "./RegisterForm.vue";
import ResetPasswordForm from "./ResetPasswordForm.vue";
</script>

<style>
@import "./login.less";
</style>
