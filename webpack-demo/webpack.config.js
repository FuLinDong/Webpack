// 配置文件
// 1.
// module.exports = {
// 	entry: './src/script/main.js',//打包来源
// 	output: {
// 		filename: 'dist/bundle.js'//打包到与打包成什么文件
// 	}
// }

// 2.
// module.exports = {
// 	entry: ['.src/script/main.js', './src/script/a.js'],
// 	output: {
// 		filename: 'dist/bundle.js'
// 	}
// }

// 3.
module.exports={
entry:{
	main:'./src/js/main.js',
	a:'./src/js/a.js'
},
output:{
	path: __dirname + '/dist/js',
	filename:'[name].js'
	}
}