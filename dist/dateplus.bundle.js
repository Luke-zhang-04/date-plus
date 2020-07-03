module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";
/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.1.0
 * @exports DatePlus
 * @file exports main dateplus object
 */var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(1));class u extends o.default{constructor(){super(...arguments),this.addZeros=(e="/")=>u.addZeros(this.formatDate(),e),this.formatDate=(e="/")=>u.formatDate(this,e),this.getWordDay=()=>u._daysReference[this.getDay()],this.getWordMonth=()=>u._monthsReference[this.getMonth()]}}t.default=u,u._daysReference={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"},u._monthsReference={0:"January",1:"Feburary",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"},u.addZeros=(e,t="/")=>{let r="";for(let n=0;n<2;n++)e.split(t)[n].length<2?r+=`0${e.split(t)[n]}${t}`:r+=`${e.split(t)[n]}${t}`;return e.split(t)[2].length<2?r+="0"+e.split(t)[2]:r+=e.split(t)[2],r},u.formatDate=(e,t="/")=>{const r=e.getMonth().toString(),n=e.getDate().toString();return[e.getFullYear().toString(),r,n].join(t)},u.getWordDay=e=>u._daysReference[e],u.getWordMonth=e=>u._monthsReference[e]},function(e,t,r){"use strict";
/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.1.0
 * @exports Elapse
 * @file defines Elapse class for elapsed
 */Object.defineProperty(t,"__esModule",{value:!0});class n extends Date{}t.default=n}]);