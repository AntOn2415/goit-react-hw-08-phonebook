"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[468],{5468:function(n,e,r){r.r(e),r.d(e,{default:function(){return C}});var t,o,i,u,a,c,l,s=r(9439),f=r(2791),d=r(9434),p=r(8185),h=r(2015),v=r(6351),m=r(168),x=r(6444),g=x.ZP.div(t||(t=(0,m.Z)(["\n  padding: 30px 15px 0;\n  margin-bottom: 30px;\n"]))),b=x.ZP.form(o||(o=(0,m.Z)(["\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n"]))),w=x.ZP.label(i||(i=(0,m.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n  font-size: 12px;\n  color: #333;\n  transition: font-size 300ms, color 300ms ease;\n\n  :focus-within {\n    color: #000;\n    font-size: 14px;\n  }\n"]))),y=x.ZP.div(u||(u=(0,m.Z)(["\n  position: absolute;\n  top: 55%;\n  left: 10px;\n  transition: color 300ms ease;\n  color: #777;\n"]))),j=x.ZP.span(a||(a=(0,m.Z)(["\n  margin-left: 6px;\n  height: 16px;\n"]))),k=x.ZP.input(c||(c=(0,m.Z)(["\n  min-width: 180px;\n  padding: 8px;\n  padding-left: 26px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  color: #333;\n  outline: none;\n  transition: border-color 300ms ease;\n\n  :hover,\n  :focus {\n    border-color: #27ae60;\n  }\n\n  :not(:placeholder-shown):required:valid {\n    border-color: #27ae60;\n  }\n\n  :not(:placeholder-shown):required:invalid {\n    border-color: #f4442e;\n  }\n\n  ::placeholder {\n    color: #777;\n  }\n"]))),Z=x.ZP.button(l||(l=(0,m.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5px;\n  width: 100%;\n  padding: 10px;\n  background-color: #27ae60;\n  color: #fff;\n  outline: none;\n  border: none;\n  border-radius: 10px;\n  cursor: ",";\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);\n  transition: box-shadow 300ms, background-color 300ms ease;\n\n  :hover,\n  :focus {\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n    background-color: ",";\n  }\n"])),(function(n){return n.isLoading?"not-allowed":"pointer"}),(function(n){return n.isLoading?"#27ae60":"#2ecc71"})),P=r(3329);var A=function(){var n=(0,d.v9)(v.VO),e=(0,d.I0)(),r=(0,f.useState)(""),t=(0,s.Z)(r,2),o=t[0],i=t[1],u=(0,f.useState)(""),a=(0,s.Z)(u,2),c=a[0],l=a[1],m=function(n){var e=n.currentTarget,r=e.name,t=e.value;switch(r){case"email":i(t);break;case"password":l(t);break;default:return}};return(0,P.jsx)("section",{children:(0,P.jsx)(g,{children:(0,P.jsxs)(b,{onSubmit:function(n){n.preventDefault(),e(h.r.logIn({email:o,password:c})),i(""),l("")},children:[(0,P.jsxs)(w,{children:[(0,P.jsx)(y,{children:(0,P.jsx)(p.TKk,{})}),(0,P.jsx)(j,{children:"Email"}),(0,P.jsx)(k,{type:"email",value:o,name:"email",title:"Please enter a valid email address",required:!0,placeholder:"Enter email",onChange:m})]}),(0,P.jsxs)(w,{children:[(0,P.jsx)(y,{children:(0,P.jsx)(p.Y$A,{})}),(0,P.jsx)(j,{children:"Password"}),(0,P.jsx)(k,{type:"password",value:c,name:"password",pattern:"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d!@#$%^&*]{8,}$",title:"Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit.",minLength:8,required:!0,placeholder:"Enter password",onChange:m})]}),(0,P.jsx)(Z,{type:"submit",isLoading:n,disabled:n,children:"Login"})]})})})};function C(){return(0,P.jsx)("div",{children:(0,P.jsx)(A,{})})}},2015:function(n,e,r){r.d(e,{r:function(){return t}});var t=r(5822);r(3541)},6351:function(n,e,r){r.d(e,{AD:function(){return l},Bj:function(){return s},Fd:function(){return f},MA:function(){return d},VO:function(){return a},eH:function(){return c},el:function(){return i}});var t=r(3433),o=r(6916),i=function(n){return n.contacts.items},u=(0,o.P1)(i,(function(n){return(0,t.Z)(n).sort((function(n,e){return n.name.localeCompare(e.name)}))})),a=function(n){return n.contacts.isLoading},c=function(n){return n.contacts.error},l=function(n){return n.filter},s=(0,o.P1)([u,l],(function(n,e){var r=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))})),f=(0,o.P1)([s],(function(n){var e={};return n.forEach((function(n){var r=n.name.charAt(0).toUpperCase();e[r]||(e[r]=n.id)})),Object.values(e)})),d=function(n){return function(e){return e.modal.contactModals[n]||!1}}},6916:function(n,e,r){r.d(e,{P1:function(){return c}});var t="NOT_FOUND";var o=function(n,e){return n===e};function i(n,e){var r="object"===typeof e?e:{equalityCheck:e},i=r.equalityCheck,u=void 0===i?o:i,a=r.maxSize,c=void 0===a?1:a,l=r.resultEqualityCheck,s=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(u),f=1===c?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:t},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var r=[];function o(n){var o=r.findIndex((function(r){return e(n,r.key)}));if(o>-1){var i=r[o];return o>0&&(r.splice(o,1),r.unshift(i)),i.value}return t}return{get:o,put:function(e,i){o(e)===t&&(r.unshift({key:e,value:i}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(c,s);function d(){var e=f.get(arguments);if(e===t){if(e=n.apply(null,arguments),l){var r=f.getEntries(),o=r.find((function(n){return l(n.value,e)}));o&&(e=o.value)}f.put(arguments,e)}return e}return d.clearCache=function(){return f.clear()},d}function u(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function a(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var i,a=0,c={memoizeOptions:void 0},l=t.pop();if("object"===typeof l&&(c=l,l=t.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var s=c,f=s.memoizeOptions,d=void 0===f?r:f,p=Array.isArray(d)?d:[d],h=u(t),v=n.apply(void 0,[function(){return a++,l.apply(null,arguments)}].concat(p)),m=n((function(){for(var n=[],e=h.length,r=0;r<e;r++)n.push(h[r].apply(null,arguments));return i=v.apply(null,n)}));return Object.assign(m,{resultFunc:l,memoizedResultFunc:v,dependencies:h,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return o}var c=a(i)}}]);
//# sourceMappingURL=468.09ac2747.chunk.js.map