(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2038)}])},2038:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var r,o=t(7568),s=t(1799),a=t(9396),i=t(797),c=t(655),u=t(5893),l=t(7294),x=t(1163),h=t(9367),d="token",f=function(){return r||(window&&(window.sessionStorage.getItem(d)||window.sessionStorage.setItem(d,function(){var e=(new Date).getTime(),n=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var r=16*Math.random();return e>0?(r=(e+r)%16|0,e=Math.floor(e/16)):(r=(n+r)%16|0,n=Math.floor(n/16)),("x"==t?r:7&r|8).toString(16)}))}()),r=window.sessionStorage.getItem(d)),r)},p=function(){var e=(0,o.Z)((function(e,n,t){return(0,c.__generator)(this,(function(r){return"_redirect"==e.name?(n.push(e.payload.path),[2,!1]):"_console"==e.name?(console.log(e.payload.message),[2,!1]):"_alert"==e.name?(alert(e.payload.message),[2,!1]):(e.token=f(),e.router_data={pathname:(o=n).pathname,query:o.query},t?(t.emit("event",JSON.stringify(e)),[2,!0]):[2,!1]);var o}))}));return function(n,t,r){return e.apply(this,arguments)}}(),g=function(){var e=(0,o.Z)((function(e,n,t,r,o,i){var u;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:return t.processing||0==e.events.length?[2]:(r((0,a.Z)((0,s.Z)({},t),{processing:!0})),u=e.events.shift(),n((0,a.Z)((0,s.Z)({},e),{events:e.events})),[4,p(u,o,i)]);case 1:return c.sent()||r((0,a.Z)((0,s.Z)({},e),{processing:!1})),[2]}}))}));return function(n,t,r,o,s,a){return e.apply(this,arguments)}}(),v=function(){var e=(0,o.Z)((function(e,n,t,r,o,s,a,i){var u;return(0,c.__generator)(this,(function(c){return u=new URL(a),e.current=(0,h.ZP)(a,{path:u.pathname,transports:i,autoUnref:!1}),e.current.on("connect",(function(){g(n,t,r,o,s,e.current)})),e.current.on("event",(function(e){e=JSON.parse(e),function(e,n){for(var t in n){for(var r=e,o=t.split(".").slice(1);o.length>0;)r=r[o.shift()];for(var s in n[t])r[s]=n[t][s]}}(n,e.delta),o({processing:!1,state:n,events:e.events})})),[2]}))}));return function(n,t,r,o,s,a,i,c){return e.apply(this,arguments)}}(),m=(t(5202),t(949)),b=t(3236),w=t(9008),_=t.n(w);function y(){var e=(0,l.useState)({events:[{name:"state.hydrate"}]}),n=e[0],t=e[1],r=(0,l.useState)({state:null,events:[],processing:!1}),h=r[0],d=r[1],f=(0,x.useRouter)(),p=(0,l.useRef)(null),w=f.isReady,y=(0,m.If)();y.colorMode,y.toggleColorMode;return(0,l.useEffect)((function(){if(w){p.current||v(p,n,t,h,d,f,"ws://localhost:8000/event",["websocket","polling"]);var e=function(){var e=(0,o.Z)((function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return null!=h.state&&(t((0,a.Z)((0,s.Z)({},h.state),{events:(0,i.Z)(n.events).concat((0,i.Z)(h.events))})),d({state:null,events:[],processing:!1})),[4,g(n,t,h,d,f,p.current)];case 1:return e.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}})),(0,u.jsxs)(b.M5,{sx:{paddingTop:"10%",backgroundColor:"rgb(128,128,128)",height:"100vh"},children:[(0,u.jsxs)(b.Ug,{spacing:"1.5em",sx:{fontSize:"2em"},children:[(0,u.jsx)(b.X6,{sx:{fontSize:"2em",color:"black",width:"90%"},children:"Arthur_"}),"\r",(0,u.jsxs)(b.xu,{sx:{padding:"2%",borderRadius:10,width:"140%",boxShadow:"-2px 2px 10px 0px rgba(0, 0, 0, 0.1)",border:"2px solid rgba(200, 200, 200)",backgroundColor:"rgb(240, 240, 240)"},children:[(0,u.jsx)(b.X6,{children:"About"}),"\r",(0,u.jsx)(b.xv,{children:"\n-Hello, I'm Arthur.\n                    "}),"\r",(0,u.jsx)(b.xv,{children:" -My birthday is the 10th January."}),"\r",(0,u.jsxs)(b.Ug,{children:[(0,u.jsx)(b.xv,{children:"- It's: "}),"\r",(0,u.jsx)(b.xu,{dangerouslySetInnerHTML:{__html:'\n<iframe src="https://free.timeanddate.com/clock/i8yjdned/n48/tlbe/tct/pct/ftb/bo2/tt0/tw1/tm1/tb4" frameborder="0" width="123" height="39" allowtransparency="true"></iframe>\n                        '}})]}),"\r",(0,u.jsx)(b.xv,{children:"- I speak Dutch, English and German."})]}),"\r",(0,u.jsxs)(b.xu,{sx:{padding:"2%",borderRadius:10,width:"140%",boxShadow:"-2px 2px 10px 0px rgba(0, 0, 0, 0.1)",border:"2px solid rgba(200, 200, 200)",backgroundColor:"rgb(240, 240, 240)"},children:[(0,u.jsx)(b.X6,{children:"Projects"}),"\r",(0,u.jsx)(b.xv,{children:"- Tess (Discord bot)"})]})]}),"\r",(0,u.jsxs)(_(),{children:[(0,u.jsx)("title",{children:"home-arthur_"}),"\r",(0,u.jsx)("meta",{name:"description",content:"The website that's tell you a little more about arthur_"}),"\r",(0,u.jsx)("meta",{property:"og:image",content:"favicon.ico"})]})]})}}},function(e){e.O(0,[83,774,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);