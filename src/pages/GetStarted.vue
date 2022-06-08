<template>
<div class="wrapper bg-custom q-pa-md fixed-full text-justify">
    <div class="">
        
        <div class="text-h4 text-white">
            Hey, Welcome to
        </div>
        
        <div class="text-h3 text-white">
            <span class="bold-grey">Grey</span>Foods
        </div>

        <div class=" text-white q-pt-xl q-mt-md">
            Chop food belle full....
        </div>
        
    </div>

    <div class="fixed-bottom">
        <div class="button q-pa-md text-center">
            <q-btn @click="$router.push('/page')" class="btn q-py-sm q-px-xl">Get Started</q-btn>
            <q-btn no-caps class="text-white q-pt-md q-px-xl" style="font-size: 24px;">Login</q-btn>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
// import {mapActions} from 'vuex'
export default {
    data(){
         return {
         tab: ref('mails')
         }
    },
     methods:{
        
     }
}
</script>

<style scoped>
.bg-custom{
  background: url("/splashscreendown.jpg");
}
.wrapper {  
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.bold-grey{
    font-weight: 900;
}


.btn {
  border: none;
  /* background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%); */
  background-color: #fff;
  padding: 16px 24px 16px 24px;
  font-size: 1.3rem !important;
  border-radius: 60px;
  border: 1px solid #fe724c;
  color: #fe724c;;
  /* margin-top: 5rem; */
  /* padding: 1rem; */
  width: 100%;
  /* font-size: 1.6rem; */
}

</style>

<!--
<template>
<div class="hold bg-primary">
<div class="bodd container">
    <h1 class="q-py-lg text-white">
        Hey, Welcome to
        <span class="text-weight-bold text-white">Grey</span>Foods.
    </h1>
    <p class="text-white q-py-lg">Chop food belle full...</p>

    <div class="btns">
        <div class="btn-con">
            <q-btn to="register" class="q-py-md text-primary bt q-mb-lg bg-white q-px-xl">Get started</q-btn>
            <q-btn to="/login" class="q-py-md text-white bt q-px-xl">Login</q-btn>

        </div>
    </div>
</div>
</div>

  
</template>

<script>
export default {

}
</script>

<style scoped>


.bodd{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
}

.bodd h1{
    font-size: 5rem;
}

.bodd p{
    font-size: 2rem;

}


.btn-con{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.bt{
    display: inline-block;
    width: 60%;
}
</style> -->