// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Sidebar from './components/Sidebar.vue'
import Cards from './components/Cards.vue'
import Account from './components/Account.vue'

import './assets/index.css'
import 'animate.css';

const app = createApp(App)

app.component('sidebar', Sidebar)
app.component('cards', Cards)
app.component('account', Account)

app.use(router)

app.mount("#app")