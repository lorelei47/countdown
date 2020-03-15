import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import CountDown from './components/CountDown'
import Clock from './components/Clock'
import ClockCountDown from './components/ClockCountDown'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [{
        path: '/CountDown',
        name: 'CountDown',
        component: CountDown
    }, {
        path: '/Clock',
        name: 'Clock',
        component: Clock
    }, {
        path: '/ClockCountDown',
        name: 'ClockCountDown',
        component: ClockCountDown
    }]
})
new Vue({
    render: h => h(App),
    router
}).$mount('#app')