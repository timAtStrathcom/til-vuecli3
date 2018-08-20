<template>
  <div class="container">
    <h1 class="title">Example Vue App</h1>

    <trade-in-leads/>
  </div>
</template>

<script>
import TradeInLeads from '@/components/trade-in-leads'

export default {
  name: 'widget-test-app',
  components: {
    TradeInLeads,
  },
}
</script>

<style scoped>
  p {
    margin-bottom: 20px;
  }
</style>
