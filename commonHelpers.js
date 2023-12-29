import{S as s}from"./assets/vendor-7a249420.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.querySelector(".form"),u=document.querySelector(".input__search"),a=document.querySelector(".gallery");c.addEventListener("submit",i=>{i.preventDefault();let o=new URLSearchParams({key:"41527522-465889db431a6a06c19f4d10b",q:u.value,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(a.innerHTML="",!r.ok)throw new Error(r.status);return r.json()}).then(r=>{const l=r.hits.map(({largeImageURL:e,webformatURL:t,tags:n,likes:f,views:d,comments:m,downloads:p})=>`<li class="gallery__item">
                    <a class="gallery__link" href="${e}">
                        <img
                            class="gallery__image"
                            src="${t}"
                            alt="${n}"/>
                    </a>
            </li>`).join("");a.insertAdjacentHTML("beforeend",l),new s(".gallery a",{captionsData:"alt",captionDelay:"250"}),console.log(r)}).catch(r=>console.log(r))});
//# sourceMappingURL=commonHelpers.js.map
