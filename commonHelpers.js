(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function a(o){let t=parseInt(Math.floor(o/1e3)),s=parseInt(Math.floor(t/60)),c=parseInt(Math.floor(s/60)),e=parseInt(Math.floor(c/24)),r=parseInt(t%60),i=parseInt(s%60),l=parseInt(c%24);return{d:e,h:l,m:i,s:r}}function d({d:o,h:t,m:s,s:c}){return o=o.toString().padStart(2,"0"),t=t.toString().padStart(2,"0"),s=s.toString().padStart(2,"0"),c=c.toString().padStart(2,"0"),`${o} днів              ${t}:${s}:${c}`}const u=document.querySelector(".js-clockface"),f=new Date("2024 / 5 / 14");setInterval(()=>{const t=new Date-f;m(t)},1e3);const m=o=>{g(o)};function g(o){const t=a(o),s=d(t);u.textContent=s}const n={changeTheme:document.querySelector(".theme"),circle:document.querySelector(".circle"),body:document.querySelector("body"),header:document.querySelector(".header ")};n.changeTheme.addEventListener("click",()=>{n.circle.classList.toggle("dark-theme"),n.body.classList.toggle("dark"),n.circle.classList.toggle("dark"),n.changeTheme.classList.toggle("light"),n.header.classList.toggle("dark"),n.header.classList.toggle("light")});
//# sourceMappingURL=commonHelpers.js.map
