<template>
  <Drawer title="Basic Drawer" placement="left" :open="open" @close="onclose" key="left">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <!-- <Sider>
    <Menu :items="items" />
    </Sider> -->
  </Drawer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Layout, Menu, Drawer } from "ant-design-vue";
const { Sider } = Layout;
const items = [
  {
    key: "1",
    label: "nav 1",
  },
  {
    key: "2",
    label: "nav 2",
  },
  {
    key: "3",
    label: "nav 3",
  },
];
var open = ref(true);
function onclose() {
  open.value = false;
}

var isMobile = ref(true);
</script>

<style></style>
