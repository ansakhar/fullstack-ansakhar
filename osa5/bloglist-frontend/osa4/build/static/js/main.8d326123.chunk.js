(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(18),o=n.n(a),u=n(2),i=n.n(u),s=n(19),l=n(5),b=n(3),j=n(0),d=function(e){var t=e.blog,n=e.updateBlog,c=e.handleRemove,a=e.user,o=Object(r.useState)(!1),u=Object(b.a)(o,2),i=u[0],s=u[1],l=function(e){var t={title:e.title,url:e.url,likes:e.likes+1,author:e.author,user:e.user,id:e.id};n(t)},d={paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5};return!1===i?Object(j.jsxs)("div",{style:d,children:[t.title," ",t.author," ",Object(j.jsx)("button",{onClick:function(){return s(!0)},children:" view"})]}):t.user.name===a.name?Object(j.jsxs)("div",{style:d,children:[t.title," ",t.author," ",Object(j.jsx)("button",{onClick:function(){return s(!1)},children:" hide"})," ",Object(j.jsx)("br",{}),t.url," ",Object(j.jsx)("br",{}),t.likes," ",Object(j.jsx)("button",{onClick:function(){return l(t)},children:" like"})," ",Object(j.jsx)("br",{}),a.name," ",Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(){return c(t)},children:" remove"})]}):Object(j.jsxs)("div",{style:d,children:[t.title," ",t.author," ",Object(j.jsx)("button",{onClick:function(){return s(!1)},children:" hide"})," ",Object(j.jsx)("br",{}),t.url," ",Object(j.jsx)("br",{}),t.likes," ",Object(j.jsx)("button",{onClick:function(){return l(t)},children:" like"})," ",Object(j.jsx)("br",{}),a.name]})},f=n(6),h=n.n(f),p="/api/blogs",O=null,v={getAll:function(){return h.a.get(p).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:O}},e.next=3,h.a.post(p,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){O="bearer ".concat(e)},update:function(){var e=Object(l.a)(i.a.mark((function e(t,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put("".concat(p,"/").concat(t),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:O}},e.next=3,h.a.delete("".concat(p,"/").concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(e){var t=e.message;return null===t?null:t.includes("error")?Object(j.jsx)("div",{className:"error",children:t}):Object(j.jsx)("div",{className:"noterror",children:t})},g=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,r=e.handlePasswordChange,c=e.username,a=e.password;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Login"}),Object(j.jsxs)("form",{onSubmit:t,children:[Object(j.jsxs)("div",{children:["username",Object(j.jsx)("input",{value:c,onChange:n})]}),Object(j.jsxs)("div",{children:["password",Object(j.jsx)("input",{type:"password",value:a,onChange:r})]}),Object(j.jsx)("button",{type:"submit",children:"login"})]})]})},m=function(e){var t=e.createBlog,n=Object(r.useState)(""),c=Object(b.a)(n,2),a=c[0],o=c[1],u=Object(r.useState)(""),i=Object(b.a)(u,2),s=i[0],l=i[1],d=Object(r.useState)(""),f=Object(b.a)(d,2),h=f[0],p=f[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"create new"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:a,author:s,url:h}),o(""),l(""),p("")},children:[Object(j.jsx)("div",{children:Object(j.jsx)("input",{value:a,onChange:function(e){o(e.target.value)}})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{value:s,onChange:function(e){l(e.target.value)}})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{value:h,onChange:function(e){p(e.target.value)}})}),Object(j.jsx)("button",{type:"submit",children:"create"})]})]})},w=c.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),c=Object(b.a)(n,2),a=c[0],o=c[1],u={display:a?"none":""},i={display:a?"":"none"},s=function(){o(!a)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:s}})),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:u,children:Object(j.jsx)("button",{onClick:s,children:e.buttonLabel})}),Object(j.jsxs)("div",{style:i,children:[e.children,Object(j.jsx)("button",{onClick:s,children:e.buttonLabel2})]})]})})),k={login:function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),o=Object(b.a)(a,2),u=o[0],f=o[1],h=Object(r.useState)(""),p=Object(b.a)(h,2),O=p[0],y=p[1],S=Object(r.useState)(null),C=Object(b.a)(S,2),T=C[0],B=C[1],L=Object(r.useState)(null),I=Object(b.a)(L,2),N=I[0],R=I[1],U=Object(r.useRef)();Object(r.useEffect)((function(){v.getAll().then((function(e){return c(e)}))}),[]),Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedNoteappUser");if(e){var t=JSON.parse(e);R(t),v.setToken(t.token)}}),[]);var A=function(e){U.current.toggleVisibility(),v.create(e).then((function(t){B("a new blog ".concat(e.title," by ").concat(e.author," was added")),setTimeout((function(){B(null)}),5e3),c(n.concat(t))})).catch((function(e){B("error: wrong format"),setTimeout((function(){B(null)}),5e3)}))},J=function(){var e=Object(l.a)(i.a.mark((function e(t){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.update(t.id,t);case 2:r=n.findIndex((function(e){return e.id===t.id})),(a=Object(s.a)(n))[r]=t,c(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,k.login({username:u,password:O});case 4:n=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(n)),v.setToken(n.token),f(""),y(""),R(n),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),B("error: wrong username or password"),setTimeout((function(){B(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Remove blog ".concat(t.title," by ").concat(t.author))){e.next=14;break}return e.prev=1,e.next=4,v.remove(t.id);case 4:B("".concat(t.title," was removed")),setTimeout((function(){B(null)}),5e3),c(n.filter((function(e){return e.id!==t.id}))),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),B("Information of ".concat(t.title," has already been removed from server")),setTimeout((function(){B(null)}),5e3),c(n.filter((function(e){return e.id!==t.id})));case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return null===N?Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"log in to application"}),Object(j.jsx)(x,{message:T}),Object(j.jsx)(w,{buttonLabel:"log in",buttonLabel2:"cancel",children:Object(j.jsx)(g,{username:u,password:O,handleUsernameChange:function(e){var t=e.target;return f(t.value)},handlePasswordChange:function(e){var t=e.target;return y(t.value)},handleSubmit:E})})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"blogs"}),Object(j.jsx)(x,{message:T}),Object(j.jsxs)("p",{children:[N.name," logged in ",Object(j.jsx)("button",{onClick:function(){console.log("logout"),window.localStorage.removeItem("loggedBlogappUser"),R(null)},children:" logout"})," "]}),Object(j.jsx)(w,{buttonLabel:"create new blog",buttonLabel2:"cancel",ref:U,children:Object(j.jsx)(m,{createBlog:A})}),n.sort((function(e,t){return t.likes-e.likes})).map((function(e){return Object(j.jsx)(d,{blog:e,updateBlog:J,handleRemove:z,user:N},e.id)}))]})};n(44);o.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.8d326123.chunk.js.map