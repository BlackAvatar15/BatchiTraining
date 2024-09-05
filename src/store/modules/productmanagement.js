const state = {
    productdetails: null
}

const getters = {
    // assigned variables or function to get data
    getProductDetailsData: (state) => {
        return state.productdetails;
    }
}

const mutations = {
    // set data to update getProductDetailsData
    setProductDetailsData(state, data) {
        state.productdetails = data;
    }
}

const actions = {
    // function same with methods that you can use in all components
    async saveProductDetails({ commit }, data) {
        console.log(data);
       await  commit("setProductDetailsData", data);
    }
}

//export all state management
export default {
    state,
    getters,
    mutations,
    actions
}