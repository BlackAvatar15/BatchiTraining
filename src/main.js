import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import store from './store'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VueCookies from 'vue-cookies';

const vuetify = createVuetify({
    components,
    directives,
  })

 
createApp(App).use(router).use(vuetify).use(store).use(VueCookies).use(createPinia()).mount('#app')


