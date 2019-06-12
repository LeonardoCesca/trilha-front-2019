<template>
  <div id="app">
    <Aside></Aside>
    <Main></Main>
  </div>
</template>

<script>
import Aside from "./components/Aside/Aside.vue";
import Main from "./components/Content/Main.vue";

export default {
  name: "app",
  components: {
    Aside,
    Main
  }
};
</script>

<style>
#app {
  display: flex;
}
</style>
