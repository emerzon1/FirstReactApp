(this["webpackJsonpfirst-project"]=this["webpackJsonpfirst-project"]||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(6),r=n.n(o),u=n(3),i=n(4);var l=function(e){return a.a.createElement("div",{onClick:function(){e.onChecked(e.id)}},a.a.createElement("li",null,e.text))};var m=function(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),o=n[0],r=n[1];return a.a.createElement("div",{className:"form"},a.a.createElement("input",{onChange:function(e){var t=e.target.value;r(t)},type:"text",value:o}),a.a.createElement("button",{onClick:function(){e.addItem(o),r("")}},a.a.createElement("span",null,"Add")))};var d=function(){var e;0===document.cookie.length&&(document.cookie="u=[]"),e="u=[]"===document.cookie||"u="===document.cookie?[]:Object(i.a)(document.cookie.substring(2).split(","));var t=Object(c.useState)(e),n=Object(u.a)(t,2),o=n[0],r=n[1];function d(e){r((function(t){var n=t.filter((function(t,n){return n!==e}));return document.cookie="u="+n+"; expires=Fri, 5 Oct 2028 14:28:00 GMT",n})),document.cookie="u="+o+"; expires=Fri, 5 Oct 2028 14:28:00 GMT"}return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"heading"},a.a.createElement("h1",null,"To-Do List")),a.a.createElement(m,{addItem:function(e){r((function(t){return[].concat(Object(i.a)(t),[e])})),document.cookie="u="+o+"; expires=Fri, 5 Oct 2028 14:28:00 GMT"}}),a.a.createElement("div",null,a.a.createElement("ul",null,o.map((function(e,t){return document.cookie="u="+o+"; expires=Fri, 5 Oct 2028 14:28:00 GMT",a.a.createElement(l,{key:t,id:t,text:e,onChecked:d})})))))};r.a.render(a.a.createElement(d,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.f259d790.chunk.js.map