<template>
  <div class="c-main-container">
    <Header></Header>
    <ContainerTable></ContainerTable>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import ContainerTable from "./Container-Table.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    ContainerTable,
    Footer
  }
};
</script>

<style>
.c-main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
