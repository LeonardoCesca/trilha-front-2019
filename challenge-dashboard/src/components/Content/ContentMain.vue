<template>
  <div class="c-main-container">
    <Header></Header>
    <ContainerTable></ContainerTable>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./ContentHeader.vue";
import ContainerTable from "../Table/ContainerTable";
import Footer from "./ContentFooter.vue";

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
