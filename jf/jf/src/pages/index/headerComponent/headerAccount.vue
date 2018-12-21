<template>
  <section class="header-account">
    <div class="row account-row">
      <input class="accout" type="text">
      <input class="pass" type="password">
      <div class="checkcode-div">
        <input class="checkcode" type="text" placeholder="Check Code">
        <img class="yzm" src="" alt="">
      </div>    
      <button class="login">
        LOGIN
      </button>
      <button class="join-us">
        JOIN US
      </button>
      <div class="forget-btn">
        <span>
          GET P/W
        </span>
        <span>></span>
      </div>
    </div>
  </section>   
</template>

<script>
  export default {
    name: 'header-account',
    props: [],
    data() {
      return {
        msg: 'header-account'
      }
    },
    methods: {
      init() {
      }
    },
    mounted() {
      this.init();
		},
		beforeDestroy() {
    }
  }
</script>

<style lang="scss" scoped>
 .header-account{
  height: 0.45rem;
  width:100%;
  background:#111;
  border-bottom: 1px solid #2c281f;
  display:flex;
  align-items: center;
  .account-row{
    display:flex;
    justify-content: flex-end;
    color:#fff;
    align-items: center;
    input{
      width: 163px;
      height: 32px;
      padding-left: 5px;
      margin-right: 10px;
      color: #777;
      background-color: #020202;
      border: 1px solid #3f372a;
      border-radius: 3px;
    }
    button{
      cursor: pointer;
      padding:0 10px;
      height: 30px;
      margin: 0 4px;
      color: #fff;
      font-size: 13px;
      vertical-align: top;
      background: none;
      border: none;
      border-radius: 3px;
      transition: all .3s;
    }
    .forget-btn{
      cursor:pointer;
      color: #e9dc86;
    }
    .accout{
      padding-left: 33px;
      background: url(https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/user.png) no-repeat left center;
    }
    .pass{
      padding-left: 33px;
      background: url(https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/pass.png) no-repeat left center;
    }
    .checkcode-div{
      position:relative;
      .yzm{
        position: absolute;
        top: 4px;
        right: 13px;
        width: auto;
        height: 27px;
      }
    }
    .login{
      background: #db4640;     
    }
    .join-us{
      color: #000;
      background: #eac06c;
    }
  }
 }
</style>
