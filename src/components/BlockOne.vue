<template>
  <div class="block-one">
    <br/>
    <div class="block-one__table">
      <div class="block-one__col">
        <div class="block-one__title">BID</div>
        <div class="block-one__body">
          <div class="block-one__content">
            <div class="block-one__subtitle">Price</div>
            <div v-for="(item, index) in stockGlass.bids" :key="index">{{item[0]}}</div>
          </div>
          <div class="block-one__content">
            <div class="block-one__subtitle">Amount</div>
            <div v-for="(item, index) in stockGlass.bids" :key="index">{{item[1]}}</div>
          </div>
          <div class="block-one__content" v-if="width>600">
            <div class="block-one__subtitle">Total</div>
            <div v-for="(item, index) in stockGlass.bids" :key="index">{{item[0] * item[1]}}</div>
          </div>
        </div>
      </div>
      <div class="block-one__col">
        <div class="block-one__title">ASK</div>
        <div class="block-one__body">
           <div class="block-one__content">
            <div class="block-one__subtitle">Price</div>
            <div v-for="(item, index) in stockGlass.asks" :key="index">{{item[0]}}</div>
          </div>
          <div class="block-one__content">
            <div class="block-one__subtitle">Amount</div>
            <div v-for="(item, index) in stockGlass.asks" :key="index">{{item[1]}}</div>
          </div>
          <div class="block-one__content"  v-if="width>600">
            <div class="block-one__subtitle">Total</div>
            <div v-for="(item, index) in stockGlass.asks" :key="index">{{item[0] * item[1]}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlockOne',
  data() {
    return {
      width: Number,
      stockGlass: Object,
    };
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  created() {

    this.width = window.innerWidth;
    window.addEventListener('resize', this.updateWidth);
    this.core.emitter.on('get-stock-glass', (event) => {
      this.stockGlass = event;
    });
  },
};
</script>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.block-one__table {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0 -5px;
  flex: 1;
}
.block-one__col {
  flex: 1;
  margin: 0 5px;
  text-align: center;
  height: 200px;
  background-color: #333;
  overflow: hidden;
}

.block-one__col:hover {
    overflow-y: scroll;
}
.block-one__title {
  background-color: #333;
  color: #f2f2f2;
}

.block-one__body {
  display: flex;
  width: 100%;
  justify-content: center;
  flex: 1;
}

.block-one__content {
  flex: 1;
  flex-direction: column;
  margin: 0 2px;
  color: #f2f2f2;
  background-color: #545558;
}

.block-one__subtitle {
  position: sticky;
  top: 0;
  background-color: #95969e;
  color: #f2f2f2;
}

.block-one__text {
  background-color: #575555;
  color: #f2f2f2;
  font-size: 12px;
  flex: 1;
  padding: 0 1px;
  text-align: center;
}
</style>

