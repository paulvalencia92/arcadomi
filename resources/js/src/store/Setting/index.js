import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
    horizontalMenu: false,
    miniSidebarMenu: false,
    lang: {title: 'Spanish', value: 'es', image: require('../../assets/images/small/flag-03.png')},
    langOption: [
        {title: 'English', value: 'en', image: require('../../assets/images/small/flag-01.png')},
        {title: 'Spanish', value: 'es', image: require('../../assets/images/small/flag-03.png')},
    ],
    colors: [
        {primary: '#6475c7', primaryLight: '#7abbf3', bodyBgLight: '#eaf5ff', bodyBgDark: '#1d203f'},
        {primary: '#827af3', primaryLight: '#b47af3', bodyBgLight: '#efeefd', bodyBgDark: '#1d203f'},
        {primary: '#e07af3', primaryLight: '#f37ab7', bodyBgLight: '#f7eefd', bodyBgDark: '#1d203f'},
        {primary: '#c76464', primaryLight: '#f3c37a', bodyBgLight: '#fff8ea', bodyBgDark: '#1d203f'},
        {primary: '#c764ad', primaryLight: '#de8ba9', bodyBgLight: '#ffeaf5', bodyBgDark: '#1d203f'},
        {primary: '#64c7ac', primaryLight: '#a3f37a', bodyBgLight: '#f0ffea', bodyBgDark: '#1d203f'},
        {primary: '#8ac764', primaryLight: '#dbf37a', bodyBgLight: '#f7ffea', bodyBgDark: '#1d203f'}
    ],
    authUser: {
        auth: false,
        authType: false,
        user: {}
    },
    activePage: {
        name: 'Dashboard',
        breadCrumb: [
            {
                html: '<i class="ri-home-4-line mr-1 float-left"></i>Inicio',
                to: {name: 'dashboard.home'}
            },
            {
                text: '',
                href: '#'
            }
        ]
    },
    layoutMode: {
        dark: false,
        rtl: false,
        sidebar: ''
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
