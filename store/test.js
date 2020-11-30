/** @format */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const testStore = new Vuex.Store({
    state : {
        islogin : false,
        loginData : {}
    },
    mutations : {
        login (state, logdata) {
            state.islogin = true
            state.loginData = logdata
        },
        logout (state) {
            state.islogin = false
        },
        changeLogStatus (state) {
            state.islogin = !state.islogin
        }
    },
    // 操作基于基础数据产生的衍生数据
    getters : {
        loginDesc (state) {
            return state.islogin ? '登录了' : '没有登录'
        }
    },
    // 异步数据
    actions : {
        // lazy loading openid
        getLoginData : async function ({ commit, state, rootState }, payload) {
            return await new Promise((resolve, reject) => {
                // 模拟请求
                setTimeout(function () {
                    const res = {
                        status : 200,
                        message : '数据请求成功了',
                        data : {
                            name : '121'
                        }
                    }
                    // console.log('unilogin---', state, rootState)
                    // console.log('参数--', payload)
                    commit('login', res.data)
                    // 为了后面可以.then等连续操作需要
                    resolve(res)
                }, 1000)
            })
        }
    }
})

export default testStore
