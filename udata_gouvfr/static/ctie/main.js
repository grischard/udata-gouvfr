/*! Picturefill - v2.3.1 - 2015-04-09
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */

/*! Picturefill - Responsive Images that work today.
*  Author: Scott Jehl, Filament Group, 2012 ( new proposal implemented by Shawn Jansepar )
*  License: MIT/GPLv2
*  Spec: http://picture.responsiveimages.org/
*/

(function(e,t){typeof define=="function"&&define.amd?define("govbar",t):e.govbar=t()})(this,function(){"use strict";function s(t){i=e.getElementById(n);if(!i)throw"Unable to find #"+n;r=t||r,i.insertAdjacentHTML("beforeend",u())}function u(){var e=-1,i=r.length,s=[];s[0]='<ul class="'+n+'-links">';while(++e<i)s[e+1]='<li><a class="'+n+'-link" target="_blank" title="'+r[e]+" ("+o[t].newWindow+")"+'" href="http://'+r[e]+'">'+r[e]+"</a></li>";return s[e+1]='<li><a class="'+n+"-link "+n+'-more" target="_blank" title="'+o[t].moreTitle+" ("+o[t].newWindow+")"+'" href="http://etat.lu/">'+o[t].moreLabel+"</a></li>",s[e+2]="</ul>",s.join("")}var e=window.document,t=e.documentElement.lang||"fr",n="govbar",r=["luxembourg.lu","guichet.lu","gouvernement.lu"],i,o={fr:{moreLabel:"Autres sites",moreTitle:"L’annuaire des sites internets publics luxembourgeois",newWindow:"nouvelle fenêtre"},de:{moreLabel:"Andere Seiten",moreTitle:"Verzeichnis der staatlichen Internetseiten Luxemburg",newWindow:"neues Fenster"},en:{moreLabel:"Other sites",moreTitle:"Directory of public Luxembourg websites",newWindow:"new window"}};return s}),define("core/class",[],function(){"use strict";function e(e){var t,n,r=[].slice.call(arguments,1),i=-1,s=r.length;while(++i<s){n=r[i];for(t in n)Object.defineProperty(e.prototype,t,{value:n[t],enumerable:!1})}return e}function t(e){var t,n,r=[].slice.call(arguments,1),i=-1,s=r.length;while(++i<s){n=r[i];for(t in n)n.hasOwnProperty(t)&&Object.defineProperty(e,t,{value:n[t],enumerable:!0,writable:!0})}return e}return{is:e,extend:t}}),define("core/arrayProto",[],function(){var e=Array.prototype;return e}),define("dom/element",["core/arrayProto"],function(e){function t(e,t,n){if(typeof t=="string"&&n===undefined)return e.getAttribute(t);var r;n!==undefined?(r={},r[t]=n):r=t;for(var i in r){if(!r.hasOwnProperty(i))continue;n=r[i],i==="_text"?e.textContent=n:i==="_html"?e.innerHTML=n:n===null?e.removeAttribute(i):i in e?e[i]=n:e.setAttribute(i,n)}}function n(e,t){return e.hasAttribute(t)}function r(e,t,n){if(typeof t=="string"&&n===undefined)return e[t];var r;n!==undefined?(r={},r[t]=n):r=t;for(var i in r){if(!r.hasOwnProperty(i))continue;e[i]=r[i]}}function i(e,n){var r;return r=document.createElement(e),typeof n=="object"&&t(r,n),r}function s(t){var n=i(t),r=e.slice.call(arguments,1),s=r.length,o=-1,u,a;while(++o<s)u=r[o].parentNode,a=n.cloneNode(),a.appendChild(r[o].cloneNode(!0)),u.replaceChild(a,r[o]);return a}function o(){var t=e.slice.call(arguments),n=t.length,r=-1,i,s,o;while(++r<n){i=t[r].parentNode,o=-1,s=t[r].childNodes.length;while(++o<s)i.insertBefore(t[r].childNodes[o],t[r]);i.removeChild(t[r])}}function u(t){var n=i(t),r=e.slice.call(arguments,1),s=r.length,o=-1,u,n;while(++o<s)u=u||r[o].parentNode,n.appendChild(o===0?r[o].cloneNode(!0):r[o]);return u.replaceChild(n,r[0]),n}function a(t){var n=e.slice.call(arguments,1);n.forEach(function(e){t.appendChild(e)})}function f(t){var n=e.slice.call(arguments,1);n.forEach(function(e){t.insertBefore(e,t.firstChild)})}function l(t){var n=e.slice.call(arguments,1);n.forEach(function(e){t.parentNode.insertBefore(e,t)})}function c(t){var n=e.slice.call(arguments,1).reverse();n.forEach(function(e){t.parentNode.insertBefore(e,t.nextSibling)})}function h(e){return e.parentNode.removeChild(e),e}return{create:i,detach:h,wrap:s,unwrap:o,wrapAll:u,append:a,prepend:f,before:l,after:c,attr:t,has:n,prop:r}}),define("dom/classList",["core/class","core/arrayProto"],function(e,t){function o(e){return function(t,n){return e.call(t.classList||t,n)}}var n,r=/\s+/,i="className",s="DOMTokenList"in window;return n=s?DOMTokenList.prototype:{add:function(e){var t=this,n="",s=-1,o;t[i]=t[i]||"",e=e.split(r),o=e.length;while(++s<o)t[i].indexOf(e[s])===-1&&(n+=" "+e[s]);return t[i]+=n,t[i]},remove:function(e){var t=this,n=t[i]||"",s=-1,o;e=e.split(r),o=e.length;while(++s<o)n.indexOf(e[s])!==-1&&(n=n.replace(new RegExp("\\b"+e[s]+"\\b"),""));return t[i]!==n?t[i]=n:n},contains:function(e){var t=this,n=!0,s=-1,o;e=e.split(r),o=e.length;while(++s<o&&n)if(!t[i]||t[i].indexOf(e[s])===-1)n=!1;return n},toggle:function(e){var t=this,n=t[i]||"",s=-1,o;e=e.split(r),o=e.length;while(++s<o)n.indexOf(e[s])===-1?n+=" "+e[s]:n=n.replace(new RegExp("\\b"+e[s]+"\\b"),"");return t[i]!==n?t[i]=n:n}},{hasClass:o(n.contains),addClass:o(n.add),removeClass:o(n.remove),toggleClass:o(n.toggle)}}),define("dom/query",["core/arrayProto"],function(e){function t(t){return e.slice.call((arguments[1]||document).querySelectorAll(t))}function n(e){return(arguments[1]||document).querySelector(e)}function r(e,t){return"closest"in e?e.closest(t):i(e,t)}function i(e,t){var n=e.matches||e.msMatchesSelector||e.webkitMatchesSelector;while(e){if(n.call(e,t))return e;e=e.parentNode}return null}return{get:t,get1:n,closest:r}}),define("dom/index",["core/class","dom/element","dom/classList","dom/query"],function(e,t,n,r){function i(){}return e.extend(i,t,n,r),i}),define("core/fast-button",["core/class"],function(e){var t=document.body,n="addEventListener",r="removeEventListener",i={};i.coordinates=[],i.onClick=function(e){var t,n,r;for(t=0;t<i.coordinates.length;t+=2)n=i.coordinates[t],r=i.coordinates[t+1],Math.abs(e.clientX-n)<25&&Math.abs(e.clientY-r)<25&&(e.stopPropagation(),e.preventDefault())},i.preventGhostClick=function(e,t){i.coordinates.push(e,t),window.setTimeout(i.pop,250)},i.pop=function(){i.coordinates.splice(0,2)},document[n]("click",i.onClick,!0);var s=function(t,r){this.element=t,this.handler=r,t[n]("touchstart",this,!1),t[n]("click",this,!1)};return e.is(s,{handleEvent:function(t){switch(t.type){case"touchstart":this.onTouchStart(t);break;case"touchmove":this.onTouchMove(t);break;case"touchend":this.onClick(t);break;case"click":this.onClick(t)}},onTouchStart:function(r){var i=r.touches[0];r.stopPropagation(),this.element[n]("touchend",this,!1),t[n]("touchmove",this,!1),this.startX=i.clientX,this.startY=i.clientY},onTouchMove:function(e){var t=e.touches[0];(Math.abs(t.clientX-this.startX)>10||Math.abs(t.clientY-this.startY)>10)&&this.reset()},onClick:function(e){e.stopPropagation(),this.reset(),this.handler.handleEvent?this.handler.handleEvent(e):this.handler(e),e.type==="touchend"&&i.preventGhostClick(this.startX,this.startY)},reset:function(){this.element[r]("touchend",this,!1),t[r]("touchmove",this,!1)},off:function(){var e=this.element;e[r]("touchend",this,!1),e[r]("touchstart",this,!1),e[r]("touchmove",this,!1),e[r]("click",this,!1),t[r]("touchmove",this,!1)},destroy:function(){this.off(),this.element=null}}),s}),define("core/noop",[],function(){var e=function(){};return e}),define("anchor",["core/class","dom/index","core/fast-button","core/noop"],function(e,t,n,r){function f(e){e.keyCode===27&&a&&a.click()}function l(n,r){this.trigger=n,this.destination=t.get1(t.attr(n,"data-destination")||n.hash),this.destination.id=this.destination.id||i+(Math.random()*1e3|0),this.options=e.extend({},this.DEFAULTS,r),this.init()}function c(e,n){return n=n||{},t.get(e).map(function(e){return new l(e,n)})}var i="anchor",s="is-active",o=i+"-destination",u=!1,a;return e.is(l,{DEFAULTS:{onClick:r},init:function(){t.attr(this.trigger,{tabindex:0,"aria-controls":this.destination.id}),t.addClass(this.trigger,i),t.addClass(this.destination,o),this.trigger.addEventListener("keypress",this,!1),this.button=new n(this.trigger,this),u||(document.addEventListener("keypress",f),u=!0)},destroy:function(){t.attr(this.trigger,{tabindex:null,"aria-controls":null}),t.removeClass(this.trigger,i,s),t.removeClass(this.destination,o,s),this.trigger.removeEventListener("keypress",this,!1),this.button.destroy()},handleEvent:function(n){if(n.type==="keypress"&&n.keyCode!==13&&n.keyCode!==20)return;n.preventDefault(),t.toggleClass(this.trigger,s),t.toggleClass(this.destination,s),typeof this.options.onClick=="function"&&this.options.onClick(this.trigger,this.destination),a&&(this.trigger!==a&&a.click(),a=null),t.hasClass(this.trigger,s)&&(a=this.trigger)}}),c.Constructor=l,c}),define("modules/cocoon/kiss",[],function(){"use strict";function t(e){return e.getAttribute("data-videoguid")||e.getAttribute("data-audioguid")}function n(n,r){return r=r||{},r.autoPlay=r.autoPlay||e.autoPlay,r.autolightsoff=r.autolightsoff||e.autolightsoff,r.loop=r.loop||e.loop,"//ctie.kiss.lu/media/embed?key="+t(n)+"&autoplay="+r.autoplay+"&autolightsoff="+r.autolightsoff+"&loop="+r.loop}var e={autoplay:!1,autolightsoff:!1,loop:!1};return{getURL:n}}),define("modules/cocoon/youtube",[],function(){"use strict";function n(e){var t=e.match(/\d+/g),n=0;while(t.length)n+=parseInt(t.shift())*Math.pow(60,t.length);return n}function r(r,i){var s=e.exec(r.href),o="";return s?(s[2]!==undefined&&(o=n(s[2])),i=i||{},"//www.youtube.com/embed/"+s[1]+"?autohide="+(i.autoHide||t.autoHide)+"&autoplay="+(i.autoPlay||t.autoPlay)+"&start="+o):null}var e=/^(?:.)*(?:youtube){1}\.(?:[a-zA-Z]{2,3})+\/.*(?:v=(.{11}))(?:.*(?:t=(.*)))*/,t={autoHide:2,autoPlay:0};return{getURL:r}}),define("modules/cocoon/dailymotion",[],function(){"use strict";function n(n,r){var i=e.exec(n.href);return i?(r=r||{},"//www.dailymotion.com/swf/"+i[1]+"?autoPlay="+(r.autoPlay||t.autoPlay)):null}var e=/^(?:.)*(?:dailymotion+)(?:(?:\.[a-zA-Z]{2,3})+)\/(?:.*)\/([A-Za-z0-9]*)_(?:.*)/,t={autoPlay:0};return{getURL:n}}),define("modules/cocoon/vimeo",[],function(){"use strict";function n(n,r){var i=e.exec(n.href);return i?(r=r||{},"//player.vimeo.com/video/"+i[1]+"?autoplay="+(r.autoPlay||t.autoPlay)):null}var e=/^(?:.)*(?:vimeo+)(?:(?:\.[a-zA-Z]{2,3})+)\/([0-9]*)/,t={autoPlay:0};return{getURL:n}}),define("cocoon",["modules/cocoon/kiss","modules/cocoon/youtube","modules/cocoon/dailymotion","modules/cocoon/vimeo","core/class","dom/index"],function(e,t,n,r,i,s){"use strict";function l(e,t){var n=o.createDocumentFragment(),r=o.createElement("span"),i,s;return i=u.exec(e.href),i?(i=i[1],s=a[i].getURL(e,t),s?(n.appendChild(r),r.className="cocoon cocoon--"+i+" cocoon--"+t.type,r.innerHTML='<iframe src="'+s+'" frameborder="0" scrolling="no" webkitallowfullscreen mozallowfullscreen allowfullscreen width="'+t.iframeWidth+'" height="'+(t.type==="audio"&&i==="kiss"?"24":t.iframeHeight)+'"></iframe>',n.cloneNode(!0)):null):null}function c(e,t){var n;return t=i.extend({},f,t),t.type=e.rel,n=l(e,t),n?(e.parentNode.replaceChild(n,e),n):null}function h(e,t){return t=t||{},s.get(e).map(function(e){return c(e,t)})}var o=window.document,u=/^(?:http[s]?:\/\/(?:www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+(?:(?:\.[a-zA-Z]{2,3})+)(?:\/(?:.)*)/,a={youtube:t,dailymotion:n,vimeo:r,kiss:e},f={iframeWidth:640,iframeHeight:360,autoPlay:!1,autoHide:!1,showPlaylist:!1,type:"video"};return h}),define("dropdown",["core/class","dom/index","core/fast-button"],function(e,t,n){function i(e){var n=e.parentNode;while(!t.hasClass(n,"dropdown")&&n.parentNode)n=n.parentNode;return n}function s(t,n){this.toggle=t,this.options=e.extend({},this.DEFAULTS,n),this.init()}function o(e,n){return n=n||{},t.get(e).map(function(e){return new s(e,n)})}var r="is-open";return e.is(s,{DEFAULTS:{onActive:null},init:function(){this.handler=new n(this.toggle,this),this.parent=i(this.toggle),this.items=t.get(".menu-item",this.parent),this.selectedIndex=NaN,this.options.onActive&&(this.active=t.get1(".is-active",this.parent),this.parent.addEventListener("click",function(e){if(e.target.tagName!=="A"||e.target===this.active)return;e.stopPropagation(),e.preventDefault(),this.options.onActive(e.target),this.active&&(t.removeClass(this.active,"is-active"),this.active=e.target,t.addClass(this.active,"is-active"),this.close())}.bind(this),!1))},handleEvent:function(n){if(n.type==="keyup"&&n.keyCode!==27&&n.keyCode!==38&&n.keyCode!==40)return;n.target.tagName!=="A"&&n.preventDefault(),n.keyCode===38?(isNaN(this.selectedIndex)&&(this.selectedIndex=0),this.selectedIndex=(this.selectedIndex-1+this.items.length)%this.items.length,this.items[this.selectedIndex].focus()):n.keyCode===40?(isNaN(this.selectedIndex)&&(this.selectedIndex=-1),this.selectedIndex=(this.selectedIndex+1)%this.items.length,this.items[this.selectedIndex].focus()):t.hasClass(this.parent,r)?(this.close(),this.off()):(this.open(),this.on())},open:function(){t.addClass(this.parent,r)},close:function(){t.removeClass(this.parent,r)},on:function(){var e="addEventListener";document[e]("keydown",this,!1),document[e]("click",this,!1)},off:function(){var e="removeEventListener";document[e]("keydown",this,!1),document[e]("click",this,!1)},destroy:function(){this.close(),this.off(),this.handler.destroy()}}),o}),window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),n=document.getElementsByTagName("script")[0],r=null;t.type="text/css",t.id="matchmediajs-test",n.parentNode.insertBefore(t,n),r="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=n:t.textContent=n,r.width==="1px"}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),function(e,t,n){"use strict";function r(t){typeof module=="object"&&typeof module.exports=="object"?module.exports=t:typeof define=="function"&&define.amd&&define("picturefill",[],function(){return t}),typeof e=="object"&&(e.picturefill=t)}function o(e){var t,n,r,o,u,a=e||{};t=a.elements||i.getAllElements();for(var f=0,l=t.length;f<l;f++){n=t[f],r=n.parentNode,o=undefined,u=undefined;if(n.nodeName.toUpperCase()!=="IMG")continue;n[i.ns]||(n[i.ns]={});if(!a.reevaluate&&n[i.ns].evaluated)continue;if(r&&r.nodeName.toUpperCase()==="PICTURE"){i.removeVideoShim(r),o=i.getMatch(n,r);if(o===!1)continue}else o=undefined;(r&&r.nodeName.toUpperCase()==="PICTURE"||!i.sizesSupported&&n.srcset&&s.test(n.srcset))&&i.dodgeSrcset(n),o?(u=i.processSourceSet(o),i.applyBestCandidate(u,n)):(u=i.processSourceSet(n),(n.srcset===undefined||n[i.ns].srcset)&&i.applyBestCandidate(u,n)),n[i.ns].evaluated=!0}}function u(){function u(){clearTimeout(r),r=setTimeout(s,60)}i.initTypeDetects(),o();var n=setInterval(function(){o();if(/^loaded|^i|^c/.test(t.readyState)){clearInterval(n);return}},250),r,s=function(){o({reevaluate:!0})};e.addEventListener?e.addEventListener("resize",u,!1):e.attachEvent&&e.attachEvent("onresize",u)}if(e.HTMLPictureElement){r(function(){});return}t.createElement("picture");var i=e.picturefill||{},s=/\s+\+?\d+(e\d+)?w/;i.ns="picturefill",function(){i.srcsetSupported="srcset"in n,i.sizesSupported="sizes"in n,i.curSrcSupported="currentSrc"in n}(),i.trim=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},i.makeUrl=function(){var e=t.createElement("a");return function(t){return e.href=t,e.href}}(),i.restrictsMixedContent=function(){return e.location.protocol==="https:"},i.matchesMedia=function(t){return e.matchMedia&&e.matchMedia(t).matches},i.getDpr=function(){return e.devicePixelRatio||1},i.getWidthFromLength=function(e){var n;if(!e||e.indexOf("%")>-1!=0||!(parseFloat(e)>0||e.indexOf("calc(")>-1))return!1;e=e.replace("vw","%"),i.lengthEl||(i.lengthEl=t.createElement("div"),i.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",i.lengthEl.className="helper-from-picturefill-js"),i.lengthEl.style.width="0px";try{i.lengthEl.style.width=e}catch(r){}return t.body.appendChild(i.lengthEl),n=i.lengthEl.offsetWidth,n<=0&&(n=!1),t.body.removeChild(i.lengthEl),n},i.detectTypeSupport=function(t,n){var r=new e.Image;return r.onerror=function(){i.types[t]=!1,o()},r.onload=function(){i.types[t]=r.width===1,o()},r.src=n,"pending"},i.types=i.types||{},i.initTypeDetects=function(){i.types["image/jpeg"]=!0,i.types["image/gif"]=!0,i.types["image/png"]=!0,i.types["image/svg+xml"]=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),i.types["image/webp"]=i.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")},i.verifyTypeSupport=function(e){var t=e.getAttribute("type");if(t===null||t==="")return!0;var n=i.types[t];return typeof n=="string"&&n!=="pending"?(i.types[t]=i.detectTypeSupport(t,n),"pending"):typeof n=="function"?(n(),"pending"):n},i.parseSize=function(e){var t=/(\([^)]+\))?\s*(.+)/g.exec(e);return{media:t&&t[1],length:t&&t[2]}},i.findWidthFromSourceSize=function(n){var r=i.trim(n).split(/\s*,\s*/),s;for(var o=0,u=r.length;o<u;o++){var a=r[o],f=i.parseSize(a),l=f.length,c=f.media;if(!l)continue;if((!c||i.matchesMedia(c))&&(s=i.getWidthFromLength(l)))break}return s||Math.max(e.innerWidth||0,t.documentElement.clientWidth)},i.parseSrcset=function(e){var t=[];while(e!==""){e=e.replace(/^\s+/g,"");var n=e.search(/\s/g),r,i=null;if(n!==-1){r=e.slice(0,n);var s=r.slice(-1);if(s===","||r==="")r=r.replace(/,+$/,""),i="";e=e.slice(n+1);if(i===null){var o=e.indexOf(",");o!==-1?(i=e.slice(0,o),e=e.slice(o+1)):(i=e,e="")}}else r=e,e="";(r||i)&&t.push({url:r,descriptor:i})}return t},i.parseDescriptor=function(e,t){var n=t||"100vw",r=e&&e.replace(/(^\s+|\s+$)/g,""),s=i.findWidthFromSourceSize(n),o;if(r){var u=r.split(" ");for(var a=u.length-1;a>=0;a--){var f=u[a],l=f&&f.slice(f.length-1);if(l!=="h"&&l!=="w"||!!i.sizesSupported){if(l==="x"){var c=f&&parseFloat(f,10);o=c&&!isNaN(c)?c:1}}else o=parseFloat(parseInt(f,10)/s)}}return o||1},i.getCandidatesFromSourceSet=function(e,t){var n=i.parseSrcset(e),r=[];for(var s=0,o=n.length;s<o;s++){var u=n[s];r.push({url:u.url,resolution:i.parseDescriptor(u.descriptor,t)})}return r},i.dodgeSrcset=function(e){e.srcset&&(e[i.ns].srcset=e.srcset,e.srcset="",e.setAttribute("data-pfsrcset",e[i.ns].srcset))},i.processSourceSet=function(e){var t=e.getAttribute("srcset"),n=e.getAttribute("sizes"),r=[];return e.nodeName.toUpperCase()==="IMG"&&e[i.ns]&&e[i.ns].srcset&&(t=e[i.ns].srcset),t&&(r=i.getCandidatesFromSourceSet(t,n)),r},i.backfaceVisibilityFix=function(e){var t=e.style||{},n="webkitBackfaceVisibility"in t,r=t.zoom;n&&(t.zoom=".999",n=e.offsetWidth,t.zoom=r)},i.setIntrinsicSize=function(){var n={},r=function(e,t,n){t&&e.setAttribute("width",parseInt(t/n,10))};return function(s,o){var u;if(!s[i.ns]||e.pfStopIntrinsicSize)return;s[i.ns].dims===undefined&&(s[i.ns].dims=s.getAttribute("width")||s.getAttribute("height"));if(s[i.ns].dims)return;o.url in n?r(s,n[o.url],o.resolution):(u=t.createElement("img"),u.onload=function(){n[o.url]=u.width;if(!n[o.url])try{t.body.appendChild(u),n[o.url]=u.width||u.offsetWidth,t.body.removeChild(u)}catch(e){}s.src===o.url&&r(s,n[o.url],o.resolution),s=null,u.onload=null,u=null},u.src=o.url)}}(),i.applyBestCandidate=function(e,t){var n,r,s;e.sort(i.ascendingSort),r=e.length,s=e[r-1];for(var o=0;o<r;o++){n=e[o];if(n.resolution>=i.getDpr()){s=n;break}}s&&(s.url=i.makeUrl(s.url),t.src!==s.url&&(i.restrictsMixedContent()&&s.url.substr(0,"http:".length).toLowerCase()==="http:"?window.console!==undefined&&console.warn("Blocked mixed content image "+s.url):(t.src=s.url,i.curSrcSupported||(t.currentSrc=t.src),i.backfaceVisibilityFix(t))),i.setIntrinsicSize(t,s))},i.ascendingSort=function(e,t){return e.resolution-t.resolution},i.removeVideoShim=function(e){var t=e.getElementsByTagName("video");if(t.length){var n=t[0],r=n.getElementsByTagName("source");while(r.length)e.insertBefore(r[0],n);n.parentNode.removeChild(n)}},i.getAllElements=function(){var e=[],n=t.getElementsByTagName("img");for(var r=0,s=n.length;r<s;r++){var o=n[r];(o.parentNode.nodeName.toUpperCase()==="PICTURE"||o.getAttribute("srcset")!==null||o[i.ns]&&o[i.ns].srcset!==null)&&e.push(o)}return e},i.getMatch=function(e,t){var n=t.childNodes,r;for(var s=0,o=n.length;s<o;s++){var u=n[s];if(u.nodeType!==1)continue;if(u===e)return r;if(u.nodeName.toUpperCase()!=="SOURCE")continue;u.getAttribute("src")!==null&&typeof console!==undefined&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var a=u.getAttribute("media");if(!u.getAttribute("srcset"))continue;if(!a||i.matchesMedia(a)){var f=i.verifyTypeSupport(u);if(f===!0){r=u;break}if(f==="pending")return!1}}return r},u(),o._=i,r(o)}(window,window.document,new window.Image),define("polyfill/picturefill",function(){}),require.config({paths:{i18n:"../lib/i18n"}}),require(["govbar","anchor","cocoon","dropdown","polyfill/picturefill"],function(e,t,n,r){e(),t(".anchor"),n('[rel="video"], [rel="audio"]'),r(".dropdown .btn")}),define("main",function(){});