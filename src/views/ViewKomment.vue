<template>
  <div id="app">
    <div class="container">
      <img alt="Vue logo" src="../assets/logo.png" />
      <h2>Komments: Dummy Text</h2>
      <hr>
      <br/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="komment of komments" v-bind:key="komment.id">
            <td>{{ komment.name }}</td>
            <td>{{ komment.email }}</td>
            <td>{{ komment.body }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Komment from "../services/komments";

export default {
  name: "Komment",
  data() {
    return {
      komments: [],
    };
  },
  mounted() {
    Komment.list().then((response) => {
      console.log(response.data);
      this.komments = response.data;
    });
  },
};
</script>