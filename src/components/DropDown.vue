<template>
  <div class="drop-down">
    <select v-model="selected" class="select">
        <option value="BTCUSDT">BTCUSDT</option>
        <option value="BNBBTC">BNBBTC</option>
        <option value="ETHBTC">ETHBTC</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  data() {
    return {
      selected: 'BTCUSDT',
    };
  },
  watch: {
  selected (val) {
      this.emitter.emit('change-crypto', [val, val.toLowerCase()])
    }
  }
//   components: {
//     // HeaderPerent,
//     BlockOne,
//     BlockTwo
//   },
};
</script>

<style scoped>
.select {
    background-color: #333;
    color:#f2f2f2;
    outline: none;
    border: none;
}
</style>
