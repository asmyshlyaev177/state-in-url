const t=t=>{const n=typeof t,e=null===t,r=Array.isArray(t),c=t instanceof Date;return(e?"null":c&&"date")||r&&"array"||!e&&!c&&!r&&"object"===n&&"object"||n},n=()=>"undefined"==typeof window,e=t=>new URLSearchParams("string"==typeof t?r(t):t?.toString?.()||""),r=t=>t.split("?")?.[1]||t||"",c=(t,n)=>JSON.stringify(t)===JSON.stringify(n);function o(t){const n=new URLSearchParams;return s(t,[...new URLSearchParams(window.location.search).entries()]).forEach((([t,e])=>n.set(t,e))),n.toString()}function i(t,n){return Object.fromEntries(s(t,Object.entries(n||{})))}function s(t,n){const e=Object.keys(t);return n.filter((([t])=>e.includes(t))).map((([t,n])=>[t.replaceAll("+"," "),n]))}function a(t,n,e){const r=Object.assign({},t,n);return Object.entries(t).forEach((([n])=>{const c=n,o=void 0!==e[c];r[c]=o?e[c]:t[c]})),r}export{a as assignValue,i as filterUnknownParams,o as filterUnknownParamsClient,e as getParams,c as isEqual,n as isSSR,t as typeOf};
