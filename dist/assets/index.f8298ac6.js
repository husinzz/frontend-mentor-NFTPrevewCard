import{S as C,i as H,s as M,e as o,a as y,b as j,c as l,n as E,d as x,f as c,l as O,g as k,h as q,r as N}from"./vendor.1574688e.js";const T=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};T();function $(u){let i,r,s,e,t,n,f,d,_,v,w,g,b,m,h,L;return{c(){i=o("main"),r=o("div"),s=o("div"),e=o("img"),n=y(),f=o("div"),d=o("img"),w=y(),g=o("div"),g.innerHTML=`<h1 class="text-white text-2xl font-semibold pb-3 hover:text-cyan-500">Equilibrium #3429</h1> 
      <p class="text-blue-soft text-lg font-light pb-3">Our Equilibrium collection promotes balance and calm.</p> 
      <div class="flex items-center justify-between pb-5"><span class="flex items-center"><img src="images/icon-ethereum.svg" alt="eth" class="h-[18px]"/> 
          <p class="text-cyan-500 font-semibold pl-2">0.041 ETH</p></span> 

        <span class="flex items-center"><img src="images/icon-clock.svg" alt="time-left" class="h-[18px]"/> 
          <p class="text-blue-soft pl-2">3 days left</p></span></div> 
      <hr class="py-2 very-dark-3"/> 
      <div class="flex items-center pb-5"><img src="images/image-avatar.png" alt="avatar" class="w-[40px] ml-2 mr-4 border-white border rounded-full"/> 
        <p class="text-blue-soft">Creation of <span class="text-white hover:text-cyan-500">Jules Wyvern</span></p></div>`,b=y(),m=o("div"),m.innerHTML='Challenge by <a href="https://www.frontendmentor.io?ref=challenge" class="svelte-qqdclq">Frontend Mentor</a>. Coded by <a href="https://github.com/urdreamboi" class="svelte-qqdclq">urdreamboi</a>.',j(e.src,t="images/image-equilibrium.jpg")||l(e,"src",t),l(e,"class","h-full"),l(e,"alt","NFT"),j(d.src,_="images/icon-view.svg")||l(d,"src",_),l(d,"alt","eth"),l(d,"class","opacity-100 z-10"),l(f,"class",v=""+(E(`h-full w-full bg-cyan-500 bg-opacity-75 absolute top-0 flex items-center justify-center ${u[0]}`)+" svelte-qqdclq")),l(s,"class","relative m-5 rounded-lg overflow-hidden"),l(g,"class","mx-5"),l(r,"class","bg-blue-very-dark-2 rounded-lg max-w-[350px]"),l(i,"class","bg-blue-very-dark-1 flex justify-center items-center h-full font-outfits"),l(m,"class","attribution bottom-0 left-1/2 -translate-x-1/2 absolute my-2 text-white svelte-qqdclq")},m(a,p){x(a,i,p),c(i,r),c(r,s),c(s,e),c(s,n),c(s,f),c(f,d),c(r,w),c(r,g),x(a,b,p),x(a,m,p),h||(L=[O(e,"mouseover",u[2]),O(e,"mouseout",u[1])],h=!0)},p(a,[p]){p&1&&v!==(v=""+(E(`h-full w-full bg-cyan-500 bg-opacity-75 absolute top-0 flex items-center justify-center ${a[0]}`)+" svelte-qqdclq"))&&l(f,"class",v)},i:k,o:k,d(a){a&&q(i),a&&q(b),a&&q(m),h=!1,N(L)}}}function A(u,i,r){let s="hidden";function e(n){r(0,s="hidden")}function t(n){r(0,s="")}return[s,e,t]}class F extends C{constructor(i){super();H(this,i,A,$,M,{})}}new F({target:document.getElementById("app")});
