<template>
  <div class="d-grid vh-100">
    <div class="align-self-center row justify-content-center" style="min-height: 250px">
      <form class="h-100 col-8 login_form" >
        <h5 class="my-5 pw-bold text-center">ورود کاربر:</h5>

        <div class="">
          <input id="username" type="text"  placeholder="نام کاربر:"
                 class="form-control border-0 border-bottom bg-transparent rounded-0 border-dark">
        </div>
        <div class="">
          <input id="password" type="password"  placeholder="کلمه عبور:"
                 class="form-control border-0 border-bottom bg-transparent rounded-0 border-dark">
        </div>



        <div class="d-flex justify-content-center pt-5">
          <button v-if="!all" class="btn-btn mx-auto px-5" @click.prevent=submit>ثبت</button>
        </div>
      </form>
      <div>
        <div class="shop d-none">
          <h5 class="my-5 pw-bold text-center">انتخاب فروشگاه:</h5>

          <Multiselect
              v-model="shop" @change="check2"
              placeholder="فروشگاه:"
              dir="rtl"
              :mode="'single'"
              :placeholder="'انتخاب کنید'"
              :options="shops"
              :searchable="true"
              :create-option="true"
          />
          <div class="d-flex justify-content-center pt-5">
            <router-link  :to="{ name: 'types', query : info}" @click="createForm"
                          class="btn-btn mx-auto px-5 py-2">ثبت
            </router-link>
          </div>
        </div>

      </div>
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
  setup() {
    const users = ref();
    const shops = ref();
    const all = ref(false);

    const grade = ref('');
    const group = ref('');
    const city = ref('');
    const shop = ref({});
    const user = ref({});
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
    const api_key = 'w2fqxjKzdlx345NjQ7D99xz5cPp';
    const getUsers = () => {

      axios.get('https://api.amadehlaziz.com:446/panel/users?api_key=w2fqxjKzdlx345NjQ7D99xz5cPp')
          .then((response) => {
            users.value = response.data
          })
          .catch((error) => {
            console.log(error)
          });
    }
    const getShops = () => {
      let url = 'https://api.amadehlaziz.com:446/panel/new_filter_shops'
      axios.get(url + '?api_key=' + api_key + '&user_id=' + localStorage.getItem('user_id'))
          .then((response) => {
            shops.value = response.data
            shops.value.forEach((element) => {
              element.value = {id: element.id, name: element.name, grade: element.grade};
              element.label = element.name;
            })
          })
          .then(()=>{
            shop.value = null;
          })
          .catch((error) => {
            console.log(error)
          });
    }
    const check = () => {
      getShops();
      if (shop.value?.id && user.value != '') {
        all.value = true;
        var x = new Date();
        date.value = x.toJSON().slice(0, 10).replace(/-/g, '-');
        time.value = x.getHours() + ':' + x.getMinutes() + ':' + x.getSeconds();


      }
    }
    const submit = () => {
      axios.post('https://api.amadehlaziz.com:446/form/login?api_key=mJF2qVIOq22K1LvNBp9gDiOcK8e2p&username=' +document.querySelector('#username').value+'&password='+ document.querySelector('#password').value)
          .then((response) => {
            localStorage.setItem('user_id', response.data.user_id)
            console.log(response.data)
            user.value.id = response.data.user_id;
            user.value.name = response.data.name;


            document.querySelector('.login_form').classList.add('d-none')
            document.querySelector('.shop').classList.remove('d-none')
            getShops();
          })
          .catch((error) => {
            console.log(error)
          });
    }
    onMounted(() => {
      getUsers();
      var x = new Date();
      date.value = x.toJSON().slice(0, 10).replace(/-/g, '-');
      time.value = x.getHours() + ':' + x.getMinutes() + ':' + x.getSeconds();


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
    const createForm = () => {
      axios.post('https://api.amadehlaziz.com:446/form/create_form_data?api_key=mJF2qVIOq22K1LvNBp9gDiOcK8e2p', {
        shop_id: shop.value.id,
        visitor_id: user.value.id,
        visit_date: date.value,
        visit_time: time.value
      })
          .then((response) => {
            localStorage.removeItem('brands');
            localStorage.setItem('form_id', response.data.form_id)
          })
          .catch((error) => {
            console.log(error)
          });
    }
    const check2 = () => {
      setTimeout(()=>{
        info.value = {
          shop_id: shop.value.id,
          shop_name: shop.value.name,
          grade: shop.value.grade,
          user_id: user.value.id,
          user_name: user.value.name,
          date: date.value,
          time: time.value
        }
        console.log(shop.value,info.value)
      },500)
    }
    return {
      date, options, api_key, city, info, time, cities, groups, grades, createForm,
      users, shops, getUsers, getShops, submit, check, all, grade, group, shop, user, check2
    }
  }
}
</script>
<style src="@vueform/multiselect/themes/default.css"></style>

<style>
.multiselect-clear {
  /*margin-left: auto !important;*/
}

.multiselect {
  border: none !important;
  border-bottom: 1px solid black !important;
  border-radius: 0 !important;
}

.multiselect-search {
  background: #F8F9FA !important;
}

.multiselect:focus, .multiselect-search:focus, .multiselect-wrapper:focus, select, input {
  outline-color: transparent !important;
  box-shadow: none !important;
}

.is-active {
  /*border: none !important;*/
  box-shadow: none !important;
}

.vpd-input-group label {
  display: none !important;
}

.vpd-input-group input {
  background-color: transparent !important;
  border: none !important;
  border-bottom: 1px solid black !important;
  border-radius: 0 !important;
}

input[type='time']:after {
  color: #737373;
  content: attr(placeholder) !important;
  direction: rtl !important;
}
</style>