"use strict";

var imgSize = 'lg';
var threeDCGData = [{
  title: '角色設計練習',
  tools: 'Maya, PhotoShop',
  imgUrl: ['./images/3dCh01-' + imgSize + '.jpg', './images/3dCh02-' + imgSize + '.jpg', './images/3dCh03-' + imgSize + '.jpg']
}, {
  title: '歐風木屋',
  tools: 'Maya, PhotoShop',
  imgUrl: ['./images/house01-' + imgSize + '.jpg', './images/house02-' + imgSize + '.jpg']
}, {
  title: '安妮公主花園吉祥物',
  tools: 'Maya, PhotoShop',
  imgUrl: ['./images/princess-' + imgSize + '.jpg']
}, {
  title: '音樂廳',
  tools: 'Maya',
  imgUrl: ['./images/concert-' + imgSize + '.jpg']
}, {
  title: '啤酒罐場景',
  tools: 'Maya, PhotoShop',
  imgUrl: ['./images/beer-' + imgSize + '.jpg']
}, {
  title: '世名無動畫-瓢蟲',
  tools: 'Maya, PhotoShop',
  imgUrl: ['./images/ladybird01-' + imgSize + '.jpg', './images/ladybird02-' + imgSize + '.jpg']
}, {
  title: '酒瓶場景',
  tools: 'Maya, PhotoShop',
  imgUrl: ['./images/liqueur01-' + imgSize + '.jpg', './images/liqueur02-' + imgSize + '.jpg', './images/liqueur03-' + imgSize + '.jpg']
}, {
  title: '聖誕節卡片',
  tools: 'Maya',
  imgUrl: ['./images/2018card-' + imgSize + '.jpg']
}];
"use strict";

//檢測螢幕後判斷要使用的螢幕尺寸
function imgSizeFn() {
  var devicePixelRatio = window.devicePixelRatio;
  var mql = window.innerWidth;
  var imgWidth = mql * devicePixelRatio;
  var imgSize = 'lg';

  if (imgWidth >= 1364) {
    imgSize = 'lg';
  } else if (imgWidth >= 656 && imgWidth < 1364) {
    imgSize = 'md';
  } else {
    imgSize = 'sm';
  }

  return imgSize;
}

imgSize = imgSizeFn();
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
        console.log(e.target.className);
        var focus = parseInt(e.target.dataset.order, 10);
        $('.worksHover').eq(focus).css({
          'opacity': '1',
          'visibility': 'visible'
        });
      }, function (e) {
        var focus = parseInt(e.target.dataset.order, 10);
        $('.worksHover').eq(focus).css({
          'opacity': '0',
          'visibility': 'hidden'
        });
      });
      break;

    case '.threeDCG-wrap':
      $('.nav-item').eq(2).css('background-color', '#e2e2e2');
      worksRender(threeDCGData, 'threeDCG');
      expandFn(threeDCGData, 'threeDCG');
      break;
  }

  function worksRender(worksData, wrapName) {
    var row1Str = '';
    var row2Str = '';
    var row1Len = worksData.length / 2 + worksData.length % 2;
    var row2Len = worksData.length / 2;
    var i = 0;

    while (i < row1Len) {
      ++i;
    }

    i = 0;

    while (i < row2Len) {
      ++i;
    }
  }

  function expandFn(worksData, wrapName) {
    console.log(wrapName); //預先載入大圖

    var i = 0;
    var preloadImg = []; //每一項作品裡包含的圖片數

    var worksLen = []; //總圖片數

    var imgLen = 0;

    while (i < worksData.length) {
      worksLen.push(worksData[i].imgUrl.length);
      var n = 0;

      while (n < worksData[i].imgUrl.length) {
        imgLen += 1;
        preloadImg[i] = new Image();
        preloadImg[i].src = worksData[i].imgUrl[n];
        ++n;
      }

      ++i;
    }

    console.log(worksLen);
    console.log(imgLen); //preview的滑入樣式

    $('.worksImg, .' + wrapName + '-wrap button').hover(function (e) {
      var focus = parseInt(e.target.dataset.order, 10);
      console.log(focus);
      $('.worksHover').eq(focus).css({
        'opacity': '1',
        'visibility': 'visible'
      });
    }, function (e) {
      var focus = parseInt(e.target.dataset.order, 10);
      console.log(focus);
      $('.worksHover').eq(focus).css({
        'opacity': '0',
        'visibility': 'hidden'
      });
    }); //取得視窗高度並換算後設置成expand視窗的高度

    function setHeightFn() {
      var getHeight = window.innerHeight;
      var getWidth = window.innerWidth;
      console.log(getWidth);
      console.log(getHeight);

      if (getWidth >= 1364) {
        $('.expand-show').css({
          'height': (getHeight -= 232) + 'px'
        });
      } else if (getWidth >= 656 && getWidth < 1364) {
        $('.expand-show').css({
          'height': (getHeight -= 192) + 'px'
        }); // $('.img-frame').css({'height':'calc(100%-52px)'});
      } else {
        $('.expand-show').css({
          'height': (getHeight -= 178) + 'px'
        });
      }

      $('.img-frame').css({
        'max-height': getHeight
      });
      return getHeight;
    }

    function scrollbarFn(wrapHeight) {
      var imgHeight = $('.img-frame img').height(); //取得不同裝置下的scrollWrapHeight

      var mql = window.innerWidth;
      var scrollWrapHeight = wrapHeight;

      if (mql >= 1364) {
        scrollWrapHeight = wrapHeight;
      } else {
        scrollWrapHeight = wrapHeight - 48;
      }

      console.log(scrollWrapHeight);

      if (scrollWrapHeight < imgHeight) {
        var imgHide = imgHeight - scrollWrapHeight;
        var divide = imgHeight / scrollWrapHeight;
        var scrollBarHeight = Math.floor(scrollWrapHeight / divide);
        $('.scroll-wrap').css('display', 'block');
        $('.scroll-bar').css('height', scrollBarHeight + 'px');
        $('.img-frame').unbind('mousedown touchstart');
        $(window).unbind('mouseup touchend wheel');

        var startFn = function startFn(e) {
          e.preventDefault(); //觸控點大於1就return

          if (e.type == 'touchstart') {
            if (e.touches.length > 1) {
              return;
            }
          } //點擊滾動條當下所記錄的視窗Y座標


          var startY = e.clientY || e.touches[0].clientY; //點擊滾動條當下所記錄的top數值

          var topStr = $('.scroll-bar').css('top');
          var marginTopStr = $('.img-frame img').css('margin-top');
          var top = Math.floor(parseInt(topStr.substring(0, topStr.length - 2), 10));
          var marginTop = Math.floor(parseInt(marginTopStr.substring(0, marginTopStr.length - 2), 10));

          var moveFn = function moveFn(e) {
            //目前游標的視窗Y座標
            var mouseY = e.clientY || e.touches[0].clientY; //滾動條可移動的視窗Y座標範圍

            var minY = startY - top;
            var maxY = minY + (scrollWrapHeight - scrollBarHeight);
            var topOffset = 0;
            var marginOffset = 0;
            console.log(maxY);
            console.log(minY);
            console.log(mouseY);
            console.log(startY);
            console.log(scrollBarHeight);
            console.log(scrollWrapHeight); // if(marginTop>0 || marginTop<-imgHide){return;}

            if (e.target.nodeName == 'IMG') {
              if (mouseY - (mouseY - startY) * 2 > maxY) {
                topOffset = scrollWrapHeight - scrollBarHeight;
                marginOffset = -imgHide;
                return;
              } else if (mouseY - (mouseY - startY) * 2 < minY) {
                return;
              } else {
                topOffset = top - (mouseY - startY);
                marginOffset = marginTop + Math.floor((mouseY - startY) * divide);
              }

              $('.scroll-bar').css({
                //修改後的top值=top+滑鼠偏移量
                'top': topOffset + 'px'
              });
              $('.img-frame img').css('margin-top', marginOffset + 'px');
            } else {
              if (mouseY > maxY) {
                topOffset = scrollWrapHeight - scrollBarHeight;
                marginOffset = -imgHide;
                return;
              } else if (mouseY < minY) {
                return;
              } else {
                topOffset = top + (mouseY - startY);
                marginOffset = marginTop - Math.floor((mouseY - startY) * divide);
              }

              $('.scroll-bar').css({
                'top': topOffset + 'px'
              });
              $('.img-frame img').css('margin-top', marginOffset + 'px');
            }

            console.log(top);
            console.log(marginTop);
          };

          $(window).on('mousemove touchmove', moveFn);
          console.log($(window).on());
        };

        $('.img-frame').on('mousedown touchstart', startFn);
        $(window).on('wheel', function (e) {
          console.log(scrollWrapHeight); //點擊滾動條當下所記錄的top數值

          var topStr = $('.scroll-bar').css('top');
          var marginTopStr = $('.img-frame img').css('margin-top');
          var top = parseInt(topStr.substring(0, topStr.length - 2), 10);
          var marginTop = parseInt(marginTopStr.substring(0, marginTopStr.length - 2), 10);
          var moveMax = scrollWrapHeight - scrollBarHeight;
          var scrollBarOffset = 0;
          console.log(e.originalEvent.deltaY);
          console.log(-moveMax * 0.25);
          console.log(marginTop);

          if (e.originalEvent.deltaY > 0) {
            if (marginTop >= -moveMax * 0.75 * divide && marginTop < 0) {
              scrollBarOffset = -moveMax * 0.25;
            } else {
              marginTop = -moveMax * divide;
              top = moveMax;
            }
          } else if (e.originalEvent.deltaY < 0) {
            if (marginTop <= -moveMax * 0.25 * divide && marginTop > -moveMax) {
              scrollBarOffset = moveMax * 0.25;
            } else {
              marginTop = 0;
              top = 0;
            }
          }

          var marginTopUpdate = marginTop + scrollBarOffset * divide;
          console.log(scrollBarOffset);
          $('.scroll-bar').css({
            'top': top - scrollBarOffset + 'px'
          });
          $('.img-frame img').css('margin-top', marginTopUpdate + 'px');
        });
        $(window).on('mouseup touchend', function () {
          $(window).unbind('mousemove touchmove');
        });
      } else {
        $('.scroll-wrap').css('display', '');
      }
    }

    function previewFn(workNum, imgNum, worksLen, imgLen) {
      //prevew陣列中所有內容的left數值(css)
      var previewOffset = [];
      var mql = window.innerWidth;
      var len = worksData.length;
      var i = 0; //preview陣列中第一件的left數值(css)

      var basicOffset = 0; //每件作品在版面上的寬度

      var offset = 0;

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

      while (i < imgLen) {
        previewOffset.push(basicOffset - offset * i);
        ++i;
      }

      console.log(workNum, imgNum, worksLen[workNum]);
      var previewIndex = 0;
      i = 0;

      if (imgNum == worksLen[workNum] - 1) {
        console.log('hey');

        while (i <= workNum) {
          previewIndex += worksLen[i];
          ++i;
        }

        previewIndex -= 1;
      } else {
        console.log('man');

        while (i < workNum) {
          previewIndex += worksLen[i];
          ++i;
        }

        previewIndex -= 1;

        if (workNum == 0) {
          previewIndex = imgNum;
        } else {
          previewIndex += imgNum + 1;
        }
      }

      console.log(previewIndex);

      if (workNum == 0 && imgNum == 0) {
        $('.prev-btn').css({
          'background-image': 'url("./images/leftArrowLight.svg")'
        });
        $('.next-btn').css({
          'background-image': ''
        });
      } else if (workNum == worksLen.length - 1 && imgNum == worksLen[worksLen.length - 1] - 1) {
        $('.prev-btn').css({
          'background-image': ''
        });
        $('.next-btn').css({
          'background-image': 'url("./images/rightArrowLight.svg")'
        });
      } else {
        $('.prev-btn, .next-btn').css({
          'background-image': ''
        });
      }

      console.log($('.slide-works button').eq(1));
      $('.slide-works button').eq(previewIndex).css({
        'outline': '3px solid #7a7a7a',
        'opacity': '1'
      });
      $('.slide-works').css({
        'left': previewOffset[previewIndex] + 'px'
      });
    } //打開expand視窗所執行的函式


    function openExpandFn(e) {
      var nodeName = e.target.nodeName;
      var workNum = parseInt(e.target.dataset.order, 10);
      var imgNum = 0; //判斷頁面來決定點擊的有效區域

      var mql = window.innerWidth;

      if (mql >= 1364 && nodeName == 'BUTTON' || mql < 1364 && nodeName == 'IMG') {
        console.log('match');
        $('.expand-wrap').css({
          'visibility': 'visible',
          'opacity': '1'
        });
      } else {
        return;
      } //作品置入到頁面


      var frameStr = '<div class="img-center"><img src="' + worksData[workNum].imgUrl[0] + '" alt="' + worksData[workNum].title + '">' + '<div class="scroll-wrap"><div class="scroll-bar">' + '</div></div><div class="img-status"></div></div></div><div class="img-status"></div>';
      var statusStr = '<h3>' + worksData[workNum].title + '</h3><h4>' + worksData[workNum].tools + '</h4>'; //圖片按鈕置入到slide-works

      var slideStr = '';
      var i = 0;

      while (i < worksData.length) {
        var _n = 0;

        while (_n < worksData[i].imgUrl.length) {
          slideStr += "<button style='" + 'background-image:url("' + worksData[i].imgUrl[_n] + '")' + "'data-work = '" + i + "' data-img = '" + _n + "'></button>";
          ++_n;
        }

        ++i;
      }

      console.log(workNum, imgNum); //將組好的字串帶入html

      $('.img-frame').html(frameStr);
      $('.img-frame > .img-status').html(statusStr);
      $('.img-center > .img-status').html(statusStr);
      $('.slide-works').html(slideStr); //點擊預覽(preview)圖片

      $('.slide-works button').click(function (e) {
        var workNum = parseInt(e.target.dataset.work, 10);
        var imgNum = parseInt(e.target.dataset.img, 10);
        console.log(workNum);
        console.log(imgNum);
        resetFn();
        previewFn(workNum, imgNum, worksLen, imgLen);
        JSON.stringify(sessionStorage.setItem('workNum', workNum));
        JSON.stringify(sessionStorage.setItem('imgNum', imgNum));
        lgFn(workNum, imgNum);
      }); //計算預覽(preview)圖片的left值

      previewFn(workNum, imgNum, worksLen, imgLen);
      $(window).resize(function () {
        var workNum = JSON.parse(sessionStorage.getItem('workNum'));
        var imgNum = JSON.parse(sessionStorage.getItem('imgNum'));
        previewFn(workNum, imgNum, worksLen, imgLen);
      });
      var offsetTop = $(window).scrollTop();
      $('body').css({
        'position': 'fixed',
        'top': -offsetTop + 'px',
        'width': '100%',
        'overflow-y': 'scroll'
      });
      $('.slide-works').css('transition', 'all 0.6s ease-out');
      setHeightFn(); //取得高度並處理expand視窗的scrollbar

      $('.img-frame img').on('load', function () {
        scrollbarFn(setHeightFn());
        $(window).resize(function () {
          $('.scroll-bar').css('top', '0');
          $('.img-frame img').css('margin-top', '0');
          scrollbarFn(setHeightFn());
        });
      });
      JSON.stringify(sessionStorage.setItem('workNum', workNum));
      JSON.stringify(sessionStorage.setItem('imgNum', imgNum));
    } //關閉放大(expand)視窗


    function closeExpandFn(e) {
      var nodeName = e.target.nodeName;
      var className = e.target.className;
      console.log(nodeName);

      if (className != 'close-btn') {
        return;
      }

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
      $('.slide-works').css('transition', '');
      $(window).scrollTop(offsetTop);
    } //切算預覽(preview)圖片


    function switchFn(e) {
      //目前位於版面最左邊的作品在preview中的位置
      var workNum = JSON.parse(sessionStorage.getItem('workNum'));
      var imgNum = JSON.parse(sessionStorage.getItem('imgNum'));
      var currentBtn = e.target.className;
      $(window).unbind('resize');
      $(window).resize(function () {
        previewFn(workNum, imgNum, worksLen, imgLen);
      });

      if (currentBtn == 'prev-btn' && workNum == 0 && imgNum == 0) {
        return;
      } else if (currentBtn == 'next-btn' && workNum == worksLen.length - 1 && imgNum == worksLen[worksLen.length - 1] - 1) {
        return;
      }

      resetFn();
      console.log(workNum, imgNum, worksLen[workNum]);

      if (currentBtn == 'prev-btn') {
        if (imgNum == 0 && workNum != 0) {
          workNum -= 1;
          imgNum = worksLen[workNum] - 1;
        } else if (imgNum > 0) {
          imgNum -= 1;
        }
      } else if (currentBtn == 'next-btn') {
        if (imgNum == worksLen[workNum] - 1 && workNum != worksLen.length - 1) {
          workNum += 1;
          imgNum = 0;
        } else {
          imgNum += 1;
        }
      }

      console.log(workNum, imgNum, worksLen[workNum]);
      resetFn();
      previewFn(workNum, imgNum, worksLen, imgLen);
      JSON.stringify(sessionStorage.setItem('workNum', workNum));
      JSON.stringify(sessionStorage.setItem('imgNum', imgNum));
      lgFn(workNum, imgNum);
    } //將選中的預覽(preview)圖片的樣式回復成沒有選中


    function resetFn() {
      $('.slide-works button').css({
        'outline': '',
        'opacity': ''
      });
      $('.scroll-bar').css('top', '0');
      $('.img-frame img').css('margin-top', '0');
    }

    function lgFn(workNum, imgNum) {
      $('.img-frame img').attr('src', worksData[workNum].imgUrl[imgNum]);
      $('.img-status h3').text(worksData[workNum].title);
      $('.img-status h4').text(worksData[workNum].tools);
    }

    $('.' + wrapName + '-wrap .row').eq(1).click(openExpandFn);
    $('.close-btn, .expand-wrap').click(closeExpandFn);
    $('.prev-btn, .next-btn').click(switchFn);
  }
});
//# sourceMappingURL=all.js.map
