(this["webpackJsonpmc-status"]=this["webpackJsonpmc-status"]||[]).push([[0],{143:function(e,t,a){e.exports=a(281)},148:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),s=(a(148),a(110)),i=a(111),o=a(137),u=a(140),m=a(283),E=a(284),d=a(285),p=a(288),f=a(282);function h(){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",null,"Loading"),r.a.createElement(f.a,{size:"large"}))}var g=a(290);function v(e){return r.a.createElement(g.a,{status:"error",title:"Failed to fetch server details",subTitle:e.message})}var y=a(289),b="".concat("/mc-status","/grassblock.jpg"),S=function(e){return r.a.createElement(y.a,{src:e.src||b,size:128,shape:"square"})},w=a(287),k=a(293),j=a(294),O=function(e){return e.status?r.a.createElement(w.a.Title,{level:3},r.a.createElement(k.a,{style:{color:"green"}})," Online!"):r.a.createElement(w.a.Title,{level:3},r.a.createElement(j.a,{style:{color:"darkred"}})," Offline")},x=a(295),N=function(e){if(!e.data)return null;var t=e.data,a=t.now,n=t.max;return r.a.createElement(w.a.Text,{strong:!0},r.a.createElement(x.a,null)," ",a," / ",n," player",1===a?"":"s"," online")},T=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={loading:!0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://mcapi.us/server/status?ip=".concat(this.props.address)).then((function(e){return e.json()})).then((function(t){e.state.data||e.setState({data:t,loading:!1})})).catch((function(t){e.setState({error:t,loading:!1}),console.error(t)})),fetch("https://mcapi.us/server/query?ip=".concat(this.props.address)).then((function(e){return e.json()})).then((function(t){t.online&&e.setState({data:t,loading:!1})})).catch((function(t){e.setState({error:t,loading:!1}),console.error(t)}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.data,n=e.error;return n?r.a.createElement(v,{message:n.message}):t?r.a.createElement(h,null):!a||a.error||"error"===a.status?r.a.createElement(v,{message:a?a.error:"No data found??"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(E.a,{span:6},r.a.createElement(S,{src:a.favicon})),r.a.createElement(E.a,{span:18,style:{textAlign:"initial"}},r.a.createElement(O,{status:a.online}),r.a.createElement(N,{data:a.players}))),r.a.createElement(m.a,null,r.a.createElement(E.a,{span:24},r.a.createElement(d.a,null),r.a.createElement(p.a,{ghost:!0,style:{textAlign:"initial"}},r.a.createElement(p.a.Panel,{header:"Raw Data",key:"1"},r.a.createElement("pre",null,JSON.stringify(a,null,2)))))))}}]),a}(r.a.Component),F=a(291),I=a(286),L=a(292),z=a(92),A=(a(205),F.a.Header),C=F.a.Footer,J=F.a.Content;var M=function(){var e=new URLSearchParams(window.location.search),t=e.get("ip");return r.a.createElement(F.a,{className:"layout"},r.a.createElement(A,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(w.a.Title,null,"Minecraft Server Status")),r.a.createElement(J,{className:"layout-content"},r.a.createElement(I.a,{name:"basic",layout:"vertical",size:"large",initialValues:{ip:t},onFinish:function(t){t.ip&&(e.set("ip",t.ip),window.location.search=e.toString())}},r.a.createElement(I.a.Item,{label:"Server IP",name:"ip"},r.a.createElement(L.a,null)),r.a.createElement(I.a.Item,null,r.a.createElement(z.a,{type:"primary",htmlType:"submit"},"Go!"))),r.a.createElement(d.a,null),t&&r.a.createElement(T,{key:t,address:t})),r.a.createElement(C,{className:"layout-footer"},"Created by Samuel Lewis |"," ",r.a.createElement("a",{href:"https://github.com/Samuel-Lewis"},"GitHub")))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.cb1673cd.chunk.js.map