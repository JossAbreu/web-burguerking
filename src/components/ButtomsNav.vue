<template>
    <XyzTransition>
      <ul xyz="fade ease-in stagger-6 " class="flex flex-col fixed">
        <!-- Botón que lleva a Section1 -->
        <li
          @click="scrollToSection1"
          
          class="w-14 xyz-in h-14 m-2  bg-[#910404] dark:shadow-[#910404] text-white dark:text-yellow-300 dark:bg-gray-800 rounded-full shadow-md shadow-zinc-900 hover:scale-x-110 cursor-pointer text-center p-2 font-bold text-3xl"
        >
          1
        </li>
        <!-- Botón que lleva a Section2 y hace scroll hacia abajo -->
        <li
          @click="scrollToSection2"
          class="w-14 xyz-in h-14 m-2  rounded-full bg-[#910404] dark:shadow-[#910404] text-white dark:text-yellow-300 dark:bg-gray-800  shadow-md shadow-zinc-900 hover:scale-x-110 cursor-pointer text-center p-2 font-bold text-3xl"
        >
          2
        </li>
        <!-- Botón que lleva a Section3 y hace scroll hacia arriba -->
        <li
          @click="scrollToSection3"
          class="w-14 xyz-in h-14 m-2 bg-[#910404] dark:shadow-[#910404] text-white dark:text-yellow-300 dark:bg-gray-800 rounded-full shadow-md shadow-zinc-900 hover:scale-x-110 cursor-pointer text-center p-2 font-bold text-3xl"
        >
          3
        </li>
          <!-- Botón que lleva a Section3 y hace scroll hacia arriba -->
          <li
          @click="scrollToSection4"
          class="w-14 xyz-in h-14 m-2 bg-[#910404] dark:shadow-[#910404] text-white dark:text-yellow-300 dark:bg-gray-800 rounded-full shadow-md shadow-zinc-900 hover:scale-x-110 cursor-pointer text-center p-2 font-bold text-3xl"
        >
          4
        </li>
        <!-- Otros botones -->
        <!-- ... -->
      </ul>
    </XyzTransition>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Función para hacer scroll hacia la Section1 con una duración de 2 segundos
  const scrollToSection1 = () => {
    const section1Element = document.getElementById('section1-content');
    if (section1Element) {
      const scrollY = section1Element.getBoundingClientRect().top + window.scrollY;
      smoothScroll(scrollY, 1000);
    }
  };
  
  // Función para hacer scroll hacia la Section2 con una duración de 2 segundos
  const scrollToSection2 = () => {
    const section2Element = document.getElementById('section2-content');
    if (section2Element) {
      const scrollY = section2Element.getBoundingClientRect().top + window.scrollY;
      smoothScroll(scrollY, 2000);
    }
  };
    // Función para hacer scroll hacia la Section2 con una duración de 2 segundos
    const scrollToSection3 = () => {
    const section3Element = document.getElementById('section3-content');
    if (section3Element) {
      const scrollY = section3Element.getBoundingClientRect().top + window.scrollY;
      smoothScroll(scrollY, 6000);
    }
  };
  
      // Función para hacer scroll hacia la Section2 con una duración de 2 segundos
      const scrollToSection4 = () => {
    const section4Element = document.getElementById('section4-content');
    if (section4Element) {
      const scrollY = section4Element.getBoundingClientRect().top + window.scrollY;
      smoothScroll(scrollY, 6000);
    }
  };
  // Función para realizar el scroll suave durante el tiempo deseado
  const smoothScroll = (targetScrollY, duration) => {
    const scrollY = window.scrollY;
    const startTime = performance.now();
    const endTime = startTime + duration;
  
    const step = (timestamp) => {
      const currentTime = Math.min(timestamp, endTime);
      const timeElapsed = currentTime - startTime;
      const progress = timeElapsed / duration;
      const newPosition = scrollY + (targetScrollY - scrollY) * progress;
      window.scrollTo(0, newPosition);
  
      if (currentTime < endTime) {
        window.requestAnimationFrame(step);
      }
    };
  
    window.requestAnimationFrame(step);
  };
  </script>
  