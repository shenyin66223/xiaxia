import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dataList: [],
        newArr: []
    },
    mutations: {
        getData(state, data) {
            state.dataList = data
        },
        filterDataList(state, index) {
            state.newArr = state.dataList[index].foods
        }
    },
    actions: {
        // 异步实现
        getDataList({ commit, state }) {
            setTimeout(() => {
                axios.get("/api/list").then(res => {
                    commit("getData", res.data.result)
                    state.newArr = state.dataList[0].foods
                })
            }, 1000)
        }
    }
})