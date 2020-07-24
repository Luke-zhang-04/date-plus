/* dateplus v2.0.0 | Copyright (C) 2020 Luke Zhang https://luke-zhang-04.github.io | MIT License */
"use strict";function _wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map:undefined;_wrapNativeSuper=function(Class){if(Class===null||!_isNativeFunction(Class)){return Class}if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function")}if(typeof _cache!=="undefined"){if(_cache.has(Class)){return _cache.get(Class)}_cache.set(Class,Wrapper)}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}});return _setPrototypeOf(Wrapper,Class)};return _wrapNativeSuper(Class)}function _construct(){if(_isNativeReflectConstruct()){_construct=Reflect.construct}else{_construct=function(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a),instance=new Constructor;if(Class){_setPrototypeOf(instance,Class.prototype)}return instance}}return _construct.apply(null,arguments)}function _isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1}function _createForOfIteratorHelper(o,allowArrayLike){var it;if(typeof Symbol==="undefined"||o[Symbol.iterator]==null){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it){o=it}var i=0,F=function(){};return{s:F,n:function n(){if(i>=o.length){return{done:!0}}return{done:!1,value:o[i++]}},e:function e(_e2){throw _e2},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var normalCompletion=!0,didErr=!1,err;return{s:function s(){it=o[Symbol.iterator]()},n:function n(){var step=it.next();normalCompletion=step.done;return step},e:function e(_e3){didErr=!0;err=_e3},f:function f(){try{if(!normalCompletion&&it["return"]!=null){it["return"]()}}finally{if(didErr){throw err}}}}}function _unsupportedIterableToArray(o,minLen){if(!o){return}if(typeof o==="string"){return _arrayLikeToArray(o,minLen)}var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor){n=o.constructor.name}if(n==="Map"||n==="Set"){return Array.from(o)}if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)){return _arrayLikeToArray(o,minLen)}}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length){len=arr.length}for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}});if(superClass){_setPrototypeOf(subClass,superClass)}}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct){return!1}if(Reflect.construct.sham){return!1}if(typeof Proxy==="function"){return!0}try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return!0}catch(e){return!1}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}module.exports=function(e){var s={};function t(o){if(s[o]){return s[o].exports}var r=s[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=s,t.d=function(e,s,o){t.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,s){if(1&s&&(e=t(e)),8&s){return e}if(4&s&&"object"==_typeof(e)&&e&&e.__esModule){return e}var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e){for(var r in e){t.d(o,r,function(s){return e[s]}.bind(null,r))}}return o},t.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t.p="",t(t.s=0)}([function(e,s,t){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(s,"__esModule",{value:!0});var r=o(t(1));var n=function(_r$default){_inherits(n,_r$default);var _super=_createSuper(n);function n(){var _this;_classCallCheck(this,n);_this=_super.apply(this,arguments),_this.addZeros=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"/";return n.addZeros(_this.formatDate(),e)},_this.formatDate=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"/";return n.formatDate(_assertThisInitialized(_this),e)},_this.getWordDay=function(){return n._daysReference[_this.getDay()]},_this.getWordMonth=function(){return n._monthsReference[_this.getMonth()]};return _this}return n}(r["default"]);s["default"]=n,n._daysReference={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"},n._keysReference={y:"year",m:"month",d:"day"},n._monthsReference={0:"January",1:"Feburary",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"},n.addZeros=function(e){for(var s=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"/",t="",_o=0;_o<2;_o++){e.split(s)[_o].length<2?t+="0".concat(e.split(s)[_o]).concat(s):t+="".concat(e.split(s)[_o]).concat(s)}return e.split(s)[2].length<2?t+="0"+e.split(s)[2]:t+=e.split(s)[2],t},n.formatDate=function(e){var s=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"/",t=e.getMonth().toString(),o=e.getDate().toString();return[e.getFullYear().toString(),t,o].join(s)},n.getDateValues=function(e){var s=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"y:m:d",t=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"auto",o="/";if("auto"===t){var _iterator=_createForOfIteratorHelper(e),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var _s=_step.value;if(isNaN(Number(_s))){o=_s;break}}}catch(err){_iterator.e(err)}finally{_iterator.f()}}else o=t;var r=e.split(o),u=s.split(":"),a={};for(var _e=0;_e<3;_e++){var _s2=n._keysReference[u[_e]];a[_s2]=Number(r[_e]),console.log(_s2,r[_e])}return a},n.getWordDay=function(e){return n._daysReference[e]},n.getWordMonth=function(e){return n._monthsReference[e]}},function(e,s,t){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(s,"__esModule",{value:!0});var r=o(t(2));var n=function(_r$default2){_inherits(n,_r$default2);var _super2=_createSuper(n);function n(){_classCallCheck(this,n);return _super2.apply(this,arguments)}return n}(r["default"]);s["default"]=n,n.msToSeconds=n.msToSecs,n.msToMinutes=n.msToMins,n.msToHours=n.msToHrs,n.secondsToMs=n.secsToMs,n.secondsToMinutes=n.secsToMins,n.secondsToHours=n.secsToHrs,n.secondsToDays=n.secsToDays,n.minutesToMs=n.minsToMs,n.minutesToSeconds=n.minsToSecs,n.minutesToHours=n.minsToHrs,n.minutesToDays=n.minsToDays,n.hoursToMs=n.hrsToMs,n.hoursToSeconds=n.hrsToSecs,n.hoursToMinutes=n.hrsToMins,n.hoursToDays=n.hrsToDays,n.daysToSeconds=n.daysToSecs,n.daysToMinutes=n.daysToMins,n.daysToHours=n.daysToHrs},function(e,s,t){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(s,"__esModule",{value:!0});var r=o(t(3));var n=function(_r$default3){_inherits(n,_r$default3);var _super3=_createSuper(n);function n(){var _this2;_classCallCheck(this,n);_this2=_super3.apply(this,arguments),_this2.getElapsedDays=function(e){return-1*Math.round((_this2.getTime()-e.getTime())/n._oneDay)};return _this2}return n}(r["default"]);s["default"]=n,n._oneDay=864e5,n.getElapsedDays=function(e,s){return-1*Math.round((e.getTime()-s.getTime())/n._oneDay)}},function(e,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=function(_Date){_inherits(o,_Date);var _super4=_createSuper(o);function o(){_classCallCheck(this,o);return _super4.apply(this,arguments)}return o}(_wrapNativeSuper(Date));s["default"]=o,o.msToSecs=function(e){return{ms:e%1e3,seconds:(e-e%1e3)/1e3}},o.msToMins=function(e){var s=e%1e3%1e3,t=(e-e%1e3)/1e3%60;return{ms:s,seconds:t,minutes:(e-1e3*t-s)/6e4}},o.msToHrs=function(e){var s=e%1e3%1e3,t=(e-e%1e3)/1e3%60,o=(e-1e3*t-s)/6e4%60;return{ms:s,seconds:t,minutes:o,hours:(e-1e3*o*60-1e3*t-s)/36e5}},o.msToDays=function(e){var s=e%1e3%1e3,t=(e-e%1e3)/1e3%60,o=(e-1e3*t-s)/6e4%60,r=(e-1e3*o*60-1e3*t-s)/36e5%24;return{ms:s,seconds:t,minutes:o,hours:r,days:(e-1e3*r*60*60-1e3*o*60-1e3*t-s)/864e5}},o.secsToMs=function(e){return 1e3*e},o.secsToMins=function(e){return o.msToMins(o.secsToMs(e))},o.secsToHrs=function(e){return o.msToHrs(o.secsToMs(e))},o.secsToDays=function(e){return o.msToDays(o.secsToMs(e))},o.minsToMs=function(e){return 60*e*1e3},o.minsToSecs=function(e){return 60*e},o.minsToHrs=function(e){return o.msToHrs(o.minsToMs(e))},o.minsToDays=function(e){return o.msToDays(o.minsToMs(e))},o.hrsToMs=function(e){return 60*e*60*1e3},o.hrsToSecs=function(e){return 60*e*60},o.hrsToMins=function(e){return 60*e},o.hrsToDays=function(e){return o.msToDays(o.hrsToMs(e))},o.daysToMs=function(e){return 24*e*60*60*1e3},o.daysToSecs=function(e){return 24*e*60*60},o.daysToMins=function(e){return 24*e*60},o.daysToHrs=function(e){return 24*e}}]);
