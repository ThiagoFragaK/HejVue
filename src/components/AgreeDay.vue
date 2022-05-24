<template>
  <div class="hello">
    <h3>Acordos por Dia</h3>
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
          name: "Acordos",
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
        theme: {
          mode: "light",
          palette: "palette2",
          monochrome: {
            enabled: true,
            color: '#FF9800'
          }
        },
        fill: {
          colors: ["#D6B85A", "#D6B85A", "#D6B85A"],
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
          text: "Acordos do Dia",
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
        }        
      },
    };
  },
  mounted() {
    port.portdaily().then((response) => {
      console.log(response.data);
      this.agreements[0]["data"] = response.data.quantAgree;
      this.options["xaxis"]["categories"] = response.data.dateRange;
      this.options["title"]["text"] = response.data.todayAgree;
      this.loaded = true;
    });
  },
};
</script>
