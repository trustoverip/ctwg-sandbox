(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{129:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return r})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),o=(a(0),a(202)),l={id:"wallet",title:"Wallet",scopeid:"essifLab",type:"concept",typeid:"wallet",stage:"draft",hoverText:"Wallet (functional component) --  the capability to securely store data as requested by Colleague Agents, and to provide stored data to Colleague Agents or Peer Agents, all in compliance with the rules of its Principal's Wallet Policy."},c={unversionedId:"terms/wallet",id:"terms/wallet",isDocsHomePage:!1,title:"Wallet",description:"Short Description",source:"@site/docs/terms/wallet.md",slug:"/terms/wallet",permalink:"/ctwg-sandbox/docs/terms/wallet",version:"current"},r=[{value:"Short Description",id:"short-description",children:[]},{value:"Purpose",id:"purpose",children:[]},{value:"Criteria",id:"criteria",children:[]},{value:"Functionality",id:"functionality",children:[]}],s={toc:r};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"short-description"},"Short Description"),Object(o.b)("p",null,"A ",Object(o.b)("strong",{parentName:"p"},"Wallet")," is is an (architectural) function (a functional component in the ",Object(o.b)("a",{parentName:"p",href:"../functional-architecture"},"eSSIF-Lab functional architecture"),") that provides (secure) storage of credentials - regardless of the party that has issued them (i.e. so-called self-signed credentials may be stored there, too). Another task of the wallet is to (securely) store (private) keys that can be used to sign or seal data on behalf of its Principal. Perhaps the most important task of the Wallet is to ensure that credentials and keys can only become available to another component if they have the same (single) Principal, and will become available if such other component implements a functionality that needs it."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"TNO (or others) to provide additional content of this file."))),Object(o.b)("h3",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"The purpose of the Wallet function is."),Object(o.b)("h3",{id:"criteria"},"Criteria"),Object(o.b)("p",null,"A ",Object(o.b)("strong",{parentName:"p"},"Wallet")," is a component in the ",Object(o.b)("a",{parentName:"p",href:"../functional-architecture"},"eSSIF-Lab functional architecture")," whose function is to ... (tbd)."),Object(o.b)("h3",{id:"functionality"},"Functionality"),Object(o.b)("p",null,"The primary purpose of the Wallet Component is to (securely) store data, and in particular:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"credentials - both those that have been issued by the issuer (i.e. self-signed credentials) and those that have been obtained from issuers of other parties, and")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"(private) keys e.g. for signing/sealing data on behalf of its Principal."))),Object(o.b)("p",null,"Other kinds of data may be stored by a wallet as well - we will have to see what is practical and makes sense."),Object(o.b)("p",null,"By 'securely storing data' we mean that such data"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"remains available until a request is received from an electronic Colleague that is entitled to request deletion of such data;")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"remains unchanged during the time in which it is stored;"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"can only become available to electronic Colleagues that implement a functionality that requires such access (e.g. a Colleague Holder component);")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"can only be stored by electronic Colleagues that implement a functionality that require such data to be stored (e.g. a Colleague Holder or Issuer component)."))),Object(o.b)("p",null,"It is expected that components other than the Holder and Issuer will (arise and) need access. One example could be a component that is capable of securely signing data on behalf of the Principal. Another example could be a component that implements some kind of credential revocation functionality."),Object(o.b)("p",null,"Human beings cannot directly access any Wallet component, not even the ones they own. They need an electronic Agent that is capable of authenticating them as (an Agent of) the party that owns the Wallet component, and upon successful authentication provides a User Interface through which the Human Being can instruct this electronic Agent to manage the Wallet's contents."),Object(o.b)("p",null,"In order to make the Wallet component work, a Wallet Policy/Preferences object is created by, or on behalf of the Principal, the contents of which remains to be specified."))}p.isMDXComponent=!0}}]);