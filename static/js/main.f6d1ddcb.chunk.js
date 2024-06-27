(this["webpackJsonpmc-status"]=this["webpackJsonpmc-status"]||[]).push([[0],{59:function(e,t,r){},69:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),s=r(17),c=r.n(s),i=r(21),o=(r(59),r(85)),l=r(16),u=r(104),j=r(90),h=r(93),d=r(11),b=r(33),p=r(89),f=r(81),x=r(43),m=r(94),O=r(100),v=r(103),y=r(86),g=r(96),w=r(97),k=r(5),S=r(83),I=r(3),C=function(e){var t=e.title,r=e.children,a=Object(n.useState)(!1),s=Object(k.a)(a,2),c=s[0],i=s[1];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(m.a,{onClick:function(){i(!0)},variant:"subtle",children:t}),Object(I.jsx)(S.a,{title:t,opened:c,onClose:function(){i(!1)},size:"lg",children:r})]})},H=y.a.Item,L=function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("p",{children:"This site is an ad-free, lightweight way to check the status of your favourite Minecraft server."}),Object(I.jsx)("p",{children:"Currently, the site only supports Java servers."}),Object(I.jsxs)("p",{children:["This site is basically always under development, as I use it for a platform for learning web development. If there are any questions, suggestions, feedback or bugs, you can raise an"," ",Object(I.jsx)(d.a,{variant:"link",component:"a",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Samuel-Lewis/mc-status/issues",children:"issue on the GitHub repo"}),"."]}),Object(I.jsx)("p",{children:"Created using"}),Object(I.jsxs)(y.a,{children:[Object(I.jsxs)(H,{children:["API queries by"," ",Object(I.jsx)(d.a,{variant:"link",component:"a",href:"https://mcapi.us/",target:"_blank",rel:"noopener noreferrer",children:"MC API"})]}),Object(I.jsxs)(H,{children:["Player information by"," ",Object(I.jsx)(d.a,{variant:"link",component:"a",href:"https://api.minetools.eu/",target:"_blank",rel:"noopener noreferrer",children:"MineTools"})," ","and"," ",Object(I.jsx)(d.a,{variant:"link",component:"a",href:"https://namemc.com/",target:"_blank",rel:"noopener noreferrer",children:"NameMC"})]}),Object(I.jsxs)(H,{children:["Avatars by"," ",Object(I.jsx)(d.a,{variant:"link",component:"a",href:"https://crafatar.com",target:"_blank",rel:"noopener noreferrer",children:"Crafatar"})]}),Object(I.jsxs)(H,{children:[Object(I.jsx)(d.a,{variant:"link",component:"a",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer",children:"React"})," ","and"," ",Object(I.jsx)(d.a,{variant:"link",component:"a",href:"https://mantine.dev/",target:"_blank",rel:"noopener noreferrer",children:"Mantine"})]})]})]})},A=function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(g.a,{order:5,children:"Why is my server not showing up?"}),Object(I.jsx)("p",{children:"There are a few reasons your server may not be showing up"}),Object(I.jsxs)(y.a,{children:[Object(I.jsx)(H,{children:"The server maybe offline"}),Object(I.jsxs)(H,{children:["The server ",Object(I.jsx)(w.a,{children:"enable-status"})," may be set to ",Object(I.jsx)(w.a,{children:"false"})]}),Object(I.jsxs)(H,{children:["There is a bug in my code \ud83d\ude1e. You can raise an"," ",Object(I.jsx)(d.a,{variant:"link",component:"a",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Samuel-Lewis/mc-status/issues",children:"issue on the GitHub repo"}),"."]})]}),Object(I.jsx)(g.a,{order:5,children:"How come some servers show more details than others?"}),Object(I.jsxs)("p",{children:["Ultimately, servers can show as much or as little as they want. If you want to show more detailed information on your server, set"," ",Object(I.jsx)(w.a,{children:"enable-status"})," and ",Object(I.jsx)(w.a,{children:"enable-query"})," to"," ",Object(I.jsx)(w.a,{children:"true"})," in your ",Object(I.jsx)(w.a,{children:"server.properties"}),". Remember though, this is information shared to the public. Check that there is nothing unintentional being exposed or that you have measures to protect your server if needed."]}),Object(I.jsx)(g.a,{order:5,children:"Why do some player lists look weird, incomplete, or empty?"}),Object(I.jsx)("p",{children:"As above, servers can show what they like. Some servers take the opportunity to show ads, extra server information, a subset of players, or maybe, no players at all. As of Minecraft 1.18, players are able to opt-out of server queries, and hence will not be shown in the player list."}),Object(I.jsx)(g.a,{order:5,children:"How do I donate or contribute?"}),Object(I.jsxs)("p",{children:["This website costs me zero dollars per year to run as it relies on existing free services. While it's a kind notion, you hang on to it for a rainy day \ud83d\ude09. If you really want to contribute, the code is open-source on"," ",Object(I.jsx)(d.a,{variant:"link",component:"a",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Samuel-Lewis/mc-status",children:"GitHub"}),"."]})]})},M=function(){return Object(I.jsxs)(x.a,{style:{padding:"8px"},children:[Object(I.jsx)(C,{title:"About",children:Object(I.jsx)(L,{})}),Object(I.jsx)(C,{title:"FAQ",children:Object(I.jsx)(A,{})})]})},_=r(88),q=r(4),P=r(82),E=r(50),z=r(87),T=function(e){var t=e.servers,r=e.title,n=e.onDelete;if(0===t.length)return null;var a=function(e){var t=new URL(window.location.href);return t.searchParams.append("ip",e),t.href},s=t.map((function(e){var t=Object(I.jsx)(q.a,{style:{height:"28px"},children:n?Object(I.jsx)(P.a,{label:"Remove server",children:Object(I.jsx)(E.a,{onClick:function(){return n(e)}})}):null});return Object(I.jsxs)(z.a,{padding:"lg",component:"a",href:a(e.url),children:[Object(I.jsxs)(j.a,{position:"apart",children:[Object(I.jsx)(d.a,{weight:500,children:e.url}),t]}),Object(I.jsx)(d.a,{size:"sm",children:e.name})]},e.url)}));return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(g.a,{order:3,children:r}),s]})},F=r(12),R=r.n(F),W=r(25),D=r(41),G=r.n(D);var J=G.a.createInstance({name:"server-searches"}),N=function(){var e=Object(W.a)(R.a.mark((function e(t){var r,n,a,s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name,n=t.url,e.next=3,G.a.getItem(n);case 3:if(!(null===(a=e.sent)||(c=a,!c||"object"!==typeof c||"string"!==typeof c.name||"string"!==typeof c.url||"undefined"!==typeof c.lastAccess&&"number"!==typeof c.lastAccess||"undefined"!==typeof c.totalHits&&"number"!==typeof c.totalHits))){e.next=8;break}return e.next=7,J.setItem(n,{name:r,url:n,lastAccess:Date.now(),totalHits:1});case 7:case 11:return e.abrupt("return",e.sent);case 8:return s=Object(i.a)(Object(i.a)({},a),{},{totalHits:(a.totalHits||0)+1,lastAccess:Date.now(),name:r}),e.next=11,J.setItem(n,s);case 12:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(W.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.removeItem(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(W.a)(R.a.mark((function e(){var t,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.keys();case 2:return t=e.sent,e.next=5,Promise.all(t.map(function(){var e=Object(W.a)(R.a.mark((function e(t){var r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.getItem(t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:return r=e.sent,e.abrupt("return",r.sort((function(e,t){return e.totalHits===t.totalHits?0:(e.totalHits||0)<(t.totalHits||0)?1:-1})).slice(0,4));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=_.a.Col,Q=[{name:"Hypixel",url:"mc.hypixel.net"},{name:"2b2t",url:"2b2t.org"},{name:"Mineplex (US)",url:"us.mineplex.com"},{name:"MineTower",url:"minetower.serv.gs"}],Y=function(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),r=t[0],a=t[1],s=Object(n.useCallback)((function(e){U(e.url).then((function(){V().then((function(e){return a(e)}))}))}),[a]);return Object(n.useEffect)((function(){V().then((function(e){return a(e)}))}),[a]),Object(I.jsxs)(_.a,{grow:!0,justify:"center",children:[Object(I.jsx)(B,{sm:6,xs:12,children:Object(I.jsx)(T,{title:"Popular servers",servers:Q})}),Object(I.jsx)(B,{sm:6,xs:12,children:Object(I.jsx)(T,{title:"Recent servers",servers:r,onDelete:s})})]})},K=r(45),X=r(46),Z=r(52),$=r(48),ee=r(84),te=r(47),re=r.n(te),ne=function(e){var t=e.motd,r=Object(n.useState)(""),a=Object(k.a)(r,2),s=a[0],c=a[1];return Object(n.useEffect)((function(){re.a.toHtml(t,(function(e,t){return c(t)}))}),[t]),(null===t||void 0===t?void 0:t.trim())?Object(I.jsx)("div",{dangerouslySetInnerHTML:{__html:s}}):null},ae=r(23),se=function(e){return e.online?Object(I.jsxs)(g.a,{order:3,children:[Object(I.jsx)(ae.a,{style:{color:"green"}})," Online!"]}):Object(I.jsxs)(g.a,{order:3,children:[Object(I.jsx)(ae.b,{style:{color:"darkred"}})," Offline"]})},ce=function(e){var t=e.players;if(!t)return null;var r=t.now,n=t.max;return Object(I.jsxs)(d.a,{children:[Object(I.jsx)(ae.c,{})," ",r," / ",n," player",1===r?"":"s"," online"]})},ie=r(92),oe=r(91),le=r(99),ue=function(e){var t=e.player,r=t.name,a=t.id,s=Object(n.useState)(a),c=Object(k.a)(s,2),i=c[0],o=c[1];return Object(n.useEffect)((function(){r&&!i&&fetch("https://api.minetools.eu/uuid/".concat(r)).then((function(e){return e.json()})).then((function(e){o(e.id)})).catch((function(e){console.error(e)}))}),[r,i,a]),Object(I.jsxs)(j.a,{direction:"row",sx:{height:"60px"},children:[i?Object(I.jsx)(oe.a,{src:"https://crafatar.com/renders/head/".concat(i,"?overlay")}):Object(I.jsx)(le.a,{height:38,width:38}),Object(I.jsx)(d.a,{lineClamp:1,component:"a",target:"_blank",rel:"noopener noreferrer",href:"https://namemc.com/profile/".concat(r),children:r})]})},je=function(e){var t,r,n=e.players;if(!n)return null;var a=new Map;if(null===n||void 0===n||null===(t=n.list)||void 0===t||t.forEach((function(e){return a.set(e,void 0)})),null===n||void 0===n||null===(r=n.sample)||void 0===r||r.forEach((function(e){return a.set(e.name,e.id)})),0===a.size)return null;var s=Array.from(a).sort((function(e,t){return e[0].localeCompare(t[0])})).map((function(e){var t=Object(k.a)(e,2),r=t[0],n=t[1];return Object(I.jsx)(ue,{player:{name:r,id:n}},"".concat(r))}));return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(O.a,{my:"lg",label:"Player List",labelProps:{size:"md"}}),Object(I.jsx)(ie.a,{cols:3,breakpoints:[{maxWidth:"sm",cols:2},{maxWidth:"xs",cols:1}],children:s})]})},he="".concat("","/grassblock.jpg"),de=function(e){var t=e.favicon;return Object(I.jsx)(h.a,{src:null!==t&&void 0!==t?t:he,style:{margin:"auto"},alt:"",radius:"md",width:128})},be=r(101),pe=function(e){var t=e.server;if(!t||!(null===t||void 0===t?void 0:t.name))return null;var r=t.name.split(/[\s-,]+/).map((function(e){return Object(I.jsx)(be.a,{children:e},e)}));return Object(I.jsx)(j.a,{spacing:"xs",children:r})},fe=ee.a.Item,xe=_.a.Col,me=function(e){var t=e.data;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(_.a,{align:"center",children:[Object(I.jsx)(xe,{xs:12,sm:4,children:Object(I.jsx)(x.a,{children:Object(I.jsx)(de,{favicon:t.favicon})})}),Object(I.jsxs)(xe,{xs:12,sm:8,children:[Object(I.jsx)(se,{online:t.online}),Object(I.jsx)(ce,{players:t.players}),Object(I.jsx)(pe,{server:t.server}),Object(I.jsx)(ne,{motd:t.motd})]})]}),Object(I.jsx)(je,{players:t.players}),Object(I.jsx)(O.a,{my:"lg"}),Object(I.jsx)(ee.a,{offsetIcon:!1,children:Object(I.jsx)(fe,{label:"Raw data",children:Object(I.jsx)(w.a,{block:!0,children:JSON.stringify(t,null,2)})})})]})},Oe=function(e){var t=e.message;return Object(I.jsx)(x.a,{children:Object(I.jsxs)(j.a,{position:"center",direction:"column",grow:!0,children:[Object(I.jsx)(g.a,{order:2,children:"Failed to fetch server details"}),Object(I.jsx)(d.a,{children:"Please check the server address and try again."}),t&&Object(I.jsx)(w.a,{block:!0,children:t})]})})},ve=r(31);function ye(){return Object(I.jsxs)(j.a,{direction:"column",position:"center",children:[Object(I.jsx)(g.a,{order:2,children:"Loading"}),Object(I.jsx)(ve.a,{size:"lg"})]})}var ge=function e(t,r){var n=Object.assign({},t);return Object.keys(r).forEach((function(t){var a,s=n[t],c=r[t];!(a=c)||"object"!==typeof a||Array.isArray(a)?s||(n[t]=c):n[t]=e(s,c)})),n},we=function(e){Object(Z.a)(r,e);var t=Object($.a)(r);function r(e){var n;return Object(K.a)(this,r),(n=t.call(this,e)).state={statusLoaded:!1,queryLoaded:!1},n}return Object(X.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch("https://mcapi.us/server/status?ip=".concat(this.props.address)).then((function(e){return e.json()})).then((function(t){var r="success"===(null===t||void 0===t?void 0:t.status)?t:{},n=ge(e.state.data,r);e.setState({data:n,statusLoaded:!0})})).catch((function(t){e.setState({statusError:t,statusLoaded:!0}),console.error(t)})),fetch("https://mcapi.us/server/query?ip=".concat(this.props.address)).then((function(e){return e.json()})).then((function(t){var r="success"===(null===t||void 0===t?void 0:t.status)?t:{},n=ge(e.state.data,r);e.setState({data:n,queryLoaded:!0})})).catch((function(t){e.setState({queryError:t}),console.error(t)}))}},{key:"render",value:function(){var e,t=this.state,r=t.statusError,n=t.queryError,a=t.data,s=t.statusLoaded,c=t.queryLoaded;if(!s&&!c)return Object(I.jsx)(ye,{});if(!a||0===Object.keys(a).length){if(s&&c){var i=[r,n].filter((function(e){return e})).join("/");return Object(I.jsx)(Oe,{message:i})}return Object(I.jsx)(ye,{})}return(a.error||"error"===a.status)&&s&&c?Object(I.jsx)(Oe,{message:a?a.error:"No data found??"}):(N({name:(null===(e=a.server)||void 0===e?void 0:e.name)||"Unnamed server",url:this.props.address}),Object(I.jsx)(me,{data:a},JSON.stringify(a)))}}]),r}(a.a.Component),ke=r(42),Se=r(51),Ie=r(80),Ce=r(79),He=r(102),Le=function(e){var t=e.render,r=Object(Ce.a)(),n=Object(He.a)({key:"mantine-color-scheme",defaultValue:r}),a=Object(k.a)(n,2),s=a[0],c=a[1],i=function(e){c(e||("dark"===s?"light":"dark"))},o=Object(I.jsx)(P.a,{label:"Switch to ".concat("dark"===s?"light":"dark"," mode"),position:"left",children:Object(I.jsx)(Se.a,{onClick:function(){return i()},size:"lg",children:"dark"===s?Object(I.jsx)(ke.b,{}):Object(I.jsx)(ke.a,{})})});return Object(I.jsx)(Ie.a,{colorScheme:s,toggleColorScheme:i,children:Object(I.jsx)(l.a,{theme:{colorScheme:s},withGlobalStyles:!0,withNormalizeCSS:!0,children:t(s,o)})})};var Ae=function(){var e=new URLSearchParams(window.location.search),t=e.get("ip"),r=Object(v.a)({initialValues:{ip:null!==t&&void 0!==t?t:""}}),n=function(t){t.ip&&(e.set("ip",t.ip),window.location.search=e.toString())};return Object(I.jsx)(Le,{render:function(e,a){return Object(I.jsxs)(o.a,{padding:"md",styles:function(e){return{root:{backgroundImage:"url(".concat("","/assets/bright-squares.png)"),height:"100%",minHeight:"100vh"}}},header:Object(I.jsx)(l.a,{theme:{colorScheme:"dark"},children:Object(I.jsx)(u.a,{height:60,padding:"xs",children:Object(I.jsxs)(j.a,{position:"apart",children:[Object(I.jsxs)(j.a,{spacing:"xs",children:[Object(I.jsx)(h.a,{sx:{height:"38px",width:"38px"},src:"".concat("","/logo512.png")}),Object(I.jsx)(d.a,{component:"a",href:"",variant:"gradient",size:"xl",weight:700,gradient:{from:"indigo",to:"cyan",deg:45},children:"Minecraft Server Status"})]}),a]})})}),children:[Object(I.jsxs)(b.a,{padding:"xl",children:[Object(I.jsx)(j.a,{position:"center",direction:"column",grow:!0,children:Object(I.jsxs)("form",{onSubmit:r.onSubmit(n),children:[Object(I.jsx)(p.a,Object(i.a)({required:!0,size:"lg",label:"Server IP",placeholder:"mc.hypixel.net"},r.getInputProps("ip"))),Object(I.jsx)(f.a,{h:"xl"}),Object(I.jsx)(x.a,{children:Object(I.jsx)(m.a,{fullWidth:!0,type:"submit",style:{maxWidth:300},children:"Go!"})})]})}),Object(I.jsx)(M,{}),Object(I.jsx)(O.a,{my:"lg"}),!t&&Object(I.jsx)(Y,{}),t&&Object(I.jsx)(we,{address:t},t)]}),Object(I.jsx)(x.a,{style:{height:"60px"},children:Object(I.jsxs)(d.a,{children:["Created by"," ",Object(I.jsx)(d.a,{component:"a",variant:"link",target:"_blank",rel:"noopener noreferrer",href:"https://samuel-lewis.com",children:"Samuel Lewis"})]})})]})}})};c.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(Ae,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.f6d1ddcb.chunk.js.map