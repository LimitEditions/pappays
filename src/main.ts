import { createApp } from 'vue'
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import './style.css'
import App from './App.vue'

createApp(App).use(PrimeVue).use(createPinia()).mount('#app')
