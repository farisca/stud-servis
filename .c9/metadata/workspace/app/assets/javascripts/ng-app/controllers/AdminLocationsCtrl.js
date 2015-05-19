{"filter":false,"title":"AdminLocationsCtrl.js","tooltip":"/app/assets/javascripts/ng-app/controllers/AdminLocationsCtrl.js","undoManager":{"stack":[[{"start":{"row":0,"column":21},"end":{"row":0,"column":31},"action":"remove","lines":["Statistics"],"id":2},{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"insert","lines":["L"]}],[{"start":{"row":0,"column":22},"end":{"row":0,"column":23},"action":"insert","lines":["o"],"id":3}],[{"start":{"row":0,"column":23},"end":{"row":0,"column":24},"action":"insert","lines":["c"],"id":4}],[{"start":{"row":0,"column":24},"end":{"row":0,"column":25},"action":"insert","lines":["a"],"id":5}],[{"start":{"row":0,"column":25},"end":{"row":0,"column":26},"action":"insert","lines":["t"],"id":6}],[{"start":{"row":0,"column":26},"end":{"row":0,"column":27},"action":"insert","lines":["i"],"id":7}],[{"start":{"row":0,"column":27},"end":{"row":0,"column":28},"action":"insert","lines":["o"],"id":8}],[{"start":{"row":0,"column":28},"end":{"row":0,"column":29},"action":"insert","lines":["n"],"id":9}],[{"start":{"row":0,"column":29},"end":{"row":0,"column":30},"action":"insert","lines":["s"],"id":10}],[{"start":{"row":0,"column":16},"end":{"row":0,"column":34},"action":"remove","lines":["AdminLocationsCtrl"],"id":11},{"start":{"row":0,"column":16},"end":{"row":0,"column":34},"action":"insert","lines":["AdminLocationsCtrl"]}],[{"start":{"row":2,"column":0},"end":{"row":83,"column":5},"action":"remove","lines":["\tvar signedUpUsersChart = document.getElementById(\"signedUpUsersChart\").getContext(\"2d\");","","    // Neka pocetna inicijalizacija","    if ($translate.use() === 'en') {","        $scope.months = {\"01\" : \"January\", \"02\" : \"February\", \"03\" : \"March\", \"04\": \"April\", \"05\": \"May\", \"06\": \"June\", \"07\": \"July\", \"08\": \"August\", \"09\": \"September\", \"10\": \"October\", \"11\": \"November\", \"12\": \"December\"};","    }","    else {","        console.log(translate.use());","        $scope.months = {\"01\" : \"Januar\", \"02\" : \"Februar\", \"03\" : \"Mart\", \"04\": \"April\", \"05\": \"May\", \"06\": \"Juni\", \"07\": \"Juli\", \"08\": \"August\", \"09\": \"Septembar\", \"10\": \"Oktobar\", \"11\": \"Novembar\", \"12\": \"Decembar\"};","    }","    $scope.signedUpUsers = {};","    $scope.signedUpUsers.from_m = \"JANUARY\";","    $scope.alertSignedUpUsers = {};","    $scope.alertSignedUpUsers.period = {};","    $scope.alertSignedUpUsers.period.visible = false;","    $scope.alertSignedUpUsers.number = {};","    $scope.alertSignedUpUsers.number.visible = false;","","    // Provjeri da li je pocetni datum prije krajnjeg","    $scope.checkPeriod = function(from_m, from_y, to_m, to_y) {","        if (from_y > to_y || (from_y == to_y && from_m > to_m)) {","            $scope.alertSignedUpUsers.period.visible = true;","            return false;","        }","        return true;","    }","","    // Provjerava da li je unesena godina broj","    $scope.checkYear = function(year) {","        if (isNaN(parseFloat(year)) || !/^\\d{4}$/.test(year)) {","            $scope.alertSignedUpUsers.number.visible = true;","            return false;","        }","        return true;","    }","","    // Funkcija koja poziva servis i crta broj registriranih korisnika po mjesecima","    $scope.drawSignedUpUsers = function() {","        $scope.alertSignedUpUsers.period.visible = false;","        $scope.alertSignedUpUsers.number.visible = false;","","        // Ocitaj od kad do kad je potrebno prikazati podatke","        var from_m = $scope.signedUpUsers.from_m;","        var from_y = $scope.signedUpUsers.from_y;","        var to_m = $scope.signedUpUsers.to_m;","        var to_y = $scope.signedUpUsers.to_y;","","        if (!$scope.checkYear(from_y) || !$scope.checkYear(to_y)) return;","        if (!$scope.checkPeriod(from_m, from_y, to_m, to_y)) return;","","        // Pozovi servis kojem se prosljedjuju datumi i koji vraca broj registriranih korisnika","        $http.get('/users/get_signedupusers?from_y=' + from_y + '&from_m='+from_m+'&to_y='+to_y+'&to_m='+to_m).success(function(data, status, headers, config) {","            var serviceResponse = data;","            var labels = [];","            // Kreiranje labela u grafiku -> svi mjeseci izmedju zadanih u formatu M - YYYY ","            for(year = from_y; year <= to_y; year++) {","                for (month = (year == from_y ? from_m : 1); month <= (year == to_y ? to_m : 12); month++) {","                    labels.push(month + \" - \" + year);","                }","            }","","            console.log(\"Labele: \" + labels);","            console.log(\"Podaci: \" + serviceResponse);","","            var signedupUsersData = {","                labels: labels,","                datasets: [","                    {","                        label: \"Sign ups\",","                        fillColor: \"rgba(220,220,220,0.2)\",","                        strokeColor: \"rgba(220,220,220,1)\",","                        pointColor: \"rgba(220,220,220,1)\",","                        pointStrokeColor: \"#fff\",","                        pointHighlightFill: \"#fff\",","                        pointHighlightStroke: \"rgba(220,220,220,1)\",","                        data: serviceResponse","                    }","                ]","            };","            new Chart(signedUpUsersChart).Line(signedupUsersData);","        });    ","    }"],"id":12}],[{"start":{"row":1,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["    // Referenciranje chartova","",""],"id":13}]],"mark":11,"position":11},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":1,"column":0},"end":{"row":1,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1432063397670,"hash":"d878b4747cce248fadaf0e9e4a7b692ba09c194f"}