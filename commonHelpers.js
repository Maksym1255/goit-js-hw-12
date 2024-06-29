import{A as I,S as P,i as f}from"./assets/vendor-65e4e6bd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const S=I.create({baseURL:"https://pixabay.com/api/"});async function g(o,t){const s=new URLSearchParams({key:"44595659-f233d14b1d86ebf700a2637af",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:12});try{return(await S.get("",{params:s})).data}catch(n){console.log(n)}}function y(o){const t=document.getElementById("gallery"),s=o.map(({webformatURL:e,largeImageURL:r,tags:a,likes:v,views:w,comments:B,downloads:H})=>`<li class="gallery-item">
	<a class="gallery-link" href="${r}">
		<img
			class="gallery-image"
			src="${e}"
			alt="${a}"
			/>
	</a>
  <div class="details">
  <p class="info">Likes: <br>${v}</p>
  <p class="info">Views: <br>${w}</p>
  <p class="info">Comments: <br>${B}</p>
  <p class="info">Downloads: <br>${H}</p>
</div>
</li>
`).join("");t.insertAdjacentHTML("beforeend",s),new P(".gallery a").refresh()}const h=document.getElementById("search-form"),x=document.getElementById("search-input"),L=document.getElementById("loader"),p=document.querySelector(".btn-load"),l=document.getElementById("gallery");let i="",c=1,m=1;const M=12;h.addEventListener("submit",async o=>{o.preventDefault(),b(),i=x.value.trim(),c=1;const t=await g(i,c);if(l.innerHTML="",h.reset(),i===""){l.innerHTML="",f.warning({title:"Warning!",message:"Please enter a search query",position:"center"}),d(),u();return}if(t.totalHits===0){l.innerHTML="",f.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),d(),u();return}try{y(t.hits),d(),E()}catch(s){console.error(s)}});p.addEventListener("click",async()=>{c++,u(),b();try{const o=await g(i,c);y(o.hits),q()}catch{console.log("error")}d(),E()});function b(){L.classList.add("loader")}function d(){L.classList.remove("loader")}async function E(){const o=await g(i),t=Number(o.totalHits);m=Math.ceil(t/M),c>=m?(u(),m&&f.info({title:"The End!",message:"End of collection!",position:"bottomCenter"})):$()}function $(){p.classList.remove("hidden")}function u(){p.classList.add("hidden")}function q(){const t=l.children[0].getBoundingClientRect().height;scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
