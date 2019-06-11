<template>
 <section class="c-profile">
     <img class="c-profile__img" src="../assets/img/profile.png" alt="profile image" title="image profile">
     <div class="c-profile__content">
        <h3 class="c-profile__name">Leonardo Cesca</h3>
        <span class="c-profile__status">Online</span>
     </div>
 </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.c-profile {
  display: flex;
  align-items: center;
  color: #fff;

  &__img {
    width: 40px;
    height: 40px;
    padding: 10px;
    border-radius: 50%;
  }

  &__name {
    font-size: 14px;
    font-weight: normal;
    padding-left: 5px;
    margin: 0;
  }

  &__content {
    flex-direction: column;
  }

  &__status {
    font-size: 12px;
    float:left;
    margin-top: 5px;

    &:before {
      content: "";
      border-radius: 50%;
      display: inline-block;
      height: 10px;
      width: 10px;
      background-color: green;

      margin: 0 5px;
    }
  }
}
</style>
