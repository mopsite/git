---
aside: false
---

# 推送指定文件夹

假如某个 git 项目有三个平行的目录 `p1/`、`p2/`、`p3/`。随着开发进程的推移，发现这三个目录的代码或文件的关联度很低，实际上是各自独立的。这是可以使用 p1proj、p2proj、p3proj 这三个分支来进行管理（关于分支的概念请查看[分支管理](../branch/)），而原来的 master 分支继续保留。

`git subtree` 就适合这种通过分支来管理文件的情况：

```sh
$ git subtree push --prefix p1 origin p1proj
$ git subtree push --prefix p2 origin p2proj
$ git subtree push --prefix p3 origin p3proj
```

最常见的场景是写 VitePress 文档，通常文档的位置在项目的 `docs/.vitepress/dist` 目录中，并且文档部署的地方是 GitHub 中的 gh-pages 分支。

那么可以执行下面命令，将 dist 目录推送到 gh-pages 分支：

```sh
$ git subtree push --prefix docs/.vitepress/dist origin gh-pages
```

此时，项目有 master 分支和 gh-pages 分支，并且 gh-pages 分支使用的是 master 分支中的部分文件，所以当修改了 master 中的文档并提交之后，再推送一下 gh-pages 分支，两边代码就能保持一致了。
