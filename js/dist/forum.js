module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=8)}([function(t,e){t.exports=flarum.core.compat["common/app"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/TextEditor"]},function(t,e){t.exports=flarum.core.compat["common/Component"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/utils/classList"]},function(t,e){t.exports=flarum.core.compat["common/components/Tooltip"]},,function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),c=o(1),i=o(2),a=o.n(i);var u=o(3),p=o.n(u),s=o(4),l=o.n(s),d=o(5),f=o.n(d),h=o(6),w=o.n(h);var v=function(t){var e,o;o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o;var n;n=r;function r(){return t.apply(this,arguments)||this}var c=r.prototype;return c.view=function(){var t=this.popupSize();return m(w.a,{text:app.translator.trans("akr-chevereto.forum.composer.upload_button_details")},m(l.a,{className:f()(["Button","hasIcon"]),onclick:function(){window.open(app.forum.attribute("akr-chevereto.url"),Date.now(),"width="+t.w+",height="+t.h+",top="+t.t+",left="+t.l)},icon:"fas fa-file-upload"},app.translator.trans("akr-chevereto.forum.composer.upload_button")))},c.popupSize=function(){var t=null!=window.screenLeft?window.screenLeft:screen.left,e=null!=window.screenTop?window.screenTop:screen.top,o=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,n=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,r={w:720/o>.5?.5*o:720,h:690/n>.85?.85*n:690};return r.l=Math.trunc(o/2-r.w/2+t),r.t=Math.trunc(n/2-r.h/2+e),r},r}(p.a),b=!1;r.a.initializers.add("akr-chevereto",(function(t){Object(c.extend)(a.a.prototype,"oncreate",(function(){t.forum.attribute("akr-chevereto.url")&&!b&&(window.addEventListener("message",(function(t){t.data.id&&("postSettings"==t.data.requestAction&&t.source.postMessage({id:t.data.id,settings:{autoInsert:r.a.forum.attribute("akr-chevereto.insert_type")}},t.origin),t.data.message&&r.a.composer.editor&&r.a.composer.editor.insertAt(-1,t.data.message))})),b=!0)})),Object(c.extend)(a.a.prototype,"controlItems",(function(e){t.forum.attribute("akr-chevereto.url")&&e.add("akr-chevereto",v.component())}))}))}]);
//# sourceMappingURL=forum.js.map