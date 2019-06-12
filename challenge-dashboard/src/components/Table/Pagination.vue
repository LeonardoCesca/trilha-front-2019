<template>
  <div class="c-pagination">
    <button class="c-pagination-button">Previous</button>
    <button class="c-pagination-button">1</button>
    <button class="c-pagination-button">Next</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.c-pagination {
  display: flex;
  align-items: center;
  padding-right: 10px;
  height: 20px;

  &-button {
    text-decoration: none;
    background: transparent;
    border: 1px solid gray;
    padding: 10px 0;
    width: 80px;

    &:nth-child(2n) {
      border-left: 1px solid gray;
      border-right: 1px solid gray;
      width: 25px;
    }
  }
}
</style>
