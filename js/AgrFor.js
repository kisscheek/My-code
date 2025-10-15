// 去掉默认隐藏为显示，设置display = "block"
function post() {
    var input = document.getElementsByClassName("post");
    input[0].style.display = "block";
}

// 点击发布
function postSuccess() {
    var input = document.getElementsByClassName("post");
    input[0].style.display = "none";
    var newli = document.createElement("li");
    var ul = document.getElementById("postul");
    ul.insertBefore(newli, ul.firstChild);
    var newdiv = document.createElement("div");
    newli.appendChild(newdiv);
    var img = document.createElement("img");
    newdiv.appendChild(img);
    var num = Math.floor(Math.random() * 4 + 1);
    img.setAttribute("src", "images/touxiang" + num + ".png");
    var h1 = document.createElement("h1");
    newli.appendChild(h1);
    var biao = document.getElementById("title");
    h1.innerText = biao.value;
    var newp = document.createElement("p");
    newli.appendChild(newp);
    var ban = document.getElementById("sec");
    newp.innerText = "模块信息：" + ban.value;
    var span = document.createElement("span");
    newp.appendChild(span);
    span.style.marginLeft = "100px";
    span.innerText = "发布时间 :  " + getTime();
}

function getTime() {
    // 1、获取当前的日期
    var date = new Date();
    var m = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1);
    var min = (date.getMinutes()) > 9 ? (date.getMinutes()) : "0" + (date.getMinutes());
    var cl = date.getFullYear() + "年" + m + "月" + date.getDate() + "日\t" + date.getHours() + "时" + min + "分";
    return cl;
}
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