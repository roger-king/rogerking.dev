(this["webpackJsonprogerking.dev"]=this["webpackJsonprogerking.dev"]||[]).push([[7],{138:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(68),i=n(118),c=n(140),l=n(1),u=n(6),s=n(3),h=n(64),f=l.default.a.withConfig({displayName:"StyledAnchor",componentId:"sc-1rp7lwl-0"})(["box-sizing:border-box;"," color:",";"," text-decoration:",";cursor:pointer;outline:none;"," "," "," "," "," ",""],(function(e){return function(e){if(e.size){var t=e.size||"medium",n=e.theme.text[t];return Object(l.css)(["font-size:",";line-height:",";"],n.size,n.height)}return Object(l.css)(["font-size:inherit;line-height:inherit;"])}(e)}),(function(e){return Object(s.c)(e.colorProp||e.theme.anchor.color,e.theme)}),(function(e){return e.theme.anchor.fontWeight&&"font-weight: "+e.theme.anchor.fontWeight+";"}),(function(e){return e.hasIcon?"none":e.theme.anchor.textDecoration}),h.f,(function(e){return!e.disabled&&e.theme.anchor.hover&&Object(l.css)(["&:hover{"," "," ","}"],e.theme.anchor.hover.textDecoration&&"text-decoration: "+e.theme.anchor.hover.textDecoration+";",e.theme.anchor.hover.fontWeight&&"font-weight: "+e.theme.anchor.hover.fontWeight+";",e.theme.anchor.hover.extend)}),(function(e){return e.hasIcon&&!e.hasLabel&&"\n    padding: "+e.theme.global.edgeSize.small+";\n  "}),(function(e){return e.disabled&&"\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n"}),(function(e){return e.focus&&h.e}),(function(e){return e.theme.anchor.extend}));function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}f.defaultProps={},Object.setPrototypeOf(f.defaultProps,u.a);var p=Object(o.forwardRef)((function(e,t){var n=e.a11yTitle,i=e.children,c=e.color,h=e.disabled,p=e.href,v=e.icon,m=e.label,b=e.onBlur,g=e.onClick,M=e.onFocus,O=e.reverse,y=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["a11yTitle","children","color","disabled","href","icon","label","onBlur","onClick","onFocus","reverse"]),k=Object(o.useContext)(l.ThemeContext)||u.a.theme,w=Object(o.useState)(),j=w[0],x=w[1];Object(o.useEffect)((function(){(v||m)&&i&&console.warn("Anchor should not have children if icon or label is provided")}),[i,v,m]);var P=v;v&&!v.props.color&&(P=Object(o.cloneElement)(v,{color:Object(s.c)(c||k.anchor.color,k)}));var C=O?m:P,E=O?P:m;return r.a.createElement(f,d({},y,{ref:t,"aria-label":n,colorProp:c,disabled:h,hasIcon:!!v,focus:j,hasLabel:m,reverse:O,href:h?void 0:p,onClick:h?void 0:g,onFocus:function(e){x(!0),M&&M(e)},onBlur:function(e){x(!1),b&&b(e)}}),C&&E?r.a.createElement(a.a,{as:"span",direction:"row",align:"center",gap:"small",style:{display:"inline-flex"}},C,E):C||E||i)}));p.displayName="Anchor";var v=p,m=n(119),b=n(4),g=l.default.svg.withConfig({displayName:"StyledWorldMap",componentId:"had4c3-0"})([""," "," ",";"],h.f,(function(e){return void 0!==e.fillProp?"horizontal"===(t=e.fillProp)?"\n      width: 100%;\n      height: unset;\n    ":"vertical"===t?"\n      width: unset;\n      height: 100%;\n    ":t?"\n      width: 100%;\n      height: 100%;\n    ":"":"width: 100%;";var t}),(function(e){return e.theme.worldMap&&e.theme.worldMap.extend}));function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}g.defaultProps={},Object.setPrototypeOf(g.defaultProps,u.a);var w=[{name:"Australia",origin:[74,32],area:[[4,0],[7,1],[15,7],[13,9],[0,6],[0,2]],dots:[[4,0,1],[2,1,6],[0,2,9],[0,3,10],[0,4,10],[0,5,3],[5,5,5],[5,6,4],[15,7,1],[14,8,1],[13,9,1]]},{name:"Asia",origin:[52,1],area:[[16,0],[38,5],[40,7],[28,17],[24,25],[29,29],[19,29],[11,24],[3,23],[0,20],[0,19],[6,13],[7,6]],dots:[[16,0,1],[17,1,2],[18,2,2],[15,3,6],[28,3,1],[30,3,1],[10,4,2],[13,4,10],[24,4,1],[9,5,22],[32,5,1],[38,5,1],[7,6,2],[10,6,1],[12,6,27],[7,7,34],[7,8,31],[7,9,26],[34,9,3],[7,10,22],[31,10,1],[33,10,1],[7,11,21],[32,11,2],[7,12,21],[32,12,1],[6,13,22],[32,13,1],[6,14,22],[5,15,22],[3,16,2],[6,16,20],[2,17,3],[6,17,16],[24,17,1],[28,17,1],[1,18,22],[26,18,2],[0,19,24],[0,20,5],[6,20,17],[2,21,5],[10,21,14],[2,22,5],[11,22,4],[16,22,4],[3,23,3],[11,23,2],[17,23,3],[23,23,1],[11,24,2],[18,24,2],[23,24,1],[24,25,1],[18,26,1],[22,26,1],[18,27,1],[20,27,4],[18,28,1],[21,28,1],[23,28,1],[26,28,3],[19,29,1],[28,29,2]]},{name:"Africa",origin:[40,19],area:[[3,0],[6,0],[11,2],[16,7],[16,15],[11,18],[9,18],[0,6],[0,3]],dots:[[3,0,4],[2,1,6],[9,1,2],[1,2,11],[0,3,13],[0,4,14],[0,5,14],[0,6,16],[1,7,16],[2,8,2],[6,8,11],[7,9,9],[7,10,8],[7,11,7],[8,12,7],[7,13,8],[7,14,7],[16,14,1],[8,15,5],[15,15,2],[8,16,5],[9,17,3],[9,18,3]]},{name:"Europe",origin:[39,2],area:[[8,0],[10,0],[20,2],[19,11],[18,13],[14,16],[3,16],[0,7]],dots:[[8,0,3],[9,1,1],[20,2,1],[19,3,1],[12,4,1],[19,4,1],[9,5,6],[9,6,7],[17,6,3],[0,7,1],[8,7,12],[7,8,3],[11,8,9],[7,9,3],[11,9,9],[4,10,1],[7,10,1],[9,10,1],[11,10,9],[3,11,2],[7,11,13],[4,12,1],[6,12,13],[4,13,15],[5,14,3],[9,14,4],[15,14,2],[3,15,3],[8,15,1],[10,15,5],[6,15,2],[3,16,2],[10,16,5]]},{name:"South America",origin:[22,26],area:[[2,0],[5,0],[11,4],[11,8],[3,18],[2,17],[0,4],[0,3]],dots:[[2,0,4],[1,1,7],[1,2,7],[0,3,10],[0,4,12],[1,5,11],[2,6,9],[3,7,8],[3,8,8],[3,9,6],[3,10,6],[3,11,5],[3,12,3],[2,13,3],[2,14,3],[2,15,2],[2,16,2],[2,17,2],[3,18,1]]},{name:"North America",origin:[0,0],area:[[21,0],[39,0],[39,6],[22,26],[16,23],[2,12],[0,7]],dots:[[22,0,6],[29,0,1],[31,0,1],[33,0,5],[20,1,1],[22,1,1],[24,1,2],[27,1,13],[17,2,1],[20,2,5],[26,2,13],[13,3,1],[19,3,1],[21,3,3],[26,3,14],[14,4,1],[16,4,4],[21,4,3],[29,4,11],[12,5,3],[16,5,1],[18,5,1],[20,5,3],[24,5,1],[30,5,8],[14,6,3],[19,6,1],[22,6,4],[31,6,8],[0,7,15],[16,7,1],[18,7,4],[24,7,2],[30,7,7],[2,8,20],[24,8,3],[29,8,5],[2,9,20],[24,9,2],[30,9,3],[1,10,18],[23,10,2],[31,10,1],[2,11,2],[8,11,11],[23,11,2],[26,11,1],[2,12,1],[8,12,13],[24,12,3],[10,13,12],[23,13,5],[11,14,17],[11,15,9],[21,15,6],[28,15,2],[11,16,11],[23,16,4],[11,17,14],[12,18,11],[12,19,12],[13,20,9],[15,21,3],[22,21,1],[16,22,2],[16,23,2],[20,23,1],[23,23,1],[18,24,3],[21,25,1],[22,26,1]]}],j=10,x=function(e,t){return[Math.max(e[0],t[0]),Math.max(e[1],t[1])]},P=-50*Math.PI/180,C=function(e){var t=e[0]/355*360/(2*Math.PI);return{mapRadius:t,mapOffsetY:Math.round(t/2*Math.log((1+Math.sin(P))/(1-Math.sin(P))))}},E=function(){var e={},t=[0,0],n=[0,0];return w.forEach((function(t){e[t.name]=function(e){var t=e.area,n=e.dots,o=e.origin,r=[].concat(o),a=n.map((function(e){for(var t=e[2],n=[],a=0;a<t;a+=1)n.push("h0");var i=n.join(" m10,0 "),c=j*(o[0]+e[0]+1),l=j*(o[1]+e[1]+1);return r=x(r,[o[0]+e[0]+e[2],o[1]+e[1]]),"M"+c+","+l+" "+i})).join(" "),i=t.map((function(e,t){return(0===t?"M":"L")+j*(e[0]+o[0]+1)+","+j*(e[1]+o[1]+1)})).join(" ")+" Z",c=[o[0]+(r[0]-o[0])/2,o[1]+(r[1]-o[1])/2];return{area:i,dots:a,origin:o,extent:r,mid:c}}(t),n=x(n,e[t.name].extent)})),{continents:e,extent:n,origin:t,x:t[0]*j,y:t[1]*j,width:(n[0]-t[0]+1)*j,height:(n[1]-t[1]+2)*j}},S=function(e,t){var n=t.continents,o=t.places,r=k({},e);return n&&n.forEach((function(t){r.continents[t.name]=k({},e.continents[t.name],{},t)})),r.places=(o||[]).map((function(t){var n=t.location,o=y(t,["location"]);return k({coords:function(e,t,n){var o=C(n),r=o.mapRadius,a=o.mapOffsetY,i=Math.round((e[1]- -171)*n[0]/355),c=e[0]*Math.PI/180;return[i,n[1]+a-Math.round(r/2*Math.log((1+Math.sin(c))/(1-Math.sin(c))))]}(n,e.origin,e.extent),key:n.join(",")},o)})),r},I=function(e,t,n){var o=e.name,r=e.onClick,a=e.onHover;return{role:"button","aria-label":o,tabIndex:"0",onClick:r?function(){return r(o)}:void 0,onMouseOver:function(){n||(t(o),a&&a(!0))},onMouseLeave:function(){n&&(t(void 0),a&&a(!1))},onFocus:function(){n||t(o)},onBlur:function(){n&&t(void 0)}}},A=function(e){var t,n;function o(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return O(M(t=e.call.apply(e,[this].concat(o))||this),"state",{}),O(M(t),"onMouseOver",(function(){t.setState({over:!0})})),O(M(t),"onMouseMove",(function(e){var n=t.state.width,o=t.containerRef.getBoundingClientRect(),r=o.width/n,a=[Math.round((e.clientX-o.left)/r/j),Math.round((e.clientY-o.top)/r/j)];t.setState({activeCoords:a})})),O(M(t),"onMouseLeave",(function(){t.setState({over:!1,activeCoords:void 0})})),t}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.getDerivedStateFromProps=function(e,t){return t.continents?S(t,e):S(E(),e)},o.prototype.render=function(){var e=this,t=this.props,n=t.color,o=t.fill,a=t.onSelectPlace,i=t.hoverColor,c=t.theme,l=y(t,["color","fill","onSelectPlace","hoverColor","theme"]);delete l.places,delete l.continents;var u,h=this.state,f=h.activeContinent,d=h.activeCoords,p=h.activePlace,v=h.continents,m=h.extent,M=(h.origin,h.over),O=h.places,w=h.x,x=h.y,P=h.width,E=h.height,S=Object.keys(v).map((function(t){var o=v[t],a=o.area,i=o.color,l=o.dots,u=o.onClick,h=o.onHover,d=f&&f===t,p={};return(u||h)&&(p=I(v[t],(function(t){return e.setState({activeContinent:t})}),d)),r.a.createElement("g",k({key:t},p),r.a.createElement("path",{stroke:"none",fill:"#fff",fillOpacity:"0.01",d:a}),r.a.createElement("path",{d:l,strokeLinecap:"round",strokeWidth:Object(b.b)(c.worldMap.continent[d?"active":"base"]),stroke:Object(s.c)(i||n||c.worldMap.color,c)}))})),A=O.map((function(t){var o=t.color,a=t.coords,i=t.key,l=t.name,u=t.onClick,h=t.onHover,f=y(t,["color","coords","key","name","onClick","onHover"]),d="M"+j*a[0]+", "+j*a[1]+" h0",v=p&&p===l,m={};return(u||h)&&(m=I(t,(function(t){return e.setState({activePlace:t})}),v)),r.a.createElement("path",k({key:i,strokeLinecap:"round",strokeWidth:Object(b.b)(c.worldMap.place[v?"active":"base"]),stroke:Object(s.c)(o||n||c.worldMap.color,c)},m,f,{d:d}))})),R={};if(a&&(R={onMouseOver:this.onMouseOver,onMouseMove:M?this.onMouseMove:void 0,onMouseLeave:this.onMouseLeave}),d){var L="M"+j*d[0]+", "+j*d[1]+" h0";u=r.a.createElement("g",{stroke:"none",fill:"none",fillRule:"evenodd",onClick:function(){return a(function(e,t,n){var o=C(n),r=o.mapRadius,a=o.mapOffsetY,i=(n[1]+a-e[1])/r;return[180/Math.PI*(2*Math.atan(Math.exp(i))-Math.PI/2),355*e[0]/n[0]-171]}(d,0,m))}},r.a.createElement("path",{strokeLinecap:"round",strokeWidth:Object(b.b)(c.worldMap.place.active),stroke:Object(s.c)(i||n||c.worldMap.hover.color,c),d:L}))}return r.a.createElement(g,k({viewBox:w+" "+x+" "+P+" "+E,preserveAspectRatio:"xMinYMin meet",fillProp:o,width:P,height:E},R,l),r.a.createElement("g",{ref:function(t){e.containerRef=t},stroke:"none",fill:"none",fillRule:"evenodd"},S),A,u)},o}(o.Component);A.defaultProps={},Object.setPrototypeOf(A.defaultProps,u.a);var R=Object(m.a)(l.withTheme)(A),L=function(){return r.a.createElement(R,{fill:"horizontal",color:"light-3",continents:[{name:"North America",color:"#0283df"}],places:[{name:"Connecticut",location:[41.6032,-73.0877],color:"accent-1"},{name:"New York",location:[40.7128,-74.006],color:"neutral-1"}]})},W=n(57);t.default=function(){var e=Object(o.useContext)(W.a).selectedWork;return r.a.createElement(a.a,{direction:"column",fill:!0},r.a.createElement(a.a,{direction:"column",align:"center",justify:"center",gap:"medium",fill:!0},r.a.createElement(L,null),r.a.createElement(i.a,{level:"3",style:{borderBottom:"3px solid"}},"Work History"),r.a.createElement(c.a,null,"I am currently a ",e.title," @",r.a.createElement(v,{target:"_blank",href:e.website},e.company)," ","in ",e.location,".")))}}}]);
//# sourceMappingURL=7.87c65e5a.chunk.js.map