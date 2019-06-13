import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const Home = {
    template: '<router-view></router-view>'
}

function mainRouter() {
    const router = new VueRouter({
        routes: [{
            path: '/',
            component: Home
        }]
    });

    return router;
}

export default mainRouter;