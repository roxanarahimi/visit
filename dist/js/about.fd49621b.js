"use strict";(self["webpackChunkvisit"]=self["webpackChunkvisit"]||[]).push([[443],{4576:function(e,t,l){l.r(t),l.d(t,{default:function(){return K}});var n=l(3396),a=l(7139);const i={class:"p-4"},u={class:"d-flex justify-content-xl-between mb-5"},s=(0,n._)("br",null,null,-1),r=(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-left",viewBox:"0 0 12 12"},[(0,n._)("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"})],-1),o=[r],c={class:"d-flex justify-content-between mb-3"},d=(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-chevron-left",viewBox:"0 0 16 16"},[(0,n._)("path",{"fill-rule":"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})],-1),h={key:0},p={class:"row justify-content-center mb-3"},_=["id","onClick"],v=(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-plus-lg",viewBox:"0 0 16 16"},[(0,n._)("path",{"fill-rule":"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})],-1),f=[v],w={class:"col-6 input-container"},b=["value","id"],g=(0,n._)("div",{class:"col-3 title-container"},"Shelf",-1),y=["id","onClick"],m=(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-dash-lg",viewBox:"0 0 16 16"},[(0,n._)("path",{"fill-rule":"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"})],-1),S=[m],x={class:"row justify-content-center mb-3"},k=["id","onClick"],q=(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-plus-lg",viewBox:"0 0 16 16"},[(0,n._)("path",{"fill-rule":"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})],-1),F=[q],T={class:"col-6 input-container"},C=["value","id"],z=(0,n._)("div",{class:"col-3 title-container"},"F/T",-1),j=["id","onClick"],I=(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-dash-lg",viewBox:"0 0 16 16"},[(0,n._)("path",{"fill-rule":"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"})],-1),E=[I],B=(0,n._)("hr",null,null,-1),D={class:"d-flex justify-content-center pt-5"},M={class:"d-flex justify-content-center pt-5"},Z={key:1,class:"d-flex justify-content-center"},A=(0,n._)("div",{class:"spinner-grow text-dark",role:"status"},[(0,n._)("span",{class:"visually-hidden"},"Loading...")],-1),H=[A];function U(e,t,l,r,v,m){const q=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",u,[(0,n._)("div",null,[(0,n.Uk)((0,a.zw)(r.query.shop_name)+" گرید "+(0,a.zw)(r.query.grade)+" ",1),s,(0,n.Uk)(" "+(0,a.zw)(r.query.user_name),1)]),(0,n._)("div",{onClick:t[0]||(t[0]=t=>e.$router.go(-1))},o)]),(0,n._)("div",c,[(0,n._)("h6",null,[(0,n.Uk)((0,a.zw)(r.query.type)+" ",1),d,(0,n.Uk)(" "+(0,a.zw)(r.query.brand),1)])]),r.data.length?((0,n.wg)(),(0,n.iD)("div",h,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.data,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t},[(0,n._)("p",{class:(0,a.C_)({"text-danger":0==e.is_main})},(0,a.zw)(t+1)+"."+(0,a.zw)(e.name),3),(0,n._)("div",p,[(0,n._)("button",{class:"btn btn-btn3 col-1 p-2",id:"btn_plus_Shelf_"+t,onClick:e=>r.increaseShelf(t)},f,8,_),(0,n._)("div",w,[(0,n._)("input",{type:"number",class:"input",placeholder:"عدد را وارد کنید",value:e.shelf,id:"input_Shelf_"+t},null,8,b)]),g,(0,n._)("button",{class:"btn btn-btn3 col-1 p-2",id:"btn_minus_Shelf_"+t,onClick:e=>r.decreaseShelf(t)},S,8,y)]),(0,n._)("div",x,[(0,n._)("button",{class:"btn btn-btn3 col-1 p-2",id:"btn_plus_FT_"+t,onClick:e=>r.increaseFT(t)},F,8,k),(0,n._)("div",T,[(0,n._)("input",{type:"number",class:"input",placeholder:"عدد را وارد کنید",value:e.FT,id:"input_FT_"+t},null,8,C)]),z,(0,n._)("button",{class:"btn btn-btn3 col-1 p-2",id:"btn_minus_FT_"+t,onClick:e=>r.decreaseFT(t)},E,8,j)]),B])))),128)),(0,n._)("div",D,[(0,n._)("button",{onClick:t[1]||(t[1]=(...e)=>r.submit&&r.submit(...e)),style:{width:"200px","text-align":"center"},class:"py-2 btn-btn mx-auto px-5"},"ثبت تغییرات")]),(0,n._)("div",M,[(0,n.Wm)(q,{style:{width:"200px","text-align":"center"},to:{name:"scores",query:r.query},class:"py-2 btn-btn mx-auto px-5"},{default:(0,n.w5)((()=>[(0,n.Uk)("جمع امتیاز")])),_:1},8,["to"])])])):((0,n.wg)(),(0,n.iD)("div",Z,H))])}l(560);var N=l(2483),J=l(4870),L={setup(){const e=(0,J.iH)([]),t=()=>{axios.get("https://api.amadehlaziz.com:446/panel/products?api_key=w2fqxjKzdlx345NjQ7D99xz5cPp").then((t=>{e.value=t.data,e.value.forEach((e=>{e.shelf=1,e.FT=0}))})).then((()=>{let t=e.value.filter((e=>e.type==o.value.type&&e.brand==o.value.brand&&(e.grade==o.value.grade||"Z"==e.grade)));e.value=t,e.value.forEach((e=>{let t=JSON.parse(localStorage.getItem("products"));t.forEach((t=>{t.brand==o.value.brand&&t.type==o.value.type&&t.shop_id==o.value.shop_id&&t.user_id==o.value.user_id&&t.info.forEach((t=>{console.log("d",t,e),t.product_id==e.id&&(e.shelf=t.shelf,e.FT=t.FT)}))}))}))})).catch((e=>{console.log(e)}))},l=t=>{let l=parseInt(document.querySelector("#input_FT_"+t).value)||0;document.querySelector("#input_FT_"+t).value=l+1,e.value[t].FT=document.querySelector("#input_FT_"+t).value},a=t=>{let l=parseInt(document.querySelector("#input_FT_"+t).value)||0;l>0&&(document.querySelector("#input_FT_"+t).value=l-1,e.value[t].FT=document.querySelector("#input_FT_"+t).value)},i=t=>{let l=parseInt(document.querySelector("#input_Shelf_"+t).value)||0;document.querySelector("#input_Shelf_"+t).value=l+1,e.value[t].shelf=document.querySelector("#input_Shelf_"+t).value},u=t=>{let l=parseInt(document.querySelector("#input_Shelf_"+t).value)||0;l>0&&(document.querySelector("#input_Shelf_"+t).value=l-1,e.value[t].shelf=document.querySelector("#input_Shelf_"+t).value)},s=(0,N.yj)(),r=(0,N.tv)(),o=(0,J.iH)({});(0,n.bv)((()=>{let e=new Promise((async(e,t)=>{await r.isReady(),o.value=s.query,s.query?e("Success"):t("Error")}));e.then((()=>{t()})).catch((e=>{console.error(e)}))}));const c=()=>{let t=[];e.value.forEach((e=>{t.push({product_id:e.id,shelf:e.shelf,FT:e.FT})}));let l={brand:o.value.brand,type:o.value.type,shop_id:o.value.shop_id,user_id:o.value.user_id,info:t},n=JSON.parse(localStorage.getItem("products"));n?n.forEach((e=>{e.brand==l.brand&&e.type==l.type&&e.shop_id==l.shop_id&&e.user_id==l.user_id?e.info=t:n.push(l)})):(n=[],n.push(l)),localStorage.setItem("products",JSON.stringify(n)),console.log(localStorage.getItem("products"))};return{data:e,increaseFT:l,decreaseFT:a,increaseShelf:i,decreaseShelf:u,route:s,router:r,query:o,getProducts:t,submit:c}}},O=l(89);const P=(0,O.Z)(L,[["render",U]]);var K=P}}]);
//# sourceMappingURL=about.fd49621b.js.map