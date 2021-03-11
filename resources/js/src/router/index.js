import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store/index'
import axios from "axios";


/* Layouts */
const VerticleLayout = () => import('../layouts/VerticleLayout')
const Default = () => import('../layouts/BlankLayout')
const AuthLayout = () => import('../layouts/AuthLayouts/AuthLayout')

/* Dashboards View */
const Dashboard = () => import('../views/Dashboards/Dashboard.vue')

/* Authentic View */
const SignIn1 = () => import('../views/AuthPages/Default/SignIn1')
const SignUp1 = () => import('../views/AuthPages/Default/SignUp1')
const RecoverPassword1 = () => import('../views/AuthPages/Default/RecoverPassword1')
const LockScreen1 = () => import('../views/AuthPages/Default/LockScreen1')
const ConfirmMail1 = () => import('../views/AuthPages/Default/ConfirmMail1')
const Callback = () => import('../views/AuthPages/Default/Callback')

/* Extra Pages */
const ErrorPage = () => import('../views/Pages/ErrorPage')
const Maintenance = () => import('../views/Pages/Maintenance')
const BlankPage = () => import('../views/Pages/BlankPage')


/* User View */
const Profile = () => import('../views/User/Profile')
const ProfileEdit = () => import(/* webpackChunkName:"edit-user"*/ '../views/User/ProfileEdit')
const AddUser = () => import(/* webpackChunkName:"add-user"*/ '../views/User/AddUser')
const UserList = () => import('../views/User/UserList')

/*Block View */
const BlockApp = () => import(/* webpackChunkName:"list-block"*/ '../views/App/Block/BlockApp')

/* Unit View */
const AddUnit = () => import(/* webpackChunkName:"add-unit"*/ '../views/Unit/AddUnit')
const ListUnit = () => import(/* webpackChunkName:"list-unit"*/ '../views/Unit/ListUnit')
const ConfigUnit = () => import(/* webpackChunkName:"config-unit"*/ '../views/Unit/ConfigUnit')


/* Config View */
const RoleApp = () => import(/* webpackChunkName:"role-app"*/ "../views/Config/Role/RoleApp");

/* Comunication View */
const CategoryApp = () => import(/* webpackChunkName:"advertisement-category-app"*/ "../views/Comunication/AdvertisementCategory/CategoryApp");

Vue.use(VueRouter)

const childRoutes = (prop) => [
    {
        path: 'home',
        name: prop + '.home',
        meta: {auth: true, name: 'Home'},
        component: Dashboard
    },
]

const authChildRoutes = (prop) => [
    {
        path: 'sign-in1',
        name: prop + '.sign-in1',
        meta: {auth: false},
        component: SignIn1
    },
    {
        path: 'sign-up1',
        name: prop + '.sign-up1',
        meta: {auth: true},
        component: SignUp1
    },
    {
        path: 'password-reset1',
        name: prop + '.password-reset1',
        meta: {auth: false},
        component: RecoverPassword1
    },
//     {
//         path: 'lock-screen1',
//         name: prop + '.lock-screen1',
//         meta: {auth: true},
//         component: LockScreen1
//     },
//     {
//         path: 'confirm-mail1',
//         name: prop + '.confirm-mail1',
//         meta: {auth: true},
//         component: ConfirmMail1
//     }
]

const defaultlayout = (prop) => [
    {
        path: 'blank-page',
        name: prop + '.blank-page',
        meta: {auth: true, name: 'Blank Page'},
        component: BlankPage
    },
]

const pagesChildRoutes = (prop) => [
    {
        path: 'error/:code',
        name: prop + '.error',
        meta: {auth: true},
        component: ErrorPage
    },

    {
        path: 'maintenance',
        name: prop + '.maintenance',
        meta: {auth: true},
        component: Maintenance
    }
]


//*-------------------------------//
//--- USUARIOS                   //
//-------------------------------//
const userChildRoute = (prop) => [
    {
        path: 'profile',
        name: prop + '.profile',
        meta: {auth: true, name: 'Mi perfil'},
        component: Profile
    },
    {
        path: 'profile-edit/:id',
        name: prop + '.edit',
        meta: {auth: true, name: 'Edit Profile'},
        component: ProfileEdit,
        props: true
    },
    {
        path: 'add-user',
        name: prop + '.add',
        meta: {auth: true, name: 'Crear usuario'},
        component: AddUser
    },
    {
        path: 'user-list',
        name: prop + '.list',
        meta: {auth: true, name: 'Lista de usuarios'},
        component: UserList
    }
]

//*-------------------------------//
//          UNIDADES             //
//-------------------------------//
const unitChildRoute = (prop) => [
    {
        path: 'add-unit',
        name: prop + '.add',
        meta: {auth: true, name: 'Crear Unidad'},
        component: AddUnit
    },
    {
        path: 'list-unit',
        name: prop + '.list',
        meta: {auth: true, name: 'Lista de unidades'},
        component: ListUnit
    },
    {
        path: ':id/configuration',
        name: prop + '.configuration',
        meta: {auth: true, name: 'Configuracion'},
        component: ConfigUnit,
        props: true
    },
]


//*-------------------------------//
//------ Rutas APP               //
//-------------------------------//

const arcadomiRoutes = (prop) => [
    {
        path: '/block',
        name: prop + '.block',
        meta: {auth: true, name: 'Lista de Bloques'},
        component: BlockApp
    },
]

//*-------------------------------//
//-----Config child routes        //
//-------------------------------//

const configChildRoute = (prop) => [
    {
        path: '/role',
        name: prop + '.role',
        meta: {auth: true, name: 'Roles'},
        component: RoleApp
    },
]

const comunicationChildRoute = (prop) => [
    {
        path: 'categories',
        name: prop + '.categories',
        meta: {auth: true, name: 'Categorías'},
        component: CategoryApp
    },
]


//*-------------------------------//
//-----------RUTAS GENERALES      //
//-------------------------------//

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: VerticleLayout,
        meta: {auth: true},
        children: childRoutes('dashboard')
    },
    {
        path: '/auth',
        name: 'auth1',
        component: AuthLayout,
        meta: {auth: true},
        children: authChildRoutes('auth1')
    },
    {
        path: '/pages',
        name: 'pages',
        component: Default,
        meta: {auth: true},
        children: pagesChildRoutes('default')
    },
    {
        path: '/extra-pages',
        name: 'extra-pages',
        component: VerticleLayout,
        meta: {auth: true},
        children: defaultlayout('extra-pages')
    },
    {
        path: '/user',
        name: 'user',
        component: VerticleLayout,
        meta: {auth: true},
        children: userChildRoute('user')
    },
    {
        path: '/app',
        name: 'app',
        component: VerticleLayout,
        meta: {auth: true},
        children: arcadomiRoutes('app')
    },
    {
        path: '/unit',
        name: 'unit',
        component: VerticleLayout,
        meta: {auth: true},
        children: unitChildRoute('unit')
    },
    {
        path: '/config',
        name: 'config',
        component: VerticleLayout,
        meta: {auth: true},
        children: configChildRoute('config')
    },
    {
        path: '/comunication',
        name: 'comunication',
        component: VerticleLayout,
        meta: {auth: true},
        children: comunicationChildRoute('comunication')
    },

    {
        path: '/callback',
        name: 'callback',
        meta: {auth: false},
        component: Callback
    }
]


axios.interceptors.response.use(response => {
    if (response.data.status == false) {
        store.commit('Auth/CLEAR_USER_DATA');
    }
    return response
});


const router = new VueRouter({
    mode: 'history',
    base: process.env.MIX_SENTRY_DSN_INDEX,
    routes
})
router.beforeEach((to, from, next) => {

    store.commit('CLEAR_ERRORS');

    const publicPages = ['/auth/sign-in1', '/auth/sign-up1', '/dark/auth/sign-in1', '/dark/auth/sign-up1']
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = store.state.Auth.user


    if (to.meta.auth) {
        if (authRequired && loggedIn === null) {
            return next('/auth/sign-in1')
        } else if (to.name === 'dashboard' || to.name === 'mini.dashboard') {
            return next('/home')
        }
    } else {
        if (loggedIn) {
            return next('/home')
        } else {
            next()
        }
    }
    next()
})

export default router
