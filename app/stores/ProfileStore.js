import alt from '../alt';

import ProfileActions from '../actions/ProfileActions';

class ProfileStore{

    constructor(){
        this.bindActions(ProfileActions);
        this.firstName='';
        this.lastName='';
        this.departmentName='';
        this.email='';
        this.contactNumber='';
        this.designation="";
        this.successMessage='';
        this.username=""
        this.errorMessage='';
        this.errorStatusCode='';
        this.age='';
        this.role=null;
    }

    onGetProfileSuccess(data){
        var user = data.user;
        this.role=data.role;
        this.firstName=user.firstName;
        this.lastName=user.lastName;
        this.departmentName=user.department;
        this.contactNumber=user.contactNumber;
        this.email=user.email;
        this.designation = user.designation;
        this.username=user.username;
        this.age=user.age;
    }

    onGetProfileFail(data){
        alert('called Error')
        this.errorMessage=data.message;
        this.errorStatusCode=data.status;
    }
}

export default alt.createStore(ProfileStore);