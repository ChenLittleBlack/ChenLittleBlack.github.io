import{_ as p,r as a,o as t,c,w as i,a as d,b as u,F as h,d as n,e as w,p as v,f as j}from"./main.9f8e73dc.js";const b=""+new URL("1.fb6e2d08.jpg",import.meta.url).href,y=""+new URL("2.fc2233da.jpg",import.meta.url).href,x=""+new URL("3.fdc1cfc7.jpg",import.meta.url).href,$=""+new URL("4.e9251cf2.jpg",import.meta.url).href,L=""+new URL("5.173196cf.jpg",import.meta.url).href,R=""+new URL("6.4d0a5c66.jpg",import.meta.url).href,U=""+new URL("7.3ee272f0.jpg",import.meta.url).href;function I(e){let s=[];return e==="scenery"&&(s=Object.values(Object.assign({"../assets/images/scenery/1.jpg":b,"../assets/images/scenery/2.jpg":y,"../assets/images/scenery/3.jpg":x,"../assets/images/scenery/4.jpg":$,"../assets/images/scenery/5.jpg":L,"../assets/images/scenery/6.jpg":R,"../assets/images/scenery/7.jpg":U}))),s}const k={name:"AdSwipe",data(){return{images:I("scenery").sort(()=>.5-Math.random())}}},S=["src"];function B(e,s,m,g,r,l){const o=a("van-swipe-item"),f=a("van-swipe");return t(),c(f,{height:"240",autoplay:3e3,"lazy-render":""},{default:i(()=>[(t(!0),d(h,null,u(r.images,_=>(t(),c(o,{key:_},{default:i(()=>[n("img",{src:_,alt:"",style:{"box-sizing":"border-box",width:"100%",height:"100%"}},null,8,S)]),_:2},1024))),128))]),_:1})}const A=p(k,[["render",B]]),F=""+new URL("background-word.28efae89.png",import.meta.url).href;const z={name:"HomePage",components:{AdSwipe:A}},C=e=>(v("data-v-a8dff81e"),e=e(),j(),e),N={class:"app-first-div"},O=C(()=>n("div",{class:"logo-div"},[n("img",{class:"logo-word-img",src:F,alt:""})],-1));function V(e,s,m,g,r,l){const o=a("ad-swipe");return t(),d("div",N,[w(o),O])}const H=p(z,[["render",V],["__scopeId","data-v-a8dff81e"]]);export{H as default};
