import{S as a}from"./assets/vendor-65c04d94.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function d(o){let t=parseInt(Math.floor(o/1e3)),s=parseInt(Math.floor(t/60)),n=parseInt(Math.floor(s/60)),e=parseInt(Math.floor(n/24)),r=parseInt(t%60),i=parseInt(s%60),l=parseInt(n%24);return{d:e,h:l,m:i,s:r}}function u({d:o,h:t,m:s,s:n}){return o=o.toString().padStart(2,"0"),t=t.toString().padStart(2,"0"),s=s.toString().padStart(2,"0"),n=n.toString().padStart(2,"0"),`${o} днів              ${t}:${s}:${n}`}const f=document.querySelector(".js-clockface"),p=new Date("2024 / 5 / 14");setInterval(()=>{const t=new Date-p;m(t)},1e3);const m=o=>{h(o)};function h(o){const t=d(o),s=u(t);f.textContent=s}const c={changeTheme:document.querySelector(".theme"),circle:document.querySelector(".circle"),body:document.querySelector("body"),header:document.querySelector(".header ")};c.changeTheme.addEventListener("click",()=>{c.circle.classList.toggle("dark-theme"),c.body.classList.toggle("dark"),c.circle.classList.toggle("dark"),c.changeTheme.classList.toggle("light"),c.header.classList.toggle("dark"),c.header.classList.toggle("light")});new a(".swiper",{direction:"horizontal",loop:!0,speed:1e3,autoplay:{delay:2e3,stopOnLastSlide:!1,disableOnInteraction:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1},spaceBetween:0,initialSlide:0,effect:"cube",cubeEffect:{slideShadows:!1,shadow:!0,shadowOffset:40,shadowScale:.95}});
//# sourceMappingURL=commonHelpers.js.map
