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
            type: item.title}}" v-for="item in data" class="col-6">
      <div class="box mb-3">
        <p class="mx-auto mb-0" style="align-self: center">{{ item.title }}</p>
      </div>
    </router-link>
    <!--    <div class="d-flex justify-content-center pt-5">-->
    <!--      <router-link :to="{ name:'scores', query:{grade: query.grade,  name:query.name , user:query.user}}" class=" py-2 btn-btn mx-auto px-5">جمع امتیاز</router-link>-->
    <!--    </div>-->
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
    onMounted(async () => {
      await router.isReady();
      query.value = route.query;
    });
    const data = [
      {id: 1,title: 'سوپ'},
      {id: 2,title: 'نودل'},
      {id: 3,title: 'عصاره'},
      {id: 4,title: 'آش'},
      {id: 5,title: 'قهوه'},
      {id: 6,title: 'ادویه'},
      {id: 7,title: 'پاستا'},
      {id: 8,title: 'پیاز داغ'},
      {id: 9,title: 'ژله'},
      {id: 10,title: 'پودینگ'},
      {id: 11,title: 'غلات صبحانه'},
      {id: 12,title: 'شکلات صبحانه'},
      {id: 13,title: 'پرک'},
      {id: 14,title: 'ویفر'},
      {id: 15,title: 'بیسکوئیت پذیرایی'},
      {id: 16,title: 'بیسکوئیت'},
      {id: 17,title: 'دراژه'},
      {id: 18,title: 'آدامس'},

    ];

    return {
      data, route, router, query
    }
  },

}
</script>
