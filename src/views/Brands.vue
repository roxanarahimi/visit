<template>
<!--  <div>-->
<!--    <input type="text" id="term" class="form-control mb-5" >-->
<!--  </div>-->
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
    <div class="mb-3">
      {{ query.type }}
    </div>
  <div class="row">
    <router-link :to="{name:'about', query:{
      shop_id: query.shop_id,
            shop_name: query.shop_name,
            grade: query.grade,
            user_id: query.user_id,
            user_name: query.user_name,
            date: query.date,
            time: query.time ,
            type: query.type,
            brand: item}}" v-for="item in data" class="col-6">
      <div class="box mb-3">
        <p class="mx-auto mb-0" style="align-self: center">{{ item }}</p>
      </div>
    </router-link>
<!--    <div class="d-flex justify-content-center pt-5">-->
<!--      <button class="btn-btn mx-auto px-5">جمع امتیاز</button>-->
<!--    </div>-->
  </div>


</template>

<script>
// @ is an alias to /src
import {useRoute, useRouter} from "vue-router/dist/vue-router";
import {onMounted, ref} from "vue";

export default {
  name: 'Brands',
  setup(){

    const route = useRoute()
    const router = useRouter()
    const query = ref({})
    onMounted(async () => {
      console.log('Before Router Preparation', route.name);
      await router.isReady();
      console.log('After Router Preparation', route.name);
      query.value = route.query;
    })

    const data = ref([])

    let brands = [
      {type: 'سوپ', brands: ['الیت', 'آماده لذیذ', 'نودیلند', 'مهنام', 'هاتی کارا','زر','سبزان','برتر',]},
      {type: 'نودل', brands: ['الیت', 'آماده لذیذ', 'نودیلند','مهنام','هاتی کارا','گلین', 'شف هو','هفده',]},
      {type: 'عصاره', brands: ['الیت', 'آماده لذیذ', 'نودیلند','مهنام','هاتی کارا','زر','ایپک',]},

      {type: 'آش', brands: ['الیت']},
      {type: 'قهوه', brands: ['کوپا',]},
      {type: 'ادویه', brands: ['الیت']},
      {type: 'پاستا', brands: ['الیت',]},
      {type: 'پیاز داغ', brands: ['الیت',]},
      {type: 'پودینگ', brands: ['کوپا', 'فیت و فان',]},
      {type: 'غلات صبحانه', brands: ['کوپا',]},
      {type: 'شکلات صبحانه', brands: ['کوپا',]},

      {type: 'ویفر', brands: ['کانتی','کوپا','تامبی','زر','چیچک','باراکا','بایکیت','شونیز','کلاب']},
      {type: 'بیسکوئیت', brands: ['کوپا','او کوپا',  'ستاک', 'جمانه', 'درنا', 'گرجی', 'فرخنده', 'سلامت',]},

      {type: 'بیسکوئیت پذیرایی', brands: ['کوپا','کوپا جو','کوپا گندم',]},
      {type: 'ژله', brands: ['کوپا',]},
      {type: 'دراژه', brands: ['کوپا',]},
      {type: 'آدامس', brands: ['اکس فست']},
    ]
    onMounted(async ()=>{

      await router.isReady();
      query.value = route.query;

      brands.forEach((element)=>{
        if (element.type === query.value.type){
          data.value = element.brands
        }
      })
    })
    return{
      data, route, router, query, brands,
    }
  },

}
</script>
