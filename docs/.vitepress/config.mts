import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //base: '/vitepress-sleep/',
  title: "早睡",
  description: "早睡健康生活",
    locales: {
    en: {
      label: 'English',
      lang: '/en',
    },
    root: {
      label: '简体中文',
      lang: '/zh_cn',
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      //{ text: 'Home', link: '/' },
      { text: '更新日志', link: '/update_log' },
      { text: '用户协议', link: '/protocol' },
      { text: '隐私政策', link: '/privacy' },
    ],
    sidebar: [
      {
        //text: 'Examples',
        items: [{ text: '更新日志', link: '/' },
                { text: '用户协议', link: '/protocol' },
                { text: '隐私政策', link: '/privacy' },
        ]
      }
    ],

    socialLinks: [
      //{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
            //页脚
    footer: { 
      message: 'Released under the MIT License.',
      copyright: 'Copyright @ 2017~2024 , All Rights Reserved. ' 
    },
  },
})
