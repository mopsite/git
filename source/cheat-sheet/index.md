---
title: Git 命令速查表
date: 2021-10-26 11:38:53
---

### Git Basics

|命令|描述|
|--|--|
|git init \<directory\>|在指定的目录下创建一个空的 git repo。不带参数将在当前目录下创建。|
|git clone \<repo\>|克隆一个指定 repo 到本地。指定的 repo 可以是本地文件或由 HTTP 或 SSH 指定的远程路径。|
|git add \<directory\>|将指定目录的所有修改加入到下一次 commit 中。也可以把 directory 替换成 file。|
|git commit -m "\<message\>"|提交暂存区的修改，使用指定的 message 作为提交信息。|
|git status|显示哪些文件已被 staged、未被 staged 以及未跟踪（untracked）。|
|git log|以缺省格式显示全部 commit 历史。更多自定义参数请参考后续部分。|

### Git Dff

|命令|描述|
|--|--|
|git diff|比较工作区和暂存区的修改。|
|git diff HEAD|比较工作区和上次 commit 后的修改。|
|git diff -\-cached|比较暂存区和上一次 commit 后的修改。|

### Undoing Changes

|命令|描述|
|--|--|
|git revert \<commit\>|对指定 commit 创建一个 undo 的 commit，并应用到当前分支。|
|git reset \<file\>|将 file 从暂存区移除，但保持工作区不变。此操作不会修改工作区的任何文件。|

### Rewrite Git History

|命令|描述|
|--|--|
|git commit -m \<message\> -\-amend|将当前 staged 修改合并到最近一次的 commit 中。|
|git rebase \<base\>|基于 base 对当前分支进行 rebase。base 可以是 commit、分支名或tag。|
|git reflog|显示本地 repo 的所有 commit 日志。|

### Git Branches

|命令|描述|
|--|--|
|git branch|显示本地 repo 的所有分支。|
|git switch -c <branch>|创建并切换到一个新的名为 branch 的分支。不带 -c 参数则为切换分支。|
|git merge <branch>|将指定 branch 分支合并到当前分支。|

### Remote Repositories

|命令|描述|
|--|--|
|git remote add \<name\> \<url\>|添加一个新的远程连接。添加后可用 name 作为指定 url 远程连接的名称。|
|git fetch \<remote\> \<branch\>|从指定 remote 抓取指定 branch 的所有 commit 到本地 repo。去掉 branch 抓取所有分支。|
|git pull \<remote\>|从指定 remote 抓取所有分支的 commit 并立刻合并到本地 repo。|
|git push \<remote\> \<branch\>|将本地 branch 推送到指定 remote。如果远程没有对应的分支，将自动在远程创建。|

### Git Config

|命令|描述|
|--|--|
|git config -\-global user.name \<name\>|配置当前用户名，使用 -\-global 将针对当前系统登录用户生效。|
|git config -\-global user.email \<email\>|配置当前用户邮箱地址。|
|git config -\-global alias.\<alias-name\> \<git-command\>|配置一个 git 命令的快捷方式。|
|git config -\-system core.editor \<editor\>|配置文本编辑器，例如 vi，在必要时自动打开此编辑器。|
|git config -\-global -edit|打开当前用户的 git 全局配置并编辑。|

### Git Log

|命令|描述|
|--|--|
|git log -\<limit\>|限制 log 的显示数量。例如 git log -5 仅显示最新 5 条 commit。|
|git log -\-oneline|每行显示一条 commit。|
|git log -\-author="\<pattern\>"|按提交者名字搜索并显示 commit。|
|git log -\-grep="\<pattern\>"|按指定内容搜索并显示 commit。|
|git log \<since\>..\<until\>|显示指定范围的 commit。范围参数可以是 commit ID、分支名、HEAD 或任意相对位置。|
|git log -\- \<file\>|仅显示包含指定文件修改的 commit。|
|git log -\-graph|使用 -\-graph 参数显示图形化的 branch 信息。|

### Git Reset

|命令|描述|
|--|--|
|git reset|移除所有暂存区的修改，但不会修改工作区。|
|git reset -\-hard|移除所有暂存区的修改，并强制删除所有工作区的修改|
|git reset \<commit\>|将当前分支回滚到指定 commit，清除暂存区的修改，但保持工作区状态不变。|
|git reset -\-hard \<commit\>|将当前分支回滚到指定 commit，清除暂存区的修改，并强制删除所有工作区的修改。|

### Git Rebase

|命令|描述|
|--|--|
|git rebase -i \<base\>|以交互模式对当前分支做 rebase。|

### Git Pull

|命令|描述|
|--|--|
|git pull -\-rebase \<remote\>|抓取所有远程分支，并以 rebase 模式并入本地 repo 而不是 merge。|

### Git Push

|命令|描述|
|--|--|
|git push \<remote\> -\-force|将本地分支推送到远程。不要使用 -\-force 参数，除非你完全明白此操作的后果。|
|git push \<remote\> -\-tag|-\-tag 参数会将所有本地 tag 推送到远程。|
