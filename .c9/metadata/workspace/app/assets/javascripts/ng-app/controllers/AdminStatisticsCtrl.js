{"filter":false,"title":"AdminStatisticsCtrl.js","tooltip":"/app/assets/javascripts/ng-app/controllers/AdminStatisticsCtrl.js","undoManager":{"stack":[[{"start":{"row":211,"column":68},"end":{"row":211,"column":69},"action":"insert","lines":["o"],"id":114}],[{"start":{"row":211,"column":69},"end":{"row":211,"column":70},"action":"insert","lines":["s"],"id":115}],[{"start":{"row":211,"column":70},"end":{"row":211,"column":71},"action":"insert","lines":["m"],"id":116}],[{"start":{"row":211,"column":71},"end":{"row":211,"column":72},"action":"insert","lines":["e"],"id":117}],[{"start":{"row":211,"column":72},"end":{"row":211,"column":73},"action":"insert","lines":["t"],"id":118}],[{"start":{"row":211,"column":73},"end":{"row":211,"column":74},"action":"insert","lines":["i"],"id":119}],[{"start":{"row":211,"column":74},"end":{"row":211,"column":75},"action":"insert","lines":["c"],"id":120}],[{"start":{"row":211,"column":75},"end":{"row":211,"column":76},"action":"insert","lines":["s"],"id":121}],[{"start":{"row":211,"column":80},"end":{"row":211,"column":84},"action":"remove","lines":["July"],"id":122},{"start":{"row":211,"column":80},"end":{"row":211,"column":81},"action":"insert","lines":["C"]}],[{"start":{"row":211,"column":81},"end":{"row":211,"column":82},"action":"insert","lines":["o"],"id":123}],[{"start":{"row":211,"column":82},"end":{"row":211,"column":83},"action":"insert","lines":["n"],"id":124}],[{"start":{"row":211,"column":83},"end":{"row":211,"column":84},"action":"insert","lines":["s"],"id":125}],[{"start":{"row":211,"column":84},"end":{"row":211,"column":85},"action":"insert","lines":["u"],"id":126}],[{"start":{"row":211,"column":85},"end":{"row":211,"column":86},"action":"insert","lines":["l"],"id":127}],[{"start":{"row":211,"column":86},"end":{"row":211,"column":87},"action":"insert","lines":["t"],"id":128}],[{"start":{"row":211,"column":87},"end":{"row":211,"column":88},"action":"insert","lines":["i"],"id":129}],[{"start":{"row":211,"column":88},"end":{"row":211,"column":89},"action":"insert","lines":["n"],"id":130}],[{"start":{"row":211,"column":89},"end":{"row":211,"column":90},"action":"insert","lines":["g"],"id":131}],[{"start":{"row":219,"column":19},"end":{"row":219,"column":21},"action":"remove","lines":["65"],"id":132},{"start":{"row":219,"column":19},"end":{"row":219,"column":20},"action":"insert","lines":["4"]}],[{"start":{"row":219,"column":22},"end":{"row":219,"column":24},"action":"remove","lines":["59"],"id":133},{"start":{"row":219,"column":22},"end":{"row":219,"column":23},"action":"insert","lines":["1"]}],[{"start":{"row":219,"column":23},"end":{"row":219,"column":24},"action":"insert","lines":["5"],"id":134}],[{"start":{"row":219,"column":26},"end":{"row":219,"column":28},"action":"remove","lines":["80"],"id":135},{"start":{"row":219,"column":26},"end":{"row":219,"column":27},"action":"insert","lines":["3"]}],[{"start":{"row":219,"column":27},"end":{"row":219,"column":28},"action":"insert","lines":["4"],"id":136}],[{"start":{"row":219,"column":30},"end":{"row":219,"column":32},"action":"remove","lines":["81"],"id":137},{"start":{"row":219,"column":30},"end":{"row":219,"column":31},"action":"insert","lines":["5"]}],[{"start":{"row":219,"column":31},"end":{"row":219,"column":32},"action":"insert","lines":["4"],"id":138}],[{"start":{"row":219,"column":19},"end":{"row":219,"column":20},"action":"remove","lines":["4"],"id":139},{"start":{"row":219,"column":19},"end":{"row":219,"column":20},"action":"insert","lines":["3"]}],[{"start":{"row":219,"column":20},"end":{"row":219,"column":21},"action":"insert","lines":["2"],"id":140}],[{"start":{"row":219,"column":31},"end":{"row":219,"column":32},"action":"remove","lines":["5"],"id":141}],[{"start":{"row":219,"column":42},"end":{"row":219,"column":44},"action":"remove","lines":["40"],"id":142},{"start":{"row":219,"column":42},"end":{"row":219,"column":43},"action":"insert","lines":["1"]}],[{"start":{"row":219,"column":43},"end":{"row":219,"column":44},"action":"insert","lines":["1"],"id":143}],[{"start":{"row":219,"column":38},"end":{"row":219,"column":40},"action":"remove","lines":["55"],"id":144},{"start":{"row":219,"column":38},"end":{"row":219,"column":39},"action":"insert","lines":["4"]}],[{"start":{"row":219,"column":39},"end":{"row":219,"column":40},"action":"insert","lines":["3"],"id":145}],[{"start":{"row":219,"column":39},"end":{"row":219,"column":40},"action":"remove","lines":["3"],"id":146}],[{"start":{"row":219,"column":38},"end":{"row":219,"column":39},"action":"remove","lines":["4"],"id":147}],[{"start":{"row":219,"column":38},"end":{"row":219,"column":39},"action":"insert","lines":["3"],"id":148}],[{"start":{"row":219,"column":39},"end":{"row":219,"column":40},"action":"insert","lines":["3"],"id":149}],[{"start":{"row":219,"column":34},"end":{"row":219,"column":36},"action":"remove","lines":["56"],"id":150},{"start":{"row":219,"column":34},"end":{"row":219,"column":35},"action":"insert","lines":["1"]}],[{"start":{"row":219,"column":35},"end":{"row":219,"column":36},"action":"insert","lines":["6"],"id":151}],[{"start":{"row":167,"column":0},"end":{"row":204,"column":13},"action":"remove","lines":["","","","        //poziv servisa koji na osnovu proslijedjene lokacije vraca broj korisnika","        var result;","        var location_id = $scope.ads_locations.location_id;","","        result = $http({ url: '/jobs/get_jobs_at_location', ","            method: \"GET\",","            params: {location_id: location_id}","        });","","        result.success(function(data, status, headers, config) {","            var numberOfAds = data.number;","            var labels = [];","            alert(\"Broj oglasa: \"+data.number);","","            labels.push(\"1\");","            labels.push(\"2\");","            var adsLocationData = {","                labels: labels,","                datasets: [","                    {","                        label: \"Ads on locaction\",","                        fillColor: \"rgba(220,220,220,0.2)\",","                        strokeColor: \"rgba(220,220,220,1)\",","                        pointColor: \"rgba(220,220,220,1)\",","                        pointStrokeColor: \"#fff\",","                        pointHighlightFill: \"#fff\",","                        pointHighlightStroke: \"rgba(220,220,220,1)\",","                        data: numberOfAds","                    }","                ]","            };","            new Chart(adsLocationChart).Line(adsLocationData);","","","        });  "],"id":152}],[{"start":{"row":167,"column":0},"end":{"row":167,"column":36},"action":"insert","lines":["new Chart(ctx).Radar(data, options);"],"id":153}],[{"start":{"row":166,"column":41},"end":{"row":167,"column":0},"action":"insert","lines":["",""],"id":154},{"start":{"row":167,"column":0},"end":{"row":167,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":168,"column":10},"end":{"row":168,"column":13},"action":"remove","lines":["ctx"],"id":155},{"start":{"row":168,"column":10},"end":{"row":168,"column":26},"action":"insert","lines":["adsLocationChart"]}],[{"start":{"row":166,"column":41},"end":{"row":167,"column":0},"action":"insert","lines":["",""],"id":156},{"start":{"row":167,"column":0},"end":{"row":167,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":167,"column":8},"end":{"row":191,"column":2},"action":"insert","lines":["var data = {","    labels: [\"Eating\", \"Drinking\", \"Sleeping\", \"Designing\", \"Coding\", \"Cycling\", \"Running\"],","    datasets: [","        {","            label: \"My First dataset\",","            fillColor: \"rgba(220,220,220,0.2)\",","            strokeColor: \"rgba(220,220,220,1)\",","            pointColor: \"rgba(220,220,220,1)\",","            pointStrokeColor: \"#fff\",","            pointHighlightFill: \"#fff\",","            pointHighlightStroke: \"rgba(220,220,220,1)\",","            data: [65, 59, 90, 81, 56, 55, 40]","        },","        {","            label: \"My Second dataset\",","            fillColor: \"rgba(151,187,205,0.2)\",","            strokeColor: \"rgba(151,187,205,1)\",","            pointColor: \"rgba(151,187,205,1)\",","            pointStrokeColor: \"#fff\",","            pointHighlightFill: \"#fff\",","            pointHighlightStroke: \"rgba(151,187,205,1)\",","            data: [28, 48, 40, 19, 96, 27, 100]","        }","    ]","};"],"id":157}],[{"start":{"row":191,"column":2},"end":{"row":192,"column":0},"action":"insert","lines":["",""],"id":158}],[{"start":{"row":192,"column":0},"end":{"row":192,"column":1},"action":"insert","lines":["v"],"id":159}],[{"start":{"row":192,"column":1},"end":{"row":192,"column":2},"action":"insert","lines":["a"],"id":160}],[{"start":{"row":192,"column":2},"end":{"row":192,"column":3},"action":"insert","lines":["r"],"id":161}],[{"start":{"row":192,"column":3},"end":{"row":193,"column":0},"action":"insert","lines":["",""],"id":162}],[{"start":{"row":192,"column":3},"end":{"row":193,"column":0},"action":"remove","lines":["",""],"id":163}],[{"start":{"row":192,"column":3},"end":{"row":192,"column":4},"action":"insert","lines":[" "],"id":164}],[{"start":{"row":192,"column":4},"end":{"row":192,"column":5},"action":"insert","lines":["o"],"id":165}],[{"start":{"row":192,"column":5},"end":{"row":192,"column":6},"action":"insert","lines":["p"],"id":166}],[{"start":{"row":192,"column":4},"end":{"row":192,"column":6},"action":"remove","lines":["op"],"id":167},{"start":{"row":192,"column":4},"end":{"row":192,"column":11},"action":"insert","lines":["options"]}],[{"start":{"row":192,"column":11},"end":{"row":192,"column":12},"action":"insert","lines":["="],"id":168}],[{"start":{"row":192,"column":12},"end":{"row":192,"column":13},"action":"insert","lines":["{"],"id":169}],[{"start":{"row":192,"column":13},"end":{"row":194,"column":1},"action":"insert","lines":["","    ","}"],"id":170}],[{"start":{"row":193,"column":4},"end":{"row":248,"column":1},"action":"insert","lines":["{","    //Boolean - Whether to show lines for each scale point","    scaleShowLine : true,","","    //Boolean - Whether we show the angle lines out of the radar","    angleShowLineOut : true,","","    //Boolean - Whether to show labels on the scale","    scaleShowLabels : false,","","    // Boolean - Whether the scale should begin at zero","    scaleBeginAtZero : true,","","    //String - Colour of the angle line","    angleLineColor : \"rgba(0,0,0,.1)\",","","    //Number - Pixel width of the angle line","    angleLineWidth : 1,","","    //String - Point label font declaration","    pointLabelFontFamily : \"'Arial'\",","","    //String - Point label font weight","    pointLabelFontStyle : \"normal\",","","    //Number - Point label font size in pixels","    pointLabelFontSize : 10,","","    //String - Point label font colour","    pointLabelFontColor : \"#666\",","","    //Boolean - Whether to show a dot for each point","    pointDot : true,","","    //Number - Radius of each point dot in pixels","    pointDotRadius : 3,","","    //Number - Pixel width of point dot stroke","    pointDotStrokeWidth : 1,","","    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point","    pointHitDetectionRadius : 20,","","    //Boolean - Whether to show a stroke for datasets","    datasetStroke : true,","","    //Number - Pixel width of dataset stroke","    datasetStrokeWidth : 2,","","    //Boolean - Whether to fill the dataset with a colour","    datasetFill : true,","","    //String - A legend template","    legendTemplate : \"<ul class=\\\"<%=name.toLowerCase()%>-legend\\\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\\\"background-color:<%=datasets[i].strokeColor%>\\\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>\"","","}"],"id":171}],[{"start":{"row":249,"column":0},"end":{"row":249,"column":1},"action":"remove","lines":["}"],"id":172}],[{"start":{"row":192,"column":12},"end":{"row":192,"column":13},"action":"remove","lines":["{"],"id":173}],[{"start":{"row":168,"column":14},"end":{"row":168,"column":20},"action":"remove","lines":["Eating"],"id":174},{"start":{"row":168,"column":14},"end":{"row":168,"column":15},"action":"insert","lines":["M"]}],[{"start":{"row":168,"column":15},"end":{"row":168,"column":16},"action":"insert","lines":["o"],"id":175}],[{"start":{"row":168,"column":16},"end":{"row":168,"column":17},"action":"insert","lines":["s"],"id":176}],[{"start":{"row":168,"column":17},"end":{"row":168,"column":18},"action":"insert","lines":["a"],"id":177}],[{"start":{"row":168,"column":17},"end":{"row":168,"column":18},"action":"remove","lines":["a"],"id":178}],[{"start":{"row":168,"column":17},"end":{"row":168,"column":18},"action":"insert","lines":["t"],"id":179}],[{"start":{"row":168,"column":18},"end":{"row":168,"column":19},"action":"insert","lines":["a"],"id":180}],[{"start":{"row":168,"column":19},"end":{"row":168,"column":20},"action":"insert","lines":["r"],"id":181}],[{"start":{"row":168,"column":24},"end":{"row":168,"column":32},"action":"remove","lines":["Drinking"],"id":182},{"start":{"row":168,"column":24},"end":{"row":168,"column":25},"action":"insert","lines":["S"]}],[{"start":{"row":168,"column":25},"end":{"row":168,"column":26},"action":"insert","lines":["a"],"id":183}],[{"start":{"row":168,"column":26},"end":{"row":168,"column":27},"action":"insert","lines":["r"],"id":184}],[{"start":{"row":168,"column":27},"end":{"row":168,"column":28},"action":"insert","lines":["a"],"id":185}],[{"start":{"row":168,"column":28},"end":{"row":168,"column":29},"action":"insert","lines":["j"],"id":186}],[{"start":{"row":168,"column":29},"end":{"row":168,"column":30},"action":"insert","lines":["e"],"id":187}],[{"start":{"row":168,"column":30},"end":{"row":168,"column":31},"action":"insert","lines":["v"],"id":188}],[{"start":{"row":168,"column":31},"end":{"row":168,"column":32},"action":"insert","lines":["o"],"id":189}],[{"start":{"row":168,"column":36},"end":{"row":168,"column":44},"action":"remove","lines":["Sleeping"],"id":190},{"start":{"row":168,"column":36},"end":{"row":168,"column":37},"action":"insert","lines":["Z"]}],[{"start":{"row":168,"column":37},"end":{"row":168,"column":38},"action":"insert","lines":["e"],"id":191}],[{"start":{"row":168,"column":38},"end":{"row":168,"column":39},"action":"insert","lines":["n"],"id":192}],[{"start":{"row":168,"column":39},"end":{"row":168,"column":40},"action":"insert","lines":["i"],"id":193}],[{"start":{"row":168,"column":40},"end":{"row":168,"column":41},"action":"insert","lines":["c"],"id":194}],[{"start":{"row":168,"column":41},"end":{"row":168,"column":42},"action":"insert","lines":["a"],"id":195}],[{"start":{"row":168,"column":46},"end":{"row":168,"column":55},"action":"remove","lines":["Designing"],"id":196},{"start":{"row":168,"column":46},"end":{"row":168,"column":47},"action":"insert","lines":["T"]}],[{"start":{"row":168,"column":47},"end":{"row":168,"column":48},"action":"insert","lines":["u"],"id":197}],[{"start":{"row":168,"column":48},"end":{"row":168,"column":49},"action":"insert","lines":["z"],"id":198}],[{"start":{"row":168,"column":49},"end":{"row":168,"column":50},"action":"insert","lines":["l"],"id":199}],[{"start":{"row":168,"column":50},"end":{"row":168,"column":51},"action":"insert","lines":["a"],"id":200}],[{"start":{"row":168,"column":55},"end":{"row":168,"column":61},"action":"remove","lines":["Coding"],"id":201},{"start":{"row":168,"column":55},"end":{"row":168,"column":56},"action":"insert","lines":["N"]}],[{"start":{"row":168,"column":56},"end":{"row":168,"column":57},"action":"insert","lines":["e"],"id":202}],[{"start":{"row":168,"column":57},"end":{"row":168,"column":58},"action":"insert","lines":["u"],"id":203}],[{"start":{"row":168,"column":58},"end":{"row":168,"column":59},"action":"insert","lines":["m"],"id":204}],[{"start":{"row":168,"column":63},"end":{"row":168,"column":70},"action":"remove","lines":["Cycling"],"id":205},{"start":{"row":168,"column":63},"end":{"row":168,"column":64},"action":"insert","lines":["B"]}],[{"start":{"row":168,"column":64},"end":{"row":168,"column":65},"action":"insert","lines":["i"],"id":206}],[{"start":{"row":168,"column":65},"end":{"row":168,"column":66},"action":"insert","lines":["h"],"id":207}],[{"start":{"row":168,"column":66},"end":{"row":168,"column":67},"action":"insert","lines":["a"],"id":208}],[{"start":{"row":168,"column":67},"end":{"row":168,"column":68},"action":"insert","lines":["c"],"id":209}],[{"start":{"row":168,"column":72},"end":{"row":168,"column":79},"action":"remove","lines":["Running"],"id":210},{"start":{"row":168,"column":72},"end":{"row":168,"column":73},"action":"insert","lines":["J"]}],[{"start":{"row":168,"column":73},"end":{"row":168,"column":74},"action":"insert","lines":["a"],"id":211}],[{"start":{"row":168,"column":74},"end":{"row":168,"column":75},"action":"insert","lines":["j"],"id":212}],[{"start":{"row":168,"column":75},"end":{"row":168,"column":76},"action":"insert","lines":["c"],"id":213}],[{"start":{"row":168,"column":76},"end":{"row":168,"column":77},"action":"insert","lines":["e"],"id":214}]],"mark":100,"position":100},"ace":{"folds":[],"scrolltop":2151.8634400367737,"scrollleft":0,"selection":{"start":{"row":178,"column":20},"end":{"row":178,"column":20},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":156,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1432077677624,"hash":"d231b86025d620a130577f71a013a40c6bffab6b"}