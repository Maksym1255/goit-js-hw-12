import{A as I,S as P,i as p}from"./assets/vendor-65e4e6bd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const S=I.create({baseURL:"https://pixabay.com/api/"});async function y(o,r){const n=new URLSearchParams({key:"44595659-f233d14b1d86ebf700a2637af",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:12});return(await S.get("",{params:n})).data}const M=new P(".gallery a");function L(o){const r=document.getElementById("gallery"),n=o.map(({webformatURL:i,largeImageURL:e,tags:t,likes:a,views:w,comments:B,downloads:H})=>`<li class="gallery-item">
	<a class="gallery-link" href="${e}">
		<img
			class="gallery-image"
			src="${i}"
			alt="${t}"
			/>
	</a>
  <div class="details">
  <p class="info">Likes: <br>${a}</p>
  <p class="info">Views: <br>${w}</p>
  <p class="info">Comments: <br>${B}</p>
  <p class="info">Downloads: <br>${H}</p>
</div>
</li>
`).join("");r.insertAdjacentHTML("beforeend",n),M.refresh()}const h=document.getElementById("search-form"),$=document.getElementById("search-input"),b=document.getElementById("loader"),g=document.querySelector(".btn-load"),c=document.getElementById("gallery");let d="",l=1,f=1,s;const q=12;h.addEventListener("submit",async o=>{if(o.preventDefault(),v(),d=$.value.trim(),l=1,d===""){c.innerHTML="",p.warning({title:"Warning!",message:"Please enter a search query",position:"center"}),u(),m();return}try{if(s=await y(d,l),c.innerHTML="",h.reset(),s.totalHits===0){c.innerHTML="",p.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),u(),m();return}L(s.hits),u(),E()}catch(r){console.error(r)}});g.addEventListener("click",async()=>{l++,m(),v();try{s=await y(d,l),L(s.hits),x()}catch{console.log("error")}u(),E()});async function E(){const o=Number(s.totalHits);f=Math.ceil(o/q),l>=f?(m(),f&&p.info({title:"The End!",message:"End of collection!",position:"bottomCenter"})):O()}function x(){const r=c.children[0].getBoundingClientRect().height;scrollBy({top:r*2,behavior:"smooth"})}function v(){b.classList.add("loader")}function u(){b.classList.remove("loader")}function O(){g.classList.remove("hidden")}function m(){g.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
