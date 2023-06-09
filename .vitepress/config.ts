import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "WSVAIO",
  description: "我的个人博客",
  themeConfig: {
    siteTitle: "WSVAIO",
    logo: "/logo.jpg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文章', link: '/articles/第一篇文章.md' }
    ],

    sidebar: [
      {
        text: '文章',
        items: [
          { text: '第一篇文章', link: '/articles/第一篇文章.md' },
          { text: '从零开始搭建后台开发框架项目记实', link: '/articles/从零开始搭建后台开发框架项目记实.md' },
        ]
      },

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wsvaio' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present WSVAIO'
    },

    algolia: {
      appId: '...',
      apiKey: '...',
      indexName: '...',

    },
    

    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    },

    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题"    
  },

})
