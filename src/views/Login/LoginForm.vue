<template>
  <div class="flex w-full h-full" v-show="getShow">
    <div class="login-form shadow-xl bg-white w-6/12 m-auto px-8 py-5 mx-auto my-auto rounded-md">
      <div class="title mb-2 font-medium text-lg">Login</div>
      <Form>
        <FormItem> <Input placeholder="UserName" v-model="formData.username" /> </FormItem>
        <FormItem> <InputPassword visibilityToggle placeholder="Password" v-model="formData.password" /> </FormItem>
        <div class="flex flex-row justify-between">
          <FormItem><Checkbox class="" v-model:checked="remenberme">remember me</Checkbox></FormItem>
          <FormItem><Button type="link" @click="changeLoginState(LoginStateEnum['RESET_PASSWORD'])">Forget Password?</Button></FormItem>
        </div>
        <FormItem><Button type="primary" class="bg-[#1677ff]" block>Sign in</Button></FormItem>
        <div class="flex flex-row justify-around">
          <Button>Mobile sign in</Button>
          <Button>Qr code sign in</Button>
          <Button>Sign up</Button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from "vue";
import { Form, Input, Checkbox, Button } from "ant-design-vue";
import { LoginStateEnum, getLoginState, changeLoginState } from "./useLogin";

const FormItem = Form.Item;
const InputPassword = Input.Password;
var formData = reactive({
  username: "",
  password: "",
});
var remenberme = ref(false);
// getShow为computed
var getShow = computed(() => getLoginState() === LoginStateEnum["LOGIN"]);
</script>

<style></style>
