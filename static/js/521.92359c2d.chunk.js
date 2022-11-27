"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[521],{1598:function(n,e,t){t.d(e,{__:function(){return f},c1:function(){return s},pE:function(){return l}});var r,u,i,o=t(168),a=t(6444),c=t(5705),l=(0,a.ZP)(c.l0)(r||(r=(0,o.Z)(["\n  padding: 16px;\n  font-weight: 500;\n  display: inline-flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n"]))),f=a.ZP.label(u||(u=(0,o.Z)(["\nwidth: 250px;\n  font-weight: 500;\n  display: inline-flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 8px;\n"]))),s=a.ZP.button(i||(i=(0,o.Z)(["\npadding: 8px;\nborder-radius: 8px;\ncursor: pointer;\n"])))},1521:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r=t(4270),u=t(5705),i=t(1598),o=t(9434),a=t(208),c=t(2286),l=t(27),f=t(184),s=function(){var n=(0,o.I0)(),e=(0,o.v9)(c.YJ);return(0,f.jsx)(u.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){var u=t.name,i=t.number;if(!e(u))return(0,l.V)("".concat(u," is already is contacts"));n((0,a.uK)({name:u,number:i})),(0,l.t)("".concat(u," added to phonebook")),r.resetForm()},children:function(n){var e=n.values,t=n.handleChange;return(0,f.jsxs)(i.pE,{children:[(0,f.jsxs)(i.__,{display:"block",children:["Name",(0,f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:e.name,onChange:t})]}),(0,f.jsxs)(i.__,{children:["Number",(0,f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:e.number,onChange:t})]}),(0,f.jsx)(i.c1,{type:"submit",children:"Add contact"})]})}})},p=function(){return(0,f.jsxs)("div",{children:[(0,f.jsx)(r.q,{children:(0,f.jsx)("title",{children:"Add contact"})}),(0,f.jsx)("h2",{children:"Add contact"}),(0,f.jsx)(s,{})]})}},2286:function(n,e,t){t.d(e,{zh:function(){return s},DI:function(){return p},YJ:function(){return d},xU:function(){return f}});var r="NOT_FOUND";var u=function(n,e){return n===e};function i(n,e){var t="object"===typeof e?e:{equalityCheck:e},i=t.equalityCheck,o=void 0===i?u:i,a=t.maxSize,c=void 0===a?1:a,l=t.resultEqualityCheck,f=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,u=0;u<r;u++)if(!n(e[u],t[u]))return!1;return!0}}(o),s=1===c?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:r},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(f):function(n,e){var t=[];function u(n){var u=t.findIndex((function(t){return e(n,t.key)}));if(u>-1){var i=t[u];return u>0&&(t.splice(u,1),t.unshift(i)),i.value}return r}return{get:u,put:function(e,i){u(e)===r&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,f);function p(){var e=s.get(arguments);if(e===r){if(e=n.apply(null,arguments),l){var t=s.getEntries(),u=t.find((function(n){return l(n.value,e)}));u&&(e=u.value)}s.put(arguments,e)}return e}return p.clearCache=function(){return s.clear()},p}function o(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function a(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var u=function(){for(var e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];var i,a=0,c={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(c=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var f=c,s=f.memoizeOptions,p=void 0===s?t:s,d=Array.isArray(p)?p:[p],h=o(r),m=n.apply(void 0,[function(){return a++,l.apply(null,arguments)}].concat(d)),v=n((function(){for(var n=[],e=h.length,t=0;t<e;t++)n.push(h[t].apply(null,arguments));return i=m.apply(null,n)}));return Object.assign(v,{resultFunc:l,memoizedResultFunc:m,dependencies:h,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),v};return u}var c=a(i),l=function(n){return n.contacts.items},f=function(n){return n.contacts.isLoading},s=function(n){return n.filter.error},p=c([l,function(n){return n.filter}],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),d=c([l],(function(n){return function(e){var t=e.toLowerCase();return!n.find((function(n){return n.name.toLowerCase()===t}))}}))}}]);
//# sourceMappingURL=521.92359c2d.chunk.js.map