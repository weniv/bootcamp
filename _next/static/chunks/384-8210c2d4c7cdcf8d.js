(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[384],{9029:function(n,t,e){var Symbol=e(2242).Symbol;n.exports=Symbol},6714:function(n,t,e){var Symbol=e(9029),o=e(5078),i=e(6276),r=Symbol?Symbol.toStringTag:void 0;n.exports=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":r&&r in Object(n)?o(n):i(n)}},3225:function(n,t,e){var o=e(121),i=/^\s+/;n.exports=function(n){return n?n.slice(0,o(n)+1).replace(i,""):n}},6503:function(n,t,e){var o="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;n.exports=o},5078:function(n,t,e){var Symbol=e(9029),o=Object.prototype,i=o.hasOwnProperty,r=o.toString,f=Symbol?Symbol.toStringTag:void 0;n.exports=function(n){var t=i.call(n,f),e=n[f];try{n[f]=void 0;var o=!0}catch(n){}var c=r.call(n);return o&&(t?n[f]=e:delete n[f]),c}},6276:function(n){var t=Object.prototype.toString;n.exports=function(n){return t.call(n)}},2242:function(n,t,e){var o=e(6503),i="object"==typeof self&&self&&self.Object===Object&&self,r=o||i||Function("return this")();n.exports=r},121:function(n){var t=/\s/;n.exports=function(n){for(var e=n.length;e--&&t.test(n.charAt(e)););return e}},8143:function(n,t,e){var o=e(6905),i=e(4752),r=e(1573),f=Math.max,c=Math.min;n.exports=function(n,t,e){var s,u,l,a,v,_,d=0,p=!1,x=!1,h=!0;if("function"!=typeof n)throw TypeError("Expected a function");function b(t){var e=s,o=u;return s=u=void 0,d=t,a=n.apply(o,e)}function m(n){var e=n-_,o=n-d;return void 0===_||e>=t||e<0||x&&o>=l}function j(){var n,e,o,r=i();if(m(r))return y(r);v=setTimeout(j,(n=r-_,e=r-d,o=t-n,x?c(o,l-e):o))}function y(n){return(v=void 0,h&&s)?b(n):(s=u=void 0,a)}function g(){var n,e=i(),o=m(e);if(s=arguments,u=this,_=e,o){if(void 0===v)return d=n=_,v=setTimeout(j,t),p?b(n):a;if(x)return clearTimeout(v),v=setTimeout(j,t),b(_)}return void 0===v&&(v=setTimeout(j,t)),a}return t=r(t)||0,o(e)&&(p=!!e.leading,l=(x="maxWait"in e)?f(r(e.maxWait)||0,t):l,h="trailing"in e?!!e.trailing:h),g.cancel=function(){void 0!==v&&clearTimeout(v),d=0,s=_=u=v=void 0},g.flush=function(){return void 0===v?a:y(i())},g}},6905:function(n){n.exports=function(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}},2387:function(n){n.exports=function(n){return null!=n&&"object"==typeof n}},1087:function(n,t,e){var o=e(6714),i=e(2387);n.exports=function(n){return"symbol"==typeof n||i(n)&&"[object Symbol]"==o(n)}},4752:function(n,t,e){var o=e(2242);n.exports=function(){return o.Date.now()}},7269:function(n,t,e){var o=e(8143),i=e(6905);n.exports=function(n,t,e){var r=!0,f=!0;if("function"!=typeof n)throw TypeError("Expected a function");return i(e)&&(r="leading"in e?!!e.leading:r,f="trailing"in e?!!e.trailing:f),o(n,t,{leading:r,maxWait:t,trailing:f})}},1573:function(n,t,e){var o=e(3225),i=e(6905),r=e(1087),f=0/0,c=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(r(n))return f;if(i(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=i(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=o(n);var e=s.test(n);return e||u.test(n)?l(n.slice(2),e?2:8):c.test(n)?f:+n}},5843:function(n,t,e){Promise.resolve().then(e.t.bind(e,8326,23)),Promise.resolve().then(e.t.bind(e,9370,23)),Promise.resolve().then(e.t.bind(e,8643,23)),Promise.resolve().then(e.t.bind(e,6229,23)),Promise.resolve().then(e.t.bind(e,7833,23)),Promise.resolve().then(e.bind(e,6011)),Promise.resolve().then(e.bind(e,1811))},6011:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return c}});var o=e(7437),i=e(2265),r=e(7305),f=e.n(r);function c(){let[n,t]=(0,i.useState)(!1);return(0,o.jsxs)("div",{className:f().wenivInfo,children:[(0,o.jsx)("button",{type:"button",className:"".concat(f().infoBtn," ").concat(n?f().on:null),onClick:()=>{t(!n)},children:"(주)위니브 사업자 정보"}),(0,o.jsxs)("ul",{className:"".concat(f().info," ").concat(n?f().on:null),children:[(0,o.jsx)("li",{children:"(주)위니브"}),(0,o.jsx)("li",{children:"대표: 이호준"}),(0,o.jsx)("li",{children:"사업자 번호: 546-86-01737"}),(0,o.jsx)("li",{children:"정보통신업"}),(0,o.jsxs)("li",{children:["주소:"," ",(0,o.jsx)("address",{children:"제주 제주시 첨단로 330 세미양빌딩 A동 1층 106호"})]})]})]})}},9370:function(n){n.exports={footer:"Footer_footer__7blBZ",maxWidth:"Footer_maxWidth__2hiuK",flex:"Footer_flex__EdNhQ",info:"Footer_info__KFkKP"}},8643:function(n){n.exports={list:"ListSNS_list__0Jz4A",snsBtn:"ListSNS_snsBtn__wdjh6"}},7305:function(n){n.exports={fs14:"WenivInfo_fs14__zY7Ak",fs16:"WenivInfo_fs16__dB4W4",fs18:"WenivInfo_fs18__HBznl",fs24:"WenivInfo_fs24__Znhyy",fs32:"WenivInfo_fs32__P4ByU",fs40:"WenivInfo_fs40__5tnOJ",wenivInfo:"WenivInfo_wenivInfo__k4HzG",infoBtn:"WenivInfo_infoBtn__lZV53",on:"WenivInfo_on__CA8Yc",info:"WenivInfo_info__jspZr"}}}]);