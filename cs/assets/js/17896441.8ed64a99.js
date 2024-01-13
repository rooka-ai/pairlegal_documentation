"use strict";(self.webpackChunkpairlegal_documentation=self.webpackChunkpairlegal_documentation||[]).push([[918],{1310:(e,t,a)=>{a.d(t,{Z:()=>v});a(7294);var s=a(6905),n=a(5281),i=a(2802),l=a(8596),o=a(3692),r=a(5999),d=a(4996),c=a(5893);function u(e){return(0,c.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,c.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,d.Z)("/");return(0,c.jsx)("li",{className:"breadcrumbs__item",children:(0,c.jsx)(o.Z,{"aria-label":(0,r.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,c.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function b(e){let{children:t,href:a,isLast:s}=e;const n="breadcrumbs__link";return s?(0,c.jsx)("span",{className:n,itemProp:"name",children:t}):a?(0,c.jsx)(o.Z,{className:n,href:a,itemProp:"item",children:(0,c.jsx)("span",{itemProp:"name",children:t})}):(0,c.jsx)("span",{className:n,children:t})}function x(e){let{children:t,active:a,index:n,addMicrodata:i}=e;return(0,c.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a}),children:[t,(0,c.jsx)("meta",{itemProp:"position",content:String(n+1)})]})}function v(){const e=(0,i.s1)(),t=(0,l.Ns)();return e?(0,c.jsx)("nav",{className:(0,s.Z)(n.k.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,r.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,c.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,c.jsx)(h,{}),e.map(((t,a)=>{const s=a===e.length-1,n="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,c.jsx)(x,{active:s,index:a,addMicrodata:!!n,children:(0,c.jsx)(b,{href:n,isLast:s,children:t.label})},a)}))]})}):null}},230:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Y});var s=a(7294),n=a(1944),i=a(902),l=a(5893);const o=s.createContext(null);function r(e){let{children:t,content:a}=e;const n=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,l.jsx)(o.Provider,{value:n,children:t})}function d(){const e=(0,s.useContext)(o);if(null===e)throw new i.i6("DocProvider");return e}function c(){const{metadata:e,frontMatter:t,assets:a}=d();return(0,l.jsx)(n.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var u=a(6905),m=a(7524),h=a(4966);function p(){const{metadata:e}=d();return(0,l.jsx)(h.Z,{previous:e.previous,next:e.next})}var b=a(3120),x=a(4364),v=a(5281),g=a(5999);function j(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return(0,l.jsx)(g.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:a})})},children:" on {date}"})}function f(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(g.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:v.k.common.lastUpdated,children:[(0,l.jsx)(g.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?(0,l.jsx)(j,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:s?(0,l.jsx)(f,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var Z=a(3692);const N={iconEdit:"iconEdit_Z9Sw"};function L(e){let{className:t,...a}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(N.iconEdit,t),"aria-hidden":"true",...a,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function k(e){let{editUrl:t}=e;return(0,l.jsxs)(Z.Z,{to:t,className:v.k.common.editThisPage,children:[(0,l.jsx)(L,{}),(0,l.jsx)(g.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const C={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function T(e){let{permalink:t,label:a,count:s}=e;return(0,l.jsxs)(Z.Z,{href:t,className:(0,u.Z)(C.tag,s?C.tagWithCount:C.tagRegular),children:[a,s&&(0,l.jsx)("span",{children:s})]})}const U={tags:"tags_jXut",tag:"tag_QGVx"};function w(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(g.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.Z)(U.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:a}=e;return(0,l.jsx)("li",{className:U.tag,children:(0,l.jsx)(T,{label:t,permalink:a})},a)}))})]})}const y={lastUpdated:"lastUpdated_vwxv"};function A(e){return(0,l.jsx)("div",{className:(0,u.Z)(v.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(w,{...e})})})}function M(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:n}=e;return(0,l.jsxs)("div",{className:(0,u.Z)(v.k.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(k,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.Z)("col",y.lastUpdated),children:(a||s)&&(0,l.jsx)(_,{lastUpdatedAt:a,formattedLastUpdatedAt:n,lastUpdatedBy:s})})]})}function B(){const{metadata:e}=d(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:n,tags:i}=e,o=i.length>0,r=!!(t||a||n);return o||r?(0,l.jsxs)("footer",{className:(0,u.Z)(v.k.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(A,{tags:i}),r&&(0,l.jsx)(M,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:n,formattedLastUpdatedAt:s})]}):null}var I=a(6043),E=a(3743);const V={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function H(e){let{collapsed:t,...a}=e;return(0,l.jsx)("button",{type:"button",...a,className:(0,u.Z)("clean-btn",V.tocCollapsibleButton,!t&&V.tocCollapsibleButtonExpanded,a.className),children:(0,l.jsx)(g.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const P={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function D(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:n}=e;const{collapsed:i,toggleCollapsed:o}=(0,I.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.Z)(P.tocCollapsible,!i&&P.tocCollapsibleExpanded,a),children:[(0,l.jsx)(H,{collapsed:i,onClick:o}),(0,l.jsx)(I.z,{lazy:!0,className:P.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(E.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:n})})]})}const S={tocMobile:"tocMobile_ITEo"};function F(){const{toc:e,frontMatter:t}=d();return(0,l.jsx)(D,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(v.k.docs.docTocMobile,S.tocMobile)})}var R=a(9407);function z(){const{toc:e,frontMatter:t}=d();return(0,l.jsx)(R.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.k.docs.docTocDesktop})}var O=a(2503),G=a(9206);function W(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=d();return t.hide_title||void 0!==a?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.Z)(v.k.docs.docMarkdown,"markdown"),children:[a&&(0,l.jsx)("header",{children:(0,l.jsx)(O.Z,{as:"h1",children:a})}),(0,l.jsx)(G.Z,{children:t})]})}var q=a(1310),J=a(2212);const Q={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function X(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=d(),a=(0,m.i)(),s=e.hide_table_of_contents,n=!s&&t.length>0;return{hidden:s,mobile:n?(0,l.jsx)(F,{}):void 0,desktop:!n||"desktop"!==a&&"ssr"!==a?void 0:(0,l.jsx)(z,{})}}(),{metadata:{unlisted:s}}=d();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.Z)("col",!a.hidden&&Q.docItemCol),children:[s&&(0,l.jsx)(J.Z,{}),(0,l.jsx)(b.Z,{}),(0,l.jsxs)("div",{className:Q.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(q.Z,{}),(0,l.jsx)(x.Z,{}),a.mobile,(0,l.jsx)(W,{children:t}),(0,l.jsx)(B,{})]}),(0,l.jsx)(p,{})]})]}),a.desktop&&(0,l.jsx)("div",{className:"col col--3",children:a.desktop})]})}function Y(e){const t=`docs-doc-id-${e.content.metadata.id}`,a=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(n.FG,{className:t,children:[(0,l.jsx)(c,{}),(0,l.jsx)(X,{children:(0,l.jsx)(a,{})})]})})}},4966:(e,t,a)=>{a.d(t,{Z:()=>r});a(7294);var s=a(5999),n=a(6905),i=a(3692),l=a(5893);function o(e){const{permalink:t,title:a,subLabel:s,isNext:o}=e;return(0,l.jsxs)(i.Z,{className:(0,n.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,l.jsx)("div",{className:"pagination-nav__label",children:a})]})}function r(e){const{previous:t,next:a}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(o,{...t,subLabel:(0,l.jsx)(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),a&&(0,l.jsx)(o,{...a,subLabel:(0,l.jsx)(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4364:(e,t,a)=>{a.d(t,{Z:()=>r});a(7294);var s=a(6905),n=a(5999),i=a(5281),l=a(4477),o=a(5893);function r(e){let{className:t}=e;const a=(0,l.E)();return a.badge?(0,o.jsx)("span",{className:(0,s.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(n.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label},children:"Version: {versionLabel}"})}):null}},3120:(e,t,a)=>{a.d(t,{Z:()=>x});a(7294);var s=a(6905),n=a(2263),i=a(3692),l=a(5999),o=a(143),r=a(5281),d=a(373),c=a(4477),u=a(5893);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:a.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:a.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function p(e){let{versionLabel:t,to:a,onClick:s}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.Z,{to:a,onClick:s,children:(0,u.jsx)(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:i}}=(0,n.Z)(),{pluginId:l}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:c}=(0,d.J)(l),{latestDocSuggestion:m,latestVersionSuggestion:b}=(0,o.Jo)(l),x=m??(v=b).docs.find((e=>e.id===v.mainDocId));var v;return(0,u.jsxs)("div",{className:(0,s.Z)(t,r.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:a})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(p,{versionLabel:b.label,to:x.path,onClick:()=>c(b.name)})})]})}function x(e){let{className:t}=e;const a=(0,c.E)();return a.banner?(0,u.jsx)(b,{className:t,versionMetadata:a}):null}}}]);