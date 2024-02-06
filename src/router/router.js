import {createRouter, createWebHashHistory} from 'vue-router'
import LoginForm from "../components/LoginForm.vue";
import ResumePage from "../components/ResumePage.vue";
import BlogPage from "../components/BlogPage.vue";
import Pseudoclasses from "../components/Pseudoclasses.vue";
import FontSetting from "../components/FontSetting.vue";
import FloatBox from "../components/FloatBox.vue";
import LayoutPractice from "../components/LayoutPractice.vue";
import PositionSetting from "../components/PositionSetting.vue";
import BuildingForms from "../components/BuildingForms.vue";
import ResponsivePage from "../components/ResponsivePage.vue";
import RegisterPage from "../components/RegisterPage.vue";
import ImageProcess from "../components/ImageProcess.vue";
import FloatLayout from "../components/FloatLayout.vue";


const  routes = [
    {
        name: 'LoginPage',
        path: '/',
        component:  LoginForm
    },
    {
        name: 'ResumePage',
        path: '/resumePage',
        component: ResumePage
    },{
        name: 'BlogPage',
        path: '/blogPage',
        component: BlogPage
    },{
        name: 'PseudoPage',
        path: '/pseudoPage',
        component: Pseudoclasses
    },{
        name: 'FontSetting',
        path: '/fontSetting',
        component: FontSetting
    },{
        name: 'FloatBox',
        path: '/floatBox',
        component: FloatBox
    },{
        name: 'LayoutPractice',
        path: '/layoutPractice',
        component: LayoutPractice
    },{
        name:'PositionSetting',
        path:'/positionSetting',
        component: PositionSetting
    },{
        name:'BuildingForms',
        path:'/buildingForms',
        component: BuildingForms
    },{
        name: 'ResponsivePage',
        path: '/responsivePage',
        component: ResponsivePage
    },{
        name: 'RegisterPage',
        path: '/registerPage',
        component: RegisterPage
    },{
        name: 'ImageProcess',
        path: '/imageProcess',
        component: ImageProcess
    },{
        name: 'FloatLayout',
        path: '/floatLayout',
        component: FloatLayout
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router