(this["webpackJsonpmc-status"]=this["webpackJsonpmc-status"]||[]).push([[0],{156:function(e,t,a){e.exports=a(300)},228:function(e,t,a){},300:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(19),c=a.n(l),s=a(124),o=a(125),u=a(149),i=a(153),m=a(126);function d(){return n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h2",null,"Loading"),n.a.createElement(m.a,{size:"large"}))}var E=a(309);function f(e){return n.a.createElement(E.a,{status:"error",title:"Failed to fetch server details",subTitle:e.message})}var h=a(302),p=a(303),v=a(301),y=a(307),g=a(308),b="".concat("/mc-status","/grassblock.jpg"),j=function(e){return n.a.createElement(g.a,{src:e.src||b,size:128,shape:"square"})},S=a(306),x=a(312),O=a(313),L=function(e){return e.status?n.a.createElement(S.a.Title,{level:3},n.a.createElement(x.a,{style:{color:"green"}})," Online!"):n.a.createElement(S.a.Title,{level:3},n.a.createElement(O.a,{style:{color:"darkred"}})," Offline")},k=a(314),w=function(e){if(!e.data)return null;var t=e.data,a=t.now,r=t.max;return n.a.createElement(S.a.Text,{strong:!0},n.a.createElement(k.a,null)," ",a," / ",r," player",1===a?"":"s"," online")},q=a(304),A=a(150),I=function(e){var t=Object(r.useState)(""),a=Object(A.a)(t,2),l=a[0],c=a[1];return Object(r.useEffect)((function(){var t=e.name;t&&fetch("https://api.minetools.eu/uuid/".concat(t)).then((function(e){return e.json()})).then((function(e){console.log({response:e}),c(e.id)})).catch((function(e){console.error(e)}))}),[e]),n.a.createElement(q.b.Item.Meta,{avatar:n.a.createElement(g.a,{shape:"square",size:"large",src:"https://crafatar.com/renders/head/".concat(l,"?overlay")}),title:n.a.createElement("a",{href:"https://namemc.com/profile/".concat(e.name),target:"_blank",rel:"noopener noreferrer"},e.name)})},N=function(e){if(!e.data||!e.data.list||0===e.data.list.length)return null;var t=e.data.list;return n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{orientation:"left"},"Player List"),n.a.createElement(q.b,{grid:{gutter:16,xs:1,sm:2,md:3,lg:4,xl:4,xxl:5},dataSource:t,size:"large",renderItem:function(e){return n.a.createElement(q.b.Item,null,n.a.createElement(I,{name:e}))}}))},T=function(e){var t=e.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{gutter:[16,16]},n.a.createElement(p.a,{flex:"128px"},n.a.createElement(j,{src:t.favicon})),n.a.createElement(p.a,{style:{textAlign:"initial"}},n.a.createElement(L,{status:t.online}),n.a.createElement(w,{data:t.players}))),n.a.createElement(h.a,{gutter:[16,16]},n.a.createElement(p.a,{span:24},n.a.createElement(N,{data:t.players}))),n.a.createElement(h.a,{gutter:[16,16]},n.a.createElement(p.a,{span:24},n.a.createElement(v.a,null),n.a.createElement(y.a,{ghost:!0,style:{textAlign:"initial"}},n.a.createElement(y.a.Panel,{header:"Raw Data",key:"1"},n.a.createElement("pre",null,JSON.stringify(t,null,2)))))))},z=function e(t,a){var r=Object.assign({},t);return Object.keys(a).forEach((function(t){var n,l=r[t],c=a[t];!(n=c)||"object"!==typeof n||Array.isArray(n)?l||(r[t]=c):r[t]=e(l,c)})),r},F=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).state={statusLoaded:!1,queryLoaded:!1},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://mcapi.us/server/status?ip=".concat(this.props.address)).then((function(e){return e.json()})).then((function(t){var a="success"===(null===t||void 0===t?void 0:t.status)?t:{},r=z(e.state.data,a);e.setState({data:r,statusLoaded:!0})})).catch((function(t){e.setState({statusError:t,statusLoaded:!0}),console.error(t)})),fetch("https://mcapi.us/server/query?ip=".concat(this.props.address)).then((function(e){return e.json()})).then((function(t){var a="success"===(null===t||void 0===t?void 0:t.status)?t:{},r=z(e.state.data,a);e.setState({data:r,queryLoaded:!0})})).catch((function(t){e.setState({queryError:t}),console.error(t)}))}},{key:"render",value:function(){var e=this.state,t=e.statusError,a=e.queryError,r=e.data,l=e.statusLoaded,c=e.queryLoaded;if(!l&&!c)return n.a.createElement(d,null);if(!r||0===Object.keys(r).length){var s=[t,a].filter((function(e){return e})).join("/");return n.a.createElement(f,{message:s})}return!r||r.error||"error"===r.status?n.a.createElement(f,{message:r?r.error:"No data found??"}):n.a.createElement(T,{data:r})}}]),a}(n.a.Component),C=a(310),M=a(305),P=a(311),J=a(107),D=(a(227),a(228),C.a.Header),R=C.a.Footer,B=C.a.Content;var G=function(){var e=new URLSearchParams(window.location.search),t=e.get("ip");return n.a.createElement(C.a,{className:"layout"},n.a.createElement(D,{className:"layout-header"},n.a.createElement(S.a.Title,null,"Minecraft Server Status")),n.a.createElement(B,{className:"layout-content"},n.a.createElement(M.a,{style:{textAlign:"center"},name:"basic",layout:"vertical",size:"large",initialValues:{ip:t},onFinish:function(t){t.ip&&(e.set("ip",t.ip),window.location.search=e.toString())}},n.a.createElement(M.a.Item,{label:"Server IP:",name:"ip"},n.a.createElement(P.a,null)),n.a.createElement(M.a.Item,null,n.a.createElement(J.a,{type:"primary",htmlType:"submit"},"Go!"))),n.a.createElement(v.a,null),t&&n.a.createElement(F,{key:t,address:t})),n.a.createElement(R,{className:"layout-footer"},"Created by ",n.a.createElement("a",{href:"https://github.com/Samuel-Lewis"},"Samuel Lewis")," |"," ","Avatars by ",n.a.createElement("a",{href:"https://crafatar.com"},"Crafatar")))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(G,null)),document.getElementById("root"))}},[[156,1,2]]]);
//# sourceMappingURL=main.97705ddd.chunk.js.map