// Styles
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
    icons: {
        iconfont: 'mdi', // Ensure this line is added
    },
})
// import Vue from 'vue'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// import '@mdi/font/css/materialdesignicons.css'
//
// Vue.use(Vuetify)
//
// export default new Vuetify({
//     icons: {
//         iconfont: 'mdi'
//     },
//
//
// })