const t=t=>{const n=typeof t,e=null===t,r=Array.isArray(t),o=t instanceof Date;return(e?"null":o&&"date")||r&&"array"||!e&&!o&&!r&&"object"===n&&"object"||n},n=()=>"undefined"==typeof window,e=t=>new URLSearchParams("string"==typeof t?r(t):t?.toString?.()||""),r=t=>t.split("?")?.[1]||t||"",o=(t,n)=>JSON.stringify(t)===JSON.stringify(n);function i(t){const n=new URLSearchParams;return s(t,[...new URLSearchParams(window.location.search).entries()]).forEach((([t,e])=>n.set(t,e))),n.toString()}function c(t,n){return Object.fromEntries(s(t,Object.entries(n||{})))}function s(t,n){const e=Object.keys(t);return n.filter((([t])=>e.includes(t))).map((([t,n])=>[t.replaceAll("+"," "),n]))}function a(t,n,e){const r=Object.assign({},t,n);return Object.entries(t).forEach((([n])=>{const o=n,i=void 0!==e[o];r[o]=i?e[o]:t[o]})),r}const l={push:t=>{window&&window.history.pushState(null,"",t)},replace:t=>{window&&window.history.replaceState(null,"",t)}};export{a as assignValue,c as filterUnknownParams,i as filterUnknownParamsClient,e as getParams,o as isEqual,n as isSSR,l as routerHistory,t as typeOf};