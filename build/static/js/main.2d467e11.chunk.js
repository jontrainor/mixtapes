(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),i=n(4),l=n(1),s=n(3),u=n.n(s),m=n(2),d=n.n(m);n(13);var f=function(e){var t;return c.a.createElement("section",null,c.a.createElement("h2",null,e.playlist.name),c.a.createElement("div",null,c.a.createElement("iframe",{title:e.playlist.name,src:"https://open.spotify.com/embed/playlist/".concat((t=e.playlist,t.uri.split(":")[2])),width:"300",height:"380",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"})))},p=(n(14),"jon.trainor"),E="0b71959111884567b4530208b9f5add7",b="jontrainor-spotify-playlist";var O=function(){var e=Object(a.useState)(void 0),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)("NOT_ASKED"),s=Object(l.a)(o,2),m=s[0],O=s[1],S=Object(a.useState)("NOT_ASKED"),w=Object(l.a)(S,2),h=w[0],j=w[1],y=Object(a.useState)(0),v=Object(l.a)(y,2),R=v[0],N=v[1],k=Object(a.useState)([]),_=Object(l.a)(k,2),g=_[0],C=_[1];return Object(a.useEffect)(function(){var e=d.a.get(b),t=new u.a,n=new URLSearchParams(window.location.hash.slice(1)).get("access_token");n?(t.setAccessToken(n),r(e),d.a.set(b,n)):e&&(r(e),t.setAccessToken(e))},[window.location.hash]),Object(a.useEffect)(function(){var e,t=/^20\d\d\.\d\d\.\d\d$/;n&&"PENDING"!==h&&null!==R&&(j("PENDING"),O("PENDING"),(e=R,(new u.a).getUserPlaylists(p,{limit:50,offset:e})).then(function(e,n){if(n)j("ERROR"),O("ERROR");else{j("SUCCESS");var a=e.items.filter(function(e){return t.test(e.name)});C([].concat(Object(i.a)(g),Object(i.a)(a))),e.next?N(R+e.limit):(N(null),O("SUCCESS"))}}).catch(function(e){401===e.status&&(d.a.remove(b),r(void 0),O("NOT_ASKED"))}))},[p,n,R]),n?function(){switch(m){case"NOT_ASKED":return c.a.createElement("div",null,"loading");case"ERROR":return c.a.createElement("div",null,"error");case"SUCCESS":return c.a.createElement("main",null,c.a.createElement("h1",null,"Weekly Playlists"),g.map(function(e,t){return c.a.createElement(f,{playlist:e})}));default:return c.a.createElement("noscript",null)}}():c.a.createElement("button",{onClick:function(){var e=encodeURI("http://mixtapes.jontrainor.com");window.location="https://accounts.spotify.com/authorize?response_type=token&client_id=".concat(E,"&redirect_uri=").concat(e)}},"Log in to Spotify")};n(15);o.a.render(c.a.createElement(O,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.2d467e11.chunk.js.map