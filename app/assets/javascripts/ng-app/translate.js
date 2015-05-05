app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'TITLE': 'Hello',
    'STUDENT_NAME': 'Name',
    'STUDENT_SURNAME': 'Surname',
    'CITY': 'City',
    'MY_PROFILE': 'My profile',
    'REGISTER_STUDENT': 'Register student',
    'REGISTER_COMPANY': 'Register Company',
    'MY_PROFILE': 'My profile',
    'PROFILE': 'Profile',
    'LOGIN': 'Login',
    'LOGOUT': 'Logout',
    'CATEGORIES': 'Categories',
    'HOME': 'Home',
    'COMPANIES': 'Companies',
    'CHANGE_PASSWORD': 'Change password',
    'AD': 'Ads',
    'NEW_AD': 'New ad',
    'FOO': 'This is a paragraph'
  });
 
  $translateProvider.translations('bs', {
    'TITLE': 'Cao',
    'STUDENT_NAME': 'Ime',
    'STUDENT_SURNAME': 'Prezime',
    'CITY': 'Grad',
    'MY_PROFILE': 'Moj profil',
    'REGISTER_STUDENT': 'Registracija studenta',
    'REGISTER_COMPANY': 'Registracija kompanije',
    'MY_PROFILE': 'Moj profil',
    'PROFILE': 'Profil',
    'LOGIN': 'Prijava',
    'LOGOUT': 'Odjava',
    'CATEGORIES': 'Kategorije',
    'HOME': 'Doma doma',
    'COMPANIES': 'Kompanije',
    'CHANGE_PASSWORD': 'Promijeni šifru',
    'AD': 'Oglasi',
    'NEW_AD': 'Novi oglas',
    'FOO': 'Dies ist ein Absatz'
  });
 
  $translateProvider.preferredLanguage('en');
}]);