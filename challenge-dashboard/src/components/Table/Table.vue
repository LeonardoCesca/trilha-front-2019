<template>
  <section class="c-princ-table">
    <header-table></header-table>
    <div class="c-table-div">
      <table class="c-table">
        <tr class="c-table__info">
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
    </div>
    <footer-table></footer-table>
  </section>
</template>

<script>
import HeaderTable from "./Header-Table.vue";
import FooterTable from "./Footer-Table.vue";

export default {
  components: {
    HeaderTable,
    FooterTable
  }
};
</script>

<style lang="scss" scoped>
.c-princ-table {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #fff;
  margin-bottom: 30px;
  width: 98%;
  margin: 0 auto 40px;
}

.c-table-div {
  flex: 1;
}

.c-table {
  margin-top: 20px;
  width: 100%;
  max-height: 43vh;
  text-align: center;

  &__info {
    padding-bottom: 15px;
  }
}
</style>
