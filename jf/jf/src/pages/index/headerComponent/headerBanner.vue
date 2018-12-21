<template>
  <section class="header-banner">
    <div class="row banner-row">
      <div class="left-logo">
        <div class="pic-div">
        </div>
      </div>
      <nav class="right-nav">
        <ul>
          <li>
            <span class="banner-pic home">             
            </span>
            <span class="banner-chinese">
              首页
            </span>
            <span class="banner-english">
              HOME
            </span>
          </li>
          <li :class="colorChange===1?'color-white':'color-green'" @mouseenter="slidedown='electric'" @mouseleave="slidedown=null">
            <span class="banner-pic slogs" :class="colorChange===1?'bg-position-bottom':'bg-position-top'">
              <div class="hot-pic">
              </div>
            </span>
            <span class="banner-chinese">
              电子子游艺
            </span>
            <span class="banner-english">
              SLOGS
            </span>
            <div class="subnav fish" :class="slidedown==='electric'?'':'height-0'">
              <ol>
                <li>
                  <span>SLOGS</span>
                  <i></i>
                </li>
                <li>
                  <span>SLOGS</span>
                  <i></i>
                </li>
                <li>
                  <span>SLOGS</span>
                  <i></i>
                </li>
                <li>
                  <span>SLOGS</span>
                  <i></i>
                </li>
                <li>
                  <span>SLOGS</span>
                  <i></i>
                </li>
                <li>
                  <span>SLOGS</span>
                  <i></i>
                </li>
                <li>
                  <span>SLOGS</span>
                  <i></i>
                </li>
                <li>
                  <span>SLOGS</span>
                  <i></i>
                </li>
                <li>
                  <span>SLOGS</span>
                  <i></i>
                </li>
                <li>
                  <span>SLOGS</span>
                </li>
              </ol>
            </div>
          </li>
          <li :class="colorChange===0?'color-white':'color-yellow'" @mouseenter="slidedown='fish'" @mouseleave="slidedown=null">
            <span class="banner-pic fish-game" :class="colorChange===1?'bg-position-bottom':'bg-position-top'">
              <div class="hot-pic">

              </div>
            </span>
            <span class="banner-chinese">
              捕鱼达人
            </span>
            <span class="banner-english">
              FISH GAME
            </span>
            <div class="subnav fish " :class="slidedown==='fish'?'':'height-0'">
              <ol>
                <li>
                  <span>AG Fish</span>
                  <i></i>
                </li>
                <li>
                  <span>AG Fish</span>
                  <i></i>
                </li>
                <li>
                  <span>AG Fish</span>
                  <i></i>
                </li>
                <li>
                  <span>AG Fish</span>
                  <i></i>
                </li>
                <li>
                  <span>AG Fish</span>
                  <i></i>
                </li>
                <li>
                  <span>AG Fish</span>
                  <i></i>
                </li>
                <li>
                  <span>AG Fish</span>
                  <i></i>
                </li>
                <li>
                  <span>AG Fish</span>
                  <i></i>
                </li>
                <li>
                  <span>AG Fish</span>
                  <i></i>
                </li>
                <li>
                  <span>AG Fish</span>
                </li>
              </ol>
            </div>
          </li>
          <li :class="colorChange===1?'color-white':'color-yellow'" @mouseenter="slidedown='chess'" @mouseleave="slidedown=null">
            <span class="banner-pic card-games" :class="colorChange===1?'bg-position-bottom':'bg-position-top'">
              <div class="superhot-pic">

              </div>
            </span>
            <span class="banner-chinese">
              棋牌对战
            </span>
            <span class="banner-english">
              CARD GAMES
            </span>
            <div class="subnav fish " :class="slidedown==='chess'?'':'height-0'">
              <ol>
                <li>
                  <span>CARD GAMES</span>
                  <i></i>
                </li>
                <li>
                  <span>CARD GAMES</span>
                  <i></i>
                </li>
                <li>
                  <span>CARD GAMES</span>
                  <i></i>
                </li>
                <li>
                  <span>CARD GAMES</span>
                  <i></i>
                </li>
                <li>
                  <span>CARD GAMES</span>
                  <i></i>
                </li>
                <li>
                  <span>CARD GAMES</span>
                  <i></i>
                </li>
                <li>
                  <span>CARD GAMES</span>
                  <i></i>
                </li>
                <li>
                  <span>CARD GAMES</span>
                  <i></i>
                </li>
                <li>
                  <span>CARD GAMES</span>
                  <i></i>
                </li>
                <li>
                  <span>CARD GAMES</span>
                </li>
              </ol>
            </div>
          </li>
          <li :class="colorChange===1?'color-white':'color-yellow'"  @mouseenter="slidedown='realPerson'" @mouseleave="slidedown=null">
            <span class="banner-pic card-games" :class="colorChange===1?'bg-position-bottom':'bg-position-top'">
              <div class="superhot-pic">

              </div>
            </span>
            <span class="banner-chinese">
              真人视讯
            </span>
            <span class="banner-english">
              CASINO
            </span>
            <div class="subnav fish " :class="slidedown==='realPerson'?'':'height-0'">
              <ol>
                <li>
                  <span>CASINO</span>
                  <i></i>
                </li>
                <li>
                  <span>CASINO</span>
                  <i></i>
                </li>
                <li>
                  <span>CASINO</span>
                  <i></i>
                </li>
                <li>
                  <span>CASINO</span>
                  <i></i>
                </li>
                <li>
                  <span>CASINO</span>
                  <i></i>
                </li>
                <li>
                  <span>CASINO</span>
                  <i></i>
                </li>
                <li>
                  <span>CASINO</span>
                  <i></i>
                </li>
                <li>
                  <span>CASINO</span>
                  <i></i>
                </li>
                <li>
                  <span>CASINO</span>
                  <i></i>
                </li>
                <li>
                  <span>CASINO</span>
                </li>
              </ol>
            </div>
          </li>
          <li @mouseenter="slidedown='lottery'" @mouseleave="slidedown=null">
            <span class="banner-pic lottery">
            </span>
            <span class="banner-chinese">
              彩票游戏
            </span>
            <span class="banner-english">
              LOTTERY
            </span>
            <div class="subnav fish " :class="slidedown==='lottery'?'':'height-0'">
              <ol>
                <li>
                  <span>LOTTERY</span>
                  <i></i>
                </li>
                <li>
                  <span>LOTTERY</span>
                  <i></i>
                </li>
                <li>
                  <span>LOTTERY</span>
                  <i></i>
                </li>
                <li>
                  <span>LOTTERY</span>
                  <i></i>
                </li>
                <li>
                  <span>LOTTERY</span>
                  <i></i>
                </li>
                <li>
                  <span>LOTTERY</span>
                  <i></i>
                </li>
                <li>
                  <span>LOTTERY</span>
                  <i></i>
                </li>
                <li>
                  <span>LOTTERY</span>
                  <i></i>
                </li>
                <li>
                  <span>LOTTERY</span>
                  <i></i>
                </li>
                <li>
                  <span>LOTTERY</span>
                </li>
              </ol>
            </div>
          </li>
          <li @mouseenter="slidedown='sports'" @mouseleave="slidedown=null">
            <span class="banner-pic sports">
            </span>
            <span class="banner-chinese">
              体育电竞
            </span>
            <span class="banner-english">
              SPORTS
            </span>
            <div class="subnav fish " :class="slidedown==='sports'?'':'height-0'">
              <ol>
                <li>
                  <span>SPORTS</span>
                  <i></i>
                </li>
                <li>
                  <span>SPORTS</span>
                  <i></i>
                </li>
                <li>
                  <span>SPORTS</span>
                  <i></i>
                </li>
                <li>
                  <span>SPORTS</span>
                  <i></i>
                </li>
                <li>
                  <span>SPORTS</span>
                  <i></i>
                </li>
                <li>
                  <span>SPORTS</span>
                  <i></i>
                </li>
                <li>
                  <span>SPORTS</span>
                  <i></i>
                </li>
                <li>
                  <span>SPORTS</span>
                  <i></i>
                </li>
                <li>
                  <span>SPORTS</span>
                  <i></i>
                </li>
                <li>
                  <span>SPORTS</span>
                </li>
              </ol>
            </div>
          </li>
          <li class="color-0ff" @mouseenter="slidedown='promotion'" @mouseleave="slidedown=null">
            <span class="banner-pic promotion">
              <div class="hot-pic">
              </div>
            </span>
            <span class="banner-chinese">
              优惠活动
            </span>
            <span class="banner-english">
              PROMOTION
            </span>
            <div class="subnav fish " :class="slidedown==='promotion'?'':'height-0'">
              <ol>
                <li>
                  <span>LOTTERY</span>
                  <i></i>
                </li>
                <li>
                  <span>LOTTERY</span>
                  <i></i>
                </li>
                <li>
                  <span>LOTTERY</span>
                  <i></i>
                </li>
                <li>
                  <span>LOTTERY</span>
                  <i></i>
                </li>
                <li>
                  <span>LOTTERY</span>
                  <i></i>
                </li>
                <li>
                  <span>LOTTERY</span>
                  <i></i>
                </li>
                <li>
                  <span>LOTTERY</span>
                  <i></i>
                </li>
                <li>
                  <span>LOTTERY</span>
                  <i></i>
                </li>
                <li>
                  <span>LOTTERY</span>
                  <i></i>
                </li>
                <li>
                  <span>LOTTERY</span>
                </li>
              </ol>
            </div>
          </li>
        </ul>
      </nav>

    </div>
  </section>   
</template>

<script>
  export default {
    name: 'header-banne',
    props: ['colorChange'],
    data() {
      return {
        slidedown:null,//控制banner中的slidedown
        msg: 'header-banne'
      }
    },
    methods: {
      init() {
        console.log(this.colorChange);
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
 .header-banner{
    width:100%;
    background:#111;
    border-bottom: 1px solid #2c281f;
    .banner-row{
      display:flex;
      justify-content: space-between;
      color:#fff;
      .left-logo{
        position:relative;
        .pic-div{
          position: relative;
          display: inline-block;
          width: 3.16rem;
          height: 1.02rem;
          vertical-align: top;
          background: url(https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/logo.png) no-repeat left center;
        }
      }
      .right-nav{
        display:flex;
        ul{
          display:flex;
          >li{
            display:flex;
            flex-direction: column;
            padding: 0 0.1rem;
            cursor: pointer;
            position:relative;
            &:last-child{
              padding-right: 0;
            }
            .subnav {
              // display: none;
              position: absolute;
              top:103px;
              width: 130px;
              z-index: 99;
              text-align: left;
              border: 2px solid #e9dc86;
              background: rgba(0,0,0,.7);
              transition-property: all;
              transition-duration: .8s;
              transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
              transform-origin: left top;
              &:before{
                position: absolute;
                content: "";
                width: 0;
                height: 0;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-bottom: 8px solid #e9dc86;
                left: 50%;
                top: -8px
              } 
              i{ 
                position: absolute;
                width: 17px;
                height: 17px;
                right: 0px;
                top:0px;
                background:url('https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/sub_hot.gif') no-repeat center center;
              }            
            }
            .height-0{
              transform: scaleY(0);              
              overflow: hidden;              
            }
            .fish{
              left: -113px;;
              width:304px;
            }
            ol{
              display: flex;
              flex-wrap:wrap;
              color: #fff;
              li{
                position: relative;
                box-sizing: border-box;
                border-bottom: 1px dotted #333;
                width:150px; 
                height: 36px;
                line-height: 36px;
                padding-left: 40px;
                background: url('https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/subnav/fish/ag_fish.png') left center no-repeat;
              }
            }
          }
        }
        .banner-pic{
          position: relative;
          display: block;
          width: 0.29rem;
          height: .24rem;
          margin: .20rem auto .07rem;
          background-repeat: no-repeat;
          .hot-pic{
            position: absolute;
            top: -0.06rem;
            right: -0.20rem;
            width: 0.23rem;
            height: .26rem;
            background: url(https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/hot.gif) no-repeat center top;
          }
          .superhot-pic{
            position: absolute;
            top: -0.06rem;
            right: -0.20rem;
            width: 0.23rem;
            height: .26rem;
            background: url('https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/superhot.gif') no-repeat center top
          }          
        }
        .home{
          background:url(https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/nav/home.png);
        }
        .slogs{
          background:url('https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/nav/slot.png');
        }
        .fish-game{
          background:url('https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/nav/fish.png');
        }
        .card-games{
          background:url('https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/nav/board.png');
        }
        .lottery{
          background:url('https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/nav/lottery.png')
        }
        .sports{
          background:url('https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/nav/sport.png');
        }
        .promotion{
          background:url('https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/nav/promotion.png');
        }
      }
    }
    .bg-position-top{
      background-position-y: top !important;
    }
    .bg-position-center{
      background-position-y: center !important;
    }
    .bg-position-top{
      background-position-y: bottom !important;
    }
 }
</style>
