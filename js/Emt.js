/**
 * Created by Lete on 2020/7/7.
 */

/*添加图片top*/
charset="utf-8"
var top_up = "<img id='upj' class='upj' style='max-width: 1000%; transform: translate(-70px,-70px);' src='https://cdn.jsdelivr.net/gh/lete114/CDN/Use/up.gif' title='回到顶部' >";
/*添加到返回顶部按钮下*/
document.getElementById("go-up").innerHTML += top_up;

// 设置页脚博主会动的心
$(document).ready(function(e){
    $('.copyright').html('©2020 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> EMT');
})

// /* 手机客户端导航栏默认隐藏 */
// var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
// var menus_item_child = mobile_sidebar_menus.getElementsByClassName("menus_item_child");
// var menus_expand = mobile_sidebar_menus.getElementsByClassName("expand");
// for (var i = 0; i < menus_item_child.length; i++) {
//     menus_item_child[i].style.display = "none";
//     menus_expand[i].className += " closed";
// }

// 可爱的Title
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '(つェ⊂) 我藏好了哦~~';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '(*´∇｀*) 被你发现啦~~' + OriginTitle;
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});
