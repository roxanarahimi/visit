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
            brand: item.title,
            own: item.own_brand,
            }}" v-for="item in data" class="col-6">
      <div class="box mb-3">
        <p class="mx-auto mb-0" style="align-self: center">{{ item.title}}</p>
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
      await router.isReady();
      query.value = route.query;
    })

    const data = ref([])

    let brands = [
      {type: 'سوپ', brands: [{title:'الیت', own_brand: true}, {title:'آماده لذیذ', own_brand: true}, {title:'نودیلند', own_brand: true},
          {title:'مهنام', own_brand: false}, {title:'هاتی کارا', own_brand: false}, {title:'زر', own_brand: false}, {title:'سبزان', own_brand: false}, {title:'برتر', own_brand: false}]},
      {type: 'نودل', brands: [{title:'الیت', own_brand: true}, {title:'آماده لذیذ', own_brand: true}, {title:'نودیلند', own_brand: true},
          {title:'مهنام', own_brand: false}, {title:'هاتی کارا', own_brand: false},{title:'گلین', own_brand: false},{title:'شف هو', own_brand: false},{title:'هفده', own_brand: false}]},
      {type: 'عصاره', brands: [{title:'الیت', own_brand: true}, {title:'آماده لذیذ', own_brand: true}, {title:'نودیلند', own_brand: true},
          {title:'مهنام', own_brand: false}, {title:'هاتی کارا', own_brand: false},{title:'زر', own_brand: false},{title:'ایپک', own_brand: false}]},

      {type: 'آش', brands: [{title:'الیت', own_brand: true}]},
      {type: 'قهوه', brands: [{title:'کوپا', own_brand: true}]},
      {type: 'ادویه', brands: [{title:'الیت', own_brand: true}]},
      {type: 'پاستا', brands: [{title:'الیت', own_brand: true},]},
      {type: 'پیاز داغ', brands: [{title:'الیت', own_brand: true},]},
      {type: 'پرک', brands: [{title:'الیت', own_brand: true},]},
      {type: 'ژله', brands: [{title:'کوپا', own_brand: true},]},
      {type: 'پودینگ', brands: [{title:'کوپا', own_brand: true},{title:'فیت و فان', own_brand: true}]},
      {type: 'غلات صبحانه', brands: [{title:'کوپا', own_brand: true},]},
      {type: 'شکلات صبحانه', brands: [{title:'کوپا', own_brand: true},]},

      {type: 'ویفر', brands: [{title:'کانتی', own_brand: true},{title:'کوپا', own_brand: true},{title:'تامبی', own_brand: true},{title:'کلاب', own_brand: true},
          {title:'زر', own_brand: false},{title:'چیچک', own_brand: false},{title:'باراکا', own_brand: false},{title:'بایکیت', own_brand: false},{title:'شونیز', own_brand: false},]},
      {type: 'بیسکوئیت', brands: [{title:'کوپا', own_brand: true},{title:'او کوپا', own_brand: true},
          {title:'ستاک', own_brand: false},{title:'جمانه', own_brand: false},{title:'درنا', own_brand: false},{title:'گرجی', own_brand: false},{title:'فرخنده', own_brand: false},{title:'سلامت', own_brand: false},]},

      {type: 'بیسکوئیت پذیرایی', brands: [{title:'کوپا', own_brand: true},{title:'کوپا جو', own_brand: true},{title:'کوپا گندم', own_brand: true}]},
      {type: 'ژله', brands: [{title:'کوپا', own_brand: true}]},
      {type: 'دراژه', brands: [{title:'کوپا', own_brand: true}]},
      {type: 'آدامس', brands: [{title:'اکس فست', own_brand: true}]},
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
