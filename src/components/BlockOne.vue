<template>
    <div class="block">
        <p>Hi I'm the first block</p>
        <div class="table">
          <div class="col" v-for="(items, index) in crypto" :key="index" >
            <div class="title">{{index}}</div>
            <div class="text" v-if="index!=='a' & index!=='b'">{{items}}</div>
            <div v-if="index==='a' | index==='b'">
              <div class="text" v-for="(item, index) in items" :key="index">
                {{item[0]}} : {{item[1]}}
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
      crypto
    }
  },
  created() {
    this.emitter.on('get-crypto', (event) => {
      this.crypto = event
      console.log(event)
    })
  }
}
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
    flex:1;
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

.text {
  font-size: 12px;
}
</style>
