<template>
  <div id="app">
    <div class="hello">
      <h4>Below R$3.000</h4>
      <hr />
      <br />
      <apexchart
        width="50%"
        type="area"
        v-if="loaded"
        :options="options"
        :series="seriesInvestment"
      />
    </div>
  </div>
</template>

<script>
import Mine from "../services/mine";

export default {
  name: "FirstInvest",
  data() {
    return {
      loaded: false,
      mines: [
        {
          nome: [],
        },
      ],
      seriesInvestment: [
        {
          name: "Investimento",
          data: [],
        },
      ],
      options: {
        chart: {
          id: "Nomes",
        },
        xaxis: {
          categories: [],
        },
      },
    };
  },
  mounted() {
    Mine.below().then((response) => {
      console.log(response.data);
      this.seriesInvestment[0]["data"] = response.data.nummers;
      this.options["xaxis"]["categories"] = response.data.nomes;
      this.loaded = true;
    });
  },
};
</script>