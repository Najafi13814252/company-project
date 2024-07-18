// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Sidebar from './components/Sidebar.vue'
import Cards from './components/Cards.vue'
import Account from './components/Account.vue'
import Delete from './components/Delete.vue'
import User from './components/User.vue'
import Role from './components/Role.vue'

import './assets/index.css'
import 'animate.css';

const app = createApp(App)

app.component('sidebar', Sidebar)
app.component('cards', Cards)
app.component('account', Account)
app.component('delete', Delete)
app.component('user', User)
app.component('role', Role)

app.use(router)

app.mount("#app")