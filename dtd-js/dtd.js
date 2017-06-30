$(function(){
    // 获取浏览器高
    var Lanheight=$(window).height();
    var Banner=$('.dtd-banner');
    Banner.height(Lanheight);
    // 导航点击效果
    var Ydnav=$(".dtd-yd");
    var Ydnava=$(".dtd-yd .dtd-yd-an");
    var Ydnavf=false;
    Ydnava.click(function () {
        if(!Ydnavf){
            Ydnav.css("max-height","10rem");
            Ydnavf=true;
        }else{
            Ydnav.css("max-height","1.3rem");
            Ydnavf=false;
        }
    });
    // 经典套餐移入效果
    var Tcn=$(".dtd-jdtc .jdtc-box .jdtc-nbox .jdtc-n");
    Tcn.each(function(i){
        Tcn.eq(i).mouseover(function(){
            Tcn.each(function (j) {
                Tcn.eq(j).removeClass("jdtc-nb");
            });
            Tcn.eq(i).addClass("jdtc-nb");
        });
    });
    // 经典套餐移入效果  移动端
    var Tcny=$(".dtd-jdtc .jdtc-box .jdtc-ydbox .jdtc-ydn");
    Tcny.each(function(i){
        Tcny.eq(i).click(function(){
            Tcny.each(function (j) {
                Tcny.eq(j).removeClass("jdtc-ydnb");
            });
            Tcny.eq(i).addClass("jdtc-ydnb");
        });
    });
    var Tcfz=$(".dtd-jdtc .jdtc-box .jdtc-nbox .jdtc-nb");
    var TCbf=$(".dtd-jdtc .jdtc-box .jdtc-nbox .jdtc-n .jdtc-nbx");
    var Tchbf=$(".dtd-jdtc .jdtc-box .jdtc-nbox .jdtc-n h3");
    var Tcnbf=$(".dtd-jdtc .jdtc-box .jdtc-nbox .jdtc-n .jdtc-cp");
    function Dt() {
        var Dtk=Tcfz.width();
        TCbf.width(Dtk);
        var Dtkk=Tcn.width();
        Tchbf.width(Dtkk);
        Tcnbf.width(Dtk-Dtkk);
    }
    Dt();
    window.onresize=Dt;
});
// 公司业务轮播
var swiper = new Swiper('.swiper-container', {
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    autoplay : 3000,
    speed:1000,
    loop:true,
    breakpoints: {
        768: {
            slidesPerView: 2
        }
    }
});