# simply_data
This project is for the sake of ipos.
vue
1.端口号设置：8080，可以在config文件index.js里修改端口
2.使用模块化开发,每个单页面，每个单页面对应的scss、js都是单独的一个文佳，
每个单独的scss文件都通过app.scss文件引入，每个单独的js文件都通过app.js文件引入，app.scss和app.js都引入到mian.js里
3.router配置在router=>index.js
4.前端开发工具：Mac iTerms2 Atom VUE nginx,开发环境node.js,前端框架vue.js。
5.Mac安装nginx流程：
(1)安装终端iTerms2(百度搜索)；
ruby -e "$(curl --insecure -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"  //Homebrew,拉线上代码
homebrew install nginx    //安装nginx，将会产生两个文佳(安装信息，配置信息)
安装默认路径：/usr/local/Cellar/nginx/1.10.1；配置默认路径：/usr/local/etc/nginx/*.conf文件｀//**************
(2)nginx反向代理上线跨域,/usr/local/etc/nginx/conf.d/ipos.conf
查看ipos.conf 执行命令：vim ipos.conf    （vim 查看文件 pwd 查看当前文件路径）
6.vue
中文官网：https://vuefe.cn/guide/
UI框架：http://element.eleme.io/#/component/notification
(1)
7.scss安装：
npm install node-sass sass-loader --save-dev
npm install less less-loader --save-dev
8.Atom安装vue编辑工具：
打开  package=>setting open => install =>搜索vue
vue2-autocomplete 高亮 vue2-snippets language-vue-component vue2-element-ui-snippets
