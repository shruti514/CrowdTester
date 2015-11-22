import alt from '../alt';

class HomeActions{

    constructor(){
        this.generateActions(
          'getUserSuccess',
          'getUserFail'
        );
    }

    getUser(){
        console.log('Getting a loggedIn user');
        $.ajax({
                type:'GET',
                url:'/getUser'
            })
            .done((data)=>{
                this.actions.getUserSuccess(data);
            })
            .fail((jqXhr) => {
                var errorMessage = jqXhr.responseJSON.message;

                this.actions.getUserFail(errorMessage)
            });
    }

}

export default alt.createActions(HomeActions)

