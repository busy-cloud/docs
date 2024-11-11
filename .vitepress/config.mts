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
            {text: '文档', link: '/busy-cloud'},
            {text: '产品库', link: '/product'},
            {text: '应用库', link: '/app'},
        ],

        footer: {
            message: '<a href="http://beian.miit.gov.cn">苏ICP备2024141405号-1</a>',
            copyright: '版权所有 © 2024-今 南京本易物联网有限公司'
        },

        editLink: {
            pattern: 'https://github.com/busy-cloud/docs/edit/main/:path',
            text: '编辑本页'
        },

        sidebar: [
            {
                text: '本易云',
                items: [
                    {text: '说明', link: '/busy-cloud'},
                    {text: '下载安装', link: '/busy-cloud/install'},
                    {text: 'MQTT消息定义', link: '/busy-cloud/mqtt'},
                    {text: '物模型定义', link: '/busy-cloud/model'},
                ]
            },
            {
                text: '物联大师',
                items: [
                    {text: '说明', link: '/iot-master'},
                ]
            },
            {
                text: '物联小白',
                items: [
                    {text: '说明', link: '/iot-noob'},
                ]
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/busy-cloud'}
        ]
    }
})
