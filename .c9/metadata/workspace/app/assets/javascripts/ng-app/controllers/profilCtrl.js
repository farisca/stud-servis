{"filter":false,"title":"profilCtrl.js","tooltip":"/app/assets/javascripts/ng-app/controllers/profilCtrl.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"insert","lines":["         $scope.data.cv = data.id;",""]},{"start":{"row":27,"column":21},"end":{"row":27,"column":23},"action":"remove","lines":["au"]},{"start":{"row":27,"column":21},"end":{"row":27,"column":36},"action":"insert","lines":["students/update"]},{"start":{"row":36,"column":7},"end":{"row":36,"column":8},"action":"remove","lines":[" "]},{"start":{"row":36,"column":7},"end":{"row":41,"column":0},"action":"insert","lines":["","    $scope.downloadCV = function() {","        alert(\"Kliknuo\");","        $http.get('/students/download_cv?id=' + $scope.data.cv).success(function(data, status, headers, config) {});","    };",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":3,"column":3},"end":{"row":10,"column":7},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1430662375733,"hash":"e6ff2f16fd286bfa83d5d559ce6bea80679da1fe"}