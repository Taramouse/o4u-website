(function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)i=s[l],a[i]&&d.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return s.p+"js/"+({about:"about",design:"design",support:"support"}[t]||t)+"."+{about:"2026846d",design:"f8c008b0",support:"8d56d995"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var o,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t),o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[t]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,u.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"245f":function(t,e,n){"use strict";var r=n("5034"),a=n.n(r);a.a},2856:function(t,e,n){},"3deb":function(t,e,n){t.exports=n.p+"img/optimized4u.e51eac31.png"},5034:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navbar"),n("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar",attrs:{id:"nav",role:"navigation","aria-label":"main navigation"}},[r("div",{staticClass:"navbar-brand"},[r("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[r("img",{attrs:{src:n("3deb"),alt:"Optimized4u branding",height:"28"}})]),r("a",{staticClass:"navbar-burger",class:{"is-active":t.showNav},attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(e){t.showNav=!t.showNav}}},[r("span",{attrs:{"aria-hidden":"true"}}),r("span",{attrs:{"aria-hidden":"true"}}),r("span",{attrs:{"aria-hidden":"true"}})])],1),r("div",{staticClass:"navbar-menu",class:{"is-active":t.showNav}},[r("div",{staticClass:"navbar-end"},[r("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("\n          Home\n        ")]),r("router-link",{staticClass:"navbar-item",attrs:{to:"/support"}},[t._v("\n          Support\n        ")]),r("router-link",{staticClass:"navbar-item",attrs:{to:"/design"}},[t._v("\n          Design\n        ")]),r("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("\n          About\n        ")])],1)])])},s=[],u={name:"Navbar",data:function(){return{showNav:!1}}},c=u,l=(n("245f"),n("2877")),p=Object(l["a"])(c,i,s,!1,null,"5fefc032",null);p.options.__file="Navbar.vue";var d=p.exports,f={components:{navbar:d},data:function(){return{}}},v=f,b=(n("5c0b"),Object(l["a"])(v,a,o,!1,null,null,null));b.options.__file="App.vue";var m=b.exports,h=n("8c4f"),g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("section",{staticClass:"hero is-medium is-info"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("\n          Optimized4U\n        ")]),n("h2",{staticClass:"subtitle"},[t._v("\n          Experts in support and design.\n        ")])])])])])}],y={name:"home",components:{}},w=y,C=Object(l["a"])(w,g,_,!1,null,null,null);C.options.__file="Home.vue";var O=C.exports;r["default"].use(h["a"]);var j=new h["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:O},{path:"/support",name:"support",component:function(){return n.e("support").then(n.bind(null,"1deb"))}},{path:"/design",name:"design",component:function(){return n.e("design").then(n.bind(null,"0b64"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),x=n("8a03"),k=n.n(x);n("7e7d");r["default"].use(k.a),r["default"].config.productionTip=!1,new r["default"]({router:j,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("2856"),a=n.n(r);a.a},"7e7d":function(t,e,n){}});
//# sourceMappingURL=app.831b5caf.js.map