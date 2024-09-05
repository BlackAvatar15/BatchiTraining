import { createStore } from 'vuex'
import productmanagement from "./modules/productmanagement"
const  store =  createStore({
  state: {
    productdetails: null
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    productmanagement
  }
})

export default store;
