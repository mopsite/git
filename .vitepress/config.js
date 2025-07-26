import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.BASE_URL || '/git/',
  title: 'Git-SCM',
  description: '世上最浅显易懂的 Git 教程',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `${process.env.BASE_URL || '/git/'}logo.svg`
      }
    ]
  ],
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/zh/reference/default-theme-config
    logo: '/logo.svg',

    outline: { label: '本页目录', level: [2, 3] },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    docFooter: { prev: '上一篇', next: '下一篇' },
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
                displayDetails: '显示详细列表',
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

    nav: nav(),
    sidebar: {
      '/base/': sidebarBase(),
      '/senior/': sidebarSenior(),
      '/others/': sidebarOthers()
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/mopsite/git' }]
  }
})

function nav() {
  return [
    {
      text: '基础',
      items: [
        { text: '快速开始', link: '/base/start/', activeMatch: '/start/' },
        { text: '版本控制', link: '/base/control/', activeMatch: '/control/' }
      ],
      activeMatch: '/base/'
    },
    {
      text: '高级',
      items: [
        { text: '远程仓库', link: '/senior/remote/', activeMatch: '/remote/' },
        { text: '分支管理', link: '/senior/branch/', activeMatch: '/branch/' },
        { text: '标签管理', link: '/senior/tag/', activeMatch: '/tag/' }
      ],
      activeMatch: '/senior/'
    },
    {
      text: '其他',
      items: [
        {
          text: '自定义 Git',
          link: '/others/custom/',
          activeMatch: '/custom/'
        },
        { text: 'GUI 工具', link: '/others/gui' },
        { text: '命令速查表', link: '/others/cheat-sheet' }
      ],
      activeMatch: '/others/'
    }
  ]
}

function sidebarBase() {
  return [
    {
      text: '快速开始',
      link: '/base/start/',
      collapsed: false,
      items: [
        { text: 'Git 是什么', link: '/base/start/intro' },
        { text: 'Git 的诞生', link: '/base/start/born' },
        { text: '集中式 VS 分布式', link: '/base/start/cvsd' },
        { text: '安装 Git', link: '/base/start/install' },
        { text: '创建版本库', link: '/base/start/create' }
      ]
    },
    {
      text: '版本控制',
      link: '/base/control/',
      collapsed: false,
      items: [
        { text: '版本回退', link: '/base/control/reset' },
        { text: '工作区和暂缓区', link: '/base/control/directory' },
        { text: '管理修改', link: '/base/control/manage' },
        { text: '撤销修改', link: '/base/control/revoke' },
        { text: '删除文件', link: '/base/control/delete' }
      ]
    }
  ]
}

function sidebarSenior() {
  return [
    {
      text: '远程仓库',
      link: '/senior/remote/',
      collapsed: false,
      items: [
        { text: '添加远程仓库', link: '/senior/remote/add' },
        { text: '从远程仓库克隆', link: '/senior/remote/clone' },
        { text: '参与开源项目', link: '/senior/remote/join' },
        { text: '推送指定文件夹', link: '/senior/remote/subtree' },
        { text: '管理多个远程账户', link: '/senior/remote/accounts' },
        { text: '使用 Gitee', link: '/senior/remote/gitee' }
      ]
    },
    {
      text: '分支管理',
      link: '/senior/branch/',
      collapsed: false,
      items: [
        { text: '创建与合并分支', link: '/senior/branch/create' },
        { text: '解决冲突', link: '/senior/branch/conflicts' },
        { text: '分支管理策略', link: '/senior/branch/manage' },
        { text: 'Bug 分支', link: '/senior/branch/bug' },
        { text: 'Feature 分支', link: '/senior/branch/feature' },
        { text: '多人协作', link: '/senior/branch/cooperation' },
        { text: 'Rebase', link: '/senior/branch/rebase' }
      ]
    },
    {
      text: '标签管理',
      link: '/senior/tag/',
      collapsed: false,
      items: [
        { text: '创建标签', link: '/senior/tag/create' },
        { text: '操作标签', link: '/senior/tag/operate' }
      ]
    }
  ]
}

function sidebarOthers() {
  return [
    {
      text: '自定义 Git',
      link: '/others/custom/',
      collapsed: false,
      items: [
        { text: '忽略特殊文件', link: '/others/custom/ignore' },
        { text: '配置别名', link: '/others/custom/alias' },
        { text: '使用 Git 服务器', link: '/others/custom/server' }
      ]
    },
    { text: 'GUI 工具', link: '/others/gui' },
    { text: '命令速查表', link: '/others/cheat-sheet' }
  ]
}
