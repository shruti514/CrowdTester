import alt from '../alt';
import HomeActions from '../actions/HomeActions'

class HomeStore{

    constructor(){
        this.bindActions(HomeActions);
        this.user=null;
        this.isAuthenticated=false
    }

    onGetUserSuccess(data){
        this.user = data.user;
        this.isAuthenticated=true;
    }

    onGetUserFail(errorMessage){
        this.isAuthenticated=false;
    }


}

export default alt.createStore(HomeStore)