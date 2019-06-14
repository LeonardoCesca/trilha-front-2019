<template>
  <aside class="c-aside">
    <header class="header-aside">
      <h1 class="header-aside__title">Admin Panel</h1>
    </header>
    <Profile></Profile>
    <Search></Search>
    <Itens></Itens>
  </aside>
</template>

<script>
import Profile from "./AsideProfile.vue";
import Search from "./AsideSearchNav.vue";
import Itens from "./AsideItensNav.vue";

export default {
  components: {
    Profile,
    Search,
    Itens
  }
};
</script>

<style lang="scss" scoped>
.c-aside {
  background-color: #222d30;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 20%;
}

.header-aside {
  display: flex;
  align-items: center;
  background: #357eab;
  height: 59.9px;

  &__title {
    margin: 0 auto;
    padding: 0;
    color: #fff;
  }
}
</style>
