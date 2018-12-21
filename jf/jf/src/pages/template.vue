<template>
  <div class="hello">
    <div>about vuex</div>
    <div>{{getVuex}}</div>
    <div>this.$store.state.user.AcctAmount</div>
    <div>set vuex</div>
    <router-view/>
    <right-advertisement></right-advertisement>
    {{msg}} 
  </div>
</template>

<script>
import rightAdvertisement from "./index/rightAdvertisement"
export default {
  name: 'HelloWorld',
  components: {    
    rightAdvertisement
  },
  data () {
    return {
      getVuex: this.$store.state.user.AcctAmount
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
