import{_ as g,r as n,o as s,c as i,w as p,a as r,b as h,F as w,d as v,p as j,e as b,f as m}from"./main.19fba71e.js";const y=""+new URL("1.fb6e2d08.jpg",import.meta.url).href,$=""+new URL("2.fc2233da.jpg",import.meta.url).href,L=""+new URL("3.fdc1cfc7.jpg",import.meta.url).href,k=""+new URL("4.e9251cf2.jpg",import.meta.url).href,x=""+new URL("5.173196cf.jpg",import.meta.url).href,R=""+new URL("6.4d0a5c66.jpg",import.meta.url).href,U=""+new URL("7.3ee272f0.jpg",import.meta.url).href;function I(e){let t=[];return e==="scenery"&&(t=Object.values(Object.assign({"../assets/images/scenery/1.jpg":y,"../assets/images/scenery/2.jpg":$,"../assets/images/scenery/3.jpg":L,"../assets/images/scenery/4.jpg":k,"../assets/images/scenery/5.jpg":x,"../assets/images/scenery/6.jpg":R,"../assets/images/scenery/7.jpg":U}))),t}const S={name:"AdSwipe",data(){return{images:[]}},created(){this.images=I("scenery").sort(()=>.5-Math.random())}},B=["src","onClick"];function C(e,t,d,l,o,f){const a=n("van-swipe-item"),u=n("van-swipe");return s(),i(u,{height:"240",autoplay:3e3},{default:p(()=>[(s(!0),r(w,null,h(o.images,(_,c)=>(s(),i(a,{key:_},{default:p(()=>[(s(),r("img",{key:c,src:_,alt:"",style:{"box-sizing":"border-box",width:"100%",height:"100%"},onClick:E=>e.$showImagePreview({images:o.images,startPosition:c})},null,8,B))]),_:2},1024))),128))]),_:1})}const A=g(S,[["render",C]]),F=""+new URL("background-word.28efae89.png",import.meta.url).href;const P={name:"HomePage",components:{AdSwipe:A}},N=e=>(j("data-v-a8dff81e"),e=e(),b(),e),O={class:"app-first-div"},V=N(()=>m("div",{class:"logo-div"},[m("img",{class:"logo-word-img",src:F,alt:""})],-1));function z(e,t,d,l,o,f){const a=n("ad-swipe");return s(),r("div",O,[v(a),V])}const M=g(P,[["render",z],["__scopeId","data-v-a8dff81e"]]);export{M as default};
