/**
 * Created by Administrator on 2017/4/5.
 */
window.onload = function () {


    //logo的js
    var home_logoa_a = document.getElementById('home_logoa_a');
    function home_logomov() {
        home_logoa_a.style.opacity = '1'
    }
    function home_logoout() {
        home_logoa_a.style.opacity = '0'
    }
    home_logoa_a.addEventListener('mouseover',home_logomov);
    home_logoa_a.addEventListener('mouseout',home_logoout);
    //这是轮播图的js
    var home_banner_l = document.getElementById('home_banner_l');
    var home_banner_l_ul = document.getElementById('home_banner_l_ul');
    var home_banner_l_ul_li = document.getElementsByClassName('home_banner_l_ul_li');
    var iNow = 0;
    // var home_btn = document.getElementById('home_btn');
    // var home_btn1a = home_btn.getElementsByTagName('li');


    function oHome_banner() {
         var home_btn = document.getElementById('home_btn');
         var home_btn1a = document.getElementsByClassName('aa');
        var timer = setInterval(function () {
            iNow++;
            if (iNow>=home_banner_l_ul_li.length){
                iNow = 0;
            }
            home_banner_l_ul.style.left = -(1543*iNow)+'px';

            for (var w = 0; w <home_btn1a.length; w++) {
                home_btn1a[w].style.backgroundPositionY=0;
                // home_btn1a[iNow].className="home_btn1a"+w+'1';

            if (w == iNow){
                home_btn1a[w].style.backgroundPositionY=-23+"px";
            }

            }

        },3000);
        for (var j = 0;j<home_btn1a.length;j++){
            home_btn1a[j].index = j;
            home_btn1a[j].onclick = function () {
                iNow = [this.index]-1;
            }
        }
    }
    oHome_banner();

    // var home_btn1a = document.getElementsByClassName('aa');
    // var timea = setInterval(function () {
    //     for(var v = 0 ; v<home_btn1a.length;v++){
    //         home_btn1a[v].index = v;
    //         home_btn1a[v].style.backgroundPositionY=-23+"px";
    //     }
    // },3000);
    // var home_btn = document.getElementById('home_btn');
    // var home_btn1a = document.getElementsByClassName('home_btn1a');
    // function oMaginleft() {
    //     for (var w = 0; w <= home_btn1a.length; w++) {
    //         home_btn1a[w].className = '';
    //     }
    //     home_btn1a[iNow].className = 'home_btn3';
    //     home_banner_l_ul.style.left = -(944*iNow)+'px';
    // }
    // oMaginleft();
    //
    // for (var j = 0;j<=home_btn1a.length;j++){
    //     home_btn1a[j].index = j;
    //     home_btn1a[j].onclick = function () {
    //         iNow = this.index;
    //         oMaginleft();
    //     }
    // }



    //这是小圆点
    // var home_btn = document.getElementById('home_btn');
    // var home_btn1a = document.getElementsByClassName('aa');
    //
    // function xiaoyuandian() {
    //     var ti = setInterval(function () {
    //         for (var w = 0; w <home_btn1a.length; w++) {
    //             home_btn1a[w].style.backgroundPositionY=0;
    //             // home_btn1a[iNow].className="home_btn1a"+w+'1';
    //         }
    //         if (iNow>home_btn1a.length){
    //             iNow=0;
    //         }
    //         home_btn1a[iNow].style.backgroundPositionY=-23+"px";
    //
    //         // home_btn1a[iNow].className = 'home_btn3';
    //         // home_banner_l_ul.style.left = -(944*iNow)+'px';
    //     },3000) ;
    // }
    // xiaoyuandian();

    // for (var d=0; d<home_btn1a.length; d++)
    // {
    //     (function (index){
    //         home_btn1a[d].onclick=function (){
    //             iNow=index; // 统一下标
    //             tab(index);
    //         };
    //     })(d);
    // }


    // oMaginleft();

//图片下数字点
    // for (var j = 0;j<=home_btn1a.length;j++){
    //     home_btn1a[j].index = j;
    //     home_btn1a[j].onclick = function () {
    //         iNow = this.index;
    //         oMaginleft();
    //     }
    // }
    //

    // function oMaginleft() {
    //
    //
    //      //循环动态给li圆点通过动态添加class名
    //     // //在css样式中写li的背景颜色改变她的背景颜色
    //     for (var w = 0;w<=home_btn1a.length;w++){
    //         // alert(home_btn1a.length);
    //         //让圆点li的class名为空
    //         home_btn1a[w].className = '';
    //     }
    //     //让当前的li圆点添加class名称
    //     home_btn1a[iNow].className = 'home_btn1';
    //
    //
    // }
    // oMaginleft();

    //轮播中的小点 点击相应图片进行切换
    // for (var e = 0;e<=home_btn1a.length;e++){
    //     //动态获取小点所对应的li
    //     home_btn1a[e].index = e;
    //     // home_btn1a[e].style.background = 'red';
    //     //给小圆点添加点击事件
    //     //点击小圆点轮播执行
    //     home_btn1a[e].onclick = function () {
    //         //iNow变成当前小圆点
    //         iNow = this.index;
    //         //执行封装好的函数
    //
    //     }
    // }

    //这里是底部事件
    // var d = document.getElementById("home_foot").offsetHeight;
    // console.info(d);
    // window.addEventListener("scroll", function(event) {
    //     var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    //     console.log(scrollTop);
    //     if(document.documentElement.scrollHeight == document.documentElement.clientHeight + scrollTop ) {
    //         alert("Touch_Buttom!");
    //     }
    // });
    function getScrollTop(){
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if(document.body){
            bodyScrollTop = document.body.scrollTop;
        }
        if(document.documentElement){
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    }

//文档的总高度

    function getScrollHeight(){
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if(document.body){
            bodyScrollHeight = document.body.scrollHeight;
        }
        if(document.documentElement){
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    }

//浏览器视口的高度
   var home_foot = document.getElementById('home_foot');
    function getWindowHeight(){
        var windowHeight = 0;
        if(document.compatMode == "CSS1Compat"){
            windowHeight = document.documentElement.clientHeight;
        }else{
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    }

    window.onscroll = function(){
        if(getScrollTop() + getWindowHeight() == getScrollHeight()){
            home_foot.style.opacity = '1';
        }
        else {
            home_foot.style.opacity = '0';
        }
    };

    //如果用jquery来实现的话就更简单了，

// $(window).scroll(function(){
//     var scrollTop = $(this).scrollTop();
//     var scrollHeight = $(document).height();
//     var windowHeight = $(this).height();
//     if(scrollTop + windowHeight == scrollHeight){
//         alert("已经到最底部了！");
//     }
// });


    //背景
    // var oBody = document.getElementsByTagName('body')[0];
    // var home_banner_bg = document.getElementById('home_banner_bg');
    // var iMax = 1;
    //
    // home_banner_bg.startX = parseInt(getstyle(home_banner_bg,'left'));
    //
    // oBody.onmouseover = function (ev) {
    //     ev = ev || window.event;
    //     var iX = ev.clientX-(oBody.offsetAfter+this.offsetWidth/2);
    //         var iZindex = getstyle(home_banner_bg,'iZindex');
    //         var iDisL =-parseInt(iX/iMax*(iMax-iZindex));
    //         home_banner_bg.style.left = home_banner_bg.startX+iDisL+'px'
    //     }
    // };
    // function getstyle(obj,attr) {
    //     if(obj.currentStyle){
    //         return obj.currentStyle[attr];
    //     }
    //     return getComputedStyle(obj)[attr];
    // }
    var oWrap=document.getElementById("wrapp");
    var bImg=document.getElementsByClassName("home_banner_bg");
    var iMax=4;
    //获取图片的初始位置
    for(var y=0;y<bImg.length;y++){
        bImg[y].startX=parseInt(getStyle(bImg[y],'left'))
    }
    wrapp.onmousemove=function(ev){
        ev=ev||window.event;
        //获取鼠标的位置与大盒子中心点位置的距离
        var iX=ev.clientX-(oWrap.offsetLeft+this.offsetWidth/2);
        for(var y=0;y<bImg.length;y++){
            //获取每个img的z-index
            var iZindex=getStyle(bImg[y],'zIndex');
            //Zindex越大移动的相对距离越小
            var iDisL=-parseInt(iX/iMax*(iMax-iZindex)/5);
            //图片的距离等于原先的距离加上计算的距离
            bImg[y].style.left=bImg[y].startX+iDisL+'px'
        }
    }
    function getStyle(obj,attr)
    {
        if( obj.currentStyle){
            return obj.currentStyle[attr];
        }
        return getComputedStyle(obj)[attr];
    }










    //这是图片那一块的js
    // var home_body_case_li_hz = document.getElementsByClassName('home_body_case_li_hz');
    // var home_body_case_li_hz_mb =document.getElementsByClassName('home_body_case_li_hz_mb');
    // var home_body_case_li_hz_al = document.getElementsByClassName('home_body_case_li_hz_al');
    // var home_body_case_li_hz_ar = document.getElementsByClassName('home_body_case_li_hz_ar');
    //
    // function oWeiyiy() {
    //     home_body_case_li_hz[0].style.marginTop = '0';
    //     home_body_case_li_hz_mb[0].style.display = 'block';
    //     home_body_case_li_hz_mb[0].style.marginTop = '-20px';
    //     home_body_case_li_hz_al[0].style.display = 'block';
    //     home_body_case_li_hz_al[0].style.marginLeft = '60px';
    //     home_body_case_li_hz_al[0].style.opacity = '1';
    //     home_body_case_li_hz_ar[0].style.marginLeft = '140px';
    //     home_body_case_li_hz_ar[0].style.opacity = '1';
    //     // home_body_case_li_hz_al[0].style.transition = 'marginLeft 5s';
    // }
    // function oWeiyit() {
    //     home_body_case_li_hz[0].style.marginTop = '18px';
    //     home_body_case_li_hz_mb[0].style.display = 'none';
    //     // home_body_case_li_hz_mb[0].style.marginTop = '-20px';
    //     home_body_case_li_hz_al[0].style.display = 'none';
    //     home_body_case_li_hz_al[0].style.marginLeft = '60px';
    //     home_body_case_li_hz_al[0].style.opacity = '0';
    //     home_body_case_li_hz_ar[0].style.marginLeft = '140px';
    //     home_body_case_li_hz_ar[0].style.opacity = '0';
    //     // home_body_case_li_hz_al[0].style.transition = 'marginLeft 5s';
    // }
    //
    //
    //    home_body_case_li_hz[0].addEventListener('mouseover',oWeiyiy);
    //    home_body_case_li_hz[0].addEventListener('mouseout',oWeiyit);
    //
    //    home_body_case_li_hz_mb[0].addEventListener('mouseover',oWeiyiy);
    //    home_body_case_li_hz_mb[0].addEventListener('mouseout',oWeiyit);
    //
    //    home_body_case_li_hz_al[0].addEventListener('mouseover',oWeiyiy);
    //    home_body_case_li_hz_al[0].addEventListener('mouseout',oWeiyit);
    //
    //    home_body_case_li_hz_ar[0].addEventListener('mouseover',oWeiyiy);
    //    home_body_case_li_hz_ar[0].addEventListener('mouseout',oWeiyit);



    //logo的js
    var home_header_container_l_m = document.getElementById('home_header_container_l_m');
    var home_header_container_l_m1 = document.getElementById('home_header_container_l_m1');

    // function oLogegreen() {
    //     home_header_container_l_m.style.opacity = '0';
    // }
    //
    // function oLogohuise() {
    //     home_header_container_l_m.style.opacity = '1';
    // }
    // home_header_container_l_m.addEventListener('mouseover',oChanpingreen);
    // home_header_container_l_m.addEventListener('mouseout',oChanpinhuise);


    //案例推荐js
    var home_body_tj_m_a_m = document.getElementById('home_body_tj_m_a_m');
    // function oTjgreen() {
    //     home_body_tj_m_a_m.style.opacity = '0';
    // }
    // function oTjghuise() {
    //     home_body_tj_m_a_m.style.opacity = '1';
    // }
    home_body_tj_m_a_m.addEventListener('mouseover',oChanpingreen);
    home_body_tj_m_a_m.addEventListener('mouseout',oChanpinhuise);


    //这是下面图标的js
    var home_body_home_m_a1_bs = document.getElementsByClassName('home_body_home_m_a1_bs');

    // function oTubiaog() {
    //     this.style.opacity = '0';
    // }
    // function oTubiaoh() {
    //     this.style.opacity = '1';
    // }
    for (var k =0; k<=4;k++){
        home_body_home_m_a1_bs[k].addEventListener('mouseover',oChanpingreen);
        home_body_home_m_a1_bs[k].addEventListener('mouseout',oChanpinhuise);
    }



    //服务模块的js
    // var home_body_service_m_l_a_m = document.getElementsByClassName('home_body_service_m_l_a_m');
    // home_body_service_m_l_a_m.addEventListener('mouseover',oChanpingreen);
    // home_body_service_m_l_a_m.addEventListener('mouseout',oChanpinhuise);

    var home_body_service_m_l_a_m = document.getElementsByClassName('home_body_service_m_l_a_m');
    function oFuwugreen() {
        this.style.opacity = '0';
    }
    function oFuwuhuise() {
        this.style.opacity = '1';
    }
    home_body_service_m_l_a_m[0].addEventListener('mouseover',oFuwugreen);
    home_body_service_m_l_a_m[0].addEventListener('mouseout',oFuwuhuise);
    // var home_body_service_m_l_a_m = document.getElementsByClassName('home_body_service_m_l_a_m');
    //
    // home_body_service_m_l_a_m.onmouseover=function () {
    //     home_body_service_m_l_a_m.style.opacity = '0';
    // }
    // home_body_service_m_l_a_m.onmouseout =function () {
    //     home_body_service_m_l_a_m.style.opacity = '1';
    // }


    //产品模块的js
    // var home_body_slogen_m_a1_m = document.getElementById('home_body_slogen_m_a1_m');
    //
    // function oChanpingreen() {
    //     home_body_slogen_m_a1_m.style.opacity = '0';
    // }
    //
    // function oChanpinhuise() {
    //     home_body_slogen_m_a1_m.style.opacity = '1';
    // }
    // home_body_slogen_m_a1_m.addEventListener('mouseover',oChanpingreen);
    // home_body_slogen_m_a1_m.addEventListener('mouseout',oChanpinhuise);

    var home_body_slogen_m_a1_m = document.getElementsByClassName('home_body_slogen_m_a1_m');

        function oChanpingreen() {
            this.style.opacity = '0';
        }

        function oChanpinhuise() {
            this.style.opacity = '1';
        }
        for (var i =0; i<=5;i++){
        home_body_slogen_m_a1_m[i].addEventListener('mouseover',oChanpingreen);
        home_body_slogen_m_a1_m[i].addEventListener('mouseout',oChanpinhuise);
       }
















    // home_header_container_l_m.onmouseover = function () {
    //
    //     // home_header_container_l_m1.style.display = 'none';
    //     // home_header_container_l_m.style.display = 'block';
    //
    // };
    // home_header_container_l_m.onmouseout = function () {
    //
    //     // home_header_container_l_m1.style.display = 'block';
    //     // home_header_container_l_m.style.display = 'none';
    // };



    // var home_header_container_l_m = document.getElementById('home_header_container_l_m');
    // function oHuise() {
    //     var home_header_container_l_m1 = document.getElementById('home_header_container_l_m1');
    //     home_header_container_l_m1.className = "solid";
    //     home_header_container_l_m.style.opacity = '1';
    //
    // }
    //
    // function oGreen() {
    //     var home_header_container_l_m = document.getElementById('home_header_container_l_m');
    //     home_header_container_l_m.className = "transparent";
    //     home_header_container_l_m.style.opacity = '0.5';
    // }
    // home_header_container_l_m.addEventListener('mouseover',oGreen);
    // home_header_container_l_m1.addEventListener('mouseout',oHuise);






    // var home_header_container_l_m = document.getElementById('home_header_container_l_m');
    // home_header_container_l_m.onmouseover = function () {
    //     home_header_container_l_m.style.display = 'none';
    //     home_header_container_l_m.style.transition = 'all 4s linear';
    // };

    // // 这是设置背景图片跟随鼠标移动的效果
    // //全局坐标变量
    // var x="";
    // var y="";
    // //定位图片位置
    // function GetMouse(oEvent) {
    //     x = oEvent.clientX;
    //     y = oEvent.clientY;
    //     document.getElementById('home_banner_bg').style.left = (parseInt(x)-100)+"px";
    //     document.getElementById("home_banner_bg").style.top = y +"px";
    //
    // }
    // //入口
    // function Main() {
    //     var ele = document.getElementById('home_banner');
    //
    //     ele.onmouseover = function () {
    //
    //         GetMouse(event);
    //     }
    //
    //     ele.onmousedown =function () {
    //
    //         ChangeBg("home_banner_bg","bg_banner.jpg");
    //     }
    //     ele.onmouseup = function () {
    //
    //         ChangeBg("home_banner_bg",MDown.jpg);
    //     }
    //     function ChangeBg() {
    //         document.getElementById(id).src = url;
    //     }
    // }
    //
    // // var home_banner = document.getElementById('home_banner');
    // // var oImg = document.getElementById('home_banner_bg');
    // //
    // // //获取图片的初始位置
    // // oImg.startX = getSytle(aImg,'left');
    function oTupian() {
        var home_body_case_li_hz = document.getElementsByClassName('home_body_case_li_hz');
        var home_body_case_li_hz_mb =document.getElementsByClassName('home_body_case_li_hz_mb');
        var home_body_case_li_hz_al = document.getElementsByClassName('home_body_case_li_hz_al');
        var home_body_case_li_hz_ar = document.getElementsByClassName('home_body_case_li_hz_ar');
        for (var w = 0; w<=6;w++){
            home_body_case_li_hz[w].index=w;
            home_body_case_li_hz[w].onmouseover = function () {
                this.style.marginTop = '0';
                home_body_case_li_hz_mb[this.index].style.display = 'block';
                home_body_case_li_hz_mb[this.index].style.marginTop = '-20px';
                home_body_case_li_hz_al[this.index].style.display = 'block';
                home_body_case_li_hz_al[this.index].style.marginLeft = '60px';
                home_body_case_li_hz_al[this.index].style.opacity = '1';
                home_body_case_li_hz_ar[this.index].style.marginLeft = '140px';
                home_body_case_li_hz_ar[this.index].style.opacity = '1';
            }
            home_body_case_li_hz[w].onmouseout = function () {
                this.style.marginTop = '18px';
                home_body_case_li_hz_mb[this.index].style.display = 'none';
                home_body_case_li_hz_mb[this.index].style.marginTop = '-20px';
                home_body_case_li_hz_al[this.index].style.display = 'block';
                home_body_case_li_hz_al[this.index].style.marginLeft = '1px';
                home_body_case_li_hz_al[this.index].style.opacity = '0';
                home_body_case_li_hz_ar[this.index].style.marginLeft = '200px';
                home_body_case_li_hz_ar[this.index].style.opacity = '0';
            }

        }
    }
    oTupian();
}
