"use strict";

$(document).ready(function () {
  var allPage = ['#index-nav', '.intro-aboutme-wrap', '.website-wrap', '.threeDCG-wrap'];
  var thisPage = '';
  var i = 0; //抓取目前所在頁面

  while (i < 4) {
    if ($(allPage[i]).length > 0) {
      thisPage = allPage[i];
    }

    i++;
  } //將目前所在頁面帶入，執行符合的case內的語法(使用switch節省效能)


  switch (thisPage) {
    case '#index-nav':
      var fadeInOffset = $('.fade-in').eq(0).offset().top;
      var fadeInHeight = $('.fade-in').height();
      var windowHeight = $(window).height();

      if (windowHeight >= fadeInOffset + fadeInHeight / 2) {
        $('.fade-in').css('opacity', '1');
      }

      $('#scrollTo').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        console.log(targetPos);
        $('html, body').animate({
          scrollTop: targetPos
        }, 1000);
      });

      var navbarFn = function navbarFn() {
        var getScroll = $(window).scrollTop();
        var mqlLg = window.innerWidth;
        console.log(getScroll, mqlLg);

        if (getScroll > 0 && mqlLg >= 1364) {
          $('.navbar-wrap').css({
            'padding-top': '8px',
            'background-color': '#ECECEC',
            '-webkit-box-shadow': '0px 3px 6px rgba(0,0,0,0.16)',
            'box-shadow': '0px 3px 6px rgba(0,0,0,0.16)'
          });
          $('.ramdom-btn').css({
            'background-color': '#34D29B',
            'color': '#fff',
            '-webkit-box-shadow': '0px 0px 0px',
            'box-shadow': '0px 0px 0px'
          });
        } else if (getScroll == 0 || mqlLg < 1364) {
          $('.navbar-wrap').css({
            'padding-top': '',
            'background-color': '',
            '-webkit-box-shadow': '',
            'box-shadow': ''
          });
          $('.ramdom-btn').css({
            'background-color': '',
            'color': '',
            '-webkit-box-shadow': '',
            'box-shadow': ''
          });
        }

        $('#bg-animated').css('background-position-y', getScroll / 2.5 + 25 + 'px');
        var status = true;
        console.log(getScroll + $(window).height());
        console.log(fadeInOffset);

        if (getScroll + windowHeight >= fadeInOffset + fadeInHeight / 2 && status) {
          $('.fade-in').css('opacity', '1');
          status = false;
        }
      };

      navbarFn();
      $(window).scroll(navbarFn);
      $(window).resize(navbarFn);
      $('.ramdom-btn').hover(function () {
        var getScroll = $(window).scrollTop();
        var mqlLg = window.innerWidth;
        console.log(getScroll);

        if (getScroll > 0 && mqlLg >= 1364) {
          $(this).css({
            'background-color': 'rgba(52,210,155,0.7)'
          });
        }
      }, function () {
        var getScroll = $(window).scrollTop();
        var mqlLg = window.innerWidth;

        if (getScroll > 0 && mqlLg >= 1364) {
          $(this).css({
            'background-color': '#34D29B'
          });
        }
      });
      break;

    case '.intro-aboutme-wrap':
      $('.nav-item').eq(0).css('background-color', '#e2e2e2');

      var bubbleScrollFn = function bubbleScrollFn() {
        var getScroll = $(window).scrollTop();
        var mqlLg = window.innerWidth;
        console.log(mqlLg);

        if (mqlLg >= 1364) {
          $('.skill-wrap').css({
            'background-position-y': -getScroll / 6 + 200 + 'px,' + (-getScroll / 2.5 + 400) + 'px,' + (-getScroll / 4 + 250) + 'px,' + (-getScroll / 5 + 300) + 'px,' + (-getScroll / 1 + 600) + 'px,' + (-getScroll / 1.5 + 500) + 'px,0px'
          });
        } else if (656 <= mqlLg && mqlLg < 1364) {
          console.log(mqlLg);
          $('.skill-wrap').css({
            'background-position-y': -getScroll / 6 + 200 + 'px,' + (-getScroll / 2.5 + 400) + 'px,' + (-getScroll / 2 + 500) + 'px,' + (-getScroll / 1.5 + 600) + 'px,0px'
          });
        } else if (mqlLg < 656) {
          $('.skill-wrap').css({
            'background-position-y': -getScroll / 5 + 200 + 'px,' + (-getScroll / 4.5 + 250) + 'px,' + (-getScroll / 4 + 300) + 'px,' + (-getScroll / 2.5 + 600) + 'px,' + (-getScroll / 2 + 650) + 'px,' + (-getScroll / 1.7 + 700) + 'px,0px'
          });
        } else {
          $('.skill-wrap').css('background-position-y', '0px');
        }
      };

      bubbleScrollFn();
      $(window).scroll(bubbleScrollFn);
      $(window).resize(bubbleScrollFn);
      break;

    case '.website-wrap':
      $('.nav-item').eq(1).css('background-color', '#e2e2e2');
      console.log($('.worksImg, .worksHover a').eq(3));
      $('.worksImg, .worksHover a').hover(function (e) {
        var focus = parseInt(e.target.dataset.order);
        console.log(focus);
        $('.worksHover').eq(focus).css({
          'opacity': '1',
          'visibility': 'visible'
        });
      }, function (e) {
        var focus = parseInt(e.target.dataset.order);
        console.log(focus);
        $('.worksHover').eq(focus).css({
          'opacity': '0',
          'visibility': 'hidden'
        });
      });
      break;

    case '.threeDCG-wrap':
      $('.nav-item').eq(2).css('background-color', '#e2e2e2');
      $('.worksImg, .threeDCG-wrap button').hover(function (e) {
        var focus = parseInt(e.target.dataset.order);
        console.log(focus);
        $('.worksHover').eq(focus).css({
          'opacity': '1',
          'visibility': 'visible'
        });
      }, function (e) {
        var focus = parseInt(e.target.dataset.order);
        console.log(focus);
        $('.worksHover').eq(focus).css({
          'opacity': '0',
          'visibility': 'hidden'
        });
      }); //取得視窗高度並換算後設置成expand視窗的高度

      var getHeightFn = function getHeightFn() {
        var getHeight = window.innerHeight;
        $('.expand-show').css('height', getHeight - 264 + 'px');
      };

      getHeightFn();
      $(window).resize(getHeightFn);

      var previewFn = function previewFn(num) {
        //prevew陣列中所有內容的left數值(css)
        var threeDCGPreviewOffset = [];
        var i = 0;
        var mql = window.innerWidth;
        var len = threeDCGPreview.length;
        console.log(mql); //preview陣列中第一件的left數值(css)

        var basicOffset = 0; //每件作品在版面上的寬度

        var offset = 0; //在preview版面上顯示的作品數量(實際上看的見的)

        var showNum = 0;

        if (mql >= 1364) {
          basicOffset = 95;
          offset = 222;
        } else if (mql >= 656 && mql < 1364) {
          basicOffset = 88;
          offset = 104;
        } else {
          basicOffset = 50;
          offset = 100;
        }

        while (i < len) {
          threeDCGPreviewOffset.push(basicOffset - offset * i);
          ++i;
        }

        if (num == 0) {
          $('.prev-btn').css({
            'background-image': 'url("../images/leftArrowLight.svg")'
          });
          $('.next-btn').css({
            'background-image': ''
          });
        } else if (num >= len - showNum) {
          $('.prev-btn').css({
            'background-image': ''
          });
          $('.next-btn').css({
            'background-image': 'url("../images/rightArrowLight.svg")'
          });
        } else {
          $('.prev-btn, .next-btn').css({
            'background-image': ''
          });
        }

        console.log($('.slide-works button').eq(1));
        $('.slide-works button').eq(num).css({
          'outline': '3px solid #7a7a7a',
          'opacity': '1'
        });
        $('.slide-works').css({
          'left': threeDCGPreviewOffset[num] + 'px'
        });
      }; //打開expand視窗所執行的函式


      var openExpandFn = function openExpandFn(e) {
        var nodeName = e.target.nodeName;
        var targetNum = parseInt(e.target.dataset.order);
        var mql = window.innerWidth;
        var frameStr = '<img src="' + threeDCGLarge[targetNum].imgUrl[0] + '" alt="' + threeDCGLarge[targetNum].title + '">' + '<div class="img-status"></div>';

        if (mql >= 1364 && nodeName == 'BUTTON' || mql < 1364 && nodeName == 'IMG') {
          console.log('match');
          $('.expand-wrap').css({
            'visibility': 'visible',
            'opacity': '1'
          });
        } else {
          return;
        } //取得large每個項目裡的第一張圖在preview中的位置


        var lgInPreviewNum = [];
        var i = 0;
        var PosNum = 0;

        while (i < threeDCGLarge.length) {
          if (i == 0) {
            lgInPreviewNum.push(0);
          } else {
            PosNum += 0 + threeDCGLarge[i - 1].imgUrl.length;
            lgInPreviewNum.push(PosNum);
          }

          ++i;
        }

        var slideStr = '';
        i = 0;

        while (i < threeDCGPreview.length) {
          slideStr += "<button style='" + 'background-image:url(".' + threeDCGPreview[i] + '")' + "'></button>";
          ++i;
        }

        $('.img-frame').html(frameStr);
        $('.slide-works').html(slideStr);
        previewFn(lgInPreviewNum[targetNum]);
        $(window).resize(function () {
          previewFn(lgInPreviewNum[targetNum]);
        });
        var offsetTop = $(window).scrollTop();
        $('body').css({
          'position': 'fixed',
          'top': -offsetTop + 'px',
          'width': '100%',
          'overflow-y': 'scroll'
        });
        JSON.stringify(sessionStorage.setItem('targetPreviewNum', lgInPreviewNum[targetNum]));
      };

      var closeExpandFn = function closeExpandFn() {
        $('.expand-wrap').css({
          'visibility': 'hidden',
          'opacity': '0'
        });
        var str = $('body').css('top');
        console.log(str);
        var strLen = str.length;
        console.log(strLen);
        var offsetTop = parseInt(str.substring(1, strLen - 2)) || 0;
        console.log(offsetTop);
        $('body').css({
          'position': '',
          'top': '',
          'width': '',
          'overflow-y': ''
        });
        $(window).scrollTop(offsetTop);
      };

      var switchFn = function switchFn(e) {
        //目前位於版面最左邊的作品在threeDCGPreview中的位置
        var targetPreviewNum = JSON.parse(sessionStorage.getItem('targetPreviewNum'));
        var currentBtn = e.target.className;
        console.log(currentBtn);

        if (currentBtn == 'prev-btn' && targetPreviewNum != 0) {
          previewFn(targetPreviewNum - 1);
          $('.slide-works button').eq(targetPreviewNum).css({
            'outline': '',
            'opacity': ''
          });
        }
      };

      $('.threeDCG-wrap .row').eq(1).click(openExpandFn);
      $('.close-btn').click(closeExpandFn);
      $('.prev-btn, .next-btn').click(switchFn);
      $('.slide-works button').click();
      break;
  }
});
"use strict";

var threeDCGLarge = [{
  title: '角色設計練習',
  tools: 'Maya,&nbsp;PhotoShop',
  imgUrl: ['./images/3dCh01-lg.jpg', './images/3dCh02-lg.jpg', './images/3dCh03-lg.jpg']
}, {
  title: '歐風木屋',
  tools: 'Maya,&nbsp;PhotoShop',
  imgUrl: ['./images/house01-lg.jpg', './images/house02-lg.jpg']
}, {
  title: '安妮公主花園吉祥物',
  tools: 'Maya,&nbsp;PhotoShop',
  imgUrl: ['./images/princess-lg.jpg']
}, {
  title: '音樂廳',
  tools: 'Maya',
  imgUrl: ['./images/concert-lg.jpg']
}, {
  title: '啤酒罐場景',
  tools: 'Maya,&nbsp;PhotoShop',
  imgUrl: ['./images/beer-lg.jpg']
}, {
  title: '世名無動畫-瓢蟲',
  tools: 'Maya,&nbsp;PhotoShop',
  imgUrl: ['./images/ladybird01-lg.jpg', './images/ladybird02-lg.jpg']
}, {
  title: '酒瓶場景',
  tools: 'Maya,&nbsp;PhotoShop',
  imgUrl: ['./images/liqueur01-lg.jpg', './images/liqueur02-lg.jpg', './images/liqueur03-lg.jpg']
}, {
  title: '聖誕節卡片',
  tools: 'Maya',
  imgUrl: ['./images/2018card-lg.jpg']
}];
var threeDCGPreview = ['./images/3dCh01-preview.jpg', './images/3dCh02-preview.jpg', './images/3dCh03-preview.jpg', './images/house01-preview.jpg', './images/house02-preview.jpg', './images/princess-preview.jpg', './images/concert-preview.jpg', './images/beer-preview.jpg', './images/ladybird01-preview.jpg', './images/ladybird02-preview.jpg', './images/liqueur01-preview.jpg', './images/liqueur02-preview.jpg', './images/liqueur03-preview.jpg', './images/2018card-preview.jpg'];
//# sourceMappingURL=all.js.map
