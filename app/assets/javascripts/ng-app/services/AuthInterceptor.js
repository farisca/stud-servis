// kreiraj interceptor, koji ce preduhitriti sve http zahtjeve 
angular.module('aplikacija').factory("AuthInterceptor", function($q, $injector, $location) {
  return {
    // na svaki http zahtjev dodaj token u zaglavlje
    request: function(config) {
      var AuthToken = $injector.get("AuthToken");
      var token = AuthToken.get();
      config.headers = config.headers || {};
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }
      return config || $q.when(config);
    },
    // ako je odgovor sa error statusom, preusmjeri na login
    responseError: function(response) {
      var matchesAuthenticatePath = response.config && response.config.url.match(new RegExp('/auth'));
      if (!matchesAuthenticatePath) {
        console.log("nemate pravo pristupa");
        $location.path('/login');
      }
      return $q.reject(response);
    }
  };
});

// aktiviraj interceptor
angular.module('aplikacija').config(function($httpProvider) {
  return $httpProvider.interceptors.push("AuthInterceptor");
});
