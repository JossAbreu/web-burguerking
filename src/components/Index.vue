<template>
  <div class=" w-full mx-auto    grid grid-flow-row grid-rows-3-3  h-screen dark:bg-zinc-900 ">
    <TabNav></TabNav>
    <Section1></Section1>
    <Section2></Section2>
    <section3></section3>
    <Section4></Section4>
  </div>
</template>
  
<script setup>
import TabNav from './nav.vue'
import Section1 from './Section1.vue'
import Section2 from './Section2.vue'
import Section3 from './Section3.vue'
import Section4 from './Section4.vue'
</script>