// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// vue router
import {createRouter, createWebHistory} from "vue-router"
import Home from './views/Home.vue'
import Subnet from './views/subnet.vue'
import IP from './views/IP.vue'
import DNS from './views/DNS.vue'
import Binary from './views/Binary.vue'
import TLS from './views/TLS.vue'


const vuetify = createVuetify({
  components,
  directives,
})

const router = createRouter({
    history:createWebHistory(),
    routes:[
       {path: '/', name: 'HomePage', component: Home},
       {path: '/subnet', name: 'SubnetPage', component: Subnet},
       {path: '/IP-checker', name: 'IPPage', component: IP},
       {path: '/DNS-Lookup', name: 'DNSPage', component: DNS},
       {path: '/Binary-converter', name: 'BinaryConverterPage', component: Binary},
       {path: '/TLS', name: 'TLSCertPage', component: TLS},

    ]
   
   })

export default router