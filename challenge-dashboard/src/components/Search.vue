<template>
 <section class="c-search">
     <input type="text" class="c-search__input" placeholder="Search...">
 </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.c-search {
  display: flex;
  background-color: #39494f;
  width: 90%;
  margin: 0 auto;
  height: 30px;

  &__input {
    background: transparent;
    border: 0 none;

    &::placeholder {
      padding-left: 8px;
      font-size: 12px;
    }
  }
}
</style>
