app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Supercars of 2017';
    $scope.promo = '';
    $scope.products = 
[
{
    name: 'Lamborghini Huracan', 
    color: 'Blaze Red',
    price: '199800'
},
{
    name: 'Bugatti Chiron', 
    color: 'Nero',
    price: '2500000'
},
{
    name: 'Ferrari Enzo', 
    color: 'Crimson',
    price: '659330'
}]

}]);