import{r as c,j as e,L as l}from"./index-C-VN0zMP.js";import{M as m}from"./Modal-Cqj7PQI3.js";import{B as i}from"./Button-AJvA9kpw.js";import{c as o}from"./config-Bu_2PQwB.js";function x(){const[r,s]=c.useState(!1);function t(){let d=window.scrollY,n=document.getElementById("modal");document.body.classList.add("modal-open"),n.style.display="block",n.style.top=d+"px"}function a(){document.body.classList.remove("modal-open"),modal.style.display="none"}return e.jsx(e.Fragment,{children:e.jsxs("header",{className:"header",children:[e.jsxs("div",{className:"header__inner fullsize-container",children:[e.jsxs(l,{className:"header__logo",to:"/",onClick:()=>{s(!1),a()},children:[e.jsx("img",{src:o.logo,alt:"",className:"logo logo__image"}),e.jsx("p",{className:"header__title",children:o.name})]}),e.jsxs("nav",{className:"header__menu hidden-mobile",children:[e.jsx("ul",{className:"header__menu-list",children:e.jsx("li",{className:"header__menu-item",children:e.jsx(l,{className:"header__menu-link",to:"/dashboard",children:"Назад на главную"})})}),e.jsx("div",{className:"header__auth",children:e.jsx(l,{className:"header__auth-sign-up",to:"/sign-in",children:e.jsx("button",{className:"header__button button",children:"Пройти тест"})})})]}),e.jsx(i,{className:"header__burger-button button__burger-menu burger-button visible-mobile",onClick:()=>{s(!0),t()}})]}),e.jsxs(m,{className:"mobile-overlay visible-mobile",open:r,children:[e.jsxs("div",{className:"mobile-overlay__header",children:[e.jsxs(l,{className:"header__logo",to:"/",onClick:()=>{s(!1),a()},children:[e.jsx("img",{src:o.logo,alt:"",className:"logo logo__image"}),e.jsx("p",{className:"header__title",children:o.name})]}),e.jsx("div",{className:"mobile-overlay__close-button-wrapper",children:e.jsx(i,{className:"mobile-overlay__close-button cross-button",onClick:()=>{s(!1),a()}})})]}),e.jsxs("div",{className:"mobile-overlay__body",children:[e.jsx("ul",{className:"mobile-overlay__body-list"}),e.jsx("div",{className:"mobile-overlay__body-auth",children:e.jsx(l,{className:"mobile-overlay__auth-link",to:"/sign-in",onClick:()=>{s(!1),a()},children:e.jsx(i,{className:"header__button button button--mobile",children:"Пройти тест"})})})]})]})]})})}export{x as default};
