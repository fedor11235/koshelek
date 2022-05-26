<template>
    <div class="block">
        <p>Hi I'm the first block</p>
    </div>
</template>

<script>
export default {
  name: 'BlockOne',
  data() {
    return {

    }
  },
  created() {
    this.emitter.on('get-crypto', (event) => {
      console.log(event)
    })
  }
}
</script>

<style scoped>
.block {
    display: flex;
    justify-content: space-around;
}
</style>
