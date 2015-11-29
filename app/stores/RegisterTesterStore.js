import alt from '../alt';
import RegisterTesterActions from '../actions/RegisterTesterActions';

class RegisterTesterStore {

    constructor() {
        this.bindActions(RegisterTesterActions);
        this.username='';
        this.password='';
        this.firstName='';
        this.lastName='';
        this.avatarUrl='';
        this.confirmPassword='';
        this.emailId='';
        this.homeAddress='201 W California Avenue, Sunnyvale, 94078, CA, USA';
        this.mailingAddress='201 W California Avenue, Sunnyvale, 94078, CA, USA';
        this.contactNumber='';
        this.alternateContactNumber='';
        this.age='';
        this.designation='';
        this.yearsOfExperience='';
        this.tools=[];
        this.programmingLanguages = [];
        this.bugReportingTools = [];
        this.startDate = '';
        this.endDate = '';
        this.startTime = '';
        this.endTime = '';
        this.notAvailableStartDate = '12-20-2015';
        this.notAvailableEndDate = '01-02-2016';
        this.billingEmail = '';
        this.billingPhone = '';
        this.timeZone='';
        this.platforms=[];
        this.managerResponsibility=false;
        this.testingType=[];
        this.isRegistered=false;
        this.isError = false;
        this.errorMessage = '';
        this.successMessage='';
    }


    onUpdateFirstName(event){
        this.firstName = event.target.value;
    }

    onUpdateAge(event){
        this.age = event.target.value;
    }

    onUpdateResponsibility(event){
        var textVal = event.target.value;
        this.managerResponsibility = 'YES' == textVal;
    }

    onUpdateLastName(event){
        this.lastName = event.target.value;
    }

    onUpdateAvatarUrl(event){
        this.avatarUrl = event.target.value;
    }

    onUpdateContactNumber(event){
        this.contactNumber = event.target.value;
    }

    onUpdateAlternateContactNumber(event){
        this.alternateContactNumber = event.target.value;
    }

    onUpdateDesignation(event){
        this.designation =  event.target.value;
    }

    onUpdateExperience(event){
        this.yearsOfExperience =  event.target.value;
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

    onUpdateStartDate(event){
        this.startDate = event.target.value;
    }

    onUpdateEndDate(event){
        this.endDate = event.target.value;
    }
    onUpdateStartTime(event){
        this.startTime = event.target.value;
    }
    onUpdateEndTime(event){
        this.endTime = event.target.value;
    }

    onUpdateBillingEmail(event){
        this.billingEmail = event.target.value;
    }
    onUpdateBillingPhone(event){
        this.billingPhone = event.target.value;
    }


    onUpdatePlatformSkills(event) {
        var selectedOptions = event.target.selectedOptions
        this.platforms=[]
        for (var i = 0; i < selectedOptions.length; i++) {
            this.platforms.push(selectedOptions[i].value)
        }
    }

    onUpdateProgrammingLanguages(event) {
        var selectedOptions = event.target.selectedOptions
        this.programmingLanguages=[]
        for (var i = 0; i < selectedOptions.length; i++) {
            this.programmingLanguages.push(selectedOptions[i].value)
        }
    }

    onUpdateBugReportingTools(event) {
        var selectedOptions = event.target.selectedOptions
        this.bugReportingTools=[]
        for (var i = 0; i < selectedOptions.length; i++) {
            this.bugReportingTools.push(selectedOptions[i].value)
        }
    }

    onUpdateTestingTypes(event){
        var selectedOptions = event.target.selectedOptions
        this.testingType=[]
        for (var i = 0; i < selectedOptions.length; i++) {
            this.testingType.push(selectedOptions[i].value)
        }

    }

    onUpdateTools(event){
        var selectedOptions = event.target.selectedOptions
        this.tools=[]
        for (var i = 0; i < selectedOptions.length; i++) {
            this.tools.push(selectedOptions[i].value)
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

