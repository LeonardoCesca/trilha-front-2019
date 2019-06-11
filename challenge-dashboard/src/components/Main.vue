<template>
  <div class="c-main-container">
    <Header></Header>
    <Table></Table>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Table from "./Table.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    Table,
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
