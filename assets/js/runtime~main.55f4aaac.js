(()=>{"use strict";var e,t,a,r,o,n={},b={};function c(e){var t=b[e];if(void 0!==t)return t.exports;var a=b[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,c),a.loaded=!0,a.exports}c.m=n,c.c=b,e=[],c.O=(t,a,r,o)=>{if(!a){var n=1/0;for(d=0;d<e.length;d++){a=e[d][0],r=e[d][1],o=e[d][2];for(var b=!0,f=0;f<a.length;f++)(!1&o||n>=o)&&Object.keys(c.O).every((e=>c.O[e](a[f])))?a.splice(f--,1):(b=!1,o<n&&(n=o));if(b){e.splice(d--,1);var i=r();void 0!==i&&(t=i)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,r,o]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var n={};t=t||[null,a({}),a([]),a(a)];for(var b=2&r&&e;"object"==typeof b&&!~t.indexOf(b);b=a(b))Object.getOwnPropertyNames(b).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,c.d(o,n),o},c.d=(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,a)=>(c.f[a](e,t),t)),[])),c.u=e=>"assets/js/"+({53:"935f2afb",80:"9beb87c2",85:"1f391b9e",97:"293c6a7a",162:"fce02269",169:"8b300a2b",195:"c4f5d8e4",347:"92bb876c",368:"a94703ab",414:"393be207",518:"a7bd4aaa",580:"22ee8902",593:"99750a70",636:"7daea3eb",653:"db32d859",661:"5e95c892",717:"cd28e7bd",735:"6f747b39",817:"14eb3368",819:"3aebfb5b",918:"17896441",920:"1a4e3797",952:"28ba7206"}[e]||e)+"."+{53:"c2366c80",80:"bb7eef33",85:"891fb5a8",97:"fb97cc28",162:"89ea43f6",169:"a89c1d7c",195:"47699379",347:"8c34d9e6",368:"b0d263bd",414:"3c32736c",443:"99601943",518:"9bcd664f",525:"d67ab859",580:"2ce36d45",593:"bcae2232",636:"7bed107b",653:"ba27314a",661:"8c9009a7",692:"89d73f46",717:"20acb828",735:"52ec0627",772:"1d0bf37e",817:"d00f5f02",819:"998e239c",918:"8ed64a99",920:"52616ac4",952:"d16a1b55"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o="pairlegal-documentation:",c.l=(e,t,a,n)=>{if(r[e])r[e].push(t);else{var b,f;if(void 0!==a)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var l=i[d];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+a){b=l;break}}b||(f=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,c.nc&&b.setAttribute("nonce",c.nc),b.setAttribute("data-webpack",o+a),b.src=e),r[e]=[t];var u=(t,a)=>{b.onerror=b.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],b.parentNode&&b.parentNode.removeChild(b),o&&o.forEach((e=>e(a))),t)return t(a)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=u.bind(null,b.onerror),b.onload=u.bind(null,b.onload),f&&document.head.appendChild(b)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/",c.gca=function(e){return e={17896441:"918","935f2afb":"53","9beb87c2":"80","1f391b9e":"85","293c6a7a":"97",fce02269:"162","8b300a2b":"169",c4f5d8e4:"195","92bb876c":"347",a94703ab:"368","393be207":"414",a7bd4aaa:"518","22ee8902":"580","99750a70":"593","7daea3eb":"636",db32d859:"653","5e95c892":"661",cd28e7bd:"717","6f747b39":"735","14eb3368":"817","3aebfb5b":"819","1a4e3797":"920","28ba7206":"952"}[e]||e,c.p+c.u(e)},(()=>{var e={303:0,532:0};c.f.j=(t,a)=>{var r=c.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((a,o)=>r=e[t]=[a,o]));a.push(r[2]=o);var n=c.p+c.u(t),b=new Error;c.l(n,(a=>{if(c.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;b.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",b.name="ChunkLoadError",b.type=o,b.request=n,r[1](b)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,a)=>{var r,o,n=a[0],b=a[1],f=a[2],i=0;if(n.some((t=>0!==e[t]))){for(r in b)c.o(b,r)&&(c.m[r]=b[r]);if(f)var d=f(c)}for(t&&t(a);i<n.length;i++)o=n[i],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(d)},a=self.webpackChunkpairlegal_documentation=self.webpackChunkpairlegal_documentation||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})()})();