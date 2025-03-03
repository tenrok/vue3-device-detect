import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import { DeviceDetectPlugin } from '../lib'
app.use(DeviceDetectPlugin)

app.mount('#app')
