(this["webpackJsonpreact-antd-todo"]=this["webpackJsonpreact-antd-todo"]||[]).push([[0],{178:function(e,t,a){e.exports=a(437)},180:function(e,t,a){},202:function(e,t,a){},377:function(e,t,a){},413:function(e,t,a){},437:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=(a(180),a(11)),c=a(21),l=a(164),d=a(119),s=a(166),m=a.n(s),i=a(167),u=a.n(i),p=a(120),E="ADD_TODO_SUCCESS",f="TOGGLE_TODO_SUCCESS",g="REMOVE_TODO_SUCCESS",b=a(444),T={todos:[]},O=Object(c.c)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object.assign({},e,{todos:e.todos.concat(Object(p.a)({},t.payload,{},{id:Object(b.a)()}))});case f:return Object.assign({},e,{todos:e.todos.map((function(e){return e.id===t.payload.id?Object(p.a)({},e,{completed:!e.completed}):e}))});case g:return{todos:e.todos.filter((function(e){return e.id!==t.payload.id}))};default:return e}}}),h={key:"application",storage:m.a,stateReconciler:u.a},y=Object(d.a)(h,O),v=Object(c.d)(y,Object(c.a)(l.a)),j=Object(d.b)(v),C=a(113),S=a(63),k=a(168),x=a(31),R=(a(85),a(59)),F=a.n(R),N=(a(86),a(38)),_=a.n(N),w=(a(191),a(116)),D=a.n(w),I=(a(195),a(82)),L=a.n(I);a(87);var M=a(60),U=a.n(M),q=(a(198),a(170)),z=a.n(q),A=(a(200),a(81)),G=a.n(A),J=a(176),P=a(445),V=(a(202),function(e){var t=e.onFormSubmit,a=G.a.useForm(),n=Object(J.a)(a,1)[0];return o.a.createElement(G.a,{form:n,onFinish:function(){t({name:n.getFieldValue("name")}),n.resetFields()},layout:"horizontal",className:"todo-form"},o.a.createElement(F.a,{gutter:20},o.a.createElement(_.a,{xs:24,sm:24,md:17,lg:19,xl:20},o.a.createElement(G.a.Item,{name:"name",rules:[{required:!0,message:"This field is required"}]},o.a.createElement(z.a,{placeholder:"What needs to be done?"}))),o.a.createElement(_.a,{xs:24,sm:24,md:7,lg:5,xl:4},o.a.createElement(U.a,{type:"primary",htmlType:"submit",block:!0},o.a.createElement(P.a,null),"Add todo"))))}),B=(a(156),a(79)),W=a.n(B),X=(a(371),a(173)),H=a.n(X),K=(a(373),a(115)),Q=a.n(K),Y=(a(375),a(172)),Z=a.n(Y),$=a(446),ee=a(447),te=(a(377),function(e){var t=e.todo,a=e.onTodoRemoval,n=e.onTodoToggle;return o.a.createElement(W.a.Item,{actions:[o.a.createElement(Q.a,{title:t.completed?"Mark as uncompleted":"Mark as completed"},o.a.createElement(Z.a,{checkedChildren:o.a.createElement($.a,null),unCheckedChildren:o.a.createElement(ee.a,null),onChange:function(){return n(t)},defaultChecked:t.completed})),o.a.createElement(Q.a,{title:"Remove Todo"},o.a.createElement(U.a,{className:"remove-todo-button",type:"danger",onClick:function(){return a(t)}},"X"))],className:"list-item",key:t.id},o.a.createElement("div",{className:"todo-item"},o.a.createElement(H.a,{color:t.completed?"cyan":"red",className:"todo-tag"},t.name)))}),ae=function(e){var t=e.todos,a=e.onTodoRemoval,n=e.onTodoToggle;return o.a.createElement(W.a,{locale:{emptyText:"There's nothing to do :("},dataSource:t,renderItem:function(e){return o.a.createElement(te,{todo:e,onTodoToggle:n,onTodoRemoval:a})},pagination:{position:"bottom",pageSize:10}})},ne=(a(413),function(){var e=Object(S.c)((function(e){return e.todo.todos})),t=Object(S.b)();return o.a.createElement(F.a,{justify:"center",align:"middle",gutter:[0,20],className:"todos-container"},o.a.createElement(_.a,{xs:{span:23},sm:{span:23},md:{span:21},lg:{span:20},xl:{span:18}},o.a.createElement(D.a,{title:"Create a new todo"},o.a.createElement(V,{onFormSubmit:function(e){t(function(e){return{type:E,payload:e}}(e)),L.a.success("Todo added!")}}))),o.a.createElement(_.a,{xs:{span:23},sm:{span:23},md:{span:21},lg:{span:20},xl:{span:18}},o.a.createElement(D.a,{title:"Todo List"},o.a.createElement(ae,{todos:e,onTodoRemoval:function(e){t(function(e){return{type:g,payload:e}}(e)),L.a.warn("Todo removed!")},onTodoToggle:function(e){t(function(e){return{type:f,payload:e}}(e)),L.a.info("Todo state updated!")}}))))}),oe=function(){return o.a.createElement(x.c,null,o.a.createElement(x.a,{path:"/",exact:!0,component:ne}))},re=function(e){var t=e.store,a=e.storePersistor;return o.a.createElement(S.a,{store:t},o.a.createElement(k.a,{loading:o.a.createElement("div",null,"Loading..."),persistor:a},o.a.createElement(C.a,null,o.a.createElement(oe,null))))},ce=document.getElementById("root");Object(r.render)(o.a.createElement(re,{store:v,storePersistor:j}),ce)}},[[178,1,2]]]);
//# sourceMappingURL=main.be818739.chunk.js.map