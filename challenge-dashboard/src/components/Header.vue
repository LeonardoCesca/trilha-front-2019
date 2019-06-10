<template>
  <header>
    <img class="img-hamburguer" src="../assets/img/hamburguer.png" alt>
    <div class="container">
      <img src="../assets/img/profile.png" alt class="img-perfil">
      <h2 class="name-perfil">Leonardo Cesca</h2>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  float: right;
  width: 80%;
  height: 60px;
  background-color: #3c8dbd;
}

.img-hamburguer {
  width: 20px;
  height: 20px;
  float: left;
  margin-left: 20px;
  cursor: pointer;
}

.img-perfil {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.name-perfil {
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #fff;
  padding: 0 10px;
}

.container {
  display: flex;
  align-items: center;
}
</style>
