import { createRouter, createWebHashHistory } from 'vue-router';
// import HomeView from '../views/AllPosts.vue';
import AllPosts from "../views/AllPosts.vue";
import ContactUs from '../views/ContactUs.vue';
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import auth from "../auth";
import APost from "../views/APost.vue";
import AddPost from "../views/AddPost.vue";

const routes = [
  {
    path: '/',
    name: 'AllPosts',
    component: () =>
    import ("../views/AllPosts.vue")
  //   beforeEnter: async(to, from, next) => {
  //     let authResult = await auth.authenticated();
  //     if (!authResult) {
  //         next('/login')
  //     } else {
  //         next();
  //     }
  // }
  },
  {
      path: "/api/allposts",
      name: "AllPosts",
      component: AllPosts,
  },
  {
      path: "/api/apost/:id",
      name: "APost",
      component: APost,
  },
  {
      path: "/api/addpost",
      name: "AddPost",
      component: AddPost,
  },
  { //will route to AllPosts view if none of the previous routes apply
      path: "/:catchAll(.*)",
      name: "AllPosts",
      component: AllPosts,
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
}
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
