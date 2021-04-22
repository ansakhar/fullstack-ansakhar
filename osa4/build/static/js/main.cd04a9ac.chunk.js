(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(16),s=n.n(a),o=n(4),i=n.n(o),u=n(5),l=n(2),b=n(0),j=function(e){var t=e.blog,n=Object(r.useState)(!1),c=Object(l.a)(n,2),a=c[0],s=c[1],o={paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5};return!1===a?Object(b.jsxs)("div",{style:o,children:[t.title," ",t.author," ",Object(b.jsx)("button",{onClick:s(!0),children:" view"})]}):Object(b.jsxs)("div",{style:o,children:[" ",Object(b.jsx)("br",{}),t.title," ",Object(b.jsx)("button",{onClick:s(!1),children:" hide"})," ",Object(b.jsx)("br",{}),t.url," ",Object(b.jsx)("br",{}),t.likes," ",Object(b.jsx)("button",{onClick:!0,children:" like"})," ",Object(b.jsx)("br",{}),t.author]})},d=n(6),h=n.n(d),O="/api/blogs",g=null,f={getAll:function(){return h.a.get(O).then((function(e){return e.data}))},create:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,h.a.post(O,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){g="bearer ".concat(e)}},p=function(e){var t=e.message;return null===t?null:t.includes("error")?Object(b.jsx)("div",{className:"error",children:t}):Object(b.jsx)("div",{className:"noterror",children:t})},x=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,r=e.handlePasswordChange,c=e.username,a=e.password;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Login"}),Object(b.jsxs)("form",{onSubmit:t,children:[Object(b.jsxs)("div",{children:["username",Object(b.jsx)("input",{value:c,onChange:n})]}),Object(b.jsxs)("div",{children:["password",Object(b.jsx)("input",{type:"password",value:a,onChange:r})]}),Object(b.jsx)("button",{type:"submit",children:"login"})]})]})},v=function(e){var t=e.createBlog,n=Object(r.useState)(""),c=Object(l.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(l.a)(o,2),u=i[0],j=i[1],d=Object(r.useState)(""),h=Object(l.a)(d,2),O=h[0],g=h[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"create new"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:a,author:u,url:O}),s(""),j(""),g("")},children:[Object(b.jsx)("div",{children:Object(b.jsx)("input",{value:a,onChange:function(e){s(e.target.value)}})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{value:u,onChange:function(e){j(e.target.value)}})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{value:O,onChange:function(e){g(e.target.value)}})}),Object(b.jsx)("button",{type:"submit",children:"create"})]})]})},m=c.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),c=Object(l.a)(n,2),a=c[0],s=c[1],o={display:a?"none":""},i={display:a?"":"none"},u=function(){s(!a)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:u}})),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{style:o,children:Object(b.jsx)("button",{onClick:u,children:e.buttonLabel})}),Object(b.jsxs)("div",{style:i,children:[e.children,Object(b.jsx)("button",{onClick:u,children:e.buttonLabel2})]})]})})),w={login:function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(l.a)(a,2),o=s[0],d=s[1],h=Object(r.useState)(""),O=Object(l.a)(h,2),g=O[0],k=O[1],y=Object(r.useState)(null),S=Object(l.a)(y,2),C=S[0],L=S[1],B=Object(r.useState)(null),T=Object(l.a)(B,2),I=T[0],U=T[1],A=Object(r.useRef)();Object(r.useEffect)((function(){f.getAll().then((function(e){return c(e)}))}),[]);var J=function(e){A.current.toggleVisibility(),f.create(e).then((function(t){L("a new blog ".concat(e.title," by ").concat(e.author," was added")),setTimeout((function(){L(null)}),5e3),c(n.concat(t))})).catch((function(e){L("error: wrong format"),setTimeout((function(){L(null)}),5e3)}))},N=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,w.login({username:o,password:g});case 4:n=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(n)),f.setToken(n.token),d(""),k(""),U(n),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),L("error: wrong username or password"),setTimeout((function(){L(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return null===I?Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"log in to application"}),Object(b.jsx)(p,{message:C}),Object(b.jsx)(m,{buttonLabel:"log in",buttonLabel2:"cancel",children:Object(b.jsx)(x,{username:o,password:g,handleUsernameChange:function(e){var t=e.target;return d(t.value)},handlePasswordChange:function(e){var t=e.target;return k(t.value)},handleSubmit:N})})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"blogs"}),Object(b.jsx)(p,{message:C}),Object(b.jsxs)("p",{children:[I.name," logged in ",Object(b.jsx)("button",{onClick:function(){console.log("logout"),window.localStorage.removeItem("loggedBlogappUser"),U(null)},children:" logout"})," "]}),Object(b.jsx)(m,{buttonLabel:"create new blog",buttonLabel2:"cancel",ref:A,children:Object(b.jsx)(v,{createBlog:J})}),n.map((function(e){return Object(b.jsx)(j,{blog:e},e.id)}))]})};n(41);s.a.render(Object(b.jsx)(k,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.cd04a9ac.chunk.js.map