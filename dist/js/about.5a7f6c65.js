"use strict";(self["webpackChunkvisit"]=self["webpackChunkvisit"]||[]).push([[443],{1343:function(e,t,l){l.r(t),l.d(t,{default:function(){return V}});var a=l(3396),n=l(7139);const i={class:"p-4"},s={class:"d-flex justify-content-xl-between mb-5"},o=(0,a._)("br",null,null,-1),r=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-left",viewBox:"0 0 12 12"},[(0,a._)("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"})],-1),u=[r],c={class:"d-flex justify-content-between mb-3"},h=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-chevron-left",viewBox:"0 0 16 16"},[(0,a._)("path",{"fill-rule":"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})],-1),p={key:0},_={class:"row justify-content-center mb-3"},v=["id","onClick"],f=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-plus-lg",viewBox:"0 0 16 16"},[(0,a._)("path",{"fill-rule":"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})],-1),m=[f],w={class:"col-6 input-container"},g=["value","id"],b=(0,a._)("div",{class:"col-3 title-container"},"Shelf",-1),y=["id","onClick"],S=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-dash-lg",viewBox:"0 0 16 16"},[(0,a._)("path",{"fill-rule":"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"})],-1),x=[S],F={class:"row justify-content-center mb-3"},k=["id","onClick"],q=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-plus-lg",viewBox:"0 0 16 16"},[(0,a._)("path",{"fill-rule":"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})],-1),T=[q],C={class:"col-6 input-container"},z=["value","id"],I=(0,a._)("div",{class:"col-3 title-container"},"F/T",-1),j=["id","onClick"],B=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-dash-lg",viewBox:"0 0 16 16"},[(0,a._)("path",{"fill-rule":"evenodd",d:"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"})],-1),D=[B],O=(0,a._)("hr",null,null,-1),E={class:"d-flex justify-content-center pt-5"},K={class:"d-flex justify-content-center pt-5"},N={key:1,class:"d-flex justify-content-center"},H=(0,a._)("div",{class:"spinner-grow text-dark",role:"status"},[(0,a._)("span",{class:"visually-hidden"},"Loading...")],-1),J=[H];function L(e,t,l,r,d,f){const S=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",s,[(0,a._)("div",null,[(0,a.Uk)((0,n.zw)(r.query.shop_name)+" گرید "+(0,n.zw)(r.query.grade)+" ",1),o,(0,a.Uk)(" "+(0,n.zw)(r.query.user_name),1)]),(0,a._)("div",{id:"back_btn",onClick:t[0]||(t[0]=t=>e.$router.go(-1))},u)]),(0,a._)("div",c,[(0,a._)("h6",null,[(0,a.Uk)((0,n.zw)(r.query.type)+" ",1),h,(0,a.Uk)(" "+(0,n.zw)(r.query.brand),1)])]),r.data.length?((0,a.wg)(),(0,a.iD)("div",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.data,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a._)("p",{class:(0,n.C_)({"text-danger":0==e.is_main})},(0,n.zw)(t+1)+"."+(0,n.zw)(e.name),3),(0,a._)("div",_,[(0,a._)("button",{class:"btn btn-btn3 col-1 p-2",id:"btn_plus_Shelf_"+t,onClick:e=>r.increaseShelf(t)},m,8,v),(0,a._)("div",w,[(0,a._)("input",{type:"number",class:"input",placeholder:"عدد را وارد کنید",value:e.shelf,id:"input_Shelf_"+t},null,8,g)]),b,(0,a._)("button",{class:"btn btn-btn3 col-1 p-2",id:"btn_minus_Shelf_"+t,onClick:e=>r.decreaseShelf(t)},x,8,y)]),(0,a._)("div",F,[(0,a._)("button",{class:"btn btn-btn3 col-1 p-2",id:"btn_plus_FT_"+t,onClick:e=>r.increaseFT(t)},T,8,k),(0,a._)("div",C,[(0,a._)("input",{type:"number",class:"input",placeholder:"عدد را وارد کنید",value:e.FT,id:"input_FT_"+t},null,8,z)]),I,(0,a._)("button",{class:"btn btn-btn3 col-1 p-2",id:"btn_minus_FT_"+t,onClick:e=>r.decreaseFT(t)},D,8,j)]),O])))),128)),(0,a._)("div",E,[(0,a._)("button",{onClick:t[1]||(t[1]=(...e)=>r.submit&&r.submit(...e)),style:{width:"200px","text-align":"center"},class:"py-2 btn-btn mx-auto px-5"},"ثبت تغییرات")]),(0,a._)("div",K,[(0,a.Wm)(S,{style:{width:"200px","text-align":"center"},to:{name:"scores",query:r.query},class:"py-2 btn-btn mx-auto px-5"},{default:(0,a.w5)((()=>[(0,a.Uk)("جمع امتیاز")])),_:1},8,["to"])])])):((0,a.wg)(),(0,a.iD)("div",N,J))])}l(560);var M=l(2483),Z=l(4870),A={setup(){const e=(0,Z.iH)([]),t=()=>{axios.get("https://api.amadehlaziz.com:446/panel/products?api_key=w2fqxjKzdlx345NjQ7D99xz5cPp").then((t=>{e.value=t.data,e.value.forEach((e=>{"false"==u.value.own?(e.shelf=0,e.FT=0):(e.shelf=1,e.FT=0)}))})).then((()=>{let t=e.value.filter((e=>e.type==u.value.type&&e.brand==u.value.brand&&(e.grade==u.value.grade||"Z"==e.grade)));e.value=t;let l=[];e.value.forEach((e=>{l.push(e.id)})),axios.post("https://api.amadehlaziz.com:446/form/products_by_ids?form_id="+localStorage.getItem("form_id")+"&api_key=mJF2qVIOq22K1LvNBp9gDiOcK8e2p",{ids:l}).then((t=>{t.data.length>0?e.value.forEach((e=>{t.data.forEach((t=>{e.id==t.product_id&&("false"==u.value.own?(e.shelf=0,e.FT=0):(e.shelf=t.shelf,e.FT=t.FT))}))})):axios.get("https://api.amadehlaziz.com:446/form/last_shop_data/"+u.value.shop_id+"?api_key=mJF2qVIOq22K1LvNBp9gDiOcK8e2p").then((t=>{e.value.forEach((e=>{t.data.forEach((t=>{e.id==t.product_id&&("false"==u.value.own?(d.shelf=0,d.FT=0):(e.shelf=t.shelf,e.FT=t.FT))}))}))})).catch((e=>{console.log(e)}))})).catch((e=>{console.log(e)}))})).catch((e=>{console.log(e)}))},l=t=>{let l=parseInt(document.querySelector("#input_FT_"+t).value)||0;document.querySelector("#input_FT_"+t).value=l+1,e.value[t].FT=document.querySelector("#input_FT_"+t).value},n=t=>{let l=parseInt(document.querySelector("#input_FT_"+t).value)||0;l>0&&(document.querySelector("#input_FT_"+t).value=l-1,e.value[t].FT=document.querySelector("#input_FT_"+t).value)},i=t=>{let l=parseInt(document.querySelector("#input_Shelf_"+t).value)||0;document.querySelector("#input_Shelf_"+t).value=l+1,e.value[t].shelf=document.querySelector("#input_Shelf_"+t).value},s=t=>{let l=parseInt(document.querySelector("#input_Shelf_"+t).value)||0;l>0&&(document.querySelector("#input_Shelf_"+t).value=l-1,e.value[t].shelf=document.querySelector("#input_Shelf_"+t).value)},o=(0,M.yj)(),r=(0,M.tv)(),u=(0,Z.iH)({});(0,a.bv)((()=>{let e=new Promise((async(e,t)=>{await r.isReady(),u.value=o.query,o.query?e("Success"):t("Error")}));e.then((()=>{t()})).catch((e=>{console.error(e)})),h.value=56==JSON.parse(localStorage.getItem("brands")).length}));const c=()=>{let l=[];e.value.forEach((e=>{l.push({product_id:e.id,shelf:e.shelf,FT:e.FT})})),axios.post("https://api.amadehlaziz.com:446/form/add_products_to_form_data?api_key=mJF2qVIOq22K1LvNBp9gDiOcK8e2p",{form_id:localStorage.getItem("form_id"),product_info:l}).then((e=>{if(200===e.status){t();let e=JSON.parse(localStorage.getItem("brands"))||[];e.push({typeId:u.value.typeId,brandId:u.value.brandId}),localStorage.setItem("brands",JSON.stringify(e))}})).then((()=>{window.location="/brands?shop_id="+u.value.shop_id+"&shop_name="+u.value.shop_name+"&grade="+u.value.grade+"&user_id="+u.value.user_id+"&user_name="+u.value.user_name+"&date="+u.value.date+"&time="+u.value.time+"&type="+u.value.type})).catch((e=>{console.error(e)}))},h=(0,Z.iH)(!1);return{data:e,increaseFT:l,decreaseFT:n,increaseShelf:i,decreaseShelf:s,route:o,router:r,query:u,getProducts:t,submit:c,showScoresBtn:h}}},U=l(89);const P=(0,U.Z)(A,[["render",L]]);var V=P}}]);
//# sourceMappingURL=about.5a7f6c65.js.map