import t from"react";import{useInsertionEffect as e}from"../useInsertionEffect.mjs";import{useSharedState as o}from"../useSharedState/useSharedState.mjs";import{useUrlEncode as n}from"../useUrlEncode/useUrlEncode.mjs";import{filterUnknownParamsClient as a}from"../utils.mjs";function s(s,c,i){const{parse:m,stringify:p}=n(s),{state:w,getState:d,setState:u}=o(s,(()=>i?.({parse:m})||s));e((()=>{const t=()=>{const t=m(a(s));u(t)};return window.addEventListener(r,t),()=>{window.removeEventListener(r,t)}}),[u]);const l=t.useCallback(((t,e)=>{const o=`${window.location.pathname}${window.location.search}${window.location.hash}`,n="function"==typeof t,a=function(t){const e=Object.keys(t),o=window.location.search,n=new URLSearchParams(o),a=new URLSearchParams;return n.forEach(((t,o)=>!e.includes(o)&&a.set(o,t))),a}(s),r=n?t(d()):t?{...d(),...t}:d(),i=p(r,a);u(r);const m=`${window.location.pathname}${i.length?"?":""}${i}${window.location.hash}`;if(o!==m){const{replace:t,...o}=e||{};c[t?"replace":"push"](m,{...o})}}),[c,p,d]);return{updateState:u,updateUrl:l,state:w,getState:d}}const r="popstate";export{s as useUrlStateBase};
