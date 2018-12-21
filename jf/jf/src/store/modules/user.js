import Cookies from 'js-cookie';
const user = {
    state: {
      userInfo:{},
      AcctAmount:0
    },
    mutations: {
      userInfo(state,value){
          state.userInfo=value;
        },
      AcctAmount(state,value){
        state.AcctAmount=value;
      },
      logout (state, vm) {
        Cookies.remove('userInfo');
        Cookies.remove('access');
        // 清空打开的页面等数据
        localStorage.clear();
      }
    }
};

export default user;
