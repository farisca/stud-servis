app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'TITLE': 'Hello',
    'STUDENT_NAME': 'Name',
    'STUDENT_SURNAME': 'Surname',
    'CITY': 'City',
    'MY_PROFILE': 'My profile',
    'FOO': 'This is a paragraph'
  });
 
  $translateProvider.translations('bs', {
    'TITLE': 'Cao',
    'STUDENT_NAME': 'Ime',
    'STUDENT_SURNAME': 'Prezime',
    'CITY': 'Grad',
    'MY_PROFILE': 'Moj profil',
    'FOO': 'Dies ist ein Absatz'
  });
 
  $translateProvider.preferredLanguage('en');
}]);