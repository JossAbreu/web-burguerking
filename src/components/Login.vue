<template lang="">
      <XyzTransition xyz="fade up-50% duration-10 ease-in-back" >
      <div class="bg-slate-200 dark:bg-gray-800 absolute select-none w-[40rem] h-[40rem]  shadow-lg shadow-yellow-300 rounded-md p-4" v-if="shape=== 'Login'">
     
   
        <button type="buttom" class="text-yellow-300 font-medium "  @click="$emit('close')">Close</button>
       <h1 class="text-4xl font-bold text-center dark:text-white"> Login</h1>
     <div class="W-full h-[34rem] flex flex-col  justify-center p-3  ">
      <label class="block text-yellow-300 text-sm font-bold mb-2" for="username">
        email
      </label>
      <input
        class=" shadow appearance-none border border-slate-300 rounded w-full h-14 py-2 px-3 mb-4 text-gray-900 text-lg leading-tight 
              valid:border-yellow-300  outline-none focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300 focus:invalid:border-red-500 focus:invalid:ring-red-500"
        id="email" type="email" placeholder="email" v-model="email" />
      <label class="block text-yellow-300 text-sm font-bold mb-2" for="Password">
        Password
      </label>
      <input
        class="shadow appearance-none border rounded w-full h-14 py-2 px-3 mb-4 text-zinc-950 text-lg leading-tight focus:outline-none focus:shadow-outline "
        id="password" type="password" placeholder="Password" v-model="password" />
      <router-link to="/Index">
        <button
          class="  shadow-md shadow-yellow-300 rounded-md w-28 h-14 m-2 dark:hover:bg-red-600  transition ease-in hover:scale-110 hover:font-semibold dark:text-white dark:bg-zinc-900 outline-none">Login</button>
      </router-link>

    </div>
  </div>

</XyzTransition>
</template>
<script setup>
import {ref ,defineProps} from 'vue'
import { XyzTransition } from '@animxyz/vue3';
import '@animxyz/core';
const props = defineProps({
        shape: String,
        isModalOpen: Boolean
})
</script>
