<template>
  <div class="hello">
    <h3>Acionamentos por Dia</h3>
    <apexchart
      width="50%"
      type="area"
      v-if="loaded"
      :options="options"
      :series="agreements"
    />
  </div>
</template>

<script>
import port from "../services/port";

export default {
  name: "AcionamentoDay",
  data() {
    return {
      loaded: false,
      port: [
        {
          agreementen: [],
        },
      ],
      agreements: [
        {
          name: "Acionamento",
          data: [],
        },
      ],
      options: {
        chart: {
          id: "Datas",
          colors: "FF0000",
          toolbar: {
            show: true,
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          show: false,
        },
        title: {
          text: "TEXT",
          align: "left",
          floating: true,
          style: {
            fontSize: "23px",
          },
        },
        subtitle: {
          text: "Acionamentos do Dia",
          align: "left",
        },
        xaxis: {
          categories: [],
          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
    };
  },
  mounted() {
    port.portAcionamentoTag().then((response) => {
      console.log(response.data);
      this.agreements[0]["data"] = response.data.quantTrigger;
      this.options["xaxis"]["categories"] = response.data.listDates;
      this.options["title"]["text"] = response.data.todayTrigger;
      this.loaded = true;
    });
  },
};
</script>
