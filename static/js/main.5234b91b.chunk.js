(this["webpackJsonprogerking.dev"]=this["webpackJsonprogerking.dev"]||[]).push([[1],{101:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(50),i=n.n(o),l=(n(75),n(27)),c=n(116),u=n(108),s=n(115),m=n(43),f=n(13),d=n(57),p=n(8),w=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,136))})),g=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,139))})),b=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(7)]).then(n.bind(null,140))})),h=function(){return r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:w}),r.a.createElement(p.b,{exact:!0,path:"/work",component:g}),r.a.createElement(p.b,{exact:!0,path:"/contact",component:b}),r.a.createElement(p.a,{to:"/"}))},E=n(49),k=function(e){var t=e.message;return r.a.createElement(E.a,{width:"fill",height:"80px",background:"warning",align:"center",justify:"center"},t)},v=function(){return r.a.createElement(E.a,null,"loading...")},y=n(109),x=n(118),C=n(117),j=n(110),S=n(51),B=n(1);function O(){var e=Object(S.a)(["\n    :hover {\n        border-bottom: 3px solid;\n    }\n"]);return O=function(){return e},e}var W=Object(B.default)((function(e){var t=e.className,n=e.label,a=e.route,o=e.changeRoute,i=Object(p.h)({path:a,strict:!0,sensitive:!0});return r.a.createElement(C.a,{className:t,label:n,style:{borderBottom:(null===i||void 0===i?void 0:i.isExact)?"3px solid":"0px solid"},plain:!0,onClick:function(){o(a)}})}))(O()),z=function(){var e="small"===r.a.useContext(u.a),t=r.a.useState(!1),n=Object(l.a)(t,2),a=n[0],o=n[1],i=Object(p.g)(),c=[{route:"/",label:"Home"},{route:"/work",label:"Work"},{route:"/contact",label:"Contact"}],s=function(e){o(!1),i.push(e)},m=function(){return c.map((function(e){return r.a.createElement(W,{key:e.route,route:e.route,label:e.label,changeRoute:s})}))};return e?r.a.createElement(y.a,{direction:"column",fill:"horizontal"},r.a.createElement(E.a,{direction:"row",gap:"medium"},r.a.createElement(x.a,{onClick:function(){return s("/")},style:{cursor:"pointer"}},"Roger King"),r.a.createElement(C.a,{icon:r.a.createElement(j.a,null),onClick:function(){return o(!a)}})),a&&r.a.createElement(E.a,{animation:"fadeIn",direction:"row",gap:"medium",background:"light-3",fill:"horizontal",height:"70px",align:"center",justify:"center"},m())):r.a.createElement(y.a,{margin:{left:"50px",right:"50px",top:"30px"}},r.a.createElement(E.a,{direction:"row",gap:"medium"},m()))},D=n(111),N=n(112),P=n(113),R=function(){return r.a.createElement(D.a,{direction:"column",align:"center",justify:"center",pad:"small"},r.a.createElement(E.a,{direction:"row"},r.a.createElement(C.a,{as:"a",icon:r.a.createElement(N.a,null),href:f.a.linkedin,target:"_blank"}),r.a.createElement(C.a,{as:"a",icon:r.a.createElement(P.a,null),href:f.a.github,target:"_blank"})),"Roger King @ 2020")},A=function(){var e=Object(a.useState)(f.c[0]),t=Object(l.a)(e,2),n=t[0],o=t[1];return r.a.createElement(c.a,{theme:f.b,full:!0},r.a.createElement(k,{message:"Under development"}),r.a.createElement(m.a,{basename:"/"},r.a.createElement(z,null),r.a.createElement(u.a.Consumer,null,(function(e){var t="small"===e?{left:"50px",right:"50px"}:{left:"150px",right:"150px"};return r.a.createElement(s.a,{pad:t,overflow:"auto",fill:!0},r.a.createElement(d.a.Provider,{value:{selectedWork:n,setSelectedWork:o}},r.a.createElement(a.Suspense,{fallback:r.a.createElement(v,null)},r.a.createElement(h,null))))}))),r.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},13:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return l}));var a=n(60),r=n(63),o=Object(a.deepMerge)(r.base,{global:{colors:{background:"#090909",brand:"#282c34","accent-1":"#B8860B","accent-2":"#CC9900","accent-3":"#D9B01C",focus:"#333333",critical:"#B33A3A",warning:"#D9B01C"},font:{family:"Dosis, sans-serif"}},button:{border:{radius:"3px"}},heading:{font:{family:"Pacifico, cursive",size:"4em"},level:{2:{font:{family:"Pacifico, cursive"}},3:{font:{family:"Dosis, sans-serif"}},4:{font:{family:"Dosis, sans-serif"}}}}}),i=[{company:"Compass",title:"Senior Software Enginer - Tech Lead",website:"https://www.compass.com",location:"New York City"},{company:"Rocketrip",title:"Software Enginer",website:"https://www.rocketrip.com",location:"New York City"},{company:"Zillion Group",title:"Software Engineer",website:"https://www.zillion.com",location:"Norwalk, CT"},{company:"Crown Awards",title:"Junior Web Developer",website:"https://www.crownawards.com",location:"Elmsford, NY"},{company:"Apple Inc",title:"Genius",website:"https://www.apple.com",location:"Greenwich, CT"}],l={github:"https://github.com/roger-king",linkedin:"https://www.linkedin.com/in/roger-king-dev"}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),o=n(13),i=r.a.createContext({selectedWork:o.c[0],setSelectedWork:function(){}})},70:function(e,t,n){e.exports=n(101)},75:function(e,t,n){}},[[70,2,3]]]);
//# sourceMappingURL=main.5234b91b.chunk.js.map