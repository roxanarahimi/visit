<template>
<div class="d-grid vh-100">
  <div class="align-self-center row justify-content-center" style="min-height: 250px">
    <h5 class="my-5 pw-bold text-center">اطلاعات را وارد نمایید:</h5>
    <form class="h-100 col-8 ">
      <div>
        <date-picker
            @change = "check" v-model="date"
                     :format="options.format"
                     :displayFormat="options.displayFormat"
                     :editable="options.editable"
                     :placeholder="options.placeholder"
                     :altFormat="options.altFormat"
                     :color="options.color"
                     :autoSubmit="options.autoSubmit"></date-picker>
      </div>
      <div class="position-relative">
        <input id="time" type="time" v-model="time" placeholder="ساعت:"  @change = "check" class="form-control border-0 border-bottom bg-transparent rounded-0 border-dark">
      </div>
      <div>
        <select v-model="grade"  id="shop_grade" @change = "check" class="form-select border-0 border-bottom bg-transparent rounded-0 border-dark">
          <option value="">گرید فروشگاه:</option>
          <option v-for="gd in grades" :key="gd" :value="gd">{{ gd }}</option>
        </select>
      </div>

      <div>
        <select  v-model="group" id="shop_group" @change = "check" class="form-select border-0 border-bottom bg-transparent rounded-0 border-dark">
          <option value="">گروه فروشگاه:</option>
          <option v-for="g in groups" :key="g" :value="g">{{ g }}</option>
        </select>
      </div>
      <div>
        <select v-model="city"  id="city" @change = "check" class="form-select border-0 border-bottom bg-transparent rounded-0 border-dark">
          <option value="">شهر:</option>
          <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
        </select>
      </div>
      <div>
<!--        <select  v-model="name" id="shop_name" @change = "check" class="form-select border-0 border-bottom bg-transparent rounded-0 border-dark">-->
<!--          <option value="" selected>نام فروشگاه:</option>-->
<!--          <option  v-for="item in shops" :value="item.name">{{ item.name}}</option>-->
<!--        </select>-->
        <Multiselect  @change = "check"
            v-model="shop"
                      placeholder="فروشگاه:"
                      dir="rtl"
            :mode="'single'"
            :options="shops"
            :searchable="true"
            :create-option="true"
        />

      </div>
      <div>
        <select  v-model="user"  id="name" @change = "check" class="form-select border-0 border-bottom bg-transparent rounded-0 border-dark">
          <option value="">نام کارشناس:</option>
          <option v-for="item in users" :value="{id:item.id, username:item.username}">{{ item.username }}</option>
        </select>
      </div>
      <div class="d-flex justify-content-center pt-5">
        <router-link v-if="all" :to="{ name: 'types', query : info}" @click="createForm"  class="btn-btn mx-auto px-5 py-2">ثبت</router-link>
        <button  v-if="!all" class="btn-btn mx-auto px-5" @click.prevent =submit>ثبت</button>
      </div>
    </form>
  </div>
</div>

</template>

<script>
import {onMounted, ref} from "vue";
import Multiselect from '@vueform/multiselect'

import DatePicker from 'vue3-persian-datetime-picker'

export default {
  name: "HomeView",
  components: {
    Multiselect, DatePicker
  },
  setup(){
    const users = ref();
    const shops = ref();
    const all = ref(false);

    const grade = ref('');
    const group = ref('');
    const city = ref('');
    const shop = ref('');
    const user = ref('');
    const info = ref({});
    const time = ref('');
    const cities = [
        "تهران",
      "کرمانشاه",
      "آذربایجان شرقی",
      "قزوین",
      "کهگیلویه و بویراحمد",
      "آذربایجان غربی",
      "مرکزی",
      "سمنان",
      "لرستان",
      "گیلان",
      "اردبیل",
      "خراسان رضوی",
      "البرز",
      "خراسان شمالی",
      "مازندران",
      "همدان",
      "گلستان",
      "کرمان",
      "اصفهان",
      "خراسان جنوبی",
      "زنجان",
      "قم",
      "یزد",
      "ایلام",
      "چهارمحال و بختیاری",
      "فارس",
      "کردستان",
      "بوشهر",
      "هرمزگان",
      "سیستان و بلوچستان",
      "خوزستان"
    ];
    const groups = [
      "شهروند",
      "هایپراستار (کرفور)",
      "شرکت آتیه فرزندان وطن (وال مارکت)",
      "هایپرسان",
      "فروشگاه امیران",
      "اسپار ایرانیان",
      "فامیلی مدرن",
      "پلاس وان",
      "اتکا",
      "سپه",
      "هایپر می (مگا مال)",
      "پالادیوم",
      "اورست هایپر",
      "هایپر سی",
      "آذرگستر ساحل (تارا)"
    ];
    const grades = [
      "A",
      "B",
      "C",
      "D",
      "N",
      "O",
    ]
    const api_key= 'w2fqxjKzdlx345NjQ7D99xz5cPp';
    const getUsers = ()=>{

      axios.get('https://api.amadehlaziz.com:446/panel/users?api_key=w2fqxjKzdlx345NjQ7D99xz5cPp')
      .then((response)=>{
        users.value = response.data
      })
      .catch((error)=>{ console.log(error)});
    }
    const getShops = ()=>{
      let url = 'https://api.amadehlaziz.com:446/panel/filter_shops'
      axios.get(url+'?api_key='+api_key+'&grade='+grade.value+'&group='+group.value+'&city='+city.value)
          .then((response)=>{
            shops.value = response.data
            shops.value.forEach((element)=>{
              element.value = {id: element.id, name: element.name};
              element.label = element.name;
            })
          })
          .catch((error)=>{ console.log(error)});
    }
    const check = ()=>{
      getShops();
      if (grade.value != '' && group.value != '' && city.value != '' && shop.value?.id && user.value != '' && date.value != '' && time.value != ''){
        all.value = true;
           info.value = {
            shop_id: shop.value.id,
            shop_name: shop.value.name,
            grade: grade.value,
            user_id: user.value.id,
            user_name: user.value.username,
             date: date.value,
             time: time.value

          }
      }
    }
    const submit = ()=>{
      alert('لطفا همه موارد را انتخاب کنید')
    }
    onMounted(()=>{
      getUsers();
    })

    const date = ref('');
    const options = {
      format: 'YYYY-MM-DD',
      displayFormat: 'jYYYY-jMM-jDD',
      editable: false,
      inputClass: 'form-control my-custom-class-name',
      placeholder: 'تاریخ:',
      altFormat: 'YYYY-MM-DD',
      color: 'black',
      autoSubmit: false
    }
    const createForm = ()=>{
      axios.post('https://api.amadehlaziz.com:446/form/create_form_data?api_key=mJF2qVIOq22K1LvNBp9gDiOcK8e2p',{
        shop_id: shop.value.id,
        visitor_id: user.value.id,
        visit_date: date.value,
        visit_time: time.value
      })
          .then((response)=>{
            console.log(response.data)
            localStorage.setItem('form_id', response.data.form_id)
          })
          .catch((error)=>{ console.log(error)});
    }
    return {date, options, api_key, city,info, time, cities, groups, grades,createForm,
      users, shops, getUsers, getShops, submit, check, all, grade, group, shop, user
    }
  }
}
</script>
<style src="@vueform/multiselect/themes/default.css"></style>

<style>
.multiselect-clear{
  /*margin-left: auto !important;*/
}
.multiselect{
  border:none !important;
  border-bottom: 1px solid black !important;
  border-radius: 0 !important;
}
.multiselect-search{
  background: #F8F9FA !important;
}
.multiselect:focus, .multiselect-search:focus, .multiselect-wrapper:focus, select, input{
  outline-color: transparent !important;
  box-shadow: none !important;
}

.is-active {
   /*border: none !important;*/
   box-shadow: none !important;
 }
.vpd-input-group label{
  display: none !important;
}
.vpd-input-group input{
  background-color: transparent !important;
  border:none !important;
  border-bottom: 1px solid black !important;
  border-radius: 0 !important;
}
input[type='time']:after {
  color: #737373;
  content: attr(placeholder) !important;
  direction: rtl !important;
}
</style>