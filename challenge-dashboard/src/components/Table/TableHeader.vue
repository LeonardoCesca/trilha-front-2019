<template>
  <header class="c-header-table">
    <h3 class="c-princ-table__info">Data Table With Full Features</h3>
    <div class="c-princ-table__utils">
      <span class="c-show-registers">
        Show
        <input type="text" class="c-show-registers__input">
        entries
      </span>
      <label class="c-show-registers__label">
        Search:
        <input type="text" class="c-show-registers__input--search">
      </label>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.c-header-table {
  background-color: #fcfcfc;
}

.c-princ-table {
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
  display: flex;
  align-items: center;

  &__input {
    width: 25%;
    height: 25px;
    border-radius: 5px;
    border: 1px solid gray;
    margin: 0 5px;

    &--search {
      width: 50%;
      height: 25px;
      margin-left: 5px;
    }
  }

  &__label {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
  }
}
</style>
