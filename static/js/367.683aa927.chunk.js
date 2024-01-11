"use strict";(self.webpackChunkmy_gallery=self.webpackChunkmy_gallery||[]).push([[367],{796:(A,e,a)=>{a.r(e),a.d(e,{default:()=>b});a(632),a(776);var i=a(689),s=a(791),t=a(87),n=a(184);const r=()=>(0,n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-container",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(t.rU,{className:"navbar-brand",to:"/home",children:"personal gallery"}),(0,n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,n.jsx)("span",{className:"navbar-toggler-icon"})}),(0,n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:(0,n.jsxs)("ul",{className:"navbar-nav ms-auto",children:[(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(t.rU,{className:"nav-link","aria-current":"page",to:"/home",children:"All"})}),(0,n.jsx)("div",{className:"nav-item",children:(0,n.jsx)(t.rU,{className:"nav-link",to:"/images/animals",children:"Animals"})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(t.rU,{className:"nav-link",to:"/images/people",children:"People"})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(t.rU,{className:"nav-link",to:"/images/others",children:"Others"})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(t.rU,{className:"nav-link","aria-current":"page",to:"/home/about",children:"About me"})})]})})]})});var o=a(261);const l="https://mpg.somee.com";function c(A,e){let a=[];return e.forEach((e=>{e.tag===A&&a.push(e)})),a}const m=A=>{const e=(0,i.s0)(),{imageData:a,id:s,title:t,tag:r,currentPath:o}=A,l="data:image/jpeg;base64,".concat(a);return(0,n.jsx)("div",{onClick:function(){e("/images/".concat(r,"/").concat(t),{state:{id:s,imageData:a,title:t,tag:r,currentPath:o}})},children:(0,n.jsx)("img",{src:l,className:"image-cell",alt:t})},s)};var d=a(806),h=a(276);const R=()=>(0,n.jsx)("section",{onClick:function(){window.location.reload()},children:(0,n.jsx)("div",{className:"container mt-5",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-sm-12",children:(0,n.jsxs)("div",{className:"alert fade alert-simple alert-danger alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show",role:"alert","data-brk-library":"component__alert",children:[(0,n.jsx)(d.G,{className:"fa-times",icon:h.NBC}),(0,n.jsx)("i",{className:"start-icon far fa-times-circle faa-pulse animated"}),(0,n.jsx)("strong",{className:"font__weight-semibold",children:"Oh sorry!"})," ","Something are not working. Please, try again"]})})})})}),I=()=>(0,n.jsx)("div",{className:"loading-animation-container",children:(0,n.jsx)("svg",{className:"load-spinner",width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})})}),j=()=>{const{tag:A}=(0,i.UO)(),[e,a]=(0,s.useState)([]),[t,r]=(0,s.useState)(!1),[d,h]=(0,s.useState)(!1),j=(0,i.TH)().pathname;return(0,s.useEffect)((()=>{(async()=>{r(!0);const e=await async function(){try{const e=await caches.open("images-cache"),a=await e.match("thumbnails");if(!a)return a;{const e=a.headers.get("content-type");var A;if(e&&e.includes("application/json"))return null!==a.body&&(A=await a.json()),A}}catch(e){throw new Error("getting cache files: "+e.message)}}();var i;e?i=e:(i=await async function(){let A;return await fetch("".concat(l,"/api/images/getThumbnails"),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((A=>A.json())).then((e=>{A=e})).catch((A=>{console.error(A)})),A}(),await async function(A){try{const e=await caches.open("images-cache"),a=JSON.stringify(A),i=new Response(a,{headers:{"Content-Type":"application/json"}});await e.put("thumbnails",i)}catch(e){throw new Error("saving cache files: "+e.message)}}(i)),i||h(!0),r(!1);const s=function(A,e){let a;switch(A){case"animals":case"people":case"others":a=c(A,e);break;default:return e}return a}(A,i);let t,n=[],o=[],m=0;t=navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)?Math.ceil(s.length/3):Math.ceil(s.length/4);for(let A=0;A<s.length;A++)o.push(s[A]),m++,m>t&&(m=0,n.push(o),o=[]);for(let A=0;A<o.length;A++)n[Math.floor(Math.random()*n.length)].push(o[A]);a(n)})()}),[A]),(0,n.jsx)("div",{className:"row-n",children:d?(0,n.jsx)("div",{className:"error-container",children:(0,n.jsx)(R,{})}):t?(0,n.jsx)("div",{className:"loading-container",children:(0,n.jsx)(I,{})}):e.map((A=>(0,n.jsx)("div",{className:"column",children:A.map((A=>(0,n.jsx)(m,{id:A.id,imageData:A.imageData,title:A.title,tag:A.tag,currentPath:j},(0,o.Z)())))},(0,o.Z)())))})};const N=()=>{const{title:A}=(0,i.UO)(),e=(0,i.TH)().state,[a,r]=(0,s.useState)([]),[o,c]=(0,s.useState)([]),[m,d]=(0,s.useState)(!1),[h,j]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{(async()=>{var a;d(!0),a=e||await async function(A){let e;return await fetch("".concat(l,"/api/images/getByTitle/").concat(A),{}).then((A=>A.json())).then((A=>{e=A})).catch((A=>{console.error(A)})),e}(A),a||j(!0),d(!1),c(a)})()}),[A,e]),(0,s.useEffect)((()=>{o&&r("data:image/jpeg;base64,".concat(o.imageData))}),[o]),(0,n.jsx)("div",{className:"row",children:h?(0,n.jsx)("div",{className:"error-container",children:(0,n.jsx)(R,{})}):m?(0,n.jsx)("div",{className:"loading-container",children:(0,n.jsx)(I,{})}):(0,n.jsx)("div",{className:"card",id:"card-detailImage-container",children:(0,n.jsxs)("div",{className:"card-body",id:"card-body",children:[(0,n.jsx)("img",{src:a,alt:o.title,className:"card-img-top",id:"image-detail-img",onLoad:function(){!function(){const A=document.querySelector("#card-detailImage-container"),e=document.querySelector("#card-body"),a=document.querySelector("#image-detail-img"),i=window.innerHeight;if(a.offsetHeight>800){const s=i-.001*i;e.style.height="".concat(s,"px"),a.style.height="".concat(s-.17*s,"px");const t=a.width;A.style.width="".concat(t+.15*t,"px")}}()}}),(0,n.jsxs)("div",{className:"title-button-container",children:[(0,n.jsx)("h3",{children:o.title}),(0,n.jsx)(t.rU,{id:"link-detail",to:e.currentPath,children:"Regresar"})]})]})})})},g=a.p+"static/media/DSC_0036.2c2dce50231970620d00.jpg",v=()=>(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"about-container",children:(0,n.jsxs)("div",{className:"text-container",children:[(0,n.jsx)("p",{className:"text-center",children:"I'm just a guy who likes to capture moments and share them with everyone."}),(0,n.jsx)("div",{className:"flex justify-center mx-8 my-4",children:(0,n.jsx)("img",{className:" w-auto xl:h-[60vh] max-w-full max-h-full md:h-auto rounded-sm",src:g,alt:""})}),(0,n.jsxs)("p",{className:"text-center",children:["With love, ",(0,n.jsx)(t.rU,{to:"https://www.jeffrm.com.co",target:"_blank",rel:"noopener noreferrer",children:"Jeff Rer\xedn"})]}),(0,n.jsx)("div",{className:"h6-container-aboutme text.pretty text-xl",children:(0,n.jsx)("h6",{className:" ",children:"Thank you for your visit."})})]})})}),E=a.p+"static/media/my website.74b596bd64da2b91fcdd.png",x=()=>(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"footer-container",children:(0,n.jsx)("div",{className:"sub-footer section-padding",children:(0,n.jsxs)("div",{className:"sub-footer-links",children:[(0,n.jsxs)("div",{className:"sub-footer-links-div",children:[(0,n.jsx)("h3",{className:"footer-title",children:"Built by: "}),(0,n.jsx)("p",{children:" Jeffrey S. Rer\xedn"})]}),(0,n.jsxs)("div",{className:"sub-footer-links-div",children:[(0,n.jsx)("h3",{className:"footer-title",children:"Social media: "}),(0,n.jsxs)("div",{className:"social-media",children:[(0,n.jsx)("div",{className:"footer-p",children:(0,n.jsxs)(t.rU,{to:"https://www.linkedin.com/in/jeffrey-rerin/",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)("p",{children:"LinkedIn"}),(0,n.jsx)("img",{className:"footer-img",src:"data:image/png;base64,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",alt:""})]})}),(0,n.jsx)("div",{className:"footer-p",children:(0,n.jsxs)(t.rU,{to:"https://github.com/Delacrobix",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)("p",{children:"GitHub"}),(0,n.jsx)("img",{className:"footer-img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzMPSIAAAA/3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7rCNk1AAATOklEQVQYGe3BCYCWc+IH8O87M01N96Fbf0mHQhJFhIgl5QrlWruoRFS0ubL/lMQsOQorNiWxayPlSKi2phQVKTp0jDIdOkZN55hm5vvf9d9lm2be931+z/Mez+/5fj4QEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREcukHHV8x8tvuKXvgMEPPZKZOfyhwQP63nLDZWe1qBWCWCy9+UV9M/8+f/XOIpahcMeqeW8+fttvmpaD2KRqx34vZeUUMWpF38958fYzK0N8r96VD7+TXUwjxeunDL28DsSvWtw6YR1dWzPu5qYQv2nWf8o2embrW3c2gfhF+oXPrKXnVo06vxwk6dXuPXUvYyTv7VtqQZJY1d/POMSYKvjgxsqQpJRxzZR8xsGByd0rQJLN6a/sYdzkvXwqJIlU6buUcbakdyVIcjhl7F4mQN7zrSEJF7pyARMm69IQJJHSe61mQn3z+3KQRKl23xYmXM6gKpBEqDEyj0lh17CqkHirNGQXk0bu4AxIPKX3/4FJZXPfcpB4Sb15A5POuhtTIHFx9ldMSovPgMRewzeYrIon1IXEVvr9e5nE8u5Jg8RQlzVMcis7Q2Kl1uv0gfHVITFx9Tb6wpbLIN6r+xZ9441aEI/duJM+sq0HxEvVJ9NnXq8C8cxZG+k769pBvJHyx0L6UMG9IYgHGv6DPvVRXYhrl+ykb23rDHFpSBF9rHAQxI1Kk+lzkzIgxposp+990Qhi6IJcWmDbORAj/QpphYJeEOdCmbTGMIhT5SbRIuPSII5U/YRW+aASxIH6X9Eyi+tAotZ0A62zrjEkSi0200Ibj4NE5YQfaKVNzSFRaL2dltraEhLRKTtprW0n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",alt:""})]})}),(0,n.jsx)("div",{className:"footer-p",children:(0,n.jsxs)(t.rU,{to:"https://www.jeffrm.com.co",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)("p",{children:"Portfolio"}),(0,n.jsx)("img",{className:"footer-img portfolio-img",src:E,alt:""})]})})]})]})]})})})});const b=function(){return(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)(r,{}),(0,n.jsx)("div",{children:(0,n.jsxs)(i.Z5,{children:[(0,n.jsx)(i.AW,{path:"/images/:tag",element:(0,n.jsx)(j,{})}),(0,n.jsx)(i.AW,{path:"/home",element:(0,n.jsx)(j,{})}),(0,n.jsx)(i.AW,{path:"/images/:tag/:title",element:(0,n.jsx)(N,{})}),(0,n.jsx)(i.AW,{path:"/home/about",element:(0,n.jsx)(v,{})})]})}),(0,n.jsx)(x,{})]})}}}]);
//# sourceMappingURL=367.683aa927.chunk.js.map