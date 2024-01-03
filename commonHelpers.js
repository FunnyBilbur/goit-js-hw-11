import{i as h,S as g}from"./assets/vendor-4971c7df.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const y=document.querySelector(".form"),_=document.querySelector(".input__search"),i=document.querySelector(".gallery"),l=document.querySelector(".load");y.addEventListener("submit",r=>{r.preventDefault(),i.innerHTML="",c()});function c(){l.classList.add("loader");let r=Math.floor(Math.random()*10)+1,a=new URLSearchParams({key:"41527522-465889db431a6a06c19f4d10b",q:_.value,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r});fetch(`https://pixabay.com/api/?${a}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.total===0){console.log(t),h.show({titleColor:"white",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#EF4040",progressBarColor:"#B51B1B"}),l.classList.remove("loader");return}if(t.total+19<r*20){console.log(`Total image: ${t.total} less than RandomPage ${r} and needed count of images ${r*20}`),L();return}l.classList.remove("loader");const s=t.hits.map(({webformatURL:o,largeImageURL:n,tags:u,likes:d,views:f,comments:m,downloads:p})=>`<li class="gallery__item">
                    <a class="gallery__link" href="${n}">
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
                        <span>${f}</span>
                        </li>
                        <li class="info__item">
                        <span>Comments</span>
                        <span>${m}</span>
                        </li>
                        <li class="info__item">
                        <span>Downloads</span>
                        <span>${p}</span>
                        </li>
                        </ul>
            
                    </a>
            </li>`).join("");i.insertAdjacentHTML("beforeend",s);var e=new g(".gallery a",{captionsData:"alt",captionDelay:"250"});e.refresh(),console.log(t)}).catch(t=>console.log(t))}function L(){c()}
//# sourceMappingURL=commonHelpers.js.map
