<template>
  <div class="trade-form">
    <h1>Trade in Yo Ride!</h1>

    <div class="field">
      <strong>Name:</strong>
      <input>
    </div>

    <div class="field">
      <strong>Email:</strong>
      <input>
    </div>

    <button>Gimme da BUX!</button>
  </div>
</template>

<script>
export default {
  name: 'TradeForm',
};
</script>

<style scoped>
    .trade-form {
        display: inline-block;
        padding: 15px;
        background-color: darkseagreen;
        border: 2px solid black;
        border-radius: 10px;
        box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.5)
    }

    h1 {
        font-size: 2rem;
        margin-top: 0;
    }

    .field {
        margin-bottom: 10px;
    }

    strong {
        display: block;
    }

    button {
        color: white;
        background-color: tomato;
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px;
        font-weight: bold;
        font-size: 1.2rem;
        cursor: pointer;
    }
</style>
