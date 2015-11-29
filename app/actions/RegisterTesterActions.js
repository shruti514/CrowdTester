import alt from '../alt';

class RegisterTesterActions{

    constructor(){
        this.generateActions(
            'updateFirstName',
            'updateLastName',
            'updateAvatarUrl',
            'updateUsername',
            'updatePassword',
            'confirmPassword',
            'updateEmailId',
            'updateContactNumber',
            'updateAlternateContactNumber',
            'updateAge',
            'updateDesignation',
            'updateExperience',
            'updateTools',
            'updateProgrammingLanguages',
            'updateBugReportingTools',
            'updateStartDate',
            'updateEndDate',
            'updateStartTime',
            'updateEndTime',
            'updateBillingEmail',
            'updateBillingPhone',
            'updateTimeZone',
            'updatePlatformSkills',
            'updateTestingTypes',
            'registerTesterSuccess',
            'updateResponsibility',
            'registerTesterFail',
            'updateErrorMessage'
        );
    }

    registerTester(newTester){
        console.log('Trying to login!!!');
        $.ajax({
                type:'POST',
                url:'/registerTester',
                data: newTester
            })
            .done((data)=>{
                // alert('login successfull');
                this.actions.registerTesterSuccess(data.message);
            })
            .fail((jqXhr) => {
                var errorMessage = jqXhr.responseJSON.message;

                this.actions.registerTesterFail(errorMessage)
            });
    }
}

export default alt.createActions(RegisterTesterActions)