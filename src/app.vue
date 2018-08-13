<template>
  <div>
    <strong>Hello, Vue!</strong>
    <p>The trade widget will appear below</p>
    <trade-form/>
  </div>
</template>

<script>
import TradeForm from './components/widgets/trade-form.vue';

export default {
  name: 'TilTestApp',
  components: {
    TradeForm,
  },
};
</script>

<style scoped>
    strong {
        color: tomato;
    }
</style>
