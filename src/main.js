import { createApp } from 'vue'
import App from './components/FrontBoard.vue'
import router from './router/router.vue'

const app = createApp(App).use(router).mount("#app");

