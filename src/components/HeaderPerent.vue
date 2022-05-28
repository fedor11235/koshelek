<template>
    <div class="header">
        <a     
            class="header__link"            
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
.header {
    background-color: #333;
    overflow: hidden;
}

.header__link{
    float: left;
    color: #f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
    cursor:pointer;
}

.header__link:hover{
    background: #ddd;
    color: #333;
}
</style>
