(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"jquery":"jquery","selectric":"selectric"}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvUGl4ZW0vQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbnJlcXVpcmUoJ3NlbGVjdHJpYycpO1xyXG52YXIgREVGQVVMVF9WQUxVRSA9IDE0O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHR2YXIgYmFzZUZvbnRGaWVsZCA9ICQoJyNiYXNlLWZvbnQtbnVtYmVyJyk7XHJcblx0dmFyIGJhc2VGb250ID0gYmFzZUZvbnRGaWVsZC52YWwoKSB8fCBERUZBVUxUX1ZBTFVFO1xyXG5cdGJhc2VGb250RmllbGQudmFsKGJhc2VGb250KS5mb2N1cygpO1xyXG5cclxuXHR2YXIgZGlzcGxheWVkRm9udE51bWJlciA9ICQoJ1tkYXRhLWJpbmQ9XCJiYXNlLWZvbnRcIl0nKTtcclxuXHR2YXIgYmFzZUZvbnREaXYgPSAkKCcuYmFzZS1mb250LXNpemUnKTtcclxuXHJcblx0dmFyIHRleHRFbHMgPSAkKCdbZGF0YS1lbV0nKTtcclxuXHJcblx0dmFyIHVwZGF0ZUZvbnRTaXplcyA9IGZ1bmN0aW9uKGZ6KXtcclxuXHRcdGJhc2VGb250ID0gZnogPyBmeiA6IERFRkFVTFRfVkFMVUU7XHJcblxyXG5cdFx0ZGlzcGxheWVkRm9udE51bWJlci5odG1sKGJhc2VGb250ICsgJ3B4Jyk7XHJcblx0XHRiYXNlRm9udERpdi5jc3MoJ2ZvbnQtc2l6ZScsIGJhc2VGb250ICsgJ3B4Jyk7XHJcblxyXG5cdFx0dGV4dEVscy5lYWNoKGZ1bmN0aW9uKGksIGVsKXtcclxuXHRcdFx0JChlbCkuY3NzKCdmb250LXNpemUnLCAkKGVsKS5kYXRhKCdlbScpICsgJ2VtJyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRiYXNlRm9udEZpZWxkLm9uKCdjaGFuZ2UucGl4ZW0ga2V5dXAucGl4ZW0nLCBmdW5jdGlvbihlKXtcclxuXHRcdHVwZGF0ZUZvbnRTaXplcyhiYXNlRm9udEZpZWxkLnZhbCgpKTtcclxuXHR9KS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHJcblx0Ly89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblx0JCgnc2VsZWN0Jykuc2VsZWN0cmljKCk7XHJcblxyXG5cdHZhciBjdXJyZW50Rm9udEZhbWlseSA9ICdPcGVuIFNhbnMnO1xyXG5cdHZhciBhbHJlYWR5TG9hZGVkRm9udHMgPSBbY3VycmVudEZvbnRGYW1pbHldO1xyXG5cclxuXHQkKCcjZ29vZ2xlLWZvbnQtc3dpdGNoZXInKS5vbignY2hhbmdlLnBpeGVtJywgZnVuY3Rpb24oZSl7XHJcblx0XHR2YXIgbmV3Rm9udCA9ICQodGhpcykudmFsKCk7XHJcblxyXG5cdFx0aWYoYWxyZWFkeUxvYWRlZEZvbnRzLmluZGV4T2YobmV3Rm9udCkgPT09IC0xKXtcclxuXHRcdFx0JCgnaGVhZCcpLmFwcGVuZCgnPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT0nICsgbmV3Rm9udC5zcGxpdCgnICcpLmpvaW4oJysnKSArICdcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz4nKVxyXG5cdFx0XHRhbHJlYWR5TG9hZGVkRm9udHMucHVzaChuZXdGb250KTtcclxuXHRcdH1cclxuXHJcblx0XHRiYXNlRm9udERpdi5jc3MoJ2ZvbnQtZmFtaWx5JywgbmV3Rm9udCArICcsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnKTtcclxuXHR9KTtcclxufSk7XHJcbiJdfQ==
