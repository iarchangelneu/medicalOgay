import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from '../../medical/src/App.vue'
import './style/style.css'
import Main from './components/Main.vue'
import router from './router'
import store from './store'


const app = createApp(App).use(store).use(router)

app.component('the-main', Main)

app.mount('#app')

