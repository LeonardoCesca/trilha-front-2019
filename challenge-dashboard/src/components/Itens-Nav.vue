<template>
 <section class="c-itens">
     <h4 class="c-itens__title">Header</h4>
     <ul class="c-itens__list">
         <a href="" class="c-itens__link">
         <li class="c-itens__item">
            <img class="c-itens__img" src="../assets/img/edit-document.png" alt="profile image" title="profile">
            <span class="c-itens__name">Home</span> 
         </li>
         </a>
         <a href="" class="c-itens__link">
         <li class="c-itens__item">
            <img class="c-itens__img" src="../assets/img/edit-document.png" alt="profile image" title="profile">
            <span class="c-itens__name">Doctors</span> 
         </li>
         </a>
         <a href="" class="c-itens__link">
         <li class="c-itens__item">
            <img class="c-itens__img" src="../assets/img/edit-document.png" alt="profile image" title="profile">
            <span class="c-itens__name">Nurses</span> 
         </li>
         </a>
         <a href="" class="c-itens__link">
         <li class="c-itens__item">
            <img class="c-itens__img" src="../assets/img/edit-document.png" alt="profile image" title="profile">
            <span class="c-itens__name">Patients</span> 
         </li>
         </a>
     </ul>
 </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.c-itens {
  display: flex;
  flex-direction: column;
  float: left;
  padding-left: 10px;

  &__list {
    text-align: initial;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__img {
    width: 20px;
    height: 20px;
  }

  &__link {
      text-decoration: none;
      color: #fcfcfc;
  }
}
</style>
