# git 大厂代码提交原则

- 开发目录
    PWD 获取当前目录地址  一切皆文件
    git init
    初始化代码目录为代码仓库
    - 反馈成功初始化了一个代码仓库
        git仓库不能嵌套
        .git文件夹 包含仓库的秘密，不要去动它
        默认 master/main 主分支
        HEAD 指针指向第一次提交
        暂存区和仓库两部分  

- 本地代码仓库
- git 是一个版本控制系统，开源
    仓库里面放的文件的多个版本
- 为什么把一个文件添加到仓库需要
    git add
    git commit 两步呢？
    严格的代码提交
    git add  添加/修改一个文件   文件
    html css js 三个文件一起构成一次任务，login页面的开发
    git commit -m 'login页开发完成'
    1:n 仓库 
    git add 把文件添加进暂存区 stage
    git commit 仓库

- git 是一个分布式的
    本地仓库
    远程仓库
    合作伙伴的仓库

- 严格
    代码提交之前一定要人间清醒
    确认当前的修改和上一次的修改改了那些地方
    git diff  比较修改 在提交前使用

- commit -m '' 不能乱写，写清楚完成了什么任务
    - leader以后就看 -m 后的东西了解 我们的工作
- git status 随时使用这个命令了解我们当前仓库状态
- git log
    打印所有的提交
    唯一的id hash
    HEAD指针，指向目前的最后一次提交
    master 代表分支 main

- 可以通过git reset 快速来到任何一个版本
    version control
    git reset --hard HEAD^  到提交的上一个版本
    git reset --hart id 到对应的id的版本
    
- git reflog 记录所有的操作记录
    更好的进行版本控制
    获取对应id
- changes + untracked
    

本地仓库有文件发生改变，然后使用add函数添加到stage暂存区，然后使用commit提交到master分支
