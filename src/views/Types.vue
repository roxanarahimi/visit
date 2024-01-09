<template>
  <div class="d-flex justify-content-xl-between mb-5">
    <div>
      {{ query.shop_name }}
      گرید
      {{ query.grade }}
      <br>
      {{ query.user_name }}
    </div>
    <div @click="$router.go(-1)">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left"
           viewBox="0 0 12 12">
        <path fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
      </svg>
    </div>
  </div>
  <div class="row">
    <router-link :to="{ name:'brands', query:{
      shop_id: query.shop_id,
            shop_name: query.shop_name,
            grade: query.grade,
            user_id: query.user_id,
            user_name: query.user_name,
            date: query.date,
            time: query.time ,
            type: item.title}}" v-for="item in data" class="col-6"  >
      <div class="box mb-3"  :class="{'done': item.done == true}">
        <p class="mx-auto mb-0" style="align-self: center">{{ item.title }}</p>
      </div>
    </router-link>
    <!--    <div class="d-flex justify-content-center pt-5">-->
    <!--      <router-link :to="{ name:'scores', query:{grade: query.grade,  name:query.name , user:query.user}}" class=" py-2 btn-btn mx-auto px-5">جمع امتیاز</router-link>-->
    <!--    </div>-->
  </div>
  <div class="d-flex justify-content-center pt-5" >
    <router-link style="width: 200px; text-align: center" :to="{ name:'scores', query:query}" class=" py-2 btn-btn mx-auto px-5">جمع امتیاز</router-link>
  </div>

</template>

<script>
// @ is an alias to /src
import {useRoute, useRouter} from "vue-router/dist/vue-router";
import {onMounted, ref} from "vue";

export default {
  name: 'Types',
  setup() {

    const route = useRoute()
    const router = useRouter()
    const query = ref({})
    const data = [
      {id: 1,title: 'سوپ', count: 8},
      {id: 2,title: 'نودل', count: 8},
      {id: 3,title: 'عصاره', count: 7},
      {id: 4,title: 'آش', count: 1},
      {id: 5,title: 'قهوه', count: 1},
      {id: 6,title: 'ادویه', count: 1},
      {id: 7,title: 'پاستا', count: 1},
      {id: 8,title: 'پیاز داغ', count: 1},
      {id: 9,title: 'پرک', count: 1},
      {id: 10,title: 'ژله', count: 1},
      {id: 11,title: 'پودینگ', count: 2},
      {id: 12,title: 'غلات صبحانه', count: 1},
      {id: 13,title: 'شکلات صبحانه', count: 1},
      {id: 14,title: 'ویفر', count: 9},
      {id: 15,title: 'بیسکوئیت', count: 8},
      {id: 16,title: 'بیسکوئیت پذیرایی', count: 3},
      {id: 17,title: 'دراژه', count: 1},
      {id: 18,title: 'آدامس', count: 1},

    ];
    onMounted(async () => {
      await router.isReady();
      query.value = route.query;
      let brands = JSON.parse(localStorage.getItem('brands'));
      data.forEach((element)=>{
        let x = brands?.filter((b)=>{return parseInt(b.typeId) == element.id });
        if (x && x.length == element.count){
          element.done = true
        }else{
          element.done = false
        }
      });
    });

    return {
      data, route, router, query
    }
  },

}
</script>
<style>
.done{
  background-color: lightgreen !important;
}
</style>