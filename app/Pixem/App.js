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

	//=========================================================

	$('select').selectric();

	var currentFontFamily = 'Open Sans';
	var alreadyLoadedFonts = [currentFontFamily];

	$('#google-font-switcher').on('change.pixem', function(e){
		var newFont = $(this).val();

		if(alreadyLoadedFonts.indexOf(newFont) === -1){
			$('head').append('<link href="https://fonts.googleapis.com/css?family=' + newFont.split(' ').join('+') + '" rel="stylesheet" type="text/css" />')
			alreadyLoadedFonts.push(newFont);
		}

		baseFontDiv.css('font-family', newFont + ', Helvetica, Arial, sans-serif');
	});
});
