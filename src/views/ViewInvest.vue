<template>
  <div id="app">   
    <h1>Investments by User</h1>
    <hr>
    <div class="container"> 
      <div class="row"> 
        <div class="col-md-6">
          <FirstInvest />
        </div>     
        <div class="col-md-6">
          <SecondInvest />
        </div>     
        <div class="col-md-6">
          <ThirdInvest />
        </div>     
      </div>
    </div>
  </div>
</template>

<script>
import FirstInvest from "@/components/FirstInvest.vue";
import SecondInvest from "@/components/SecondInvest.vue";
import ThirdInvest from "@/components/ThirdInvest.vue";

export default {
  name: "ViewInvest",
  components: {
    FirstInvest,
    SecondInvest,
    ThirdInvest
  },
};
</script>