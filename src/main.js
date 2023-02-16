import { createApp } from 'vue'
import App from './components/FrontBoard.vue'
import router from './router/router.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App).use(router)
    app.mount("#app");