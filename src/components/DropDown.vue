<template>
  <div class="drop-down">
    <select v-model="selected" class="drop-down__select">
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
      this.core.emitter.emit('change-crypto', [val, val.toLowerCase()])
    }
  }
};
</script>

<style scoped>
.drop-down__select {
    background-color: #333;
    color:#f2f2f2;
    outline: none;
    border: none;
}
</style>
