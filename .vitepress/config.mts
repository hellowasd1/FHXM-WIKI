import { defineConfig } from 'vitepress'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import MiniSearch from 'minisearch'

const commitRef = process.env.COMMIT_REF?.slice(0, 8) || "繁花星梦";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  locales: {
    root: { label: "简体中文", lang: "zh" },
  },
  title: "繁花星梦官方文档",
  description: "繁花Minecraft-WIKI",
  lang: "zh",
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在GitHub上编辑此页面'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/index.md' },
      { text: '小黑屋', link: 'http://fhxmban.mghy.top:25566' }
    ],

    sidebar: [
      {
        text: "🐟WIKI介绍",
        link: "/WIKI",
      },
      {
        text: '简介',
        collapsed: false,
        items: [
          { text: '📢服务器介绍', link: '/Server_introduce/Basic_introduce' },
          { text: '🍈繁花星梦·冒险篇', link: '/Server_introduce/adventure' },
          { text: '🍉繁花星梦·养老篇', link: '/Server_introduce/Retirement' },
          { text: '💻管理员', link: '/Server_introduce/administrators' },
          { text: '💸本服赞助', link: '/Server_introduce/sponsor' },
          { text: '💳️费用公示单', link: '/Server_introduce/Configuration_and_cost_list' },
          { text: '🆕NEW更新报告', link: '/Server_introduce/update' },
        ],
      },
      {
        items: [
          { text: "📄新人手册3.0", link: "/tutorial/README" },
        ],
      },
      {
        items: [
          { text: "📜指令列表", link: "/instructions/README" },
        ],
      },
      {
        items: [
          { text: "📑服务器规则", link: "/Server_rule/README" },
        ],
      },
      {
        items: [
          { text: "🎥宣传片", link: "/disseminate/README" },
        ],
      },
      {
        text: '🌟正在进行的活动',
        collapsed: true,
        items: [
          { text: "🌟国庆活动", link: "/Ongoing_activities/National_Day_activities" },
          { text: "⭐长期活动", link: "/Ongoing_activities/Long_term_activities" },
        ],
      },
      {
        text: '❓相关问题',
        items: [
          { text: "❗问题汇总", link: "/Related_problem/Summary" },
          {
            text: '❓服务器为什么进不去',
            collapsed: true,
            items: [
              { text: "📇目录", link: "/Related_problem/problem" },
              { text: "🐯教程A丨天虎篇", link: "/Related_problem/connect_failed/A" },
              { text: "😸教程B丨喵喵篇", link: "/Related_problem/connect_failed/B" },
            ],
          },
          { text: "🐛BUG合集", link: "/Related_problem/BUG" },
        ],
      },
      {
        items: [
          { text: "❌小黑屋", link: "http://fhxmban.mghy.top:25566" },
        ],
      },
    ],

    footer: {
      message: `服务器地址: [mc.fhxm.top] (${commitRef})`,
      copyright: "Copyright © 2023-2024 MiaoMiao",
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})