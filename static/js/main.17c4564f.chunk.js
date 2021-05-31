(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),i=(n(86),n(21)),s=n.n(i),u=n(42),l=n(15),d=n(157),j=n(47),b=n(155),f=n(158),O=n(163),h=(n(88),n(152)),p=n(146),x=n(161),v=n(159),m=n(153),g=n(150),k=n(154),y=n(5);function C(e){var t=e.todo,n=e.handleTodoEdit,c=e.handleDelete,r=t.createdAt,o=Object(a.useState)(!1),i=Object(l.a)(o,2),s=i[0],u=i[1],d=Object(a.useState)(t.name),j=Object(l.a)(d,2),b=j[0],f=j[1],O=Object(a.useState)(t.done),h=Object(l.a)(O,1)[0];return Object(y.jsxs)(p.a,{children:[Object(y.jsx)(x.a,{checked:t.done,value:t.uuid,color:"primary",onClick:function(){return function(e){n(e.uuid,b,!e.done)}(t)}}),s?Object(y.jsx)(v.a,{fullWidth:!0,variant:"outlined",autoFocus:!0,value:b,onChange:function(e){return f(e.target.value)},onKeyDown:function(e){return function(e,a){"Enter"===e.key&&(e.preventDefault(),""!==b.trim()&&(n(a,b,h),u(!1))),"Escape"===e.key&&(u(!1),f(t.name))}(e,t.uuid)},onBlur:function(){u(!1),f(t.name)}}):Object(y.jsx)(m.a,{style:{overflowWrap:"break-word"},primary:t.name,onClick:function(){return u(!0)}}),Object(y.jsx)(m.a,{style:{textAlign:"right"},secondary:r}),Object(y.jsx)(g.a,{onClick:function(){return c(t.uuid)},children:Object(y.jsx)(k.a,{})})]})}function S(e){var t=e.currentTodos,n=e.handleTodoEdit,a=e.handleDelete;e.handleDone;return Object(y.jsx)(h.a,{children:t.map((function(e){return Object(y.jsx)(C,{todo:e,handleDelete:a,handleTodoEdit:n},e.uuid)}))})}var D=function(e){var t=e.handleSubmit,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],o=c[1];return Object(y.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(r),o("")},children:Object(y.jsx)(v.a,{fullWidth:!0,variant:"outlined",margin:"normal",onChange:function(e){var t=e.target;o(t.value)},value:r})})},w=n(156),B=n(113);function P(e){var t=e.setCurrentPage,n=e.sortByDate,a=e.sortByDone,c=e.setSortByDone,r=e.setSortByDate;return Object(y.jsxs)(b.a,{container:!0,spacing:4,justify:"space-between",children:[Object(y.jsx)(b.a,{item:!0,onClick:function(){t(1)},children:Object(y.jsxs)(w.a,{children:[Object(y.jsx)(B.a,{onClick:function(){""!==a&&c("")},color:""===a?"primary":"default",variant:""===a?"contained":"outlined",children:"All"}),Object(y.jsx)(B.a,{onClick:function(){"done"!==a&&c("done")},color:"done"===a?"primary":"default",variant:"done"===a?"contained":"outlined",children:"Done"}),Object(y.jsx)(B.a,{onClick:function(){"undone"!==a&&c("undone")},color:"undone"===a?"primary":"default",variant:"undone"===a?"contained":"outlined",children:"Undone"})]})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsxs)(w.a,{children:[Object(y.jsx)(B.a,{onClick:function(){"desc"!==n&&r("desc")},color:"desc"===n?"primary":"default",variant:"desc"===n?"contained":"outlined",children:"Later"}),Object(y.jsx)(B.a,{onClick:function(){"asc"!==n&&r("asc")},color:"asc"===n?"primary":"default",variant:"asc"===n?"contained":"outlined",children:"Earlier"})]})})]})}var T=n(51),E=n.n(T),F=n(52),L=n.n(F);function W(e){for(var t=e.setCurrentPage,n=e.todosPerPage,a=e.totalTodos,c=e.currentPage,r=[],o=1;o<=Math.ceil(a/n);o++)r.push(o);return Object(y.jsxs)(b.a,{container:!0,spacing:4,justify:"center",style:{padding:10},children:[Object(y.jsxs)(B.a,{variant:"contained",color:"default",onClick:function(){return t(1)},children:[Object(y.jsx)(E.a,{}),Object(y.jsx)(E.a,{})]}),Object(y.jsx)(w.a,{children:r.map((function(e){return Object(y.jsx)(B.a,{color:e===c?"primary":"default",variant:e===c?"contained":"outlined",onClick:function(){return t(e)},children:e},e)}))}),Object(y.jsxs)(B.a,{variant:"contained",color:"default",onClick:function(){return t(r.length)},children:[Object(y.jsx)(L.a,{}),Object(y.jsx)(L.a,{})]})]})}var A=n(160),I=n(74),M=n.n(I);var J=function(){var e=M.a.create({baseURL:"https://todo-api-learning.herokuapp.com"}),t=Object(a.useState)([]),n=Object(l.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),h=i[0],p=i[1],x=Object(a.useState)("desc"),v=Object(l.a)(x,2),m=v[0],g=v[1],k=Object(a.useState)(1),C=Object(l.a)(k,2),w=C[0],B=C[1],T=Object(a.useState)(5),E=Object(l.a)(T,1)[0],F=Object(a.useState)(!1),L=Object(l.a)(F,2),I=L[0],J=L[1],U=Object(a.useState)(!1),H=Object(l.a)(U,2),K=H[0],R=H[1],q=Object(a.useState)(),z=Object(l.a)(q,2),G=z[0],N=z[1],Q=Object(a.useState)(""),V=Object(l.a)(Q,2),X=V[0],Y=V[1],Z=function(e){Y(e.response.data.message),N(e.response.status),R(!0)},$=Object(a.useCallback)(Object(u.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.get("/v1/tasks/2",{params:{filterBy:h,order:m}});case 3:n=t.sent,r(n.data),J(!0),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),Z(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),[h,m,e]);Object(a.useEffect)((function(){$()}),[h,m,$]);var _=function(){var t=Object(u.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,""===n.trim()){t.next=6;break}return t.next=4,e.post("/v1/task/2",{name:n,done:!1});case 4:return t.next=6,$();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),Z(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),ee=function(){var t=Object(u.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.delete("/v1/task/2/".concat(n));case 3:return t.next=5,$();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),Z(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),te=function(){var t=Object(u.a)(s.a.mark((function t(n,a,c){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.patch("/v1/task/2/".concat(n),{name:a,done:c});case 3:return t.next=5,$();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),Z(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n,a){return t.apply(this,arguments)}}(),ne=function(){R(!1)},ae=w*E,ce=ae-E,re=c.slice(ce,ae);return Object(y.jsxs)(d.a,{maxWidth:"sm",children:[Object(y.jsx)(j.a,{variant:"h2",align:"center",children:"ToDo"}),Object(y.jsx)(D,{handleSubmit:_}),Object(y.jsx)(P,{sortByDone:h,setSortByDone:p,sortByDate:m,setSortByDate:g,setCurrentPage:B}),c.length>5&&I&&Object(y.jsx)(W,{todosPerPage:E,totalTodos:c.length,currentPage:w,setCurrentPage:B}),I&&Object(y.jsx)(S,{align:"center",handleDelete:ee,currentTodos:re,handleTodoEdit:te}),!I&&Object(y.jsx)(b.a,{container:!0,alignItems:"center",direction:"column",children:Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(f.a,{})})}),Object(y.jsx)(O.a,{open:K,autoHideDuration:3e3,onClose:ne,children:Object(y.jsx)(A.a,{severity:"error",onClose:ne,children:"Status: ".concat(G,"\n                Message: ").concat(X)})})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,164)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(J,{})}),document.getElementById("root")),U()},86:function(e,t,n){},88:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.17c4564f.chunk.js.map