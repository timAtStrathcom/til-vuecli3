<template>
  <div class="trade-in-widget box">
    <div class="title">
      Value Your Trade
      <img class="cbb-logo is-pulled-right" src="@/assets/img/black-book-logo--grey.png" >
    </div>

    <trade-in-autocomplete v-model="yearMakeModel"/>
  </div>
</template>

<script>
import TradeInAutocomplete from './trade-in-autocomplete'

export default {
  name: 'trade-in-leads',
  components: {
    TradeInAutocomplete,
  },
  data() {
    return {
      yearMakeModel: ''
    }
  }
}
</script>

<style scoped>
  .cbb-logo {
    height: 30px;
    margin-top: 5px;
  }
</style>
