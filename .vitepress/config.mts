import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: "本易云",
    description: "本易物联网数据中台 南京本易物联网有限公司",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        logo: './logo.png',

        lastUpdated: {
            text: '最后更新',
        },

        search: {
            provider: 'local'
        },

        nav: [
            {text: '首页', link: '/'},
            {
                text: '产品', items: [
                    {text: '本易云', link: '/busy-cloud/'},
                    {text: '物联大师', link: '/iot-master/'},
                    {text: '物联小白', link: '/iot-noob/'},
                ]
            },
            {
                text: '资源', items: [
                    {text: '产品库', link: 'https://hub.busycloud.cn'},
                    {text: '应用库', link: 'https://hub.busycloud.cn'},
                ]
            },
            {
                text: '公司', items: [
                    {text: '招聘', link: '/company/careers'},
                    {text: '合作伙伴', link: '/company/partners'},
                    {text: '关于我们', link: '/company/about'},
                ]
            },
        ],

        footer: {
            message: '<a href="http://beian.miit.gov.cn">苏ICP备2024141405号-1</a>',
            copyright: '版权所有 © 2024-今 南京本易物联网有限公司'
        },

        editLink: {
            pattern: 'https://github.com/busy-cloud/docs/edit/main/:path',
            text: '编辑本页'
        },

        sidebar: {
            '/busy-cloud/': [
                {
                    text: '本易云', base: '/busy-cloud/', items: [
                        {text: '说明', link: 'index'},
                        {text: '下载安装', link: 'install'},
                        {
                            text: 'MQTT', items: [
                                {text: '鉴权', link: 'mqtt-auth'},
                                {text: '设备消息', link: 'mqtt-device'},
                                {text: '网关消息', link: 'mqtt-gateway'},
                                {text: '平台消息', link: 'mqtt-platform'},
                            ]
                        },
                        {
                            text: '物模型', items: [
                                {text: '属性', link: 'model-attribute'},
                                {text: '事件', link: 'model-event'},
                                {text: '操作', link: 'model-action'},
                            ]
                        },
                        {
                            text: '使用手册', items: [
                                {text: '网关管理', link: '-'},
                                {text: '设备管理', link: '-'},
                                {text: '产品管理', link: '-'},
                                {text: '数据管理', link: '-'},
                                {text: '用户管理', link: '-'},
                            ]
                        },
                        {
                            text: '插件', items: [
                                {text: '数据仓库', link: '-'},
                                {text: 'web应用托管', link: '-'},
                                {text: 'web组态', link: '-'},
                                {text: '用户管理', link: '-'},
                            ]
                        },
                    ]
                },
                {
                    text: '更多', items: [
                        {text: '物联大师', link: '/iot-master'},
                        {text: '物联小白', link: '/iot-noob'},
                    ]
                }
            ],

            '/iot-master/': [],

            '/iot-noob/': [],
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/busy-cloud/busycloud'}
        ]
    }
})
