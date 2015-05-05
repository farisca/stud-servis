angular.module('aplikacija').directive('myAd', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      template: '<div style="position:relative; top:50px; width:400px;background-color:green;">'+
  '  <span> Kategorija: </span> <span class="kategorija"> </span> <br>'+
   ' <span> Kompanija: </span> <span class="kompanija"> </span> <br>'+
    '<span> Opis: </span> <span class="opis"> </span> <br>'+
    '<span> Lokacija: </span> <span class="lokacija"> </span> <br>'+
    '<span> Trajanje oglasa: </span> <span class="trajanje"> </span> <br>'+
'</div>'
  };
});

