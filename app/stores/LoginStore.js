import alt from '../alt';
import LoginAction from '../actions/LoginActions';

class LoginStore {

    constructor() {
        this.bindActions(LoginAction);
        this.username='';
        this.password='';
        this.isAuthenticated=false;
        this.errorMessage = null;
        this.user={}
    }

    onLoginSuccess(user){
        this.isAuthenticated = true;
        this.errorMessage=null;
        this.user = user
    }


    onLoginFail(errorMessage){
        console.log('Unable to login.Please try again.')
        this.errorMessage = errorMessage;
    }

    onUpdateUsername(event){
        //alert('changing name');
        this.username = event.target.value;
    }

    onUpdatePassword(event){
        //alert('changing pass');
        this.password = event.target.value;
    }

}

export default alt.createStore(LoginStore);

