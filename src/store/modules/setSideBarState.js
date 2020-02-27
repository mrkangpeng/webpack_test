/*
 * @Description: setSideBarState
 * @Autor: kangpeng
 * @Date: 2020-02-27 11:07:52
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-27 14:12:01
 */
import Cookies from 'js-cookie'
const state = {
    sideBarState: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true
}

const mutations = {
    CHANGE_SIDEBAR: state => {
        state.sideBarState = !state.sideBarState
        if (state.sideBarState) {
            Cookies.set('sidebarStatus', 1)
        } else {
            Cookies.set('sidebarStatus', 0)
        }
    }
}

const actions = {
    changeSideBar({
        commit
    }) {
        commit('CHANGE_SIDEBAR')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}