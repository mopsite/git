---
# https://vitepress.dev/zh/reference/default-theme-home-page
layout: home
titleTemplate: 世上最浅显易懂的 Git 教程

hero:
  name: Git-SCM
  tagline: 世上最浅显易懂的 Git 教程
  image:
    src: /logo.svg
  actions:
    - theme: brand
      text: 开始学习
      link: /base/start/intro
    - theme: alt
      text: 教程原文
      link: https://www.liaoxuefeng.com/wiki/896043488029600

features:
  - icon: 👍🏻
    title: 最先进的
    details: Git 是目前世界上最先进的分布式版本控制系统，没有之一。
  - icon: 🤗
    title: 本地执行
    details: 绝大多数操作只需访问本地文件，无需来自网络上的其他信息。
  - icon: 🚗
    title: 高安全性
    details: 数据在存储前都计算校验和，Git 不会在不知情时更改任何内容。
  - icon: 📚
    title: 浅显易懂
    details: 没有学过版本控制概念的读者也可以轻松入门，不必担心起步难度。
  - icon: ❤️
    title: 边学边练
    details: 本教程由浅入深，且实用性超强。边学边练，完全不会觉得枯燥。
  - icon: ⭐️
    title: 充分必要
    details: 你所学的 Git 命令“充分且必要”，使用它们可以轻松完成工作。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(-45deg, #E70816 5%, #E48F02);

  --vp-home-hero-image-background-image: linear-gradient(0deg, #E70816 15%, #E48F02 30%, #00A84D 60%, #007EC3 75%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>
