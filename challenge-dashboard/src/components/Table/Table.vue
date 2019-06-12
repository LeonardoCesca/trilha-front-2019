<template>
  <main class="c-princ-table">
      <h3 class="c-princ-table__info">Data Table With Full Features</h3>
    <div class="c-princ-table__utils">
      <span class="c-show-registers"> Show 
        <input type="text" class="c-show-registers__input">
        entries
      </span>
      <label class="c-show-registers__label">Search:
      <input type="text" class="c-show-registers__input--search">
      </label>
    </div>
    <table class="c-table">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Created</th>
        <th>Specialist</th>
        <th>Action</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Teste</td>
        <td>aaa</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Teste</td>
        <td>aaa</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Teste</td>
        <td>aaa</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Teste</td>
        <td>aaa</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
        <td>teste</td>
      </tr>
      
           
    </table>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.c-princ-table {
  flex:1;
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

.c-table {
  margin-top: 20px;
  width: 100%;
  max-height: 43vh;
  text-align: center;
}
</style>
