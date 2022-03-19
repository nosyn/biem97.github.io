import{j as d,r as o,S as m,M as x,F as h,a as u,b as p,c as f,d as g,e as N,D as k,f as b,g as y,G as v,h as w,i as S,k as M,l as j,m as L,A as T,R as A,n as F}from"./vendor.562c1b73.js";const I=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}};I();const e=d.exports.jsx,a=d.exports.jsxs,E=({children:r})=>e("main",{className:"flex min-h-screen justify-center bg-sky-200 px-4  dark:bg-gray-800",children:e("div",{className:"max-w-2xl grow pt-12",children:r})}),D={light:e(m,{className:"h-6 w-6 text-red-400"}),dark:e(x,{className:"h-6 w-6 text-yellow-300"})},R=()=>{const[r,n]=o.exports.useState(!1),[c,l]=o.exports.useState("light"),t=()=>l(s=>{const i=s==="dark"?"light":"dark";return localStorage.setItem("theme",i),i==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),i});return o.exports.useEffect(()=>{localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),l("dark")):(document.documentElement.classList.remove("dark"),l("light")),n(!0)},[]),r?e("div",{className:"mt-2",children:e("button",{onClick:t,children:D[c]})}):null},J=()=>a("div",{className:"flex flex-1 gap-8",children:[e("img",{src:"/images/profile.jpg",width:"200",height:"200",className:"rounded-full"}),a("div",{className:"flex flex-1 flex-col",children:[a("div",{className:"flex items-center justify-between border-black first-letter:border-2",children:[e("h1",{className:"mt-2 text-3xl font-bold dark:text-white",children:"Son Nguyen"}),e(R,{})]}),e("h1",{className:"text-1xl mb-4 dark:text-white",children:"Web Developer"}),a("div",{className:"mt-2 flex gap-3",children:[e("a",{href:"https://github.com/biem97",target:"_blank",className:"dark:text-white",children:e(h,{className:"text-4xl hover:text-sky-500"})}),e("a",{href:"https://www.linkedin.com/in/son-nguyen-b68378112/",target:"_blank",className:"dark:text-white",children:e(u,{className:"text-4xl hover:text-sky-500"})}),e("a",{href:"https://nosyn.dev",target:"_blank",className:"dark:text-white",children:e(p,{className:"text-4xl hover:text-sky-500"})}),e("a",{href:"https://twitter.com/nosyn97",target:"_blank",className:"dark:text-white",children:e(f,{className:"text-4xl hover:text-sky-500"})})]})]})]}),O=[{icons:e(g,{className:"text-7xl text-orange-600"}),description:"HTML"},{icons:e(N,{className:"text-7xl text-blue-600"}),description:"CSS"},{icons:e(k,{className:"text-7xl  text-yellow-500 dark:text-yellow-300"}),description:"Javascript"},{icons:e(b,{className:"text-7xl text-blue-600"}),description:"TypeScript"},{icons:e(y,{className:"text-7xl text-green-500"}),description:"NodeJS"},{icons:e(v,{className:"text-7xl text-blue-600"}),description:"ReactJS"},{icons:e("img",{src:"/svg/Nextjs-logo.svg"}),description:"NextJS"},{icons:e(w,{className:"text-7xl text-pink-600"}),description:"GraphQL"},{icons:e(S,{className:"text-7xl text-purple-600"}),description:"Apollo"},{icons:e(M,{className:"text-7xl text-blue-600"}),description:"PostgresQL"},{icons:e(j,{className:"text-7xl text-green-500"}),description:"MongoDB"},{icons:e(L,{className:"text-7xl text-sky-500"}),description:"MaterialUI"}],G=()=>a("div",{className:"mt-6",children:[e("h5",{className:"mb-1 text-2xl font-bold dark:text-white",children:"Technologies and framework that I mainly use"}),e("div",{className:"around my-2 flex max-w-xl flex-wrap justify-around gap-6",children:O.map(r=>a("div",{className:"flex flex-col items-center",children:[e("div",{children:r.icons}),e("div",{className:"align-middle dark:text-white",children:r.description})]},r.description))})]}),P=()=>a("div",{className:"mt-4",children:[e("h4",{className:"mt-2 text-3xl font-bold dark:text-white",children:"About Me"}),e("p",{className:"mt-2 dark:text-white",children:"I've been working as a Web Developer since December 2020. I'm interested in technologies that built on top of JavaScript. I'm currently working as a Associate Web Developer at Plus One Robotics in San Antonio, USA. I love watching movies, hiking and playing video games with my friends in my free time."})]}),C=()=>e("div",{className:"absolute inset-x-0 bottom-0 flex justify-center",children:a("div",{className:"max-w-2xl flex-1",children:[e("hr",{className:"border-dashed border-purple-600"}),a("div",{className:"flex items-center justify-center gap-2 dark:text-white",children:["Made with ",e(T,{className:"text-red-400"})]})]})});function H(){return a(E,{children:[e(J,{}),e(P,{}),e(G,{}),e(C,{})]})}A.render(e(F.StrictMode,{children:e(H,{})}),document.getElementById("root"));
