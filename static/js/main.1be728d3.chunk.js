(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c,s=n(7),a=n.n(s),o=n(4),r=n(8),i=n(1),l=(n(13),n(3)),u=n.n(l),b=n(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var h=function(){var t=Object(i.useState)(!1),e=Object(o.a)(t,2),n=e[0],s=e[1],a=Object(i.useState)(0),l=Object(o.a)(a,2),h=l[0],O=l[1],d=Object(i.useState)(!1),p=Object(o.a)(d,2),m=p[0],N=p[1],f=Object(i.useState)(""),v=Object(o.a)(f,2),g=v[0],x=v[1],E=function(t,e,n){var s=Object(r.a)(t).sort((function(t,n){switch(e){case c.ALPHABET:return t.localeCompare(n);case c.LENGTH:return t.length-n.length;default:return 0}}));return n?s.reverse():s}(j,h,m);return Object(b.jsx)("div",{className:"App",children:!n&&Object(b.jsx)("button",{type:"button",className:"button",onClick:function(){return s(!0)},children:"Start"})||Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button",{active:"alpha"===g}),onClick:function(){O(1),x("alpha")},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button",{active:"length"===g}),onClick:function(){O(2),x("length")},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button",{active:"reverse"===g}),onClick:function(){N(!m),x("reverse")},children:"Reverse"}),Object(b.jsx)("button",{type:"button",className:u()("button",{active:"reset"===g}),onClick:function(){O(0),N(!1),x("reset")},children:"Reset"})]}),Object(b.jsx)("ul",{className:"Goods",children:E.map((function(t){return Object(b.jsx)("li",{className:"Goods__item",children:t},t)}))})]})})};a.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1be728d3.chunk.js.map