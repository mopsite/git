---
aside: false
---

# 使用 Gitee

使用 GitHub 时，国内的用户经常遇到的问题是访问速度太慢，有时候还会出现无法连接的情况（原因你懂的）。

如果我们希望体验 Git 飞一般的速度，可以使用国内的 Git 托管服务——[Gitee](https://gitee.com)。

和 GitHub 相比，Gitee 也提供免费的 Git 仓库。此外，还继承了代码质量检测、项目演示等功能。对于团队协作开发，Gitee 还提供了项目管理、代码托管、文档管理的服务，5 人以下小团队免费。

:::tip 提示
Gitee 的免费版本也提供私有库功能，只是有 5 人的成员上限。
:::

使用 Gitee 和 GitHub 类似，我们在 Gitee 上注册账号并登录后，需要先上传自己的 SSH 公钥。选择右上角用户头像 → 菜单【修改资料】，然后选择【SSH 公钥】，填写一个便于识别的标题，然后把用户主目录下的 `.ssh/id_rsa.pub` 文件内容粘贴进去：

![09](./images/09.jpeg)

点击确定即可完成并看到刚才添加的 Key：

![10](./images/10.jpeg)

如果我们已经有了一个本地的 Git 仓库（例如，一个名为 learngit 的本地库），如何把它关联到 Gitee 的远程库上呢？

首先，我们在 Gitee 创建一个新的项目，选择右上角用户头像 → 菜单【控制面板】，然后点击【创建项目】：

![11](./images/11.jpeg)

项目名称最好与本地库一致。

然耨，我们在本地库上使用命令 `git remote add` 把它和 Gitee 的远程库关联：

```sh
$ git remote add origin git@gitee.com:liaoxuefeng/learngit.git
```

之后，就可以正常第用 `git push` 和 `git pull` 推送了。

如果在使用命令 `git remote add` 时报错：

```
git remote add origin git@gitee.com:liaoxuefeng/learngit.git
fatal: remote origin already exists.
```

这说明本地库已经关联了一个名叫 `origin` 的远程库，此时，可以先用 `git remote -v` 查看远程库信息：

```sh
$ git remote -v
origin	git@github.com:michaelliao/learngit.git (fetch)
origin	git@github.com:michaelliao/learngit.git (push)
```

可以看到，本地库已经关联了 `origin` 的远程库，并且该远程库指向 GitHub。

我们可以删除已有的 GitHub 远程库：

```sh
$ git remote rm origin
```

再关联 Gitee 的远程库（注意路径中需要填写正确的用户名）：

```sh
$ git remote add origin git@gitee.com:liaoxuefeng/learngit.git
```

此时，我们在查看远程库信息：

```sh
$ git remote -v
origin	git@gitee.com:liaoxuefeng/learngit.git (fetch)
origin	git@gitee.com:liaoxuefeng/learngit.git (push)
```

现在可以看到，origin 已经被关联到 Gitee 的远程库了。通过 `git push` 命令就可以把本地库推送到 Gitee 上。

有的小伙伴又要问了，一个本地库能不能既关联 GitHub，又关联 Gitee 呢？

答案是肯定的，因为 Git 本身是分布式版本控制系统，可以同步到另一个远程库，当然也可以同步到另外两个远程库。

仍然以 learngit 本地库为例，我们先删除已关联的名为 origin 的远程库：

```sh
$ git remote rm origin
```

然后，先关联 GitHub 的远程库：

```sh
$ git remote add github git@github.com:michaelliao/learngit.git
```

注意，远程库的名称叫 github，不叫 origin 了。

接着，再关联 Gitee 的远程库：

```sh
$ git remote add gitee git@gitee.com:liaoxuefeng/learngit.git
```

同样注意，远程库的名称叫 gitee，不叫 origin。

现在，我们用 `git remote -v` 查看远程库信息，可以看到两个远程库：

```sh
$ git remote -v
gitee	git@gitee.com:liaoxuefeng/learngit.git (fetch)
gitee	git@gitee.com:liaoxuefeng/learngit.git (push)
github	git@github.com:michaelliao/learngit.git (fetch)
github	git@github.com:michaelliao/learngit.git (push)
```

如果要推送到 GitHub，使用命令：

```sh
$ git push github master
```

如果要推送到 Gitee，使用命令：

```sh
$ git push gitee master
```

这样一来，我们的本地库就可以同时与多个远程库相互同步。

Gitee 也同样提供了 pull request 功能，可以让其他小伙伴参与到开源项目中来。你可以通过 Fork 我的仓库 <https://gitee.com/liaoxuefeng/learngit>，创建一个 `your-gitee-id.txt` 的文本文件，写点自己学习 Git 的心得，然后推送一个 pull request 给我，这个仓库会在 GitHub 和 Gitee 当做双向同步。
