(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(21)},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),i=n(4),l=n(1),s=n(3),u=n.n(s),m=n(2),d=n.n(m),p=(n(18),n(8)),f=n(9),E=n(11),h=n(10),b=n(12),O=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(E.a)(this,Object(h.a)(t).call(this,e))).state={error:!1},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){return this.state.error?(c.a.createElement("div",null,"there was an error"),this.props.children):this.props.children}}]),t}(c.a.Component);var j=function(e){var t;return c.a.createElement("section",null,c.a.createElement("h2",null,e.playlist.name),c.a.createElement("div",null,c.a.createElement("iframe",{title:e.playlist.name,src:"https://open.spotify.com/embed/playlist/".concat((t=e.playlist,t.uri.split(":")[2])),width:"300",height:"380",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"})))},w=(n(19),"jon.trainor"),S="0b71959111884567b4530208b9f5add7",v="jontrainor-spotify-playlist";var y=function(){var e=Object(a.useState)(void 0),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)("NOT_ASKED"),s=Object(l.a)(o,2),m=s[0],p=s[1],f=Object(a.useState)("NOT_ASKED"),E=Object(l.a)(f,2),h=E[0],b=E[1],y=Object(a.useState)(0),N=Object(l.a)(y,2),R=N[0],k=N[1],C=Object(a.useState)([]),D=Object(l.a)(C,2),_=D[0],g=D[1];return Object(a.useEffect)(function(){var e=d.a.get(v),t=new u.a,n=new URLSearchParams(window.location.hash.slice(1)).get("access_token");n?(t.setAccessToken(n),r(n),d.a.set(v,n)):e&&(r(e),t.setAccessToken(e))},[window.location.hash]),Object(a.useEffect)(function(){var e,t=/^20\d\d\.\d\d\.\d\d$/;n&&"PENDING"!==h&&null!==R&&(b("PENDING"),p("PENDING"),(e=R,(new u.a).getUserPlaylists(w,{limit:50,offset:e})).then(function(e,n){if(n)b("ERROR"),p("ERROR");else{b("SUCCESS");var a=e.items.filter(function(e){return t.test(e.name)});g([].concat(Object(i.a)(_),Object(i.a)(a))),e.next?k(R+e.limit):(k(null),p("SUCCESS"))}}).catch(function(e){401===e.status&&(d.a.remove(v),r(void 0),p("NOT_ASKED"))}))},[w,n,R]),c.a.createElement(O,null,n?function(){switch(m){case"NOT_ASKED":return c.a.createElement("div",null,"loading");case"ERROR":return c.a.createElement("div",null,"error");case"SUCCESS":return c.a.createElement("main",null,c.a.createElement("h1",null,"Weekly Playlists"),_.map(function(e,t){return c.a.createElement(j,{playlist:e})}));default:return c.a.createElement("noscript",null)}}():c.a.createElement("button",{className:"button",onClick:function(){var e=encodeURI("http://jontrainor.com/mixtapes");window.location="https://accounts.spotify.com/authorize?response_type=token&client_id=".concat(S,"&redirect_uri=").concat(e)}},"Log in to Spotify"))};n(20);o.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.d516aae6.chunk.js.map