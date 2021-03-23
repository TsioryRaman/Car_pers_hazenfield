import Vue from "vue"
import Vuex from "vuex"
import {CAR_DATA} from "../Api/_FAKE_DATA_API";

const state = {
    car: CAR_DATA
}

Vue.use(Vuex)

const mutations = {
    ADD_CAR: (state,car) => {
        state.car.push({
            id:state.car.length + 1,
            type:car.type,
            modele:car.modele,
            annee:car.annee,
            description:car.description,
            sale:false
        })
    },
    EDIT_CAR: (state,car) => {
        state.car.map(c => {
           if(c.id === car.car.id) {
               c.description = car.description
           }
        })
    },
    REMOVE_CAR: (state,car) => {
        const CAR = JSON.parse(car)
        const index = state.car.findIndex(c => c.id === CAR.id)
        state.car.splice(index,1)
    }
}

const actions = {
    addCar: (state,car) => {
        console.log("Amant")
        store.commit('ADD_CAR',car)
    },
    editCar: (state,car) => {
        store.commit('EDIT_CAR',car)
    },
    removeCar: (state,car) => {
        store.commit('REMOVE_CAR',car)
    }
}

const getters = {
    cars: state => state.car,
    carsNotSale: state => state.car.filter(c => c.sale!==true),
    carsSaled: state =>   state.car.filter(c=> c.sale === true)
}

let store = new Vuex.Store({
    state:      state,
    mutations:  mutations ,
    getters:    getters ,
    actions:    actions
})
global.store = store

export default store