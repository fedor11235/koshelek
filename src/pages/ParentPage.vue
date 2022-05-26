<template>
    <div>
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
        <component :is="currentTabComponent"></component>
    </div>
</template>

<script>
// import HeaderPerent from '@/components/HeaderPerent'
import BlockOne from '@/components/BlockOne'
import BlockTwo from '@/components/BlockTwo'

export default {
  name: 'ParentPage',
  components: {
    // HeaderPerent,
    BlockOne,
    BlockTwo
  },
  data() {
    return {
      currentTab: 'One',
      tabs: ['One', 'Two']
    }
  },
  computed: {
    currentTabComponent() {
      return 'Block' + this.currentTab
    }
  },
  created() {
      console.log(this)
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
    cursor: pointer;
}

.nav a:hover{
    background: #ddd;
    color: #333;
}
</style>
