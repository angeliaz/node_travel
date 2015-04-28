/**
 * @title 深度优先遍历算法 - 异步
 * @author angelia
 * @createTime 2015-04-28
 * 1. fs.readdirSync(dir, callback)同步读取某目录下文件
 * 2. fs.statSync(path) 同步读取文件|文件夹信息
 * 3. fs.statSync(path).isFile | fs.statSync(path).isDirectory 判断文件是文件还是文件夹
 * 
 */
var fs = require('fs');
var path = require('path');

function travel(dir, callback, finish) {
    fs.readdir(dir, function (err, files) {
        (function next(i) {
            if (i < files.length) {
                var pathname = path.join(dir, files[i]);

                fs.stat(pathname, function (err, stats) {
                    if (stats.isDirectory()) {
                        travel(pathname, callback, function () {
                            next(i + 1);
                        });
                    } else {
                        callback(pathname, function () {
                            next(i + 1);
                        });
                    }
                });
            } else {
                finish && finish();
            }
        }(0));
    });
}

travel('E:/angelia/github/node_travel');