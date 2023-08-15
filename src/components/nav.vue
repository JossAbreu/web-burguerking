

<script setup>
import 'material-icons/iconfont/material-icons.css';
import ButtonDark from './ButtonDark.vue'
import ButtomsNav from './ButtomsNav.vue'
import { onMounted } from 'vue';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; 
import 'tippy.js/animations/scale-extreme.css';
import '@animxyz/core';
onMounted(() => {
  tippy('#BtnLogout', {
    content: 'Logout!',
    placement: 'top',
    animation: 'scale-extreme',
  });
});

</script>


<template>
    <XyzTransition>


    <nav xyz="fade up duration-10" class=" z-50 xyz-in w-full mx-auto h-28 fixed   dark:text-white items-center flex flex-row p-3">
        <img class="w-[100px] ml-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png"
            alt="lOGO">
            
        <ul class="w-full flex justify-end mr-4 p-2">
            <ButtonDark/>
            <router-link to="/">
                <li id="BtnLogout" class="material-icons ml-4 hover:scale-105 hover:text-yellow-300  " style="font-size: 35px;">logout</li>
            </router-link>

         
        </ul>
  
        <ButtomsNav class="top-32 ml-3 "></ButtomsNav>  
    </nav>
    

  
   
</XyzTransition>
</template>
