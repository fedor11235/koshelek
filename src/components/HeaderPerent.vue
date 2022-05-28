<template>
    <div class="nav">
        <a             
            class="nav"      
            v-for="tab in tabs"
            :key="tab"
            @click="currentTab = tab"
        >
            Block {{tab}}
        </a>
    </div>
</template>

<script scoped>
export default {
  name: 'HeaderPerent',
  data() {
    return {
      currentTab: 'One',
      tabs: ['One', 'Two']
    }
  },
  watch: {
      currentTab(val) {
          this.emitter.emit("active-block", val);
      }
  },
  created(){
    this.emitter.emit("active-block", this.currentTab);
  }
}
</script>

<style>
.nav {
    background-color: #333;
    overflow: hidden;
}

.nav a{
    float: left;
    color: #f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover{
    background: #ddd;
    color: #333;
}
</style>
