(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(18),u=n.n(a),o=n(2),i=n.n(o),s=n(19),l=n(5),b=n(3),d=n(0),j=function(e){var t=e.blog,n=e.updateBlog,c=e.handleRemove,a=Object(r.useState)(!1),u=Object(b.a)(a,2),o=u[0],i=u[1],s={paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5};return!1===o?Object(d.jsxs)("div",{style:s,children:[t.title," ",t.author," ",Object(d.jsx)("button",{onClick:function(){return i(!0)},children:" view"})]}):Object(d.jsxs)("div",{style:s,children:[t.title," ",Object(d.jsx)("button",{onClick:function(){return i(!1)},children:" hide"})," ",Object(d.jsx)("br",{}),t.url," ",Object(d.jsx)("br",{}),t.likes," ",Object(d.jsx)("button",{onClick:function(){return function(e){var t={title:e.title,url:e.url,likes:e.likes+1,author:e.author,user:e.user,id:e.id};n(t)}(t)},children:" like"})," ",Object(d.jsx)("br",{}),t.author," ",Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(){return c(t)},children:" remove"})]})},f=n(6),h=n.n(f),p="/api/blogs",O=null,v={getAll:function(){return h.a.get(p).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:O}},e.next=3,h.a.post(p,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){O="bearer ".concat(e)},update:function(){var e=Object(l.a)(i.a.mark((function e(t,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put("".concat(p,"/").concat(t),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:O}},e.next=3,h.a.delete("".concat(p,"/").concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(e){var t=e.message;return null===t?null:t.includes("error")?Object(d.jsx)("div",{className:"error",children:t}):Object(d.jsx)("div",{className:"noterror",children:t})},g=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,r=e.handlePasswordChange,c=e.username,a=e.password;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Login"}),Object(d.jsxs)("form",{onSubmit:t,children:[Object(d.jsxs)("div",{children:["username",Object(d.jsx)("input",{value:c,onChange:n})]}),Object(d.jsxs)("div",{children:["password",Object(d.jsx)("input",{type:"password",value:a,onChange:r})]}),Object(d.jsx)("button",{type:"submit",children:"login"})]})]})},m=function(e){var t=e.createBlog,n=Object(r.useState)(""),c=Object(b.a)(n,2),a=c[0],u=c[1],o=Object(r.useState)(""),i=Object(b.a)(o,2),s=i[0],l=i[1],j=Object(r.useState)(""),f=Object(b.a)(j,2),h=f[0],p=f[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"create new"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:a,author:s,url:h}),u(""),l(""),p("")},children:[Object(d.jsx)("div",{children:Object(d.jsx)("input",{value:a,onChange:function(e){u(e.target.value)}})}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{value:s,onChange:function(e){l(e.target.value)}})}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{value:h,onChange:function(e){p(e.target.value)}})}),Object(d.jsx)("button",{type:"submit",children:"create"})]})]})},w=c.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),c=Object(b.a)(n,2),a=c[0],u=c[1],o={display:a?"none":""},i={display:a?"":"none"},s=function(){u(!a)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:s}})),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:o,children:Object(d.jsx)("button",{onClick:s,children:e.buttonLabel})}),Object(d.jsxs)("div",{style:i,children:[e.children,Object(d.jsx)("button",{onClick:s,children:e.buttonLabel2})]})]})})),k={login:function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),u=Object(b.a)(a,2),o=u[0],f=u[1],h=Object(r.useState)(""),p=Object(b.a)(h,2),O=p[0],y=p[1],S=Object(r.useState)(null),C=Object(b.a)(S,2),B=C[0],L=C[1],T=Object(r.useState)(null),I=Object(b.a)(T,2),R=I[0],A=I[1],U=Object(r.useRef)();Object(r.useEffect)((function(){v.getAll().then((function(e){return c(e)}))}),[]);var J=function(e){U.current.toggleVisibility(),v.create(e).then((function(t){L("a new blog ".concat(e.title," by ").concat(e.author," was added")),setTimeout((function(){L(null)}),5e3),c(n.concat(t))})).catch((function(e){L("error: wrong format"),setTimeout((function(){L(null)}),5e3)}))},N=function(){var e=Object(l.a)(i.a.mark((function e(t){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.update(t.id,t);case 2:r=n.findIndex((function(e){return e.id===t.id})),(a=Object(s.a)(n))[r]=t,c(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,k.login({username:o,password:O});case 4:n=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(n)),v.setToken(n.token),f(""),y(""),A(n),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),L("error: wrong username or password"),setTimeout((function(){L(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Remove blog ".concat(t.title," by ..."))){e.next=14;break}return e.prev=1,e.next=4,v.remove(t.id);case 4:L("".concat(t.title," was removed")),setTimeout((function(){L(null)}),5e3),c(n.filter((function(e){return e.id!==t.id}))),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),L("Information of ".concat(t.title," has already been removed from server")),setTimeout((function(){L(null)}),5e3),c(n.filter((function(e){return e.id!==t.id})));case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return null===R?Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"log in to application"}),Object(d.jsx)(x,{message:B}),Object(d.jsx)(w,{buttonLabel:"log in",buttonLabel2:"cancel",children:Object(d.jsx)(g,{username:o,password:O,handleUsernameChange:function(e){var t=e.target;return f(t.value)},handlePasswordChange:function(e){var t=e.target;return y(t.value)},handleSubmit:z})})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"blogs"}),Object(d.jsx)(x,{message:B}),Object(d.jsxs)("p",{children:[R.name," logged in ",Object(d.jsx)("button",{onClick:function(){console.log("logout"),window.localStorage.removeItem("loggedBlogappUser"),A(null)},children:" logout"})," "]}),Object(d.jsx)(w,{buttonLabel:"create new blog",buttonLabel2:"cancel",ref:U,children:Object(d.jsx)(m,{createBlog:J})}),n.sort((function(e,t){return t.likes-e.likes})).map((function(e){return Object(d.jsx)(j,{blog:e,updateBlog:N,handleRemove:D},e.id)}))]})};n(44);u.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.2c8bb8f7.chunk.js.map