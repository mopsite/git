# 命令速查表

经过几天的学习，相信你对 Git 已经初步掌握。一开始，可能觉得 Git 上手比较困难，尤其是已经熟悉 SVN 的同学，没关系，多操练几次，就会越用越顺手。

Git 虽然极其强大，命令繁多，但常用的就那么十来个，掌握好这十几个常用命令，你已经可以得心应手地使用 Git 了。

友情附赠 Git Cheat Sheet，建议收藏起来备用。

## Git Basics

|命令|描述|
|:---|:---|
|`git init <directory>`|在指定的目录下创建一个空的 git repo。不带 `<directory>` 参数将在当前目录下创建。|
|`git clone <repo>`|克隆一个指定 repo 到本地。指定的 `<repo>` 可以是本地文件系统或者由 HTTP 或 SSH 指定的远程路径。|
|`git config user.name <name>`|针对当前 repo 配置用户名，使用 `--global` 将配置全局用户名。|
|`git add <directory>`|将指定目录的所有修改假如到下一次 commit 中。把 `<directory>` 替换成 `<file>` 将添加指定文件的修改。|
|`git commit -m "<message>"`|提交暂存区的修改，使用指定的 `<message>` 作为提交信息，而不是打开文件编辑器输入提交信息。|
|`git status`|显示哪些文件已经被 staged、未被 staged 以及未跟踪（untracked）。|
|`git log`|以缺省格式显示全部 commit 历史。|

## Git Diff

|命令|描述|
|:---|:---|
|`git diff`|比较工作区和暂存区的修改。|
|`git diff HEAD`|比较工作区和上一次 commit 后的修改。|
|`git diff --cached`|比较暂存区和上一次 commit 后的修改。|

## Undoing Changes

|命令|描述|
|:---|:---|
|`git revert <commit>`|对指定 `<commit>` 创建一个 undo 的 commit，并应用到当前分支。|
|`git reset <file>`|将 `<file>` 从暂存区移除，但保持工作区不变。此操作不会修改工作区的任何文件。|

## Rewriting Git History

|命令|描述|
|:---|:---|
|`git commit -m "<message>" --amend`|将当前 staged 修改合并到最近一次的 commit 中。|
|`git rebase <base>`|基于 `<base>` 对当前分支进行 rebase。`<base>` 可以是 commit、分支名称、tag 或相对于 HEAD 的 commit。|
|`git reflog`|显示本地 repo 的所有 commit 日志。|

## Git Branches

|命令|描述|
|:---|:---|
|`git branch`|显示本地 repo 的所有分支。|
|`git switch -c <branch>`|创建并切换到一个新的名为 `<barnch>` 的分支。去掉 `-c` 参数将切换到一个已有分支。|
|`git merge <branch>`|将指定 `<branch>` 分支合并到当前分支。|

## Remote Repositories

|命令|描述|
|:---|:---|
|`git remote add <name> <url>`|添加一个新的远程连接。添加后可使用 `<name>` 作为指定 `<url>` 远程连接的名称。|
|`git fetch <remote> <branch>`|从指定 `<remote>` 抓取指定 `<branch>` 的所有 commit 到本地 repo。去掉 `<branch>` 将抓取远程所有分支的修改。|
|`git pull <remote>`|从指定 `<remote>` 抓取所有分支的 commit 并立刻合并到本地 repo。|
|`git push <remote> <branch>`|将本地指定 `<branch>` 推送到指定远程 `<remote>`。如果远程没有对应的分支，将自动在远程创建此分支。|

## Git Config

|命令|描述|
|:---|:---|
|`git config --global user.name <name>`|配置当前用户名，使用 `--global` 参数将针对当前系统登录用户生效。|
|`git config --global user.email <email>`|配置当前用户 Email。|
|`git config --global alias.<alias-name> <git-command>`|配置一个 git 命令的快捷方式。例如，配置 `alias.glog log --graph --oneline`，使 `git glog` 相当于 `git log --graph --oneline`。|
|`git config --system core.editor <editor>`|配置文本编辑器，例如 vi，在必要时自动打开此编辑器。|
|`git config --global --edit`|打开当前用户的 git 全局配置并编辑。|

## Git Log

|命令|描述|
|:---|:---|
|`git log --<limit>`|限制 log 的显示数量。例如，`git log -5` 仅显示最新 5 条 commit。|
|`git log --oneline`|每行显示一条 commit。|
|`git log --author="<pattern>"`|按提交者名字搜索并显示 commit。|
|`git log --grep="<pattern>"`|按指定内容搜索并显示 commit。|
|`git log <since>..<until>`|显示指定范围的 commit。范围参数可以是 commit ID、分支名称、HEAD 或任意相对位置。|
|`git log -- <file>`|仅显示包含指定文件修改的 commit。|
|`git log --graph`|显示图形化的 branch 信息。|

## Git Reset

|命令|描述|
|:---|:---|
|`git reset`|移除所有暂存区的修改，但不会修改工作区。|
|`git reset --hard`|移除所有暂存区的修改，并强制删除所有工作区的修改。|
|`git reset <commit>`|将当前分支回滚到指定 `<commit>`，清除暂存区的修改，但保持工作区状态不变。|
|`git reset --hard <commit>`|将当前分支回滚到指定 `<commit>`，清除暂存区的修改，并强制删除所有工作区的修改。|

## Git Rebase

|命令|描述|
|:---|:---|
|`git rebase -i <base>`|以交互模式对当前分支做 rebase。|

## Git Pull

|命令|描述|
|:---|:---|
|`git pull --rebase <remote>`|抓取所有远程分支，并以 rebase 模式并入本地 repo 而不是 merge。|

## Git Push

|命令|描述|
|:---|:---|
|`git push <remote> --force`|将本地分支推送到远程。不要使用 `force` 参数，除非你完全明白此操作的后果。|
|`git push <remote> --tags`|使用 push 命令并不会自动将本地 tag 推送到远程。加上 `--tags` 参数会将所有本地 tag 推送到远程。|

