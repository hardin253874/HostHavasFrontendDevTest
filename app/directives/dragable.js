(function () {
    'use strict';
	 angular.module('app', []).directive('dragable', function($document) {
	  return {
		restrict: 'A',
		link: function(scope, element, attr) {
		  var startX = 0,
		      startY = 0,
              x = 0,
              y = 0; 
		  var container = null; 
      
		element.css({
		  position: 'relative'
		  // cursor: 'pointer'
		});
    
		element.on('mousedown', function(event) {		  
		  event.preventDefault();
		  startX = event.screenX - x;
		  startY = event.screenY - y;		  
		  $document.on('mousemove', mousemove);
		  $document.on('mouseup', mouseup); 
		  container = attr.$$element;
		});

		function mousemove(event) {
		  y = event.screenY - startY;
		  x = event.screenX - startX;		 

		  container.css({
			top: y + 'px',
			left: x + 'px'
		  });

		}
		
		function offset() {
			var rec = document.getElementById('canvas').getBoundingClientRect(), 
			    bodyElt = document.body;
			return {
			  top: rec.top + bodyElt.scrollTop,
			  left: rec.left + bodyElt.scrollLeft
			}
		}

		function mouseup() {
		  $document.unbind('mousemove', mousemove);
		  $document.unbind('mouseup', mouseup);
		}
		}
	  };
	})
});