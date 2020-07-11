var app = angular.module('store', [] );

app.controller('StoreController', function(){
	var vm 			= this;
	vm.products 	= gem;
	vm.newProduct 	= {};

	this.addProduct = function(){
		vm.products.push(vm.newProduct);
		vm.newProduct = {};
	};
	
});
	var gem = [
	{
		rating 		: 5,
		name 		: 'Dedi',
		description : 'hello world'
	},
	{
		rating 		: 5,
		name 		: 'Beckham',
		description : 'Yeaay berhasil review'
	}
	
	];

/*app.controller('StoreController', function(){
	this.products 	= [
		{
			reviews			: [
				{
					rating		: 5,
					name 		: 'dedi',
					description : 'lalala'
				}

			]
		}
	]
	;

});
*/