(this["webpackJsonptemplate-app"]=this["webpackJsonptemplate-app"]||[]).push([[0],{10:function(e,t,n){e.exports={container:"Layout_container__36Ern"}},12:function(e){e.exports=JSON.parse('[{"id":1,"eng":"between","rus":"\u043c\u0435\u0436\u0434\u0443","studied":false,"isRemembered":false},{"id":2,"eng":"high","rus":"\u0432\u044b\u0441\u043e\u043a\u0438\u0439","studied":false,"isRemembered":false},{"id":3,"eng":"really","rus":"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e","studied":false,"isRemembered":false},{"id":4,"eng":"something","rus":"\u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c","studied":false,"isRemembered":false},{"id":5,"eng":"most","rus":"\u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e","studied":false,"isRemembered":false},{"id":6,"eng":"another","rus":"\u0434\u0440\u0443\u0433\u043e\u0439","studied":false,"isRemembered":false},{"id":7,"eng":"much","rus":"\u043c\u043d\u043e\u0433\u043e","studied":false,"isRemembered":false},{"id":8,"eng":"family","rus":"\u0441\u0435\u043c\u044c\u044f","studied":false,"isRemembered":false},{"id":9,"eng":"own","rus":"\u043b\u0438\u0447\u043d\u044b\u0439","studied":false,"isRemembered":false},{"id":10,"eng":"out","rus":"\u0438\u0437/\u0432\u043d\u0435","studied":false,"isRemembered":false},{"id":11,"eng":"leave","rus":"\u043f\u043e\u043a\u0438\u0434\u0430\u0442\u044c","studied":false,"isRemembered":false}]')},2:function(e,t,n){e.exports={title:"CardsBlock_title__2qmzF",description:"CardsBlock_description__1UxPU",cardList:"CardsBlock_cardList__209CK",cardItem:"CardsBlock_cardItem__2LCus",text:"CardsBlock_text__1iTNf",eng:"CardsBlock_eng__wT1vV",rus:"CardsBlock_rus__mzWz-",isRemembered:"CardsBlock_isRemembered__3istL",controls:"CardsBlock_controls__6v1GG"}},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(7),d=n.n(r),i=(n(20),n(3)),a=n(8),c=n(9),o=n(14),u=n(13),l=n(1),m=n(10),b=n.n(m),h=function(e){var t=e.children;return Object(s.jsx)("div",{className:b.a.container,children:t})},f=n(4),j=n(25),C=n(5),g=n.n(C),R=n(2),O=n.n(R),_=function(e){var t,n=e.eng,r=e.rus,d=e.studied,i=e.isRemembered,a=e.onChangeStudied,c=e.onRemoveCard,o=e.onChangeRemembered;return Object(s.jsxs)("li",{className:O.a.cardItem,children:[Object(s.jsx)("p",{className:g()(O.a.text,(t={},Object(f.a)(t,O.a.rus,d),Object(f.a)(t,O.a.isRemembered,i),t)),onClick:a,children:d?r:n}),Object(s.jsxs)("div",{className:O.a.controls,children:[Object(s.jsx)("input",{type:"checkbox",onChange:o}),Object(s.jsx)(j.a,{onClick:c})]})]})},p=function(e){var t=e.words,n=e.onChangeStudied,r=e.onRemoveCard,d=e.onChangeRemembered;return Object(s.jsx)("ul",{className:O.a.cardList,children:t.map((function(e){return Object(l.createElement)(_,Object(i.a)(Object(i.a)({},e),{},{onChangeStudied:function(){return n(e.id)},onChangeRemembered:function(){return d(e.id)},onRemoveCard:function(){return r(e.id)},key:e.id}))}))})},x=function(e){var t=e.words,n=e.countWords,r=e.countStudied,d=e.onChangeStudied,i=e.onRemoveCard,a=e.onChangeRemembered;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{className:O.a.title,children:"\u041a\u043b\u0438\u043a\u0430\u0439 \u043f\u043e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430\u043c \u0438 \u0443\u0437\u043d\u0430\u0432\u0430\u0439 \u043d\u043e\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430"}),Object(s.jsx)("p",{className:O.a.description,children:"\u0412\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430\u043c\u0438 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f \u0441\u043b\u043e\u0432 \u0438 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0441\u043b\u043e\u0432\u0430\u0440\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0430\u0441\u0430"}),Object(s.jsx)(p,{words:t,onChangeStudied:d,onChangeRemembered:a,onRemoveCard:i}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["\u0412\u0441\u0435\u0433\u043e \u0441\u043b\u043e\u0432: ",n]}),Object(s.jsxs)("li",{children:["\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e \u0441\u043b\u043e\u0432: ",r]}),Object(s.jsxs)("li",{children:["\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u0443\u0447\u0438\u0442\u044c: ",n-r]})]})]})},v=n(12),w=(n(21),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),d=0;d<s;d++)r[d]=arguments[d];return(e=t.call.apply(t,[this].concat(r))).state={words:v},e.handleChangeStudied=function(t){e.setState((function(e){return{words:e.words.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{studied:!e.studied}):e}))}}))},e.handleChangeRemembered=function(t){e.setState((function(e){return{words:e.words.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{isRemembered:!e.isRemembered}):e}))}}))},e.handleRemoveCard=function(t){e.setState((function(e){return{words:e.words.filter((function(e){return e.id!==t}))}}))},e.countStudiedWords=function(){return e.state.words.reduce((function(e,t){return t.isRemembered?e+1:e}),0)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.words.length,t=this.countStudiedWords(),n=this.state.words;return Object(s.jsx)(h,{children:Object(s.jsx)(x,{words:n,countWords:e,countStudied:t,onChangeStudied:this.handleChangeStudied,onChangeRemembered:this.handleChangeRemembered,onRemoveCard:this.handleRemoveCard})})}}]),n}(l.Component));d.a.render(Object(s.jsx)(w,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.bce3dc93.chunk.js.map