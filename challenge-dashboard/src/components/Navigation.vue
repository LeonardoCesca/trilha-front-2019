<template>
  <nav class="c-navigation">
    <ul class="c-navigation__list">
      <li class="c-navigation__item">Home</li>
      <img class="c-navigation__img" src="../assets/img/right-arrow.png" alt="Arrow">
      <li class="c-navigation__item">Tables</li>
      <img class="c-navigation__img" src="../assets/img/right-arrow.png" alt="Arrow">
      <li class="c-navigation__item">Data tables</li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.c-navigation {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 81%;

  &__list {
    display: flex;
    list-style: none;
  }

  &__item {
    &:nth-child(2n) {
      padding: 0 45px;
    }
  }

  &__img {
    width: 12px;
    height: 12px;
  }
}
</style>