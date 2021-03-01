(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return u}));var s=a(3),i=a(7),n=(a(0),a(202)),o=a(204),r=a.n(o),c={id:"data-discloser",title:"Data Discloser",scopeid:"essifLab",type:"concept",typeid:"data-discloser",stage:"draft",hoverText:"Data Discloser --  a functional component that is capable of disclosing data to (Agents of) other Parties, e.g. in the form of Credentials."},l={unversionedId:"terms/data-discloser",id:"terms/data-discloser",isDocsHomePage:!1,title:"Data Discloser",description:"Short Description",source:"@site/docs/terms/data-discloser.md",slug:"/terms/data-discloser",permalink:"/ctwg-sandbox/docs/terms/data-discloser",version:"current"},d=[{value:"Short Description",id:"short-description",children:[]},{value:"Purpose",id:"purpose",children:[]},{value:"Criteria",id:"criteria",children:[]},{value:"Functionality",id:"functionality",children:[]}],p={toc:d};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(s.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"short-description"},"Short Description"),Object(n.b)("p",null,"A ",Object(n.b)("strong",{parentName:"p"},"Data Discloser")," is an (architectural) function (a functional component in the ",Object(n.b)("a",{parentName:"p",href:"../functional-architecture"},"eSSIF-Lab functional architecture"),") that applications (that work for some Party) can call to communicate things such as: "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"the results of a business transaction (e.g. statements to confirm that a transaction happened, thereby supplying appropriate details)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"the status of a business transaction (e.g. that an order has been received in good order, that delivery of an order is dealyed or otherwise changed)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"knowledge (including judgements) that this Party has about ",Object(n.b)(r.a,{popup:"Entity --  something that is known to exist.",reference:"/ctwg-sandbox/docs/terms/entity",mdxType:"Term"},"Entities")," (people, organizations, things, orders, deliveries, etc.)"))),Object(n.b)("p",null,"The Data Discloser uses a ",Object(n.b)(r.a,{popup:"Data Collector Policy --  a Digital Policy that enables an operational Data Collector component to function according to the rules of its Policy Governor.",reference:"/ctwg-sandbox/docs/terms/data-collector-policy",mdxType:"Term"},"data-collector-policy")," to learn about the applicable (business) rules of its ",Object(n.b)(r.a,{popup:"Principal (of an Actor) --  the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",reference:"/ctwg-sandbox/docs/terms/principal",mdxType:"Term"},"principal"),". Such a policy may specify e.g. which types of credentials its principal is willing to (have) issue(d), to whom such credentials may be issued and the kinds of assurances that must be obtained before doing so, etcetera."),Object(n.b)("p",null,"The Data Discloser uses the ",Object(n.b)(r.a,{popup:"eSSIF-Glue --  interface layer that allows components with Transaction Data Collector and/or Transaction Data Discloser functionality to use the Wallet, Holder, Issuer and Verifier functionalities.",reference:"/ctwg-sandbox/docs/terms/essif-glue",mdxType:"Term"},"eSSIF-Glue")," interface to access the ",Object(n.b)(r.a,{popup:"Wallet (functional component) --  the capability to securely store data as requested by Colleague Agents, and to provide stored data to Colleague Agents or Peer Agents, all in compliance with the rules of its Principal's Wallet Policy.",reference:"/ctwg-sandbox/docs/terms/wallet",mdxType:"Term"},"Wallet"),", ",Object(n.b)(r.a,{popup:"Holder (functional component) --  the capability to handle presentation requests from a Peer Agent, produce the requested data (a presentation) according to its Principal's holder-policy, and send that in response to the request.",reference:"/ctwg-sandbox/docs/terms/holder",mdxType:"Term"},"Holder"),", ",Object(n.b)(r.a,{popup:"Issuer (functional component) --  the capability to construct Credentials from data objects, according to the content of its Principal's Issuer-Policy (specifically regarding the way in which the Credential is to be digitally signed), and pass it to the Wallet-component of its Principal allowing it to be issued.",reference:"/ctwg-sandbox/docs/terms/issuer",mdxType:"Term"},"Issuer")," and ",Object(n.b)(r.a,{popup:"Verifier (functional component) --  the capability to request Peer Agents to present (provide) data from credentials (of a specified kind, issued by specified Parties), and to verify such responses (check structure, signatures, dates), according to its Principal's Verifier Policy.",reference:"/ctwg-sandbox/docs/terms/verifier",mdxType:"Term"},"Verifier")," functionalities."),Object(n.b)("h3",{id:"purpose"},"Purpose"),Object(n.b)("p",null,"The purpose of the Data Discloser component is to state the (various, sometimes intermediary) results of transactions, by collecting data from the Business Data Stores, and creating a set of (related) statements/claims that can subsequently be issued to other Parties. A special kind of result is the (provisioning of) a credential that its Principal already has created."),Object(n.b)("h3",{id:"criteria"},"Criteria"),Object(n.b)("p",null,"A ",Object(n.b)("strong",{parentName:"p"},"Data Discloser")," is a component in the ",Object(n.b)("a",{parentName:"p",href:"../functional-architecture"},"eSSIF-Lab functional architecture")," that is capable of stating (various, sometimes intermediary) results of transactions, by collecting data from the Business Data Stores, and creating a set of (related) statements/claims that can subsequently be issued to other Parties."),Object(n.b)("h3",{id:"functionality"},"Functionality"),Object(n.b)("p",null,"Typically, and at any point in time, Parties are capable of expressing statements about entities that they know to exist. They could express statements about individuals, about themselves, the state of transactions, and so on. We will use the term '",Object(n.b)("strong",{parentName:"p"},"subject (of a statement of a Party)"),"' to refer to the entity that this Party knows to exist, and about whom/which the statement has been made."),Object(n.b)("p",null,"We will use the term '",Object(n.b)("strong",{parentName:"p"},"subject-id (of a statement of a Party)"),"' to refer to the representation that this Party has chosen to use for referring to the subject in said statement. A subject-id must have the property of being an identifier within every administrative context that this Party uses. It need not be humanly interpretable (and preferably is not)."),Object(n.b)("p",null,"Parties need to specify the kinds of credentials they are willing to issue, the class of entities (e.g. people, cars, Organizations) for which it will issue them, and the information schema (structure) that it will use in credentials of such kinds.",Object(n.b)("sup",{parentName:"p",id:"fnref-1"},Object(n.b)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," This allows the Data Discloser to construct data objects that conform to this information schema, and present it to the Issuer component for actual issuing."),Object(n.b)("p",null,"The Data Discloser Issuing Policy specifies the kinds of (linked-)data-objects that credentials may be created for. This allows the Data Discloser to construct such a (linked-)data-objects for every subject-id that identifies a subject of the class for which a credential can be issued, which can subsequently be sent to the Issuer component that can turn it into a credential of a specific sort."),Object(n.b)("p",null,"You can think of the Data Discloser as the component that pulls all data together that can be put in a credential (e.g. in a passport), and the Issuer as the component that puts the data in an (empty) passport, and signing it so as to create the actual credential."),Object(n.b)("p",null,"The Data Discloser may either push credential data to the Issuer component, so that the Issuer always has up-to-date credentials, or it can wait until the Issuer requests credential data for the creation of a credential of a specific type for a specific subject."),Object(n.b)("hr",null),Object(n.b)("div",{className:"footnotes"},Object(n.b)("hr",{parentName:"div"}),Object(n.b)("ol",{parentName:"div"},Object(n.b)("li",{parentName:"ol",id:"fn-1"},"We assume/stipulate that the Party maintains a credential catalogue that contains this, and other information about every kind of credential that it issues, and that such catalogues are available to other Parties that want or need to use such credentials.",Object(n.b)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);