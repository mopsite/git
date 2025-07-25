---
aside: false
---

# Git 是什么

Git 是什么？Git 是目前世界上最先进的分布式版本控制系统（没有之一）。

Git 有是特点？简单来说就是：高端大气上档次！

那么，什么是版本控制系统？

如果你用 Microsoft Word 写过长篇大论，那你一定有这样的经历：

想删除一个段落，又怕将来想恢复找不回来怎么办？有办法，先把当前文档【另存为...】一个新的 Word 文件，再接着改，改到一定程度，再【另存为...】一个新文件。这样一直盖下去，最后你的 Word 文档变成了这样：

![01](./images/01.jpg)

过了一周，你想找回被删除的文字，但是已经记不清楚保存在哪个文件里了，只好一个一个文件去找，真麻烦。

看着一堆乱七八糟的文件，想保留最新的一个，然后把其他的删掉，又怕哪天会用上，还不敢删，真郁闷。

更要命的是，有些部分需要你的财务同事帮忙填写，于是你把文件 Copy 到 U 盘里给她（也可能通过 Email 发送一份给她），然后，你继续修改 Word 文件。一天后，同事再把 Word 文件传给你。此时，你必须想想，发给她之后到你收到她的文件期间，你做了哪些改动，得把你的改动和她的部分合并，真困难。

于是你想，如果有一个软件，不但能自动帮我记录每次文件的改动，还可以让同事协同编辑，这样就不用自己管理一堆类似的文件了，也不需要把文件传来传去。如果想查看某次改动，只需要在软件里瞄一眼就可以，岂不是很方便？

这个软件用起来就应该想这个样子，能记录每次文件的改动：

|版本|文件名|用户|说明|日期|
|:---:|:---:|:---:|:---:|:---:|
|1|service.doc|张三|删除了软件服务条款 5|7/12 10:38|
|2|service.doc|张三|增加了 License 人数限制|7/12 18:09|
|3|service.doc|李四|财务部门调整了合同金额|7/13 9:51|
|4|service.doc|张三|延长了免费升级周期|7/14 15:17|

这样，你就结束了手动管理多个版本的史前时代，进入到版本控制的新世纪。
