angular.module('aplikacija').directive('companies', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      template: '<div ng-controller="CompanyController">'+
        "<p>{{ 'AD_COMPANY' | translate }}</p>"+
        '<label for="inputCompany" class="sr-only">Kompanija</label>'+
        "<select class='form-control' id='select' ng-model='job.data.company_name'  ng-init='"+
        "job.data.company_name="+'"Authority Partners"'+"'>"
        +'<option ng-repeat="company in podaci" ng-selected="{{company.id==1}}" value="{{company.name}}">'
        +'{{company.name}}</option>'
        +'</select>'
        +'<br/><br/>'
        +'</div>'
          
  };
});