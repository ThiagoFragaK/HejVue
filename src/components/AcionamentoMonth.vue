<template>
  <div class="hello">    
  <h3>Acionamentos por Mês</h3>
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
  name: "AcionamentoMonth",
  data() {
    return {
      loaded:false,
      port: [
        {
          agreementen: []
        },
      ],      
      agreements: [{
        name: "Acionamento",
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
    port.portAcionamentoMonth().then((response) => {
      console.log(response.data);
      this.agreements[0]['data']=response.data.num
      this.options['xaxis']['categories'] = response.data.triDate
      this.loaded = true
    });
  },

};
</script>
