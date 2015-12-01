import alt from '../alt';
import AppProviderActions from '../actions/AppProviderActions'

class AppProviderStore{

    constructor(){
        this.bindActions(AppProviderActions);
        this.providerDetails=null;
        this.errorMessage=null;
        this.redirectComponent=null;
        this.errorMessageStatus=null;
    }

    onGetAppProviderDashboardDetailsSuccess(data){
        this.errorMessage=null;
        this.providerDetails = data;

    }

    onRedirectTo(componentName){
        alert('iam Colled')
        this.redirectComponent = componentName;
    }

    onGetAppProviderDashboardDetailsFail(error){
        this.errorMessageStatus=error.status;
        this.errorMessage=error.errorMessage;
    }
}

export default alt.createStore(AppProviderStore)