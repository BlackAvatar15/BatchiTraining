import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView.vue"
import SignupView from '@/views/SignupView.vue'
import TablesView from '@/views/TablesView.vue'
import AlttabsView from '@/views/AlttabsView.vue'
import CaloyView from '@/views/CaloyView.vue'
import MarkView from '@/views/MarkView.vue'
import RenView from '@/views/RenView.vue'
import ProfileView from "@/views/ProfileView.vue"
import NameView from '@/views/NameView.vue'
import ImageView from '@/views/ImageView.vue'
import WorkView from '@/views/WorkView.vue'
import AgeView from '@/views/AgeView.vue'
import AddressView from '@/views/AddressView.vue'
import CardView from '@/views/CardView.vue'
import ProfilenewView from '@/views/ProfilenewView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
import NavbarView from '@/views/NavbarView.vue'
import TablenewView from '@/views/TablenewView.vue'
import HomepageView from '@/views/HomepageView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/tables',
    name: 'tables',
    component: TablesView
  },
  {
    path: '/caloy',
    name: 'caloy',
    component: CaloyView
  },
  {
    path: '/altabs',
    name: 'altabs',
    component: AlttabsView
  },
  {
    path: '/mark',
    name: 'mark',
    component: MarkView
  },
  {
    path: '/ren',
    name: 'ren',
    component: RenView
  },
  {
    path: '/profile/:name',
    name : "profile",
    component: ProfileView
  },
  {
    path: '/profileName/:name',
    name : "name",
    component: NameView
  },
  {
    path: '/profileImage/:image',
    name : "image",
    component: ImageView
  },
  {
    path: '/profileWork/:work',
    name : "work",
    component: WorkView
  },
  {
    path: '/profileAge/:age',
    name : "age",
    component: AgeView
  },
  {
    path: '/profileAddress/:address',
    name : "address",
    component: AddressView
  },
  {
    path: '/profileCard/:card',
    name : "card",
    component: CardView
  },
  {
    path:'/profilenewView/',
    name: "profilenew",
    component: ProfilenewView
  },
  {
    path:'/product-details',
    name: "productdetails",
    component: ProductDetailsView
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: NavbarView
  },
  {
    path: '/product/',
    name: 'product',
    component: TablenewView
  },
  {
    path: '/homepage/',
    name: 'homepage',
    component: HomepageView
  },
  /*
  {
    path: '/profileCrud/:crud',
    name : "crud",
    component: CrudView
  },*/


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
