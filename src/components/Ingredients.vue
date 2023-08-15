<template lang="">
    <div data-aos="fade-right" data-aos-duration="3000" class="grid grid-rows-4 grid-flow-row w-[20%] h-[45rem] select-none border-double border-4 border-red-600 rounded-2xl p-1 bottom-16 relative ">
        <div class="bg-zinc-900 flex justify-center items-end text-center ">
<h1 v-show="SlideNumber === 0" xyz="small-100% oring-top duration-20"  class="xyz-in text-yellow-400 text-4xl  font-bold bottom-10  relative">BIG KING</h1>
<h1 v-show="SlideNumber === 1" xyz="small-100% oring-top duration-20"  class="xyz-in text-yellow-400 text-4xl  font-bold bottom-10  relative max-w-[30rem]">BACON CHEESEBURGER</h1>
<h1 v-show="SlideNumber === 2" xyz="small-100% oring-top duration-20"  class="xyz-in text-yellow-400 text-4xl  font-bold bottom-10  relative">WHOPPER</h1>
<h1 v-show="SlideNumber === 3" xyz="small-100% oring-top duration-20"  class="xyz-in text-yellow-400 text-4xl  font-bold bottom-10  relative">CHEESE BURGER</h1>
<h1 v-show="SlideNumber === 4" xyz="small-100% oring-top duration-20"  class="xyz-in text-yellow-400 text-4xl  font-bold bottom-10  relative">BURGER</h1>


<pre class ="text-3xl hidden text-yellow-300 font-bold">{{SlideNumber}}</pre>
       </div> 
       <div class=" row-span-4 p-2" >
      
<h1 class="text-center m-2 mb-10 text-3xl font-bold  text-red-400 ">Ingredients</h1>
<ul xyz="fade ease-in stagger-6 " v-show="SlideNumber === 0 " class="text-center text-3xl font-bold dark:text-white ">
    <li  class=" mb-4 xyz-in   ">Bread</li>
    <li class=" mb-4 xyz-in  ">Lettuce</li>
    <li class=" mb-4 xyz-in  ">Pickle</li>
    <li class=" mb-4 xyz-in  ">Meat burguer</li>
    <li class=" mb-4 xyz-in  ">Cheese</li>
    <li class=" mb-4 xyz-in  ">Onion</li>
</ul>
<ul xyz="fade ease-in stagger-6 " v-show="SlideNumber === 1 " class="text-center text-3xl font-bold dark:text-white">
    <li  class=" mb-4 xyz-in  ">Bread</li>
    <li class=" mb-4 xyz-in  ">Lettuce</li>
    <li class=" mb-4 xyz-in  ">Pickle</li>
    <li class=" mb-4 xyz-in  ">Onion</li>
    <li class=" mb-4 xyz-in  ">Cheese</li>
    <li class=" mb-4 xyz-in  ">Tomato</li>
    <li class=" mb-4 xyz-in  ">Bacon</li>
</ul>
<ul xyz="fade ease-in stagger-6 " v-show="SlideNumber === 2 " class="text-center  text-3xl font-bold dark:text-white">
    <li  class=" mb-4 xyz-in  ">Bread</li>
    <li class=" mb-4 xyz-in  ">Lettuce</li>
    <li class=" mb-4 xyz-in  ">Tomato</li>
    <li class=" mb-4 xyz-in  ">Onion</li>
    <li class=" mb-4 xyz-in  ">Cheese</li>
    <li class=" mb-4 xyz-in  ">Pickle</li>
    <li class=" mb-4 xyz-in  ">Meat burguer</li>
</ul>
<ul xyz="fade ease-in stagger-6 " v-show="SlideNumber === 3 " class="text-center  text-3xl font-bold dark:text-white">
    <li  class=" mb-4 xyz-in  ">Bread</li>
    <li class=" mb-4 xyz-in  ">Ketchup</li>
    <li class=" mb-4 xyz-in  ">Mustase</li>
    <li class=" mb-4 xyz-in  ">Pickle</li>
    <li class=" mb-4 xyz-in  ">Cheese</li>
    <li class=" mb-4 xyz-in  ">Meat burguer</li>
</ul>
<ul xyz="fade ease-in stagger-6 " v-show="SlideNumber === 4 " class="text-center  text-3xl font-bold dark:text-white">
    <li  class=" mb-4 xyz-in  ">Bread</li>
    <li class=" mb-4 xyz-in  ">Lettuce</li>
    <li class=" mb-4 xyz-in  ">Tomato</li>
    <li class=" mb-4 xyz-in  ">Dorito</li>
    <li class=" mb-4 xyz-in  ">Bacon</li>
    <li class=" mb-4 xyz-in  ">Ketchup</li>
    <li class=" mb-4 xyz-in  ">Cheese</li>
    <li class=" mb-4 xyz-in  ">Meat burguer</li>
</ul>

       </div>
    </div>
</template>
<script setup >
import { ref, defineProps } from 'vue';
const  {SlideNumber}  = defineProps(['SlideNumber']);
</script>
