<template>
  <div class="hello">
    <h1>Willkommen zur Graphiken!</h1>
    <hr />
    <br />
    <apexchart width="500" type="line" :options="options" :series="seriesport">
    </apexchart>
    <apexchart width="500" type="area" :options="options" :series="seriescred">
    </apexchart>
    <apexchart width="500" type="bar" :options="optiones" :series="acordport">
    </apexchart>
    <apexchart width="500" type="bar" :options="optiones" :series="acordcred">
    </apexchart>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    options: {
      chart: {
        id: "vuechart-example",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    optiones: {
      chart: {
        id: "vuecharte",
      },
      xaxis: {
        categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      },
    },
    seriesport: [
      {
        name: "Portocred",
        data: [97, 62, 89, 66, 118, 72, 101, 75, 94, 103, 107, 119],
      },
    ],
    seriescred: [
      {
        name: "Crediativos",
        data: [20, 12, 29, 15, 18, 42, 37, 39, 21, 29, 15, 17],
      },
    ],
    acordport: [
      {
        name: "Portocred",
        data: [4510, 5100, 4127, 4248, 3245, 7861],
      },
    ],
    acordcred: [
      {
        name: "Crediativos",
        data: [3241, 2941, 2761, 3941, 3578, 4241],
      },
    ],
  }),
};
</script>
