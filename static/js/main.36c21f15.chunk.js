(this["webpackJsonprogerking.dev"]=this["webpackJsonprogerking.dev"]||[]).push([[1],{101:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(50),l=n.n(o),c=(n(75),n(27)),i=n(116),u=n(115),s=n(43),m=n(13),f=n(57),d=n(10),p=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,136))})),w=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,139))})),b=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(7)]).then(n.bind(null,140))})),g=function(){return r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:p}),r.a.createElement(d.b,{exact:!0,path:"/work",component:w}),r.a.createElement(d.b,{exact:!0,path:"/contact",component:b}),r.a.createElement(d.a,{to:"/"}))},h=n(49),E=function(e){var t=e.message;return r.a.createElement(h.a,{width:"fill",height:"80px",background:"warning",align:"center",justify:"center"},t)},k=function(){return r.a.createElement(h.a,null,"loading...")},v=n(108),y=n(109),x=n(118),C=n(117),j=n(110),S=n(51),B=n(1);function O(){var e=Object(S.a)(["\n    :hover {\n        border-bottom: 3px solid;\n    }\n"]);return O=function(){return e},e}var W=Object(B.default)((function(e){var t=e.className,n=e.label,a=e.route,o=Object(d.g)(),l=Object(d.h)({path:a,strict:!0,sensitive:!0});return r.a.createElement(C.a,{className:t,label:n,style:{borderBottom:l?"3px solid":"0px solid"},plain:!0,onClick:function(){o.push(a)}})}))(O()),z=function(){var e="small"===r.a.useContext(v.a),t=r.a.useState(!1),n=Object(c.a)(t,2),a=n[0],o=n[1],l=[{route:"/",label:"Home"},{route:"/work",label:"Work"},{route:"/contact",label:"Contact"}];return e?r.a.createElement(y.a,{direction:"column",fill:"horizontal"},r.a.createElement(h.a,{direction:"row",gap:"medium"},r.a.createElement(x.a,null,"Roger King"),r.a.createElement(C.a,{icon:r.a.createElement(j.a,null),onClick:function(){return o(!a)}})),a&&r.a.createElement(h.a,{direction:"row",gap:"medium",background:"light-3",fill:"horizontal",height:"70px",align:"center",justify:"center"},l.map((function(e){return r.a.createElement(W,{route:e.route,label:e.label})})))):r.a.createElement(y.a,{margin:{left:"50px",right:"50px",top:"30px"}},r.a.createElement(h.a,{direction:"row",gap:"medium"},l.map((function(e){return r.a.createElement(W,{route:e.route,label:e.label})}))))},D=n(111),N=n(112),P=n(113),A=function(){return r.a.createElement(D.a,{direction:"column",align:"center",justify:"center",pad:"small"},r.a.createElement(h.a,{direction:"row"},r.a.createElement(C.a,{as:"a",icon:r.a.createElement(N.a,null),href:m.a.linkedin,target:"_blank"}),r.a.createElement(C.a,{as:"a",icon:r.a.createElement(P.a,null),href:m.a.github,target:"_blank"})),"Roger King @ 2020")},G=function(){var e=Object(a.useState)(m.c[0]),t=Object(c.a)(e,2),n=t[0],o=t[1];return r.a.createElement(i.a,{theme:m.b,full:!0},r.a.createElement(E,{message:"Under development"}),r.a.createElement(s.a,{basename:"/"},r.a.createElement(z,null),r.a.createElement(u.a,{pad:{left:"150px",right:"150px"},overflow:"auto",fill:!0},r.a.createElement(f.a.Provider,{value:{selectedWork:n,setSelectedWork:o}},r.a.createElement(a.Suspense,{fallback:r.a.createElement(k,null)},r.a.createElement(g,null))))),r.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},13:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return c}));var a=n(60),r=n(63),o=Object(a.deepMerge)(r.base,{global:{colors:{background:"#090909",brand:"#282c34","accent-1":"#B8860B","accent-2":"#CC9900","accent-3":"#D9B01C",focus:"#333333",critical:"#B33A3A",warning:"#D9B01C"},font:{family:"Dosis, sans-serif"}},button:{border:{radius:"3px"}},heading:{font:{family:"Pacifico, cursive",size:"4em"},level:{2:{font:{family:"Pacifico, cursive"}},3:{font:{family:"Dosis, sans-serif"}},4:{font:{family:"Dosis, sans-serif"}}}}}),l=[{company:"Compass",title:"Senior Software Enginer - Tech Lead",website:"https://www.compass.com",location:"New York City"},{company:"Rocketrip",title:"Software Enginer",website:"https://www.rocketrip.com",location:"New York City"},{company:"Zillion Group",title:"Software Engineer",website:"https://www.zillion.com",location:"Norwalk, CT"},{company:"Crown Awards",title:"Junior Web Developer",website:"https://www.crownawards.com",location:"Elmsford, NY"},{company:"Apple Inc",title:"Genius",website:"https://www.apple.com",location:"Greenwich, CT"}],c={github:"https://github.com/roger-king",linkedin:"https://www.linkedin.com/in/roger-king-dev"}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),o=n(13),l=r.a.createContext({selectedWork:o.c[0],setSelectedWork:function(){}})},70:function(e,t,n){e.exports=n(101)},75:function(e,t,n){}},[[70,2,3]]]);
//# sourceMappingURL=main.36c21f15.chunk.js.map