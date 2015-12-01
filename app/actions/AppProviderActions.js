import alt from '../alt';

class AppProviderActions{

    constructor(){
        this.generateActions(
            'getAppProviderDashboardDetailsSuccess',
            'getAppProviderDashboardDetailsFail',
            'redirectTo'
        );
    }


    getAppProviderDashboardDetails(){
        console.log('Getting provider details');
        $.ajax({
                type:'GET',
                url:'/appProvidersProfile'
            })
            .done((data)=>{
                this.actions.getAppProviderDashboardDetailsSuccess(data);
            })
            .fail((jqXhr) => {
                var errorMessage = jqXhr.responseJSON.message;
                var error={
                    status:jqXhr.status,
                    errorMessage:errorMessage
                }
                this.actions.getAppProviderDashboardDetailsFail(error)
            });
    }

}

export default alt.createActions(AppProviderActions)

