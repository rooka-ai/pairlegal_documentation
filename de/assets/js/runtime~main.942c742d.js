(()=>{"use strict";var e,t,r,a,o,n={},f={};function i(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=n,i.c=f,e=[],i.O=(t,r,a,o)=>{if(!r){var n=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],o=e[l][2];for(var f=!0,d=0;d<r.length;d++)(!1&o||n>=o)&&Object.keys(i.O).every((e=>i.O[e](r[d])))?r.splice(d--,1):(f=!1,o<n&&(n=o));if(f){e.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,a,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var n={};t=t||[null,r({}),r([]),r(r)];for(var f=2&a&&e;"object"==typeof f&&!~t.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,i.d(o,n),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",139:"d4771e5f",162:"fce02269",190:"8ed740ea",195:"c4f5d8e4",213:"3714e048",255:"a5398fa2",368:"a94703ab",414:"393be207",448:"9035fed5",514:"bdc3f5e6",518:"a7bd4aaa",550:"0d63a2cf",617:"1fba6354",643:"7e183657",661:"5e95c892",735:"6f747b39",817:"14eb3368",906:"a08ef727",918:"17896441"}[e]||e)+"."+{53:"d768bdfc",85:"7cfa6b66",139:"2db8cb5b",162:"89ea43f6",190:"c702b139",195:"47699379",213:"f201ba9d",255:"7f0b62ce",368:"620f2c36",414:"c9c89b4f",448:"6fabcc29",514:"86571e28",518:"9bcd664f",550:"c86fec52",617:"78f1960a",643:"57e81e21",661:"19f2c186",674:"6784d25e",735:"52ec0627",772:"e6a472b7",817:"bc52703f",906:"01432e43",918:"6788ec8b"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="pairlegal-documentation:",i.l=(e,t,r,n)=>{if(a[e])a[e].push(t);else{var f,d;if(void 0!==r)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){f=u;break}}f||(d=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.setAttribute("data-webpack",o+r),f.src=e),a[e]=[t];var b=(t,r)=>{f.onerror=f.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=b.bind(null,f.onerror),f.onload=b.bind(null,f.onload),d&&document.head.appendChild(f)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/de/",i.gca=function(e){return e={17896441:"918","935f2afb":"53","1f391b9e":"85",d4771e5f:"139",fce02269:"162","8ed740ea":"190",c4f5d8e4:"195","3714e048":"213",a5398fa2:"255",a94703ab:"368","393be207":"414","9035fed5":"448",bdc3f5e6:"514",a7bd4aaa:"518","0d63a2cf":"550","1fba6354":"617","7e183657":"643","5e95c892":"661","6f747b39":"735","14eb3368":"817",a08ef727:"906"}[e]||e,i.p+i.u(e)},(()=>{var e={303:0,532:0};i.f.j=(t,r)=>{var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=i.p+i.u(t),f=new Error;i.l(n,(r=>{if(i.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",f.name="ChunkLoadError",f.type=o,f.request=n,a[1](f)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,n=r[0],f=r[1],d=r[2],c=0;if(n.some((t=>0!==e[t]))){for(a in f)i.o(f,a)&&(i.m[a]=f[a]);if(d)var l=d(i)}for(t&&t(r);c<n.length;c++)o=n[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(l)},r=self.webpackChunkpairlegal_documentation=self.webpackChunkpairlegal_documentation||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();