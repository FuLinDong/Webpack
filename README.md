#  一：开始操作
#    1.  npm install -g webpack    全局安装webpack
#    2.  npm install webpack --save-dev  局部安装
#    3.  require('')      引入文件
#    4.  为了让css文件能够引入   npm install css-loader style-loader --save-dev  ,然后 style.loader!css-loader 或者是 
        webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' 
#    5.  查看打包的过程 --watch, --progress(打包过程), --display-modules（打包模块）, --display-reasons（打包原因）
#    6.  文件改变时又得输入命令行，所以webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' --watch 文件自动更新
#
# 二
# 配置 webpack.config.js
# module.exports = {
    entry: './src/script/main.js',//打包来源
    output: {
    	filename: 'dist/bundle.js'//打包到和打包成某文件
    }	
  }