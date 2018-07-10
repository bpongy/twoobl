/*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e(t.bootstrap={},t.jQuery)}(this,function(t,e){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},e=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.forEach(function(t){var e,n,i;e=r,i=o[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return r}for(var r,n,o,a,l,f,h,u,d,p,g,m,_,v,E,y,b,T,C,w,I,D,A,S,O,N,k,L,P,x,j,M,R,H,W,F,U,B,K,V,Q,Y,G,q,z,X,J,Z,$,tt,et,nt,it,rt,ot,st,at,lt,ct,ft,ht,ut,dt,pt,gt=function(i){var e="transitionend";function t(t){var e=this,n=!1;return i(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(e)},t),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return 0<i(document).find(e).length?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],o=e[i],s=o&&l.isElement(o)?"element":(a=o,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+r+'".')}var a}};return i.fn.emulateTransitionEnd=t,i.event.special[l.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},l}(e=e&&e.hasOwnProperty("default")?e.default:e),mt=(n="alert",a="."+(o="bs.alert"),l=(r=e).fn[n],f={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},h="alert",u="fade",d="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){r.removeData(this._element,o),this._element=null},t._getRootElement=function(t){var e=gt.getSelectorFromElement(t),n=!1;return e&&(n=r(e)[0]),n||(n=r(t).closest("."+h)[0]),n},t._triggerCloseEvent=function(t){var e=r.Event(f.CLOSE);return r(t).trigger(e),e},t._removeElement=function(e){var n=this;if(r(e).removeClass(d),r(e).hasClass(u)){var t=gt.getTransitionDurationFromElement(e);r(e).one(gt.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){r(t).detach().trigger(f.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=r(this),e=t.data(o);e||(e=new i(this),t.data(o,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),i}(),r(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),r.fn[n]=p._jQueryInterface,r.fn[n].Constructor=p,r.fn[n].noConflict=function(){return r.fn[n]=l,p._jQueryInterface},p),_t=(m="button",v="."+(_="bs.button"),E=".data-api",y=(g=e).fn[m],b="active",T="btn",w='[data-toggle^="button"]',I='[data-toggle="buttons"]',D="input",A=".active",S=".btn",O={CLICK_DATA_API:"click"+v+E,FOCUS_BLUR_DATA_API:(C="focus")+v+E+" blur"+v+E},N=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(I)[0];if(n){var i=g(this._element).find(D)[0];if(i){if("radio"===i.type)if(i.checked&&g(this._element).hasClass(b))t=!1;else{var r=g(n).find(A)[0];r&&g(r).removeClass(b)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!g(this._element).hasClass(b),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!g(this._element).hasClass(b)),t&&g(this._element).toggleClass(b)},t.dispose=function(){g.removeData(this._element,_),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(_);t||(t=new n(this),g(this).data(_,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),n}(),g(document).on(O.CLICK_DATA_API,w,function(t){t.preventDefault();var e=t.target;g(e).hasClass(T)||(e=g(e).closest(S)),N._jQueryInterface.call(g(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,w,function(t){var e=g(t.target).closest(S)[0];g(e).toggleClass(C,/^focus(in)?$/.test(t.type))}),g.fn[m]=N._jQueryInterface,g.fn[m].Constructor=N,g.fn[m].noConflict=function(){return g.fn[m]=y,N._jQueryInterface},N),vt=(L="carousel",x="."+(P="bs.carousel"),j=".data-api",M=(k=e).fn[L],R={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},H={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},W="next",F="prev",U="left",B="right",K={SLIDE:"slide"+x,SLID:"slid"+x,KEYDOWN:"keydown"+x,MOUSEENTER:"mouseenter"+x,MOUSELEAVE:"mouseleave"+x,TOUCHEND:"touchend"+x,LOAD_DATA_API:"load"+x+j,CLICK_DATA_API:"click"+x+j},V="carousel",Q="active",Y="slide",G="carousel-item-right",q="carousel-item-left",z="carousel-item-next",X="carousel-item-prev",J={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},Z=function(){function o(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=k(t)[0],this._indicatorsElement=k(this._element).find(J.INDICATORS)[0],this._addEventListeners()}var t=o.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&k(this._element).is(":visible")&&"hidden"!==k(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(F)},t.pause=function(t){t||(this._isPaused=!0),k(this._element).find(J.NEXT_PREV)[0]&&(gt.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=k(this._element).find(J.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)k(this._element).one(K.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:F;this._slide(i,this._items[t])}},t.dispose=function(){k(this._element).off(x),k.removeData(this._element,P),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=c({},R,t),gt.typeCheckConfig(L,t,H),t},t._addEventListeners=function(){var e=this;this._config.keyboard&&k(this._element).on(K.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(k(this._element).on(K.MOUSEENTER,function(t){return e.pause(t)}).on(K.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&k(this._element).on(K.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=k.makeArray(k(t).parent().find(J.ITEM)),this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===F,r=this._getItemIndex(e),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return e;var s=(r+(t===F?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(k(this._element).find(J.ACTIVE_ITEM)[0]),r=k.Event(K.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return k(this._element).trigger(r),r},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){k(this._indicatorsElement).find(J.ACTIVE).removeClass(Q);var e=this._indicatorsElement.children[this._getItemIndex(t)];e&&k(e).addClass(Q)}},t._slide=function(t,e){var n,i,r,o=this,s=k(this._element).find(J.ACTIVE_ITEM)[0],a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),f=Boolean(this._interval);if(t===W?(n=q,i=z,r=U):(n=G,i=X,r=B),l&&k(l).hasClass(Q))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&s&&l){this._isSliding=!0,f&&this.pause(),this._setActiveIndicatorElement(l);var h=k.Event(K.SLID,{relatedTarget:l,direction:r,from:a,to:c});if(k(this._element).hasClass(Y)){k(l).addClass(i),gt.reflow(l),k(s).addClass(n),k(l).addClass(n);var u=gt.getTransitionDurationFromElement(s);k(s).one(gt.TRANSITION_END,function(){k(l).removeClass(n+" "+i).addClass(Q),k(s).removeClass(Q+" "+i+" "+n),o._isSliding=!1,setTimeout(function(){return k(o._element).trigger(h)},0)}).emulateTransitionEnd(u)}else k(s).removeClass(Q),k(l).addClass(Q),this._isSliding=!1,k(this._element).trigger(h);f&&this.cycle()}},o._jQueryInterface=function(i){return this.each(function(){var t=k(this).data(P),e=c({},R,k(this).data());"object"==typeof i&&(e=c({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new o(this,e),k(this).data(P,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},o._dataApiClickHandler=function(t){var e=gt.getSelectorFromElement(this);if(e){var n=k(e)[0];if(n&&k(n).hasClass(V)){var i=c({},k(n).data(),k(this).data()),r=this.getAttribute("data-slide-to");r&&(i.interval=!1),o._jQueryInterface.call(k(n),i),r&&k(n).data(P).to(r),t.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return R}}]),o}(),k(document).on(K.CLICK_DATA_API,J.DATA_SLIDE,Z._dataApiClickHandler),k(window).on(K.LOAD_DATA_API,function(){k(J.DATA_RIDE).each(function(){var t=k(this);Z._jQueryInterface.call(t,t.data())})}),k.fn[L]=Z._jQueryInterface,k.fn[L].Constructor=Z,k.fn[L].noConflict=function(){return k.fn[L]=M,Z._jQueryInterface},Z),Et=(tt="collapse",nt="."+(et="bs.collapse"),it=($=e).fn[tt],rt={toggle:!0,parent:""},ot={toggle:"boolean",parent:"(string|element)"},st={SHOW:"show"+nt,SHOWN:"shown"+nt,HIDE:"hide"+nt,HIDDEN:"hidden"+nt,CLICK_DATA_API:"click"+nt+".data-api"},at="show",lt="collapse",ct="collapsing",ft="collapsed",ht="width",ut="height",dt={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},pt=function(){function a(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=$.makeArray($('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=$(dt.DATA_TOGGLE),i=0;i<n.length;i++){var r=n[i],o=gt.getSelectorFromElement(r);null!==o&&0<$(o).filter(t).length&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){$(this._element).hasClass(at)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!$(this._element).hasClass(at)&&(this._parent&&0===(t=$.makeArray($(this._parent).find(dt.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(t=null),!(t&&(e=$(t).not(this._selector).data(et))&&e._isTransitioning))){var i=$.Event(st.SHOW);if($(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call($(t).not(this._selector),"hide"),e||$(t).data(et,null));var r=this._getDimension();$(this._element).removeClass(lt).addClass(ct),(this._element.style[r]=0)<this._triggerArray.length&&$(this._triggerArray).removeClass(ft).attr("aria-expanded",!0),this.setTransitioning(!0);var o="scroll"+(r[0].toUpperCase()+r.slice(1)),s=gt.getTransitionDurationFromElement(this._element);$(this._element).one(gt.TRANSITION_END,function(){$(n._element).removeClass(ct).addClass(lt).addClass(at),n._element.style[r]="",n.setTransitioning(!1),$(n._element).trigger(st.SHOWN)}).emulateTransitionEnd(s),this._element.style[r]=this._element[o]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&$(this._element).hasClass(at)){var e=$.Event(st.HIDE);if($(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",gt.reflow(this._element),$(this._element).addClass(ct).removeClass(lt).removeClass(at),0<this._triggerArray.length)for(var i=0;i<this._triggerArray.length;i++){var r=this._triggerArray[i],o=gt.getSelectorFromElement(r);if(null!==o)$(o).hasClass(at)||$(r).addClass(ft).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var s=gt.getTransitionDurationFromElement(this._element);$(this._element).one(gt.TRANSITION_END,function(){t.setTransitioning(!1),$(t._element).removeClass(ct).addClass(lt).trigger(st.HIDDEN)}).emulateTransitionEnd(s)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){$.removeData(this._element,et),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=c({},rt,t)).toggle=Boolean(t.toggle),gt.typeCheckConfig(tt,t,ot),t},t._getDimension=function(){return $(this._element).hasClass(ht)?ht:ut},t._getParent=function(){var n=this,t=null;gt.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=$(this._config.parent)[0];var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return $(t).find(e).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){if(t){var n=$(t).hasClass(at);0<e.length&&$(e).toggleClass(ft,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var e=gt.getSelectorFromElement(t);return e?$(e)[0]:null},a._jQueryInterface=function(i){return this.each(function(){var t=$(this),e=t.data(et),n=c({},rt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(et,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return rt}}]),a}(),$(document).on(st.CLICK_DATA_API,dt.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=$(this),e=gt.getSelectorFromElement(this);$(e).each(function(){var t=$(this),e=t.data(et)?"toggle":n.data();pt._jQueryInterface.call(t,e)})}),$.fn[tt]=pt._jQueryInterface,$.fn[tt].Constructor=pt,$.fn[tt].noConflict=function(){return $.fn[tt]=it,pt._jQueryInterface},pt),yt="undefined"!=typeof window&&"undefined"!=typeof document,bt=["Edge","Trident","Firefox"],Tt=0,Ct=0;Ct<bt.length;Ct+=1)if(yt&&0<=navigator.userAgent.indexOf(bt[Ct])){Tt=1;break}var wt=yt&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},Tt))}};function It(t){return t&&"[object Function]"==={}.toString.call(t)}function Dt(t,e){if(1!==t.nodeType)return[];var n=getComputedStyle(t,null);return e?n[e]:n}function At(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function St(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=Dt(t),n=e.overflow,i=e.overflowX,r=e.overflowY;return/(auto|scroll|overlay)/.test(n+r+i)?t:St(At(t))}var Ot=yt&&!(!window.MSInputMethodContext||!document.documentMode),Nt=yt&&/MSIE 10/.test(navigator.userAgent);function kt(t){return 11===t?Ot:10===t?Nt:Ot||Nt}function Lt(t){if(!t)return document.documentElement;for(var e=kt(10)?document.body:null,n=t.offsetParent;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TD","TABLE"].indexOf(n.nodeName)&&"static"===Dt(n,"position")?Lt(n):n:t?t.ownerDocument.documentElement:document.documentElement}function Pt(t){return null!==t.parentNode?Pt(t.parentNode):t}function xt(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,r=n?e:t,o=document.createRange();o.setStart(i,0),o.setEnd(r,0);var s,a,l=o.commonAncestorContainer;if(t!==l&&e!==l||i.contains(r))return"BODY"===(a=(s=l).nodeName)||"HTML"!==a&&Lt(s.firstElementChild)!==s?Lt(l):l;var c=Pt(t);return c.host?xt(c.host,e):xt(t,Pt(e).host)}function jt(t){var e="top"===(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){var i=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||i)[e]}return t[e]}function Mt(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+i+"Width"],10)}function Rt(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],kt(10)?n["offset"+t]+i["margin"+("Height"===t?"Top":"Left")]+i["margin"+("Height"===t?"Bottom":"Right")]:0)}function Ht(){var t=document.body,e=document.documentElement,n=kt(10)&&getComputedStyle(e);return{height:Rt("Height",t,e,n),width:Rt("Width",t,e,n)}}var Wt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Ft=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),Ut=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},Bt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function Kt(t){return Bt({},t,{right:t.left+t.width,bottom:t.top+t.height})}function Vt(t){var e={};try{if(kt(10)){e=t.getBoundingClientRect();var n=jt(t,"top"),i=jt(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var r={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},o="HTML"===t.nodeName?Ht():{},s=o.width||t.clientWidth||r.right-r.left,a=o.height||t.clientHeight||r.bottom-r.top,l=t.offsetWidth-s,c=t.offsetHeight-a;if(l||c){var f=Dt(t);l-=Mt(f,"x"),c-=Mt(f,"y"),r.width-=l,r.height-=c}return Kt(r)}function Qt(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=kt(10),r="HTML"===e.nodeName,o=Vt(t),s=Vt(e),a=St(t),l=Dt(e),c=parseFloat(l.borderTopWidth,10),f=parseFloat(l.borderLeftWidth,10);n&&"HTML"===e.nodeName&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var h=Kt({top:o.top-s.top-c,left:o.left-s.left-f,width:o.width,height:o.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=parseFloat(l.marginTop,10),d=parseFloat(l.marginLeft,10);h.top-=c-u,h.bottom-=c-u,h.left-=f-d,h.right-=f-d,h.marginTop=u,h.marginLeft=d}return(i&&!n?e.contains(a):e===a&&"BODY"!==a.nodeName)&&(h=function(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=jt(e,"top"),r=jt(e,"left"),o=n?-1:1;return t.top+=i*o,t.bottom+=i*o,t.left+=r*o,t.right+=r*o,t}(h,e)),h}function Yt(t){if(!t||!t.parentElement||kt())return document.documentElement;for(var e=t.parentElement;e&&"none"===Dt(e,"transform");)e=e.parentElement;return e||document.documentElement}function Gt(t,e,n,i){var r=4<arguments.length&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},s=r?Yt(t):xt(t,e);if("viewport"===i)o=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=Qt(t,n),r=Math.max(n.clientWidth,window.innerWidth||0),o=Math.max(n.clientHeight,window.innerHeight||0),s=e?0:jt(n),a=e?0:jt(n,"left");return Kt({top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:r,height:o})}(s,r);else{var a=void 0;"scrollParent"===i?"BODY"===(a=St(At(e))).nodeName&&(a=t.ownerDocument.documentElement):a="window"===i?t.ownerDocument.documentElement:i;var l=Qt(a,s,r);if("HTML"!==a.nodeName||function t(e){var n=e.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===Dt(e,"position")||t(At(e)))}(s))o=l;else{var c=Ht(),f=c.height,h=c.width;o.top+=l.top-l.marginTop,o.bottom=f+l.top,o.left+=l.left-l.marginLeft,o.right=h+l.left}}return o.left+=n,o.top+=n,o.right-=n,o.bottom-=n,o}function qt(t,e,i,n,r){var o=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=Gt(i,n,o,r),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map(function(t){return Bt({key:t},a[t],{area:(e=a[t],e.width*e.height)});var e}).sort(function(t,e){return e.area-t.area}),c=l.filter(function(t){var e=t.width,n=t.height;return e>=i.clientWidth&&n>=i.clientHeight}),f=0<c.length?c[0].key:l[0].key,h=t.split("-")[1];return f+(h?"-"+h:"")}function zt(t,e,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return Qt(n,i?Yt(e):xt(e,n),i)}function Xt(t){var e=getComputedStyle(t),n=parseFloat(e.marginTop)+parseFloat(e.marginBottom),i=parseFloat(e.marginLeft)+parseFloat(e.marginRight);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function Jt(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function Zt(t,e,n){n=n.split("-")[0];var i=Xt(t),r={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),s=o?"top":"left",a=o?"left":"top",l=o?"height":"width",c=o?"width":"height";return r[s]=e[s]+e[l]/2-i[l]/2,r[a]=n===a?e[a]-i[c]:e[Jt(a)],r}function $t(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function te(t,n,e){return(void 0===e?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});var i=$t(t,function(t){return t[e]===n});return t.indexOf(i)}(t,"name",e))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var e=t.function||t.fn;t.enabled&&It(e)&&(n.offsets.popper=Kt(n.offsets.popper),n.offsets.reference=Kt(n.offsets.reference),n=e(n,t))}),n}function ee(t,n){return t.some(function(t){var e=t.name;return t.enabled&&e===n})}function ne(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var r=e[i],o=r?""+r+n:t;if("undefined"!=typeof document.body.style[o])return o}return null}function ie(t){var e=t.ownerDocument;return e?e.defaultView:window}function re(t,e,n,i){n.updateBound=i,ie(t).addEventListener("resize",n.updateBound,{passive:!0});var r=St(t);return function t(e,n,i,r){var o="BODY"===e.nodeName,s=o?e.ownerDocument.defaultView:e;s.addEventListener(n,i,{passive:!0}),o||t(St(s.parentNode),n,i,r),r.push(s)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function oe(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,ie(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function se(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function ae(n,i){Object.keys(i).forEach(function(t){var e="";-1!==["width","height","top","right","bottom","left"].indexOf(t)&&se(i[t])&&(e="px"),n.style[t]=i[t]+e})}function le(t,e,n){var i=$t(t,function(t){return t.name===e}),r=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order});if(!r){var o="`"+e+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}var ce=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],fe=ce.slice(3);function he(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=fe.indexOf(t),i=fe.slice(n+1).concat(fe.slice(0,n));return e?i.reverse():i}var ue={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function de(t,r,o,e){var s=[0,0],a=-1!==["right","left"].indexOf(e),n=t.split(/(\+|\-)/).map(function(t){return t.trim()}),i=n.indexOf($t(n,function(t){return-1!==t.search(/,|\s/)}));n[i]&&-1===n[i].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==i?[n.slice(0,i).concat([n[i].split(l)[0]]),[n[i].split(l)[1]].concat(n.slice(i+1))]:[n];return(c=c.map(function(t,e){var n=(1===e?!a:a)?"height":"width",i=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,i=!0,t):i?(t[t.length-1]+=e,i=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,i){var r=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+r[1],s=r[2];if(!o)return t;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return Kt(a)[e]/100*o}if("vh"===s||"vw"===s)return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o;return o}(t,n,r,o)})})).forEach(function(n,i){n.forEach(function(t,e){se(t)&&(s[i]+=t*("-"===n[e-1]?-1:1))})}),s}var pe={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var r=t.offsets,o=r.reference,s=r.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",f={start:Ut({},l,o[l]),end:Ut({},l,o[l]+o[c]-s[c])};t.offsets.popper=Bt({},s,f[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,i=t.placement,r=t.offsets,o=r.popper,s=r.reference,a=i.split("-")[0],l=void 0;return l=se(+n)?[+n,0]:de(n,o,s,a),"left"===a?(o.top+=l[0],o.left-=l[1]):"right"===a?(o.top+=l[0],o.left+=l[1]):"top"===a?(o.left+=l[0],o.top-=l[1]):"bottom"===a&&(o.left+=l[0],o.top+=l[1]),t.popper=o,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,i){var e=i.boundariesElement||Lt(t.instance.popper);t.instance.reference===e&&(e=Lt(e));var n=ne("transform"),r=t.instance.popper.style,o=r.top,s=r.left,a=r[n];r.top="",r.left="",r[n]="";var l=Gt(t.instance.popper,t.instance.reference,i.padding,e,t.positionFixed);r.top=o,r.left=s,r[n]=a,i.boundaries=l;var c=i.priority,f=t.offsets.popper,h={primary:function(t){var e=f[t];return f[t]<l[t]&&!i.escapeWithReference&&(e=Math.max(f[t],l[t])),Ut({},t,e)},secondary:function(t){var e="right"===t?"left":"top",n=f[e];return f[t]>l[t]&&!i.escapeWithReference&&(n=Math.min(f[e],l[t]-("right"===t?f.width:f.height))),Ut({},e,n)}};return c.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";f=Bt({},f,h[e](t))}),t.offsets.popper=f,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,r=t.placement.split("-")[0],o=Math.floor,s=-1!==["top","bottom"].indexOf(r),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<o(i[l])&&(t.offsets.popper[l]=o(i[l])-n[c]),n[l]>o(i[a])&&(t.offsets.popper[l]=o(i[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!le(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var r=t.placement.split("-")[0],o=t.offsets,s=o.popper,a=o.reference,l=-1!==["left","right"].indexOf(r),c=l?"height":"width",f=l?"Top":"Left",h=f.toLowerCase(),u=l?"left":"top",d=l?"bottom":"right",p=Xt(i)[c];a[d]-p<s[h]&&(t.offsets.popper[h]-=s[h]-(a[d]-p)),a[h]+p>s[d]&&(t.offsets.popper[h]+=a[h]+p-s[d]),t.offsets.popper=Kt(t.offsets.popper);var g=a[h]+a[c]/2-p/2,m=Dt(t.instance.popper),_=parseFloat(m["margin"+f],10),v=parseFloat(m["border"+f+"Width"],10),E=g-t.offsets.popper[h]-_-v;return E=Math.max(Math.min(s[c]-p,E),0),t.arrowElement=i,t.offsets.arrow=(Ut(n={},h,Math.round(E)),Ut(n,u,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(p,g){if(ee(p.instance.modifiers,"inner"))return p;if(p.flipped&&p.placement===p.originalPlacement)return p;var m=Gt(p.instance.popper,p.instance.reference,g.padding,g.boundariesElement,p.positionFixed),_=p.placement.split("-")[0],v=Jt(_),E=p.placement.split("-")[1]||"",y=[];switch(g.behavior){case ue.FLIP:y=[_,v];break;case ue.CLOCKWISE:y=he(_);break;case ue.COUNTERCLOCKWISE:y=he(_,!0);break;default:y=g.behavior}return y.forEach(function(t,e){if(_!==t||y.length===e+1)return p;_=p.placement.split("-")[0],v=Jt(_);var n,i=p.offsets.popper,r=p.offsets.reference,o=Math.floor,s="left"===_&&o(i.right)>o(r.left)||"right"===_&&o(i.left)<o(r.right)||"top"===_&&o(i.bottom)>o(r.top)||"bottom"===_&&o(i.top)<o(r.bottom),a=o(i.left)<o(m.left),l=o(i.right)>o(m.right),c=o(i.top)<o(m.top),f=o(i.bottom)>o(m.bottom),h="left"===_&&a||"right"===_&&l||"top"===_&&c||"bottom"===_&&f,u=-1!==["top","bottom"].indexOf(_),d=!!g.flipVariations&&(u&&"start"===E&&a||u&&"end"===E&&l||!u&&"start"===E&&c||!u&&"end"===E&&f);(s||h||d)&&(p.flipped=!0,(s||h)&&(_=y[e+1]),d&&(E="end"===(n=E)?"start":"start"===n?"end":n),p.placement=_+(E?"-"+E:""),p.offsets.popper=Bt({},p.offsets.popper,Zt(p.instance.popper,p.offsets.reference,p.placement)),p=te(p.instance.modifiers,p,"flip"))}),p},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,r=i.popper,o=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return r[s?"left":"top"]=o[n]-(a?r[s?"width":"height"]:0),t.placement=Jt(e),t.offsets.popper=Kt(r),t}},hide:{order:800,enabled:!0,fn:function(t){if(!le(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=$t(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,r=t.offsets.popper,o=$t(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==o?o:e.gpuAcceleration,a=Vt(Lt(t.instance.popper)),l={position:r.position},c={left:Math.floor(r.left),top:Math.round(r.top),bottom:Math.round(r.bottom),right:Math.floor(r.right)},f="bottom"===n?"top":"bottom",h="right"===i?"left":"right",u=ne("transform"),d=void 0,p=void 0;if(p="bottom"===f?-a.height+c.bottom:c.top,d="right"===h?-a.width+c.right:c.left,s&&u)l[u]="translate3d("+d+"px, "+p+"px, 0)",l[f]=0,l[h]=0,l.willChange="transform";else{var g="bottom"===f?-1:1,m="right"===h?-1:1;l[f]=p*g,l[h]=d*m,l.willChange=f+", "+h}var _={"x-placement":t.placement};return t.attributes=Bt({},_,t.attributes),t.styles=Bt({},l,t.styles),t.arrowStyles=Bt({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return ae(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&ae(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,r){var o=zt(r,e,t,n.positionFixed),s=qt(n.placement,o,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",s),ae(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},ge=function(){function o(t,e){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};Wt(this,o),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=wt(this.update.bind(this)),this.options=Bt({},o.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=e&&e.jquery?e[0]:e,this.options.modifiers={},Object.keys(Bt({},o.Defaults.modifiers,i.modifiers)).forEach(function(t){n.options.modifiers[t]=Bt({},o.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return Bt({name:t},n.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&It(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return Ft(o,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=zt(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=qt(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=Zt(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=te(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,ee(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[ne("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=re(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return oe.call(this)}}]),o}();ge.Utils=("undefined"!=typeof window?window:global).PopperUtils,ge.placements=ce,ge.Defaults=pe;var me,_e,ve,Ee,ye,be,Te,Ce,we,Ie,De,Ae,Se,Oe,Ne,ke,Le,Pe,xe,je,Me,Re,He,We,Fe,Ue,Be,Ke,Ve,Qe,Ye,Ge,qe,ze,Xe,Je,Ze,$e,tn,en,nn,rn,on,sn,an,ln,cn,fn,hn,un,dn,pn,gn,mn,_n,vn,En,yn,bn,Tn,Cn,wn,In,Dn,An,Sn,On,Nn,kn,Ln,Pn,xn,jn,Mn,Rn,Hn,Wn,Fn,Un,Bn,Kn,Vn,Qn,Yn,Gn,qn,zn,Xn,Jn,Zn,$n,ti,ei,ni,ii,ri,oi,si,ai,li,ci,fi,hi,ui,di,pi,gi,mi,_i,vi,Ei,yi,bi,Ti=(_e="dropdown",Ee="."+(ve="bs.dropdown"),ye=".data-api",be=(me=e).fn[_e],Te=new RegExp("38|40|27"),Ce={HIDE:"hide"+Ee,HIDDEN:"hidden"+Ee,SHOW:"show"+Ee,SHOWN:"shown"+Ee,CLICK:"click"+Ee,CLICK_DATA_API:"click"+Ee+ye,KEYDOWN_DATA_API:"keydown"+Ee+ye,KEYUP_DATA_API:"keyup"+Ee+ye},we="disabled",Ie="show",De="dropup",Ae="dropright",Se="dropleft",Oe="dropdown-menu-right",Ne="position-static",ke='[data-toggle="dropdown"]',Le=".dropdown form",Pe=".dropdown-menu",xe=".navbar-nav",je=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Me="top-start",Re="top-end",He="bottom-start",We="bottom-end",Fe="right-start",Ue="left-start",Be={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Ke={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Ve=function(){function l(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=l.prototype;return t.toggle=function(){if(!this._element.disabled&&!me(this._element).hasClass(we)){var t=l._getParentFromElement(this._element),e=me(this._menu).hasClass(Ie);if(l._clearMenus(),!e){var n={relatedTarget:this._element},i=me.Event(Ce.SHOW,n);if(me(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof ge)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=t:gt.isElement(this._config.reference)&&(r=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&me(t).addClass(Ne),this._popper=new ge(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===me(t).closest(xe).length&&me(document.body).children().on("mouseover",null,me.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),me(this._menu).toggleClass(Ie),me(t).toggleClass(Ie).trigger(me.Event(Ce.SHOWN,n))}}}},t.dispose=function(){me.removeData(this._element,ve),me(this._element).off(Ee),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;me(this._element).on(Ce.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=c({},this.constructor.Default,me(this._element).data(),t),gt.typeCheckConfig(_e,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=l._getParentFromElement(this._element);this._menu=me(t).find(Pe)[0]}return this._menu},t._getPlacement=function(){var t=me(this._element).parent(),e=He;return t.hasClass(De)?(e=Me,me(this._menu).hasClass(Oe)&&(e=Re)):t.hasClass(Ae)?e=Fe:t.hasClass(Se)?e=Ue:me(this._menu).hasClass(Oe)&&(e=We),e},t._detectNavbar=function(){return 0<me(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=c({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},l._jQueryInterface=function(e){return this.each(function(){var t=me(this).data(ve);if(t||(t=new l(this,"object"==typeof e?e:null),me(this).data(ve,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},l._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=me.makeArray(me(ke)),n=0;n<e.length;n++){var i=l._getParentFromElement(e[n]),r=me(e[n]).data(ve),o={relatedTarget:e[n]};if(r){var s=r._menu;if(me(i).hasClass(Ie)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&me.contains(i,t.target))){var a=me.Event(Ce.HIDE,o);me(i).trigger(a),a.isDefaultPrevented()||("ontouchstart"in document.documentElement&&me(document.body).children().off("mouseover",null,me.noop),e[n].setAttribute("aria-expanded","false"),me(s).removeClass(Ie),me(i).removeClass(Ie).trigger(me.Event(Ce.HIDDEN,o)))}}}},l._getParentFromElement=function(t){var e,n=gt.getSelectorFromElement(t);return n&&(e=me(n)[0]),e||t.parentNode},l._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||me(t.target).closest(Pe).length)):Te.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!me(this).hasClass(we))){var e=l._getParentFromElement(this),n=me(e).hasClass(Ie);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=me(e).find(je).get();if(0!==i.length){var r=i.indexOf(t.target);38===t.which&&0<r&&r--,40===t.which&&r<i.length-1&&r++,r<0&&(r=0),i[r].focus()}}else{if(27===t.which){var o=me(e).find(ke)[0];me(o).trigger("focus")}me(this).trigger("click")}}},s(l,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return Be}},{key:"DefaultType",get:function(){return Ke}}]),l}(),me(document).on(Ce.KEYDOWN_DATA_API,ke,Ve._dataApiKeydownHandler).on(Ce.KEYDOWN_DATA_API,Pe,Ve._dataApiKeydownHandler).on(Ce.CLICK_DATA_API+" "+Ce.KEYUP_DATA_API,Ve._clearMenus).on(Ce.CLICK_DATA_API,ke,function(t){t.preventDefault(),t.stopPropagation(),Ve._jQueryInterface.call(me(this),"toggle")}).on(Ce.CLICK_DATA_API,Le,function(t){t.stopPropagation()}),me.fn[_e]=Ve._jQueryInterface,me.fn[_e].Constructor=Ve,me.fn[_e].noConflict=function(){return me.fn[_e]=be,Ve._jQueryInterface},Ve),Ci=(Ye="modal",qe="."+(Ge="bs.modal"),ze=(Qe=e).fn[Ye],Xe={backdrop:!0,keyboard:!0,focus:!0,show:!0},Je={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Ze={HIDE:"hide"+qe,HIDDEN:"hidden"+qe,SHOW:"show"+qe,SHOWN:"shown"+qe,FOCUSIN:"focusin"+qe,RESIZE:"resize"+qe,CLICK_DISMISS:"click.dismiss"+qe,KEYDOWN_DISMISS:"keydown.dismiss"+qe,MOUSEUP_DISMISS:"mouseup.dismiss"+qe,MOUSEDOWN_DISMISS:"mousedown.dismiss"+qe,CLICK_DATA_API:"click"+qe+".data-api"},$e="modal-scrollbar-measure",tn="modal-backdrop",en="modal-open",nn="fade",rn="show",on={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},sn=function(){function r(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=Qe(t).find(on.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var t=r.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){Qe(this._element).hasClass(nn)&&(this._isTransitioning=!0);var n=Qe.Event(Ze.SHOW,{relatedTarget:t});Qe(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),Qe(document.body).addClass(en),this._setEscapeEvent(),this._setResizeEvent(),Qe(this._element).on(Ze.CLICK_DISMISS,on.DATA_DISMISS,function(t){return e.hide(t)}),Qe(this._dialog).on(Ze.MOUSEDOWN_DISMISS,function(){Qe(e._element).one(Ze.MOUSEUP_DISMISS,function(t){Qe(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=Qe.Event(Ze.HIDE);if(Qe(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=Qe(this._element).hasClass(nn);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),Qe(document).off(Ze.FOCUSIN),Qe(this._element).removeClass(rn),Qe(this._element).off(Ze.CLICK_DISMISS),Qe(this._dialog).off(Ze.MOUSEDOWN_DISMISS),i){var r=gt.getTransitionDurationFromElement(this._element);Qe(this._element).one(gt.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},t.dispose=function(){Qe.removeData(this._element,Ge),Qe(window,document,this._element,this._backdrop).off(qe),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=c({},Xe,t),gt.typeCheckConfig(Ye,t,Je),t},t._showElement=function(t){var e=this,n=Qe(this._element).hasClass(nn);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&gt.reflow(this._element),Qe(this._element).addClass(rn),this._config.focus&&this._enforceFocus();var i=Qe.Event(Ze.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,Qe(e._element).trigger(i)};if(n){var o=gt.getTransitionDurationFromElement(this._element);Qe(this._dialog).one(gt.TRANSITION_END,r).emulateTransitionEnd(o)}else r()},t._enforceFocus=function(){var e=this;Qe(document).off(Ze.FOCUSIN).on(Ze.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===Qe(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?Qe(this._element).on(Ze.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||Qe(this._element).off(Ze.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?Qe(window).on(Ze.RESIZE,function(t){return e.handleUpdate(t)}):Qe(window).off(Ze.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){Qe(document.body).removeClass(en),t._resetAdjustments(),t._resetScrollbar(),Qe(t._element).trigger(Ze.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(Qe(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=Qe(this._element).hasClass(nn)?nn:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=tn,n&&Qe(this._backdrop).addClass(n),Qe(this._backdrop).appendTo(document.body),Qe(this._element).on(Ze.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&gt.reflow(this._backdrop),Qe(this._backdrop).addClass(rn),!t)return;if(!n)return void t();var i=gt.getTransitionDurationFromElement(this._backdrop);Qe(this._backdrop).one(gt.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){Qe(this._backdrop).removeClass(rn);var r=function(){e._removeBackdrop(),t&&t()};if(Qe(this._element).hasClass(nn)){var o=gt.getTransitionDurationFromElement(this._backdrop);Qe(this._backdrop).one(gt.TRANSITION_END,r).emulateTransitionEnd(o)}else r()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){Qe(on.FIXED_CONTENT).each(function(t,e){var n=Qe(e)[0].style.paddingRight,i=Qe(e).css("padding-right");Qe(e).data("padding-right",n).css("padding-right",parseFloat(i)+r._scrollbarWidth+"px")}),Qe(on.STICKY_CONTENT).each(function(t,e){var n=Qe(e)[0].style.marginRight,i=Qe(e).css("margin-right");Qe(e).data("margin-right",n).css("margin-right",parseFloat(i)-r._scrollbarWidth+"px")}),Qe(on.NAVBAR_TOGGLER).each(function(t,e){var n=Qe(e)[0].style.marginRight,i=Qe(e).css("margin-right");Qe(e).data("margin-right",n).css("margin-right",parseFloat(i)+r._scrollbarWidth+"px")});var t=document.body.style.paddingRight,e=Qe(document.body).css("padding-right");Qe(document.body).data("padding-right",t).css("padding-right",parseFloat(e)+this._scrollbarWidth+"px")}},t._resetScrollbar=function(){Qe(on.FIXED_CONTENT).each(function(t,e){var n=Qe(e).data("padding-right");"undefined"!=typeof n&&Qe(e).css("padding-right",n).removeData("padding-right")}),Qe(on.STICKY_CONTENT+", "+on.NAVBAR_TOGGLER).each(function(t,e){var n=Qe(e).data("margin-right");"undefined"!=typeof n&&Qe(e).css("margin-right",n).removeData("margin-right")});var t=Qe(document.body).data("padding-right");"undefined"!=typeof t&&Qe(document.body).css("padding-right",t).removeData("padding-right")},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=$e,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},r._jQueryInterface=function(n,i){return this.each(function(){var t=Qe(this).data(Ge),e=c({},Xe,Qe(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new r(this,e),Qe(this).data(Ge,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(r,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return Xe}}]),r}(),Qe(document).on(Ze.CLICK_DATA_API,on.DATA_TOGGLE,function(t){var e,n=this,i=gt.getSelectorFromElement(this);i&&(e=Qe(i)[0]);var r=Qe(e).data(Ge)?"toggle":c({},Qe(e).data(),Qe(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var o=Qe(e).one(Ze.SHOW,function(t){t.isDefaultPrevented()||o.one(Ze.HIDDEN,function(){Qe(n).is(":visible")&&n.focus()})});sn._jQueryInterface.call(Qe(e),r,this)}),Qe.fn[Ye]=sn._jQueryInterface,Qe.fn[Ye].Constructor=sn,Qe.fn[Ye].noConflict=function(){return Qe.fn[Ye]=ze,sn._jQueryInterface},sn),wi=(ln="tooltip",fn="."+(cn="bs.tooltip"),hn=(an=e).fn[ln],un="bs-tooltip",dn=new RegExp("(^|\\s)"+un+"\\S+","g"),mn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(gn={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(pn={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},vn="out",En={HIDE:"hide"+fn,HIDDEN:"hidden"+fn,SHOW:(_n="show")+fn,SHOWN:"shown"+fn,INSERTED:"inserted"+fn,CLICK:"click"+fn,FOCUSIN:"focusin"+fn,FOCUSOUT:"focusout"+fn,MOUSEENTER:"mouseenter"+fn,MOUSELEAVE:"mouseleave"+fn},yn="fade",bn="show",Tn=".tooltip-inner",Cn=".arrow",wn="hover",In="focus",Dn="click",An="manual",Sn=function(){function i(t,e){if("undefined"==typeof ge)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=an(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),an(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(an(this.getTipElement()).hasClass(bn))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),an.removeData(this.element,this.constructor.DATA_KEY),an(this.element).off(this.constructor.EVENT_KEY),an(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&an(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===an(this.element).css("display"))throw new Error("Please use show on visible elements");var t=an.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){an(this.element).trigger(t);var n=an.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),r=gt.getUID(this.constructor.NAME);i.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&an(i).addClass(yn);var o="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,s=this._getAttachment(o);this.addAttachmentClass(s);var a=!1===this.config.container?document.body:an(this.config.container);an(i).data(this.constructor.DATA_KEY,this),an.contains(this.element.ownerDocument.documentElement,this.tip)||an(i).appendTo(a),an(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new ge(this.element,i,{placement:s,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:Cn},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),an(i).addClass(bn),"ontouchstart"in document.documentElement&&an(document.body).children().on("mouseover",null,an.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,an(e.element).trigger(e.constructor.Event.SHOWN),t===vn&&e._leave(null,e)};if(an(this.tip).hasClass(yn)){var c=gt.getTransitionDurationFromElement(this.tip);an(this.tip).one(gt.TRANSITION_END,l).emulateTransitionEnd(c)}else l()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=an.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==_n&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),an(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(an(this.element).trigger(i),!i.isDefaultPrevented()){if(an(n).removeClass(bn),"ontouchstart"in document.documentElement&&an(document.body).children().off("mouseover",null,an.noop),this._activeTrigger[Dn]=!1,this._activeTrigger[In]=!1,this._activeTrigger[wn]=!1,an(this.tip).hasClass(yn)){var o=gt.getTransitionDurationFromElement(n);an(n).one(gt.TRANSITION_END,r).emulateTransitionEnd(o)}else r();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){an(this.getTipElement()).addClass(un+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||an(this.config.template)[0],this.tip},t.setContent=function(){var t=an(this.getTipElement());this.setElementContent(t.find(Tn),this.getTitle()),t.removeClass(yn+" "+bn)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?an(e).parent().is(t)||t.empty().append(e):t.text(an(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getAttachment=function(t){return gn[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)an(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==An){var e=t===wn?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===wn?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;an(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}an(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=c({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||an(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),an(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?In:wn]=!0),an(e.getTipElement()).hasClass(bn)||e._hoverState===_n?e._hoverState=_n:(clearTimeout(e._timeout),e._hoverState=_n,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===_n&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||an(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),an(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?In:wn]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=vn,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===vn&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=c({},this.constructor.Default,an(this.element).data(),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),gt.typeCheckConfig(ln,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=an(this.getTipElement()),e=t.attr("class").match(dn);null!==e&&0<e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(an(t).removeClass(yn),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=an(this).data(cn),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),an(this).data(cn,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return mn}},{key:"NAME",get:function(){return ln}},{key:"DATA_KEY",get:function(){return cn}},{key:"Event",get:function(){return En}},{key:"EVENT_KEY",get:function(){return fn}},{key:"DefaultType",get:function(){return pn}}]),i}(),an.fn[ln]=Sn._jQueryInterface,an.fn[ln].Constructor=Sn,an.fn[ln].noConflict=function(){return an.fn[ln]=hn,Sn._jQueryInterface},Sn),Ii=(Nn="popover",Ln="."+(kn="bs.popover"),Pn=(On=e).fn[Nn],xn="bs-popover",jn=new RegExp("(^|\\s)"+xn+"\\S+","g"),Mn=c({},wi.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Rn=c({},wi.DefaultType,{content:"(string|element|function)"}),Hn="fade",Fn=".popover-header",Un=".popover-body",Bn={HIDE:"hide"+Ln,HIDDEN:"hidden"+Ln,SHOW:(Wn="show")+Ln,SHOWN:"shown"+Ln,INSERTED:"inserted"+Ln,CLICK:"click"+Ln,FOCUSIN:"focusin"+Ln,FOCUSOUT:"focusout"+Ln,MOUSEENTER:"mouseenter"+Ln,MOUSELEAVE:"mouseleave"+Ln},Kn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){On(this.getTipElement()).addClass(xn+"-"+t)},r.getTipElement=function(){return this.tip=this.tip||On(this.config.template)[0],this.tip},r.setContent=function(){var t=On(this.getTipElement());this.setElementContent(t.find(Fn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(Un),e),t.removeClass(Hn+" "+Wn)},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=On(this.getTipElement()),e=t.attr("class").match(jn);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=On(this).data(kn),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),On(this).data(kn,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return Mn}},{key:"NAME",get:function(){return Nn}},{key:"DATA_KEY",get:function(){return kn}},{key:"Event",get:function(){return Bn}},{key:"EVENT_KEY",get:function(){return Ln}},{key:"DefaultType",get:function(){return Rn}}]),i}(wi),On.fn[Nn]=Kn._jQueryInterface,On.fn[Nn].Constructor=Kn,On.fn[Nn].noConflict=function(){return On.fn[Nn]=Pn,Kn._jQueryInterface},Kn),Di=(Qn="scrollspy",Gn="."+(Yn="bs.scrollspy"),qn=(Vn=e).fn[Qn],zn={offset:10,method:"auto",target:""},Xn={offset:"number",method:"string",target:"(string|element)"},Jn={ACTIVATE:"activate"+Gn,SCROLL:"scroll"+Gn,LOAD_DATA_API:"load"+Gn+".data-api"},Zn="dropdown-item",$n="active",ti={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},ei="offset",ni="position",ii=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+ti.NAV_LINKS+","+this._config.target+" "+ti.LIST_ITEMS+","+this._config.target+" "+ti.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,Vn(this._scrollElement).on(Jn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?ei:ni,r="auto"===this._config.method?t:this._config.method,o=r===ni?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),Vn.makeArray(Vn(this._selector)).map(function(t){var e,n=gt.getSelectorFromElement(t);if(n&&(e=Vn(n)[0]),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[Vn(e)[r]().top+o,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){Vn.removeData(this._element,Yn),Vn(this._scrollElement).off(Gn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=c({},zn,"object"==typeof t&&t?t:{})).target){var e=Vn(t.target).attr("id");e||(e=gt.getUID(Qn),Vn(t.target).attr("id",e)),t.target="#"+e}return gt.typeCheckConfig(Qn,t,Xn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=Vn(t.join(","));n.hasClass(Zn)?(n.closest(ti.DROPDOWN).find(ti.DROPDOWN_TOGGLE).addClass($n),n.addClass($n)):(n.addClass($n),n.parents(ti.NAV_LIST_GROUP).prev(ti.NAV_LINKS+", "+ti.LIST_ITEMS).addClass($n),n.parents(ti.NAV_LIST_GROUP).prev(ti.NAV_ITEMS).children(ti.NAV_LINKS).addClass($n)),Vn(this._scrollElement).trigger(Jn.ACTIVATE,{relatedTarget:e})},t._clear=function(){Vn(this._selector).filter(ti.ACTIVE).removeClass($n)},n._jQueryInterface=function(e){return this.each(function(){var t=Vn(this).data(Yn);if(t||(t=new n(this,"object"==typeof e&&e),Vn(this).data(Yn,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return zn}}]),n}(),Vn(window).on(Jn.LOAD_DATA_API,function(){for(var t=Vn.makeArray(Vn(ti.DATA_SPY)),e=t.length;e--;){var n=Vn(t[e]);ii._jQueryInterface.call(n,n.data())}}),Vn.fn[Qn]=ii._jQueryInterface,Vn.fn[Qn].Constructor=ii,Vn.fn[Qn].noConflict=function(){return Vn.fn[Qn]=qn,ii._jQueryInterface},ii),Ai=(si="."+(oi="bs.tab"),ai=(ri=e).fn.tab,li={HIDE:"hide"+si,HIDDEN:"hidden"+si,SHOW:"show"+si,SHOWN:"shown"+si,CLICK_DATA_API:"click"+si+".data-api"},ci="dropdown-menu",fi="active",hi="disabled",ui="fade",di="show",pi=".dropdown",gi=".nav, .list-group",mi=".active",_i="> li > .active",vi='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Ei=".dropdown-toggle",yi="> .dropdown-menu .active",bi=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&ri(this._element).hasClass(fi)||ri(this._element).hasClass(hi))){var t,i,e=ri(this._element).closest(gi)[0],r=gt.getSelectorFromElement(this._element);if(e){var o="UL"===e.nodeName?_i:mi;i=(i=ri.makeArray(ri(e).find(o)))[i.length-1]}var s=ri.Event(li.HIDE,{relatedTarget:this._element}),a=ri.Event(li.SHOW,{relatedTarget:i});if(i&&ri(i).trigger(s),ri(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(t=ri(r)[0]),this._activate(this._element,e);var l=function(){var t=ri.Event(li.HIDDEN,{relatedTarget:n._element}),e=ri.Event(li.SHOWN,{relatedTarget:i});ri(i).trigger(t),ri(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){ri.removeData(this._element,oi),this._element=null},t._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?ri(e).find(_i):ri(e).children(mi))[0],o=n&&r&&ri(r).hasClass(ui),s=function(){return i._transitionComplete(t,r,n)};if(r&&o){var a=gt.getTransitionDurationFromElement(r);ri(r).one(gt.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){ri(e).removeClass(di+" "+fi);var i=ri(e.parentNode).find(yi)[0];i&&ri(i).removeClass(fi),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(ri(t).addClass(fi),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),gt.reflow(t),ri(t).addClass(di),t.parentNode&&ri(t.parentNode).hasClass(ci)){var r=ri(t).closest(pi)[0];r&&ri(r).find(Ei).addClass(fi),t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=ri(this),e=t.data(oi);if(e||(e=new i(this),t.data(oi,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),i}(),ri(document).on(li.CLICK_DATA_API,vi,function(t){t.preventDefault(),bi._jQueryInterface.call(ri(this),"show")}),ri.fn.tab=bi._jQueryInterface,ri.fn.tab.Constructor=bi,ri.fn.tab.noConflict=function(){return ri.fn.tab=ai,bi._jQueryInterface},bi);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=gt,t.Alert=mt,t.Button=_t,t.Carousel=vt,t.Collapse=Et,t.Dropdown=Ti,t.Modal=Ci,t.Popover=Ii,t.Scrollspy=Di,t.Tab=Ai,t.Tooltip=wi,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.bundle.min.js.map
// ==================================================
// fancyBox v3.1.20
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
;(function (window, document, $, undefined) {
	'use strict';

	// If there's no jQuery, fancyBox can't work
	// =========================================

	if ( !$ ) {
		return;
	}

	// Check if fancyBox is already initialized
	// ========================================

	if ( $.fn.fancybox ) {

		$.error('fancyBox already initialized');

		return;
	}

	// Private default settings
	// ========================

	var defaults = {

		// Enable infinite gallery navigation
		loop : false,

		// Space around image, ignored if zoomed-in or viewport smaller than 800px
		margin : [44, 0],

		// Horizontal space between slides
		gutter : 50,

		// Enable keyboard navigation
		keyboard : true,

		// Should display navigation arrows at the screen edges
		arrows : true,

		// Should display infobar (counter and arrows at the top)
		infobar : false,

		// Should display toolbar (buttons at the top)
		toolbar : true,

		// What buttons should appear in the top right corner.
		// Buttons will be created using templates from `btnTpl` option
		// and they will be placed into toolbar (class="fancybox-toolbar"` element)
		buttons : [
			'slideShow',
			'fullScreen',
			'thumbs',
			'close'
		],

		// Detect "idle" time in seconds
		idleTime : 4,

		// Should display buttons at top right corner of the content
		// If 'auto' - they will be created for content having type 'html', 'inline' or 'ajax'
		// Use template from `btnTpl.smallBtn` for customization
		smallBtn : 'auto',

		// Disable right-click and use simple image protection for images
		protect : false,

		// Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
		modal : false,

		image : {

			// Wait for images to load before displaying
			// Requires predefined image dimensions
			// If 'auto' - will zoom in thumbnail if 'width' and 'height' attributes are found
			preload : "auto",

		},

		ajax : {

			// Object containing settings for ajax request
			settings : {

				// This helps to indicate that request comes from the modal
				// Feel free to change naming
				data : {
					fancybox : true
				}
			}

		},

		iframe : {

			// Iframe template
			tpl : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',

			// Preload iframe before displaying it
			// This allows to calculate iframe content width and height
			// (note: Due to "Same Origin Policy", you can't get cross domain data).
			preload : true,

			// Custom CSS styling for iframe wrapping element
			// You can use this to set custom iframe dimensions
			css : {},

			// Iframe tag attributes
			attr : {
				scrolling : 'auto'
			}

		},

		// Open/close animation type
		// Possible values:
		//   false            - disable
		//   "zoom"           - zoom images from/to thumbnail
		//   "fade"
		//   "zoom-in-out"
		//
		animationEffect : "zoom",

		// Duration in ms for open/close animation
		animationDuration : 366,

		// Should image change opacity while zooming
		// If opacity is 'auto', then opacity will be changed if image and thumbnail have different aspect ratios
		zoomOpacity : 'auto',

		// Transition effect between slides
		//
		// Possible values:
		//   false            - disable
		//   "fade'
		//   "slide'
		//   "circular'
		//   "tube'
		//   "zoom-in-out'
		//   "rotate'
		//
		transitionEffect : "fade",

		// Duration in ms for transition animation
		transitionDuration : 366,

		// Custom CSS class for slide element
		slideClass : '',

		// Custom CSS class for layout
		baseClass : '',

		// Base template for layout
		baseTpl	:
		'<div class="fancybox-container" role="dialog" tabindex="-1">' +
		'<div class="fancybox-bg"></div>' +
		'<div class="fancybox-inner">' +
		'<div class="fancybox-infobar">' +
		'<button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button>' +
		'<div class="fancybox-infobar__body">' +
		'<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' +
		'</div>' +
		'<button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button>' +
		'</div>' +
		'<div class="fancybox-toolbar">' +
		'{{BUTTONS}}' +
		'</div>' +
		'<div class="fancybox-navigation">' +
		'<button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" />' +
		'<button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" />' +
		'</div>' +
		'<div class="fancybox-stage"></div>' +
		'<div class="fancybox-caption-wrap">' +
		'<div class="fancybox-caption"></div>' +
		'</div>' +
		'</div>' +
		'</div>',

		// Loading indicator template
		spinnerTpl : '<div class="fancybox-loading"></div>',

		// Error message template
		errorTpl : '<div class="fancybox-error"><p>{{ERROR}}<p></div>',

		btnTpl : {
			slideShow  : '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
			fullScreen : '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
			thumbs     : '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
			close      : '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',

			// This small close button will be appended to your html/inline/ajax content by default,
			// if "smallBtn" option is not set to false
			smallBtn   : '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'
		},

		// Container is injected into this element
		parentEl : 'body',


		// Focus handling
		// ==============

		// Try to focus on the first focusable element after opening
		autoFocus : true,

		// Put focus back to active element after closing
		backFocus : true,

		// Do not let user to focus on element outside modal content
		trapFocus : true,


		// Module specific options
		// =======================

		fullScreen : {
			autoStart : false,
		},

		touch : {
			vertical : true,  // Allow to drag content vertically
			momentum : true   // Continue movement after releasing mouse/touch when panning
		},

		// Hash value when initializing manually,
		// set `false` to disable hash change
		hash : null,

		// Customize or add new media types
		// Example:
		/*
		media : {
			youtube : {
				params : {
					autoplay : 0
				}
			}
		}
		*/
		media : {},

		slideShow : {
			autoStart : false,
			speed     : 4000
		},

		thumbs : {
			autoStart   : false,   // Display thumbnails on opening
			hideOnClose : true     // Hide thumbnail grid when closing animation starts
		},

		// Callbacks
		//==========

		// See Documentation/API/Events for more information
		// Example:
		/*
			afterShow: function( instance, current ) {
				 console.info( 'Clicked element:' );
				 console.info( current.opts.$orig );
			}
		*/

		onInit       : $.noop,  // When instance has been initialized

		beforeLoad   : $.noop,  // Before the content of a slide is being loaded
		afterLoad    : $.noop,  // When the content of a slide is done loading

		beforeShow   : $.noop,  // Before open animation starts
		afterShow    : $.noop,  // When content is done loading and animating

		beforeClose  : $.noop,  // Before the instance attempts to close. Return false to cancel the close.
		afterClose   : $.noop,  // After instance has been closed

		onActivate   : $.noop,  // When instance is brought to front
		onDeactivate : $.noop,  // When other instance has been activated


		// Interaction
		// ===========

		// Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
		// each option can be string or method that returns value.
		//
		// Possible values:
		//   "close"           - close instance
		//   "next"            - move to next gallery item
		//   "nextOrClose"     - move to next gallery item or close if gallery has only one item
		//   "toggleControls"  - show/hide controls
		//   "zoom"            - zoom image (if loaded)
		//   false             - do nothing

		// Clicked on the content
		clickContent : function( current, event ) {
			return current.type === 'image' ? 'zoom' : false;
		},

		// Clicked on the slide
		clickSlide : 'close',

		// Clicked on the background (backdrop) element
		clickOutside : 'close',

		// Same as previous two, but for double click
		dblclickContent : false,
		dblclickSlide   : false,
		dblclickOutside : false,


		// Custom options when mobile device is detected
		// =============================================

		mobile : {
			clickContent : function( current, event ) {
				return current.type === 'image' ? 'toggleControls' : false;
			},
			clickSlide : function( current, event ) {
				return current.type === 'image' ? 'toggleControls' : "close";
			},
			dblclickContent : function( current, event ) {
				return current.type === 'image' ? 'zoom' : false;
			},
			dblclickSlide : function( current, event ) {
				return current.type === 'image' ? 'zoom' : false;
			}
		},


		// Internationalization
		// ============

		lang : 'en',
		i18n : {
			'en' : {
				CLOSE       : 'Close',
				NEXT        : 'Next',
				PREV        : 'Previous',
				ERROR       : 'The requested content cannot be loaded. <br/> Please try again later.',
				PLAY_START  : 'Start slideshow',
				PLAY_STOP   : 'Pause slideshow',
				FULL_SCREEN : 'Full screen',
				THUMBS      : 'Thumbnails'
			},
			'de' : {
				CLOSE       : 'Schliessen',
				NEXT        : 'Weiter',
				PREV        : 'Zurück',
				ERROR       : 'Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.',
				PLAY_START  : 'Diaschau starten',
				PLAY_STOP   : 'Diaschau beenden',
				FULL_SCREEN : 'Vollbild',
				THUMBS      : 'Vorschaubilder'
			}
		}

	};

	// Few useful variables and methods
	// ================================

	var $W = $(window);
	var $D = $(document);

	var called = 0;


	// Check if an object is a jQuery object and not a native JavaScript object
	// ========================================================================

	var isQuery = function ( obj ) {
		return obj && obj.hasOwnProperty && obj instanceof $;
	};


	// Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
	// ===============================================================================

	var requestAFrame = (function () {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			// if all else fails, use setTimeout
			function (callback) {
				return window.setTimeout(callback, 1000 / 60);
			};
	})();


	// Detect the supported transition-end event property name
	// =======================================================

	var transitionEnd = (function () {
		var t, el = document.createElement("fakeelement");

		var transitions = {
			"transition"      : "transitionend",
			"OTransition"     : "oTransitionEnd",
			"MozTransition"   : "transitionend",
			"WebkitTransition": "webkitTransitionEnd"
		};

		for (t in transitions) {
			if (el.style[t] !== undefined){
				return transitions[t];
			}
		}
	})();


	// Force redraw on an element.
	// This helps in cases where the browser doesn't redraw an updated element properly.
	// =================================================================================

	var forceRedraw = function( $el ) {
		return ( $el && $el.length && $el[0].offsetHeight );
	};


	// Class definition
	// ================

	var FancyBox = function( content, opts, index ) {
		var self = this;

		self.opts  = $.extend( true, { index : index }, defaults, opts || {} );

		// Exclude buttons option from deep merging
		if ( opts && $.isArray( opts.buttons ) ) {
			self.opts.buttons = opts.buttons;
		}

		self.id    = self.opts.id || ++called;
		self.group = [];

		self.currIndex = parseInt( self.opts.index, 10 ) || 0;
		self.prevIndex = null;

		self.prevPos = null;
		self.currPos = 0;

		self.firstRun = null;

		// Create group elements from original item collection
		self.createGroup( content );

		if ( !self.group.length ) {
			return;
		}

		// Save last active element and current scroll position
		self.$lastFocus = $(document.activeElement).blur();

		// Collection of gallery objects
		self.slides = {};

		self.init( content );

	};

	$.extend(FancyBox.prototype, {

		// Create DOM structure
		// ====================

		init : function() {
			var self = this;

			var testWidth, $container, buttonStr;

			var firstItemOpts = self.group[ self.currIndex ].opts;

			self.scrollTop  = $D.scrollTop();
			self.scrollLeft = $D.scrollLeft();


			// Hide scrollbars
			// ===============

			if ( !$.fancybox.getInstance() && !$.fancybox.isMobile && $( 'body' ).css('overflow') !== 'hidden' ) {
				testWidth = $( 'body' ).width();

				$( 'html' ).addClass( 'fancybox-enabled' );

				// Compare body width after applying "overflow: hidden"
				testWidth = $( 'body' ).width() - testWidth;

				// If width has changed - compensate missing scrollbars by adding right margin
				if ( testWidth > 1 ) {
					$( 'head' ).append( '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + testWidth + 'px; }</style>' );
				}
			}


			// Build html markup and set references
			// ====================================

			// Build html code for buttons and insert into main template
			buttonStr = '';

			$.each( firstItemOpts.buttons, function( index, value ) {
				buttonStr += ( firstItemOpts.btnTpl[ value ] || '' );
			});

			// Create markup from base template, it will be initially hidden to
			// avoid unnecessary work like painting while initializing is not complete
			$container = $( self.translate( self, firstItemOpts.baseTpl.replace( '\{\{BUTTONS\}\}', buttonStr ) ) )
				.addClass( 'fancybox-is-hidden' )
				.attr('id', 'fancybox-container-' + self.id)
				.addClass( firstItemOpts.baseClass )
				.data( 'FancyBox', self )
				.prependTo( firstItemOpts.parentEl );

			// Create object holding references to jQuery wrapped nodes
			self.$refs = {
				container : $container
			};

			[ 'bg', 'inner', 'infobar', 'toolbar', 'stage', 'caption' ].forEach(function(item) {
				self.$refs[ item ] = $container.find( '.fancybox-' + item );
			});

			// Check for redundant elements
			if ( !firstItemOpts.arrows || self.group.length < 2 ) {
				$container.find('.fancybox-navigation').remove();
			}

			if ( !firstItemOpts.infobar ) {
				self.$refs.infobar.remove();
			}

			if ( !firstItemOpts.toolbar ) {
				self.$refs.toolbar.remove();
			}

			self.trigger( 'onInit' );

			// Bring to front and enable events
			self.activate();

			// Build slides, load and reveal content
			self.jumpTo( self.currIndex );
		},


		// Simple i18n support - replaces object keys found in template
		// with corresponding values
		// ============================================================

		translate : function( obj, str ) {
			var arr = obj.opts.i18n[ obj.opts.lang ];

			return str.replace(/\{\{(\w+)\}\}/g, function(match, n) {
				var value = arr[n];

				if ( value === undefined ) {
					return match;
				}

				return value;
			});
		},

		// Create array of gally item objects
		// Check if each object has valid type and content
		// ===============================================

		createGroup : function ( content ) {
			var self  = this;
			var items = $.makeArray( content );

			$.each(items, function( i, item ) {
				var obj  = {},
					opts = {},
					data = [],
					$item,
					type,
					src,
					srcParts;

				// Step 1 - Make sure we have an object
				// ====================================

				if ( $.isPlainObject( item ) ) {

					// We probably have manual usage here, something like
					// $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )

					obj  = item;
					opts = item.opts || item;

				} else if ( $.type( item ) === 'object' && $( item ).length ) {

					// Here we propbably have jQuery collection returned by some selector

					$item = $( item );
					data  = $item.data();

					opts = 'options' in data ? data.options : {};
					opts = $.type( opts ) === 'object' ? opts : {};

					obj.src  = 'src' in data ? data.src : ( opts.src || $item.attr( 'href' ) );

					[ 'width', 'height', 'thumb', 'type', 'filter' ].forEach(function(item) {
						if ( item in data ) {
							opts[ item ] = data[ item ];
						}
					});

					if ( 'srcset' in data ) {
						opts.image = { srcset : data.srcset };
					}

					opts.$orig = $item;

					if ( !obj.type && !obj.src ) {
						obj.type = 'inline';
						obj.src  = item;
					}

				} else {

					// Assume we have a simple html code, for example:
					// $.fancybox.open( '<div><h1>Hi!</h1></div>' );

					obj = {
						type : 'html',
						src  : item + ''
					};

				}

				// Each gallery object has full collection of options
				obj.opts = $.extend( true, {}, self.opts, opts );

				if ( $.fancybox.isMobile ) {
					obj.opts = $.extend( true, {}, obj.opts, obj.opts.mobile );
				}


				// Step 2 - Make sure we have content type, if not - try to guess
				// ==============================================================

				type = obj.type || obj.opts.type;
				src  = obj.src || '';

				if ( !type && src ) {
					if ( src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ) {
						type = 'image';

					} else if ( src.match(/\.(pdf)((\?|#).*)?$/i) ) {
						type = 'pdf';

					} else if ( src.charAt(0) === '#' ) {
						type = 'inline';
					}
				}

				obj.type = type;


				// Step 3 - Some adjustments
				// =========================

				obj.index = self.group.length;

				// Check if $orig and $thumb objects exist
				if ( obj.opts.$orig && !obj.opts.$orig.length ) {
					delete obj.opts.$orig;
				}

				if ( !obj.opts.$thumb && obj.opts.$orig ) {
					obj.opts.$thumb = obj.opts.$orig.find( 'img:first' );
				}

				if ( obj.opts.$thumb && !obj.opts.$thumb.length ) {
					delete obj.opts.$thumb;
				}

				// Caption is a "special" option, it can be passed as a method
				if ( $.type( obj.opts.caption ) === 'function' ) {
					obj.opts.caption = obj.opts.caption.apply( item, [ self, obj ] );

				} else if ( 'caption' in data ) {
					obj.opts.caption = data.caption;
				}

				// Make sure we have caption as a string
				obj.opts.caption = obj.opts.caption === undefined ? '' : obj.opts.caption + '';

				// Check if url contains "filter" used to filter the content
				// Example: "ajax.html #something"
				if ( type === 'ajax' ) {
					srcParts = src.split(/\s+/, 2);

					if ( srcParts.length > 1 ) {
						obj.src = srcParts.shift();

						obj.opts.filter = srcParts.shift();
					}
				}

				if ( obj.opts.smallBtn == 'auto' ) {

					if ( $.inArray( type, ['html', 'inline', 'ajax'] ) > -1 ) {
						obj.opts.toolbar  = false;
						obj.opts.smallBtn = true;

					} else {
						obj.opts.smallBtn = false;
					}

				}

				// If the type is "pdf", then simply load file into iframe
				if ( type === 'pdf' ) {
					obj.type = 'iframe';

					obj.opts.iframe.preload = false;
				}

				// Hide all buttons and disable interactivity for modal items
				if ( obj.opts.modal ) {

					obj.opts = $.extend(true, obj.opts, {
						// Remove buttons
						infobar : 0,
						toolbar : 0,

						smallBtn : 0,

						// Disable keyboard navigation
						keyboard : 0,

						// Disable some modules
						slideShow  : 0,
						fullScreen : 0,
						thumbs     : 0,
						touch      : 0,

						// Disable click event handlers
						clickContent    : false,
						clickSlide      : false,
						clickOutside    : false,
						dblclickContent : false,
						dblclickSlide   : false,
						dblclickOutside : false
					});

				}

				// Step 4 - Add processed object to group
				// ======================================

				self.group.push( obj );

			});

		},


		// Attach an event handler functions for:
		//   - navigation buttons
		//   - browser scrolling, resizing;
		//   - focusing
		//   - keyboard
		//   - detect idle
		// ======================================

		addEvents : function() {
			var self = this;

			self.removeEvents();

			// Make navigation elements clickable
			self.$refs.container.on('click.fb-close', '[data-fancybox-close]', function(e) {
				e.stopPropagation();
				e.preventDefault();

				self.close( e );

			}).on( 'click.fb-prev touchend.fb-prev', '[data-fancybox-prev]', function(e) {
				e.stopPropagation();
				e.preventDefault();

				self.previous();

			}).on( 'click.fb-next touchend.fb-next', '[data-fancybox-next]', function(e) {
				e.stopPropagation();
				e.preventDefault();

				self.next();

			});


			// Handle page scrolling and browser resizing
			$W.on('orientationchange.fb resize.fb', function(e) {

				if ( e && e.originalEvent && e.originalEvent.type === "resize" ) {

					requestAFrame(function() {
						self.update();
					});

				} else {

					self.$refs.stage.hide();

					setTimeout(function() {
						self.$refs.stage.show();

						self.update();
					}, 500);

				}

			});

			// Trap keyboard focus inside of the modal, so the user does not accidentally tab outside of the modal
			// (a.k.a. "escaping the modal")
			$D.on('focusin.fb', function(e) {
				var instance = $.fancybox ? $.fancybox.getInstance() : null;

				if ( instance.isClosing || !instance.current || !instance.current.opts.trapFocus || $( e.target ).hasClass( 'fancybox-container' ) || $( e.target ).is( document ) ) {
					return;
				}

				if ( instance && $( e.target ).css( 'position' ) !== 'fixed' && !instance.$refs.container.has( e.target ).length ) {
					e.stopPropagation();

					instance.focus();

					// Sometimes page gets scrolled, set it back
					$W.scrollTop( self.scrollTop ).scrollLeft( self.scrollLeft );
				}
			});


			// Enable keyboard navigation
			$D.on('keydown.fb', function (e) {
				var current = self.current,
					keycode = e.keyCode || e.which;

				if ( !current || !current.opts.keyboard ) {
					return;
				}

				if ( $(e.target).is('input') || $(e.target).is('textarea') ) {
					return;
				}

				// Backspace and Esc keys
				if ( keycode === 8 || keycode === 27 ) {
					e.preventDefault();

					self.close( e );

					return;
				}

				// Left arrow and Up arrow
				if ( keycode === 37 || keycode === 38 ) {
					e.preventDefault();

					self.previous();

					return;
				}

				// Righ arrow and Down arrow
				if ( keycode === 39 || keycode === 40 ) {
					e.preventDefault();

					self.next();

					return;
				}

				self.trigger('afterKeydown', e, keycode);
			});


			// Hide controls after some inactivity period
			if ( self.group[ self.currIndex ].opts.idleTime ) {
				self.idleSecondsCounter = 0;

				$D.on('mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle', function() {
					self.idleSecondsCounter = 0;

					if ( self.isIdle ) {
						self.showControls();
					}

					self.isIdle = false;
				});

				self.idleInterval = window.setInterval(function() {

					self.idleSecondsCounter++;

					if ( self.idleSecondsCounter >= self.group[ self.currIndex ].opts.idleTime ) {
						self.isIdle = true;
						self.idleSecondsCounter = 0;

						self.hideControls();
					}

				}, 1000);
			}

		},


		// Remove events added by the core
		// ===============================

		removeEvents : function () {
			var self = this;

			$W.off( 'orientationchange.fb resize.fb' );
			$D.off( 'focusin.fb keydown.fb .fb-idle' );

			this.$refs.container.off( '.fb-close .fb-prev .fb-next' );

			if ( self.idleInterval ) {
				window.clearInterval( self.idleInterval );

				self.idleInterval = null;
			}
		},


		// Change to previous gallery item
		// ===============================

		previous : function( duration ) {
			return this.jumpTo( this.currPos - 1, duration );
		},


		// Change to next gallery item
		// ===========================

		next : function( duration ) {
			return this.jumpTo( this.currPos + 1, duration );
		},


		// Switch to selected gallery item
		// ===============================

		jumpTo : function ( pos, duration, slide ) {
			var self = this,
				firstRun,
				loop,
				current,
				previous,
				canvasWidth,
				currentPos,
				transitionProps;

			var groupLen = self.group.length;

			if ( self.isSliding || self.isClosing || ( self.isAnimating && self.firstRun ) ) {
				return;
			}

			pos  = parseInt( pos, 10 );
			loop = self.current ? self.current.opts.loop : self.opts.loop;

			if ( !loop && ( pos < 0 || pos >= groupLen ) ) {
				return false;
			}

			firstRun = self.firstRun = ( self.firstRun === null );

			if ( groupLen < 2 && !firstRun && !!self.isSliding ) {
				return;
			}

			previous = self.current;

			self.prevIndex = self.currIndex;
			self.prevPos   = self.currPos;

			// Create slides
			current = self.createSlide( pos );

			if ( groupLen > 1 ) {
				if ( loop || current.index > 0 ) {
					self.createSlide( pos - 1 );
				}

				if ( loop || current.index < groupLen - 1 ) {
					self.createSlide( pos + 1 );
				}
			}

			self.current   = current;
			self.currIndex = current.index;
			self.currPos   = current.pos;

			self.trigger( 'beforeShow', firstRun );

			self.updateControls();

			currentPos = $.fancybox.getTranslate( current.$slide );

			current.isMoved        = ( currentPos.left !== 0 || currentPos.top !== 0 ) && !current.$slide.hasClass( 'fancybox-animated' );
			current.forcedDuration = undefined;

			if ( $.isNumeric( duration ) ) {
				current.forcedDuration = duration;
			} else {
				duration = current.opts[ firstRun ? 'animationDuration' : 'transitionDuration' ];
			}

			duration = parseInt( duration, 10 );

			// Fresh start - reveal container, current slide and start loading content
			if ( firstRun ) {

				if ( current.opts.animationEffect && duration ) {
					self.$refs.container.css( 'transition-duration', duration + 'ms' );
				}

				self.$refs.container.removeClass( 'fancybox-is-hidden' );

				forceRedraw( self.$refs.container );

				self.$refs.container.addClass( 'fancybox-is-open' );

				// Make first slide visible (to display loading icon, if needed)
				current.$slide.addClass( 'fancybox-slide--current' );

				self.loadSlide( current );

				self.preload();

				return;
			}

			// Clean up
			$.each(self.slides, function( index, slide ) {
				$.fancybox.stop( slide.$slide );
			});

			// Make current that slide is visible even if content is still loading
			current.$slide.removeClass( 'fancybox-slide--next fancybox-slide--previous' ).addClass( 'fancybox-slide--current' );

			// If slides have been dragged, animate them to correct position
			if ( current.isMoved ) {
				canvasWidth = Math.round( current.$slide.width() );

				$.each(self.slides, function( index, slide ) {
					var pos = slide.pos - current.pos;

					$.fancybox.animate( slide.$slide, {
						top  : 0,
						left : ( pos * canvasWidth ) + ( pos * slide.opts.gutter )
					}, duration, function() {

						slide.$slide.removeAttr('style').removeClass( 'fancybox-slide--next fancybox-slide--previous' );

						if ( slide.pos === self.currPos ) {
							current.isMoved = false;

							self.complete();
						}
					});
				});

			} else {
				self.$refs.stage.children().removeAttr( 'style' );
			}

			// Start transition that reveals current content
			// or wait when it will be loaded

			if ( current.isLoaded ) {
				self.revealContent( current );

			} else {
				self.loadSlide( current );
			}

			self.preload();

			if ( previous.pos === current.pos ) {
				return;
			}

			// Handle previous slide
			// =====================

			transitionProps = 'fancybox-slide--' + ( previous.pos > current.pos ? 'next' : 'previous' );

			previous.$slide.removeClass( 'fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous' );

			previous.isComplete = false;

			if ( !duration || ( !current.isMoved && !current.opts.transitionEffect ) ) {
				return;
			}

			if ( current.isMoved ) {
				previous.$slide.addClass( transitionProps );

			} else {

				transitionProps = 'fancybox-animated ' + transitionProps + ' fancybox-fx-' + current.opts.transitionEffect;

				$.fancybox.animate( previous.$slide, transitionProps, duration, function() {
					previous.$slide.removeClass( transitionProps ).removeAttr( 'style' );
				});

			}

		},


		// Create new "slide" element
		// These are gallery items  that are actually added to DOM
		// =======================================================

		createSlide : function( pos ) {

			var self = this;
			var $slide;
			var index;

			index = pos % self.group.length;
			index = index < 0 ? self.group.length + index : index;

			if ( !self.slides[ pos ] && self.group[ index ] ) {
				$slide = $('<div class="fancybox-slide"></div>').appendTo( self.$refs.stage );

				self.slides[ pos ] = $.extend( true, {}, self.group[ index ], {
					pos      : pos,
					$slide   : $slide,
					isLoaded : false,
				});

				self.updateSlide( self.slides[ pos ] );
			}

			return self.slides[ pos ];
		},


		// Scale image to the actual size of the image
		// ===========================================

		scaleToActual : function( x, y, duration ) {

			var self = this;

			var current = self.current;
			var $what   = current.$content;

			var imgPos, posX, posY, scaleX, scaleY;

			var canvasWidth  = parseInt( current.$slide.width(), 10 );
			var canvasHeight = parseInt( current.$slide.height(), 10 );

			var newImgWidth  = current.width;
			var newImgHeight = current.height;

			if ( !( current.type == 'image' && !current.hasError) || !$what || self.isAnimating) {
				return;
			}

			$.fancybox.stop( $what );

			self.isAnimating = true;

			x = x === undefined ? canvasWidth  * 0.5  : x;
			y = y === undefined ? canvasHeight * 0.5  : y;

			imgPos = $.fancybox.getTranslate( $what );

			scaleX  = newImgWidth  / imgPos.width;
			scaleY  = newImgHeight / imgPos.height;

			// Get center position for original image
			posX = ( canvasWidth * 0.5  - newImgWidth * 0.5 );
			posY = ( canvasHeight * 0.5 - newImgHeight * 0.5 );

			// Make sure image does not move away from edges
			if ( newImgWidth > canvasWidth ) {
				posX = imgPos.left * scaleX - ( ( x * scaleX ) - x );

				if ( posX > 0 ) {
					posX = 0;
				}

				if ( posX <  canvasWidth - newImgWidth ) {
					posX = canvasWidth - newImgWidth;
				}
			}

			if ( newImgHeight > canvasHeight) {
				posY = imgPos.top  * scaleY - ( ( y * scaleY ) - y );

				if ( posY > 0 ) {
					posY = 0;
				}

				if ( posY <  canvasHeight - newImgHeight ) {
					posY = canvasHeight - newImgHeight;
				}
			}

			self.updateCursor( newImgWidth, newImgHeight );

			$.fancybox.animate( $what, {
				top    : posY,
				left   : posX,
				scaleX : scaleX,
				scaleY : scaleY
			}, duration || 330, function() {
				self.isAnimating = false;
			});

			// Stop slideshow
			if ( self.SlideShow && self.SlideShow.isActive ) {
				self.SlideShow.stop();
			}
		},


		// Scale image to fit inside parent element
		// ========================================

		scaleToFit : function( duration ) {

			var self = this;

			var current = self.current;
			var $what   = current.$content;
			var end;

			if ( !( current.type == 'image' && !current.hasError) || !$what || self.isAnimating ) {
				return;
			}

			$.fancybox.stop( $what );

			self.isAnimating = true;

			end = self.getFitPos( current );

			self.updateCursor( end.width, end.height );

			$.fancybox.animate( $what, {
				top    : end.top,
				left   : end.left,
				scaleX : end.width  / $what.width(),
				scaleY : end.height / $what.height()
			}, duration || 330, function() {
				self.isAnimating = false;
			});

		},

		// Calculate image size to fit inside viewport
		// ===========================================

		getFitPos : function( slide ) {
			var self  = this;
			var $what = slide.$content;

			var imgWidth  = slide.width;
			var imgHeight = slide.height;

			var margin = slide.opts.margin;

			var canvasWidth, canvasHeight, minRatio, width, height;

			if ( !$what || !$what.length || ( !imgWidth && !imgHeight) ) {
				return false;
			}

			// Convert "margin to CSS style: [ top, right, bottom, left ]
			if ( $.type( margin ) === "number" ) {
				margin = [ margin, margin ];
			}

			if ( margin.length == 2 ) {
				margin = [ margin[0], margin[1], margin[0], margin[1] ];
			}

			if ( $W.width() < 800 ) {
				margin = [ 0, 0, 0, 0 ];
			}

			// We can not use $slide width here, because it can have different diemensions while in transiton
			canvasWidth  = parseInt( self.$refs.stage.width(), 10 )  - ( margin[ 1 ] + margin[ 3 ] );
			canvasHeight = parseInt( self.$refs.stage.height(), 10 ) - ( margin[ 0 ] + margin[ 2 ] );

			minRatio = Math.min(1, canvasWidth / imgWidth, canvasHeight / imgHeight );

			width  = Math.floor( minRatio * imgWidth );
			height = Math.floor( minRatio * imgHeight );

			// Use floor rounding to make sure it really fits
			return {
				top    : Math.floor( ( canvasHeight - height ) * 0.5 ) + margin[ 0 ],
				left   : Math.floor( ( canvasWidth  - width )  * 0.5 ) + margin[ 3 ],
				width  : width,
				height : height
			};

		},


		// Update position and content of all slides
		// =========================================

		update : function() {

			var self = this;

			$.each( self.slides, function( key, slide ) {
				self.updateSlide( slide );
			});

		},


		// Update slide position and scale content to fit
		// ==============================================

		updateSlide : function( slide ) {

			var self  = this;
			var $what = slide.$content;

			if ( $what && ( slide.width || slide.height ) ) {
				$.fancybox.stop( $what );

				$.fancybox.setTranslate( $what, self.getFitPos( slide ) );

				if ( slide.pos === self.currPos ) {
					self.updateCursor();
				}
			}

			slide.$slide.trigger( 'refresh' );

			self.trigger( 'onUpdate', slide );

		},

		// Update cursor style depending if content can be zoomed
		// ======================================================

		updateCursor : function( nextWidth, nextHeight ) {

			var self = this;
			var isScaledDown;

			var $container = self.$refs.container.removeClass('fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut');

			if ( !self.current || self.isClosing ) {
				return;
			}

			if ( self.isZoomable() ) {

				$container.addClass( 'fancybox-is-zoomable' );

				if ( nextWidth !== undefined && nextHeight !== undefined ) {
					isScaledDown = nextWidth < self.current.width && nextHeight < self.current.height;

				} else {
					isScaledDown = self.isScaledDown();
				}

				if ( isScaledDown ) {

					// If image is scaled down, then, obviously, it can be zoomed to full size
					$container.addClass('fancybox-can-zoomIn');

				} else {

					if ( self.current.opts.touch ) {

						// If image size ir largen than available available and touch module is not disable,
						// then user can do panning
						$container.addClass('fancybox-can-drag');

					} else {
						$container.addClass('fancybox-can-zoomOut');
					}

				}

			} else if ( self.current.opts.touch ) {
				$container.addClass('fancybox-can-drag');
			}

		},


		// Check if current slide is zoomable
		// ==================================

		isZoomable : function() {

			var self = this;

			var current = self.current;
			var fitPos;

			if ( !current || self.isClosing ) {
				return;
			}

			// Assume that slide is zoomable if
			//   - image is loaded successfuly
			//   - click action is "zoom"
			//   - actual size of the image is smaller than available area
			if ( current.type === 'image' && current.isLoaded && !current.hasError &&
				( current.opts.clickContent === 'zoom' || ( $.isFunction( current.opts.clickContent ) && current.opts.clickContent( current ) ===  "zoom" ) )
			) {

				fitPos = self.getFitPos( current );

				if ( current.width > fitPos.width || current.height > fitPos.height ) {
					return true;
				}

			}

			return false;

		},


		// Check if current image dimensions are smaller than actual
		// =========================================================

		isScaledDown : function() {

			var self = this;

			var current = self.current;
			var $what   = current.$content;

			var rez = false;

			if ( $what ) {
				rez = $.fancybox.getTranslate( $what );
				rez = rez.width < current.width || rez.height < current.height;
			}

			return rez;

		},


		// Check if image dimensions exceed parent element
		// ===============================================

		canPan : function() {

			var self = this;

			var current = self.current;
			var $what   = current.$content;

			var rez = false;

			if ( $what ) {
				rez = self.getFitPos( current );
				rez = Math.abs( $what.width() - rez.width ) > 1  || Math.abs( $what.height() - rez.height ) > 1;

			}

			return rez;

		},


		// Load content into the slide
		// ===========================

		loadSlide : function( slide ) {

			var self = this, type, $slide;
			var ajaxLoad;

			if ( slide.isLoading ) {
				return;
			}

			if ( slide.isLoaded ) {
				return;
			}

			slide.isLoading = true;

			self.trigger( 'beforeLoad', slide );

			type   = slide.type;
			$slide = slide.$slide;

			$slide
				.off( 'refresh' )
				.trigger( 'onReset' )
				.addClass( 'fancybox-slide--' + ( type || 'unknown' ) )
				.addClass( slide.opts.slideClass );

			// Create content depending on the type

			switch ( type ) {

				case 'image':

					self.setImage( slide );

					break;

				case 'iframe':

					self.setIframe( slide );

					break;

				case 'html':

					self.setContent( slide, slide.src || slide.content );

					break;

				case 'inline':

					if ( $( slide.src ).length ) {
						self.setContent( slide, $( slide.src ) );

					} else {
						self.setError( slide );
					}

					break;

				case 'ajax':

					self.showLoading( slide );

					ajaxLoad = $.ajax( $.extend( {}, slide.opts.ajax.settings, {
						url : slide.src,
						success : function ( data, textStatus ) {

							if ( textStatus === 'success' ) {
								self.setContent( slide, data );
							}

						},
						error : function ( jqXHR, textStatus ) {

							if ( jqXHR && textStatus !== 'abort' ) {
								self.setError( slide );
							}

						}
					}));

					$slide.one( 'onReset', function () {
						ajaxLoad.abort();
					});

					break;

				default:

					self.setError( slide );

					break;

			}

			return true;

		},


		// Use thumbnail image, if possible
		// ================================

		setImage : function( slide ) {

			var self   = this;
			var srcset = slide.opts.image.srcset;

			var found, temp, pxRatio, windowWidth;

			// If we have "srcset", then we need to find matching "src" value.
			// This is necessary, because when you set an src attribute, the browser will preload the image
			// before any javascript or even CSS is applied.
			if ( srcset ) {
				pxRatio     = window.devicePixelRatio || 1;
				windowWidth = window.innerWidth  * pxRatio;

				temp = srcset.split(',').map(function ( el ) {
					var ret = {};

					el.trim().split(/\s+/).forEach(function ( el, i ) {
						var value = parseInt( el.substring(0, el.length - 1), 10 );

						if ( i === 0 ) {
							return ( ret.url = el );
						}

						if ( value ) {
							ret.value   = value;
							ret.postfix = el[ el.length - 1 ];
						}

					});

					return ret;
				});

				// Sort by value
				temp.sort(function (a, b) {
					return a.value - b.value;
				});

				// Ok, now we have an array of all srcset values
				for ( var j = 0; j < temp.length; j++ ) {
					var el = temp[ j ];

					if ( ( el.postfix === 'w' && el.value >= windowWidth ) || ( el.postfix === 'x' && el.value >= pxRatio ) ) {
						found = el;
						break;
					}
				}

				// If not found, take the last one
				if ( !found && temp.length ) {
					found = temp[ temp.length - 1 ];
				}

				if ( found ) {
					slide.src = found.url;

					// If we have default width/height values, we can calculate height for matching source
					if ( slide.width && slide.height && found.postfix == 'w' ) {
						slide.height = ( slide.width / slide.height ) * found.value;
						slide.width  = found.value;
					}
				}
			}

			// This will be wrapper containing both ghost and actual image
			slide.$content = $('<div class="fancybox-image-wrap"></div>')
				.addClass( 'fancybox-is-hidden' )
				.appendTo( slide.$slide );


			// If we have a thumbnail, we can display it while actual image is loading
			// Users will not stare at black screen and actual image will appear gradually
			if ( slide.opts.preload !== false && slide.opts.width && slide.opts.height && ( slide.opts.thumb || slide.opts.$thumb ) ) {

				slide.width  = slide.opts.width;
				slide.height = slide.opts.height;

				slide.$ghost = $('<img />')
					.one('error', function() {

						$(this).remove();

						slide.$ghost = null;

						self.setBigImage( slide );

					})
					.one('load', function() {

						self.afterLoad( slide );

						self.setBigImage( slide );

					})
					.addClass( 'fancybox-image' )
					.appendTo( slide.$content )
					.attr( 'src', slide.opts.thumb || slide.opts.$thumb.attr( 'src' ) );

			} else {

				self.setBigImage( slide );

			}

		},


		// Create full-size image
		// ======================

		setBigImage : function ( slide ) {
			var self = this;
			var $img = $('<img />');

			slide.$image = $img
				.one('error', function() {

					self.setError( slide );

				})
				.one('load', function() {

					// Clear timeout that checks if loading icon needs to be displayed
					clearTimeout( slide.timouts );

					slide.timouts = null;

					if ( self.isClosing ) {
						return;
					}

					slide.width  = this.naturalWidth;
					slide.height = this.naturalHeight;

					if ( slide.opts.image.srcset ) {
						$img.attr( 'sizes', '100vw' ).attr( 'srcset', slide.opts.image.srcset );
					}

					self.hideLoading( slide );

					if ( slide.$ghost ) {

						slide.timouts = setTimeout(function() {
							slide.timouts = null;

							slide.$ghost.hide();

						}, Math.min( 300, Math.max( 1000, slide.height / 1600 ) ) );

					} else {
						self.afterLoad( slide );
					}

				})
				.addClass( 'fancybox-image' )
				.attr('src', slide.src)
				.appendTo( slide.$content );

			if ( $img[0].complete ) {
				$img.trigger( 'load' );

			} else if( $img[0].error ) {
				$img.trigger( 'error' );

			} else {

				slide.timouts = setTimeout(function() {
					if ( !$img[0].complete && !slide.hasError ) {
						self.showLoading( slide );
					}

				}, 100);

			}

		},


		// Create iframe wrapper, iframe and bindings
		// ==========================================

		setIframe : function( slide ) {
			var self	= this,
				opts    = slide.opts.iframe,
				$slide	= slide.$slide,
				$iframe;

			slide.$content = $('<div class="fancybox-content' + ( opts.preload ? ' fancybox-is-hidden' : '' ) + '"></div>')
				.css( opts.css )
				.appendTo( $slide );

			$iframe = $( opts.tpl.replace(/\{rnd\}/g, new Date().getTime()) )
				.attr( opts.attr )
				.appendTo( slide.$content );

			if ( opts.preload ) {

				self.showLoading( slide );

				// Unfortunately, it is not always possible to determine if iframe is successfully loaded
				// (due to browser security policy)

				$iframe.on('load.fb error.fb', function(e) {
					this.isReady = 1;

					slide.$slide.trigger( 'refresh' );

					self.afterLoad( slide );
				});

				// Recalculate iframe content size
				// ===============================

				$slide.on('refresh.fb', function() {
					var $wrap = slide.$content,
						$contents,
						$body,
						scrollWidth,
						frameWidth,
						frameHeight;

					if ( $iframe[0].isReady !== 1 ) {
						return;
					}

					// Check if content is accessible,
					// it will fail if frame is not with the same origin

					try {
						$contents = $iframe.contents();
						$body     = $contents.find('body');

					} catch (ignore) {}

					// Calculate dimensions for the wrapper
					if ( $body && $body.length && !( opts.css.width !== undefined && opts.css.height !== undefined ) ) {

						scrollWidth = $iframe[0].contentWindow.document.documentElement.scrollWidth;

						frameWidth	= Math.ceil( $body.outerWidth(true) + ( $wrap.width() - scrollWidth ) );
						frameHeight	= Math.ceil( $body.outerHeight(true) );

						// Resize wrapper to fit iframe content
						$wrap.css({
							'width'  : opts.css.width  === undefined ? frameWidth  + ( $wrap.outerWidth()  - $wrap.innerWidth() )  : opts.css.width,
							'height' : opts.css.height === undefined ? frameHeight + ( $wrap.outerHeight() - $wrap.innerHeight() ) : opts.css.height
						});

					}

					$wrap.removeClass( 'fancybox-is-hidden' );

				});

			} else {

				this.afterLoad( slide );

			}

			$iframe.attr( 'src', slide.src );

			if ( slide.opts.smallBtn === true ) {
				slide.$content.prepend( self.translate( slide, slide.opts.btnTpl.smallBtn ) );
			}

			// Remove iframe if closing or changing gallery item
			$slide.one( 'onReset', function () {

				// This helps IE not to throw errors when closing
				try {

					$( this ).find( 'iframe' ).hide().attr( 'src', '//about:blank' );

				} catch ( ignore ) {}

				$( this ).empty();

				slide.isLoaded = false;

			});

		},


		// Wrap and append content to the slide
		// ======================================

		setContent : function ( slide, content ) {

			var self = this;

			if ( self.isClosing ) {
				return;
			}

			self.hideLoading( slide );

			slide.$slide.empty();

			if ( isQuery( content ) && content.parent().length ) {

				// If content is a jQuery object, then it will be moved to the slide.
				// The placeholder is created so we will know where to put it back.
				// If user is navigating gallery fast, then the content might be already inside fancyBox
				// =====================================================================================

				// Make sure content is not already moved to fancyBox
				content.parent( '.fancybox-slide--inline' ).trigger( 'onReset' );

				// Create temporary element marking original place of the content
				slide.$placeholder = $( '<div></div>' ).hide().insertAfter( content );

				// Make sure content is visible
				content.css('display', 'inline-block');

			} else if ( !slide.hasError ) {

				// If content is just a plain text, try to convert it to html
				if ( $.type( content ) === 'string' ) {
					content = $('<div>').append( $.trim( content ) ).contents();

					// If we have text node, then add wrapping element to make vertical alignment work
					if ( content[0].nodeType === 3 ) {
						content = $('<div>').html( content );
					}
				}

				// If "filter" option is provided, then filter content
				if ( slide.opts.filter ) {
					content = $('<div>').html( content ).find( slide.opts.filter );
				}

			}

			slide.$slide.one('onReset', function () {

				// Put content back
				if ( slide.$placeholder ) {
					slide.$placeholder.after( content.hide() ).remove();

					slide.$placeholder = null;
				}

				// Remove custom close button
				if ( slide.$smallBtn ) {
					slide.$smallBtn.remove();

					slide.$smallBtn = null;
				}

				// Remove content and mark slide as not loaded
				if ( !slide.hasError ) {
					$(this).empty();

					slide.isLoaded = false;
				}

			});

			slide.$content = $( content ).appendTo( slide.$slide );

			if ( slide.opts.smallBtn && !slide.$smallBtn ) {
				slide.$smallBtn = $( self.translate( slide, slide.opts.btnTpl.smallBtn ) ).appendTo( slide.$content );
			}

			this.afterLoad( slide );
		},

		// Display error message
		// =====================

		setError : function ( slide ) {

			slide.hasError = true;

			slide.$slide.removeClass( 'fancybox-slide--' + slide.type );

			this.setContent( slide, this.translate( slide, slide.opts.errorTpl ) );

		},


		// Show loading icon inside the slide
		// ==================================

		showLoading : function( slide ) {

			var self = this;

			slide = slide || self.current;

			if ( slide && !slide.$spinner ) {
				slide.$spinner = $( self.opts.spinnerTpl ).appendTo( slide.$slide );
			}

		},

		// Remove loading icon from the slide
		// ==================================

		hideLoading : function( slide ) {

			var self = this;

			slide = slide || self.current;

			if ( slide && slide.$spinner ) {
				slide.$spinner.remove();

				delete slide.$spinner;
			}

		},


		// Adjustments after slide content has been loaded
		// ===============================================

		afterLoad : function( slide ) {

			var self = this;

			if ( self.isClosing ) {
				return;
			}

			slide.isLoading = false;
			slide.isLoaded  = true;

			self.trigger( 'afterLoad', slide );

			self.hideLoading( slide );

			if ( slide.opts.protect && slide.$content && !slide.hasError ) {

				// Disable right click
				slide.$content.on( 'contextmenu.fb', function( e ) {
					if ( e.button == 2 ) {
						e.preventDefault();
					}

					return true;
				});

				// Add fake element on top of the image
				// This makes a bit harder for user to select image
				if ( slide.type === 'image' ) {
					$( '<div class="fancybox-spaceball"></div>' ).appendTo( slide.$content );
				}

			}

			self.revealContent( slide );

		},


		// Make content visible
		// This method is called right after content has been loaded or
		// user navigates gallery and transition should start
		// ============================================================

		revealContent : function( slide ) {

			var self   = this;
			var $slide = slide.$slide;

			var effect, effectClassName, duration, opacity, end, start = false;

			effect   = slide.opts[ self.firstRun ? 'animationEffect'   : 'transitionEffect' ];
			duration = slide.opts[ self.firstRun ? 'animationDuration' : 'transitionDuration' ];

			duration = parseInt( slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10 );

			if ( slide.isMoved || slide.pos !== self.currPos || !duration ) {
				effect = false;
			}

			// Check if can zoom
			if ( effect === 'zoom' && !( slide.pos === self.currPos && duration && slide.type === 'image' && !slide.hasError && ( start = self.getThumbPos( slide ) ) ) ) {
				effect = 'fade';
			}


			// Zoom animation
			// ==============

			if ( effect === 'zoom' ) {
				end = self.getFitPos( slide );

				end.scaleX = Math.round( (end.width  / start.width)  * 100 ) / 100;
				end.scaleY = Math.round( (end.height / start.height) * 100 ) / 100;

				delete end.width;
				delete end.height;

				// Check if we need to animate opacity
				opacity = slide.opts.zoomOpacity;

				if ( opacity == 'auto' ) {
					opacity = Math.abs( slide.width / slide.height - start.width / start.height ) > 0.1;
				}

				if ( opacity ) {
					start.opacity = 0.1;
					end.opacity   = 1;
				}

				// Draw image at start position
				$.fancybox.setTranslate( slide.$content.removeClass( 'fancybox-is-hidden' ), start );

				forceRedraw( slide.$content );

				// Start animation
				$.fancybox.animate( slide.$content, end, duration, function() {
					self.complete();
				});

				return;
			}


			self.updateSlide( slide );


			// Simply show content
			// ===================

			if ( !effect ) {
				forceRedraw( $slide );

				slide.$content.removeClass( 'fancybox-is-hidden' );

				if ( slide.pos === self.currPos ) {
					self.complete();
				}

				return;
			}

			$.fancybox.stop( $slide );

			effectClassName = 'fancybox-animated fancybox-slide--' + ( slide.pos > self.prevPos ? 'next' : 'previous' ) + ' fancybox-fx-' + effect;

			$slide.removeAttr( 'style' ).removeClass( 'fancybox-slide--current fancybox-slide--next fancybox-slide--previous' ).addClass( effectClassName );

			slide.$content.removeClass( 'fancybox-is-hidden' );

			//Force reflow for CSS3 transitions
			forceRedraw( $slide );

			$.fancybox.animate( $slide, 'fancybox-slide--current', duration, function(e) {
				$slide.removeClass( effectClassName ).removeAttr( 'style' );

				if ( slide.pos === self.currPos ) {
					self.complete();
				}

			}, true);

		},


		// Check if we can and have to zoom from thumbnail
		//================================================

		getThumbPos : function( slide ) {

			var self = this;
			var rez  = false;

			// Check if element is inside the viewport by at least 1 pixel
			var isElementVisible = function( $el ) {
				var element = $el[0];

				var elementRect = element.getBoundingClientRect();
				var parentRects = [];

				var visibleInAllParents;

				while ( element.parentElement !== null ) {
					if ( $(element.parentElement).css('overflow') === 'hidden'  || $(element.parentElement).css('overflow') === 'auto' ) {
						parentRects.push(element.parentElement.getBoundingClientRect());
					}

					element = element.parentElement;
				}

				visibleInAllParents = parentRects.every(function(parentRect){
					var visiblePixelX = Math.min(elementRect.right, parentRect.right) - Math.max(elementRect.left, parentRect.left);
					var visiblePixelY = Math.min(elementRect.bottom, parentRect.bottom) - Math.max(elementRect.top, parentRect.top);

					return visiblePixelX > 0 && visiblePixelY > 0;
				});

				return visibleInAllParents &&
					elementRect.bottom > 0 && elementRect.right > 0 &&
					elementRect.left < $(window).width() && elementRect.top < $(window).height();
			};

			var $thumb   = slide.opts.$thumb;
			var thumbPos = $thumb ? $thumb.offset() : 0;
			var slidePos;

			if ( thumbPos && $thumb[0].ownerDocument === document && isElementVisible( $thumb ) ) {
				slidePos = self.$refs.stage.offset();

				rez = {
					top    : thumbPos.top  - slidePos.top  + parseFloat( $thumb.css( "border-top-width" ) || 0 ),
					left   : thumbPos.left - slidePos.left + parseFloat( $thumb.css( "border-left-width" ) || 0 ),
					width  : $thumb.width(),
					height : $thumb.height(),
					scaleX : 1,
					scaleY : 1
				};
			}

			return rez;
		},


		// Final adjustments after current gallery item is moved to position
		// and it`s content is loaded
		// ==================================================================

		complete : function() {

			var self = this;

			var current = self.current;
			var slides  = {};

			if ( current.isMoved || !current.isLoaded || current.isComplete ) {
				return;
			}

			current.isComplete = true;

			current.$slide.siblings().trigger( 'onReset' );

			// Trigger any CSS3 transiton inside the slide
			forceRedraw( current.$slide );

			current.$slide.addClass( 'fancybox-slide--complete' );

			// Remove unnecessary slides
			$.each( self.slides, function( key, slide ) {
				if ( slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1 ) {
					slides[ slide.pos ] = slide;

				} else if ( slide ) {

					$.fancybox.stop( slide.$slide );

					slide.$slide.unbind().remove();
				}
			});

			self.slides = slides;

			self.updateCursor();

			self.trigger( 'afterShow' );

			// Try to focus on the first focusable element
			if ( $( document.activeElement ).is( '[disabled]' ) || ( current.opts.autoFocus && !( current.type == 'image' || current.type === 'iframe' ) ) ) {
				self.focus();
			}

		},


		// Preload next and previous slides
		// ================================

		preload : function() {
			var self = this;
			var next, prev;

			if ( self.group.length < 2 ) {
				return;
			}

			next  = self.slides[ self.currPos + 1 ];
			prev  = self.slides[ self.currPos - 1 ];

			if ( next && next.type === 'image' ) {
				self.loadSlide( next );
			}

			if ( prev && prev.type === 'image' ) {
				self.loadSlide( prev );
			}

		},


		// Try to find and focus on the first focusable element
		// ====================================================

		focus : function() {
			var current = this.current;
			var $el;

			if ( this.isClosing ) {
				return;
			}

			// Skip for images and iframes
			$el = current && current.isComplete ? current.$slide.find('button,:input,[tabindex],a').filter(':not([disabled]):visible:first') : null;
			$el = $el && $el.length ? $el : this.$refs.container;

			$el.focus();
		},


		// Activates current instance - brings container to the front and enables keyboard,
		// notifies other instances about deactivating
		// =================================================================================

		activate : function () {
			var self = this;

			// Deactivate all instances
			$( '.fancybox-container' ).each(function () {
				var instance = $(this).data( 'FancyBox' );

				// Skip self and closing instances
				if (instance && instance.uid !== self.uid && !instance.isClosing) {
					instance.trigger( 'onDeactivate' );
				}

			});

			if ( self.current ) {
				if ( self.$refs.container.index() > 0 ) {
					self.$refs.container.prependTo( document.body );
				}

				self.updateControls();
			}

			self.trigger( 'onActivate' );

			self.addEvents();

		},


		// Start closing procedure
		// This will start "zoom-out" animation if needed and clean everything up afterwards
		// =================================================================================

		close : function( e, d ) {

			var self    = this;
			var current = self.current;

			var effect, duration;
			var $what, opacity, start, end;

			var done = function() {
				self.cleanUp( e );
			};

			if ( self.isClosing ) {
				return false;
			}

			self.isClosing = true;

			// If beforeClose callback prevents closing, make sure content is centered
			if ( self.trigger( 'beforeClose', e ) === false ) {
				self.isClosing = false;

				requestAFrame(function() {
					self.update();
				});

				return false;
			}

			// Remove all events
			// If there are multiple instances, they will be set again by "activate" method
			self.removeEvents();

			if ( current.timouts ) {
				clearTimeout( current.timouts );
			}

			$what    = current.$content;
			effect   = current.opts.animationEffect;
			duration = $.isNumeric( d ) ? d : ( effect ? current.opts.animationDuration : 0 );

			// Remove other slides
			current.$slide.off( transitionEnd ).removeClass( 'fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated' );

			current.$slide.siblings().trigger( 'onReset' ).remove();

			// Trigger animations
			if ( duration ) {
				self.$refs.container.removeClass( 'fancybox-is-open' ).addClass( 'fancybox-is-closing' );
			}

			// Clean up
			self.hideLoading( current );

			self.hideControls();

			self.updateCursor();

			// Check if possible to zoom-out
			if ( effect === 'zoom' && !( e !== true && $what && duration && current.type === 'image' && !current.hasError && ( end = self.getThumbPos( current ) ) ) ) {
				effect = 'fade';
			}

			if ( effect === 'zoom' ) {
				$.fancybox.stop( $what );

				start = $.fancybox.getTranslate( $what );

				start.width  = start.width  * start.scaleX;
				start.height = start.height * start.scaleY;

				// Check if we need to animate opacity
				opacity = current.opts.zoomOpacity;

				if ( opacity == 'auto' ) {
					opacity = Math.abs( current.width / current.height - end.width / end.height ) > 0.1;
				}

				if ( opacity ) {
					end.opacity = 0;
				}

				start.scaleX = start.width  / end.width;
				start.scaleY = start.height / end.height;

				start.width  = end.width;
				start.height = end.height;

				$.fancybox.setTranslate( current.$content, start );

				$.fancybox.animate( current.$content, end, duration, done );

				return true;
			}

			if ( effect && duration ) {

				// If skip animation
				if ( e === true ) {
					setTimeout( done, duration );

				} else {
					$.fancybox.animate( current.$slide.removeClass( 'fancybox-slide--current' ), 'fancybox-animated fancybox-slide--previous fancybox-fx-' + effect, duration, done );
				}

			} else {
				done();
			}

			return true;
		},


		// Final adjustments after removing the instance
		// =============================================

		cleanUp : function( e ) {
			var self = this,
				instance;

			self.current.$slide.trigger( 'onReset' );

			self.$refs.container.empty().remove();

			self.trigger( 'afterClose', e );

			// Place back focus
			if ( self.$lastFocus && !!!self.current.focusBack ) {
				self.$lastFocus.focus();
			}

			self.current = null;

			// Check if there are other instances
			instance = $.fancybox.getInstance();

			if ( instance ) {
				instance.activate();

			} else {

				$W.scrollTop( self.scrollTop ).scrollLeft( self.scrollLeft );

				$( 'html' ).removeClass( 'fancybox-enabled' );

				$( '#fancybox-style-noscroll' ).remove();
			}

		},


		// Call callback and trigger an event
		// ==================================

		trigger : function( name, slide ) {
			var args  = Array.prototype.slice.call(arguments, 1),
				self  = this,
				obj   = slide && slide.opts ? slide : self.current,
				rez;

			if ( obj ) {
				args.unshift( obj );

			} else {
				obj = self;
			}

			args.unshift( self );

			if ( $.isFunction( obj.opts[ name ] ) ) {
				rez = obj.opts[ name ].apply( obj, args );
			}

			if ( rez === false ) {
				return rez;
			}

			if ( name === 'afterClose' ) {
				$D.trigger( name + '.fb', args );

			} else {
				self.$refs.container.trigger( name + '.fb', args );
			}

		},


		// Update infobar values, navigation button states and reveal caption
		// ==================================================================

		updateControls : function ( force ) {

			var self = this;

			var current  = self.current;
			var index    = current.index;
			var opts     = current.opts;
			var caption  = opts.caption;
			var $caption = self.$refs.caption;

			// Recalculate content dimensions
			current.$slide.trigger( 'refresh' );

			self.$caption = caption && caption.length ? $caption.html( caption ) : null;

			if ( !self.isHiddenControls ) {
				self.showControls();
			}

			// Update info and navigation elements
			$('[data-fancybox-count]').html( self.group.length );
			$('[data-fancybox-index]').html( index + 1 );

			$('[data-fancybox-prev]').prop('disabled', ( !opts.loop && index <= 0 ) );
			$('[data-fancybox-next]').prop('disabled', ( !opts.loop && index >= self.group.length - 1 ) );

		},

		// Hide toolbar and caption
		// ========================

		hideControls : function () {

			this.isHiddenControls = true;

			this.$refs.container.removeClass('fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav');

		},

		showControls : function() {

			var self = this;
			var opts = self.current ? self.current.opts : self.opts;
			var $container = self.$refs.container;

			self.isHiddenControls   = false;
			self.idleSecondsCounter = 0;

			$container
				.toggleClass('fancybox-show-toolbar', !!( opts.toolbar && opts.buttons ) )
				.toggleClass('fancybox-show-infobar', !!( opts.infobar && self.group.length > 1 ) )
				.toggleClass('fancybox-show-nav',     !!( opts.arrows && self.group.length > 1 ) )
				.toggleClass('fancybox-is-modal',     !!opts.modal );

			if ( self.$caption ) {
				$container.addClass( 'fancybox-show-caption ');

			} else {
				$container.removeClass( 'fancybox-show-caption' );
			}

		},


		// Toggle toolbar and caption
		// ==========================

		toggleControls : function() {

			if ( this.isHiddenControls ) {
				this.showControls();

			} else {
				this.hideControls();
			}

		},


	});


	$.fancybox = {

		version  : "3.1.20",
		defaults : defaults,


		// Get current instance and execute a command.
		//
		// Examples of usage:
		//
		//   $instance = $.fancybox.getInstance();
		//   $.fancybox.getInstance().jumpTo( 1 );
		//   $.fancybox.getInstance( 'jumpTo', 1 );
		//   $.fancybox.getInstance( function() {
		//       console.info( this.currIndex );
		//   });
		// ======================================================

		getInstance : function ( command ) {
			var instance = $('.fancybox-container:not(".fancybox-is-closing"):first').data( 'FancyBox' );
			var args     = Array.prototype.slice.call(arguments, 1);

			if ( instance instanceof FancyBox ) {

				if ( $.type( command ) === 'string' ) {
					instance[ command ].apply( instance, args );

				} else if ( $.type( command ) === 'function' ) {
					command.apply( instance, args );

				}

				return instance;
			}

			return false;

		},


		// Create new instance
		// ===================

		open : function ( items, opts, index ) {
			return new FancyBox( items, opts, index );
		},


		// Close current or all instances
		// ==============================

		close : function ( all ) {
			var instance = this.getInstance();

			if ( instance ) {
				instance.close();

				// Try to find and close next instance

				if ( all === true ) {
					this.close();
				}
			}

		},

		// Close instances and unbind all events
		// ==============================

		destroy : function() {

			this.close( true );

			$D.off( 'click.fb-start' );

		},


		// Try to detect mobile devices
		// ============================

		isMobile : document.createTouch !== undefined && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),


		// Detect if 'translate3d' support is available
		// ============================================

		use3d : (function() {
			var div = document.createElement('div');

			return window.getComputedStyle && window.getComputedStyle( div ).getPropertyValue('transform') && !(document.documentMode && document.documentMode < 11);
		}()),


		// Helper function to get current visual state of an element
		// returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
		// =====================================================================

		getTranslate : function( $el ) {
			var matrix;

			if ( !$el || !$el.length ) {
				return false;
			}

			matrix  = $el.eq( 0 ).css('transform');

			if ( matrix && matrix.indexOf( 'matrix' ) !== -1 ) {
				matrix = matrix.split('(')[1];
				matrix = matrix.split(')')[0];
				matrix = matrix.split(',');
			} else {
				matrix = [];
			}

			if ( matrix.length ) {

				// If IE
				if ( matrix.length > 10 ) {
					matrix = [ matrix[13], matrix[12], matrix[0], matrix[5] ];

				} else {
					matrix = [ matrix[5], matrix[4], matrix[0], matrix[3]];
				}

				matrix = matrix.map(parseFloat);

			} else {
				matrix = [ 0, 0, 1, 1 ];

				var transRegex = /\.*translate\((.*)px,(.*)px\)/i;
				var transRez = transRegex.exec( $el.eq( 0 ).attr('style') );

				if ( transRez ) {
					matrix[ 0 ] = parseFloat( transRez[2] );
					matrix[ 1 ] = parseFloat( transRez[1] );
				}
			}

			return {
				top     : matrix[ 0 ],
				left    : matrix[ 1 ],
				scaleX  : matrix[ 2 ],
				scaleY  : matrix[ 3 ],
				opacity : parseFloat( $el.css('opacity') ),
				width   : $el.width(),
				height  : $el.height()
			};

		},


		// Shortcut for setting "translate3d" properties for element
		// Can set be used to set opacity, too
		// ========================================================

		setTranslate : function( $el, props ) {
			var str  = '';
			var css  = {};

			if ( !$el || !props ) {
				return;
			}

			if ( props.left !== undefined || props.top !== undefined ) {
				str = ( props.left === undefined ? $el.position().left : props.left )  + 'px, ' + ( props.top === undefined ? $el.position().top : props.top ) + 'px';

				if ( this.use3d ) {
					str = 'translate3d(' + str + ', 0px)';

				} else {
					str = 'translate(' + str + ')';
				}
			}

			if ( props.scaleX !== undefined && props.scaleY !== undefined ) {
				str = (str.length ? str + ' ' : '') + 'scale(' + props.scaleX + ', ' + props.scaleY + ')';
			}

			if ( str.length ) {
				css.transform = str;
			}

			if ( props.opacity !== undefined ) {
				css.opacity = props.opacity;
			}

			if ( props.width !== undefined ) {
				css.width = props.width;
			}

			if ( props.height !== undefined ) {
				css.height = props.height;
			}

			return $el.css( css );
		},


		// Simple CSS transition handler
		// =============================

		animate : function ( $el, to, duration, callback, leaveAnimationName ) {
			var event = transitionEnd || 'transitionend';

			if ( $.isFunction( duration ) ) {
				callback = duration;
				duration = null;
			}

			if ( !$.isPlainObject( to ) ) {
				$el.removeAttr('style');
			}

			$el.on( event, function(e) {

				// Skip events from child elements and z-index change
				if ( e && e.originalEvent && ( !$el.is( e.originalEvent.target ) || e.originalEvent.propertyName == 'z-index' ) ) {
					return;
				}

				$el.off( event );

				if ( $.isPlainObject( to ) ) {

					if ( to.scaleX !== undefined && to.scaleY !== undefined ) {
						$el.css( 'transition-duration', '0ms' );

						to.width  = $el.width()  * to.scaleX;
						to.height = $el.height() * to.scaleY;

						to.scaleX = 1;
						to.scaleY = 1;

						$.fancybox.setTranslate( $el, to );
					}

				} else if ( leaveAnimationName !== true ) {
					$el.removeClass( to );
				}

				if ( $.isFunction( callback ) ) {
					callback( e );
				}

			});

			if ( $.isNumeric( duration ) ) {
				$el.css( 'transition-duration', duration + 'ms' );
			}

			if ( $.isPlainObject( to ) ) {
				$.fancybox.setTranslate( $el, to );

			} else {
				$el.addClass( to );
			}

			$el.data("timer", setTimeout(function() {
				$el.trigger( 'transitionend' );
			}, duration + 16));

		},

		stop : function( $el ) {
			clearTimeout( $el.data("timer") );

			$el.off( transitionEnd );
		}

	};


	// Default click handler for "fancyboxed" links
	// ============================================

	function _run( e ) {
		var target	= e.currentTarget,
			opts	= e.data ? e.data.options : {},
			items	= e.data ? e.data.items : [],
			value	= $(target).attr( 'data-fancybox' ) || '',
			index	= 0;

		e.preventDefault();
		e.stopPropagation();

		// Get all related items and find index for clicked one
		if ( value ) {
			items = items.length ? items.filter( '[data-fancybox="' + value + '"]' ) : $( '[data-fancybox="' + value + '"]' );
			index = items.index( target );

			// Sometimes current item can not be found
			// (for example, when slider clones items)
			if ( index < 0 ) {
				index = 0;
			}

		} else {
			items = [ target ];
		}

		$.fancybox.open( items, opts, index );
	}


	// Create a jQuery plugin
	// ======================

	$.fn.fancybox = function (options) {
		var selector;

		options  = options || {};
		selector = options.selector || false;

		if ( selector ) {

			$( 'body' ).off( 'click.fb-start', selector ).on( 'click.fb-start', selector, {
				items   : $( selector ),
				options : options
			}, _run );

		} else {

			this.off( 'click.fb-start' ).on( 'click.fb-start', {
				items   : this,
				options : options
			}, _run);

		}

		return this;
	};


	// Self initializing plugin
	// ========================

	$D.on( 'click.fb-start', '[data-fancybox]', _run );

}( window, document, window.jQuery ));

// ==========================================================================
//
// Media
// Adds additional media type support
//
// ==========================================================================
;(function ($) {

	'use strict';

	// Formats matching url to final form

	var format = function (url, rez, params) {
		if ( !url ) {
			return;
		}

		params = params || '';

		if ( $.type(params) === "object" ) {
			params = $.param(params, true);
		}

		$.each(rez, function (key, value) {
			url = url.replace('$' + key, value || '');
		});

		if (params.length) {
			url += (url.indexOf('?') > 0 ? '&' : '?') + params;
		}

		return url;
	};

	// Object containing properties for each media type

	var defaults = {
		youtube : {
			matcher : /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
			params  : {
				autoplay : 1,
				autohide : 1,
				fs  : 1,
				rel : 0,
				hd  : 1,
				wmode : 'transparent',
				enablejsapi : 1,
				html5 : 1
			},
			paramPlace : 8,
			type  : 'iframe',
			url   : '//www.youtube.com/embed/$4',
			thumb : '//img.youtube.com/vi/$4/hqdefault.jpg'
		},

		vimeo : {
			matcher : /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
			params  : {
				autoplay : 1,
				hd : 1,
				show_title    : 1,
				show_byline   : 1,
				show_portrait : 0,
				fullscreen    : 1,
				api : 1
			},
			paramPlace : 3,
			type : 'iframe',
			url : '//player.vimeo.com/video/$2'
		},

		metacafe : {
			matcher : /metacafe.com\/watch\/(\d+)\/(.*)?/,
			type    : 'iframe',
			url     : '//www.metacafe.com/embed/$1/?ap=1'
		},

		dailymotion : {
			matcher : /dailymotion.com\/video\/(.*)\/?(.*)/,
			params : {
				additionalInfos : 0,
				autoStart : 1
			},
			type : 'iframe',
			url  : '//www.dailymotion.com/embed/video/$1'
		},

		vine : {
			matcher : /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
			type    : 'iframe',
			url     : '//vine.co/v/$1/embed/simple'
		},

		instagram : {
			matcher : /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
			type    : 'image',
			url     : '//$1/p/$2/media/?size=l'
		},

		// Examples:
		// http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
		// http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
		// https://www.google.lv/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
		google_maps : {
			matcher : /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
			type    : 'iframe',
			url     : function (rez) {
				return '//maps.google.' + rez[2] + '/?ll=' + ( rez[9] ? rez[9] + '&z=' + Math.floor(  rez[10]  ) + ( rez[12] ? rez[12].replace(/^\//, "&") : '' )  : rez[12] ) + '&output=' + ( rez[12] && rez[12].indexOf('layer=c') > 0 ? 'svembed' : 'embed' );
			}
		}
	};

	$(document).on('onInit.fb', function (e, instance) {

		$.each(instance.group, function( i, item ) {

			var url	 = item.src || '',
				type = false,
				media,
				thumb,
				rez,
				params,
				urlParams,
				o,
				provider;

			// Skip items that already have content type
			if ( item.type ) {
				return;
			}

			media = $.extend( true, {}, defaults, item.opts.media );

			// Look for any matching media type
			$.each(media, function ( n, el ) {
				rez = url.match(el.matcher);
				o   = {};
				provider = n;

				if (!rez) {
					return;
				}

				type = el.type;

				if ( el.paramPlace && rez[ el.paramPlace ] ) {
					urlParams = rez[ el.paramPlace ];

					if ( urlParams[ 0 ] == '?' ) {
						urlParams = urlParams.substring(1);
					}

					urlParams = urlParams.split('&');

					for ( var m = 0; m < urlParams.length; ++m ) {
						var p = urlParams[ m ].split('=', 2);

						if ( p.length == 2 ) {
							o[ p[0] ] = decodeURIComponent( p[1].replace(/\+/g, " ") );
						}
					}
				}

				params = $.extend( true, {}, el.params, item.opts[ n ], o );

				url   = $.type(el.url) === "function" ? el.url.call(this, rez, params, item) : format(el.url, rez, params);
				thumb = $.type(el.thumb) === "function" ? el.thumb.call(this, rez, params, item) : format(el.thumb, rez);

				if ( provider === 'vimeo' ) {
					url = url.replace('&%23', '#');
				}

				return false;
			});

			// If it is found, then change content type and update the url

			if ( type ) {
				item.src  = url;
				item.type = type;

				if ( !item.opts.thumb && !( item.opts.$thumb && item.opts.$thumb.length ) ) {
					item.opts.thumb = thumb;
				}

				if ( type === 'iframe' ) {
					$.extend(true, item.opts, {
						iframe : {
							preload : false,
							attr : {
								scrolling : "no"
							}
						}
					});

					item.contentProvider = provider;

					item.opts.slideClass += ' fancybox-slide--' + ( provider == 'google_maps' ? 'map' : 'video' );
				}

			} else {

				// If no content type is found, then set it to `image` as fallback
				item.type = 'image';
			}

		});

	});

}(window.jQuery));

// ==========================================================================
//
// Guestures
// Adds touch guestures, handles click and tap events
//
// ==========================================================================
;(function (window, document, $) {
	'use strict';

	var requestAFrame = (function () {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			// if all else fails, use setTimeout
			function (callback) {
				return window.setTimeout(callback, 1000 / 60);
			};
	})();


	var cancelAFrame = (function () {
		return window.cancelAnimationFrame ||
			window.webkitCancelAnimationFrame ||
			window.mozCancelAnimationFrame ||
			window.oCancelAnimationFrame ||
			function (id) {
				window.clearTimeout(id);
			};
	})();


	var pointers = function( e ) {
		var result = [];

		e = e.originalEvent || e || window.e;
		e = e.touches && e.touches.length ? e.touches : ( e.changedTouches && e.changedTouches.length ? e.changedTouches : [ e ] );

		for ( var key in e ) {

			if ( e[ key ].pageX ) {
				result.push( { x : e[ key ].pageX, y : e[ key ].pageY } );

			} else if ( e[ key ].clientX ) {
				result.push( { x : e[ key ].clientX, y : e[ key ].clientY } );
			}
		}

		return result;
	};

	var distance = function( point2, point1, what ) {
		if ( !point1 || !point2 ) {
			return 0;
		}

		if ( what === 'x' ) {
			return point2.x - point1.x;

		} else if ( what === 'y' ) {
			return point2.y - point1.y;
		}

		return Math.sqrt( Math.pow( point2.x - point1.x, 2 ) + Math.pow( point2.y - point1.y, 2 ) );
	};

	var isClickable = function( $el ) {
		if ( $el.is('a,button,input,select,textarea') || $.isFunction( $el.get(0).onclick ) ) {
			return true;
		}

		// Check for attributes like data-fancybox-next or data-fancybox-close
		for ( var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++ ) {
			if ( atts[i].nodeName.substr(0, 14) === 'data-fancybox-' ) {
				return true;
			}
		}

		return false;
	};

	var hasScrollbars = function( el ) {
		var overflowY = window.getComputedStyle( el )['overflow-y'];
		var overflowX = window.getComputedStyle( el )['overflow-x'];

		var vertical   = (overflowY === 'scroll' || overflowY === 'auto') && el.scrollHeight > el.clientHeight;
		var horizontal = (overflowX === 'scroll' || overflowX === 'auto') && el.scrollWidth > el.clientWidth;

		return vertical || horizontal;
	};

	var isScrollable = function ( $el ) {
		var rez = false;

		while ( true ) {
			rez	= hasScrollbars( $el.get(0) );

			if ( rez ) {
				break;
			}

			$el = $el.parent();

			if ( !$el.length || $el.hasClass( 'fancybox-stage' ) || $el.is( 'body' ) ) {
				break;
			}
		}

		return rez;
	};


	var Guestures = function ( instance ) {
		var self = this;

		self.instance = instance;

		self.$bg        = instance.$refs.bg;
		self.$stage     = instance.$refs.stage;
		self.$container = instance.$refs.container;

		self.destroy();

		self.$container.on( 'touchstart.fb.touch mousedown.fb.touch', $.proxy(self, 'ontouchstart') );
	};

	Guestures.prototype.destroy = function() {
		this.$container.off( '.fb.touch' );
	};

	Guestures.prototype.ontouchstart = function( e ) {
		var self = this;

		var $target  = $( e.target );
		var instance = self.instance;
		var current  = instance.current;
		var $content = current.$content;

		var isTouchDevice = ( e.type == 'touchstart' );

		// Do not respond to both events
		if ( isTouchDevice ) {
			self.$container.off( 'mousedown.fb.touch' );
		}

		// Ignore clicks while zooming or closing
		if ( !current || self.instance.isAnimating || self.instance.isClosing ) {
			e.stopPropagation();
			e.preventDefault();

			return;
		}

		// Ignore right click
		if ( e.originalEvent && e.originalEvent.button == 2 ) {
			return;
		}

		// Ignore taping on links, buttons, input elements
		if ( !$target.length || isClickable( $target ) || isClickable( $target.parent() ) ) {
			return;
		}

		// Ignore clicks on the scrollbar
		if ( e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left ) {
			return;
		}

		self.startPoints = pointers( e );

		// Prevent zooming if already swiping
		if ( !self.startPoints || ( self.startPoints.length > 1 && instance.isSliding ) ) {
			return;
		}

		self.$target  = $target;
		self.$content = $content;
		self.canTap   = true;

		$(document).off( '.fb.touch' );

		$(document).on( isTouchDevice ? 'touchend.fb.touch touchcancel.fb.touch' : 'mouseup.fb.touch mouseleave.fb.touch',  $.proxy(self, "ontouchend"));
		$(document).on( isTouchDevice ? 'touchmove.fb.touch' : 'mousemove.fb.touch',  $.proxy(self, "ontouchmove"));

		e.stopPropagation();

		if ( !(instance.current.opts.touch || instance.canPan() ) || !( $target.is( self.$stage ) || self.$stage.find( $target ).length ) ) {

			// Prevent ghosting
			if ( $target.is('img') ) {
				e.preventDefault();
			}

			return;
		}

		if ( !( $.fancybox.isMobile && ( isScrollable( self.$target ) || isScrollable( self.$target.parent() ) ) ) ) {
			e.preventDefault();
		}

		self.canvasWidth  = Math.round( current.$slide[0].clientWidth );
		self.canvasHeight = Math.round( current.$slide[0].clientHeight );

		self.startTime = new Date().getTime();
		self.distanceX = self.distanceY = self.distance = 0;

		self.isPanning = false;
		self.isSwiping = false;
		self.isZooming = false;

		self.sliderStartPos  = self.sliderLastPos || { top: 0, left: 0 };
		self.contentStartPos = $.fancybox.getTranslate( self.$content );
		self.contentLastPos  = null;

		if ( self.startPoints.length === 1 && !self.isZooming ) {
			self.canTap = !instance.isSliding;

			if ( current.type === 'image' && ( self.contentStartPos.width > self.canvasWidth + 1 || self.contentStartPos.height > self.canvasHeight + 1 ) ) {

				$.fancybox.stop( self.$content );

				self.$content.css( 'transition-duration', '0ms' );

				self.isPanning = true;

			} else {

				self.isSwiping = true;
			}

			self.$container.addClass('fancybox-controls--isGrabbing');
		}

		if ( self.startPoints.length === 2 && !instance.isAnimating && !current.hasError && current.type === 'image' && ( current.isLoaded || current.$ghost ) ) {
			self.isZooming = true;

			self.isSwiping = false;
			self.isPanning = false;

			$.fancybox.stop( self.$content );

			self.$content.css( 'transition-duration', '0ms' );

			self.centerPointStartX = ( ( self.startPoints[0].x + self.startPoints[1].x ) * 0.5 ) - $(window).scrollLeft();
			self.centerPointStartY = ( ( self.startPoints[0].y + self.startPoints[1].y ) * 0.5 ) - $(window).scrollTop();

			self.percentageOfImageAtPinchPointX = ( self.centerPointStartX - self.contentStartPos.left ) / self.contentStartPos.width;
			self.percentageOfImageAtPinchPointY = ( self.centerPointStartY - self.contentStartPos.top  ) / self.contentStartPos.height;

			self.startDistanceBetweenFingers = distance( self.startPoints[0], self.startPoints[1] );
		}

	};

	Guestures.prototype.ontouchmove = function( e ) {

		var self = this;

		self.newPoints = pointers( e );

		if ( $.fancybox.isMobile && ( isScrollable( self.$target ) || isScrollable( self.$target.parent() ) ) ) {
			e.stopPropagation();

			self.canTap = false;

			return;
		}

		if ( !( self.instance.current.opts.touch || self.instance.canPan() ) || !self.newPoints || !self.newPoints.length ) {
			return;
		}

		self.distanceX = distance( self.newPoints[0], self.startPoints[0], 'x' );
		self.distanceY = distance( self.newPoints[0], self.startPoints[0], 'y' );

		self.distance = distance( self.newPoints[0], self.startPoints[0] );

		// Skip false ontouchmove events (Chrome)
		if ( self.distance > 0 ) {

			if ( !( self.$target.is( self.$stage ) || self.$stage.find( self.$target ).length ) ) {
				return;
			}

			e.stopPropagation();
			e.preventDefault();

			if ( self.isSwiping ) {
				self.onSwipe();

			} else if ( self.isPanning ) {
				self.onPan();

			} else if ( self.isZooming ) {
				self.onZoom();
			}

		}

	};

	Guestures.prototype.onSwipe = function() {

		var self = this;

		var swiping = self.isSwiping;
		var left    = self.sliderStartPos.left || 0;
		var angle;

		if ( swiping === true ) {

			if ( Math.abs( self.distance ) > 10 )  {

				self.canTap = false;

				if ( self.instance.group.length < 2 && self.instance.opts.touch.vertical ) {
					self.isSwiping  = 'y';

				} else if ( self.instance.isSliding || self.instance.opts.touch.vertical === false || ( self.instance.opts.touch.vertical === 'auto' && $( window ).width() > 800 ) ) {
					self.isSwiping  = 'x';

				} else {
					angle = Math.abs( Math.atan2( self.distanceY, self.distanceX ) * 180 / Math.PI );

					self.isSwiping = ( angle > 45 && angle < 135 ) ? 'y' : 'x';
				}

				self.instance.isSliding = self.isSwiping;

				// Reset points to avoid jumping, because we dropped first swipes to calculate the angle
				self.startPoints = self.newPoints;

				$.each(self.instance.slides, function( index, slide ) {
					$.fancybox.stop( slide.$slide );

					slide.$slide.css( 'transition-duration', '0ms' );

					slide.inTransition = false;

					if ( slide.pos === self.instance.current.pos ) {
						self.sliderStartPos.left = $.fancybox.getTranslate( slide.$slide ).left;
					}
				});

				//self.instance.current.isMoved = true;

				// Stop slideshow
				if ( self.instance.SlideShow && self.instance.SlideShow.isActive ) {
					self.instance.SlideShow.stop();
				}
			}

		} else {

			if ( swiping == 'x' ) {

				// Sticky edges
				if ( self.distanceX > 0 && ( self.instance.group.length < 2 || ( self.instance.current.index === 0 && !self.instance.current.opts.loop ) ) ) {
					left = left + Math.pow( self.distanceX, 0.8 );

				} else if ( self.distanceX < 0 && ( self.instance.group.length < 2 || ( self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop ) ) ) {
					left = left - Math.pow( -self.distanceX, 0.8 );

				} else {
					left = left + self.distanceX;
				}

			}

			self.sliderLastPos = {
				top  : swiping == 'x' ? 0 : self.sliderStartPos.top + self.distanceY,
				left : left
			};

			if ( self.requestId ) {
				cancelAFrame( self.requestId );

				self.requestId = null;
			}

			self.requestId = requestAFrame(function() {

				if ( self.sliderLastPos ) {
					$.each(self.instance.slides, function( index, slide ) {
						var pos = slide.pos - self.instance.currPos;

						$.fancybox.setTranslate( slide.$slide, {
							top  : self.sliderLastPos.top,
							left : self.sliderLastPos.left + ( pos * self.canvasWidth ) + ( pos * slide.opts.gutter )
						});
					});

					self.$container.addClass( 'fancybox-is-sliding' );
				}

			});

		}

	};

	Guestures.prototype.onPan = function() {

		var self = this;

		var newOffsetX, newOffsetY, newPos;

		self.canTap = false;

		if ( self.contentStartPos.width > self.canvasWidth ) {
			newOffsetX = self.contentStartPos.left + self.distanceX;

		} else {
			newOffsetX = self.contentStartPos.left;
		}

		newOffsetY = self.contentStartPos.top + self.distanceY;

		newPos = self.limitMovement( newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height );

		newPos.scaleX = self.contentStartPos.scaleX;
		newPos.scaleY = self.contentStartPos.scaleY;

		self.contentLastPos = newPos;

		if ( self.requestId ) {
			cancelAFrame( self.requestId );

			self.requestId = null;
		}

		self.requestId = requestAFrame(function() {
			$.fancybox.setTranslate( self.$content, self.contentLastPos );
		});
	};

	// Make panning sticky to the edges
	Guestures.prototype.limitMovement = function( newOffsetX, newOffsetY, newWidth, newHeight ) {

		var self = this;

		var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY;

		var canvasWidth  = self.canvasWidth;
		var canvasHeight = self.canvasHeight;

		var currentOffsetX = self.contentStartPos.left;
		var currentOffsetY = self.contentStartPos.top;

		var distanceX = self.distanceX;
		var distanceY = self.distanceY;

		// Slow down proportionally to traveled distance

		minTranslateX = Math.max(0, canvasWidth  * 0.5 - newWidth  * 0.5 );
		minTranslateY = Math.max(0, canvasHeight * 0.5 - newHeight * 0.5 );

		maxTranslateX = Math.min( canvasWidth  - newWidth,  canvasWidth  * 0.5 - newWidth  * 0.5 );
		maxTranslateY = Math.min( canvasHeight - newHeight, canvasHeight * 0.5 - newHeight * 0.5 );

		if ( newWidth > canvasWidth ) {

			//   ->
			if ( distanceX > 0 && newOffsetX > minTranslateX ) {
				newOffsetX = minTranslateX - 1 + Math.pow( -minTranslateX + currentOffsetX + distanceX, 0.8 ) || 0;
			}

			//    <-
			if ( distanceX  < 0 && newOffsetX < maxTranslateX ) {
				newOffsetX = maxTranslateX + 1 - Math.pow( maxTranslateX - currentOffsetX - distanceX, 0.8 ) || 0;
			}

		}

		if ( newHeight > canvasHeight ) {

			//   \/
			if ( distanceY > 0 && newOffsetY > minTranslateY ) {
				newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8 ) || 0;
			}

			//   /\
			if ( distanceY < 0 && newOffsetY < maxTranslateY ) {
				newOffsetY = maxTranslateY + 1 - Math.pow ( maxTranslateY - currentOffsetY - distanceY, 0.8 ) || 0;
			}

		}

		return {
			top  : newOffsetY,
			left : newOffsetX
		};

	};


	Guestures.prototype.limitPosition = function( newOffsetX, newOffsetY, newWidth, newHeight ) {

		var self = this;

		var canvasWidth  = self.canvasWidth;
		var canvasHeight = self.canvasHeight;

		if ( newWidth > canvasWidth ) {
			newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
			newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;

		} else {

			// Center horizontally
			newOffsetX = Math.max( 0, canvasWidth / 2 - newWidth / 2 );

		}

		if ( newHeight > canvasHeight ) {
			newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
			newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;

		} else {

			// Center vertically
			newOffsetY = Math.max( 0, canvasHeight / 2 - newHeight / 2 );

		}

		return {
			top  : newOffsetY,
			left : newOffsetX
		};

	};

	Guestures.prototype.onZoom = function() {

		var self = this;

		// Calculate current distance between points to get pinch ratio and new width and height

		var currentWidth  = self.contentStartPos.width;
		var currentHeight = self.contentStartPos.height;

		var currentOffsetX = self.contentStartPos.left;
		var currentOffsetY = self.contentStartPos.top;

		var endDistanceBetweenFingers = distance( self.newPoints[0], self.newPoints[1] );

		var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;

		var newWidth  = Math.floor( currentWidth  * pinchRatio );
		var newHeight = Math.floor( currentHeight * pinchRatio );

		// This is the translation due to pinch-zooming
		var translateFromZoomingX = (currentWidth  - newWidth)  * self.percentageOfImageAtPinchPointX;
		var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;

		//Point between the two touches

		var centerPointEndX = ((self.newPoints[0].x + self.newPoints[1].x) / 2) - $(window).scrollLeft();
		var centerPointEndY = ((self.newPoints[0].y + self.newPoints[1].y) / 2) - $(window).scrollTop();

		// And this is the translation due to translation of the centerpoint
		// between the two fingers

		var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
		var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;

		// The new offset is the old/current one plus the total translation

		var newOffsetX = currentOffsetX + ( translateFromZoomingX + translateFromTranslatingX );
		var newOffsetY = currentOffsetY + ( translateFromZoomingY + translateFromTranslatingY );

		var newPos = {
			top    : newOffsetY,
			left   : newOffsetX,
			scaleX : self.contentStartPos.scaleX * pinchRatio,
			scaleY : self.contentStartPos.scaleY * pinchRatio
		};

		self.canTap = false;

		self.newWidth  = newWidth;
		self.newHeight = newHeight;

		self.contentLastPos = newPos;

		if ( self.requestId ) {
			cancelAFrame( self.requestId );

			self.requestId = null;
		}

		self.requestId = requestAFrame(function() {
			$.fancybox.setTranslate( self.$content, self.contentLastPos );
		});

	};

	Guestures.prototype.ontouchend = function( e ) {

		var self = this;
		var dMs  = Math.max( (new Date().getTime() ) - self.startTime, 1);

		var swiping = self.isSwiping;
		var panning = self.isPanning;
		var zooming = self.isZooming;

		self.endPoints = pointers( e );

		self.$container.removeClass( 'fancybox-controls--isGrabbing' );

		$(document).off( '.fb.touch' );

		if ( self.requestId ) {
			cancelAFrame( self.requestId );

			self.requestId = null;
		}

		self.isSwiping = false;
		self.isPanning = false;
		self.isZooming = false;

		if ( self.canTap )  {
			return self.onTap( e );
		}

		self.speed = 366;

		// Speed in px/ms
		self.velocityX = self.distanceX / dMs * 0.5;
		self.velocityY = self.distanceY / dMs * 0.5;

		self.speedX = Math.max( self.speed * 0.5, Math.min( self.speed * 1.5, ( 1 / Math.abs( self.velocityX ) ) * self.speed ) );

		if ( panning ) {
			self.endPanning();

		} else if ( zooming ) {
			self.endZooming();

		} else {
			self.endSwiping( swiping );
		}

		return;
	};

	Guestures.prototype.endSwiping = function( swiping ) {

		var self = this;
		var ret = false;

		self.instance.isSliding = false;
		self.sliderLastPos      = null;

		// Close if swiped vertically / navigate if horizontally
		if ( swiping == 'y' && Math.abs( self.distanceY ) > 50 ) {

			// Continue vertical movement
			$.fancybox.animate( self.instance.current.$slide, {
				top     : self.sliderStartPos.top + self.distanceY + ( self.velocityY * 150 ),
				opacity : 0
			}, 150 );

			ret = self.instance.close( true, 300 );

		} else if ( swiping == 'x' && self.distanceX > 50 && self.instance.group.length > 1 ) {
			ret = self.instance.previous( self.speedX );

		} else if ( swiping == 'x' && self.distanceX < -50  && self.instance.group.length > 1 ) {
			ret = self.instance.next( self.speedX );
		}

		if ( ret === false && ( swiping == 'x' || swiping == 'y' ) ) {
			self.instance.jumpTo( self.instance.current.index, 150 );
		}

		self.$container.removeClass( 'fancybox-is-sliding' );

	};

	// Limit panning from edges
	// ========================

	Guestures.prototype.endPanning = function() {

		var self = this;
		var newOffsetX, newOffsetY, newPos;

		if ( !self.contentLastPos ) {
			return;
		}

		if ( self.instance.current.opts.touch.momentum === false ) {
			newOffsetX = self.contentLastPos.left;
			newOffsetY = self.contentLastPos.top;

		} else {

			// Continue movement
			newOffsetX = self.contentLastPos.left + ( self.velocityX * self.speed );
			newOffsetY = self.contentLastPos.top  + ( self.velocityY * self.speed );
		}

		newPos = self.limitPosition( newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height );

		newPos.width  = self.contentStartPos.width;
		newPos.height = self.contentStartPos.height;

		$.fancybox.animate( self.$content, newPos, 330 );
	};


	Guestures.prototype.endZooming = function() {

		var self = this;

		var current = self.instance.current;

		var newOffsetX, newOffsetY, newPos, reset;

		var newWidth  = self.newWidth;
		var newHeight = self.newHeight;

		if ( !self.contentLastPos ) {
			return;
		}

		newOffsetX = self.contentLastPos.left;
		newOffsetY = self.contentLastPos.top;

		reset = {
			top    : newOffsetY,
			left   : newOffsetX,
			width  : newWidth,
			height : newHeight,
			scaleX : 1,
			scaleY : 1
		};

		// Reset scalex/scaleY values; this helps for perfomance and does not break animation
		$.fancybox.setTranslate( self.$content, reset );

		if ( newWidth < self.canvasWidth && newHeight < self.canvasHeight ) {
			self.instance.scaleToFit( 150 );

		} else if ( newWidth > current.width || newHeight > current.height ) {
			self.instance.scaleToActual( self.centerPointStartX, self.centerPointStartY, 150 );

		} else {

			newPos = self.limitPosition( newOffsetX, newOffsetY, newWidth, newHeight );

			// Switch from scale() to width/height or animation will not work correctly
			$.fancybox.setTranslate( self.content, $.fancybox.getTranslate( self.$content ) );

			$.fancybox.animate( self.$content, newPos, 150 );
		}

	};

	Guestures.prototype.onTap = function(e) {
		var self    = this;
		var $target = $( e.target );

		var instance = self.instance;
		var current  = instance.current;

		var endPoints = ( e && pointers( e ) ) || self.startPoints;

		var tapX = endPoints[0] ? endPoints[0].x - self.$stage.offset().left : 0;
		var tapY = endPoints[0] ? endPoints[0].y - self.$stage.offset().top  : 0;

		var where;

		var process = function ( prefix ) {

			var action = current.opts[ prefix ];

			if ( $.isFunction( action ) ) {
				action = action.apply( instance, [ current, e ] );
			}

			if ( !action) {
				return;
			}

			switch ( action ) {

				case "close" :

					instance.close( self.startEvent );

					break;

				case "toggleControls" :

					instance.toggleControls( true );

					break;

				case "next" :

					instance.next();

					break;

				case "nextOrClose" :

					if ( instance.group.length > 1 ) {
						instance.next();

					} else {
						instance.close( self.startEvent );
					}

					break;

				case "zoom" :

					if ( current.type == 'image' && ( current.isLoaded || current.$ghost ) ) {

						if ( instance.canPan() ) {
							instance.scaleToFit();

						} else if ( instance.isScaledDown() ) {
							instance.scaleToActual( tapX, tapY );

						} else if ( instance.group.length < 2 ) {
							instance.close( self.startEvent );
						}
					}

					break;
			}

		};

		// Ignore right click
		if ( e.originalEvent && e.originalEvent.button == 2 ) {
			return;
		}

		// Skip if current slide is not in the center
		if ( instance.isSliding ) {
			return;
		}

		// Skip if clicked on the scrollbar
		if ( tapX > $target[0].clientWidth + $target.offset().left ) {
			return;
		}

		// Check where is clicked
		if ( $target.is( '.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container' ) ) {
			where = 'Outside';

		} else if ( $target.is( '.fancybox-slide' ) ) {
			where = 'Slide';

		} else if  ( instance.current.$content && instance.current.$content.has( e.target ).length ) {
			where = 'Content';

		} else {
			return;
		}

		// Check if this is a double tap
		if ( self.tapped ) {

			// Stop previously created single tap
			clearTimeout( self.tapped );
			self.tapped = null;

			// Skip if distance between taps is too big
			if ( Math.abs( tapX - self.tapX ) > 50 || Math.abs( tapY - self.tapY ) > 50 || instance.isSliding ) {
				return this;
			}

			// OK, now we assume that this is a double-tap
			process( 'dblclick' + where );

		} else {

			// Single tap will be processed if user has not clicked second time within 300ms
			// or there is no need to wait for double-tap
			self.tapX = tapX;
			self.tapY = tapY;

			if ( current.opts[ 'dblclick' + where ] && current.opts[ 'dblclick' + where ] !== current.opts[ 'click' + where ] ) {
				self.tapped = setTimeout(function() {
					self.tapped = null;

					process( 'click' + where );

				}, 300);

			} else {
				process( 'click' + where );
			}

		}

		return this;
	};

	$(document).on('onActivate.fb', function (e, instance) {
		if ( instance && !instance.Guestures ) {
			instance.Guestures = new Guestures( instance );
		}
	});

	$(document).on('beforeClose.fb', function (e, instance) {
		if ( instance && instance.Guestures ) {
			instance.Guestures.destroy();
		}
	});


}(window, document, window.jQuery));

// ==========================================================================
//
// SlideShow
// Enables slideshow functionality
//
// Example of usage:
// $.fancybox.getInstance().SlideShow.start()
//
// ==========================================================================
;(function (document, $) {
	'use strict';

	var SlideShow = function( instance ) {
		this.instance = instance;
		this.init();
	};

	$.extend( SlideShow.prototype, {
		timer    : null,
		isActive : false,
		$button  : null,
		speed    : 3000,

		init : function() {
			var self = this;

			self.$button = self.instance.$refs.toolbar.find('[data-fancybox-play]').on('click', function() {
				self.toggle();
			});

			if ( self.instance.group.length < 2 || !self.instance.group[ self.instance.currIndex ].opts.slideShow ) {
				self.$button.hide();
			}
		},

		set : function() {
			var self = this;

			// Check if reached last element
			if ( self.instance && self.instance.current && (self.instance.current.opts.loop || self.instance.currIndex < self.instance.group.length - 1 )) {
				self.timer = setTimeout(function() {
					self.instance.next();

				}, self.instance.current.opts.slideShow.speed || self.speed);

			} else {
				self.stop();
				self.instance.idleSecondsCounter = 0;
				self.instance.showControls();
			}

		},

		clear : function() {
			var self = this;

			clearTimeout( self.timer );

			self.timer = null;
		},

		start : function() {
			var self = this;
			var current = self.instance.current;

			if ( self.instance && current && ( current.opts.loop || current.index < self.instance.group.length - 1 )) {

				self.isActive = true;

				self.$button
					.attr( 'title', current.opts.i18n[ current.opts.lang ].PLAY_STOP )
					.addClass( 'fancybox-button--pause' );

				if ( current.isComplete ) {
					self.set();
				}
			}
		},

		stop : function() {
			var self = this;
			var current = self.instance.current;

			self.clear();

			self.$button
				.attr( 'title', current.opts.i18n[ current.opts.lang ].PLAY_START )
				.removeClass( 'fancybox-button--pause' );

			self.isActive = false;
		},

		toggle : function() {
			var self = this;

			if ( self.isActive ) {
				self.stop();

			} else {
				self.start();
			}
		}

	});

	$(document).on({
		'onInit.fb' : function(e, instance) {
			if ( instance && !instance.SlideShow ) {
				instance.SlideShow = new SlideShow( instance );
			}
		},

		'beforeShow.fb' : function(e, instance, current, firstRun) {
			var SlideShow = instance && instance.SlideShow;

			if ( firstRun ) {

				if ( SlideShow && current.opts.slideShow.autoStart ) {
					SlideShow.start();
				}

			} else if ( SlideShow && SlideShow.isActive )  {
				SlideShow.clear();
			}
		},

		'afterShow.fb' : function(e, instance, current) {
			var SlideShow = instance && instance.SlideShow;

			if ( SlideShow && SlideShow.isActive ) {
				SlideShow.set();
			}
		},

		'afterKeydown.fb' : function(e, instance, current, keypress, keycode) {
			var SlideShow = instance && instance.SlideShow;

			// "P" or Spacebar
			if ( SlideShow && current.opts.slideShow && ( keycode === 80 || keycode === 32 ) && !$(document.activeElement).is( 'button,a,input' ) ) {
				keypress.preventDefault();

				SlideShow.toggle();
			}
		},

		'beforeClose.fb onDeactivate.fb' : function(e, instance) {
			var SlideShow = instance && instance.SlideShow;

			if ( SlideShow ) {
				SlideShow.stop();
			}
		}
	});

	// Page Visibility API to pause slideshow when window is not active
	$(document).on("visibilitychange", function() {
		var instance  = $.fancybox.getInstance();
		var SlideShow = instance && instance.SlideShow;

		if ( SlideShow && SlideShow.isActive ) {
			if ( document.hidden ) {
				SlideShow.clear();

			} else {
				SlideShow.set();
			}
		}
	});

}(document, window.jQuery));

// ==========================================================================
//
// FullScreen
// Adds fullscreen functionality
//
// ==========================================================================
;(function (document, $) {
	'use strict';

	// Collection of methods supported by user browser
	var fn = (function () {

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// new WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var val;
		var ret = {};
		var i, j;

		for ( i = 0; i < fnMap.length; i++ ) {
			val = fnMap[ i ];

			if ( val && val[ 1 ] in document ) {
				for ( j = 0; j < val.length; j++ ) {
					ret[ fnMap[ 0 ][ j ] ] = val[ j ];
				}

				return ret;
			}
		}

		return false;
	})();

	// If browser does not have Full Screen API, then simply unset default button template and stop
	if ( !fn ) {
		$.fancybox.defaults.btnTpl.fullScreen = false;

		return;
	}

	var FullScreen = {
		request : function ( elem ) {

			elem = elem || document.documentElement;

			elem[ fn.requestFullscreen ]( elem.ALLOW_KEYBOARD_INPUT );

		},
		exit : function () {

			document[ fn.exitFullscreen ]();

		},
		toggle : function ( elem ) {

			elem = elem || document.documentElement;

			if ( this.isFullscreen() ) {
				this.exit();

			} else {
				this.request( elem );
			}

		},
		isFullscreen : function()  {

			return Boolean( document[ fn.fullscreenElement ] );

		},
		enabled : function()  {

			return Boolean( document[ fn.fullscreenEnabled ] );

		}
	};

	$(document).on({
		'onInit.fb' : function(e, instance) {
			var $container;

			var $button = instance.$refs.toolbar.find('[data-fancybox-fullscreen]');

			if ( instance && !instance.FullScreen && instance.group[ instance.currIndex ].opts.fullScreen ) {
				$container = instance.$refs.container;

				$container.on('click.fb-fullscreen', '[data-fancybox-fullscreen]', function(e) {

					e.stopPropagation();
					e.preventDefault();

					FullScreen.toggle( $container[ 0 ] );

				});

				if ( instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true ) {
					FullScreen.request( $container[ 0 ] );
				}

				// Expose API
				instance.FullScreen = FullScreen;

			} else {
				$button.hide();
			}

		},

		'afterKeydown.fb' : function(e, instance, current, keypress, keycode) {

			// "P" or Spacebar
			if ( instance && instance.FullScreen && keycode === 70 ) {
				keypress.preventDefault();

				instance.FullScreen.toggle( instance.$refs.container[ 0 ] );
			}

		},

		'beforeClose.fb' : function( instance ) {
			if ( instance && instance.FullScreen ) {
				FullScreen.exit();
			}
		}
	});

	$(document).on(fn.fullscreenchange, function() {
		var instance = $.fancybox.getInstance();

		// If image is zooming, then force to stop and reposition properly
		if ( instance.current && instance.current.type === 'image' && instance.isAnimating ) {
			instance.current.$content.css( 'transition', 'none' );

			instance.isAnimating = false;

			instance.update( true, true, 0 );
		}

	});

}(document, window.jQuery));

// ==========================================================================
//
// Thumbs
// Displays thumbnails in a grid
//
// ==========================================================================
;(function (document, $) {
	'use strict';

	var FancyThumbs = function( instance ) {
		this.instance = instance;
		this.init();
	};

	$.extend( FancyThumbs.prototype, {

		$button		: null,
		$grid		: null,
		$list		: null,
		isVisible	: false,

		init : function() {
			var self = this;

			var first  = self.instance.group[0],
				second = self.instance.group[1];

			self.$button = self.instance.$refs.toolbar.find( '[data-fancybox-thumbs]' );

			if ( self.instance.group.length > 1 && self.instance.group[ self.instance.currIndex ].opts.thumbs && (
					( first.type == 'image'  || first.opts.thumb  || first.opts.$thumb ) &&
					( second.type == 'image' || second.opts.thumb || second.opts.$thumb )
				)) {

				self.$button.on('click', function() {
					self.toggle();
				});

				self.isActive = true;

			} else {
				self.$button.hide();

				self.isActive = false;
			}

		},

		create : function() {
			var instance = this.instance,
				list,
				src;

			this.$grid = $('<div class="fancybox-thumbs"></div>').appendTo( instance.$refs.container );

			list = '<ul>';

			$.each(instance.group, function( i, item ) {

				src = item.opts.thumb || ( item.opts.$thumb ? item.opts.$thumb.attr('src') : null );

				if ( !src && item.type === 'image' ) {
					src = item.src;
				}

				if ( src && src.length ) {
					list += '<li data-index="' + i + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + src + '" /></li>';
				}

			});

			list += '</ul>';

			this.$list = $( list ).appendTo( this.$grid ).on('click', 'li', function() {
				instance.jumpTo( $(this).data('index') );
			});

			this.$list.find('img').hide().one('load', function() {

				var $parent		= $(this).parent().removeClass('fancybox-thumbs-loading'),
					thumbWidth	= $parent.outerWidth(),
					thumbHeight	= $parent.outerHeight(),
					width,
					height,
					widthRatio,
					heightRatio;

				width  = this.naturalWidth	|| this.width;
				height = this.naturalHeight	|| this.height;

				//Calculate thumbnail width/height and center it

				widthRatio  = width  / thumbWidth;
				heightRatio = height / thumbHeight;

				if (widthRatio >= 1 && heightRatio >= 1) {
					if (widthRatio > heightRatio) {
						width  = width / heightRatio;
						height = thumbHeight;

					} else {
						width  = thumbWidth;
						height = height / widthRatio;
					}
				}

				$(this).css({
					width         : Math.floor(width),
					height        : Math.floor(height),
					'margin-top'  : Math.min( 0, Math.floor(thumbHeight * 0.3 - height * 0.3 ) ),
					'margin-left' : Math.min( 0, Math.floor(thumbWidth  * 0.5 - width  * 0.5 ) )
				}).show();

			})
				.each(function() {
					this.src = $( this ).data( 'src' );
				});

		},

		focus : function() {

			if ( this.instance.current ) {
				this.$list
					.children()
					.removeClass('fancybox-thumbs-active')
					.filter('[data-index="' + this.instance.current.index  + '"]')
					.addClass('fancybox-thumbs-active')
					.focus();
			}

		},

		close : function() {
			this.$grid.hide();
		},

		update : function() {

			this.instance.$refs.container.toggleClass( 'fancybox-show-thumbs', this.isVisible );

			if ( this.isVisible ) {

				if ( !this.$grid ) {
					this.create();
				}

				this.instance.trigger( 'onThumbsShow' );

				this.focus();

			} else if ( this.$grid ) {
				this.instance.trigger( 'onThumbsHide' );
			}

			// Update content position
			this.instance.update();

		},

		hide : function() {
			this.isVisible = false;
			this.update();
		},

		show : function() {
			this.isVisible = true;
			this.update();
		},

		toggle : function() {
			this.isVisible = !this.isVisible;
			this.update();
		}

	});

	$(document).on({

		'onInit.fb' : function(e, instance) {
			if ( instance && !instance.Thumbs ) {
				instance.Thumbs = new FancyThumbs( instance );
			}
		},

		'beforeShow.fb' : function(e, instance, item, firstRun) {
			var Thumbs = instance && instance.Thumbs;

			if ( !Thumbs || !Thumbs.isActive ) {
				return;
			}

			if ( item.modal ) {
				Thumbs.$button.hide();

				Thumbs.hide();

				return;
			}

			if ( firstRun && instance.opts.thumbs.autoStart === true ) {
				Thumbs.show();
			}

			if ( Thumbs.isVisible ) {
				Thumbs.focus();
			}
		},

		'afterKeydown.fb' : function(e, instance, current, keypress, keycode) {
			var Thumbs = instance && instance.Thumbs;

			// "G"
			if ( Thumbs && Thumbs.isActive && keycode === 71 ) {
				keypress.preventDefault();

				Thumbs.toggle();
			}
		},

		'beforeClose.fb' : function( e, instance ) {
			var Thumbs = instance && instance.Thumbs;

			if ( Thumbs && Thumbs.isVisible && instance.opts.thumbs.hideOnClose !== false ) {
				Thumbs.close();
			}
		}

	});

}(document, window.jQuery));

// ==========================================================================
//
// Hash
// Enables linking to each modal
//
// ==========================================================================
;(function (document, window, $) {
	'use strict';

	// Simple $.escapeSelector polyfill (for jQuery prior v3)
	if ( !$.escapeSelector ) {
		$.escapeSelector = function( sel ) {
			var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
			var fcssescape = function( ch, asCodePoint ) {
				if ( asCodePoint ) {
					// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
					if ( ch === "\0" ) {
						return "\uFFFD";
					}

					// Control characters and (dependent upon position) numbers get escaped as code points
					return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
				}

				// Other potentially-special ASCII characters get backslash-escaped
				return "\\" + ch;
			};

			return ( sel + "" ).replace( rcssescape, fcssescape );
		};
	}

	// Variable containing last hash value set by fancyBox
	// It will be used to determine if fancyBox needs to close after hash change is detected
	var currentHash = null;

	// Throtlling the history change
	var timerID = null;

	// Get info about gallery name and current index from url
	function parseUrl() {
		var hash    = window.location.hash.substr( 1 );
		var rez     = hash.split( '-' );
		var index   = rez.length > 1 && /^\+?\d+$/.test( rez[ rez.length - 1 ] ) ? parseInt( rez.pop( -1 ), 10 ) || 1 : 1;
		var gallery = rez.join( '-' );

		// Index is starting from 1
		if ( index < 1 ) {
			index = 1;
		}

		return {
			hash    : hash,
			index   : index,
			gallery : gallery
		};
	}

	// Trigger click evnt on links to open new fancyBox instance
	function triggerFromUrl( url ) {
		var $el;

		if ( url.gallery !== '' ) {

			// If we can find element matching 'data-fancybox' atribute, then trigger click event for that ..
			$el = $( "[data-fancybox='" + $.escapeSelector( url.gallery ) + "']" ).eq( url.index - 1 );

			if ( $el.length ) {
				$el.trigger( 'click' );

			} else {

				// .. if not, try finding element by ID
				$( "#" + $.escapeSelector( url.gallery ) + "" ).trigger( 'click' );

			}

		}
	}

	// Get gallery name from current instance
	function getGallery( instance ) {
		var opts;

		if ( !instance ) {
			return false;
		}

		opts = instance.current ? instance.current.opts : instance.opts;

		return opts.$orig ? opts.$orig.data( 'fancybox' ) : ( opts.hash || '' );
	}

	// Star when DOM becomes ready
	$(function() {

		// Small delay is used to allow other scripts to process "dom ready" event
		setTimeout(function() {

			// Check if this module is not disabled
			if ( $.fancybox.defaults.hash === false ) {
				return;
			}

			// Update hash when opening/closing fancyBox
			$(document).on({
				'onInit.fb' : function( e, instance ) {
					var url, gallery;

					if ( instance.group[ instance.currIndex ].opts.hash === false ) {
						return;
					}

					url     = parseUrl();
					gallery = getGallery( instance );

					// Make sure gallery start index matches index from hash
					if ( gallery && url.gallery && gallery == url.gallery ) {
						instance.currIndex = url.index - 1;
					}

				},

				'beforeShow.fb' : function( e, instance, current, firstRun ) {
					var gallery;

					if ( current.opts.hash === false ) {
						return;
					}

					gallery = getGallery( instance );

					// Update window hash
					if ( gallery && gallery !== '' ) {

						if ( window.location.hash.indexOf( gallery ) < 0 ) {
							instance.opts.origHash = window.location.hash;
						}

						currentHash = gallery + ( instance.group.length > 1 ? '-' + ( current.index + 1 ) : '' );

						if ( 'replaceState' in window.history ) {
							if ( timerID ) {
								clearTimeout( timerID );
							}

							timerID = setTimeout(function() {
								window.history[ firstRun ? 'pushState' : 'replaceState' ]( {} , document.title, window.location.pathname + window.location.search + '#' +  currentHash );

								timerID = null;

							}, 300);

						} else {
							window.location.hash = currentHash;
						}

					}

				},

				'beforeClose.fb' : function( e, instance, current ) {
					var gallery, origHash;

					if ( timerID ) {
						clearTimeout( timerID );
					}

					if ( current.opts.hash === false ) {
						return;
					}

					gallery  = getGallery( instance );
					origHash = instance && instance.opts.origHash ? instance.opts.origHash : '';

					// Remove hash from location bar
					if ( gallery && gallery !== '' ) {

						if ( 'replaceState' in history ) {
							window.history.replaceState( {} , document.title, window.location.pathname + window.location.search + origHash );

						} else {
							window.location.hash = origHash;

							// Keep original scroll position
							$( window ).scrollTop( instance.scrollTop ).scrollLeft( instance.scrollLeft );
						}
					}

					currentHash = null;
				}
			});

			// Check if need to close after url has changed
			$(window).on('hashchange.fb', function() {
				var url = parseUrl();

				if ( $.fancybox.getInstance() ) {
					if ( currentHash && currentHash !== url.gallery + '-' + url.index && !( url.index === 1 && currentHash == url.gallery ) ) {
						currentHash = null;

						$.fancybox.close();
					}

				} else if ( url.gallery !== '' ) {
					triggerFromUrl( url );
				}
			});

			// If navigating away from current page
			$(window).one('unload.fb popstate.fb', function() {
				$.fancybox.getInstance( 'close', true, 0 );
			});

			// Check current hash and trigger click event on matching element to start fancyBox, if needed
			triggerFromUrl( parseUrl() );

		}, 50);

	});


}(document, window, window.jQuery));
/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function( $ ){

  'use strict';

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed'
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(count){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + count;
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );


;(function($){
	$(document).ready(function(){

		$('body').addClass('js');



		/********************************************
		 * 		Mmenu navigation menu
		 ********************************************/
		var $btn_mobile_menu = $("#btn-mobile-menu");
		$("#navmob").mmenu({
			"navbar": {
				"add": false
			}
		}, {
			// configuration
			offCanvas: {
				pageSelector: "#playground"
			},
			classNames: {
				selected: "current-menu-item"
			}
		});
		var API = $("#navmob").data( "mmenu" );

		$btn_mobile_menu.on('click', function() {
			API.open();
		});

		API.bind( "open:finish", function() {
			setTimeout(function() {
				$btn_mobile_menu.addClass( "active" );
			}, 100);
		});

		API.bind( "close:finish", function() {
			setTimeout(function() {
				$btn_mobile_menu.removeClass( "active" );
			}, 100);
		});



		/********************************************
		 * 		when items become links
		 ********************************************/
		// ex 1: <div data-link="http://www.redpik.net">...</div>
		// ex 2: <div data-link="http://www.redpik.net" data-blank="1">...</div>
		$('[data-link]').on('click', function() {
			var url = $(this).data('link');
			var blank = $(this).data('blank');
			if (blank)
				window.open(url);
			else {
				window.location = url;
			}
			return false;
		});
		// propagation problem?
		$('[data-link] a').on('click', function(e) {
			e.stopPropagation();
		});



		/********************************************
		 * 		rel attribute for galleries
		 ********************************************/
		$('.gallery').each(function() {
			var $_gal = $(this);
			var idgal = $_gal.attr('id');
			$('a', $_gal).attr('data-fancybox', idgal);
		});



		/********************************************
		 * 		Popin images with fancybox
		 ********************************************/
		$('.fancybox, a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]').fancybox({
			loop: true
		});



		/********************************************
		 * 		fitvids.js
		 ********************************************/
		$(".entry-content").fitVids();
		$(".entry-content").fitVids({ customSelector: "iframe[src*='dailymotion.com']"});

	});
})(window.jQuery);
