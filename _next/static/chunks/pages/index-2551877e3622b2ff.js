(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9474:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return I}});var o=n(9008),i=n(7294),r=n(7379),a=n(5893);var c=function(t){var e=t.operators,n=t.setModal,o=t.setCurOperator,r=(0,i.useState)(!1),c=r[0],f=r[1];return(0,a.jsx)(l,{children:(0,a.jsxs)(s,{children:[(0,a.jsx)(p,{className:c?"active":"",onClick:function(){return f((function(t){return!t}))},children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430:"}),(0,a.jsx)(d,{className:c?"active":"",children:0!==e.length?e.map((function(t){var i=t.id,r=t.name,l=t.logo;return(0,a.jsxs)(u,{onClick:function(){return t=i,o(e.find((function(e){return e.id===t}))),void n((function(t){return!t}));var t},children:[(0,a.jsx)("div",{children:r}),(0,a.jsx)("img",{className:c?"m__logo active":"m__logo",src:"/mobile-app-next-js/images/"+l,alt:"mobile operator"})]},i)})):(0,a.jsx)(u,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442"})})]})})},l=r.ZP.section.withConfig({displayName:"Operators__Section",componentId:"sc-cyw3s3-0"})(["margin-top:100px;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),s=r.ZP.div.withConfig({displayName:"Operators__Menu",componentId:"sc-cyw3s3-1"})(["width:250px;height:48px;position:relative;border-radius:4px;background-color:#fefbf3;user-select:none;"]),p=r.ZP.div.withConfig({displayName:"Operators__Label",componentId:"sc-cyw3s3-2"})(['height:100%;width:100%;position:relative;display:flex;justify-content:flex-start;align-items:center;text-indent:16px;color:#333;&:hover{cursor:pointer;}&:after{position:absolute;right:20px;top:calc(50% - 7px);display:block;content:"";height:14px;width:14px;border-bottom:4px solid #333;border-left:4px solid #333;border-radius:2px;transform:rotate(135deg);transition:all linear 0.2s;}&.active:after{transition:all easy-in 0.2s;top:calc(50% - 11px);transform:rotate(-45deg);}']),d=r.ZP.ul.withConfig({displayName:"Operators__List",componentId:"sc-cyw3s3-3"})(["padding:0;margin:8px 0px 0px;width:100%;height:100%;display:none;position:absolute;list-style:none;&.active{display:block;@keyframes flicker{0%{opacity:0;}10%{opacity:1;}15%{opacity:0.2;}30%{opacity:0.9;}50%{opacity:0.1;}70%{opacity:0.7;}80%{opacity:0.2;}90%{opacity:0.9;}95%{opacity:0;}100%{opacity:1;}}animation:flicker 1s 1;}"]),u=r.ZP.li.withConfig({displayName:"Operators__ListItem",componentId:"sc-cyw3s3-4"})(["padding:0;margin:0px;width:100%;height:100%;display:flex;justify-content:space-between;align-items:center;text-indent:16px;color:#555;list-style-type:none;border-top:2px solid #ddd;background-color:#fefbf3;transition:all linear 0.1s;overflow:hidden;&:hover{transition:all linear 0.1s;cursor:pointer;text-indent:24px;color:#222;}:first-of-type{border:0;border-radius:4px 4px 0px 0px;}:last-of-type{border-radius:0px 0px 4px 4px;}.m__logo{display:block;height:24px;width:24px;transition:all linear 0.1s;opacity:0;margin-right:-40px;&.active{@keyframes delayIcon{0%{opacity:0;}80%{opacity:0;margin-right:10px;}81%{opacity:0.2;margin-right:0px;}100%{opacity:1;margin-right:20px;}}animation:delayIcon 1.3s 1;opacity:1;margin-right:20px;}&:hover{transition:all linear 0.1s;width:28px;height:28px;}}"]),f=n(4942),x=n(6627),h=n.n(x);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){(0,f.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y=function(t){var e=t.curOperator,n=t.setModal,o=(0,i.useState)(0),r=o[0],c=o[1],l=(0,i.useState)(!1),s=l[0],p=l[1],d=(0,i.useState)({total:"",tel:""}),u=d[0],f=d[1],x=(0,i.useState)({flag:!1,total:"",tel:""}),g=x[0],y=x[1],k=function(t){f((function(e){return m(m({},e),t)}))};return(0,i.useEffect)((function(){return(null!==s&&void 0!==s?s:0!==r)?(alert("\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e!"),n((function(t){return!t}))):0!==r?alert("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!"):void 0}),[s,r,n]),(0,a.jsx)(w,{children:(0,a.jsxs)(j,{onSubmit:function(t){return function(t){t.preventDefault();var e,n=!0;""===u.tel&&(y((function(t){return m(m({},t),{},{flag:!0,tel:"\u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"})})),n=!1),""===u.total&&(y((function(t){return m(m({},t),{},{flag:!0,total:"\u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"})})),n=!1),n&&(null===function(t){var e=t.replace(/[^\d]/g,"");return e.length<10?null:e}(u.tel)&&(y((function(t){return m(m({},t),{},{flag:!0,tel:"\u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"})})),n=!1),null===(+(e=u.total)<100?null:e)&&(y((function(t){return m(m({},t),{},{flag:!0,total:"\u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u043e\u043f\u043b\u0430\u0442\u044b 100\u0440\u0443\u0431"})})),n=!1),n&&fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(u),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(){p((function(t){return!t})),c((function(t){return t+1}))})))}(t)},children:[(0,a.jsxs)(b,{children:[(0,a.jsx)("h1",{children:e.name}),(0,a.jsx)("img",{className:"m_logo",src:"/mobile-app-next-js/images/"+e.logo,alt:"operator logo"})]}),(0,a.jsxs)(v,{children:[(0,a.jsx)(_,{children:"\u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430:"}),(0,a.jsx)(h(),{mask:"+7(999)999-99-99",placeholder:"+7(999)999-99-99",value:u.tel,onChange:function(t){return e=t.target.value,void k({tel:e});var e},onFocus:function(){return y((function(t){return m(m({},t),{},{flag:!1,tel:""})}))},children:function(t){return(0,a.jsx)(O,m({},t))}}),(0,a.jsx)(C,{children:g.tel})]}),(0,a.jsxs)(v,{children:[(0,a.jsx)(_,{children:"\u0441\u0443\u043c\u043c\u0430 \u0437\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f:"}),(0,a.jsx)(O,{type:"text",placeholder:"0",value:u.total,onChange:function(t){return function(t){var e=t.replace(/[^\d]/g,"");return+e>1e3?k({total:"1000"}):+e<0?k({total:"0"}):void k({total:e})}(t.target.value)},onFocus:function(){return y((function(t){return m(m({},t),{},{flag:!1,total:""})}))}}),(0,a.jsx)(C,{children:g.total})]}),(0,a.jsxs)(N,{children:[(0,a.jsx)(P,{children:"\u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c"}),(0,a.jsx)(P,{onClick:function(){return n((function(t){return!t}))},children:"\u043e\u0442\u043c\u0435\u043d\u0430"})]})]})})},w=r.ZP.div.withConfig({displayName:"Modal__Container",componentId:"sc-xz4ww0-0"})(["position:fixed;width:100%;left:0;top:0;display:flex;justify-content:center;align-items:center;min-height:100vh;background-color:rgba(0,0,0,0.4);z-index:10000;.m_logo{display:block;width:46px;height:46px;}"]),b=r.ZP.div.withConfig({displayName:"Modal__TitleWrapper",componentId:"sc-xz4ww0-1"})(["margin:20px 0px;width:100%;display:flex;justify-content:space-around;align-items:center;"]),j=r.ZP.form.withConfig({displayName:"Modal__Form",componentId:"sc-xz4ww0-2"})(["padding:10px 6px 40px;min-width:320px;max-width:480px;width:100%;border-radius:4px;background-color:#fefbf3;box-shadow:0px 0px 12px 3px rgba(255,255,255,0.3);"]),v=r.ZP.div.withConfig({displayName:"Modal__WrapperInput",componentId:"sc-xz4ww0-3"})(["margin:10px 0px;"]),_=r.ZP.div.withConfig({displayName:"Modal__Label",componentId:"sc-xz4ww0-4"})(["padding:0px 0px 3px;width:100%;text-indent:6px;font-size:15px;color:#555;"]),O=r.ZP.input.withConfig({displayName:"Modal__Input",componentId:"sc-xz4ww0-5"})(["width:100%;height:40px;text-indent:6px;font-size:15px;border:2px solid #ccc;border-radius:4px;outline:none;&:focus{border:2px solid DodgerBlue;}"]),C=r.ZP.div.withConfig({displayName:"Modal__ErrorMessage",componentId:"sc-xz4ww0-6"})(["height:30px;width:100%;color:red;text-indent:6px;"]),N=r.ZP.div.withConfig({displayName:"Modal__WrapperBtns",componentId:"sc-xz4ww0-7"})(["width:100%;display:flex;justify-content:space-around;"]),P=r.ZP.button.withConfig({displayName:"Modal__Button",componentId:"sc-xz4ww0-8"})(["padding:8px 12px;font-size:16px;font-weight:600;color:DodgerBlue;border:1px solid DodgerBlue;border-radius:4px;background-color:#fefefe;cursor:pointer;&:hover{background-color:DodgerBlue;color:#fff;}"]),k=[{id:1,name:"\u041c\u0422\u0421",logo:"mts.png",payServiceURL:"https://jsonplaceholder.typicode.com/posts"},{id:2,name:"\u0411\u0438\u043b\u0430\u0438\u043d",logo:"beeline.png",payServiceURL:"https://jsonplaceholder.typicode.com/posts"},{id:3,name:"\u041c\u0435\u0433\u0430\u0444\u043e\u043d",logo:"megafon.png",payServiceURL:"https://jsonplaceholder.typicode.com/posts"}],I=function(){var t=(0,i.useState)(!1),e=t[0],n=t[1],r=(0,i.useState)({}),l=r[0],s=r[1];return(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.default,{children:[(0,a.jsx)("link",{rel:"shortcut icon",href:"/mobile-app-next-js/favicon.ico"}),(0,a.jsx)("title",{children:"Create Next App"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)(Z,{children:[(0,a.jsx)(S,{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,a.jsx)(c,{operators:k,setModal:n,setCurOperator:s}),e&&(0,a.jsx)(y,{curOperator:l,setModal:n})]})]})},Z=r.ZP.div.withConfig({displayName:"pages__Wrapper",componentId:"sc-17adhiu-0"})(["padding:20px;margin:0;width:100%;min-height:100vh;background-color:#191a19;"]),S=r.ZP.h1.withConfig({displayName:"pages__Title",componentId:"sc-17adhiu-1"})(["margin-top:0;font-family:serif;font-size:3rem;letter-spacing:0.4rem;text-align:center;color:#fefefe;"])},5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9474)}])}},function(t){t.O(0,[357,774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);