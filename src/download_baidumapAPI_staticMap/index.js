const request = require("request");
const fs = require("fs");



    let imgUrl = 'http://api.map.baidu.com/staticimage/v2?'
    + 'ak=jUFFZKg4HWzWhN75EWObjYqpHUIqG8Fl&mcode=666666&center=116.403874,39.934988&width=1000&height=1000&zoom=18&copyright=1&dpiType=ph';
    //其中包含自己的百度api的key：ak=jUFFZKg4HWzWhN75EWObjYqpHUIqG8Fl
    let filename = `test.png`;

    request(imgUrl).pipe(fs.createWriteStream(filename));


//     var baiduMap = require('baidumap');
//     var bdmap = baiduMap.create({'ak':'jUFFZKg4HWzWhN75EWObjYqpHUIqG8Fl'});     
//     // bdmap.centerAndZoom(new baiduMap.Point(116.404, 39.915), 11);
//     let config = [
//         {
//                   "featureType": "road",
//                   "elementType": "labels",
//                   "stylers": {
//                             "color": "#ffffffff",
//                             "visibility": "off"
//                   }
//         },
//         {
//                   "featureType": "manmade",
//                   "elementType": "labels",
//                   "stylers": {
//                             "color": "#ffffffff",
//                             "visibility": "off"
//                   }
//         },
//         {
//                   "featureType": "poilabel",
//                   "elementType": "labels",
//                   "stylers": {
//                             "color": "#ffffffff",
//                             "visibility": "off"
//                   }
//         },
//         {
//                   "featureType": "administrative",
//                   "elementType": "labels",
//                   "stylers": {
//                             "visibility": "off"
//                   }
//         },
//         {
//                   "featureType": "road",
//                   "elementType": "all",
//                   "stylers": {
//                             "color": "#000000ff",
//                             "hue": "#000000",
//                             "lightness": -100
//                   }
//         }
// ]

//     bdmap.setMapStyleV2({
//         styleJson: config
//     });
