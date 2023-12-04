<template>
  <div class="d-flex justify-content-xl-between mb-5">
    <div>
      {{ query.shop_name }}
      گرید
      {{ query.grade }}
      <br>
      {{ query.user_name }}
    </div>
    <div @click="$router.go(-1)" >
      <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 12 12">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
      </svg>
    </div>
  </div>
  <div class="row px-2">

    <table class="table table-bordered  border-dark">
      <thead>
      <tr>
        <th scope="col"  class="border-0 border-bottom  border-dark" style="width: 40px"> </th>
        <th scope="col"  class="border-0 border-bottom  border-dark">آیتم</th>
        <th scope="col"  class="border-0 border-bottom  border-dark">فضا</th>
        <th scope="col" class="border-0 border-bottom  border-dark ">امتیاز</th>
      </tr>

      </thead>

      <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <th scope="row" style="width: 40px">
          <div @click="checkboxToggle(index)" class="check d-flex justify-content-center">
            <svg v-if="item.checked" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" bi bi-check2" viewBox="0 0 14 14">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>
          </div>
        </th>
        <td>{{ item.title }}</td>
        <td>{{ item.space }}%</td>
        <td class="border-end-0">{{ item.score }}</td>
      </tr>
      </tbody>
    </table>
    <hr>

    <div class="d-flex justify-content-center col-9 mx-auto mb-3">
      <button class="btn btn-btn2 px-5 " @click="calculate">محاسبه امتیازات</button>
    </div>

    <div>

      <div class="d-flex justify-content-between">
        <p>جمع امتیاز عدم:</p>
        <input id="notExist" v-model="total_absence" class=" rounded text-center py-1" style="background-color: lightgray; width: 100px; height: 30px; border: none">
      </div>
 <div class="d-flex justify-content-between">
        <p>جمع امتیاز چیدمان:</p>
        <input id="exist" v-model="total_points" class=" rounded text-center py-1" style="background-color: lightgray; width: 100px; height: 30px; border: none">
      </div>

    </div>

    <div class="d-flex justify-content-center col-9 mx-auto">
      <button @click="submit" class="btn btn-btn2 px-5 ">ثبت نهایی فرم</button>
    </div>

  </div>


</template>


<script>
// @ is an alias to /src
import {useRoute, useRouter} from "vue-router/dist/vue-router";
import {onMounted, ref} from "vue";

export default {
  name: 'Scores',
  setup(){

    const route = useRoute()
    const router = useRouter()
    const query = ref({})
    onMounted(async () => {
      await router.isReady();
      query.value = route.query;


    })
    const total_absence = ref(0)
    const total_points = ref(0)
    const data = ref([
      {name: 'noodelite_60_10',title: 'نودالیت نودالیت', space: 60, score: 10, checked: false},
      {name: 'noodle_amadeh_noodiland_20_5',title: 'نودالیت آماده و نودیلند', space: 30, score: 5, checked: false},
      {name: 'extract_elite_80_10',title: 'عصاره الیت', space: 80, score: 10, checked: false},
      {name: 'extract_amadeh_noodiland_10_5',title: 'عصاره آماده و نودیلند', space: 10, score: 5, checked: false},
      {name: 'soup_elite_50_10',title: 'سوپ الیت', space: 50, score: 10, checked: false},
      {name: 'soup_amadeh_noodiland_20_5',title: 'سوپ آماده و نودیلند', space: 20, score: 5, checked: false},
      {name: 'spice_25_3',title: 'ادویه', space: 25, score: 3, checked: false},
      {name: 'chocolate_wafer_kanti_30_10',title: 'ویفر شکلاتی و کانتی', space: 30, score: 10, checked: false},
      {name: 'tombi_15_3',title: 'تامبی', space: 15, score: 3, checked: false},
      {name: 'select_15_2',title: 'سلکت', space: 15, score: 2, checked: false},
      {name: 'breakfast_chocolate_30_10',title: 'شکلات صبحانه', space: 30, score: 10, checked: false},
      {name: 'glass_box_coffee_40_7',title: 'قهوه های کیسه ای باکسی و شیشه ای', space: 40, score: 7, checked: false},
      {name: 'biscuit_ocopa_30_3',title: 'بیسکوییت اوکوپا', space: 30, score: 3, checked: false},
      {name: 'creamy_bran_biscuit_15_2',title: 'بیسکوییت های سبوس ساده و کرمدار', space: 15, score: 2, checked: false},
      {name: 'rectangular_biscuit_piece_chocolate_5_1',title: 'بیسکوییت مستطیلی و تکه شکلات', space: 5, score: 1, checked: false},
      {name: 'copa_fit_and_fun_pudding_95_2',title: 'پودینگ کوپا و فیت و فان', space: 95, score: 2, checked: false},
      {name: 'jelly_30_3',title: 'ژله', space: 30, score: 3, checked: false},
      {name: 'breakfast_cereal_30_3',title: 'غلات صبحانه', space: 30, score: 3, checked: false},
      {name: 'copa_barley_and_wheat_50_2',title: 'کوپا جو کوپا گندم (از کل فضا)', space: 50, score: 2, checked: false},
      {name: 'multigrain_50_2',title: 'چند غله (از کل فضا)', space: 50, score: 2, checked: false},
      {name: 'chewing_gum_50_2',title: 'آدامس (از کل فضا)', space: 50, score: 2, checked: false},
    ]);

    const checkboxToggle=(index)=>{
       data.value[index].checked = !data.value[index].checked;
    }
    const calculate = ()=>{
      let info = {};
      data.value.forEach((item)=>{
        info[item.name] = item.checked
      })
      info.products = JSON.parse(localStorage.getItem('products'))

      axios.post('https://api.amadehlaziz.com:446/form/calculate_point?api_key=mJF2qVIOq22K1LvNBp9gDiOcK8e2p', info)
          .then((response)=>{
            document.querySelector('#exist').value = response.data.total_layout
            document.querySelector('#notExist').value = response.data.total_absence
          })
          .catch((error)=>{ console.log(error)});
    }
    const submit = ()=>{
      let info = {};
      let points = {};
      data.value.forEach((item)=>{
        points[item.name] = item.checked;
      })
      points.total_absence = total_absence.value;
      points.total_points = total_points.value;
      info.points = points;
      info.shop_id= query.value.shop_id;
          info.grade=  query.value.grade;
          info.visitor_id=  query.value.user_id;
          info.visit_date=  query.value.date;
          info.visit_time= query.value.time;
      info.product_info = JSON.parse(localStorage.getItem('products'))
      let y = {}
      let promise = new Promise((resolve, reject) => {
        let points = {};
        data.value.forEach((item)=>{
          points[item.name] = item.checked;
        })
        if (points) {resolve(points);} else {   reject('Error');}
      })
      promise.then((points) => {
        console.log('points',points.biscuit_ocopa_30_3)
         y = {
          "visitor_id": 0,
          "shop_id": 0,
          "visit_date": query.value.date,
          "visit_time": query.value.time,
          "product_info": JSON.parse(localStorage.getItem('products')),
          "points": {
            "total_absence": total_absence.value,
            "total_points": total_points.value,
            "noodelite_60": points.noodelite_60_10,
            "noodle_amadeh_noodiland_20": points.noodle_amadeh_noodiland_20_5,
            "extract_elite_80": points.extract_elite_80_10,
            "extract_amadeh_noodiland_10": points.extract_amadeh_noodiland_10_5,
            "soup_elite_50": points.soup_elite_50_10,
            "soup_amadeh_noodiland_20_5": points.soup_amadeh_noodiland_20_5,
            "spice_25": points.spice_25_3,
            "chocolate_wafer_kanti_30": points.chocolate_wafer_kanti_30_10,
            "tombi_15": points.tombi_15_3,
            "select_15": points.select_15_2,
            "breakfast_chocolate_30": points.breakfast_chocolate_30_10,
            "glass_box_coffee_40": points.glass_box_coffee_40_7,
            "biscuit_ocopa_30": points.biscuit_ocopa_30_3,
            "creamy_bran_biscuit_15": points.creamy_bran_biscuit_15_2,
            "rectangular_biscuit_piece_chocolate_5": points.rectangular_biscuit_piece_chocolate_5_1,
            "copa_fit_and_fun_pudding_95": points.copa_fit_and_fun_pudding_95_2,
            "jelly_30": points.jelly_30_3,
            "breakfast_cereal_30": points.breakfast_cereal_30_3,
            "copa_barley_and_wheat_50": points.copa_barley_and_wheat_50_2,
            "multigrain_50": points.multigrain_50_2,
            "chewing_gum_50": points.chewing_gum_50_2
          }
        }
      }).then(()=>{
        console.log('yy',y)
            axios.post('https://api.amadehlaziz.com:446/form/create_form_data?api_key=mJF2qVIOq22K1LvNBp9gDiOcK8e2p', y)
                .then((response)=>{
                  console.log(response.data)
                })
                .catch((error)=>{ console.log(error)});
          })
          .catch((err) => { console.error(err);});

    }
    return{
      data, route, router, query, checkboxToggle, total_absence, total_points, calculate, submit
    }
  },

}
</script>

<style>
.table-bordered > tbody > tr > td,
.table-bordered {
  border-bottom: transparent 0 !important;
  border-top:  transparent 0 !important;
}

.table-bordered {
  border-right: transparent 0 !important;
}
th {
  border-left: transparent 0 !important;
}
.check{
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid black;
  padding-top: 4px;
  cursor: pointer;
}
th,td{
  font-size: 13px;
  font-weight: lighter !important;
}
</style>