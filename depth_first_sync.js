/**
 * @title 深度优先遍历算法-同步
 * @author angelia
 * @createTime 2015-04-28
 * 1. fs.readdirSync(dir, callback)同步读取某目录下文件
 * 2. fs.statSync(path) 同步读取文件|文件夹信息
 * 3. fs.statSync(path).isFile | fs.statSync(path).isDirectory 判断文件是文件还是文件夹
 * 
 */
var fs = require('fs');
var path = require('path');

/*var argv = process.argv.slice(2);
var dirPath = argv[0]; // 'E:/angelia/github'
var files = fs.readdirSync(dirPath);
var pathName = path.join(dirPath, files[0]);*/
// console.log(fs.statSync(pathName).isFile());

function travel(dir, callback) {

	// var arr = fs.readdirSync(dir);
	// console.log(Object.prototype.toString.call(arr));

	fs.readdirSync(dir).forEach(function (file) {
		var filePath = path.join(dir, file);

		if( fs.statSync(filePath).isDirectory() ) {
			travel(filePath, callback);
		} else {
			callback(filePath);
		}
	});
}

travel(process.argv[2], function(path) {
	console.log(path);
});

