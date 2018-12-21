<template>
<section class="header">
  <div class="header-first">       
    <div class="row header-row">         
      <ul class="header-left">
        <li>
          <span class="china-flag flag">           
          </span>
        </li>
        <li>
          <span class="philippines-flag flag">           
          </span>
        </li>
        <li>
          <span class="america-flag flag">           
          </span>
        </li>
        <li>
          <span class="">
            ET -
          </span>
          <span>
            2018/12/18 (Tu) 04:53:24
          </span>
        </li>
      </ul>
      <ul class="header-right">
        <li :class="colorChange===1?'color-yellow':'color-green'">
          <span>在线人数：</span>
          <span>22</span>
          <div class="in-div">

          </div>
        </li>
        <li class="color-red" @mouseenter="controlLicenses=true" @mouseleave="controlLicenses=false">
          <span >
            合法牌照显示 
          </span>
          <div class="licenses" :class="controlLicenses===false ?'display-none':'display-block'">

          </div>
        </li>
        <li :class="colorChange===0?'color-red':'color-green'">
          <span>
            免费试玩 
          </span>
        </li>
        <li class="color-orange">
          <span>
            代理合作 
          </span>
        </li>
        <li :class="colorChange===1?'color-yellow':'color-green'">
          <span>
            手机App 
          </span>
        </li>
        <li :class="colorChange===0?'color-yellow':'color-green'">
          <span>
            线路检测 
          </span>
        </li>
        <li :class="colorChange===1?'color-red':'color-green'">
          <span>
            活动大厅 
          </span>
        </li>
        <li :class="colorChange===0?'color-yellow':'color-green'" class="no-border">
          <span class="electroc-upgrade">
            电子升级 
            <div class="hot-img">

            </div>
          </span>
        </li>
        <li class="no-border">
          <span>
            65599G.COM   
          </span>
        </li>            
      </ul>
    </div>   
  </div>
  <header-banner :colorChange = "colorChange"></header-banner>
  <header-acount></header-acount>
  
</section>
  
</template>

<script>
  import headerBanner from "./headerComponent/headerBanner";
  import headerAcount from "./headerComponent/headerAccount"
  export default {
    components: {
      headerBanner,
      headerAcount
    },
    props: [],
    name: 'head-component',
    data() {
      return {
        controlLicenses:false,//控制执照的隐藏与显示
        timerControl:null,
        colorChange:0,//控制字体颜色
        msg: 'this is head'
      }
    },
    methods: {
      init() {
        this.colorTimer();//字体变色
      },
      colorTimer(){ //改变字体颜色
        var self = this;
        self.timerControl = setInterval(
        function(){            
          if(self.colorChange<1){
            self.colorChange = self.colorChange +1;
          }else{
            self.colorChange = 0;
          }
        },
        600);       
      },
    },
    mounted() {
      this.init();
		},
		beforeDestroy() {
      clearInterval(self.timerControl);
    }
  }
</script>

<style lang="scss" scoped>
.header{
  .header-first{
    width:100%;
    background:#111;
    border-bottom: 1px solid #2c281f;
    .header-row{
      display:flex;
      justify-content: space-between;
      color:#fff;
      height: 0.33rem;
      li{
        span{
          display:inline-block;
          padding-left:0.02rem;
          padding-right:0.02rem;
        }
        .flag{
          width:0.22rem;
          height: 0.15rem;
          background-repeat: no-repeat;
        }
        .china-flag{
          background-image: url(https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/zh_CN.png);
          
        }
        .philippines-flag{
          background-image:url('https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/zh_TW.png')
        }
        .america-flag{
          background-image: url(https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/en_US.png);
        }
      }
      .header-left{
        display:flex;
        align-items: center;   
      }
      .header-right{
        display:flex;
        align-items: center;
        li{
          border-right: 1px solid #fff;
          position:relative;
          cursor:pointer;
          .licenses{
            position:absolute;
            top: 12px;
            left: -45px;
            width: 7.68rem;
            height: 3.09rem;
            background-image: url(https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/license.png);
            background-repeat: no-repeat;
            z-index: 90;
            background-position-y: 15px;
          }
          span{
            position:relative;
            padding-left:0.04rem;
            padding-right:0.04rem;
            font-size: 0.12rem;
          }
          .hot-img{
            position:absolute;
            right: -0.2rem;
            top:-0.06rem;
            width:0.2rem;
            height: 0.2rem;
            background-image: url(https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/top_hot.gif);
            background-repeat: no-repeat;
          }
          .electroc-upgrade{
            margin-right:0.2rem;
          }
        }
        .no-border{
          border-right: 0;
        }
      }
    }
  }
}

@keyframes green-blue {
    from {color: #f44336}
    to {color:#ffeb3b;}
  }
  .color-change{
    animation-name: green-blue;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1,1);
  }
  
</style>
