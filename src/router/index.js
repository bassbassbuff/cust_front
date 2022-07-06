import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import EditOrder from "../views/EditOrder.vue";
import AddTruck from "../views/AddTruck.vue";
import AddDriver from "../views/AddDriver.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/add-driver",
    name: "AddDriver",
    component: AddDriver,
  },

  {
    path: "/edit-order",
    name: "EditOrder",
    component: EditOrder,
  },
  {
    path: "/add-truck",
    name: "AddTruck",
    component: AddTruck,
  },

  {
    path: "/orders",
    name: "Orders",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Orders.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  console.log(store.state.auth);
});

export default router;
