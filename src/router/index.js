import {createRouter, createWebHistory} from "vue-router";
import HomePage from '../pages/HomePage.vue';
import Portfolio from '../pages/Portfolio.vue';
import ProjectDetail from '../pages/ProjectDetail.vue';


const router = createRouter({
 // aggiungi history
 history : createWebHistory(),
 // aggiungi routes
 routes:[
    {
        name : 'home',
        path: '/',
        component: HomePage
    },
    {
        name : 'project-detail',
        path: '/project/:id',
        component:ProjectDetail
     },
     {
        name : 'portfolio',
        path: '/portfolio',
        component:Portfolio
     },
 ],
});

export {router}