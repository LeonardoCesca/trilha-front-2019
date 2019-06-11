<template>
 <section class="c-itens">
     <h4 class="c-itens__title">Header</h4>
     <ul class="c-itens__list">
         <li class="c-itens__item">Home</li>
         <li class="c-itens__item">Doctors</li>
         <li class="c-itens__item">Nurses</li>
         <li class="c-itens__item">Patients</li>
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


}
</style>
