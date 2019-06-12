<template>
  <main class="c-main-table">
    <header class="c-header-table">
      <h3 class="c-header-table__title">Data Tables</h3>
      <span class="c-header-table__subtitle">advanced tables</span>
      <Navigation></Navigation>
    </header>
      <Table></Table>
  </main>
</template>

<script>
import Navigation from "./Navigation.vue";
import Table from "./Table.vue";

export default {
  components: {
    Navigation,
    Table
  }
};
</script>

<style lang="scss" scoped>
.c-main-table {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #eef0f3;
}

.c-header-table {
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 20px;

  &__title {
    font-size: 24px;
    font-weight: normal;
    margin: 0;
  }

  &__subtitle {
    font-size: 17px;
    font-weight: normal;
    padding-left: 10px;
    color: #bec3c7;
  }
}

.c-div-table {
  display: flex;
}
</style>
