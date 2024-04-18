import { defineStore } from "pinia";

export const useCarouselStore = defineStore("Carousel", {
  state: () => ({
    step: 'burguer',
  }),

  actions: {
    
    change_step(step) {
     if(step){
        this.step = step
     }
    },
   
  },
});