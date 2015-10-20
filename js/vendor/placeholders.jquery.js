/*! Pixem - v0.0.1 - 2015-10-19
* Copyright (c) 2015 Nicolas Poirier-Barolet;*/

!function(a,b){"use strict";var c=a.fn.val,d=a.fn.prop;b.Placeholders.nativeSupport||(a.fn.val=function(a){var b=c.apply(this,arguments),d=this.eq(0).data("placeholder-value");return void 0===a&&this.eq(0).data("placeholder-active")&&b===d?"":b},a.fn.prop=function(a,b){return void 0===b&&this.eq(0).data("placeholder-active")&&"value"===a?"":d.apply(this,arguments)})}(jQuery,this);