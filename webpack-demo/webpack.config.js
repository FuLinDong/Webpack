const HtmlWebpackPlugin = require('html-webpack-plugin');//installed via npm
const webpack = require('webpack');//to access built-in plugins
const path = require('path');
//// 配置文件
//// 1.
// module.exports = {
// 	entry: './src/script/main.js',//打包来源
// 	output: {
// 		filename: 'dist/bundle.js'//打包到与打包成什么文件
// 	}
// }

////1.2
// module.exports = {
//     entry: './src/script/main.js',//入口文件
//     output : {//输出文件
//         filename : 'bundle.js',//输出文件名
//         path : __dirname + '/dist'//输出文件路径
//     }
// }
////1.3
// const path = require('path');

// module.exports = {
//   entry: './src/script/main.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   }
// };
//// 2.数组形式,平行的，两个相互依赖的文件
// module.exports = {
//  	entry: ['./src/script/main.js', './src/script/a.js'],
//  	output: {
// 		filename : 'bundle.js',//输出文件名
//         path : __dirname + '/dist'//输出文件路径
//  	}
//  }
////2.2


// module.exports = {
//   entry: ['./src/script/main.js', './src/script/a.js'],
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   }
// };
//// 3.多页面程序
//  }
 const config = {
     entry:{ 
	    main:'./src/script/main.js',
	    a:'./src/script/a.js'   
    }, 
     output:{
        path: __dirname + '/dist',
        filename:'js/[name]-[chunkhash].js'    //[name],[hash],[chunkhash]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
        	template:'index.html',
        	inject: 'body', //放在body标签里面,默认的可以指定放在'head'里面
        	filename: 'index-[hash].html'//可以指定成这样带哈希的的文件名
        })
    ]
 };
 module.exports = config;
 ////3.2
// const path = require('path');

// module.exports = {
//   entry:{ 
//     main:'./src/script/main.js',
// 	a:'./src/script/a.js'   
//     }, 
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: '[name].js'
//   }
// };

