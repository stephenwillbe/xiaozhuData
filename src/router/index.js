import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/Index";
import AnalysisUser from "../views/system/base/AnalysisUser";
import AnalysisSave from "../views/system/base/AnalysisSave";
import PayData from "../views/system/charge/PayData";
import PayDeep from "../views/system/charge/PayDeep";
import ARPPU from "../views/system/charge/ARPPU";
import RealTimeData from "../views/system/online/RealTimeData";
import OnlineAnalysis from "../views/system/online/OnlineAnalysis";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '基础数据',
        component: Index,
        redirect:'/baseUser',
        children: [
            {
                path: '/baseUser',
                name: '用户分析',
                component: AnalysisUser
            },
            {
                path: '/baseSave',
                name: '留存分析',
                component: AnalysisSave
            }
        ]
    },
    {
        path: '/',
        name: '充值数据',
        component: Index,
        children: [
            {
                path: '/payData',
                name: '付费数据',
                component: PayData
            },
            {
                path: '/payDeep',
                name: '付费深度',
                component: PayDeep
            },
            {
                path: '/arppu',
                name: 'ARPPU',
                component: ARPPU
            }
        ]
    },
    {
        path: '/',
        name: '在线分析',
        component: Index,
        children: [
            {
                path: '/onlineData',
                name: '实时数据',
                component: RealTimeData
            },
            {
                path: '/onlineAnalysis',
                name: '在线分析',
                component: OnlineAnalysis
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
