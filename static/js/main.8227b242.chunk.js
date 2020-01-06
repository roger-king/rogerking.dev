(this["webpackJsonprogerking.dev"]=this["webpackJsonprogerking.dev"]||[]).push([[1],{102:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(50),i=n.n(o),c=(n(76),n(66)),l=n(27),u=n(117),s=n(109),m=n(116),f=n(43),d=n(13),p=n(57),b=n(8),g=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,137))})),w=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,140))})),h=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(7)]).then(n.bind(null,141))})),E=function(){return r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",component:g}),r.a.createElement(b.b,{exact:!0,path:"/work",component:w}),r.a.createElement(b.b,{exact:!0,path:"/contact",component:h}),r.a.createElement(b.a,{to:"/"}))},k=n(49),v=function(e){var t=e.message;return r.a.createElement(k.a,{width:"fill",height:"80px",background:"warning",align:"center",justify:"center"},t)},y=function(){return r.a.createElement(k.a,null,"loading...")},x=n(110),C=n(119),j=n(118),O=n(111),S=n(51),B=n(1);function W(){var e=Object(S.a)(["\n    :hover {\n        border-bottom: 3px solid;\n    }\n"]);return W=function(){return e},e}var z=Object(B.default)((function(e){var t=e.className,n=e.label,a=e.route,o=e.changeRoute,i=Object(b.h)({path:a,strict:!0,sensitive:!0});return r.a.createElement(j.a,{className:t,label:n,style:{borderBottom:(null===i||void 0===i?void 0:i.isExact)?"3px solid":"0px solid"},plain:!0,onClick:function(){o(a)}})}))(W()),D=function(){var e="small"===r.a.useContext(s.a),t=r.a.useState(!1),n=Object(l.a)(t,2),a=n[0],o=n[1],i=Object(b.g)(),c=[{route:"/",label:"Home"},{route:"/work",label:"Work"},{route:"/contact",label:"Contact"}],u=function(e){o(!1),i.push(e)},m=function(){return c.map((function(e){return r.a.createElement(z,{key:e.route,route:e.route,label:e.label,changeRoute:u})}))};return e?r.a.createElement(x.a,{direction:"column",fill:"horizontal"},r.a.createElement(k.a,{direction:"row",gap:"medium"},r.a.createElement(C.a,{onClick:function(){return u("/")},style:{cursor:"pointer"}},"Roger King"),r.a.createElement(j.a,{icon:r.a.createElement(O.a,null),onClick:function(){return o(!a)}})),a&&r.a.createElement(k.a,{animation:"fadeIn",direction:"row",gap:"medium",background:"light-3",fill:"horizontal",height:"70px",align:"center",justify:"center"},m())):r.a.createElement(x.a,{margin:{left:"50px",right:"50px",top:"30px"}},r.a.createElement(k.a,{direction:"row",gap:"medium"},m()))},N=n(112),P=n(113),R=n(114),A=function(){return r.a.createElement(N.a,{direction:"column",align:"center",justify:"center",pad:"small"},r.a.createElement(k.a,{direction:"row"},r.a.createElement(j.a,{as:"a",icon:r.a.createElement(P.a,null),href:d.a.linkedin,target:"_blank"}),r.a.createElement(j.a,{as:"a",icon:r.a.createElement(R.a,null),href:d.a.github,target:"_blank"})),"Roger King @ 2020")},G=function(){var e=Object(a.useState)(d.c[0]),t=Object(l.a)(e,2),n=t[0],o=t[1];return r.a.createElement(u.a,{theme:d.b},r.a.createElement(v,{message:"Under development"}),r.a.createElement(f.a,{basename:"/"},r.a.createElement(D,null),r.a.createElement(s.a.Consumer,null,(function(e){var t="small"===e?{left:"50px",right:"50px"}:{left:"150px",right:"150px"};return r.a.createElement(m.a,{pad:Object(c.a)({},t,{bottom:"40px"}),flex:"grow",basis:"full"},r.a.createElement(p.a.Provider,{value:{selectedWork:n,setSelectedWork:o}},r.a.createElement(a.Suspense,{fallback:r.a.createElement(y,null)},r.a.createElement(E,null))))}))),r.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},13:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return c}));var a=n(60),r=n(63),o=Object(a.deepMerge)(r.base,{global:{colors:{background:"#090909",brand:"#282c34","accent-1":"#B8860B","accent-2":"#CC9900","accent-3":"#D9B01C",focus:"#333333",critical:"#B33A3A",warning:"#D9B01C"},font:{family:"Dosis, sans-serif"}},button:{border:{radius:"3px"}},heading:{font:{family:"Pacifico, cursive",size:"4em"},level:{2:{font:{family:"Pacifico, cursive"}},3:{font:{family:"Dosis, sans-serif"}},4:{font:{family:"Dosis, sans-serif"}}}}}),i=[{company:"Compass",title:"Senior Software Enginer - Tech Lead",website:"https://www.compass.com",location:"New York City"},{company:"Rocketrip",title:"Software Enginer",website:"https://www.rocketrip.com",location:"New York City"},{company:"Zillion Group",title:"Software Engineer",website:"https://www.zillion.com",location:"Norwalk, CT"},{company:"Crown Awards",title:"Junior Web Developer",website:"https://www.crownawards.com",location:"Elmsford, NY"},{company:"Apple Inc",title:"Genius",website:"https://www.apple.com",location:"Greenwich, CT"}],c={github:"https://github.com/roger-king",linkedin:"https://www.linkedin.com/in/roger-king-dev"}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),o=n(13),i=r.a.createContext({selectedWork:o.c[0],setSelectedWork:function(){}})},71:function(e,t,n){e.exports=n(102)},76:function(e,t,n){}},[[71,2,3]]]);
//# sourceMappingURL=main.8227b242.chunk.js.map