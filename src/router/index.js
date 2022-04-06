import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactVue from "@/views/ContactVue";
import PostDetailview from "@/views/PostDetailview";
import NotFoundView from "@/views/NotFoundView";
import Profile from "@/views/Profile";
let login=false
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/contact-us",
    name: "contact",
    component: ContactVue
  },
  {
    path: "/post-detail/:id",
    name: "detail",
    component: PostDetailview
  },
  {
    path:"/profile",
    component: Profile,
    beforeEnter:(to,from,next)=>{
      // console.log(to,from)
      // console.log("before enter")
      if (!login){
        return next("/");
      }

      return next();
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass:"active"
})

export default router
