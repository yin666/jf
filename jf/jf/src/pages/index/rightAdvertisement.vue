<template>
  <aside class="right-advertise">
    111   
  </aside>
</template>

<script>
  export default {
    name: 'right-advertise',
    data() {
      return {
        msg: 'this is countdown'
      }
    },
    methods: {
      init() {
        console.log(111);
      }
    }
  }
</script>

<style lang="scss" scoped>
.right-advertise{
  position: fixed;
  width: 120px;
  height: 352px;
  top:30%;
  right: 0;
  background-image: url(https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/services/right.png);
  background-position: left top;
}
</style>
