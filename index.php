<!DOCTYPE html>
<html ng-app>
<head>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
    <script src="script.js"></script>
</head>
<body>


<!-- <div ng-app="myApp" ng-controller="myCtrl"> -->
    First Name: <input type="text" ng-model="firstName"><br>
    Last Name: <input type="text" ng-model="lastName"><br><br>
    Full Name: {{firstName + " " + lastName}}
<!-- </div> -->



</body>
</html>
