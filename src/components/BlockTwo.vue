<template>
  <div class="block-two">
    <br />
    <DropDown />
    <br />
    <div class="block-two__table">
      <div class="block-two__col">
        <div class="block-two__title">BID</div>
        <div class="block-two__body">
          <div class="block-two__content">
            <div class="block-two__subtitle">Price</div>
            <div v-for="(item, index) in crypto.bids" :key="index">
              {{ item[0] }}
            </div>
          </div>
          <div class="block-two__content">
            <div class="block-two__subtitle">Amount</div>
            <div v-for="(item, index) in crypto.bids" :key="index">
              {{ item[1] }}
            </div>
          </div>
          <div class="block-two__content" v-if="width > 600">
            <div class="block-two__subtitle">Total</div>
            <div v-for="(item, index) in crypto.bids" :key="index">
              {{ item[0] * item[1] }}
            </div>
          </div>
        </div>
      </div>
      <div class="block-two__col">
        <div class="block-two__title">ASK</div>
        <div class="block-two__body">
          <div class="block-two__content">
            <div class="block-two__subtitle">Price</div>
            <div v-for="(item, index) in crypto.asks" :key="index">
              {{ item[0] }}
            </div>
          </div>
          <div class="block-two__content">
            <div class="block-two__subtitle">Amount</div>
            <div v-for="(item, index) in crypto.asks" :key="index">
              {{ item[1] }}
            </div>
          </div>
          <div class="block-two__content" v-if="width > 600">
            <div class="block-two__subtitle">Total</div>
            <div v-for="(item, index) in crypto.asks" :key="index">
              {{ item[0] * item[1] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from "@/components/DropDown";
export default {
  name: 'BlockTwo',
  components: {
    DropDown,
  },
  data() {
    return {
      width: Number,
      crypto: Object,
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
    this.core.emitter.on('get-crypto', (event) => {
      this.crypto = event;
    });
  },
};
</script>

<style scoped>
.block-two {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.block-two__table {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0 -5px;
  flex: 1;
}
.block-two__col {
  flex: 1;
  margin: 0 5px;
  text-align: center;
  height: 200px;
  background-color: #333;
  overflow: hidden;
}

.block-two__title {
  background-color: #333;
  color: #f2f2f2;
}

.block-two__body {
  display: flex;
  width: 100%;
  justify-content: center;
  flex: 1;
  background-color: #575555;
  height: 200px;
}

.block-two__body:hover {
  overflow-y: scroll;
}

.block-two__content {
  flex: 1;
  flex-direction: column;
  margin: 0 2px;
  font-size: 12px;
  color: #f2f2f2;
}

.block-two__subtitle {
  position: sticky;
  top: 0;
  background-color: #95969e;
  color: #f2f2f2;
}
</style>