import { createRouter, createWebHistory } from 'vue-router'
import AllPosts from "../views/AllPosts.vue";
import APost from "../views/APost.vue";
import AddPost from "../views/AddPost.vue";
import ContactUs from '../views/ContactUs.vue';
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import auth from "../auth";

const routes = [{
        path: '/',
        name: "home",
        component: AllPosts,
        beforeEnter: async(to, from, next) => {
          let authResult = await auth.authenticated();
          if (!authResult) {
              next('/login')
          } else {
              next();
          }
      }
        // component: () =>
        //     import ("../views/AllPosts.vue")
    },
    // {
    //     path: "/api/allposts",
    //     name: "AllPosts",
    //     component: AllPosts,
    // },
    {
        path: "/api/apost/:id",
        name: "APost",
        component: APost,
        beforeEnter: async(to, from, next) => {
          let authResult = await auth.authenticated();
          if (!authResult) {
              next('/login')
          } else {
              next();
          }
      }
    },
    {
        path: "/api/addpost",
        name: "AddPost",
        component: AddPost,
        beforeEnter: async(to, from, next) => {
          let authResult = await auth.authenticated();
          if (!authResult) {
              next('/login')
          } else {
              next();
          }
      }
    },
    {
      path: '/contactus',
      name: 'contact',
      component: ContactUs
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp,
    },
    {
      path: "/login",
      name: "LogIn",
      component: LogIn,
    },

    { //will route to AllPosts view if none of the previous routes apply
        path: "/:catchAll(.*)",
        name: "AllPosts",
        component: AllPosts,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



export default router;