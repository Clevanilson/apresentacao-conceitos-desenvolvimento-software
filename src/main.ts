import { createApp } from 'vue'
import App from './App.vue'
import roteador from './roteador'
import './estilos/global.css'

createApp(App).use(roteador).mount('#app')
