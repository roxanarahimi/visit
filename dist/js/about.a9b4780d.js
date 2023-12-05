"use strict";(self["webpackChunkvisit"]=self["webpackChunkvisit"]||[]).push([[443],{3953:function(e,t,l){l.r(t),l.d(t,{default:function(){return J}});var a=l(3396),n=l(7139);const i={class:"p-4"},o={class:"d-flex justify-content-xl-between mb-5"},s=(0,a._)("br",null,null,-1),r=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-left",viewBox:"0 0 12 12"},[(0,a._)("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"})],-1),u=[r],c={class:"d-flex justify-content-between mb-3"},d=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-chevron-left",viewBox:"0 0 16 16"},[(0,a._)("path",{"fill-rule":"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})],-1),h={key:0},_={class:"row justify-content-center mb-3"},p=["id","onClick"],v=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-plus-lg",viewBox:"0 0 16 16"},[(0,a._)("path",{"fill-rule":"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})],-1),f=[v],w={class:"col-6 input-container"},b=["value","id"],g=(0,a._)("div",{class:"col-3 title-container"},"Shelf",-1),m=["id","onClick"],y=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-dash-lg",viewBox:"0 0 16 16"},[(0,a._)("path",{"fill-rule":"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"})],-1),x=[y],k={class:"row justify-content-center mb-3"},S=["id","onClick"],q=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-plus-lg",viewBox:"0 0 16 16"},[(0,a._)("path",{"fill-rule":"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})],-1),F=[q],T={class:"col-6 input-container"},C=["value","id"],z=(0,a._)("div",{class:"col-3 title-container"},"F/T",-1),j=["id","onClick"],B=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-dash-lg",viewBox:"0 0 16 16"},[(0,a._)("path",{"fill-rule":"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"})],-1),D=[B],I=(0,a._)("hr",null,null,-1),E={class:"d-flex justify-content-center pt-5"},K={class:"d-flex justify-content-center pt-5"},M={key:1,class:"d-flex justify-content-center"},Z=(0,a._)("div",{class:"spinner-grow text-dark",role:"status"},[(0,a._)("span",{class:"visually-hidden"},"Loading...")],-1),A=[Z];function H(e,t,l,r,v,y){const q=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",o,[(0,a._)("div",null,[(0,a.Uk)((0,n.zw)(r.query.shop_name)+" گرید "+(0,n.zw)(r.query.grade)+" ",1),s,(0,a.Uk)(" "+(0,n.zw)(r.query.user_name),1)]),(0,a._)("div",{id:"back_btn",onClick:t[0]||(t[0]=t=>e.$router.go(-1))},u)]),(0,a._)("div",c,[(0,a._)("h6",null,[(0,a.Uk)((0,n.zw)(r.query.type)+" ",1),d,(0,a.Uk)(" "+(0,n.zw)(r.query.brand),1)])]),r.data.length?((0,a.wg)(),(0,a.iD)("div",h,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.data,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a._)("p",{class:(0,n.C_)({"text-danger":0==e.is_main})},(0,n.zw)(t+1)+"."+(0,n.zw)(e.name),3),(0,a._)("div",_,[(0,a._)("button",{class:"btn btn-btn3 col-1 p-2",id:"btn_plus_Shelf_"+t,onClick:e=>r.increaseShelf(t)},f,8,p),(0,a._)("div",w,[(0,a._)("input",{type:"number",class:"input",placeholder:"عدد را وارد کنید",value:e.shelf,id:"input_Shelf_"+t},null,8,b)]),g,(0,a._)("button",{class:"btn btn-btn3 col-1 p-2",id:"btn_minus_Shelf_"+t,onClick:e=>r.decreaseShelf(t)},x,8,m)]),(0,a._)("div",k,[(0,a._)("button",{class:"btn btn-btn3 col-1 p-2",id:"btn_plus_FT_"+t,onClick:e=>r.increaseFT(t)},F,8,S),(0,a._)("div",T,[(0,a._)("input",{type:"number",class:"input",placeholder:"عدد را وارد کنید",value:e.FT,id:"input_FT_"+t},null,8,C)]),z,(0,a._)("button",{class:"btn btn-btn3 col-1 p-2",id:"btn_minus_FT_"+t,onClick:e=>r.decreaseFT(t)},D,8,j)]),I])))),128)),(0,a._)("div",E,[(0,a._)("button",{onClick:t[1]||(t[1]=(...e)=>r.submit&&r.submit(...e)),style:{width:"200px","text-align":"center"},class:"py-2 btn-btn mx-auto px-5"},"ثبت تغییرات")]),(0,a._)("div",K,[(0,a.Wm)(q,{style:{width:"200px","text-align":"center"},to:{name:"scores",query:r.query},class:"py-2 btn-btn mx-auto px-5"},{default:(0,a.w5)((()=>[(0,a.Uk)("جمع امتیاز")])),_:1},8,["to"])])])):((0,a.wg)(),(0,a.iD)("div",M,A))])}l(560);var L=l(2483),U=l(4870),O={setup(){const e=(0,U.iH)([]),t=()=>{axios.get("https://api.amadehlaziz.com:446/panel/products?api_key=w2fqxjKzdlx345NjQ7D99xz5cPp").then((t=>{e.value=t.data,e.value.forEach((e=>{e.shelf=1,e.FT=0}))})).then((()=>{let t=e.value.filter((e=>e.type==u.value.type&&e.brand==u.value.brand&&(e.grade==u.value.grade||"Z"==e.grade)));e.value=t;let l=[];e.value.forEach((e=>{l.push(e.id)})),axios.post("https://api.amadehlaziz.com:446/form/products_by_ids?form_id="+localStorage.getItem("form_id")+"&api_key=mJF2qVIOq22K1LvNBp9gDiOcK8e2p",{ids:l}).then((t=>{console.log("dataaaaa",t.data),e.value.forEach((e=>{t.data.forEach((t=>{e.id==t.product_id&&(e.shelf=t.shelf,e.FT=t.FT)}))}))})).catch((e=>{console.log(e)}))})).catch((e=>{console.log(e)}))},l=t=>{let l=parseInt(document.querySelector("#input_FT_"+t).value)||0;document.querySelector("#input_FT_"+t).value=l+1,e.value[t].FT=document.querySelector("#input_FT_"+t).value},n=t=>{let l=parseInt(document.querySelector("#input_FT_"+t).value)||0;l>0&&(document.querySelector("#input_FT_"+t).value=l-1,e.value[t].FT=document.querySelector("#input_FT_"+t).value)},i=t=>{let l=parseInt(document.querySelector("#input_Shelf_"+t).value)||0;document.querySelector("#input_Shelf_"+t).value=l+1,e.value[t].shelf=document.querySelector("#input_Shelf_"+t).value},o=t=>{let l=parseInt(document.querySelector("#input_Shelf_"+t).value)||0;l>0&&(document.querySelector("#input_Shelf_"+t).value=l-1,e.value[t].shelf=document.querySelector("#input_Shelf_"+t).value)},s=(0,L.yj)(),r=(0,L.tv)(),u=(0,U.iH)({});(0,a.bv)((()=>{let e=new Promise((async(e,t)=>{await r.isReady(),u.value=s.query,s.query?e("Success"):t("Error")}));e.then((()=>{t()})).catch((e=>{console.error(e)}))}));const c=()=>{let l=[];e.value.forEach((e=>{l.push({product_id:e.id,shelf:e.shelf,FT:e.FT})})),axios.post("https://api.amadehlaziz.com:446/form/add_products_to_form_data?api_key=mJF2qVIOq22K1LvNBp9gDiOcK8e2p",{form_id:localStorage.getItem("form_id"),product_info:l}).then((e=>{console.log("response",e.data),t()})).catch((e=>{console.error(e)})),document.querySelector("#back_btn").click()};return{data:e,increaseFT:l,decreaseFT:n,increaseShelf:i,decreaseShelf:o,route:s,router:r,query:u,getProducts:t,submit:c}}},N=l(89);const P=(0,N.Z)(O,[["render",H]]);var J=P}}]);
//# sourceMappingURL=about.a9b4780d.js.map