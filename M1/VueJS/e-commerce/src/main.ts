import { createApp } from 'vue'
import './style/style.scss'
import App from './App.vue'
import router from "./router.js"

const app = createApp(App)
app.use(router)
app.mount('#app')
