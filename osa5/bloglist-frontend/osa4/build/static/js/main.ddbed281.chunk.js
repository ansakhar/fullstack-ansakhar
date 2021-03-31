(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(16),c=n.n(a),o=n(3),u=n.n(o),s=n(5),i=n(4),l=n(0),j=function(e){var t=e.blog;return Object(l.jsxs)("div",{children:[t.title," ",t.author]})},b=n(6),d=n.n(b),p="/api/blogs",g=null,O={getAll:function(){return d.a.get(p).then((function(e){return e.data}))},create:function(){var e=Object(s.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,d.a.post(p,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){g="bearer ".concat(e)}},h=function(e){var t=e.message;return null===t?null:t.includes("error")?Object(l.jsx)("div",{className:"error",children:t}):Object(l.jsx)("div",{className:"noterror",children:t})},f={login:function(){var e=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(i.a)(c,2),b=o[0],d=o[1],p=Object(r.useState)(""),g=Object(i.a)(p,2),v=g[0],x=g[1],m=Object(r.useState)(""),w=Object(i.a)(m,2),y=w[0],S=w[1],k=Object(r.useState)(""),C=Object(i.a)(k,2),T=C[0],A=C[1],U=Object(r.useState)(""),B=Object(i.a)(U,2),I=B[0],J=B[1],N=Object(r.useState)(null),D=Object(i.a)(N,2),E=D[0],z=D[1],P=Object(r.useState)(null),q=Object(i.a)(P,2),F=q[0],G=q[1];Object(r.useEffect)((function(){O.getAll().then((function(e){return a(e)}))}),[]);var H=function(e){e.preventDefault();var t={title:b,author:v,url:y};O.create(t).then((function(e){z("a new blog ".concat(b," by ").concat(v," was added")),setTimeout((function(){z(null)}),5e3),a(n.concat(e)),d(""),x(""),S("")})).catch((function(e){z("error: something wrong"),setTimeout((function(){z(null)}),5e3)}))},K=function(e){console.log(e.target.value),d(e.target.value)},L=function(e){console.log(e.target.value),x(e.target.value)},M=function(e){console.log(e.target.value),S(e.target.value)},Q=function(){var e=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,f.login({username:T,password:I});case 4:n=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(n)),O.setToken(n.token),A(""),J(""),G(n),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),z("error: wrong username or password"),setTimeout((function(){z(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return null===F?Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"log in to application"}),Object(l.jsx)(h,{message:E}),Object(l.jsxs)("form",{onSubmit:Q,children:[Object(l.jsxs)("div",{children:["username",Object(l.jsx)("input",{type:"text",value:T,name:"Username",onChange:function(e){var t=e.target;return A(t.value)}})]}),Object(l.jsxs)("div",{children:["password",Object(l.jsx)("input",{type:"password",value:I,name:"Password",onChange:function(e){var t=e.target;return J(t.value)}})]}),Object(l.jsx)("button",{type:"submit",children:"login"})]})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"blogs"}),Object(l.jsx)(h,{message:E}),Object(l.jsxs)("p",{children:[F.name," logged in ",Object(l.jsx)("button",{onClick:function(){console.log("logout"),window.localStorage.removeItem("loggedBlogappUser"),G(null)},children:" logout"})," "]}),Object(l.jsxs)("form",{onSubmit:H,children:[Object(l.jsx)("h2",{children:"create new"}),Object(l.jsxs)("div",{children:["title:",Object(l.jsx)("input",{type:"text",value:b,name:"Title",onChange:K})]}),Object(l.jsxs)("div",{children:["author:",Object(l.jsx)("input",{type:"text",value:v,name:"Author",onChange:L})]}),Object(l.jsxs)("div",{children:["url:",Object(l.jsx)("input",{type:"text",value:y,name:"Url",onChange:M})]}),Object(l.jsx)("button",{type:"submit",children:"create"})]}),n.map((function(e){return Object(l.jsx)(j,{blog:e},e.id)}))]})};n(41);c.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.ddbed281.chunk.js.map