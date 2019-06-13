<template>
  <div id="app">
    <Aside></Aside>
    <router-view></router-view>
  </div>
</template>

<script>
import Aside from "./components/Aside/Aside.vue";

export default {
  name: "app",
  components: {
    Aside
  }
};
</script>

<style>
#app {
  display: flex;
}
</style>
