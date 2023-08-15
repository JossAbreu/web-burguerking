<template>
    <section id="section2-content" class="w-full z-20 h-[70rem] flex justify-center bg dark:bg-zinc-900  relative">
<div xyz="fade down  duration-30 "  class="w-[1900px] h-[70rem] xyz-in  flex flex-col  bg-[#910404]  ">


        <svg  width="100%"  class=" absolute z-30 h-full bottom-[60rem] " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 831L40 815.7C80 800.3 160 769.7 240 759.7C320 749.7 400 760.3 480 785.8C560 811.3 640 851.7 720 868.2C800 884.7 880 877.3 960 852.5C1040 827.7 1120 785.3 1200 791.7C1280 798 1360 853 1440 858.8C1520 864.7 1600 821.3 1680 815.7C1760 810 1840 842 1880 858L1920 874L1920 1081L1880 1081C1840 1081 1760 1081 1680 1081C1600 1081 1520 1081 1440 1081C1360 1081 1280 1081 1200 1081C1120 1081 1040 1081 960 1081C880 1081 800 1081 720 1081C640 1081 560 1081 480 1081C400 1081 320 1081 240 1081C160 1081 80 1081 40 1081L0 1081Z" fill="#bf2727"></path><path d="M0 848L40 847.8C80 847.7 160 847.3 240 842.7C320 838 400 829 480 841.5C560 854 640 888 720 905.7C800 923.3 880 924.7 960 907.5C1040 890.3 1120 854.7 1200 856.8C1280 859 1360 899 1440 902.5C1520 906 1600 873 1680 859C1760 845 1840 850 1880 852.5L1920 855L1920 1081L1880 1081C1840 1081 1760 1081 1680 1081C1600 1081 1520 1081 1440 1081C1360 1081 1280 1081 1200 1081C1120 1081 1040 1081 960 1081C880 1081 800 1081 720 1081C640 1081 560 1081 480 1081C400 1081 320 1081 240 1081C160 1081 80 1081 40 1081L0 1081Z" fill="#b01d1c"></path><path d="M0 996L40 980.7C80 965.3 160 934.7 240 924.5C320 914.3 400 924.7 480 920.2C560 915.7 640 896.3 720 895.8C800 895.3 880 913.7 960 932.5C1040 951.3 1120 970.7 1200 971.5C1280 972.3 1360 954.7 1440 937.2C1520 919.7 1600 902.3 1680 912.3C1760 922.3 1840 959.7 1880 978.3L1920 997L1920 1081L1880 1081C1840 1081 1760 1081 1680 1081C1600 1081 1520 1081 1440 1081C1360 1081 1280 1081 1200 1081C1120 1081 1040 1081 960 1081C880 1081 800 1081 720 1081C640 1081 560 1081 480 1081C400 1081 320 1081 240 1081C160 1081 80 1081 40 1081L0 1081Z" fill="#a01210"></path><path d="M0 1033L40 1023.3C80 1013.7 160 994.3 240 990.2C320 986 400 997 480 1001.8C560 1006.7 640 1005.3 720 1008.8C800 1012.3 880 1020.7 960 1024.3C1040 1028 1120 1027 1200 1017.2C1280 1007.3 1360 988.7 1440 987.3C1520 986 1600 1002 1680 999.5C1760 997 1840 976 1880 965.5L1920 955L1920 1081L1880 1081C1840 1081 1760 1081 1680 1081C1600 1081 1520 1081 1440 1081C1360 1081 1280 1081 1200 1081C1120 1081 1040 1081 960 1081C880 1081 800 1081 720 1081C640 1081 560 1081 480 1081C400 1081 320 1081 240 1081C160 1081 80 1081 40 1081L0 1081Z" fill="#910404"></path></svg>
        <div class="w-full h-full z-20 p-4 grid grid-flow-row grid-cols-2  ">
             <div  class="col p-3  " >
       
        <vue-typewriter-effect :delay="50" :strings="['HELLO', 'Are you hungry? ', ' Do you want a delicious and affordable burger? ', 'Then come to Burger King! ']" class="text-8xl ml-7 w-[80rem] dark:text-white font-semibold absolute top-28 " />
    
             
              
                        <p  data-aos="fade-right"  data-aos-duration="2000"  class="dark:text-white break-all text-4xl capitalize top-80 w-[60rem] font-semibold relative ml-7">Nuestra hamburguesa más popular es la Whopper, hecha con dos panes de hamburguesa, una hamburguesa de carne de res 100% Angus, lechuga, tomate, cebolla y pepinillos. También ofrecemos una variedad de otras hamburguesas, como la Whopper Jr., la Whopper Junior y la Whopper Jr. con queso.</p>
                
                 
            
               
               
            </div>
           <div class=" flex items-center">
           <BurguerAnimate class="ml-48"></BurguerAnimate>
           </div>
        </div>
       
    </div>
  
    </section>
  </template>
  <script setup>
import VueTypewriterEffect from "vue-typewriter-effect";
  import 'core-js/modules/es.string.trim';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  AOS.init();
import BurguerAnimate from './BurguerAnimate.vue'
 
  </script>
  
<!-- colorsection 2 910404 -->