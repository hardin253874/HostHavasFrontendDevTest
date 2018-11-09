(function () {
    'use strict';
	 angular.module('app', [])
		.controller('mainController', ['$scope',  function($scope) {
        
		$scope.leftNavSign = '>';				
		$scope.showLeftNav = true;		
		$scope.blocks = [
			{id: 'block1', text: 'Block 1', show: true, height: '25%'},
			{id: 'block2', text: 'Block 2', show: true, height: '25%'},
			{id: 'block3', text: 'Block 3', show: true, height: '25%'},
			{id: 'block4', text: 'Block 4', show: true, height: '25%'}
		];
				
		$scope.toggleLeftNav = function() {
			if ($scope.showLeftNav){
				$scope.showLeftNav = false;
				$scope.leftNavSign = '<';
			}else {
				$scope.showLeftNav = true;
				$scope.leftNavSign = '>';
			}
		};
		
		$scope.toggleBlock = function(id){		
			$scope.blocks.forEach(function(block) {
				if (block.id !== id){
					block.show = !block.show;										
				}else {
					if (block.height === '25%'){
						block.height = '100%';
					}else {
						block.height = '25%';
					}
				}				
            });
		}			
    }])	
});