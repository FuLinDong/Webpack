require('./world.js');
//require('style-loader!css-loader!./style.css')//css-loader!使得可以打包，style-loader!使得css文件生效
require('./index.css')//不适用loader时：$ webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader'
//文件改变时又得输入命令行，所以webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' --watch
//可以看打包过程  --progress
//打包的模块      --display-modules
//打包木块的原因    --display-reasons
function hello(str){
	alert(str);
}
hello("hello world!,hello FuLinDong");