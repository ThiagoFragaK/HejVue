<template>
  <section id="dashboard-analytics">
    <b-row class="match-height">
      <b-col lg="6" md="12">
        <!-- {{ user }} -->
        <analytics-congratulation :data="user" />
      </b-col>
      <b-col lg="3" md="6">
        <statistic-card-with-area-chart
          v-if="data.subscribersGained"
          icon="ClockIcon"
          :statistic="
            kFormatter(data.subscribersGained.analyticsData.subscribers)
          "
          statistic-title="Minutos em atividade"
          :chart-data="data.subscribersGained.series"
        />
      </b-col>
      <b-col lg="3" md="6">
        <statistic-card-with-area-chart
          v-if="data.ordersRecevied"
          icon="DollarSignIcon"
          color="warning"
          :statistic="kFormatter(data.ordersRecevied.analyticsData.orders)"
          statistic-title="Valor negociado"
          :chart-data="data.ordersRecevied.series"
        />
      </b-col>
    </b-row>
    <b-row class="match-height">
      <b-col lg="6"></b-col>
      <b-col lg="6">
        <analytics-support-tracker :data="data.supportTracker" />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { kFormatter } from "@core/utils/filter";

export default {
  components: {
  },
  data() {
    return {
      data: {
        congratulations: {
          name: "ww",
          saleToday: "57.6",
        },
        supportTracker: {
          title: "Support Tracker",
          lastDays: ["Last 28 Days", "Last Month", "Last Year"],
          totalTicket: 163,
          newTicket: 29,
          openTicket: 63,
          responseTime: 1,
          supportTrackerRadialBar: {
            series: [67],
          },
        },
        subscribersGained: {
          series: [
            {
              name: "Subscribers",
              data: [28, 40, 36, 52, 38, 60, 55],
            },
          ],
          analyticsData: {
            subscribers: 92600,
          },
        },
        ordersRecevied: {
          series: [
            {
              name: "Orders",
              data: [10, 15, 8, 15, 7, 12, 8],
            },
          ],
          analyticsData: {
            orders: 38400,
          },
        },
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.auth.AppActiveUser;
    },
  },
  methods: {
    kFormatter,
  },
};
</script>

<style>
</style>
-