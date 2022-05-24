<template>
  <div class="hello">    
  <h3>Acordos por Mês</h3>
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
  name: "AgreeMonth",
  data() {
    return {
      loaded:false,
      port: [
        {
          agreementen: []
        },
      ],      
      agreements: [{
        name: "Acordos",
        data: [],
      }
      ],
      options: {
      chart: {
        id: "Datas",
      },
      xaxis: {
        categories: [],
      }
      },
    };
  },
  mounted() {
    port.portmonthly().then((response) => {
      console.log(response.data);
      this.agreements[0]['data']=response.data.quant
      this.options['xaxis']['categories'] = response.data.dateRange
      this.loaded = true
    });
  },

};
</script>
