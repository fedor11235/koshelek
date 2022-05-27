<template>
  <div class="block">
    <br/>
    <div class="table">
      <div class="col">
        <div class="title">BID</div>
        <div class="body">
          <div class="content">
            <div class="subtitle">Price</div>
            <div v-for="(item, index) in crypto.bids" :key="index">{{item[0]}}</div>
          </div>
          <div class="content">
            <div class="subtitle">Amount</div>
            <div v-for="(item, index) in crypto.bids" :key="index">{{item[1]}}</div>
          </div>
          <div class="content" v-if="width>600">
            <div class="subtitle">Total</div>
            <div v-for="(item, index) in crypto.bids" :key="index">{{item[0] * item[1]}}</div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="title">ASK</div>
        <div class="body">
           <div class="content">
            <div class="subtitle">Price</div>
            <div v-for="(item, index) in crypto.asks" :key="index">{{item[0]}}</div>
          </div>
          <div class="content">
            <div class="subtitle">Amount</div>
            <div v-for="(item, index) in crypto.asks" :key="index">{{item[1]}}</div>
          </div>
          <div class="content"  v-if="width>600">
            <div class="subtitle">Total</div>
            <div v-for="(item, index) in crypto.asks" :key="index">{{item[0] * item[1]}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from '@/components/DropDown'
export default {
  name: "BlockTwo",
  components: {
    DropDown
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
    window.addEventListener("resize", this.updateWidth);
    this.emitter.on("get-crypto", (event) => {
      this.crypto = event;
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
.table {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0 -5px;
  flex: 1;
}
.col {
  flex: 1;
  margin: 0 5px;
  text-align: center;
  height: 200px;
  background-color: #333;
  overflow: hidden;
}

.col:hover {
    overflow-y: scroll;
}
.title {
  background-color: #333;
  color: #f2f2f2;
}

.body {
  display: flex;
  width: 100%;
  justify-content: center;
  flex: 1;
}

.content {
  flex: 1;
  flex-direction: column;
  margin: 0 2px;
  color: #f2f2f2;
  background-color: #545558;
}

.subtitle {
  position: sticky;
  top: 0;
  background-color: #95969e;
  color: #f2f2f2;
}

.text {
  background-color: #575555;
  color: #f2f2f2;
  font-size: 12px;
  flex: 1;
  padding: 0 1px;
  text-align: center;
}
</style>