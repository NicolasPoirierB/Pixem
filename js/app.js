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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY2hhcnRlL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxudmFyIERFRkFVTFRfVkFMVUUgPSAxNDtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0dmFyIGJhc2VGb250RmllbGQgPSAkKCcjYmFzZS1mb250LW51bWJlcicpO1xyXG5cdHZhciBiYXNlRm9udCA9IGJhc2VGb250RmllbGQudmFsKCkgfHwgREVGQVVMVF9WQUxVRTtcclxuXHRiYXNlRm9udEZpZWxkLnZhbChiYXNlRm9udCkuZm9jdXMoKTtcclxuXHJcblx0dmFyIGRpc3BsYXllZEZvbnROdW1iZXIgPSAkKCdbZGF0YS1iaW5kPVwiYmFzZS1mb250XCJdJyk7XHJcblx0dmFyIGJhc2VGb250RGl2ID0gJCgnLmJhc2UtZm9udC1zaXplJyk7XHJcblxyXG5cdHZhciB1cGRhdGVGb250U2l6ZXMgPSBmdW5jdGlvbihmeil7XHJcblx0XHRiYXNlRm9udCA9IGZ6ID8gZnogOiBERUZBVUxUX1ZBTFVFO1xyXG5cclxuXHRcdGRpc3BsYXllZEZvbnROdW1iZXIuaHRtbChiYXNlRm9udCArICdweCcpO1xyXG5cdFx0YmFzZUZvbnREaXYuY3NzKCdmb250LXNpemUnLCBiYXNlRm9udCArICdweCcpO1xyXG5cdH07XHJcblxyXG5cdGJhc2VGb250RmllbGQub24oJ2NoYW5nZS5waXhlbSBrZXl1cC5waXhlbScsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0dXBkYXRlRm9udFNpemVzKGJhc2VGb250RmllbGQudmFsKCkpO1xyXG5cdH0pLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG59KTtcclxuIl19
