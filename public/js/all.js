"use strict";$(document).ready(function(){for(var o=["#index-nav",".intro-aboutme-wrap",".website-wrap"],s="",a=0;a<3;)0<$(o[a]).length&&(s=o[a]),a++;switch(s){case"#index-nav":var p=$(this).scrollTop(),r=this.innerWidth,i=$(".fade-in").eq(0).offset().top,n=$(".fade-in").height(),t=$(window).height();i+n/2<=t&&$(".fade-in").css("opacity","1"),0<p&&1364<=r&&($(".navbar-wrap").css({"padding-top":"8px","background-color":"#ECECEC","-webkit-box-shadow":"0px 3px 6px rgba(0,0,0,0.16)","box-shadow":"0px 3px 6px rgba(0,0,0,0.16)"}),$(".ramdom-btn").css({"background-color":"#34D29B",color:"#fff","-webkit-box-shadow":"0px 0px 0px","box-shadow":"0px 0px 0px"})),$("#scrollTo").click(function(o){o.preventDefault();var s=$(this).attr("href"),a=$(s).offset().top;$("html, body").animate({scrollTop:a},1e3)}),$(window).scroll(function(){var o=$(this).scrollTop(),s=this.innerWidth;0<o&&1364<=s?($(".navbar-wrap").css({"padding-top":"8px","background-color":"#ECECEC","-webkit-box-shadow":"0px 3px 6px rgba(0,0,0,0.16)","box-shadow":"0px 3px 6px rgba(0,0,0,0.16)"}),$(".ramdom-btn").css({"background-color":"#34D29B",color:"#fff","-webkit-box-shadow":"0px 0px 0px","box-shadow":"0px 0px 0px"})):(0==o||s<1364)&&($(".navbar-wrap").css({"padding-top":"","background-color":"","-webkit-box-shadow":"","box-shadow":""}),$(".ramdom-btn").css({"background-color":"",color:"","-webkit-box-shadow":"","box-shadow":""})),$("#bg-animated").css("background-position-y",o/2.5+25+"px");var a=!0;i+n/2<=o+t&&a&&($(".fade-in").css("opacity","1"),a=!1)}),$(window).resize(function(){var o=$(this).scrollTop(),s=this.innerWidth;0<o&&1364<=s?($(".navbar-wrap").css({"padding-top":"8px","background-color":"#ECECEC","-webkit-box-shadow":"0px 3px 6px rgba(0,0,0,0.16)","box-shadow":"0px 3px 6px rgba(0,0,0,0.16)"}),$(".ramdom-btn").css({"background-color":"#34D29B",color:"#fff","-webkit-box-shadow":"0px 0px 0px","box-shadow":"0px 0px 0px"})):(0==o||s<1364)&&($(".navbar-wrap").css({"padding-top":"","background-color":"","-webkit-box-shadow":"","box-shadow":""}),$(".ramdom-btn").css({"background-color":"",color:"","-webkit-box-shadow":"","box-shadow":""})),$(".fade-in").eq(0).offset().top+$(".fade-in").height()/2<=$(window).height()&&$(".fade-in").css("opacity","1")}),$(".ramdom-btn").hover(function(){var o=$(window).scrollTop(),s=this.innerWidth;0<o&&1364<=s&&$(this).css({"background-color":"rgba(52,210,155,0.7)"})},function(){var o=$(window).scrollTop(),s=this.innerWidth;0<o&&1364<=s&&$(this).css({"background-color":"#34D29B"})});break;case".intro-aboutme-wrap":$(".nav-item").eq(0).css("background-color","#e2e2e2"),$(window).scroll(function(){var o=$(this).scrollTop(),s=this.innerWidth;1364<=s?$(".skill-wrap").css({"background-position-y":-o/6+200+"px,"+(-o/2.5+400)+"px,"+(-o/4+250)+"px,"+(-o/5+300)+"px,"+(-o/1+600)+"px,"+(-o/1.5+500)+"px,0px"}):656<=s&&s<1364?$(".skill-wrap").css({"background-position-y":-o/6+200+"px,"+(-o/2.5+400)+"px,"+(-o/2+500)+"px,"+(-o/1.5+600)+"px,0px"}):s<656?$(".skill-wrap").css({"background-position-y":-o/5+200+"px,"+(-o/4.5+250)+"px,"+(-o/4+300)+"px,"+(-o/2.5+600)+"px,"+(-o/2+650)+"px,"+(-o/1.7+700)+"px,0px"}):$(".skill-wrap").css("background-position-y","0px")}),$(window).resize(function(){var o=$(this).scrollTop(),s=this.innerWidth;1364<=s?$(".skill-wrap").css({"background-position-y":-o/6+200+"px,"+(-o/2.5+400)+"px,"+(-o/4+250)+"px,"+(-o/5+300)+"px,"+(-o/1+600)+"px,"+(-o/1.5+500)+"px,0px"}):656<=s&&s<1364?$(".skill-wrap").css({"background-position-y":-o/6+200+"px,"+(-o/2.5+400)+"px,"+(-o/2+500)+"px,"+(-o/1.5+600)+"px,0px"}):s<656?$(".skill-wrap").css({"background-position-y":-o/5+200+"px,"+(-o/4.5+250)+"px,"+(-o/4+300)+"px,"+(-o/2.5+600)+"px,"+(-o/2+650)+"px,"+(-o/1.7+700)+"px,0px"}):$(".skill-wrap").css("background-position-y","0px")});break;case".website-wrap":$(".nav-item").eq(1).css("background-color","#e2e2e2"),$(".worksImg, .worksHover a").hover(function(o){var s=parseInt(o.target.dataset.hover);$(".worksHover").eq(s).css({opacity:"1",visibility:"visible"})},function(o){var s=parseInt(o.target.dataset.hover);$(".worksHover").eq(s).css({opacity:"0",visibility:"hidden"})})}});
//# sourceMappingURL=all.js.map
