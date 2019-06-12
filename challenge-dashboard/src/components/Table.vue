<template>
  <main class="c-princ-table">
      <h3 class="c-princ-table__info">Data Table With Full Features</h3>
    <div class="c-princ-table__utils">
      <span class="c-show-registers"> Show
        <input type="text" class="c-show-registers__input">
        entries
      </span>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.c-princ-table {
  background-color: #fcfcfc;
  margin: 20px;
  border-top: 2px solid #aaaaaa;

  &__info {
    padding-left: 15px;
  }

  &__utils {
    display: flex;
    justify-content: space-between;
  }
}

.c-show-registers {
  padding-left: 15px;

  &__input {
    width: 25%;
    border-radius: 5px;
    border: 1px solid gray;
  }
}
</style>
