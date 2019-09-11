export default (state = {}, action = {}) => {
      console.log('test ' + action.type );

  //switch (action.type) {
    //case 'LOGIN_USER':
      return { token: action.token };
   // case 'LOGOUT_USER':
     // return ;
   // }
};