import{encode as f,decode as m}from"../encoder/encoder.mjs";import{getParams as c}from"../utils.mjs";function a(r,e,n){const o=c(n);for(const[t,i]of Object.entries(r||{})){const s=e?.[t];JSON.stringify(i)!==JSON.stringify(s)&&o.set(t,f(i))}return o.toString()}function d(r,e){return{...e||{},...Object.fromEntries([...c(r).entries()].map(([n,o])=>{const t=e?.[n];return[n,m(o,t)??t]}))}}export{d as decodeState,a as encodeState};
