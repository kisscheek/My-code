
var ul = document.querySelector('ul');
var li = ul.querySelector('li');
var ol = document.querySelector('ol')
var liw = li.offsetWidth;
var index = 0;
var timer = setInterval(function () {
    // 计算步长
    index++;
    var movex = -index * liw;
    // 设置过渡效果  进行移动
    ul.style.transition = 'all .3s'
    ul.style.transform = 'translateX(' + movex + 'px)'
}, 2000)
ul.addEventListener('transitionend', function () {
    // 监测过度完成，并执行无缝衔接
    if (index >= ul.children.length - 2) {
        index = 0;
        ul.style.transition = 'none'
        var movex = -index * liw;
        // 设置过度效果  进行移动
        ul.style.transform = 'translateX(' + movex + 'px)'

    }
    else if (index < 0) {
        index = 2;
        ul.style.transition = 'none'
        var movex = -index * liw;
        // 设置过渡效果  进行移动
        ul.style.transform = 'translateX(' + movex + 'px)'
    }
    // 小圆点动态变化
    ol.querySelector('.current').classList.remove('current');
    ol.children[index].classList.add('current')
})

// 手指拖动轮播图事件
var startX = 0; //接收手位置
var move = 0; //移动距离
var flag = false; //判断手指是否移动
ul.addEventListener('touchstart', function (e) {
    startX = e.targetTouches[0].pageX;
    clearInterval(timer)
})
ul.addEventListener('touchmove', function (e) {
    move = e.targetTouches[0].pageX - startX;
    var movex = -index * liw + move;
    ul.style.transition = 'none'
    // 设置过渡效果  进行移动
    ul.style.transform = 'translateX(' + movex + 'px)';
    flag = true;
    e.preventDefault(); //阻止滚动屏幕的默认行为
})

// 手指离开播放下一张或上一张图片
ul.addEventListener('touchend', function (e) {
    if (flag) {
        // 滑动距离 判断下一张
        if (Math.abs(move) > 50) {
            // right
            if (move > 0) {
                index--;
            } else {
                // left
                index++;
            }
            var movex = -index * liw;
            ul.style.transition = 'all .3s'
            // 设置过度效果  进行移动
            ul.style.transform = 'translateX(' + movex + 'px)'
            timer = setInterval
        } else {
            var movex = -index * liw;
            ul.style.transition = 'all .1s'
            // 设置过度效果  进行移动
            ul.style.transform = 'translateX(' + movex + 'px)'
        }
    }
    //重启定时器
    clearInterval(timer)
    timer = setInterval(function () {
        // 计算步长
        index++;
        var movex = -index * liw;
        // 设置过度效果  进行移动
        ul.style.transition = 'all .3s'
        ul.style.transform = 'translateX(' + movex + 'px)'
    }, 1000)

})
/* 防止误触返回 */
document.addEventListener('plusready', function () {
    var webview = plus.webview.currentWebview();
    plus.key.addEventListener('backbutton', function () {
        webview.canBack(function (e) {
            if (e.canBack) {
                webview.back();
            } else {
                //webview.close(); //hide,quit
                //us.runtime.quit();
                //首页返回键处理
                //处理逻辑：1秒内，连续两次按返回键，则退出应用；
                var first = null;
                plus.key.addEventListener('backbutton', function () {
                    //首次按键，提示‘再按一次退出应用’
                    if (!first) {
                        first = new Date().getTime();
                        console.log('再按一次退出应用');
                        setTimeout(function () {
                            first = null;
                        }, 1000);
                    } else {
                        if (new Date().getTime() - first < 1500) { plus.runtime.quit(); }
                    }
                }, false);
            }
        })
    });
});
document.addEventListener('plusready', function () {
    var webview = plus.webview.currentWebview();
    plus.key.addEventListener('backbutton', function () {
        webview.canBack(function (e) {
            if (e.canBack) {
                webview.back();
            } else {
                //webview.close(); //hide,quit
                //us.runtime.quit();
                //首页返回键处理
                //处理逻辑：1秒内，连续两次按返回键，则退出应用；
                var first = null;
                plus.key.addEventListener('backbutton', function () {
                    //首次按键，提示‘再按一次退出应用’
                    if (!first) {
                        first = new Date().getTime();
                        console.log('再按一次退出应用');
                        setTimeout(function () {
                            first = null;
                        }, 1000);
                    } else {
                        if (new Date().getTime() - first < 1500) { plus.runtime.quit(); }
                    }
                }, false);
            }
        })
    });
});