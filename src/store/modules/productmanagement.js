const state = {
    productdetails: null,
    productimg: null
}

const getters = { 
    getProductDetailsData: (state) => {
        return state.productdetails;
    },
    getProductImage: (state) => {
        return state.productimg;
    }
}

const mutations = { 
    setProductDetailsData(state, data) {
        state.productdetails = data;
    },
    setProductImage(state, data) {
        state.productimg = data;
    }
}

const actions = {
    saveProductImage({commit}, data){ 
        commit("setProductImage", data);
    },
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