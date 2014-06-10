/**
 * Created by solidstunna101 on 10/06/14.
 */

/*function signature allows angular to pull the scope object look at it first.
 angular will also call the function
 */
function AppCtrl ($scope) {
    /*adding javascript airport object*/
    $scope.airports = {
        "PDX": {
            "code": "PDX",
            "name": "Portland International Airport",
            "city": "Portland",
            "destinations": [
                "LAX",
                "SFO"
            ]
        },
        "STL": {
            "code": "STL",
            "name": "Lambert-St. Louis International Airport",
            "city": "St. Louis",
            "destinations": [
                "LAX",
                "MKE"
            ]
        },
        "MCI": {
            "code": "MCI",
            "name": "Kansas City International Airport",
            "city": "Kansas City",
            "destinations": [
                "LAX",
                "DFW"
            ]
        }
    };
    /*url for use as partial*/
    $scope.sidebarURL = 'partial/airport.html';
    $scope.currentAirport = null;

    /*function to lookup airport code info inorder to display the record*/
    $scope.setAirport = function (code) {
        $scope.currentAirport = $scope.airports[code];
    };
}
