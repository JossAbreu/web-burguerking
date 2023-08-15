import './style.css'

import { createApp } from 'vue'; 
import App from './App.vue';
import VueAnimXyz from '@animxyz/vue3';
import '@animxyz/core';

import { createRouter, createWebHistory } from 'vue-router'; 
import routes from './router/router'; 

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

const app = createApp(App);

app.use(VueAnimXyz);
app.use(router); 
app.mount('#app');
