import{o as a,c as e,w as s,a as l,r as t,i,b as r,d as c,e as u,F as o,f as d,g as n,h as m,S as f,j as _,k as p,t as v,s as y,n as g,l as x,m as b}from"./index-98cf14c9.js";import{_ as k,a as h}from"./theme-item.6fe8035e.js";import{o as j,a as w,b as z,c as F,d as C,e as L,r as P}from"./apis.457e15cf.js";import{_ as $}from"./uni-icons.351ae340.js";import{_ as I}from"./uni-dateformat.693dc2f6.js";import{_ as M}from"./_plugin-vue_export-helper.1b428a4d.js";import"./system.a89fb574.js";import"./common.95d914c7.js";const S=M({},[["render",function(r,c){const u=i;return a(),e(u,{class:"common-title"},{default:s((()=>[l(u,{class:"name"},{default:s((()=>[t(r.$slots,"name",{},void 0,!0)])),_:3}),l(u,{class:"custome"},{default:s((()=>[t(r.$slots,"custome",{},void 0,!0)])),_:3})])),_:3})}],["__scopeId","data-v-59d4d41b"]]),B=M({__name:"index",setup(t){const M=r([]),B=r([]),D=r([]),q=r([]);return j((a=>({title:"xxmbz",path:"/pages/index/index"}))),w((()=>({title:"xxmbz"}))),(async()=>{let a=await z();M.value=a.data})(),(async()=>{let a=await F();B.value=a.data})(),(async()=>{let a=await C({pageSize:3});D.value=a.data})(),(async()=>{let a=await L({select:!0});q.value=a.data})(),(t,r)=>{const j=P(n("costom-nav-bar"),k),w=x,z=m,F=b,C=f,L=i,A=P(n("uni-icons"),$),E=_,G=P(n("uni-dateformat"),I),H=P(n("common-title"),S),J=p,K=P(n("theme-item"),h);return a(),e(L,{class:"homeLayout pageBg"},{default:s((()=>[l(j,{title:"推荐"}),l(L,{class:"baner"},{default:s((()=>[l(C,{"indicator-dots":"","indicator-color":"rgba(255,255,255,0.5)","indicator-active-color":"#fff",autoplay:"",circular:""},{default:s((()=>[(a(!0),c(o,null,u(M.value,((t,i)=>(a(),e(F,{key:t._id},{default:s((()=>["miniProgram"==t.target?(a(),e(z,{key:0,url:t.url,target:"miniProgram","app-id":t.appid,class:"like"},{default:s((()=>[l(w,{src:t.picurl,mode:"aspectFill"},null,8,["src"])])),_:2},1032,["url","app-id"])):(a(),e(z,{key:1,url:`/pages/classlist/classlist?${t.url}`,class:"like"},{default:s((()=>[l(w,{src:t.picurl,mode:"aspectFill"},null,8,["src"])])),_:2},1032,["url"]))])),_:2},1024)))),128))])),_:1})])),_:1}),l(L,{class:"notice"},{default:s((()=>[l(L,{class:"left"},{default:s((()=>[l(A,{type:"sound-filled",size:"20"}),l(E,{class:"text"},{default:s((()=>[d("公告")])),_:1})])),_:1}),l(L,{class:"center"},{default:s((()=>[l(C,{vertical:"",autoplay:"",interval:"1500",duration:"300",circular:""},{default:s((()=>[(a(!0),c(o,null,u(D.value,(t=>(a(),e(F,{key:t._id},{default:s((()=>[l(z,{url:"/pages/notice/detail?id="+t._id},{default:s((()=>[d(v(t.title),1)])),_:2},1032,["url"])])),_:2},1024)))),128))])),_:1})])),_:1}),l(L,{class:"reight"},{default:s((()=>[l(A,{type:"right",size:"16",color:"#333"})])),_:1})])),_:1}),l(L,{class:"select"},{default:s((()=>[l(H,null,{name:s((()=>[d("每日推荐")])),custome:s((()=>[l(L,{class:"date"},{default:s((()=>[l(L,{class:"text"},{default:s((()=>[l(G,{date:Date.now(),format:"dd号"},null,8,["date"])])),_:1}),l(A,{type:"calendar",size:"18"})])),_:1})])),_:1}),l(L,{class:"content"},{default:s((()=>[l(J,{"scroll-x":""},{default:s((()=>[(a(!0),c(o,null,u(B.value,(t=>(a(),e(L,{class:"box",onClick:a=>{return e=t._id,y("storageClassList",B.value),void g({url:"/pages/preview/preview?id="+e});var e},key:t._id},{default:s((()=>[l(w,{src:t.smallPicurl,mode:"aspectFill"},null,8,["src"])])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),l(L,{class:"theme"},{default:s((()=>[l(H,null,{name:s((()=>[d("专题精选")])),custome:s((()=>[l(z,{url:"/pages/classify/classify","open-type":"reLaunch",class:"more"},{default:s((()=>[d("More+")])),_:1})])),_:1}),l(L,{class:"content"},{default:s((()=>[(a(!0),c(o,null,u(q.value,(s=>(a(),e(K,{item:s,key:s._id},null,8,["item"])))),128)),l(K,{isMore:!0})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-96f338b3"]]);export{B as default};
