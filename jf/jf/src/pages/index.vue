<template>
  <div class="hello">
    <header-component></header-component>
    <router-view/>
    <footer-component></footer-component>
    <left-advertisement></left-advertisement>
    <right-advertisement></right-advertisement>
    {{msg}} 
  </div>
</template>

<script>
import headerComponent from "./index/headerComponent"
import footerComponent from "./index/footerComponent"
import leftAdvertisement from "./index/leftAdvertisement"
import rightAdvertisement from "./index/rightAdvertisement"
export default {
  name: 'HelloWorld',
  components: {    
    headerComponent,
    footerComponent,
    leftAdvertisement,
    rightAdvertisement
  },
  data () {
    return {
      msg: this.$store.state.user.AcctAmount
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$store.commit("AcctAmount", 1);
      console.log(this.$store.state.user.AcctAmount);
      this.util.test();
    }	
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
