<template>
  <section class="c-search">
    <input type="text" class="c-search__input" placeholder="Search...">
    <img class="c-search__img" src="../../assets/img/ico-finder.png" alt>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.c-search {
  display: flex;
  align-items: center;
  background-color: #39494f;
  width: 90%;
  margin: 0 auto;
  height: 30px;
  border-radius: 3px;

  &__input {
    background: transparent;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 12px;
    padding-left: 10px;
    border: 0 none;
    outline: 0;

    &::placeholder {
      font-size: 12px;
    }
  }

  &__img {
    width: 21px;
    height: 21px;
    padding-right: 10px;
  }
}
</style>
