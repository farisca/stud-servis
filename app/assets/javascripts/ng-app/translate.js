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
    'UNIVERSITY': 'University',
    'FACULTY': 'Faculty',
    'CV': 'CV',
    'DOWNLOAD': 'Download',
    'BROWSE': 'Browse',
    'SAVE': 'Save',
    'MY_ADS': 'My ads',
    'MY_ADS2': 'Ads I have applied to...',
    'EMAIL': 'E-mail',
    'PASSWORD': 'Password',
    'REMEMBER_ME': 'Remember me',
    'FORGOT_PASSWORD': 'Forgot your password?',
    'COMPANY_NAME': "Company's name",
    'DESCRIPTION': 'Description',
    'WEB': 'Web site',
    'PHONE': 'Phone',
    'FOO': 'This is a paragraph',
    'AD_EXPIRES': 'Ad expires',
    'CREATE_AD': 'Create ad',
    'AD_CATEGORY': 'Choose category',
    'AD_COMPANY': 'Choose company',
    'AD_DESCRIPTION': 'Description',
    'AD_LOCATION': 'Choose location',
    'AD_DURATION': 'Duration',
    'AD_BUTTON': 'Create ad',
    'CATEGORY': 'Category',
    'LOCATION': 'Location',
    'CONFIRMATION_AD': 'New ad successufully added!',
    'CONFIRMATION_REGISTRATION': 'Confirmation email was sent to you!',
    'LOGIN': 'Login',
    'SAVE_LOGIN': 'Remember me',
    'LOGIN_BUTTON': 'Login',
    'FORGOT_PASS': 'Forgot password?'
    

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
    'HOME': 'Pocetna',
    'COMPANIES': 'Kompanije',
    'CHANGE_PASSWORD': 'Promijeni šifru',
    'AD': 'Oglasi',
    'NEW_AD': 'Novi oglas',
    'UNIVERSITY': 'Univerzitet',
    'FACULTY': 'Fakultet',
    'CV': 'CV',
    'MY_ADS': 'Moji oglasi',
    'DOWNLOAD': 'Preuzmi',
    'BROWSE': 'Browse',
    'SAVE': 'Spasi',
    'MY_ADS2': 'Oglasi na koje sam se prijavio/la...',
    'EMAIL': 'E-mail',
    'PASSWORD': 'Šifra',
    'REMEMBER_ME': 'Zapamti me',
    'FORGOT_PASSWORD': 'Zaboravili ste šifru?',
    'COMPANY_NAME': 'Naziv kompanije',
    'DESCRIPTION': 'Opis',
    'WEB': 'Web stranica',
    'PHONE': 'Telefon',
    'FOO': 'Dies ist ein Absatz',
    'CREATE_AD': 'Kreiraj oglas',
    'AD_CATEGORY': 'Odaberite kategoriju',
    'AD_COMPANY': 'Odaberite kompaniju',
    'AD_DESCRIPTION': 'Opis',
    'AD_LOCATION': 'Odaberite lokaciju',
    'AD_DURATION': 'Trajanje oglasa',
    'AD_BUTTON': 'Kreiraj oglas',
    'CATEGORY': 'Kategorija',
    'LOCATION': 'Lokacija',
    'AD_EXPIRES': 'Oglas ističe',
    'CONFIRMATION_AD': 'Novi oglas je uspjesno unesen!',
    'CONFIRMATION_REGISTRATION': 'Poslali smo Vam e-mail!',
    'LOGIN': 'Prijava',
    'SAVE_LOGIN': 'Zapamti prijavu',
    'LOGIN_BUTTON': 'Prijava',
    'FORGOT_PASS': 'Zaboravili ste šifru?'
  });
 
  $translateProvider.preferredLanguage('en');
}]);