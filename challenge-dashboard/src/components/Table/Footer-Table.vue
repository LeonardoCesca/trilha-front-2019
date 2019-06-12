<template>
  <footer class="c-footer-table">
    <span class="c-footer-table__info">Showing 1 to 7 of 7 entires</span>
    <Pagination></Pagination>
  </footer>
</template>

<script>
import Pagination from "./Pagination.vue";

export default {
  components: {
    Pagination
  }
};
</script>

<style lang="scss" scoped>
.c-footer-table {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__info {
    display: flex;
    align-items: center;
    height: 65px;
    margin: 15px;
  }
}
</style>
