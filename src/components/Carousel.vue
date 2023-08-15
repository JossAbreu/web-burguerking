<template lang="">
 <Ingredientes class = "" :SlideNumber="SlideNumber"></Ingredientes>
<div  class="relative w-[70%] select-none  ">
    <!-- Carousel wrapper -->
    <div class="relative h-full overflow-hidden rounded-lg md:h-full md:flex md:flex-col">
         <!-- Item 1 -->
        <div v-show="SlideNumber === 0 " class="   duration-2000 ease-in-out h-full" data-carousel-item="active">
            <div class=" h-full grid grid-cols-2 grid-flow-rows gap-3 " >
                <div class="col-span-2 flex justify-center items-center  " >
          
                </div>
                <div class="  col-span-2 row-span-3 flex justify-center items-center " >
                <img src="../assets/img/BingKing.png" class="relative block w-[35rem] bottom-10  " alt="...">
            </div >
            </div>
        </div>
        <!-- Item 2 -->
        <div v-show="SlideNumber === 1 " class="   duration-2000 ease-in-out h-full" data-carousel-item>
            <div class=" h-full grid grid-cols-2 grid-flow-rows gap-3 " >
                <div class="col-span-2 flex justify-center items-center  " >
          
                </div>
                <div class="  col-span-2 row-span-3 flex justify-center items-center " >
                <img src="../assets/img/BaconCheeseburger.png" class="relative block w-[40rem] bottom-36  " alt="...">
            </div >
            </div>
        </div>

        <!-- Item 3 -->
        <div v-show="SlideNumber === 2 " class="  duration-2000 ease-in-out h-full" data-carousel-item>
            <div class=" h-full grid grid-cols-2 grid-flow-rows gap-3 " >
                <div class="col-span-2 flex justify-center items-center  " >
              
                </div>
                <div class="  col-span-2 row-span-3 flex justify-center items-center " >
                <img src="../assets/img/WHOPPER.png" class="relative block w-[37rem]  " alt="...">
            </div >
            </div>
        </div>
        <!-- Item 4 -->
        <div v-show="SlideNumber === 3 " class="  duration-2000 ease-in-out h-full" data-carousel-item>
            <div class=" h-full grid grid-cols-2 grid-flow-rows gap-3 " >
                <div class="col-span-2 flex justify-center items-center  " >
          
                </div>
                <div class="  col-span-2 row-span-3 flex justify-center items-center " >
                <img src="../assets/img/CHEESEBURGER.png" class="relative block w-[50rem] bottom-24 " alt="...">
            </div >
            </div>
        </div>
        <!-- Item 5 -->
        <div v-show="SlideNumber === 4 " class=" duration-2000 ease-in-out h-full" data-carousel-item>
            <div class=" h-full grid grid-cols-2 grid-flow-rows gap-3 " >
                <div class="col-span-2 flex justify-center items-center  " >
       
                </div>
                <div class="  col-span-2 row-span-3 flex justify-center items-center " >
                <img src="../assets/img/whooper.png" class="relative block w-[40rem] bottom-10 " alt="...">
            </div >
            </div>
        </div>
    </div>

  
    <button type="button"  class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" v-show="SlideNumber >= 1" @click="()=>{ 
        if (SlideNumber >= 1 && SlideNumber <= 5) {
    SlideNumber = SlideNumber - 1;
  }}">

        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30  dark:bg-yellow-300 group-hover:bg-white/50 dark:group-hover:bg-red-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>


    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next  v-show="SlideNumber <= 3" @click="()=>{ if (SlideNumber >= 0 && SlideNumber <= 4) {
    SlideNumber = SlideNumber + 1;
  }}">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full  bg-gray-800/30  dark:bg-yellow-300  group-hover:bg-white/50 dark:group-hover:bg-red-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>

</div>

</template>
<script setup>
import 'flowbite';
import { ref,onMounted } from 'vue';
import Ingredientes from './Ingredients.vue'

const  SlideNumber = ref(0);

onMounted(() => {
    console.log(SlideNumber.value);
})      

</script>

