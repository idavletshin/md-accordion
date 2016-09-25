
'use strict';

angular
.module('mdAccordion', [
	'ngMaterial'
	]);

angular
.module('mdAccordion')
.directive('mdAccordion', ['$timeout', mdAccordion]);


function mdAccordion($timeout) {


	return {
		restrict: 'C',
		replace: false,
		link: link,
	};

	function link(scope, element, attrs) {
		element.find(".md-accordion-item-body").addClass('item-closed');
		var elem = element.find('.md-accordion-item-body');
		element.find('.md-accordion-item-header').on('click', function(){
			// element.find('.md-accordion-item-body').addClass('hide');
			console.debug("clicked on item header indirectly");
		})

	}
}




angular
.module('mdAccordion')
.directive('mdAccordionItem', mdAccordionItem);


function mdAccordionItem() {


	return {
		restrict: 'E',
		link: link,
	};

	function link(scope, element, attrs) {

		// element.find('.md-accordion-item-header').click(function() {
		// 	console.debug('clicked on item header');

		// });

		
	}
}


angular
.module('mdAccordion')
.directive('mdAccordionItemHeader', ['$timeout', mdAccordionItemHeader]);


function mdAccordionItemHeader($timeout) {


	return {
		restrict: 'C',
		link: link,
	};

	function link(scope, element, attrs) {
		var isOne = element.parent().parent().attr('one');

		console.log(isOne)
		element.on('click', function(){
			if(isOne != undefined){
				if(element.parent().find('.md-accordion-item-body').hasClass('item-open')){
					console.debug("has class")
					element.parent().find('.md-accordion-item-body').addClass('item-closed');	
					element.parent().find('.md-accordion-item-body').removeClass('item-open');	

				}else{
					element.parent().parent().find('.md-accordion-item-body').removeClass('item-open');
					element.parent().parent().find('.md-accordion-item-body').addClass('item-closed');
					$timeout(function(){
						element.parent().find('.md-accordion-item-body').toggleClass('item-closed');
						element.parent().find('.md-accordion-item-body').toggleClass('item-open');
					}, 100);
					
				}
			}else{
				console.log(" not item heder directly")

				element.parent().find('.md-accordion-item-body').toggleClass('item-closed');
				element.parent().find('.md-accordion-item-body').toggleClass('item-open');
			}

		})


		
	}
}


angular
.module('mdAccordion')
.directive('mdAccordionItemBody', mdAccordionItemBody);


function mdAccordionItemBody() {


	return {
		restrict: 'C',
		link: link,
	};

	function link(scope, element, attrs) {
		scope.visible = false;

		element.on('click', function () {
			console.debug('clicked on item body');

		});
	}
}


