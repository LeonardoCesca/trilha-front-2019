<template>
  <header class="c-header">
    <img class="c-header__img" src="../assets/img/hamburguer.png" alt="hamburger" title="hamburger">
    <div class="c-container">
      <img src="../assets/img/profile.png" alt class="c-container__img">
      <h2 class="c-container__nickname">Leonardo Cesca</h2>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.c-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  float: right;
  width: 80%;
  height: 60px;
  background-color: #3c8dbd;

  &__img {
    width: 20px;
    height: 20px;
    float: left;
    margin-left: 20px;
    cursor: pointer;
  }
}

.c-container {
  display: flex;
  align-items: center;

  &__img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  
  &__nickname {
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #fff;
    padding: 0 10px;
  }
}
</style>
