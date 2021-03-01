(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{189:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return c})),i.d(t,"metadata",(function(){return l})),i.d(t,"toc",(function(){return d})),i.d(t,"default",(function(){return h}));var r=i(3),n=i(7),o=(i(0),i(202)),a=i(204),s=i.n(a),c={id:"holder",title:"Holder",scopeid:"essifLab",type:"concept",typeid:"holder",stage:"draft",hoverText:"Holder (functional component) --  the capability to handle presentation requests from a Peer Agent, produce the requested data (a presentation) according to its Principal's holder-policy, and send that in response to the request."},l={unversionedId:"terms/holder",id:"terms/holder",isDocsHomePage:!1,title:"Holder",description:"Short Description",source:"@site/docs/terms/holder.md",slug:"/terms/holder",permalink:"/ctwg-sandbox/docs/terms/holder",version:"current"},d=[{value:"Short Description",id:"short-description",children:[]},{value:"Purpose",id:"purpose",children:[]},{value:"Criteria",id:"criteria",children:[]},{value:"Functionality",id:"functionality",children:[]}],p={toc:d};function h(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"short-description"},"Short Description"),Object(o.b)("p",null,"A ",Object(o.b)("strong",{parentName:"p"},"Holder")," is an (architectural) function (a functional component in the ",Object(o.b)("a",{parentName:"p",href:"../functional-architecture"},"eSSIF-Lab functional architecture"),") that handles ",Object(o.b)(s.a,{popup:"Presentation Request --  a (signed) digital message that a Verifier component sends to a Holder component asking for specific data from one or more Verifiable Credentials that are issued by specific Parties.",reference:"/ctwg-sandbox/docs/terms/presentation-request",mdxType:"Term"},"Presentation Requests")," that it receives from ",Object(o.b)(s.a,{popup:"Verifier (functional component) --  the capability to request Peer Agents to present (provide) data from credentials (of a specified kind, issued by specified Parties), and to verify such responses (check structure, signatures, dates), according to its Principal's Verifier Policy.",reference:"/ctwg-sandbox/docs/terms/verifier",mdxType:"Term"},"verifier")," components (of other parties, but also of its own ",Object(o.b)(s.a,{popup:"Owner (of an Entity) --  the role that a Party performs when it is exercizing its legal, rightful or natural title to control that Entity.",reference:"/ctwg-sandbox/docs/terms/owner",mdxType:"Term"},"owner"),"). Typically, this means looking for the requested data in the Principal's ",Object(o.b)(s.a,{popup:"Wallet (functional component) --  the capability to securely store data as requested by Colleague Agents, and to provide stored data to Colleague Agents or Peer Agents, all in compliance with the rules of its Principal's Wallet Policy.",reference:"/ctwg-sandbox/docs/terms/wallet",mdxType:"Term"},"wallet"),", and using it to construct a Presentation (=response). However, if the Wallet doesn't have it, the Holder may negotiate a transaction with a component of the designated ",Object(o.b)(s.a,{popup:"Issuer (functional component) --  the capability to construct Credentials from data objects, according to the content of its Principal's Issuer-Policy (specifically regarding the way in which the Credential is to be digitally signed), and pass it to the Wallet-component of its Principal allowing it to be issued.",reference:"/ctwg-sandbox/docs/terms/issuer",mdxType:"Term"},"issuer")," for the purpose of obtaining the needed credential, which - when obtained - it can subsequently store in the wallet and use in the Presentation."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Editor's note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"TNO (or others) to provide additional content of this file."))),Object(o.b)("h3",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"The purpose of the Holder component is to handle Presentation Requests that it receives from ",Object(o.b)(s.a,{popup:"Verifier (functional component) --  the capability to request Peer Agents to present (provide) data from credentials (of a specified kind, issued by specified Parties), and to verify such responses (check structure, signatures, dates), according to its Principal's Verifier Policy.",reference:"/ctwg-sandbox/docs/terms/verifier",mdxType:"Term"},"verifier")," components (both of its own ",Object(o.b)(s.a,{popup:"Owner (of an Entity) --  the role that a Party performs when it is exercizing its legal, rightful or natural title to control that Entity.",reference:"/ctwg-sandbox/docs/terms/owner",mdxType:"Term"},"owner"),", and of other parties), and responding to such requests."),Object(o.b)("h3",{id:"criteria"},"Criteria"),Object(o.b)("p",null,"A ",Object(o.b)("strong",{parentName:"p"},"Holder")," is a component in the ",Object(o.b)("a",{parentName:"p",href:"../functional-architecture"},"eSSIF-Lab functional architecture")," whose function is to handle Presentation Requests that it receives from ",Object(o.b)(s.a,{popup:"Verifier (functional component) --  the capability to request Peer Agents to present (provide) data from credentials (of a specified kind, issued by specified Parties), and to verify such responses (check structure, signatures, dates), according to its Principal's Verifier Policy.",reference:"/ctwg-sandbox/docs/terms/verifier",mdxType:"Term"},"verifier")," components (both of its ",Object(o.b)(s.a,{popup:"Owner (of an Entity) --  the role that a Party performs when it is exercizing its legal, rightful or natural title to control that Entity.",reference:"/ctwg-sandbox/docs/terms/owner",mdxType:"Term"},"owner"),", and of other Parties)."),Object(o.b)("h3",{id:"functionality"},"Functionality"),Object(o.b)("p",null,"Typically, a Holder component would access its ",Object(o.b)(s.a,{popup:"Owner (of an Entity) --  the role that a Party performs when it is exercizing its legal, rightful or natural title to control that Entity.",reference:"/ctwg-sandbox/docs/terms/owner",mdxType:"Term"},"owner"),"'s Wallet to check if it has a credential that it can use to construct a Presentation (i.e. response) that satisfies the received request."),Object(o.b)("p",null,"It may happen that the Wallet does not have such a credential. However, for every (credential, issuer) pair, the request should specify the URI that is capable of issuing such a credential. If or when the Holder Policy/Preferences permit this, the Holder then requests its Principal's Transaction Data Collector to initiate a new transaction that will get the credential from that issuer, for which a clean transaction form would then consist of one that contains said credential. The Holder would then store it in its Principal's Wallet, and then proceed to service the presentation request as if it had obtained that credential from its Principal's Wallet."),Object(o.b)("p",null,"It may also happen that the Wallet has multiple credentials that satisfy the request, in which case the Holder must choose the one to use for constructing the presentation. Again, the Holder Policy/Preferences will specify how this choice needs to be made, and whether or not this can be done automatically by the Holder. If not, the Holder will need to provide for an interaction with a human Colleague that will make such decisions."),Object(o.b)("p",null,"In order to make the Holder component work, a Holder Policy/Preferences object is created by, or on behalf of its Principal, which specifies e.g.:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"whether or not credentials may be collected 'on the fly';")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"how to choose between credentials that all satisfy a presentation request (and whether the Holder can make such choices by itself, or whether or not human interaction is required);")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"the kinds of events and data to write to a holder-audit-log."))))}h.isMDXComponent=!0}}]);