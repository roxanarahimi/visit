<template>
<div class="p-4">
  <div class="d-flex justify-content-xl-between mb-5">
    <div>
      {{ query.shop_name }}
      گرید
      {{ query.grade }}
      <br>
      {{ query.user_name }}
    </div>
    <div id="back_btn" @click="$router.go(-1)" >
      <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 12 12">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
      </svg>
    </div>
  </div>

  <div class="d-flex justify-content-between mb-3">
    <h6>
      {{ query.type }}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
      {{ query.brand}}
    </h6>
  </div>

  <div v-if="data.length">
    <div v-for="(item, index) in data" :key="index">
      <p :class="{'text-danger': item.is_main == false}">
        {{ index+1 }}.{{item.name}}
      </p>
      <div class="row justify-content-center mb-3 ">
        <button class="btn btn-btn3 col-1 p-2" :id="'btn_plus_Shelf_'+index" @click="increaseShelf(index)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
          </svg>
        </button>
        <div class="col-6 input-container">
          <input type="number" class="input" placeholder="عدد را وارد کنید" :value="item.shelf" :id="'input_Shelf_'+index">
        </div>
        <div class="col-3 title-container ">Shelf</div>
        <button class="btn btn-btn3 col-1 p-2" :id="'btn_minus_Shelf_'+index" @click="decreaseShelf(index)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
          </svg>
        </button>
      </div>

      <div class="row justify-content-center mb-3 ">
        <button class="btn btn-btn3 col-1 p-2" :id="'btn_plus_FT_'+index" @click="increaseFT(index)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
          </svg>
        </button>
        <div class="col-6 input-container">
          <input type="number" class="input" placeholder="عدد را وارد کنید" :value="item.FT" :id="'input_FT_'+index">
        </div>
        <div class="col-3 title-container ">F/T</div>
        <button class="btn btn-btn3 col-1 p-2" :id="'btn_minus_FT_'+index" @click="decreaseFT(index)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
          </svg>
        </button>
      </div>

      <hr>
    </div>
    <div class="d-flex justify-content-center pt-5">
      <button @click="submit" style="width: 200px; text-align: center" class=" py-2 btn-btn mx-auto px-5">ثبت تغییرات</button>
    </div>
    <div class="d-flex justify-content-center pt-5">
      <router-link style="width: 200px; text-align: center" :to="{ name:'scores', query:query}" class=" py-2 btn-btn mx-auto px-5">جمع امتیاز</router-link>
    </div>
  </div>
  <div v-else class=" d-flex justify-content-center">
    <div class="spinner-grow text-dark" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>


</div>
</template>

<script>
import {useRoute, useRouter} from "vue-router/dist/vue-router";
import {onMounted, ref} from "vue";

export default {
  setup(){
    const data = ref([]);
    const getProducts = ()=>{
      axios.get('https://api.amadehlaziz.com:446/panel/products?api_key=w2fqxjKzdlx345NjQ7D99xz5cPp')
          .then((response)=>{
            data.value = response.data;
            data.value.forEach((item)=>{
              item.shelf = 1;
              item.FT = 0;
            });
          })
          .then(()=>{
            let x = data.value.filter((item)=>{
              return item.type == query.value.type && item.brand == query.value.brand && (item.grade == query.value.grade || item.grade == 'Z')})
            data.value = x;
          })
          .then(()=>{
            let ids = []
            data.value.forEach((p)=>{
              ids.push(p.id)
            })
            axios.post('http://api.amadehlaziz.com:8877/form/products_by_ids?form_id='+localStorage.getItem('form_id')+'&api_key=mJF2qVIOq22K1LvNBp9gDiOcK8e2p',
                { ids })
                .then((response)=>{
                  console.log('dataaaaa',response.data)
                  data.value.forEach((d)=>{
                    response.data.forEach((r)=>{
                      if(d.id == r.product_id){
                        d.shelf = r.shelf;
                        d.FT = r.FT;
                      }
                    })
                  })
                })
            .catch((error)=>{console.log(error)})
          })
          .catch((error)=>{ console.log(error)});
    }
    const increaseFT = (index)=> {
      let value = parseInt(document.querySelector('#input_FT_'+index).value) || 0;
      document.querySelector('#input_FT_'+index).value = value+1;
      data.value[index].FT = document.querySelector('#input_FT_'+index).value
    };
    const decreaseFT = (index)=> {
      let value = parseInt(document.querySelector('#input_FT_'+index).value) || 0;
      if (value > 0){
        document.querySelector('#input_FT_'+index).value = value-1;
        data.value[index].FT = document.querySelector('#input_FT_'+index).value

      }
    };
    const increaseShelf = (index)=> {
      let value = parseInt(document.querySelector('#input_Shelf_'+index).value) || 0;
      document.querySelector('#input_Shelf_'+index).value = value+1;
      data.value[index].shelf = document.querySelector('#input_Shelf_'+index).value


    };
    const decreaseShelf = (index)=> {
      let value = parseInt(document.querySelector('#input_Shelf_'+index).value) || 0;
      if (value > 0){
        document.querySelector('#input_Shelf_'+index).value = value-1;
        data.value[index].shelf = document.querySelector('#input_Shelf_'+index).value

      }
    };


    const route = useRoute()
    const router = useRouter()
    const query = ref({})
    onMounted( () => {
      // localStorage.removeItem('products');
      let promise = new Promise( async (resolve, reject) => {
        await router.isReady();
        query.value = route.query;
        if (route.query) {resolve('Success');} else {   reject('Error');}
      })
      promise.then(() => { getProducts(); }).catch((err) => { console.error(err);});

    })
    const submit = ()=>{
      let info = [];
      data.value.forEach((item)=>{
        info.push({ product_id: item.id, shelf: item.shelf, FT: item.FT })
      })

      axios.post('https://api.amadehlaziz.com:446/form/add_products_to_form_data?api_key=mJF2qVIOq22K1LvNBp9gDiOcK8e2p',{
        "form_id": localStorage.getItem('form_id'),
        "product_info": info
      })
      .then((response)=>{
        console.log('response',response.data)

      }).catch((error)=>{ console.error(error)})


      document.querySelector('#back_btn').click();
    }
    return{
      data, increaseFT, decreaseFT, increaseShelf, decreaseShelf, route, router, query,getProducts,submit
    }
  }
}
</script>