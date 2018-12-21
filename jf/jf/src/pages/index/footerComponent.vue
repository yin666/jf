<template>
  <section class="footer">
    <div class="wraper">
      <div class="footer-row row">
        <ul>
          <li>
            <span>
              QQ:
            </span>
            <span>
              815665599
            </span>
          </li>
          <li>
            <span>
              Online Chat
            </span>
          </li>
          <li>
            <span>
              服务时间：
            </span>
            <span>
              00:00-24:00
            </span>
          </li>
          <li>
            <span>
              Email:
            </span>
            <span>
              KF@65599.com
            </span>
          </li>
        </ul>
        <div class="hotline">
          <span>7x24小时热线：</span>
          <span>+63 930339 8888</span>
        </div>
      </div>
    </div>
    <div class="wraper">
      <div class="row links">
        <ul>
          <li>
            <span>
              ABOUT US
            </span> 
          </li>
          <li>
            <span>
              CONTACT US
            </span> 
          </li>
          <li>
            <span>
              AFFILIATION
            </span> 
          </li>
          <li>
            <span>
              HOW TO DEPOSIT
            </span> 
          </li>
          <li>
            <span>
              Free Play
            </span> 
          </li>
          <li>
            <span>
              CLIENT
            </span> 
          </li>
        </ul>
      </div>
    </div>
    <div class="wraper">
      <div class="row last-row">
        Copyright © 太阳城集团 Reserved
      </div>
    </div>
  </section>   
</template>

<script>
  export default {
    name: 'countdown',
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
.footer{
  padding-top: 20px;
  background-color: #222; 
  .wraper{
    position:relative;
    width:100%;
    border-bottom: 1px solid #2c281f;
    display:flex;
    .footer-row{
      position: relative;
      height: 145px;
      background: url(https://cdn.igsttech.com/Web.Portal/DQ004-01.Portal/Content/Views/Shared/images/footer_logo.png) no-repeat right top;
      ul{
        position: relative;
        display: flex;
        width: 370px;
        flex-wrap: wrap;
        justify-content: space-evenly;
        li{
          margin-top: 13px;
          display: inline-block;
          width: 171px;
          height: 39px;
          color: #6f6f6f;
          font-size: 12px;
          text-align: center;
          line-height: 37px;
          border: 1px solid #313131;
        }
      }
      .hotline{
        color: #6f6f6f;
        font-size: 18px;
        font-weight: bold;
        width: 370px;
        text-align: center;
        padding-top: 10px;
      }
    }
    .links{
      display: flex;
      height: 52px;
      justify-content: center;
      ul{
        display:flex;
        align-items: center;
        li{
          color:#9c9c9c;
          border-right:1px solid #9c9c9c;
          padding: 0 10px;
          cursor:pointer;
          &:last-child{
            border-right: 0px;
          }
        }
      }
    }
    .last-row{
      margin:0 auto;
      height: 37px;
      color: #9c9c9c;
      font-size: 12px;
      text-align: center;
      line-height: 37px;
    }
  }
}
 
</style>
