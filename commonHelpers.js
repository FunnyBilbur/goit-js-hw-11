import{i as g,S as h}from"./assets/vendor-4971c7df.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const y=document.querySelector(".form"),_=document.querySelector(".input__search"),l=document.querySelector(".gallery"),i=document.querySelector(".load");y.addEventListener("submit",a=>{a.preventDefault(),l.innerHTML="",i.classList.add("loader"),c()});function c(){let a=Math.floor(Math.random()*10)+1,n=new URLSearchParams({key:"41527522-465889db431a6a06c19f4d10b",q:_.value,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a});fetch(`https://pixabay.com/api/?${n}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.total+19<a*20&&(console.log(`User Total ${t.total} less than RandomPage ${a} and needed count ${a*20}`),L()),i.classList.remove("loader"),t.total===0){console.log(t),g.show({titleColor:"white",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#EF4040",progressBarColor:"#B51B1B"});return}const s=t.hits.map(({webformatURL:o,largeImageURL:r,tags:u,likes:d,views:m,comments:f,downloads:p})=>`<li class="gallery__item">
                    <a class="gallery__link" href="${r}">
                        <img
                            class="gallery__image"
                            src="${o}"
                            alt="${u}"/>
                        <ul class="info__list">
                        <li class="info__item">
                        <span>Likes</span>
                        <span>${d}</span>
                        </li>
                        <li class="info__item">
                        <span>Views</span>
                        <span>${m}</span>
                        </li>
                        <li class="info__item">
                        <span>Comments</span>
                        <span>${f}</span>
                        </li>
                        <li class="info__item">
                        <span>Downloads</span>
                        <span>${p}</span>
                        </li>
                        </ul>
            
                    </a>
            </li>`).join("");l.insertAdjacentHTML("beforeend",s);var e=new h(".gallery a",{captionsData:"alt",captionDelay:"250"});e.refresh(),console.log(t)}).catch(t=>console.log(t))}function L(){c()}
//# sourceMappingURL=commonHelpers.js.map
