(this["webpackJsonprogerking.dev"]=this["webpackJsonprogerking.dev"]||[]).push([[1],{102:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(49),i=n.n(o),c=(n(76),n(65)),l=n(27),s=n(116),u=n(109),m=n(68),d=n(42),p=n(13),g=n(57),f=n(8),w=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,137))})),h=r.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,138))})),b=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(6)]).then(n.bind(null,139))})),E=function(){return r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",component:w}),r.a.createElement(f.b,{exact:!0,path:"/work",component:h}),r.a.createElement(f.b,{exact:!0,path:"/contact",component:b}),r.a.createElement(f.a,{to:"/"}))},k=function(e){var t=e.message;return r.a.createElement(m.a,{width:"fill",height:"80px",background:"warning",align:"center",justify:"center"},t)},y=function(){return r.a.createElement(m.a,null,"loading...")},v=n(110),x=n(118),C=n(117),j=n(111),B=n(51),O=n(1);function A(){var e=Object(B.a)(["\n    :hover {\n        border-bottom: 3px solid;\n    }\n"]);return A=function(){return e},e}var D=Object(O.default)((function(e){var t=e.className,n=e.label,a=e.route,o=e.changeRoute,i=Object(f.h)({path:a,strict:!0,sensitive:!0});return r.a.createElement(C.a,{className:t,label:n,style:{borderBottom:(null===i||void 0===i?void 0:i.isExact)?"3px solid":"0px solid"},plain:!0,onClick:function(){o(a)}})}))(A()),P=function(){var e="small"===r.a.useContext(u.a),t=r.a.useState(!1),n=Object(l.a)(t,2),a=n[0],o=n[1],i=Object(f.g)(),c=[{route:"/",label:"Home"},{route:"/work",label:"Work"},{route:"/contact",label:"Contact"}],s=function(e){o(!1),i.push(e)},d=function(){return c.map((function(e){return r.a.createElement(D,{key:e.route,route:e.route,label:e.label,changeRoute:s})}))};return e?r.a.createElement(v.a,{direction:"column",fill:"horizontal"},r.a.createElement(m.a,{direction:"row",gap:"medium"},r.a.createElement(x.a,{onClick:function(){return s("/")},style:{cursor:"pointer"}},"Roger King"),r.a.createElement(C.a,{icon:r.a.createElement(j.a,null),onClick:function(){return o(!a)}})),a&&r.a.createElement(m.a,{animation:"fadeIn",direction:"row",gap:"medium",background:"light-3",fill:"horizontal",height:"70px",align:"center",justify:"center"},d())):r.a.createElement(v.a,{margin:{left:"50px",right:"50px",top:"30px"}},r.a.createElement(m.a,{direction:"row",gap:"medium"},d()))},S=n(112),W=n(113),z=n(114),M=function(){return r.a.createElement(S.a,{direction:"column",align:"center",justify:"center",pad:"small"},r.a.createElement(m.a,{direction:"row"},r.a.createElement(C.a,{as:"a",icon:r.a.createElement(W.a,null),href:p.a.linkedin,target:"_blank"}),r.a.createElement(C.a,{as:"a",icon:r.a.createElement(z.a,null),href:p.a.github,target:"_blank"})),"Roger King @ 2020")},N=function(){var e=Object(a.useState)(p.d[0]),t=Object(l.a)(e,2),n=t[0],o=t[1];return r.a.createElement(s.a,{theme:p.c,full:!0},r.a.createElement(k,{message:"Under development"}),r.a.createElement(d.a,{basename:"/"},r.a.createElement(P,null),r.a.createElement(u.a.Consumer,null,(function(e){var t="small"===e?{left:"50px",right:"50px"}:{left:"150px",right:"150px"};return r.a.createElement(m.a,{pad:Object(c.a)({},t,{bottom:"40px"})},r.a.createElement(g.a.Provider,{value:{selectedWork:n,setSelectedWork:o}},r.a.createElement(a.Suspense,{fallback:r.a.createElement(y,null)},r.a.createElement(E,null))))}))),r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},13:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var a=n(59),r=n(62),o=Object(a.deepMerge)(r.base,{global:{colors:{background:"#090909",brand:"#282c34","accent-1":"#B8860B","accent-2":"#CC9900","accent-3":"#D9B01C",focus:"#333333",critical:"#B33A3A",warning:"#D9B01C"},font:{family:"Dosis, sans-serif"}},button:{border:{radius:"3px"}},worldMap:{place:{base:"10px"}},heading:{font:{family:"Pacifico, cursive",size:"4em"},level:{2:{font:{family:"Pacifico, cursive"}},3:{font:{family:"Dosis, sans-serif"}},4:{font:{family:"Dosis, sans-serif"}}}}}),i=[{company:"Compass",title:"Senior Software Enginer - Tech Lead",website:"https://www.compass.com",location:"New York City"},{company:"Rocketrip",title:"Software Enginer",website:"https://www.rocketrip.com",location:"New York City"},{company:"Zillion Group",title:"Software Engineer",website:"https://www.zillion.com",location:"Norwalk, CT"},{company:"Crown Awards",title:"Junior Web Developer",website:"https://www.crownawards.com",location:"Elmsford, NY"},{company:"Apple Inc",title:"Genius",website:"https://www.apple.com",location:"Greenwich, CT"}],c=[{img:"react",category:"Front End",description:"A multi-facet client side framework enabling for web and mobile development"},{img:"angular",category:"Front End",description:"An MVC Framework that is written in Python."},{img:"graphql",category:"Back End",description:"Middleware data-fetching mechanism"},{img:"django",category:"Back End",description:"An MVC Framework that is written in Python."},{img:"fastapi",category:"Back End",description:"A minimal async python framework."},{img:"golang",category:"Back End",description:""},{img:"nodejs",category:"Back End",description:""},{img:"aws",category:"DevOps",description:"Leading cloud provider with many services to help build your application features. "},{img:"gcp",category:"DevOps",description:"An MVC Framework that is written in Python."},{img:"terraform",category:"DevOps",description:"An infrastructure as code language that creates reproducable and mantainable infrastructure in all "},{img:"k8s",category:"DevOps",description:""}],l={github:"https://github.com/roger-king",linkedin:"https://www.linkedin.com/in/roger-king-dev"}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),o=n(13),i=r.a.createContext({selectedWork:o.d[0],setSelectedWork:function(){}})},71:function(e,t,n){e.exports=n(102)},76:function(e,t,n){}},[[71,2,3]]]);
//# sourceMappingURL=main.79b1d479.chunk.js.map