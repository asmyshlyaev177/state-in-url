import{useRouter as e,useSearchParams as t}from"next/navigation";import a from"react";import{parseSPObj as r}from"../../parseSPObj.mjs";import{useUrlStateBase as s}from"../../useUrlStateBase/useUrlStateBase.mjs";import{routerHistory as l,isSSR as o,filterUnknownParams as c,filterUnknownParamsClient as u}from"../../utils.mjs";function i(i,p){const n="defaultState"in i?i.defaultState:i,f="defaultState"in i?i.searchParams:p?.searchParams,S="defaultState"in i?i.useHistory:p?.useHistory,d="defaultState"in i?{scroll:i.scroll,replace:i.replace}:{scroll:p?.scroll,replace:p?.replace},j=void 0===S||S?l:e(),{state:U,updateState:b,updateUrl:g,reset:P,getState:h}=s(n,j,(({parse:e})=>o?r(c(n,f),n):e(u(n)))),k=a.useMemo((()=>({...m,...d})),[]),v=a.useCallback(((e,t)=>g(e,{...k,...t})),[g]),x=t();a.useEffect((()=>{b(c(n,r(Object.fromEntries([...x.entries()]),n)))}),[x]);const y=a.useCallback((e=>{P({...k,...e})}),[P]);return{setState:b,updateState:b,setUrl:v,updateUrl:v,urlState:U,state:U,reset:y,getState:h}}const m={replace:!0,scroll:!1};export{i as useUrlState};
