<template>
  <div id="app">
    <h1>Portocred Graphiken!</h1>
    <hr />
    <AcionamentoDay />
    <AgreeDay />
    <AgreeMonth />
    <AcionamentoMonth />
  </div>
</template>

<script>
import AgreeMonth from "@/components/AgreeMonth.vue";
import AgreeDay from "@/components/AgreeDay.vue";
import AcionamentoMonth from "@/components/AcionamentoMonth.vue";
import AcionamentoDay from "@/components/AcionamentoDay.vue";

export default {
  name: "ViewPort",
  components: {
    AgreeMonth,
    AgreeDay,
    AcionamentoMonth,
    AcionamentoDay,
  },
};
</script>

//<div v-if="this.$store.state.auth.AppActiveUser.permissionGroup === 'admin'">