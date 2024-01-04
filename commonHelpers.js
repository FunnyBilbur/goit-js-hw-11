import{S as h,i as l}from"./assets/vendor-4971c7df.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const g=document.querySelector(".form"),y=document.querySelector(".input__search"),c=document.querySelector(".gallery"),i=document.querySelector(".load");g.addEventListener("submit",n=>{n.preventDefault(),c.innerHTML="",i.classList.add("loader");var o=new h(".gallery a",{captionsData:"alt",captionDelay:"250"});let a=new URLSearchParams({key:"41527522-465889db431a6a06c19f4d10b",q:y.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${a}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.total===0){l.show({titleColor:"white",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#EF4040",progressBarColor:"#B51B1B"}),i.classList.remove("loader");return}i.classList.remove("loader");const e=t.hits.map(({webformatURL:r,largeImageURL:s,tags:u,likes:m,views:p,comments:d,downloads:f})=>`<li class="gallery__item">
                    <a class="gallery__link" href="${s}">
                        <img
                            class="gallery__image"
                            src="${r}"
                            alt="${u}"/>
                        <ul class="info__list">
                        <li class="info__item">
                        <span>Likes</span>
                        <span>${m}</span>
                        </li>
                        <li class="info__item">
                        <span>Views</span>
                        <span>${p}</span>
                        </li>
                        <li class="info__item">
                        <span>Comments</span>
                        <span>${d}</span>
                        </li>
                        <li class="info__item">
                        <span>Downloads</span>
                        <span>${f}</span>
                        </li>
                        </ul>
            
                    </a>
            </li>`).join("");c.insertAdjacentHTML("beforeend",e),o.refresh()}).catch(t=>l.show({titleColor:"white",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#EF4040",progressBarColor:"#B51B1B"}))});
//# sourceMappingURL=commonHelpers.js.map
