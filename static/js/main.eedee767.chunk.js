(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),a=n(5),r=n(8),i=n(1),u=(n(13),n(4)),l=n.n(u),b=n(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var N=function(){var t=Object(i.useState)(!1),e=Object(a.a)(t,2),n=e[0],s=e[1],o=Object(i.useState)(c.NONE),u=Object(a.a)(o,2),N=u[0],O=u[1],d=Object(i.useState)(!1),h=Object(a.a)(d,2),m=h[0],p=h[1],E=function(t,e,n){var s=Object(r.a)(t).sort((function(t,n){switch(e){case c.ALPHABET:return t.localeCompare(n);case c.LENGTH:return t.length-n.length;default:return 0}}));return n?s.reverse():s}(j,N,m);return Object(b.jsxs)("div",{className:"App",children:[!n&&Object(b.jsx)("button",{type:"button",className:"button",onClick:function(){return s(!0)},children:"Start"}),n&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button",{active:N===c.ALPHABET}),onClick:function(){O(c.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button",{active:N===c.LENGTH}),onClick:function(){O(c.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button",{active:m}),onClick:function(){p(!m)},children:"Reverse"}),Object(b.jsx)("button",{type:"button",className:"button",onClick:function(){O(c.NONE),p(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{className:"Goods",children:E.map((function(t){return Object(b.jsx)("li",{className:"Goods__item",children:t},t)}))})]})]})};o.a.render(Object(b.jsx)(N,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.eedee767.chunk.js.map