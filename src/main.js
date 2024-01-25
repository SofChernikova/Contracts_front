import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router.js";
import {loadFonts} from './plugins/webfontloader'
import 'bootstrap/dist/css/bootstrap.min.css'


// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
    components,
    directives,
})
loadFonts()
createApp(App).use(vuetify).use(router).mount('#app')
