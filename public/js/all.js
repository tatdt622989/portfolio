"use strict";

$(document).ready(function () {
  var allPage = ['#index-nav', '.intro-aboutme-wrap', '.website-wrap', '.threedcg-wrap'];
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
      var getScroll = $(window).scrollTop();
      var mqlLg = window.innerWidth;
      var fadeInOffset = $('.fade-in').eq(0).offset().top;
      var fadeInHeight = $('.fade-in').height();
      var windowHeight = $(window).height();
      console.log(this);

      if (windowHeight >= fadeInOffset + fadeInHeight / 2) {
        $('.fade-in').css('opacity', '1');
      }

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
      $(window).scroll(function () {
        var getScroll = $(this).scrollTop();
        var mqlLg = this.innerWidth;
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
      });
      $(window).resize(function () {
        var getScroll = $(this).scrollTop();
        var mqlLg = this.innerWidth;
        console.log(mqlLg);

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

        var fadeInOffset = $('.fade-in').eq(0).offset().top;
        var fadeInHeight = $('.fade-in').height();
        var windowHeight = $(window).height();

        if (windowHeight >= fadeInOffset + fadeInHeight / 2) {
          $('.fade-in').css('opacity', '1');
        }
      });
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
      $(window).scroll(function () {
        var getScroll = $(this).scrollTop();
        var mqlLg = this.innerWidth;
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
      });
      $(window).resize(function () {
        var getScroll = $(this).scrollTop();
        var mqlLg = this.innerWidth;
        console.log(getScroll);
        console.log(mqlLg);

        if (mqlLg >= 1364) {
          $('.skill-wrap').css({
            'background-position-y': -getScroll / 6 + 200 + 'px,' + (-getScroll / 2.5 + 400) + 'px,' + (-getScroll / 4 + 250) + 'px,' + (-getScroll / 5 + 300) + 'px,' + (-getScroll / 1 + 600) + 'px,' + (-getScroll / 1.5 + 500) + 'px,0px'
          });
        } else if (656 <= mqlLg && mqlLg < 1364) {
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
      });
      break;

    case '.website-wrap':
      $('.nav-item').eq(1).css('background-color', '#e2e2e2');
      console.log($('.worksImg, .worksHover a').eq(3));
      $('.worksImg, .worksHover a').hover(function (e) {
        var focus = parseInt(e.target.dataset.hover);
        console.log(focus);
        $('.worksHover').eq(focus).css({
          'opacity': '1',
          'visibility': 'visible'
        });
      }, function (e) {
        var focus = parseInt(e.target.dataset.hover);
        console.log(focus);
        $('.worksHover').eq(focus).css({
          'opacity': '0',
          'visibility': 'hidden'
        });
      });
      break;

    case '.threedcg-wrap':
      $('.nav-item').eq(2).css('background-color', '#e2e2e2');
      $('.worksImg, .threedcg-wrap button').hover(function (e) {
        var focus = parseInt(e.target.dataset.hover);
        console.log(focus);
        $('.worksHover').eq(focus).css({
          'opacity': '1',
          'visibility': 'visible'
        });
      }, function (e) {
        var focus = parseInt(e.target.dataset.hover);
        console.log(focus);
        $('.worksHover').eq(focus).css({
          'opacity': '0',
          'visibility': 'hidden'
        });
      });
      break;
  }
});
//# sourceMappingURL=all.js.map
