var map;
var radio100 = new google.maps.LatLng(55.182063, 61.389415);
var MY_MAPTYPE_ID = 'mystyle';
function initializeMap() {
var stylez =  [
    {
        "featureType": "landscape",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "gamma": 0.4
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 51
            },
            {
                "gamma": 0.4
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 30
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 40
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": -00
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -00
            },
            {
                "saturation": -97
            }
        ]
    }
];
  var mapOptions = {
    zoom: 15,
    center: radio100,
    mapTypeControlOptions: {
       mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };
  map = new google.maps.Map(document.getElementById("contacts__googleMap"),
      mapOptions);
  var styledMapOptions = {
    name: "Черно-белая Карта"
  };
  var jayzMapType = new google.maps.StyledMapType(stylez, styledMapOptions);
  map.mapTypes.set(MY_MAPTYPE_ID, jayzMapType);

marker = new google.maps.Marker({
    map:map,
    position: new google.maps.LatLng(55.178656, 61.393351),
    icon: 'images/contacts_googleMap_logo.png'
  });

}
