import {createRouter, createWebHistory} from "vue-router";
import HomePage from '../pages/HomePage.vue';
import Portfolio from '../pages/Portfolio.vue';
import ProjectDetail from '../pages/ProjectDetail.vue';
import ProjectType from '../pages/ProjectType.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';



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
      name : 'project-by-type',
      path: '/project/:type_id',
      component:ProjectType
   },
     {
        name : 'portfolio',
        path: '/portfolio',
        component:Portfolio
     },
     {
        name : 'not-found',
        path: '/:pathMatch(.*)*',
        component:NotFoundPage
     },
 ],
});

export {router}