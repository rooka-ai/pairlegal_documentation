"use strict";(self.webpackChunkpairlegal_documentation=self.webpackChunkpairlegal_documentation||[]).push([[295],{2633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"alerts","title":"Alerts","description":"Overview","source":"@site/docs/alerts.md","sourceDirName":".","slug":"/alerts","permalink":"/docs/alerts","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Definition tracking","permalink":"/docs/definition-extraction"},"next":{"title":"External information","permalink":"/docs/external_information"}}');var r=t(4848),a=t(8453);const c={sidebar_position:6},s="Alerts",o={},l=[{value:"Overview",id:"overview",level:2},{value:"Definition-related alerts",id:"definition-related-alerts",level:3},{value:"Double number check",id:"double-number-check",level:3},{value:"Holiday alert",id:"holiday-alert",level:3},{value:"Template alert",id:"template-alert",level:3},{value:"Unbalanced bracket",id:"unbalanced-bracket",level:3},{value:"Standard numbers",id:"standard-numbers",level:3},{value:"Correctness of company names, company ID existence",id:"correctness-of-company-names-company-id-existence",level:3},{value:"Checking the existence and type of a parcel",id:"checking-the-existence-and-type-of-a-parcel",level:3},{value:"Cross-reference checking",id:"cross-reference-checking",level:3},{value:"Statutory reference check",id:"statutory-reference-check",level:3}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"alerts",children:"Alerts"})}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"The plugin displays a number of specific alerts for legal writing. These alerts include\ninclude the types of alerts listed below."}),"\n",(0,r.jsx)(n.h3,{id:"definition-related-alerts",children:"Definition-related alerts"}),"\n",(0,r.jsx)(n.p,{children:"In case of conflicting definitions (i.e., a single concept defined more than once),\ndefinitions that are drafted in a non-standard manner, or definitions that are not used\nin the document, the corresponding alert is then displayed in the definition card.\nIn the 'Occurrences' tab, we also validate if all mentions of the defined term are\nconsistently capitalized and that the defined term is being used before any other\noccurrences."}),"\n",(0,r.jsx)(n.h3,{id:"double-number-check",children:"Double number check"}),"\n",(0,r.jsx)(n.p,{children:"This alert verifies numerical consistency throughout the document. It activates when\nthere are discrepancies between figures in numerical and written form."}),"\n",(0,r.jsx)(n.h3,{id:"holiday-alert",children:"Holiday alert"}),"\n",(0,r.jsx)(n.p,{children:"The holiday alert checks the dates mentioned in the document against a database of\npublic holidays and weekends. It notifies the user if a date coincides with a (future)\nholiday, which could have legal and practical implications."}),"\n",(0,r.jsx)(n.h3,{id:"template-alert",children:"Template alert"}),"\n",(0,r.jsx)(n.p,{children:'The alert is triggered when the document contains a clause to be filled in, e.g., "The\nparties agree that the [insert date] is the date of the agreement." We check for\ncommon placeholders, highlighted text and other indicators of a template.'}),"\n",(0,r.jsx)(n.h3,{id:"unbalanced-bracket",children:"Unbalanced bracket"}),"\n",(0,r.jsx)(n.p,{children:"Unbalanced brackets can lead to confusion in interpreting the document's provisions.\nThis alert detects any (mismatched parentheses)), braces, or square brackets to prevent\npotential misreadings of the contract's terms."}),"\n",(0,r.jsx)(n.h3,{id:"standard-numbers",children:"Standard numbers"}),"\n",(0,r.jsx)(n.p,{children:"The standard number check verifies the format and structure of the numbers in the\ndocument. We check the validity of birth numbers, bank account numbers (including IBAN\nformat) and others."}),"\n",(0,r.jsx)(n.h3,{id:"correctness-of-company-names-company-id-existence",children:"Correctness of company names, company ID existence"}),"\n",(0,r.jsx)(n.p,{children:"For each company listed in the document, the plugin checks whether the company name is\nmentioned close to the ID number. In addition, if a company ID mentioned that is not\nfound in the corresponding public register, the plugin will display an alert."}),"\n",(0,r.jsx)(n.p,{children:"Supported for \ud83c\udde8\ud83c\udded,\ud83c\udde8\ud83c\uddff, \ud83c\uddf8\ud83c\uddf0, \ud83c\udded\ud83c\uddf7."}),"\n",(0,r.jsx)(n.h3,{id:"checking-the-existence-and-type-of-a-parcel",children:"Checking the existence and type of a parcel"}),"\n",(0,r.jsx)(n.p,{children:"If a parcel is listed in the document, the plugin checks if the parcel is in the\n(Czech) land register and whether the correct parcel type is specified."}),"\n",(0,r.jsx)(n.p,{children:"Supported for \ud83c\udde8\ud83c\uddff."}),"\n",(0,r.jsx)(n.h3,{id:"cross-reference-checking",children:"Cross-reference checking"}),"\n",(0,r.jsx)(n.p,{children:'With respect to internal links to a certain part of the document, the plugin checks\nwhether this link is created using Word\'s "Cross-reference" feature. Without using this\nfeature, it may occur when if the document is edited and renumbered, a mismatch between\nthe reference and the target location takes place.'}),"\n",(0,r.jsx)(n.h3,{id:"statutory-reference-check",children:"Statutory reference check"}),"\n",(0,r.jsx)(n.p,{children:"SingleDraft checks whether the statute mentioned in the document is a valid statute in\na given jurisdiction. If the statute is not valid, the plugin will display an alert."}),"\n",(0,r.jsx)(n.p,{children:"Supported for \ud83c\udde8\ud83c\uddff"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var i=t(6540);const r={},a=i.createContext(r);function c(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);