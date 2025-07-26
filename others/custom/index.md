---
aside: false
---

# 自定义 Git

在[安装 Git](../../base/start/install#配置)一节中，我们已经配置了 `user.name` 和 `user.email`，实际上，Git 还有很多配置项。

比如，让 Git 显示颜色，会让命令输出看起来更醒目：

```sh
$ git config --global color.ui true
```

这样，Git 会适当地显示不同的颜色，比如 `git status` 命令：

![01](../images/01.png)

文件名就会标色颜色。

我们在后面还会介绍如何更好地配置 Git，以便让你的工作更高效。
