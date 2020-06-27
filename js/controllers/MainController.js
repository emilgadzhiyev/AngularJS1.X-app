app.controller('MainController', ['$scope', 'places', function ($scope, places) {
  $scope.center = {
    lat: 40.741934,
    lng: -74.004897,
    zoom: 17
  },

    places.success(function (data) {
      $scope.geodata = data;

      $scope.markers = geodataToMarkers($scope.geodata);
    });


  var geodataToMarkers = function (geodata) {
    var places = geodata.query.geosearch;
    var markers = [];
    for (var i = 0; i < places.length; i++) {
      place = {
        lat: places[i].lat,
        lng: places[i].lon,
        message: getMessage(places[i].title)
      }
      markers.push(place);
    }

    return markers;
  }

  var getMessage = function (title) {
    var url = "http://en.wikipedia.org/wiki/" + title;
    return "<a target='_blank' href='" + url + "'>" + title + "</a>";
  }
}]);