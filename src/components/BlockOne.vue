<template>
  <div class="block">
    {{width}}
    <p>Hi I'm the first block</p>
    <div class="table">
      <div class="col" v-for="(items, index) in crypto" :key="index">
        <div class="title">{{ index }}</div>
          <div class="body" >
            <div class="text" v-for="(item, index) in items" :key="index">
              <div class="subtitle">{{ index }}</div>
              <div v-if="index !== 'Total'">{{ item[0] }} : {{ item[1] }}</div>
              <div v-if="index === 'Total'">{{ item }}</div>
              <!-- <div class="subtitle" v-show="index !== 'Total'">{{ index }}</div>
              <div  v-show="index !== 'Total'">{{ item[0] }} : {{ item[1] }}</div>

              <div class="subtitle" v-show="index === 'Total' & width>600">{{ index }}</div>
              <div  v-show="index === 'Total' & width>600">{{ item }}</div> -->
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockOne",
  data() {
    return {
      width: 0,
      crypto,
    };
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
      if(this.width>600){
        this.crypto.Bid.Total = parseFloat(this.crypto.Bid.Price) + parseFloat(this.crypto.Bid.Amount);
        this.crypto.Ask.Total = parseFloat(this.crypto.Ask.Price) + parseFloat(this.crypto.Ask.Amount);
      } else {
        delete this.crypto.Bid.Total
        delete this.crypto.Ask.Total
      }
    }
  },
  created() {
    this.width=window.innerWidth
    window.addEventListener('resize', this.updateWidth);
    this.emitter.on("get-crypto", (event) => {
      this.crypto = event;
      if(this.width>600){
        this.crypto.Bid.Total = parseFloat(this.crypto.Bid.Price) + parseFloat(this.crypto.Bid.Amount);
        this.crypto.Ask.Total = parseFloat(this.crypto.Ask.Price) + parseFloat(this.crypto.Ask.Amount);
      }
      console.log(this.crypto);
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
  margin: 0 -5px;
  flex: 1;
}
.col {
  flex: 1;
  margin: 0 5px;
  text-align: center;
}
.title {
  background-color: #333;
  color: #f2f2f2;
}

.body{
  display: flex;
  flex: 1;
}

.subtitle{
  background-color: #95969e;
  color: #f2f2f2;
  flex: 1;
  padding: 0 1px;
  text-align: center;
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
