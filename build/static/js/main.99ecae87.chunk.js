(this["webpackJsonpdemon-slayer"]=this["webpackJsonpdemon-slayer"]||[]).push([[0],{46:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t(0),i=t.n(r),o=t(19),u=t.n(o),c=t(26),d=t(9),s=t(12),h=t(20),f=t(1),g=t(8),l=t(7),j={Tanjirou:{x:10,y:10},Nezuko:{x:12,y:12},Inosuke:{x:20,y:15}};var p=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},n=[],t=0;t<15;t++)n.push(e(t,"0x00bcd4"));return n}((function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=[],a=0;a<20;a++)t.push({x:a,y:e,color:n,name:"none"});return t}));var y=Object(l.a)({chess:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case n.type:var t=n.type;return e[t]&&e[t]&&(e[t].x=n.x,e[t].y=n.y),e;default:return e}},map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"IsChess":var t=n.Xkey?n.Xkey:0,a=n.Ykey?n.Ykey:0;return e[a][t].name=n.name,e;default:return e}}}),b=new f.h;b.add("Tanjirou-head-default","./imgs/Tanjirou/head-default.jpg").add("Tanjirou-fight","./imgs/Tanjirou/fight.png").add("Nezuko-head-default","./imgs/Nezuko/head-default.jpg").add("Nezuko-fight","./imgs/Nezuko/fight.png").add("Inosuke-head-default","./imgs/Inosuke/head-default.jpg").add("Inosuke-fight","./imgs/Inosuke/fight.png").load();var v=f.q.WHITE,x=function(){var e=Object(l.b)(y),n=e.getState(),t=n.chess,r=n.map;return r.map((function(n,a){return n.map((function(n,r){return Object.keys(t).map((function(n){return t[n].x===r+1&&t[n].y===a+1?e.dispatch({type:"IsChess",Xkey:r,Ykey:a,name:n}):null}))}))})),Object(a.jsx)(g.Container,{children:r.map((function(e,n){return e.map((function(e,t){return"none"!==e.name?Object(a.jsx)(g.Sprite,{interactive:!0,buttonMode:!0,width:40,height:40,x:40*e.x,y:40*e.y,pointerover:function(e){return e.currentTarget.alpha=1},pointerout:function(e){return e.currentTarget.alpha=.5},pointertap:function(){return console.log("x: ".concat(t+1,", y: ").concat(n+1),r)},image:b.resources["".concat(e.name,"-head-default")].data},t):Object(a.jsx)(g.Sprite,{width:40,height:40,x:40*e.x,y:40*e.y,tint:"0x383838",texture:v},t)}))}))})},m=function(){return Object(a.jsx)(h.Stage,{width:800,height:600,options:{autoDensity:!0,antialias:!0,backgroundColor:75306},children:Object(a.jsx)(x,{})})};function k(){var e=Object(d.a)(["\n  position: relative;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  width:100%;\n  height:100vh;\n  .loading {\n    color: #fff;\n    font-size:24px;\n  }\n"]);return k=function(){return e},e}function O(){var e=Object(d.a)(["\n  body { background:#1d2430; }\n"]);return O=function(){return e},e}var I=Object(s.a)(O()),T=s.b.div(k()),w=function(){var e=Object(r.useState)(!1),n=Object(c.a)(e,2),t=n[0],i=n[1];return Object(r.useEffect)((function(){b.onComplete.add((function(){i(!0)}))})),Object(a.jsxs)(T,{children:[Object(a.jsx)(I,{}),t?Object(a.jsx)(m,{}):Object(a.jsx)("span",{className:"loading",children:"Loading.."})]})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),i(e),o(e)}))};u.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),C()}},[[46,1,2]]]);
//# sourceMappingURL=main.99ecae87.chunk.js.map