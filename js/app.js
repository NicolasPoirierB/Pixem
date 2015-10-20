(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var $ = require('jquery');
var DEFAULT_VALUE = 14;

$(document).ready(function(){
	var baseFontField = $('#base-font-number');
	var baseFont = baseFontField.val() || DEFAULT_VALUE;
	baseFontField.val(baseFont).focus();

	var displayedFontNumber = $('[data-bind="base-font"]');
	var baseFontDiv = $('.base-font-size');

	var updateFontSizes = function(fz){
		baseFont = fz ? fz : DEFAULT_VALUE;

		displayedFontNumber.html(baseFont + 'px');
		baseFontDiv.css('font-size', baseFont + 'px');
	};

	baseFontField.on('change.pixem keyup.pixem', function(e){
		updateFontSizes(baseFontField.val());
	}).trigger('change');
});

},{"jquery":"jquery"}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvUGl4ZW0vQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG52YXIgREVGQVVMVF9WQUxVRSA9IDE0O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHR2YXIgYmFzZUZvbnRGaWVsZCA9ICQoJyNiYXNlLWZvbnQtbnVtYmVyJyk7XHJcblx0dmFyIGJhc2VGb250ID0gYmFzZUZvbnRGaWVsZC52YWwoKSB8fCBERUZBVUxUX1ZBTFVFO1xyXG5cdGJhc2VGb250RmllbGQudmFsKGJhc2VGb250KS5mb2N1cygpO1xyXG5cclxuXHR2YXIgZGlzcGxheWVkRm9udE51bWJlciA9ICQoJ1tkYXRhLWJpbmQ9XCJiYXNlLWZvbnRcIl0nKTtcclxuXHR2YXIgYmFzZUZvbnREaXYgPSAkKCcuYmFzZS1mb250LXNpemUnKTtcclxuXHJcblx0dmFyIHVwZGF0ZUZvbnRTaXplcyA9IGZ1bmN0aW9uKGZ6KXtcclxuXHRcdGJhc2VGb250ID0gZnogPyBmeiA6IERFRkFVTFRfVkFMVUU7XHJcblxyXG5cdFx0ZGlzcGxheWVkRm9udE51bWJlci5odG1sKGJhc2VGb250ICsgJ3B4Jyk7XHJcblx0XHRiYXNlRm9udERpdi5jc3MoJ2ZvbnQtc2l6ZScsIGJhc2VGb250ICsgJ3B4Jyk7XHJcblx0fTtcclxuXHJcblx0YmFzZUZvbnRGaWVsZC5vbignY2hhbmdlLnBpeGVtIGtleXVwLnBpeGVtJywgZnVuY3Rpb24oZSl7XHJcblx0XHR1cGRhdGVGb250U2l6ZXMoYmFzZUZvbnRGaWVsZC52YWwoKSk7XHJcblx0fSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbn0pO1xyXG4iXX0=
