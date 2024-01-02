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
            time: query.time,
            type: query.type,
            brand: item.title,
            own: item.own_brand,
            code: item.code,
            typeId: item.typeId,
            brandId: item.id,
            }}" v-for="(item, index) in data" :key="index" class="col-6">
      <div class="box mb-3 " :class="{'done': item.done == true}" >
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
      {id:1,type: 'سوپ', brands: [{id:1,title:'الیت', own_brand: true}, {id:2,title:'آماده لذیذ', own_brand: true}, {id:3,title:'نودیلند', own_brand: true},
          {id:4,title:'مهنام', own_brand: false}, {id:5,title:'هاتی کارا', own_brand: false}, {id:6,title:'زر', own_brand: false}, {id:7,title:'سبزان', own_brand: false}, {id:8,title:'برتر', own_brand: false}]},
      {id:2,type: 'نودل', brands: [{id:1,title:'الیت', own_brand: true}, {id:2,title:'آماده لذیذ', own_brand: true}, {id:3,title:'نودیلند', own_brand: true},
          {id:4,title:'مهنام', own_brand: false}, {id:5,title:'هاتی کارا', own_brand: false},{id:6,title:'گلین', own_brand: false},{id:7,title:'شف هو', own_brand: false},{id:8,title:'هفده', own_brand: false}]},
      {id: 3,type: 'عصاره', brands: [{id:1,title:'الیت', own_brand: true}, {id:2,title:'آماده لذیذ', own_brand: true}, {id:3,title:'نودیلند', own_brand: true},
          {id:4,title:'مهنام', own_brand: false}, {id:5,title:'هاتی کارا', own_brand: false},{id:6,title:'زر', own_brand: false},{id:7,title:'ایپک', own_brand: false}]},

      {id: 4,type: 'آش', brands: [{id:1,title:'الیت', own_brand: true}]},
      {id: 5,type: 'قهوه', brands: [{id:1,title:'کوپا', own_brand: true}]},
      {id: 6,type: 'ادویه', brands: [{id:1,title:'الیت', own_brand: true}]},
      {id: 7,type: 'پاستا', brands: [{id:1,title:'الیت', own_brand: true},]},
      {id: 8,type: 'پیاز داغ', brands: [{id:1,title:'الیت', own_brand: true},]},
      {id: 9,type: 'پرک', brands: [{id:1,title:'الیت', own_brand: true},]},
      {id: 10,type: 'ژله', brands: [{id:1,title:'کوپا', own_brand: true},]},
      {id: 11,type: 'پودینگ', brands: [{id:1,title:'کوپا', own_brand: true},{id:2,title:'فیت و فان', own_brand: true}]},
      {id: 12,type: 'غلات صبحانه', brands: [{id:1,title:'کوپا', own_brand: true},]},
      {id: 13,type: 'شکلات صبحانه', brands: [{id:1,title:'کوپا', own_brand: true},]},

      {id: 14,type: 'ویفر', brands: [{id:1,title:'کانتی', own_brand: true},{id:2,title:'کوپا', own_brand: true},{id:3,title:'تامبی', own_brand: true},{id:4,title:'کلاب', own_brand: true},
         {id:5,title:'زر', own_brand: false},{id:6,title:'چیچک', own_brand: false},{id:7,title:'باراکا', own_brand: false},{id:8,title:'بایکیت', own_brand: false},{id:9,title:'شونیز', own_brand: false},]},
      {id: 15,type: 'بیسکوئیت', brands: [{id:1,title:'کوپا', own_brand: true},{id:2,title:'او کوپا', own_brand: true},
          {id:3,title:'ستاک', own_brand: false},{id:4,title:'جمانه', own_brand: false},{id:5,title:'درنا', own_brand: false},{id:6,title:'گرجی', own_brand: false},{id:7,title:'فرخنده', own_brand: false},{id:8,title:'سلامت', own_brand: false},]},

      {id: 16,type: 'بیسکوئیت پذیرایی', brands: [{id:1,title:'کوپا', own_brand: true},{id:2,title:'کوپا جو', own_brand: true},{id:3,title:'کوپا گندم', own_brand: true}]},
      {id: 17,type: 'دراژه', brands: [{id:1,title:'کوپا', own_brand: true}]},
      {id: 18,type: 'آدامس', brands: [{id:1,title:'اکس فست', own_brand: true}]},
    ];
    const typeId = ref();
    onMounted(async ()=>{

      await router.isReady();
      query.value = route.query;

      brands.forEach((element)=>{
        if (element.type === query.value.type){
          typeId.value = element.id;

          element.brands.forEach((element)=>{
            element.typeId = typeId.value;
            element.done = false;
            let brands = JSON.parse(localStorage.getItem('brands'));
            brands?.forEach((el)=>{
              if(el.typeId == element.typeId && el.brandId == element.id){
                element.done = true;
              }
            })
          });
          data.value = element.brands
        }
      });

    })
    return{
      data, route, router, query, brands, typeId,
    }
  },

}
</script>
<style>
.done{
  background-color: lightgreen !important;
}
</style>