import{useRouter as t,useSearchParams as e}from"next/navigation";import a from"react";import{parseSPObj as r}from"../../parseSPObj.mjs";import{useUrlStateBase as s}from"../../useUrlStateBase/useUrlStateBase.mjs";import{isSSR as o,filterUnknownParams as m,filterUnknownParamsClient as p}from"../../utils.mjs";function u({defaultState:u,searchParams:i,...l}){const n=t(),{state:f,updateState:S,updateUrl:d,getState:j}=s(u,n,(({parse:t})=>o()?r(m(u,i),u):t(p(u)))),U=a.useCallback(((t,e)=>{const a={...c,...l,...e};d(t,a)}),[d,l]),b=e();return a.useEffect((()=>{S(m(u,r(Object.fromEntries([...b.entries()]),u)))}),[b]),{updateState:S,updateUrl:U,state:f,getState:j}}const c={replace:!0,scroll:!1};export{u as useUrlState};