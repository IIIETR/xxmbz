import{g as s,o as a,c as e,w as t,a as l,p as i,u as c,f as o,t as r,i as m,j as p,h as u,q as f,l as n}from"./index-e4062cb7.js";import{_ as d}from"./uni-icons.6490ace8.js";import{r as _}from"./apis.299a732a.js";import{g as y,a as g,b as h,c as x}from"./system.02b54df1.js";import{_ as j}from"./_plugin-vue_export-helper.1b428a4d.js";import{f as b}from"./common.05332ce7.js";const k=j({__name:"costom-nav-bar",props:{title:{type:String,default:""}},setup:f=>(n,j)=>{const b=m,k=_(s("uni-icons"),d),v=p,w=u;return a(),e(b,{class:"layout"},{default:t((()=>[l(b,{class:"navbar"},{default:t((()=>[l(b,{class:"statusBar",style:i({height:c(y)()+"px"})},null,8,["style"]),l(b,{class:"titleBar",style:i({height:c(g)()+"px",marginLeft:c(h)()+"px"})},{default:t((()=>[l(b,{class:"title"},{default:t((()=>[o(r(f.title),1)])),_:1}),l(w,{url:"/pages/search/search",class:"search"},{default:t((()=>[l(k,{class:"icon",type:"search",color:"#888",size:"18"}),l(v,{class:"text"},{default:t((()=>[o("搜索")])),_:1})])),_:1})])),_:1},8,["style"])])),_:1}),l(b,{class:"fill",style:i({height:c(x)()+"px"})},null,8,["style"])])),_:1})}},[["__scopeId","data-v-1d3a3f0a"]]),v=j({__name:"theme-item",props:{isMore:{type:Boolean,default:!1},item:{type:Object,default:()=>({name:"默认名称",picurl:"../../common/images/classify1.jpg",updateTime:Date.now()-18e6})}},setup:i=>(p,y)=>{const g=n,h=m,x=u,j=_(s("uni-icons"),d);return a(),e(h,{class:"themeIem"},{default:t((()=>[i.isMore?f("",!0):(a(),e(x,{key:0,url:"/pages/classlist/classlist?id="+i.item._id+"&name="+i.item.name,class:"box"},{default:t((()=>[l(g,{class:"pic",src:i.item.picurl,mode:"aspectFill"},null,8,["src"]),l(h,{class:"mask"},{default:t((()=>[o(r(i.item.name),1)])),_:1}),null!=c(b)(i.item.updateTime)?(a(),e(h,{key:0,class:"tab"},{default:t((()=>[o(r(c(b)(i.item.updateTime))+"更新",1)])),_:1})):f("",!0)])),_:1},8,["url"])),i.isMore?(a(),e(x,{key:1,url:"/pages/classify/classify","open-type":"reLaunch",class:"box more"},{default:t((()=>[l(g,{class:"pic",src:"/xxmwall/assets/more-14a1a72b.jpg",mode:"aspectFill"}),l(h,{class:"mask"},{default:t((()=>[l(j,{type:"more-filled",size:"34",color:"#fff"}),l(h,{class:"text"},{default:t((()=>[o("更多")])),_:1})])),_:1})])),_:1})):f("",!0)])),_:1})}},[["__scopeId","data-v-c918ea84"]]);export{k as _,v as a};
