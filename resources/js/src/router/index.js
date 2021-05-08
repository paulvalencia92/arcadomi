import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store/index'
import axios from "axios";


/* Layouts */
const VerticleLayout = () => import('../layouts/VerticleLayout')
const Default = () => import('../layouts/BlankLayout')
const AuthLayout = () => import('../layouts/AuthLayouts/AuthLayout')

/* Dashboards View */
const Dashboard = () => import(/* webpackChunkName:"dashboard"*/ '../views/Dashboards/Dashboard.vue')

/* Authentic View */
import Login from "../views/Auth/Login";
import RecoverPassword from "../views/Auth/RecoverPassword";
const Callback = () => import(/* webpackChunkName:"callback"*/ '../views/Auth/Callback')

/* Extra Pages */
const ErrorPage = () => import('../views/Pages/ErrorPage')
const Maintenance = () => import('../views/Pages/Maintenance')
const BlankPage = () => import('../views/Pages/BlankPage')

/* User View */
const Profile = () => import(/* webpackChunkName:"profile"*/ '../views/User/Profile')
const ProfileEdit = () => import(/* webpackChunkName:"edit-user"*/ '../views/User/ProfileEdit')
const AddUser = () => import(/* webpackChunkName:"add-user"*/ '../views/User/AddUser')
const UserList = () => import(/* webpackChunkName:"list-users"*/ '../views/User/UserList')

/*Block View */
const BlockApp = () => import(/* webpackChunkName:"list-block"*/ '../views/Block/BlockApp')

/* Unit View */
const AddUnit = () => import(/* webpackChunkName:"add-unit"*/ '../views/Unit/AddUnit')
const ListUnit = () => import(/* webpackChunkName:"list-unit"*/ '../views/Unit/ListUnit')
const ConfigUnit = () => import(/* webpackChunkName:"config-unit"*/ '../views/Unit/ConfigUnit')


/* Config View */
const RoleApp = () => import(/* webpackChunkName:"role-app"*/ "../views/Config/Role/RoleApp");

/* Comunication View */
const CategoryApp = () => import(/* webpackChunkName:"advertisement-category-app"*/ "../views/Comunication/AdvertisementCategory/CategoryApp");
const AdvertisementApp = () => import(/* webpackChunkName:"advertisement-app"*/ "../views/Comunication/Advertisement/AdvertisementApp");
const CreateAdvertisement = () => import(/* webpackChunkName:"advertisement-app"*/ "../views/Comunication/Advertisement/CreateAdvertisement");
const DetailAdvertisement = () => import(/* webpackChunkName:"advertisement-detail"*/ "../views/Comunication/Advertisement/DetailAdvertisement");

Vue.use(VueRouter)

const childRoutes = (prop) => [
    {
        path: '/',
        name: prop + '.home',
        meta: {auth: true, name: 'Home'},
        component: Dashboard
    },
    {
        path: '/perfil',
        name: 'show.profile',
        meta: {auth: true, name: 'Mi perfil'},
        component: Profile
    },
    {
        path: '/usuarios',
        name: 'list.users',
        meta: {auth: true, name: 'Lista de usuarios'},
        component: UserList
    },
    {
        path: '/usuarios/:id/editar',
        name: 'edit.users',
        meta: {auth: true, name: 'Editar perfil'},
        component: ProfileEdit,
        props: true
    },
    {
        path: '/usuarios/crear',
        name: 'add.users',
        meta: {auth: true, name: 'Crear usuario'},
        component: AddUser
    },
    {
        path: '/bloques',
        name: 'list.blocks',
        meta: {auth: true, name: 'Lista de Bloques'},
        component: BlockApp
    },
    {
        path: '/unidades',
        name: 'list.units',
        meta: {auth: true, name: 'Lista de unidades'},
        component: ListUnit
    },
    {
        path: '/unidades/crear',
        name: 'add.units',
        meta: {auth: true, name: 'Crear Unidad'},
        component: AddUnit
    },
    {
        path: '/unidades/:id/configuracion',
        name: 'config.units',
        meta: {auth: true, name: 'Configuracion'},
        component: ConfigUnit,
        props: true
    },
    {
        path: '/anuncios',
        name: 'list.advertisements',
        meta: {auth: true, name: 'Anuncios'},
        component: AdvertisementApp,
    },
    {
        path: '/anuncios/crear',
        name: 'add.advertisements',
        meta: {auth: true, name: 'Crear anuncio'},
        component: CreateAdvertisement,
    },
    {
        path: '/anuncios/:id/detalle',
        name: 'detail.advertisements',
        meta: {auth: true, name: 'Detalle del anuncio'},
        component: DetailAdvertisement,
        props: true
    },
    {
        path: '/anuncios/categorias',
        name: 'categories.advertisements',
        meta: {auth: true, name: 'Categorías'},
        component: CategoryApp
    },
]

const authChildRoutes = (prop) => [
    {
        path: 'login',
        name: prop + '.login',
        meta: {auth: false},
        component: Login
    },
    {
        path: 'password-reset',
        name: prop + '.password-reset',
        meta: {auth: false},
        component: RecoverPassword
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
        path: '/',
        name: 'auth',
        component: AuthLayout,
        meta: {auth: true},
        children: authChildRoutes('auth')
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
        path: '/config',
        name: 'config',
        component: VerticleLayout,
        meta: {auth: true},
        children: configChildRoute('config')
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

    const publicPages = ['/login', '/dark/login']
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = store.state.Auth.user


    if (to.meta.auth) {
        if (authRequired && loggedIn === null) {
            return next('/login')
        } else if (to.name === 'dashboard' || to.name === 'mini.dashboard') {
            return next('/')
        }
    } else {
        if (loggedIn) {
            return next('/')
        } else {
            next()
        }
    }
    next()
})

export default router
