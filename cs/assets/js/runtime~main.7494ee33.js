(()=>{"use strict";var e,t,a,r,o,n={},c={};function d(e){var t=c[e];if(void 0!==t)return t.exports;var a=c[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,d),a.loaded=!0,a.exports}d.m=n,d.c=c,e=[],d.O=(t,a,r,o)=>{if(!a){var n=1/0;for(l=0;l<e.length;l++){a=e[l][0],r=e[l][1],o=e[l][2];for(var c=!0,f=0;f<a.length;f++)(!1&o||n>=o)&&Object.keys(d.O).every((e=>d.O[e](a[f])))?a.splice(f--,1):(c=!1,o<n&&(n=o));if(c){e.splice(l--,1);var i=r();void 0!==i&&(t=i)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[a,r,o]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);d.r(o);var n={};t=t||[null,a({}),a([]),a(a)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=a(c))Object.getOwnPropertyNames(c).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,d.d(o,n),o},d.d=(e,t)=>{for(var a in t)d.o(t,a)&&!d.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,a)=>(d.f[a](e,t),t)),[])),d.u=e=>"assets/js/"+({27:"5fcc7ac5",71:"d16aa21b",85:"1f391b9e",195:"c4f5d8e4",304:"97a20453",356:"5528620a",368:"a94703ab",414:"393be207",454:"71e4635e",460:"cbfeba02",518:"a7bd4aaa",524:"138e0e15",629:"aba21aa0",661:"5e95c892",834:"0e0a5646",918:"17896441",920:"1a4e3797",930:"fa4d91bf",961:"be7cf8c7",980:"a7456010"}[e]||e)+"."+{27:"d5182433",71:"6bb5a226",85:"a5727b6d",195:"30653a27",304:"6243a156",328:"06799b11",356:"63be13e0",368:"88b0ddda",414:"40973667",443:"99601943",454:"5a2bb76e",460:"59fb103c",518:"9bcd664f",524:"7acd5f02",525:"d67ab859",629:"1de48abc",661:"1e2ba03b",772:"5e238b0e",834:"9b265be8",918:"97c67fbd",920:"f03722f0",930:"5d199f23",961:"ed5663c4",980:"07238731"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o="pairlegal-documentation:",d.l=(e,t,a,n)=>{if(r[e])r[e].push(t);else{var c,f;if(void 0!==a)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var u=i[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+a){c=u;break}}c||(f=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,d.nc&&c.setAttribute("nonce",d.nc),c.setAttribute("data-webpack",o+a),c.src=e),r[e]=[t];var b=(t,a)=>{c.onerror=c.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(a))),t)return t(a)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=b.bind(null,c.onerror),c.onload=b.bind(null,c.onload),f&&document.head.appendChild(c)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/cs/",d.gca=function(e){return e={17896441:"918","5fcc7ac5":"27",d16aa21b:"71","1f391b9e":"85",c4f5d8e4:"195","97a20453":"304","5528620a":"356",a94703ab:"368","393be207":"414","71e4635e":"454",cbfeba02:"460",a7bd4aaa:"518","138e0e15":"524",aba21aa0:"629","5e95c892":"661","0e0a5646":"834","1a4e3797":"920",fa4d91bf:"930",be7cf8c7:"961",a7456010:"980"}[e]||e,d.p+d.u(e)},(()=>{var e={303:0,532:0};d.f.j=(t,a)=>{var r=d.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((a,o)=>r=e[t]=[a,o]));a.push(r[2]=o);var n=d.p+d.u(t),c=new Error;d.l(n,(a=>{if(d.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",c.name="ChunkLoadError",c.type=o,c.request=n,r[1](c)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,a)=>{var r,o,n=a[0],c=a[1],f=a[2],i=0;if(n.some((t=>0!==e[t]))){for(r in c)d.o(c,r)&&(d.m[r]=c[r]);if(f)var l=f(d)}for(t&&t(a);i<n.length;i++)o=n[i],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return d.O(l)},a=self.webpackChunkpairlegal_documentation=self.webpackChunkpairlegal_documentation||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})()})();