(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i=`
  <div class='purple-container'>
    <a href='/explore-muabet' class='btn-primary' data-link>Explore chat rooms</a>
    <a href='/create-muabet' class='btn-primary' data-link>Start a new chat room</a>
  </div>
`;document.querySelector("#app").innerHTML=i;const p=`
  <div class="purple-container">
    this is a chat room
  </div>
`,d=`
  <div class="purple-container">
    <input type="text" placeholder="Chat room name" />
    <input type="checkbox" value="Password protected" />
    <input type="text" placeholder="Password" />
  </div>
`,u=`
  <div class='purple-container'>
    all the chads
  </div>
`,l=o=>{history.pushState(null,null,o)},s=async()=>{const r=[{path:"/",component:i},{path:"/muabet",component:p},{path:"/explore-muabet",component:u},{path:"/create-muabet",component:d}].find(n=>n.path===location.pathname);r?document.querySelector("#app").innerHTML=r.component:l("/")};document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",o=>{o.target.matches("[data-link]")&&(o.preventDefault(),l(o.target.href),s())}),s()});
