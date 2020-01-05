(this["webpackJsonprogerking.dev"]=this["webpackJsonprogerking.dev"]||[]).push([[1],{102:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(49),c=n.n(o),i=(n(76),n(65)),l=n(27),u=n(116),s=n(109),m=n(68),f=n(42),d=n(13),p=n(56),b=n(8),g=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,138))})),w=r.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,137))})),h=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(6)]).then(n.bind(null,139))})),E=function(){return r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",component:g}),r.a.createElement(b.b,{exact:!0,path:"/work",component:w}),r.a.createElement(b.b,{exact:!0,path:"/contact",component:h}),r.a.createElement(b.a,{to:"/"}))},k=function(e){var t=e.message;return r.a.createElement(m.a,{width:"fill",height:"80px",background:"warning",align:"center",justify:"center"},t)},v=function(){return r.a.createElement(m.a,null,"loading...")},y=n(110),x=n(118),C=n(117),j=n(111),O=n(57),S=n(1);function B(){var e=Object(O.a)(["\n    :hover {\n        border-bottom: 3px solid;\n    }\n"]);return B=function(){return e},e}var W=Object(S.default)((function(e){var t=e.className,n=e.label,a=e.route,o=e.changeRoute,c=Object(b.h)({path:a,strict:!0,sensitive:!0});return r.a.createElement(C.a,{className:t,label:n,style:{borderBottom:(null===c||void 0===c?void 0:c.isExact)?"3px solid":"0px solid"},plain:!0,onClick:function(){o(a)}})}))(B()),z=function(){var e="small"===r.a.useContext(s.a),t=r.a.useState(!1),n=Object(l.a)(t,2),a=n[0],o=n[1],c=Object(b.g)(),i=[{route:"/",label:"Home"},{route:"/work",label:"Work"},{route:"/contact",label:"Contact"}],u=function(e){o(!1),c.push(e)},f=function(){return i.map((function(e){return r.a.createElement(W,{key:e.route,route:e.route,label:e.label,changeRoute:u})}))};return e?r.a.createElement(y.a,{direction:"column",fill:"horizontal"},r.a.createElement(m.a,{direction:"row",gap:"medium"},r.a.createElement(x.a,{onClick:function(){return u("/")},style:{cursor:"pointer"}},"Roger King"),r.a.createElement(C.a,{icon:r.a.createElement(j.a,null),onClick:function(){return o(!a)}})),a&&r.a.createElement(m.a,{animation:"fadeIn",direction:"row",gap:"medium",background:"light-3",fill:"horizontal",height:"70px",align:"center",justify:"center"},f())):r.a.createElement(y.a,{margin:{left:"50px",right:"50px",top:"30px"}},r.a.createElement(m.a,{direction:"row",gap:"medium"},f()))},D=n(112),N=n(113),P=n(114),R=function(){return r.a.createElement(D.a,{direction:"column",align:"center",justify:"center",pad:"small"},r.a.createElement(m.a,{direction:"row"},r.a.createElement(C.a,{as:"a",icon:r.a.createElement(N.a,null),href:d.a.linkedin,target:"_blank"}),r.a.createElement(C.a,{as:"a",icon:r.a.createElement(P.a,null),href:d.a.github,target:"_blank"})),"Roger King @ 2020")},A=function(){var e=Object(a.useState)(d.c[0]),t=Object(l.a)(e,2),n=t[0],o=t[1];return r.a.createElement(u.a,{theme:d.b,full:!0},r.a.createElement(k,{message:"Under development"}),r.a.createElement(f.a,{basename:"/"},r.a.createElement(z,null),r.a.createElement(s.a.Consumer,null,(function(e){var t="small"===e?{left:"50px",right:"50px"}:{left:"150px",right:"150px"};return r.a.createElement(m.a,{pad:Object(i.a)({},t,{bottom:"40px"})},r.a.createElement(p.a.Provider,{value:{selectedWork:n,setSelectedWork:o}},r.a.createElement(a.Suspense,{fallback:r.a.createElement(v,null)},r.a.createElement(E,null))))}))),r.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},13:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}));var a=n(59),r=n(62),o=Object(a.deepMerge)(r.base,{global:{colors:{background:"#090909",brand:"#282c34","accent-1":"#B8860B","accent-2":"#CC9900","accent-3":"#D9B01C",focus:"#333333",critical:"#B33A3A",warning:"#D9B01C"},font:{family:"Dosis, sans-serif"}},button:{border:{radius:"3px"}},heading:{font:{family:"Pacifico, cursive",size:"4em"},level:{2:{font:{family:"Pacifico, cursive"}},3:{font:{family:"Dosis, sans-serif"}},4:{font:{family:"Dosis, sans-serif"}}}}}),c=[{company:"Compass",title:"Senior Software Enginer - Tech Lead",website:"https://www.compass.com",location:"New York City"},{company:"Rocketrip",title:"Software Enginer",website:"https://www.rocketrip.com",location:"New York City"},{company:"Zillion Group",title:"Software Engineer",website:"https://www.zillion.com",location:"Norwalk, CT"},{company:"Crown Awards",title:"Junior Web Developer",website:"https://www.crownawards.com",location:"Elmsford, NY"},{company:"Apple Inc",title:"Genius",website:"https://www.apple.com",location:"Greenwich, CT"}],i={github:"https://github.com/roger-king",linkedin:"https://www.linkedin.com/in/roger-king-dev"}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),o=n(13),c=r.a.createContext({selectedWork:o.c[0],setSelectedWork:function(){}})},71:function(e,t,n){e.exports=n(102)},76:function(e,t,n){}},[[71,2,3]]]);
//# sourceMappingURL=main.f488f43a.chunk.js.map