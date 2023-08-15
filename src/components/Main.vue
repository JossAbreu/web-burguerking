<template >
  <div id="content"
    class="  w-screen bg-slate-200 dark:bg-zinc-900   h-screen  flex justify-center items-center flex-col select-none  ">
    <ButtonDark class="absolute top-5 left-[96%]" />
    <p class="absolute  top-5 left-[83%] text-white ">Shape: {{ shape }}</p>

 <!-- Modal panel -->
    <XyzTransition xyz="fade left-50% duration-15 ease-in-back">
  <div class="shadow-md bg-slate-200 dark:bg-gray-800 shadow-yellow-300 rounded-md w-[50rem] h-[30rem] flex flex-col justify-start p-4 items-center" v-if="shape=== 'Panel'">
    <img class="w-[200px] ml-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png"
          alt="lOGO">

        <div class=" w-full h-full flex flex-row items-center justify-center">
          <button class="shadow-lg shadow-yellow-300 dark:bg-zinc-900 dark:text-white rounded-md w-28 h-14 m-2 dark:hover:bg-red-600 transition  ease-in hover:scale-110 hover:font-semibold" type="button" @click="shape = 'Login'; isModalOpen = false;">Login</button>
            <button class="shadow-lg shadow-yellow-300 dark:bg-zinc-900 dark:text-white rounded-md w-28 h-14 m-2 dark:hover:bg-red-600 transition ease-in hover:scale-110 hover:font-semibold" type="button" @click="shape = 'Register'">Register</button>
     

        </div>
  
  
  
  </div>
</XyzTransition>


    
       
      
      

     <!-- modal Login -->
   <Login :shape="shape" :isModalOpen="isModalOpen" @close="onClose" ></Login>


    <!-- modal Register -->
    
      <XyzTransition xyz="fade right-50% duration-10 ease-in-back" >
      <div class="absolute bg-slate-200 dark:bg-gray-800 select-none rounded-lg w-[40rem] h-[38rem]  shadow-lg shadow-yellow-300 p-4" v-if="shape=== 'Register'">
   
       
       
      <button class="text-yellow-300 font-medium hover:" @click="shape = 'Panel'">Close</button>
      <h1 class="text-4xl font-bold text-center dark:text-white"> Register</h1>
      <div class="W-full h-[34rem] flex flex-col  justify-center p-3  ">
        <label class="block text-yellow-300 text-sm font-bold mb-2" for="username">
          Email
        </label>
        <input
          class=" shadow appearance-none border border-slate-300 rounded w-full h-14 py-2 px-3 mb-4 text-gray-900 text-lg leading-tight 
              valid:border-yellow-300  outline-none focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300 focus:invalid:border-red-500 focus:invalid:ring-red-500"
          id="username" type="email" placeholder="email" v-model="email" />
        <label class="block text-yellow-300 text-sm font-bold mb-2" for="Password">
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full h-14 py-2 px-3 mb-4 text-zinc-950 text-lg leading-tight focus:outline-none focus:shadow-outline "
          id="password" type="password" placeholder="Password" v-model="password" />
        <label class="block text-yellow-300 text-sm font-bold mb-2" for="Password">
          Repeat Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full h-14 py-2 px-3 mb-4 text-zinc-950 text-lg leading-tight focus:outline-none focus:shadow-outline "
          id="password" type="password" placeholder=" Repeat Passwordssword" v-model="RepeatPassword" />
        <button
          class="  shadow-md shadow-yellow-300 rounded-md w-28 h-14 m-2 hover:bg-yellow-300 transition ease-in hover:scale-110 hover:font-semibold dark:text-white dark:bg-zinc-900 outline-none ">Register</button>
      </div>
    </div>
 
  </XyzTransition>







 
</div>
</template>
<script setup>
import { ref } from 'vue';
import ButtonDark from './ButtonDark.vue';
import { XyzTransition } from '@animxyz/vue3';
import Login from './Login.vue'
import '@animxyz/core';
const isModalOpen = ref(true);
const shape = ref('Panel');
const email = ref('');
const password = ref('');

const onClose = () => {
  shape.value = 'Panel';
  isModalOpen.value = false;
};
</script>