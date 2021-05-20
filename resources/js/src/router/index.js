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


<<<<<<< HEAD
//*-------------------------------//
//--- USUARIOS                   //
//-------------------------------//
const userChildRoute = (prop) => [
    {
        path: 'perfil',
        name: prop + '.profile',
        meta: {auth: true, name: 'Mi perfil', abilitie: 'mi-profile'},
        component: Profile
    },
    {
        path: 'editar-usuario/:id',
        name: prop + '.edit',
        meta: {auth: true, name: 'Edit Profile', abilitie: 'admin-user'},
        component: ProfileEdit,
        props: true
    },
    {
        path: 'crear-usuario',
        name: prop + '.add',
        meta: {auth: true, name: 'Crear usuario', abilitie: 'admin-user'},
        component: AddUser,
        alias: 'admin-user'
    },
    {
        path: 'lista-de-usuarios',
        name: prop + '.list',
        meta: {auth: true, name: 'Lista de usuarios', abilitie: 'read-user'},
        component: UserList
    }
]

//*-------------------------------//
//          UNIDADES             //
//-------------------------------//
const unitChildRoute = (prop) => [
    {
        path: 'crear-unidad',
        name: prop + '.add',
        meta: {auth: true, name: 'Crear Unidad'},
        component: AddUnit
    },
    {
        path: 'lista-de-unidades',
        name: prop + '.list',
        meta: {auth: true, name: 'Lista de unidades'},
        component: ListUnit
    },
    {
        path: ':id/configuracion',
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
        path: 'bloques',
        name: prop + '.block',
        meta: {auth: true, name: 'Lista de Bloques'},
        component: BlockApp
    },
]
=======
>>>>>>> c691d8263a4006061c6c8676464ede87d5956fd6

//*-------------------------------//
//-----Config child routes        //
//-------------------------------//

const configChildRoute = (prop) => [
    {
        path: 'role',
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
<<<<<<< HEAD
        path: '/usuario',
        name: 'user',
        component: VerticleLayout,
        meta: {auth: true, abilitie: 'read-user'},
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
        path: '/unidades',
        name: 'unit',
        component: VerticleLayout,
        meta: {auth: true},
        children: unitChildRoute('unit')
    },
    {
=======
>>>>>>> c691d8263a4006061c6c8676464ede87d5956fd6
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
<<<<<<< HEAD
    const publicPages = ['/auth/sign-in1', '/auth/sign-up1', '/dark/auth/sign-in1', '/dark/auth/sign-up1']
=======

    const publicPages = ['/login', '/dark/login']
>>>>>>> c691d8263a4006061c6c8676464ede87d5956fd6
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = store.state.Auth.user
    const abilities = store.state.Auth.abilities;

    if (to.meta.auth) {

        if (authRequired && loggedIn === null) {
            return next('/login')
        } else if (to.name === 'dashboard' || to.name === 'mini.dashboard') {
            return next('/')
        }
        else {

            if (abilities.includes('*')) {
                next()
            } else {
                if (abilities.includes(to.name) || abilities.includes(to.meta.abilitie)) {
                    next()
                } else {
                    return next('/pages/error/404')
                }
            }
        }

    } else {
        if (loggedIn) {
            return next('/')
        } else {
            next()
        }
    }





    next();


})

export default router
