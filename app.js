'use strict';
//create a coffeeApp module
var CoffeeApp = angular.module('CoffeeApp', ['ngRoute']);

//load the default coffee table view
CoffeeApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
		templateUrl: 'Coffees.html',
    	controller: 'coffeeController'
    });
}]);

CoffeeApp.controller('coffeeController', function($scope, $rootScope) {
//for sorting the coffees alphabetically
	$scope.name = 'name';
	$scope.brand = 'brand';
	$scope.country = 'country';
	
	var coffeeData = [        
       {'id': 1,
       'brand': "Average Andy's Coffee",
       'name': 'Regular Coffee',
       'country': 'Denmark',
       'reviews': [
               {'rating': 3,
               'comment': "Could've been crispier",
               'reviewer': "Chris P. Bacon"
               }
       ]
       },
       {'id': 2,
       'brand': "Jimmy's Coffee",
       'name': 'Mocha',
       'country': 'America',
       'reviews': [
       {'rating': 10,
       'comment': 'What everyone should drink in the morning!',
       'reviewer': 'Earl Lee Riser'
       },
       {'rating': 10,
       'comment': 'A genius of everything coffee',
       'reviewer': 'Bob'
       }
       ]
       },
       {'id': 3,
       'brand': "We Did Our Best",
       'name': 'Latte',
       'country': 'France',
       'reviews': [
       {'rating': 1,
       'comment': " a 'latte' yuckiness.",
       'reviewer': 'Tim Burr'
       },
       {'rating': 1,
       'comment': 'Is this even coffee?',
       'reviewer': 'Sue Flay'
       },
        {'rating': 1,
       'comment': 'The grossest thing I have ever had.',
       'reviewer': 'Myles Long'
       },
        {'rating': 5,
       'comment': 'I dont know what the fuss is about, i dont think its too bad!',
       'reviewer': 'Sara Bellum'
       }
       ]
       },
       {'id': 4,
       'brand': "Jimmy's Special Coffee",
       'name': 'Americano',
       'country': 'America',
       'reviews': [
       {'rating': 10,
       'comment': 'If I could rate it higher, I would!',
       'reviewer': 'Justin Case'
       },
       {'rating': 10,
       'comment': 'He does it again!',
       'reviewer': 'Eileen Dover'
       }
       ]
       }];
    //ready to display the coffeeData
	$scope.coffees = coffeeData;
	
	
	//get the review from a certain coffee
	var tempData = '';
	$scope.targetId='id';
	$scope.getReview = function(targetId) {
		for(var i = 0; i < coffeeData.length; i++ ){
			if(coffeeData[i].id == targetId){
				$rootScope.selected = coffeeData[i];
				$rootScope.selectedBrand = coffeeData[i].brand;
				$rootScope.selectedName = coffeeData[i].name;
				$rootScope.reviews = coffeeData[i].reviews;				
			}
		}

    };
});

//load the coffee reviews view
CoffeeApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/:coffeeId', {
        templateUrl: 'Reviews.html',
        controller: 'coffeeController'
    });
}]);

