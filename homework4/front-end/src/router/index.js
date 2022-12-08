import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactUs from '../views/ContactUs.vue';
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import auth from "../auth";
import APost from "../views/APost.vue";
import AddPost from "../views/AddPost.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
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
{
  // path: "/api/apost/:id",
  path: "/apost",
  name: "APost",
  component: APost,
},
{
  path: "/api/addpost",
  name: "AddPost",
  component: AddPost,
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
