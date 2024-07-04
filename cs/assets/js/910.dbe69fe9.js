(self.webpackChunkpairlegal_documentation=self.webpackChunkpairlegal_documentation||[]).push([[910],{9114:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var s=n(7294),o=n(5893);function a(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),c=n?.props.children;return{mdxAdmonitionTitle:c,rest:a.length>0?(0,o.jsx)(o.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}var c=n(512),i=n(7325),r=n(3702);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:s}=e;return(0,o.jsx)("div",{className:(0,c.Z)(r.k.common.admonition,r.k.common.admonitionType(t),l.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,o.jsxs)("div",{className:l.admonitionHeading,children:[(0,o.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,o.jsx)("div",{className:l.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:a,className:c}=e;return(0,o.jsxs)(d,{type:t,className:c,children:[s||n?(0,o.jsx)(u,{title:s,icon:n}):null,(0,o.jsx)(m,{children:a})]})}function f(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const p={icon:(0,o.jsx)(f,{}),title:(0,o.jsx)(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,o.jsx)(h,{...p,...e,className:(0,c.Z)("alert alert--secondary",e.className),children:e.children})}function g(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const v={icon:(0,o.jsx)(g,{}),title:(0,o.jsx)(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,o.jsx)(h,{...v,...e,className:(0,c.Z)("alert alert--success",e.className),children:e.children})}function j(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,o.jsx)(j,{}),title:(0,o.jsx)(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function y(e){return(0,o.jsx)(h,{...N,...e,className:(0,c.Z)("alert alert--info",e.className),children:e.children})}function C(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const k={icon:(0,o.jsx)(C,{}),title:(0,o.jsx)(i.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function L(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const B={icon:(0,o.jsx)(L,{}),title:(0,o.jsx)(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const w={icon:(0,o.jsx)(C,{}),title:(0,o.jsx)(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const Z={...{note:x,tip:b,info:y,warning:function(e){return(0,o.jsx)(h,{...k,...e,className:(0,c.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(h,{...B,...e,className:(0,c.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(x,{title:"secondary",...e}),important:e=>(0,o.jsx)(y,{title:"important",...e}),success:e=>(0,o.jsx)(b,{title:"success",...e}),caution:function(e){return(0,o.jsx)(h,{...w,...e,className:(0,c.Z)("alert alert--warning",e.className),children:e.children})}}};function E(e){const t=a(e),n=(s=t.type,Z[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),Z.info));var s;return(0,o.jsx)(n,{...t})}},5092:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});n(7294);var s=n(512),o=n(7325),a=n(3702),c=n(4791);const i={iconEdit:"iconEdit_Z9Sw"};var r=n(5893);function l(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i.iconEdit,t),"aria-hidden":"true",...n,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,r.jsxs)(c.Z,{to:t,className:a.k.common.editThisPage,children:[(0,r.jsx)(l,{}),(0,r.jsx)(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=n(9962);function m(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,u.Z)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,u.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function h(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=m({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,r.jsx)(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,r.jsx)("b",{children:(0,r.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function f(e){let{lastUpdatedBy:t}=e;return(0,r.jsx)(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,r.jsx)("b",{children:t})},children:" by {user}"})}function p(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,r.jsxs)("span",{className:a.k.common.lastUpdated,children:[(0,r.jsx)(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,r.jsx)(h,{lastUpdatedAt:t}):"",byUser:n?(0,r.jsx)(f,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const x={lastUpdated:"lastUpdated_JAkA"};function g(e){let{className:t,editUrl:n,lastUpdatedAt:o,lastUpdatedBy:a}=e;return(0,r.jsxs)("div",{className:(0,s.Z)("row",t),children:[(0,r.jsx)("div",{className:"col",children:n&&(0,r.jsx)(d,{editUrl:n})}),(0,r.jsx)("div",{className:(0,s.Z)("col",x.lastUpdated),children:(o||a)&&(0,r.jsx)(p,{lastUpdatedAt:o,lastUpdatedBy:a})})]})}},7054:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ie});var s=n(7294),o=n(1151),a=n(1514),c=n(1048),i=n(512),r=n(9200),l=n(107);function d(){const{prism:e}=(0,l.L)(),{colorMode:t}=(0,r.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var u=n(3702),m=n(7594),h=n.n(m);const f=/title=(?<quote>["'])(?<title>.*?)\1/,p=/\{(?<range>[\d,-]+)\}/,x={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},g={...x,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},v=Object.keys(x);function b(e,t){const n=e.map((e=>{const{start:n,end:s}=g[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function j(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:o,metastring:a}=t;if(a&&p.test(a)){const e=a.match(p).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,s=h()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return b(["tex"],t);case"lua":case"haskell":case"sql":return b(["lua"],t);case"wasm":return b(["wasm"],t);case"vb":case"vba":case"visual-basic":return b(["vb","rem"],t);case"vbnet":return b(["vbnet","rem"],t);case"batch":return b(["rem"],t);case"basic":return b(["rem","f90"],t);case"fsharp":return b(["js","ml"],t);case"ocaml":case"sml":return b(["ml"],t);case"fortran":return b(["f90"],t);case"cobol":return b(["cobol"],t);default:return b(v,t)}}(s,o),i=n.split("\n"),r=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<i.length;){const e=i[h].match(c);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?r[l[t]].range+=`${h},`:d[t]?r[d[t]].start=h:u[t]&&(r[u[t]].range+=`${r[u[t]].start}-${h-1},`),i.splice(h,1)}n=i.join("\n");const m={};return Object.entries(r).forEach((e=>{let[t,{range:n}]=e;h()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const N={codeBlockContainer:"codeBlockContainer_Ckt0"};var y=n(5893);function C(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,o]=e;const a=t[s];a&&"string"==typeof o&&(n[a]=o)})),n}(d());return(0,y.jsx)(t,{...n,style:s,className:(0,i.Z)(n.className,N.codeBlockContainer,u.k.common.codeBlock)})}const k={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function L(e){let{children:t,className:n}=e;return(0,y.jsx)(C,{as:"pre",tabIndex:0,className:(0,i.Z)(k.codeBlockStandalone,"thin-scrollbar",n),children:(0,y.jsx)("code",{className:k.codeBlockLines,children:t})})}var B=n(3768);const w={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Z(e,t){const[n,o]=(0,s.useState)(),a=(0,s.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,s.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=w);const o=(0,B.zX)(t),a=(0,B.Ql)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,a),()=>t.disconnect()}),[e,o,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var E=n(2573);const H={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function T(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:o,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=o({line:t,className:(0,i.Z)(n,s&&H.codeLine)}),r=t.map(((e,t)=>(0,y.jsx)("span",{...a({token:e})},t)));return(0,y.jsxs)("span",{...c,children:[s?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{className:H.codeLineNumber}),(0,y.jsx)("span",{className:H.codeLineContent,children:r})]}):r,(0,y.jsx)("br",{})]})}var _=n(7325);function A(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function I(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const S={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function M(e){let{code:t,className:n}=e;const[o,a]=(0,s.useState)(!1),c=(0,s.useRef)(void 0),r=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),o=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const a=document.getSelection(),c=a.rangeCount>0&&a.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}s.remove(),c&&(a.removeAllRanges(),a.addRange(c)),o&&o.focus()}(t),a(!0),c.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),(0,y.jsx)("button",{type:"button","aria-label":o?(0,_.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,_.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,_.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.Z)("clean-btn",n,S.copyButton,o&&S.copyButtonCopied),onClick:r,children:(0,y.jsxs)("span",{className:S.copyButtonIcons,"aria-hidden":"true",children:[(0,y.jsx)(A,{className:S.copyButtonIcon}),(0,y.jsx)(I,{className:S.copyButtonSuccessIcon})]})})}function U(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const z={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function R(e){let{className:t,onClick:n,isEnabled:s}=e;const o=(0,_.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,y.jsx)("button",{type:"button",onClick:n,className:(0,i.Z)("clean-btn",t,s&&z.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,y.jsx)(U,{className:z.wordWrapButtonIcon,"aria-hidden":"true"})})}function O(e){let{children:t,className:n="",metastring:o,title:a,showLineNumbers:c,language:r}=e;const{prism:{defaultLanguage:u,magicComments:m}}=(0,l.L)(),h=function(e){return e?.toLowerCase()}(r??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u),p=d(),x=function(){const[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),a=(0,s.useRef)(null),c=(0,s.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),i=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return Z(a,i),(0,s.useEffect)((()=>{i()}),[e,i]),(0,s.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:c}}(),g=function(e){return e?.match(f)?.groups.title??""}(o)||a,{lineClassNames:v,code:b}=j(t,{metastring:o,language:h,magicComments:m}),N=c??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return(0,y.jsxs)(C,{as:"div",className:(0,i.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`),children:[g&&(0,y.jsx)("div",{className:k.codeBlockTitle,children:g}),(0,y.jsxs)("div",{className:k.codeBlockContent,children:[(0,y.jsx)(E.y$,{theme:p,code:b,language:h??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:o,getTokenProps:a}=e;return(0,y.jsx)("pre",{tabIndex:0,ref:x.codeBlockRef,className:(0,i.Z)(t,k.codeBlock,"thin-scrollbar"),style:n,children:(0,y.jsx)("code",{className:(0,i.Z)(k.codeBlockLines,N&&k.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,y.jsx)(T,{line:e,getLineProps:o,getTokenProps:a,classNames:v[t],showLineNumbers:N},t)))})})}}),(0,y.jsxs)("div",{className:k.buttonGroup,children:[(x.isEnabled||x.isCodeScrollable)&&(0,y.jsx)(R,{className:k.codeButton,onClick:()=>x.toggle(),isEnabled:x.isEnabled}),(0,y.jsx)(M,{className:k.codeButton,code:b})]})]})]})}function $(e){let{children:t,...n}=e;const o=(0,c.Z)(),a=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof a?O:L;return(0,y.jsx)(i,{...n,children:a},String(o))}function V(e){return(0,y.jsx)("code",{...e})}var P=n(4791);var W=n(168),D=n(4639);const q={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function F(e){return!!e&&("SUMMARY"===e.tagName||F(e.parentElement))}function G(e,t){return!!e&&(e===t||G(e.parentElement,t))}function J(e){let{summary:t,children:n,...o}=e;(0,W.Z)().collectAnchor(o.id);const a=(0,c.Z)(),r=(0,s.useRef)(null),{collapsed:l,setCollapsed:d}=(0,D.u)({initialState:!o.open}),[u,m]=(0,s.useState)(o.open),h=s.isValidElement(t)?t:(0,y.jsx)("summary",{children:t??"Details"});return(0,y.jsxs)("details",{...o,ref:r,open:u,"data-collapsed":l,className:(0,i.Z)(q.details,a&&q.isBrowser,o.className),onMouseDown:e=>{F(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;F(t)&&G(t,r.current)&&(e.preventDefault(),l?(d(!1),m(!0)):d(!0))},children:[h,(0,y.jsx)(D.z,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),m(!e)},children:(0,y.jsx)("div",{className:q.collapsibleContent,children:n})})]})}const Y={details:"details_b_Ee"},K="alert alert--info";function Q(e){let{...t}=e;return(0,y.jsx)(J,{...t,className:(0,i.Z)(K,Y.details,t.className)})}function X(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),o=(0,y.jsx)(y.Fragment,{children:t.filter((e=>e!==n))});return(0,y.jsx)(Q,{...e,summary:n,children:o})}var ee=n(3899);function te(e){return(0,y.jsx)(ee.Z,{...e})}const ne={containsTaskList:"containsTaskList_mC6p"};function se(e){if(void 0!==e)return(0,i.Z)(e,e?.includes("contains-task-list")&&ne.containsTaskList)}const oe={img:"img_ev3q"};var ae=n(9114);const ce={Head:a.Z,details:X,Details:X,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,y.jsx)(V,{...e}):(0,y.jsx)($,{...e})},a:function(e){return(0,y.jsx)(P.Z,{...e})},pre:function(e){return(0,y.jsx)(y.Fragment,{children:e.children})},ul:function(e){return(0,y.jsx)("ul",{...e,className:se(e.className)})},li:function(e){return(0,W.Z)().collectAnchor(e.id),(0,y.jsx)("li",{...e})},img:function(e){return(0,y.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,i.Z)(t,oe.img))});var t},h1:e=>(0,y.jsx)(te,{as:"h1",...e}),h2:e=>(0,y.jsx)(te,{as:"h2",...e}),h3:e=>(0,y.jsx)(te,{as:"h3",...e}),h4:e=>(0,y.jsx)(te,{as:"h4",...e}),h5:e=>(0,y.jsx)(te,{as:"h5",...e}),h6:e=>(0,y.jsx)(te,{as:"h6",...e}),admonition:ae.Z,mermaid:()=>null};function ie(e){let{children:t}=e;return(0,y.jsx)(o.Z,{components:ce,children:t})}},7086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});n(7294);var s=n(512),o=n(2728);const a={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var c=n(5893);const i="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function l(e){let{className:t,...n}=e;return(0,c.jsx)("div",{className:(0,s.Z)(a.tableOfContents,"thin-scrollbar",t),children:(0,c.jsx)(o.Z,{...n,linkClassName:i,linkActiveClassName:r})})}},2728:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var s=n(7294),o=n(107);function a(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):s.push(o)})),s}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>i(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function l(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=l();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:o,minHeadingLevel:a,maxHeadingLevel:c}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let o=t;o<=n;o+=1)s.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:c}),l=r(i,{anchorTopOffset:n.current}),d=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===d)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}var u=n(4791),m=n(5893);function h(e){let{toc:t,className:n,linkClassName:s,isChild:o}=e;return t.length?(0,m.jsx)("ul",{className:o?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const f=s.memo(h);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:u,...h}=e;const p=(0,o.L)(),x=l??p.tableOfContents.minHeadingLevel,g=u??p.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,s.useMemo)((()=>c({toc:a(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:x,maxHeadingLevel:g});return d((0,s.useMemo)((()=>{if(i&&r)return{linkClassName:i,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:g}}),[i,r,x,g])),(0,m.jsx)(f,{toc:v,className:n,linkClassName:i,...h})}},9501:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});n(7294);var s=n(512),o=n(7325),a=n(1514),c=n(5893);function i(){return(0,c.jsx)(o.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,c.jsx)(o.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,c.jsx)(a.Z,{children:(0,c.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(3702),u=n(9114);function m(e){let{className:t}=e;return(0,c.jsx)(u.Z,{type:"caution",title:(0,c.jsx)(i,{}),className:(0,s.Z)(t,d.k.common.unlistedBanner),children:(0,c.jsx)(r,{})})}function h(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l,{}),(0,c.jsx)(m,{...e})]})}},7594:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,o,a]=t;if(s&&a){s=parseInt(s),a=parseInt(a);const e=s<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=s;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},1151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i,a:()=>c});var s=n(7294);const o={},a=s.createContext(o);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);