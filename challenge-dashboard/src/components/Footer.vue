<template>
  <footer class="c-footer">
    <span class="c-footer__text">Copyright © 2018</span>
    <a href="http://www.codeinfinite.in/" class="c-footer__link">CodingInifite.</a>
    <span class="c-footer__reserved">All rights reserved.</span>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.c-footer {
  display: flex;
  align-items: center;
  width: 80vw;
  height: 68px;
  background-color: #fcfcfc;

  &__text {
    font-weight: bold;
    margin-left: 20px;
  }

  &__link {
    padding-left: 5px;
    text-decoration: none;
    font-weight: bold;
  }

  &__reserved {
    padding-left: 5px;
  }
}
</style>
