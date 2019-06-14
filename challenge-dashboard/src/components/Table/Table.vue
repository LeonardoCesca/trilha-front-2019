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
        <tr class="c-table__info" v-for="user in users" :key="user.id">
          <td>{{user.id}}</td>
          <td>{{user.first_name}}</td>
          <td>{{user.email}}</td>
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
import HeaderTable from "./TableHeader.vue";
import FooterTable from "./TableFooter.vue";

import getUsers from "../../api/config";

export default {
  mounted: function() {
    getUsers().then(users => {
      this.users = users.data.data;
    });
  },

  data() {
    return { users: [] };
  },
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
  background: #fcfcfc;
  margin-bottom: 30px;
  width: 98%;
  margin: 0 auto 40px;
  border-top: 2px solid gray;

  @media (min-width: 1366px) {
      margin: 0 auto 20px;
  }
}

.c-table-div {
  flex: 1;
}

.c-table {
  margin-top: 20px;
  width: 100%;
  height: 53vh;
  text-align: center;

  @media (max-width: 1366px) {
    height: 37vh;
  }

  &__info {
    height: 45px;

    &:nth-child(even) {
      background-color: #f3f3f6;
    }

    @media (max-width: 1366px) {
      height: 0;
    }
  }
}
</style>
