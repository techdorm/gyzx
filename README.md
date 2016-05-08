<<<<<<< HEAD
#task

1、学习scss语法 http://www.ruanyifeng.com/blog/2012/06/sass.html  百度，google还有很多，自己去找教程。

将每个html里面杂乱无章的css部分，写成scss格式到文件src/xxx.scss，注意里面有些是用#xxx  来写的，这不规范，一律将其改为.xxx  ,自然，对应的html结构里面也要改。

###scss里面的格式一律按照nec标准，http://nec.netease.com/standard/css-sort.html 

每个scss名字和html都是一一对应的，大家都只改动自己负责的文件，不要乱修改他人的。

页面安排：

mycheck，mydorm------  张平慧

water，myinfo--------  胡棋洋

card，hd -------- 甘家城

index ----------刘顺
  
notice--------蒋寒琼

question------乐思翔




2、修改完之后保存，将原来页面的css部分“注释”掉.

此时安装nodejs，然后安装npm，用npm安装gulp，sass，在本文件夹下打开命令行，再输入gulp，运行，查看stylesheets中你自己的对应的css文件是否有了变化，并且浏览器自动弹出，此时的样式没有了（被你之前注释了）

3、然后在<head></head> 里面添加link，对应的输出的stylesheets/css路径
再保存，刚没有关掉的浏览器页面就自动刷新了，有了样式。

有空的人去看一下gulpfile.js的配置，自己去实现建个demo，搭一下环境。
=======
# task

###项目都在gh-pages分支里面

10个页面的css都改成scss

每个人都有负责的页面，不要乱动其他人负责的文件
>>>>>>> 1cebb2c2857cf1ba23b777aaf17933f7e03799f2


