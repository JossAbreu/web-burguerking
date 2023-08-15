<template lang="">
    <div  class ="flex flex-col ">
    <img  data-aos="fade-down-left" data-aos-duration="3000" 
       
       class="absolute  flex z-40 top-[8%] w-[40rem]  opacity-0 transition-all duration-500    " src="../assets/img/1.png" alt="">
    <img  data-aos="fade-down-right" data-aos-duration="2300" class="absolute z-30 top-[18%] w-[40rem] " src="../assets/img/2.png" alt="">
    <img  data-aos="fade-down" data-aos-duration="2500"  class="absolute top-[25%] z-20 w-[40rem] " src="../assets/img/3.png" alt="">
    <img  data-aos="fade-up-right" data-aos-duration="2500"  class="absolute top-[30%] z-10 w-[40rem] " src="../assets/img/4.png" alt="">
    <img  data-aos="fade-down-left" data-aos-duration="2500" class="absolute top-[36%] z-10 w-[40rem] " src="../assets/img/5.png" alt="">
    <img  data-aos="fade-up-left" data-aos-duration="3000"  class="absolute top-[42%] w-[40rem] " src="../assets/img/6.png" alt="">
    <img data-aos="fade-up" data-aos-duration="2500"  class="absolute top-[48%] z-10 w-[40rem] " src="../assets/img/7.png" alt="">
    <img  data-aos="fade-up-right" data-aos-duration="3000" class="absolute top-[56%] z-30 w-[40rem] " src="../assets/img/8.png" alt="">
     <img data-aos="fade-up-left" data-aos-duration="2200"  class="absolute  top-[62%] w-[40rem] z-20 " src="../assets/img/9.png" alt=""> 
    <img  data-aos="fade-up-right" data-aos-duration="3000"  class="absolute  top-[67%] w-[40rem] z-10 " src="../assets/img/10.png" alt="">
    </div>

</template>
<script setup>
import { ref } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


</script>
