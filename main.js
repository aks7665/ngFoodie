// $('#user-email').on('input',function() {
//         var email = $('#user-email').val()
//         var message = 'Welcome Back, ' + email;
//         $('.welcome-message').text(message);
//     });

var foodieApp = angular.module('foodieApp',['ngRoute']); // initialize our angular app // ngRoute is module to apply routing to our website here we are telling angular that when you areinitializing then also use module(ngRoute)

foodieApp.config(function ($routeProvider) { //.config() is a function that allows us to set-up our app
	// $routeProvider is an object defined in ngRoute that set-up routes
	$routeProvider
	.when('/',{ //$routeProvider.when() here when is the function of $routeProvider object  // here we are passing 2 parameters and 1st parameter is the URL of the route and '/' means the root route
		// and 2nd parameter is object that contains two values
		templateUrl: 'pages/login.html', //The place where we have the view saved
		controller: 'loginController' // The controller to use with that view
	})
	.when('/home',{ // $routeProvider.when().when()
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', { //here :id is just like variable that accepts value that are enter in url
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
	.when('/shopping', { 
		templateUrl: 'pages/shopping.html',
		controller: 'shoppingController'
	})
})

foodieApp.controller('mainController',function($scope) { // creating a contoller , passing two arguments first is name of controller (mainController) and
	// second is function we want the controller to do and here $scope is the Model
	$scope.restaurants = [{
	name: 'Tapri Central',
	address: 'B4 E, 3rd Floor, Surana Jewellers, Opposite Central Park, C Scheme, Jaipur',
	location: 'C Scheme',
	category: 'CAFÉ,QUICK BITES',
	vote: '4.7',
	cuisines: 'Cafe, Fast Food, Street Food',
	cost: '750 ',
	hours: '7:30 AM to 9:45 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/101212_RESTAURANT_b946e39f2eab7b1aedf4673c6baf7cf9.jpg',
	id: 1,
	bestDish: {
		name: 'Paneer Sandwich',
		image: 'http://4.bp.blogspot.com/-XwBm25rKXRI/UJBVLoFXvyI/AAAAAAAACvw/Rte2gtA59vE/s1600/Yummy+cheese+sandwich.jpg'
	},
	phno: '0141 2360245'
	},
	{
	name: 'F Bar & Lounge- Golden Tulip',
	address: 'Golden Tulip, Near GPO, MI Road, Jaipur',
	location: 'MI Road',
	category: 'LOUNGE',
	vote: '4.8',
	cuisines: 'North Indian, Chinese, Continental',
	cost: '2800',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/5/102855/50d312c8cf54ef122e52ac13da34bdae.jpg?fit=around%7C160%3A160&crop=160%3A160%3B%2A%2C%2A',
	id: 2,
	phno: '0141 3391459'
	},
	{
	name: 'Nibs Cafe',
	address: 'B-16 Durgadas Colony, Next to MGF Mall, Bhawani Singh Road, C Scheme, Jaipur',
	location: 'C Scheme ',
	category: 'CAFÉ',
	vote: '4.5',
	cuisines: 'Cafe, Italian, Continental',
	cost: '1300',
	hours: '11 AM to 10:45 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/102813_RESTAURANT_a545a54b52dd5ebb04582c05cbab1ad6.jpg',
	id: 3,
	phno: '0141 5109696'
	},
	{
	name: 'RJ 14',
	address: '132,133,151, Ajmera Garden, Main DCM Road, Opposite IndusInd Bank, Ajmer Road, Ajmer Highway, Jaipur',
	location: 'Ajmer Highway',
	category: 'CASUAL DINING',
	vote: '4.0',
	cuisines: 'North Indian, South Indian',
	cost: '800',
	hours: '12 Noon to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/103172_RESTAURANT_39535aa52eb93d5e42dd6ea2ea71b06f.jpg',
	id: 4,
	phno: '0141 3391485'
	},
	{
	name: 'Kanha',
	address: 'Queens Road, Vaishali Nagar, Jaipur',
	location: 'Vaishali Nagar',
	category: 'SWEET SHOP,QUICK BITES',
	vote: '3.7',
	cuisines: 'Mithai, Bakery, North Indian, South Indian, Chinese',
	cost: '500',
	hours: '8 AM to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/100148_CHAIN_3fbbc571307991c6f2e44d46c5ffd292.jpg',
	id: 5,
	phno: '0141 40309380'
	},
	{
	name: 'Colorbar - Radisson Blu',
	address: 'Colorbar - Radisson Blu, Tonk Road, Jaipur',
	location: 'Tonk Road',
	category: 'BAR',
	vote: '4.0',
	cuisines: 'Finger Food',
	cost: '3000',
	hours: '7 PM to 12:30 AM (Mon-Thu),7 PM to 1:30 AM (Fri-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/102171_RESTAURANT_2f03518bb3c066e171a7a427b695a699.jpg',
	id: 6,
	phno: '0141 3391487'
	},
	{
	name: 'WTF',
	address: '301, Man Upasna Mall, Chomu House, C Scheme, Jaipur',
	location: 'C Scheme',
	category: 'LOUNGE',
	vote: '4.1',
	cuisines: 'Continental, Italian, North Indian, Lebanese, Thai',
	cost: '1500',
	hours: '11 AM to 1:30 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/103065_RESTAURANT_604042fb34b3f739b50e639e557e0905.jpeg',
	id: 7,
	bestDish: {
		name: 'Nachos',
		image: 'http://img.taste.com.au/O_5e5BxC/taste/2016/11/tray-baked-nachos-102903-1.jpeg'
	},
	phno: '0141 3391485'
	},
	{
	name: 'Burger Farm',
	address: '19, Opp. Jaipur Electronic Market, JDA Market, Gopalpura, Mansarovar, Jaipur',
	location: 'Mansarovar',
	category: 'QUICK BITES',
	vote: '3.2',
	cuisines: 'Burger',
	cost: '350',
	hours: '10 AM to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/102003_CHAIN_c7d423e802fc682c8d032d8d9dcda82d.png',
	id: 8,
	phno: '+91 7300060006'
	},
	{
	name: 'Dana Pani',
	address: 'B 4, Shubh Laxmi Tower, Central Spine, Vidhyadhar Nagar, Jaipur',
	location: 'Vidhyadhar Nagar',
	category: 'CASUAL DINING',
	vote: '3.0',
	cuisines: 'North Indian, South Indian, Chinese',
	cost: '600',
	hours: '11 AM to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/100093_RESTAURANT_2718bde28aedbeefe309a85df491986d.jpg',
	id: 9,
	phno: '0141 6459999'
	},
	{
	name: 'Pinxx - Regenta Cental',
	address: '91-92, Regenta Central, Jhotwara, Jaipur',
	location: 'Jhotwara',
	category: 'FINE DINING',
	vote: '3.9',
	cuisines: 'Italian, Chinese, North Indian, South Indian',
	cost: '1500',
	hours: '7 AM to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/102888_RESTAURANT_41fca5802609b2e05ff53c06c3eaa0fd.jpg',
	id: 10,
	phno: '0141 7165100'
	}]
})

foodieApp.controller('loginController',function($scope,$location) { // creating controller for login page // The $location object helps us modify the URL of the webpage automatically
	$scope.goToHome = function() { // annding fuction with $scope model
		$location.url('home') // setting url home so that on click user will tranfer to home page
	}
})

foodieApp.controller('restaurantController',function($scope,$routeParams,$http) { // creating controller for resturants page 
	// $routeParams object is part og ngRoute module , it give us access to all the route parameters as property of object
	$scope.restaurantId = $routeParams.id; // $routeParams.id = the value we specified in the URL
	var restaurants = [{
	name: 'Tapri Central',
	address: 'B4 E, 3rd Floor, Surana Jewellers, Opposite Central Park, C Scheme, Jaipur',
	location: 'C Scheme',
	category: 'CAFÉ,QUICK BITES',
	vote: '4.7',
	cuisines: 'Cafe, Fast Food, Street Food',
	cost: '750 ',
	hours: '7:30 AM to 9:45 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/101212_RESTAURANT_b946e39f2eab7b1aedf4673c6baf7cf9.jpg',
	id: 1,
	bestDish: {
		name: 'Paneer Sandwich',
		image: 'http://4.bp.blogspot.com/-XwBm25rKXRI/UJBVLoFXvyI/AAAAAAAACvw/Rte2gtA59vE/s1600/Yummy+cheese+sandwich.jpg'
	},
	phno: '0141 2360245'
	},
	{
	name: 'F Bar & Lounge- Golden Tulip',
	address: 'Golden Tulip, Near GPO, MI Road, Jaipur',
	location: 'MI Road',
	category: 'LOUNGE',
	vote: '4.8',
	cuisines: 'North Indian, Chinese, Continental',
	cost: '2800',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/5/102855/50d312c8cf54ef122e52ac13da34bdae.jpg?fit=around%7C160%3A160&crop=160%3A160%3B%2A%2C%2A',
	id: 2,
	phno: '0141 3391459'
	},
	{
	name: 'Nibs Cafe',
	address: 'B-16 Durgadas Colony, Next to MGF Mall, Bhawani Singh Road, C Scheme, Jaipur',
	location: 'C Scheme ',
	category: 'CAFÉ',
	vote: '4.5',
	cuisines: 'Cafe, Italian, Continental',
	cost: '1300',
	hours: '11 AM to 10:45 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/102813_RESTAURANT_a545a54b52dd5ebb04582c05cbab1ad6.jpg',
	id: 3,
	phno: '0141 5109696'
	},
	{
	name: 'RJ 14',
	address: '132,133,151, Ajmera Garden, Main DCM Road, Opposite IndusInd Bank, Ajmer Road, Ajmer Highway, Jaipur',
	location: 'Ajmer Highway',
	category: 'CASUAL DINING',
	vote: '4.0',
	cuisines: 'North Indian, South Indian',
	cost: '800',
	hours: '12 Noon to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/103172_RESTAURANT_39535aa52eb93d5e42dd6ea2ea71b06f.jpg',
	id: 4,
	phno: '0141 3391485'
	},
	{
	name: 'Kanha',
	address: 'Queens Road, Vaishali Nagar, Jaipur',
	location: 'Vaishali Nagar',
	category: 'SWEET SHOP,QUICK BITES',
	vote: '3.7',
	cuisines: 'Mithai, Bakery, North Indian, South Indian, Chinese',
	cost: '500',
	hours: '8 AM to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/100148_CHAIN_3fbbc571307991c6f2e44d46c5ffd292.jpg',
	id: 5,
	phno: '0141 40309380'
	},
	{
	name: 'Colorbar - Radisson Blu',
	address: 'Colorbar - Radisson Blu, Tonk Road, Jaipur',
	location: 'Tonk Road',
	category: 'BAR',
	vote: '4.0',
	cuisines: 'Finger Food',
	cost: '3000',
	hours: '7 PM to 12:30 AM (Mon-Thu),7 PM to 1:30 AM (Fri-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/102171_RESTAURANT_2f03518bb3c066e171a7a427b695a699.jpg',
	id: 6,
	phno: '0141 3391487'
	},
	{
	name: 'WTF',
	address: '301, Man Upasna Mall, Chomu House, C Scheme, Jaipur',
	location: 'C Scheme',
	category: 'LOUNGE',
	vote: '4.1',
	cuisines: 'Continental, Italian, North Indian, Lebanese, Thai',
	cost: '1500',
	hours: '11 AM to 1:30 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/103065_RESTAURANT_604042fb34b3f739b50e639e557e0905.jpeg',
	bestDish: {
		name: 'Nachos',
		image: 'http://img.taste.com.au/O_5e5BxC/taste/2016/11/tray-baked-nachos-102903-1.jpeg'
	},
	id: 7,
	phno: '0141 3391485'
	},
	{
	name: 'Burger Farm',
	address: '19, Opp. Jaipur Electronic Market, JDA Market, Gopalpura, Mansarovar, Jaipur',
	location: 'Mansarovar',
	category: 'QUICK BITES',
	vote: '3.2',
	cuisines: 'Burger',
	cost: '350',
	hours: '10 AM to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/102003_CHAIN_c7d423e802fc682c8d032d8d9dcda82d.png',
	id: 8,
	phno: '+91 7300060006'
	},
	{
	name: 'Dana Pani',
	address: 'B 4, Shubh Laxmi Tower, Central Spine, Vidhyadhar Nagar, Jaipur',
	location: 'Vidhyadhar Nagar',
	category: 'CASUAL DINING',
	vote: '3.0',
	cuisines: 'North Indian, South Indian, Chinese',
	cost: '600',
	hours: '11 AM to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/100093_RESTAURANT_2718bde28aedbeefe309a85df491986d.jpg',
	id: 9,
	phno: '0141 6459999'
	},
	{
	name: 'Pinxx - Regenta Cental',
	address: '91-92, Regenta Central, Jhotwara, Jaipur',
	location: 'Jhotwara',
	category: 'FINE DINING',
	vote: '3.9',
	cuisines: 'Italian, Chinese, North Indian, South Indian',
	cost: '1500',
	hours: '7 AM to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/102888_RESTAURANT_41fca5802609b2e05ff53c06c3eaa0fd.jpg',
	id: 10,
	phno: '0141 7165100'
	}]
	$scope.restaurant = restaurants[$routeParams.id - 1]; // to display the information of restaurants object like restaurants[2] 
	$scope.ingredients = []; // initializing as an empty array

    // this code is for ingerdiets list by using clarifai api
	$scope.getIngredients = function(url) { // this fuction will be called when user clicks on getIngerdients button on resturants page 
			var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
			$http({ // this is way of making HTTP requests in angular  
				'method': 'POST', //  passing the type of HTTP request like Put, Get, Delete
				'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs', // api endpoint provided by Clairifai to us
				'headers': {
					'Authorization': 'Key d79ef964b04249408795919c39e0bd6f', // key that we can get from clarifi website different for each user
					'Content-Type': 'application/json'
				},
				'data': data
			}).then(function (response) { // this function runs if the request is successfully completed and in response parameter we get some value from api (ingredients list)
				var list = response.data.outputs[0].data.concepts;
				for (var i =0;i < list.length;i++) { // running a loop for pushing each value from list into ingredients array
					$scope.ingredients.push(list[i].name);
				}
			}, function (xhr) { // this function runs if the request is not successfully completed
		        	console.log(xhr);
		        })
	}


})

foodieApp.controller('shoppingController',function($scope,$http) { 
	var restaurants = [{
	name: 'Tapri Central',
	address: 'B4 E, 3rd Floor, Surana Jewellers, Opposite Central Park, C Scheme, Jaipur',
	location: 'C Scheme',
	category: 'CAFÉ,QUICK BITES',
	vote: '4.7',
	cuisines: 'Cafe, Fast Food, Street Food',
	cost: '750 ',
	hours: '7:30 AM to 9:45 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/101212_RESTAURANT_b946e39f2eab7b1aedf4673c6baf7cf9.jpg',
	id: 1,
	bestDish: {
		name: 'Paneer Sandwich',
		image: 'http://4.bp.blogspot.com/-XwBm25rKXRI/UJBVLoFXvyI/AAAAAAAACvw/Rte2gtA59vE/s1600/Yummy+cheese+sandwich.jpg'
	},
	phno: '0141 2360245'
	},
	{
	name: 'F Bar & Lounge- Golden Tulip',
	address: 'Golden Tulip, Near GPO, MI Road, Jaipur',
	location: 'MI Road',
	category: 'LOUNGE',
	vote: '4.8',
	cuisines: 'North Indian, Chinese, Continental',
	cost: '2800',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/5/102855/50d312c8cf54ef122e52ac13da34bdae.jpg?fit=around%7C160%3A160&crop=160%3A160%3B%2A%2C%2A',
	id: 2,
	phno: '0141 3391459'
	},
	{
	name: 'Nibs Cafe',
	address: 'B-16 Durgadas Colony, Next to MGF Mall, Bhawani Singh Road, C Scheme, Jaipur',
	location: 'C Scheme ',
	category: 'CAFÉ',
	vote: '4.5',
	cuisines: 'Cafe, Italian, Continental',
	cost: '1300',
	hours: '11 AM to 10:45 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/102813_RESTAURANT_a545a54b52dd5ebb04582c05cbab1ad6.jpg',
	id: 3,
	phno: '0141 5109696'
	},
	{
	name: 'RJ 14',
	address: '132,133,151, Ajmera Garden, Main DCM Road, Opposite IndusInd Bank, Ajmer Road, Ajmer Highway, Jaipur',
	location: 'Ajmer Highway',
	category: 'CASUAL DINING',
	vote: '4.0',
	cuisines: 'North Indian, South Indian',
	cost: '800',
	hours: '12 Noon to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/103172_RESTAURANT_39535aa52eb93d5e42dd6ea2ea71b06f.jpg',
	id: 4,
	phno: '0141 3391485'
	},
	{
	name: 'Kanha',
	address: 'Queens Road, Vaishali Nagar, Jaipur',
	location: 'Vaishali Nagar',
	category: 'SWEET SHOP,QUICK BITES',
	vote: '3.7',
	cuisines: 'Mithai, Bakery, North Indian, South Indian, Chinese',
	cost: '500',
	hours: '8 AM to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/100148_CHAIN_3fbbc571307991c6f2e44d46c5ffd292.jpg',
	id: 5,
	phno: '0141 40309380'
	},
	{
	name: 'Colorbar - Radisson Blu',
	address: 'Colorbar - Radisson Blu, Tonk Road, Jaipur',
	location: 'Tonk Road',
	category: 'BAR',
	vote: '4.0',
	cuisines: 'Finger Food',
	cost: '3000',
	hours: '7 PM to 12:30 AM (Mon-Thu),7 PM to 1:30 AM (Fri-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/102171_RESTAURANT_2f03518bb3c066e171a7a427b695a699.jpg',
	id: 6,
	phno: '0141 3391487'
	},
	{
	name: 'WTF',
	address: '301, Man Upasna Mall, Chomu House, C Scheme, Jaipur',
	location: 'C Scheme',
	category: 'LOUNGE',
	vote: '4.1',
	cuisines: 'Continental, Italian, North Indian, Lebanese, Thai',
	cost: '1500',
	hours: '11 AM to 1:30 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/103065_RESTAURANT_604042fb34b3f739b50e639e557e0905.jpeg',
	bestDish: {
		name: 'Nachos',
		image: 'http://img.taste.com.au/O_5e5BxC/taste/2016/11/tray-baked-nachos-102903-1.jpeg'
	},
	id: 7,
	phno: '0141 3391485'
	},
	{
	name: 'Burger Farm',
	address: '19, Opp. Jaipur Electronic Market, JDA Market, Gopalpura, Mansarovar, Jaipur',
	location: 'Mansarovar',
	category: 'QUICK BITES',
	vote: '3.2',
	cuisines: 'Burger',
	cost: '350',
	hours: '10 AM to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/102003_CHAIN_c7d423e802fc682c8d032d8d9dcda82d.png',
	id: 8,
	phno: '+91 7300060006'
	},
	{
	name: 'Dana Pani',
	address: 'B 4, Shubh Laxmi Tower, Central Spine, Vidhyadhar Nagar, Jaipur',
	location: 'Vidhyadhar Nagar',
	category: 'CASUAL DINING',
	vote: '3.0',
	cuisines: 'North Indian, South Indian, Chinese',
	cost: '600',
	hours: '11 AM to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/100093_RESTAURANT_2718bde28aedbeefe309a85df491986d.jpg',
	id: 9,
	phno: '0141 6459999'
	},
	{
	name: 'Pinxx - Regenta Cental',
	address: '91-92, Regenta Central, Jhotwara, Jaipur',
	location: 'Jhotwara',
	category: 'FINE DINING',
	vote: '3.9',
	cuisines: 'Italian, Chinese, North Indian, South Indian',
	cost: '1500',
	hours: '7 AM to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/102888_RESTAURANT_41fca5802609b2e05ff53c06c3eaa0fd.jpg',
	id: 10,
	phno: '0141 7165100'
	}]
	$scope.ingredients = []; // initializing as an empty array
	$scope.todoList = [];
	// $scope.indexId = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
	$scope.checkBoxClick = function(boxObj) { // this function will be called when we click on check boxes
			       var bId = $scope.todoList.indexOf(boxObj);
			       // console.log(bId);
			       // var bid2 = "span #" + bId
			       // $(bid2).css("color", "red");
			    };

	$scope.todoAdd = function(element) {
			        $scope.todoList.push({todoText:element, done:false});
			        $scope.todoInput = "";
			    };

			    $scope.remove = function() {
			        var oldList = $scope.todoList;
			        $scope.uncheckedList = [];
			        angular.forEach(oldList, function(x) {
			            if (!x.done) $scope.uncheckedList.push(x);
			        });
			    };

    // this code is for ingerdiets list by using clarifai api
	$scope.getIngredients = function(url) { // this fuction will be called when user clicks on getIngerdients button on resturants page
			$scope.todoList = [];
			var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
			$http({ // this is way of making HTTP requests in angular  
				'method': 'POST', //  passing the type of HTTP request like Put, Get, Delete
				'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs', // api endpoint provided by Clairifai to us
				'headers': {
					'Authorization': 'Key d79ef964b04249408795919c39e0bd6f', // key that we can get from clarifi website different for each user
					'Content-Type': 'application/json'
				},
				'data': data
			}).then(function (response) { // this function runs if the request is successfully completed and in response parameter we get some value from api (ingredients list)
				var list = response.data.outputs[0].data.concepts;
				console.log(response);
				for (var i =0;i < list.length;i++) { // running a loop for pushing each value from list into ingredients array
					$scope.ingredients.push(list[i].name);
					$scope.todoAdd(list[i].name);
				}
			}, function (xhr) { // this function runs if the request is not successfully completed
		        	console.log(xhr);
		        })
	}

	// todo 

	

			    
})