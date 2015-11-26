import alt from '../alt';
import RegisterTesterActions from '../actions/RegisterTesterActions';

class RegisterTesterStore {

    constructor() {
        this.bindActions(RegisterTesterActions);
        this.username='';
        this.password='';
        this.firstName='';
        this.lastName='';
        this.confirmPassword='';
        this.emailId='';
        this.phoneNumber='';
        this.timeZone='';
        this.platform=[];
        this.testingType=[];
        this.isRegistered=false;
        this.isError = false;
        this.errorMessage = '';
        this.successMessage='';

    }


    onUpdateFirstName(event){
        this.firstName = event.target.value;
    }

    onUpdateLastName(event){
        this.lastName = event.target.value;
    }

    onUpdateUsername(event){
        this.username = event.target.value;
    }

    onUpdatePassword(event){
        this.password = event.target.value;
    }

    onConfirmPassword(event){
        this.confirmPassword = event.target.value;
    }

    onUpdateEmailId(event){
        this.emailId = event.target.value;
    }

    onUpdatePhoneNumber(event){
        this.phoneNumber = event.target.value;
    }

    onUpdateTimeZone(event){
        this.timeZone = event.target.value;
    }

    onUpdatePlatformSkills(event) {
        var selectedOptions = event.target.selectedOptions
        this.platform=[]
        for (var i = 0; i < selectedOptions.length; i++) {
            this.platform.push(selectedOptions[i].value)
        }
    }

    onUpdateTestingTypes(event){
        var selectedOptions = event.target.selectedOptions
        this.testingType=[]
        for (var i = 0; i < selectedOptions.length; i++) {
            this.testingType.push(selectedOptions[i].value)
        }

    }

    onRegisterTesterSuccess(successMessage){
        this.isRegistered = true;
        this.successMessage = successMessage;
    }

    onRegisterTesterFail(errorMessage){
        this.isError = true;
        this.errorMessage = errorMessage;
    }

    onUpdateErrorMessage(errorMessage){
        this.isError = true;
        this.errorMessage = errorMessage;
    }

}

export default alt.createStore(RegisterTesterStore);

