"use strict";(self.webpackChunkpairlegal_documentation=self.webpackChunkpairlegal_documentation||[]).push([[295],{1785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=t(4848),r=t(8453);const a={sidebar_position:6},s="Alerts",c={id:"alerts",title:"Alerts",description:"Overview",source:"@site/docs/alerts.md",sourceDirName:".",slug:"/alerts",permalink:"/docs/alerts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Definition tracking",permalink:"/docs/definition-extraction"},next:{title:"External information",permalink:"/docs/external_information"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Definition-related alerts",id:"definition-related-alerts",level:3},{value:"Double number check",id:"double-number-check",level:3},{value:"Holiday alert",id:"holiday-alert",level:3},{value:"Template alert",id:"template-alert",level:3},{value:"Unbalanced bracket",id:"unbalanced-bracket",level:3},{value:"Standard numbers",id:"standard-numbers",level:3},{value:"Correctness of company names",id:"correctness-of-company-names",level:3},{value:"Checking the existence and type of the parcel",id:"checking-the-existence-and-type-of-the-parcel",level:3},{value:"Cross-reference checking",id:"cross-reference-checking",level:3}];function l(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"alerts",children:"Alerts"})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"The plugin displays a number of specific alerts for legal writing. These alerts include\ninclude the types of alerts listed below."}),"\n",(0,i.jsx)(n.h3,{id:"definition-related-alerts",children:"Definition-related alerts"}),"\n",(0,i.jsx)(n.p,{children:"In case of conflicting definitions (i.e., a single concept defined more than once),\ndefinitions that are drafted in a non-standard manner, or definitions that are not used\nin the document, the corresponding alert is then displayed in the definition card."}),"\n",(0,i.jsx)(n.h3,{id:"double-number-check",children:"Double number check"}),"\n",(0,i.jsx)(n.p,{children:"This alert verifies numerical consistency throughout the document. It activates when\nthere are discrepancies between figures in numerical and written form, or if the same\nnumber is repeated in a manner that suggests a potential error."}),"\n",(0,i.jsx)(n.h3,{id:"holiday-alert",children:"Holiday alert"}),"\n",(0,i.jsx)(n.p,{children:"The Holiday Alert checks the dates mentioned in the document against a database of\npublic holidays and weekends . It notifies the user if a date coincides with a (future)\nholiday, which could affect deadlines or the execution of the contract."}),"\n",(0,i.jsx)(n.h3,{id:"template-alert",children:"Template alert"}),"\n",(0,i.jsx)(n.p,{children:'The alert is triggered when the document contains a clause to be filled in, e.g., "The\nparties agree that the [insert date] is the date of the agreement."'}),"\n",(0,i.jsx)(n.h3,{id:"unbalanced-bracket",children:"Unbalanced bracket"}),"\n",(0,i.jsx)(n.p,{children:"Unbalanced brackets can lead to confusion in interpreting the document's provisions.\nThis alert detects any (mismatched parentheses)), braces, or square brackets to prevent\npotential misreadings of the contract's terms."}),"\n",(0,i.jsx)(n.h3,{id:"standard-numbers",children:"Standard numbers"}),"\n",(0,i.jsx)(n.p,{children:"The standard number check verifies the format and structure of the numbers in the document.\nWe check the validity of birth numbers, bank account numbers (including IBAN format) and others."}),"\n",(0,i.jsx)(n.h3,{id:"correctness-of-company-names",children:"Correctness of company names"}),"\n",(0,i.jsx)(n.p,{children:"For each company listed in the document, the plugin checks whether the company name is\nmentioned close to the ID number."}),"\n",(0,i.jsx)(n.h3,{id:"checking-the-existence-and-type-of-the-parcel",children:"Checking the existence and type of the parcel"}),"\n",(0,i.jsx)(n.p,{children:"If a parcel is listed in the document, the plugin checks if the parcel is in the\n(Czech) land register and whether the correct parcel type is specified."}),"\n",(0,i.jsx)(n.h3,{id:"cross-reference-checking",children:"Cross-reference checking"}),"\n",(0,i.jsx)(n.p,{children:'With respect to internal links to a certain part of the document, the plugin checks\nwhether this link is created using Word\'s "Cross-reference" feature. Without using this\nfeature, it may occur when if the document is edited and renumbered, a mismatch between\nthe reference and the target location takes place.'})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(6540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);