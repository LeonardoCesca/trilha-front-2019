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
    border: 1px solid #e5e8eb;
    padding: 10px 0;
    width: 80px;
    cursor: pointer;

    &:nth-child(2n) {
      background-color: #3580ad;
      color: #fff;
      border: 1px solid #e5e8eb;
      width: 40px;
    }
  }
}
</style>
