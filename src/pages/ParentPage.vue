<template>
  <div>
    <HeaderPerent />
    <component :is="currentTabComponent"></component>
  </div>
</template>

<script>
import HeaderPerent from "@/components/HeaderPerent";
import BlockOne from "@/components/BlockOne";
import BlockTwo from "@/components/BlockTwo";

export default {
  name: "ParentPage",
  components: {
    HeaderPerent,
    BlockOne,
    BlockTwo,
  },
  data() {
    return {
      currentTabComponent:'BlockOne'
    }
  },
  created() {
    this.emitter.on("active-block", (evt) => {
      this.currentTabComponent='Block' + evt;
    });
  },
};
</script>

<style>
.nav {
  background-color: #333;
  overflow: hidden;
}

.nav a {
  float: left;
  color: #f2f2f2;
  padding: 14px 16px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
  cursor: pointer;
}

.nav a:hover {
  background: #ddd;
  color: #333;
}
</style>
