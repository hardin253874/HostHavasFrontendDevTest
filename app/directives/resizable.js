(function () {
    'use strict';
	 angular.module('app', []).directive('resizable', function($document) {
		return {
			restrict: 'A',
			link:function (scope, element, attr) {
				
				var container = null; 
				var dimension = {};
				var position = {};
					element.css({
					  position: 'relative'
					  // cursor: 'pointer'
					});
					
				element.on('mousedown', function(event) {		  
				  event.preventDefault();
				
				  	
				  $document.bind('mousemove', mousemove);
				  $document.bind('mouseup', mouseup); 
				  container = attr.$$element;
				  
				  position.x = event.clientX;
				  position.y = event.clientY;
				  dimension.width = element.prop('offsetWidth');
				  dimension.height = element.prop('offsetHeight');				  
				});	
				
				function mousemove(event) {
				    var deltaWidth = dimension.width - (position.x - event.clientX);
					var deltaHeight = dimension.height - (position.y - event.clientY);
					
					deltaWidth = deltaWidth > 1600?  1600 : deltaWidth;
					deltaHeight = deltaHeight > 1000? 1000 : deltaHeight;
					 var newDimensions = {
						width:  deltaWidth + 'px',
						height: deltaHeight + 'px'
					 };					 
					 container.css(newDimensions);
				}
				
				function mouseup() {
				  $document.unbind('mousemove', mousemove);
				  $document.unbind('mouseup', mouseup);
				}
			}
		}
	})
});