import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.config.productionTip = false

Vue.use(VueRouter);

import Activities from './views/Activities.vue';
import ActivityContent from './views/ActivityContent.vue';
import Error404 from './views/Error404.vue';


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/actividades', component: Activities },
    { path: '/actividades/:id',name:'activity-content', component: ActivityContent, props: true },
    { path: '/:pathMatch(.*)*', component: Error404 }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



