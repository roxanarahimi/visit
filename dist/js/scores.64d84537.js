"use strict";(self["webpackChunkvisit"]=self["webpackChunkvisit"]||[]).push([[499],{8e3:function(e,t,a){a.r(t),a.d(t,{default:function(){return H}});var c=a(3396),_=a(7139);const o={class:"d-flex justify-content-xl-between mb-5"},l=(0,c._)("br",null,null,-1),i=(0,c._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-left",viewBox:"0 0 12 12"},[(0,c._)("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"})],-1),n=[i],s={class:"row px-2"},r={class:"table table-bordered border-dark"},d=(0,c._)("thead",null,[(0,c._)("tr",null,[(0,c._)("th",{scope:"col",class:"border-0 border-bottom border-dark",style:{width:"40px"}}),(0,c._)("th",{scope:"col",class:"border-0 border-bottom border-dark"},"آیتم"),(0,c._)("th",{scope:"col",class:"border-0 border-bottom border-dark"},"فضا"),(0,c._)("th",{scope:"col",class:"border-0 border-bottom border-dark"},"امتیاز")])],-1),u={scope:"row",style:{width:"40px"}},h=["onClick"],p={key:0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-check2",viewBox:"0 0 14 14"},b=(0,c._)("path",{d:"M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"},null,-1),m=[b],k={class:"border-end-0"},g=(0,c._)("hr",null,null,-1),f={class:"d-flex justify-content-center col-9 mx-auto mb-3"},w=(0,c._)("div",null,[(0,c._)("div",{class:"d-flex justify-content-between"},[(0,c._)("p",null,"جمع امتیاز عدم:"),(0,c._)("input",{id:"notExist",class:"rounded text-center py-1",style:{"background-color":"lightgray",width:"100px",height:"30px",border:"none"}})]),(0,c._)("div",{class:"d-flex justify-content-between"},[(0,c._)("p",null,"جمع امتیاز چیدمان:"),(0,c._)("input",{id:"exist",class:"rounded text-center py-1",style:{"background-color":"lightgray",width:"100px",height:"30px",border:"none"}})])],-1),x={class:"d-flex justify-content-center col-9 mx-auto"};function y(e,t,a,i,b,y){return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c._)("div",o,[(0,c._)("div",null,[(0,c.Uk)((0,_.zw)(i.query.shop_name)+" گرید "+(0,_.zw)(i.query.grade)+" ",1),l,(0,c.Uk)(" "+(0,_.zw)(i.query.user_name),1)]),(0,c._)("div",{onClick:t[0]||(t[0]=t=>e.$router.go(-1))},n)]),(0,c._)("div",s,[(0,c._)("table",r,[d,(0,c._)("tbody",null,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(i.data,((e,t)=>((0,c.wg)(),(0,c.iD)("tr",{key:t},[(0,c._)("th",u,[(0,c._)("div",{onClick:e=>i.checkboxToggle(t),class:"check d-flex justify-content-center"},[e.checked?((0,c.wg)(),(0,c.iD)("svg",p,m)):(0,c.kq)("",!0)],8,h)]),(0,c._)("td",null,(0,_.zw)(e.title),1),(0,c._)("td",null,(0,_.zw)(e.space)+"%",1),(0,c._)("td",k,(0,_.zw)(e.score),1)])))),128))])]),g,(0,c._)("div",f,[(0,c._)("button",{class:"btn btn-btn2 px-5",onClick:t[1]||(t[1]=(...e)=>i.calculate&&i.calculate(...e))},"محاسبه امتیازات")]),w,(0,c._)("div",x,[(0,c._)("button",{onClick:t[2]||(t[2]=(...e)=>i.submit&&i.submit(...e)),class:"btn btn-btn2 px-5"},"ثبت نهایی فرم")])])],64)}var v=a(2483),q=a(4870),z={name:"Scores",setup(){const e=(0,v.yj)(),t=(0,v.tv)(),a=(0,q.iH)({});(0,c.bv)((async()=>{await t.isReady(),a.value=e.query}));const _=(0,q.iH)(0),o=(0,q.iH)(0),l=(0,q.iH)([{name:"noodelite_60_10",title:"نودالیت نودالیت",space:60,score:10,checked:!1},{name:"noodle_amadeh_noodiland_20_5",title:"نودالیت آماده و نودیلند",space:30,score:5,checked:!1},{name:"extract_elite_80_10",title:"عصاره الیت",space:80,score:10,checked:!1},{name:"extract_amadeh_noodiland_10_5",title:"عصاره آماده و نودیلند",space:10,score:5,checked:!1},{name:"soup_elite_50_10",title:"سوپ الیت",space:50,score:10,checked:!1},{name:"soup_amadeh_noodiland_20_5",title:"سوپ آماده و نودیلند",space:20,score:5,checked:!1},{name:"spice_25_3",title:"ادویه",space:25,score:3,checked:!1},{name:"chocolate_wafer_kanti_30_10",title:"ویفر شکلاتی و کانتی",space:30,score:10,checked:!1},{name:"tombi_15_3",title:"تامبی",space:15,score:3,checked:!1},{name:"select_15_2",title:"سلکت",space:15,score:2,checked:!1},{name:"breakfast_chocolate_30_10",title:"شکلات صبحانه",space:30,score:10,checked:!1},{name:"glass_box_coffee_40_7",title:"قهوه های کیسه ای باکسی و شیشه ای",space:40,score:7,checked:!1},{name:"biscuit_ocopa_30_3",title:"بیسکوییت اوکوپا",space:30,score:3,checked:!1},{name:"creamy_bran_biscuit_15_2",title:"بیسکوییت های سبوس ساده و کرمدار",space:15,score:2,checked:!1},{name:"rectangular_biscuit_piece_chocolate_5_1",title:"بیسکوییت مستطیلی و تکه شکلات",space:5,score:1,checked:!1},{name:"copa_fit_and_fun_pudding_95_2",title:"پودینگ کوپا و فیت و فان",space:95,score:2,checked:!1},{name:"jelly_30_3",title:"ژله",space:30,score:3,checked:!1},{name:"breakfast_cereal_30_3",title:"غلات صبحانه",space:30,score:3,checked:!1},{name:"copa_barley_and_wheat_50_2",title:"کوپا جو کوپا گندم (از کل فضا)",space:50,score:2,checked:!1},{name:"multigrain_50_2",title:"چند غله (از کل فضا)",space:50,score:2,checked:!1},{name:"chewing_gum_50_2",title:"آدامس (از کل فضا)",space:50,score:2,checked:!1}]),i=e=>{l.value[e].checked=!l.value[e].checked},n=()=>{let e={};l.value.forEach((t=>{e[t.name]=t.checked})),e.form_id=localStorage.getItem("form_id"),axios.post("https://api.amadehlaziz.com:446/form/calculate_point?api_key=mJF2qVIOq22K1LvNBp9gDiOcK8e2p",e).then((e=>{document.querySelector("#exist").value=e.data.total_layout,document.querySelector("#notExist").value=e.data.total_absence,_.value=e.data.total_absence,o.value=e.data.total_layout})).catch((e=>{console.log(e)}))},s=()=>{let e={},a={};l.value.forEach((e=>{a[e.name]=e.checked})),e={form_id:localStorage.getItem("form_id"),points:{total_absence:_.value,total_points:o.value,form_id:localStorage.getItem("form_id"),noodelite_60:a.noodelite_60_10,noodle_amadeh_noodiland_20:a.noodle_amadeh_noodiland_20_5,extract_elite_80:a.extract_elite_80_10,extract_amadeh_noodiland_10:a.extract_amadeh_noodiland_10_5,soup_elite_50:a.soup_elite_50_10,soup_amadeh_noodiland_20_5:a.soup_amadeh_noodiland_20_5,spice_25:a.spice_25_3,chocolate_wafer_kanti_30:a.chocolate_wafer_kanti_30_10,tombi_15:a.tombi_15_3,select_15:a.select_15_2,breakfast_chocolate_30:a.breakfast_chocolate_30_10,glass_box_coffee_40:a.glass_box_coffee_40_7,biscuit_ocopa_30:a.biscuit_ocopa_30_3,creamy_bran_biscuit_15:a.creamy_bran_biscuit_15_2,rectangular_biscuit_piece_chocolate_5:a.rectangular_biscuit_piece_chocolate_5_1,copa_fit_and_fun_pudding_95:a.copa_fit_and_fun_pudding_95_2,jelly_30:a.jelly_30_3,breakfast_cereal_30:a.breakfast_cereal_30_3,copa_barley_and_wheat_50:a.copa_barley_and_wheat_50_2,multigrain_50:a.multigrain_50_2,chewing_gum_50:a.chewing_gum_50_2}},axios.post("https://api.amadehlaziz.com:446/form/add_points_to_form_data?api_key=mJF2qVIOq22K1LvNBp9gDiOcK8e2p",e).then((e=>{alert("ثبت نهایی فرم با موفقیت انجام شد"),t.go(-3)})).catch((e=>{console.log(e)}))};return{data:l,route:e,router:t,query:a,checkboxToggle:i,total_absence:_,total_points:o,calculate:n,submit:s}}},j=a(89);const C=(0,j.Z)(z,[["render",y]]);var H=C}}]);
//# sourceMappingURL=scores.64d84537.js.map