"use strict";

var $ = require('jquery');
require('selectric');
var DEFAULT_VALUE = 14;

$(document).ready(function(){
	var baseFontField = $('#base-font-number');
	var baseFont = baseFontField.val() || DEFAULT_VALUE;
	baseFontField.val(baseFont).focus();

	var displayedFontNumber = $('[data-bind="base-font"]');
	var baseFontDiv = $('.base-font-size');

	var textEls = $('[data-em]');

	var updateFontSizes = function(fz){
		baseFont = fz ? fz : DEFAULT_VALUE;

		displayedFontNumber.html(baseFont + 'px');
		baseFontDiv.css('font-size', baseFont + 'px');

		textEls.each(function(i, el){
			$(el).css('font-size', $(el).data('em') + 'em');
		});
	};

	baseFontField.on('change.pixem keyup.pixem', function(e){
		updateFontSizes(baseFontField.val());
	}).trigger('change');

	$('select').selectric();
});
